import sys

# Ensure UTF-8 printing in windows console
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Searching app.js for search-related code...")
for i, line in enumerate(lines):
    clean_line = line.strip()
    if 'page.text' in clean_line or 'searchText' in clean_line or 'searchInBook' in clean_line or 'performBookSearch' in clean_line:
        print(f"Line {i+1}: {clean_line}")
