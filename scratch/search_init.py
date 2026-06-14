with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Searching app.js for initialization...")
for i, line in enumerate(lines):
    if 'DOMContentLoaded' in line or 'window.onload' in line:
        print(f"Line {i+1}: {line.strip()}")
