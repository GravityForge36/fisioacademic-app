import urllib.request
import json
import random
import string
import time
import re

def random_string(length=10):
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=length))

def make_request(url, method="GET", data=None, headers=None):
    if headers is None:
        headers = {}
    if data is not None:
        if isinstance(data, (dict, list)):
            data = json.dumps(data).encode('utf-8')
            headers['Content-Type'] = 'application/json'
        elif isinstance(data, str):
            data = data.encode('utf-8')
    
    req = urllib.request.Request(url, method=method, data=data, headers=headers)
    try:
        with urllib.request.urlopen(req) as res:
            if res.status in (200, 201):
                content = res.read().decode('utf-8')
                try:
                    return json.loads(content)
                except ValueError:
                    return content
            else:
                print(f"Error {res.status}: {res.read().decode('utf-8')}")
                return None
    except Exception as e:
        print(f"Exception requesting {url}: {e}")
        if hasattr(e, 'read'):
            print(f"Response error content: {e.read().decode('utf-8')}")
        return None

# 1. Obter domínios do mail.tm
print("Obtendo domínios...")
domains_res = make_request("https://api.mail.tm/domains")
if not domains_res or not domains_res.get("hydra:member"):
    print("Falha ao obter domínios.")
    exit(1)

domain = domains_res["hydra:member"][0]["domain"]
username = "fisio_" + random_string(8)
email = f"{username}@{domain}"
password = random_string(12)

print(f"Criando conta de e-mail temporária: {email}")

# 2. Criar conta no mail.tm
account_data = {
    "address": email,
    "password": password
}
account_res = make_request("https://api.mail.tm/accounts", method="POST", data=account_data)
if not account_res:
    print("Falha ao criar conta de e-mail.")
    exit(1)

# 3. Solicitar criação de balde no kvdb.io
print("Registrando balde no kvdb.io...")
kvdb_req_data = f"email={email}"
req = urllib.request.Request("https://kvdb.io", method="POST", data=kvdb_req_data.encode('utf-8'))
bucket_id = None
try:
    with urllib.request.urlopen(req) as res:
        bucket_id = res.read().decode('utf-8').strip()
        print(f"Balde criado no kvdb.io com ID: {bucket_id}")
except Exception as e:
    print(f"Erro ao criar balde no kvdb.io: {e}")
    if hasattr(e, 'read'):
        print(f"Conteúdo de erro do kvdb.io: {e.read().decode('utf-8')}")
    exit(1)

# 4. Obter token do mail.tm
print("Obtendo token de e-mail...")
token_res = make_request("https://api.mail.tm/token", method="POST", data={"address": email, "password": password})
if not token_res or not token_res.get("token"):
    print("Falha ao obter token.")
    exit(1)

token = token_res["token"]
headers = {"Authorization": f"Bearer {token}"}

# 5. Polling para receber e-mail de ativação do kvdb.io
print("Aguardando e-mail de confirmação do kvdb.io (pode levar até 1 minuto)...")
activation_url = None
for i in range(20):
    time.sleep(5)
    messages_res = make_request("https://api.mail.tm/messages", headers=headers)
    if messages_res and messages_res.get("hydra:member"):
        msg_id = messages_res["hydra:member"][0]["id"]
        msg_detail = make_request(f"https://api.mail.tm/messages/{msg_id}", headers=headers)
        if msg_detail:
            html_content = msg_detail.get("html", "")
            text_content = msg_detail.get("text", "")
            
            # Garantir formato string
            if isinstance(html_content, list):
                html_content = "".join(html_content)
            if isinstance(text_content, list):
                text_content = "".join(text_content)
                
            combined = html_content + "\n" + text_content
            
            # Expressão regular para encontrar links do kvdb.io/login
            links = re.findall(r'https://kvdb\.io/login[a-zA-Z0-9_\-\./\?&=]+', combined)
            if links:
                activation_url = links[0]
                print(f"Link de ativação encontrado: {activation_url}")
                break
    print(f"Ainda aguardando... ({i+1}/20)")

if not activation_url:
    print("E-mail de ativação não recebido.")
    exit(1)

# 6. Acessar o link de ativação para verificar a conta
print("Ativando balde no kvdb.io...")
req = urllib.request.Request(activation_url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as res:
        print("Ativação enviada com sucesso!")
except Exception as e:
    print(f"Erro ao acessar link de ativação: {e}")

# 7. Testar escrita no balde verificado
print("Testando escrita no balde...")
test_url = f"https://kvdb.io/{bucket_id}/test_key"
req = urllib.request.Request(test_url, method="POST", data="hello_world".encode('utf-8'))
try:
    with urllib.request.urlopen(req) as res:
        if res.status in (200, 201):
            print(f"=== SUCESSO ABSOLUTO! BALDE CRIADO E VERIFICADO! ===")
            print(f"BUCKET_ID: {bucket_id}")
            with open("bucket_config.json", "w") as f:
                json.dump({"bucket_id": bucket_id}, f)
        else:
            print(f"Falha na escrita do teste: {res.status}")
except Exception as e:
    print(f"Erro ao testar escrita no balde verificado: {e}")
