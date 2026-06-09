with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx in range(1059, min(1120, len(lines))):
    print(f"{idx+1}: {lines[idx].strip()}")
