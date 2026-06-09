import os

app_dir = os.path.join(os.path.expanduser('~'), '.fisio_uniasselve_app')
html_path = os.path.join(app_dir, 'app', 'index.html')

print("Checking index.html inside .fisio_uniasselve_app/app/ folder:")
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
    print("  index.html does not exist in persist folder!")
