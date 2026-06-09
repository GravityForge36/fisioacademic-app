import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, "app_source.html")

with open(html_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print("Searching for Service Worker registration in app_source.html:")
for i, line in enumerate(lines):
    if "serviceWorker" in line or "register" in line:
        print(f"  Line {i+1}: {line.strip()}")
