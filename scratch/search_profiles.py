import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
app_path = os.path.join(project_dir, "app.js")

with open(app_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print("Searching for profile functions:")
for i, line in enumerate(lines):
    if "loadProfiles" in line or "createProfile" in line or "connectProfile" in line or "localStorage" in line:
        if "function" in line or "const" in line or "let" in line:
            print(f"  Line {i+1}: {line.strip()}")
