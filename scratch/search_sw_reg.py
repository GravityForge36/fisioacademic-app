with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Searching app.js for Service Worker registration...")
for i, line in enumerate(lines):
    if 'serviceWorker' in line or 'sw.js' in line:
        print(f"Line {i+1}: {line.strip()}")
