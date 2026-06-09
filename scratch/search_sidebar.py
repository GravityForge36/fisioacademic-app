import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, "app_source.html")

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Search for sidebar or logo-container in app_source.html
match = re.search(r'class=["\']sidebar["\'].*?</div>', content, re.DOTALL)
if match:
    print(match.group(0)[:1000])
else:
    # Search for sidebar references
    matches = [line.strip() for line in content.splitlines() if "sidebar" in line]
    print("Found sidebar references:", matches[:10])
