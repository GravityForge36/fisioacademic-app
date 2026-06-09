with open("quiz.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "question" in line.lower() or "limit" in line.lower() or "10" in line:
        if "function" in line or "=" in line or "slice" in line or "length" in line:
            print(f"{idx+1}: {line.strip()}")
