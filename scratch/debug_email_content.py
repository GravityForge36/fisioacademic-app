import urllib.request
import json
import random
import string
import time

def random_string(length=10):
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=length))

def make_request(url, method="GET", data=None, headers=None):
    if headers is None:
        headers = {}
    if data is not None:
        if isinstance(data, (dict, list)):
            data = json.dumps(data).encode('utf-8')
            headers['Content-Type'] = 'application/json'
    
    req = urllib.request.Request(url, method=method, data=data, headers=headers)
    try:
        with urllib.request.urlopen(req) as res:
            if res.status in (200, 201):
                content = res.read().decode('utf-8')
                try:
                    return json.loads(content)
                except ValueError:
                    return content
    except Exception as e:
        print(f"Request failed: {e}")
        return None

# Get domain
domains_res = make_request("https://api.mail.tm/domains")
domain = domains_res["hydra:member"][0]["domain"]
username = "fisio_" + random_string(8)
email = f"{username}@{domain}"
password = random_string(12)

# Create account
make_request("https://api.mail.tm/accounts", method="POST", data={"address": email, "password": password})

# Register with kvdb.io
req_data = f"email={email}".encode('utf-8')
req = urllib.request.Request("https://kvdb.io", method="POST", data=req_data)
urllib.request.urlopen(req).read()

# Get token
token_res = make_request("https://api.mail.tm/token", method="POST", data={"address": email, "password": password})
token = token_res["token"]
headers = {"Authorization": f"Bearer {token}"}

# Wait for mail
for i in range(10):
    time.sleep(5)
    messages_res = make_request("https://api.mail.tm/messages", headers=headers)
    if messages_res and messages_res.get("hydra:member"):
        msg_id = messages_res["hydra:member"][0]["id"]
        msg_detail = make_request(f"https://api.mail.tm/messages/{msg_id}", headers=headers)
        if msg_detail:
            print("=== EMAIL SUBJECT ===")
            print(msg_detail.get("subject"))
            print("=== HTML CONTENT ===")
            print(msg_detail.get("html"))
            print("=== TEXT CONTENT ===")
            print(msg_detail.get("text"))
            break
