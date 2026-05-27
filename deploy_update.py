# -*- coding: utf-8 -*-
import os
import json
import subprocess
import sys
import time

project_dir = os.path.dirname(os.path.abspath(__file__))
version_path = os.path.join(project_dir, "version.json")
dist_version_path = os.path.join(project_dir, "app", "version.json")

print("==================================================")
print("     INICIANDO DEPLOY AUTOMATICO DE ATUALIZACAO   ")
print("==================================================")

# 0. Sincronizar arquivos da raiz com a pasta app
print("[0/3] Sincronizando arquivos locais da raiz para app...")
files_to_sync = {
    "app_source.html": "index.html",
    "app.js": "app.js",
    "data.js": "data.js",
    "flashcards.js": "flashcards.js",
    "planner.js": "planner.js",
    "quiz.js": "quiz.js",
    "reference.js": "reference.js",
    "style.css": "style.css",
    "tracker.js": "tracker.js",
    "manifest.json": "manifest.json",
    "sw.js": "sw.js",
    "logo.png": "logo.png",
    "lucide.min.js": "lucide.min.js",
    "jspdf.umd.min.js": "jspdf.umd.min.js"
}

dist_web_dir = os.path.join(project_dir, "app")
os.makedirs(dist_web_dir, exist_ok=True)

import shutil
for src_name, dest_name in files_to_sync.items():
    src_file = os.path.join(project_dir, src_name)
    dest_file = os.path.join(dist_web_dir, dest_name)
    if os.path.exists(src_file):
        try:
            shutil.copy2(src_file, dest_file)
            print(f"  Sincronizado: {src_name} -> app/{dest_name}")
        except Exception as e:
            print(f"  Erro ao sincronizar {src_name}: {e}")

# Sincronizar pasta materials/ se existir
materials_src = os.path.join(project_dir, "materials")
materials_dest = os.path.join(dist_web_dir, "materials")
if os.path.exists(materials_src):
    try:
        if os.path.exists(materials_dest):
            shutil.rmtree(materials_dest)
        shutil.copytree(materials_src, materials_dest)
        print("  Pasta materials/ sincronizada com app/materials/")
    except Exception as e:
        print(f"  Erro ao sincronizar pasta materials: {e}")

# 1. Incrementar versao
if os.path.exists(version_path):
    try:
        with open(version_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        version = data.get("version", 1) + 1
    except Exception:
        version = 2
else:
    version = 2

data = {"version": version}
with open(version_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)
with open(dist_version_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print(f"[1/3] Versao incrementada com sucesso para: {version}")

# 2. Rodar compilação local (build_and_deploy.py)
print("[2/3] Executando PyInstaller para rebuild do executavel...")
build_script = os.path.join(project_dir, "build_and_deploy.py")
try:
    # Executa o build usando o Python do sistema
    result = subprocess.run([r"C:\Python314\python.exe", build_script], capture_output=False, text=True)
    if result.returncode != 0:
        print("Erro: A compilacao do executavel falhou!")
        sys.exit(1)
except Exception as e:
    print(f"Erro ao executar script de compilacao: {e}")
    sys.exit(1)

# 3. Enviar ao GitHub
print("[3/3] Enviando atualizacoes para o GitHub...")
try:
    # Adicionar arquivos ao Git
    subprocess.run(["git", "add", "."], cwd=project_dir, check=True)
    
    # Criar o Commit
    commit_msg = f"Auto-update para versao {version}"
    subprocess.run(["git", "commit", "-m", commit_msg], cwd=project_dir, check=True)
    
    # Enviar para a nuvem
    print("Enviando (git push)...")
    subprocess.run(["git", "push"], cwd=project_dir, check=True)
    print("\n>>> SUCESSO! A atualizacao foi publicada no GitHub.")
    print(f">>> O computador da sua esposa recebera a versao {version} ao abrir o app!")
except Exception as e:
    print(f"\nErro ao sincronizar com o GitHub: {e}")
    print("Verifique se voce ja vinculou o repositorio local ao GitHub usando o comando:")
    print("  git remote add origin https://github.com/SEU_USUARIO/fisioacademic-app.git")
    sys.exit(1)
