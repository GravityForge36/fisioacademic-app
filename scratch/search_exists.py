with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Searching app.js for checkUserExists...")
for i, line in enumerate(lines):
    if 'checkUserExists' in line:
        print(f"Line {i+1}: {line.strip()}")
