with open("app_source.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'id="link-' in line or "id='link-" in line:
        print(f"{i+1}: {line.strip()}")
