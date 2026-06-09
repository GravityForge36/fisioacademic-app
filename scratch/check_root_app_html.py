import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, 'app', 'index.html')

print("Checking index.html inside root/app/ folder:")
if os.path.exists(html_path):
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        import re
        matches = re.findall(r'id="sidebar-app-version">Versão \d+<', content)
        print("  Found version tags:", matches)
    except Exception as e:
        print("  Error reading HTML:", e)
else:
    print("  index.html does not exist in root/app/ folder!")
