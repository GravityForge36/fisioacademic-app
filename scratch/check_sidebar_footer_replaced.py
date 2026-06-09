import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, "app_source.html")

with open(html_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "sidebar-app-version" in line:
        print(f"Found on line {idx+1}:")
        for j in range(max(0, idx-5), min(len(lines), idx+10)):
            print(f"  {j+1}: {lines[j].strip()}")
        break
