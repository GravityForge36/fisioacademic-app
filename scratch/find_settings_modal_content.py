import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, "app_source.html")

with open(html_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print("Searching for settings modal sections in app_source.html:")
for i, line in enumerate(lines):
    if "settings" in line and "modal" in line:
        print(f"  Line {i+1}: {line.strip()}")
        # print next 30 lines
        for j in range(i, min(i+45, len(lines))):
            print(f"    {j+1}: {lines[j].strip()}")
        break
