with open("planner.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

patterns = ["localstorage", "pomo", "duration", "study", "break"]
for pattern in patterns:
    print(f"--- Matches for '{pattern}' ---")
    for i, line in enumerate(lines):
        if pattern.lower() in line.lower():
            print(f"{i+1}: {line.strip()}")
