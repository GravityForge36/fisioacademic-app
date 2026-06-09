import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, 'app_source.html')

print("Checking version tag inside app_source.html:")
if os.path.exists(html_path):
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        import re
        matches = re.findall(r'id="sidebar-app-version">Versão [^<]+<', content)
        print("  Found version tags (loose search):", matches)
        matches2 = re.findall(r'id="sidebar-app-version">Versão \d+</div>', content)
        print("  Found version tags (exact search):", matches2)
    except Exception as e:
        print("  Error reading HTML:", e)
else:
    print("  app_source.html does not exist!")
