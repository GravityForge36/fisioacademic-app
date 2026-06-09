with open(r"C:\Users\Robson Silva\.gemini\antigravity\scratch\fisioterapia-study-app\app.js", "r", encoding="utf-8") as f:
    code = f.read()

import re
matches = list(re.finditer(r'login|user|perfil|auth|save|load', code, re.IGNORECASE))
print(f"Found {len(matches)} matches in app.js")
for i, m in enumerate(matches[:10]):
    start = max(0, m.start() - 100)
    end = min(len(code), m.end() + 250)
    print(f"\nMatch {i+1} ({m.group(0)}):")
    print(code[start:end])
