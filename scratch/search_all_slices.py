import os
import re

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

print("Searching for slice(0, 5) or similar in all files:")
found = False
for root, dirs, files in os.walk(project_dir):
    if ".git" in dirs:
        dirs.remove(".git")
    for file in files:
        if file.endswith((".js", ".html", ".py")):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            # search for slice(0, 5) or slice(0,5) or similar
            matches = re.findall(r'\.slice\(\s*0\s*,\s*5\s*\)', content)
            if matches:
                print(f"Found {len(matches)} matches in {os.path.relpath(path, project_dir)}")
                found = True

if not found:
    print("No matches for slice(0, 5) found in the workspace!")
