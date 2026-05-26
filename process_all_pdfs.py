import os
import sys
import subprocess
import unicodedata

workspace_dir = r"C:\Users\Robson Silva\.gemini\antigravity\scratch\fisioterapia-study-app"
matriz_dir = os.path.join(workspace_dir, "MATRIZ CURRICULAR")
extract_script = os.path.join(workspace_dir, "extract_full_pdf.py")

# Destinos
out_dirs = [
    os.path.join(workspace_dir, "materials"),
    os.path.join(workspace_dir, "dist_web", "materials")
]

# Certificar que os diretórios de saída existem
for out_dir in out_dirs:
    os.makedirs(out_dir, exist_ok=True)

# Mapeamento dinâmico por semestre (1 a 10) com palavras-chave em minúsculas sem acentos
mappings = {
    1: {
        "biosseguranca": "s1_biosseguranca",
        "epidemiologia": "s1_epidemiologia",
        "integral em saude": "s1_saude_coletiva",
        "perspectivas": "s1_perspectivas",
    },
    2: {
        "digestorio": "s2_anatomofisio_2",
        "tegumentar": "s2_anatomofisio_1",
        "bioquimica": "s2_bioquimica",
        "producao do conhecimento": "s2_prod_conhecimento",
    },
    3: {
        "empreendedorismo": "s3_empreendedorismo",
        "fisiopatologia": "s3_fisiopatologia",
        "fundamentos": "s3_fundamentos_etica",
        "movimento": "s3_movimento",
    },
    4: {
        "avaliacao": "s4_avaliacao",
        "cinesioterapia": "s4_cinesio",
        "eletrotermo": "s4_eletro",
        "industria": "s4_estudo_contemp",
        "farmacologia": "s4_farmaco",
    },
    5: {
        "propriedade": "s5_estudo_contemp",
        "exercicio": "s5_fisiologia_ex",
        "aquatica": "s5_aquatica",
        "idoso": "s5_idoso",
        "manuais": "s5_recursos_manuais",
    },
    6: {
        "etnico": "s6_estudo_contemp",
        "crianca": "s6_crianca",
        "mulher": "s6_mulher",
        "neurofuncional": "s6_neuro",
        "traumato": "s6_traumato",
    },
    7: {
        "autonomia": "s7_estudo_contemp",
        "respiratoria": "s7_respiratoria",
        "protese": "s7_protese",
    },
    8: {
        "dermatofuncional": "s8_dermatofunc",
    },
    9: {
        "cardiovascular": "s9_cardio",
    },
    10: {
        "evidencias": "s10_evidencias",
        "trabalhador": "s10_trabalhador",
        "topicos": "s10_topicos",
        "t_picos": "s10_topicos",
    }
}

def remove_accents(input_str):
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return "".join([c for c in nfkd_form if not unicodedata.combining(c)])

def get_semester_num(dir_name):
    # Encontra número no nome da pasta
    match = remove_accents(dir_name).lower()
    m = remove_accents(dir_name)
    nums = [int(s) for s in m.split() if s.isdigit()]
    if nums:
        return nums[0]
    # Caso seja escrito por extenso ou formato diferente:
    for i in range(1, 11):
        if f"{i}semestre" in match.replace(" ", "").replace("°", "").replace("o", ""):
            return i
    # Tenta parsear no início
    match_num = re.search(r'(\d+)', dir_name)
    if match_num:
        return int(match_num.group(1))
    return None

print("Iniciando varredura das pastas de semestres...")
if not os.path.exists(matriz_dir):
    print(f"Erro: O diretório {matriz_dir} não existe!")
    sys.exit(1)

total_processed = 0

for item in os.listdir(matriz_dir):
    item_path = os.path.join(matriz_dir, item)
    if not os.path.isdir(item_path):
        continue
    
    sem_num = get_semester_num(item)
    if sem_num is None or sem_num not in mappings:
        print(f"Aviso: Não foi possível identificar o número do semestre para a pasta '{item}'")
        continue
    
    print(f"\n--- Processando {sem_num}º Semestre (Pasta: '{item}') ---")
    semester_mappings = mappings[sem_num]
    
    for file in os.listdir(item_path):
        if not file.lower().endswith(".pdf"):
            continue
            
        pdf_path = os.path.join(item_path, file)
        normalized_file = remove_accents(file).lower()
        
        # Encontrar o subject_id correspondente
        matched_subject_id = None
        for keyword, subject_id in semester_mappings.items():
            if keyword in normalized_file:
                matched_subject_id = subject_id
                break
        
        if not matched_subject_id:
            print(f"Aviso: Não foi encontrado mapeamento de disciplina para o PDF '{file}' no {sem_num}º Semestre.")
            continue
            
        print(f"Mapeado: '{file}' -> ID: {matched_subject_id}")
        
        # Processar de forma otimizada
        primary_out = os.path.join(workspace_dir, "materials")
        dest_out = os.path.join(workspace_dir, "dist_web", "materials")
        primary_file = os.path.join(primary_out, f"{matched_subject_id}.js")
        dest_file = os.path.join(dest_out, f"{matched_subject_id}.js")
        
        extracted = False
        if os.path.exists(primary_file):
            print(f" -> Arquivo já existe em materials/. Pulando extração.")
            extracted = True
        else:
            print(f" -> Extraindo para: {primary_out}")
            cmd = [
                r"C:\Users\Robson Silva\AppData\Local\Programs\Python\Python311\python.exe",
                extract_script,
                pdf_path,
                matched_subject_id,
                primary_out
            ]
            try:
                subprocess.run(cmd, check=True)
                print(f" -> Extração concluída com sucesso!")
                extracted = True
            except subprocess.CalledProcessError as e:
                print(f" -> Erro ao extrair PDF {file}: {e}")
        
        if extracted:
            # Copiar para a pasta dist_web/materials
            import shutil
            try:
                shutil.copy2(primary_file, dest_file)
                print(f" -> Copiado com sucesso para dist_web/materials/")
                total_processed += 1
            except Exception as e:
                print(f" -> Erro ao copiar arquivo para dist_web: {e}")

print(f"\nProcessamento de todos os semestres concluído! Total de PDFs processados: {total_processed}")
