with open("quiz.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

patterns = ["savestate", "localstorage", "savestats", "history"]
for pattern in patterns:
    print(f"--- Matches for '{pattern}' ---")
    for i, line in enumerate(lines):
        if pattern.lower() in line.lower():
            print(f"{i+1}: {line.strip()}")
