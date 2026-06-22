import re
import os

js_files = [f for f in os.listdir('.') if f.endswith('.js')]
print("JS files in root:", js_files)

for jf in js_files:
    with open(jf, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    if 'FisioMaterials' in content or 'materials' in content or 'renderMaterial' in content:
        print(f"File {jf} contains material references:")
        # Find lines containing these words
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if 'FisioMaterials' in line or 'renderMaterial' in line or 'showMaterial' in line:
                print(f"  Line {i+1}: {line.strip()}")
