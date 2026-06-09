with open("app_source.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "form-login-select" in line or "form-login-simple" in line:
        print(f"{idx+1}: {line.strip()}")
