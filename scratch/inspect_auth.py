with open(r"C:\Users\Robson Silva\.gemini\antigravity\scratch\fisioterapia-study-app\app.js", "r", encoding="utf-8") as f:
    code = f.read()

import re

# Find functions containing "profiles" or "profile"
def find_lines_around(pattern, text):
    matches = list(re.finditer(pattern, text, re.IGNORECASE))
    print(f"Found {len(matches)} matches for {pattern}")
    for i, m in enumerate(matches[:10]):
        start = max(0, m.start() - 100)
        end = min(len(text), m.end() + 300)
        print(f"\nMatch {i+1}:")
        print(text[start:end])

find_lines_around(r'loadProfiles|saveProfiles|profile|perfis|perfil', code)
