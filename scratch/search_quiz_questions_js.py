import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

for root, dirs, files in os.walk(project_dir):
    if ".git" in dirs:
        dirs.remove(".git")
    for file in files:
        if file.endswith(".js"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            if "QUIZ_QUESTIONS" in content:
                print(f"Found in {os.path.relpath(path, project_dir)}")
                # Find all occurrences of QUIZ_QUESTIONS assignment or modification
                for idx, line in enumerate(content.splitlines()):
                    if "QUIZ_QUESTIONS" in line:
                        print(f"  Line {idx+1}: {line.strip()}")
