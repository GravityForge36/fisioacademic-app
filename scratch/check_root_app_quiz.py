import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
quiz_path = os.path.join(project_dir, 'app', 'quiz.js')

print("Checking quiz.js inside app/ folder:")
if os.path.exists(quiz_path):
    try:
        with open(quiz_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        for idx, line in enumerate(lines):
            if "slice(0," in line:
                print(f"    Line {idx+1}: {line.strip()}")
    except Exception as e:
        print("  Error reading app/quiz.js:", e)
else:
    print("  app/quiz.js does not exist!")
