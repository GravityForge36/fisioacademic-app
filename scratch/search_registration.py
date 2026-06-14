with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Searching app.js for registration handler...")
for i, line in enumerate(lines):
    if 'form-register' in line or 'form_register' in line or 'newProfile' in line:
        print(f"Line {i+1}: {line.strip()}")
