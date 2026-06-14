with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Searching app.js for settings functions...")
for i, line in enumerate(lines):
    if 'settings' in line.lower() and 'function' in line:
        print(f"Line {i+1}: {line.strip()}")
