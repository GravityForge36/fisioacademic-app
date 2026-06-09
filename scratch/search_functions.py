with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "initSettingsModalControls" in line or "settings" in line.lower() and "function" in line:
        print(f"{i+1}: {line.strip()}")
