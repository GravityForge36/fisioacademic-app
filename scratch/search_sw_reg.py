import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
app_path = os.path.join(project_dir, "app.js")

with open(app_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print("Searching for Service Worker registration in app.js:")
for i, line in enumerate(lines):
    if "serviceWorker" in line or "navigator.serviceWorker" in line:
        print(f"  Line {i+1}: {line.strip()}")
