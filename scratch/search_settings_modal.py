import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, "app_source.html")

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Search for the settings modal
match = re.search(r'id=["\']settings-modal["\'].*?</div>\s*</div>\s*</div>', content, re.DOTALL)
if match:
    print(match.group(0)[:1500])
else:
    # Let's search for modal-body inside settings modal
    matches = re.findall(r'id=["\']settings-.*?["\']', content)
    print("Found settings IDs:", matches)
