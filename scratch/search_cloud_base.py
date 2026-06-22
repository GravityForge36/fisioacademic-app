with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Searching app.js for CLOUD_API_BASE...")
for i, line in enumerate(lines):
    if 'CLOUD_API_BASE' in line:
        print(f"Line {i+1}: {line.strip()}")
