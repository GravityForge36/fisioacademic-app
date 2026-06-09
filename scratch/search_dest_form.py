import os

path = "app/index.html"
if os.path.exists(path):
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    print(f"File {path} exists with {len(lines)} lines.")
    for idx, line in enumerate(lines):
        if "form-login-select" in line or "form-login-simple" in line:
            print(f"{idx+1}: {line.strip()}")
else:
    print(f"File {path} does NOT exist!")
