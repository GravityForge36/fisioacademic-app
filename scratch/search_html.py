import re

with open('app_source.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Searching for auth-screen...")
for i, line in enumerate(lines):
    if 'auth-screen' in line or 'modal-settings' in line or 'sidebar-app-version' in line:
        print(f"Line {i+1}: {line.strip()}")
