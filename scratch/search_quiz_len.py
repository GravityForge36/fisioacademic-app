import re
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
            for line_no, line in enumerate(content.splitlines()):
                if "slice" in line or "random" in line or "5" in line:
                    if "quiz" in file or "app" in file:
                        if any(k in line for k in ["slice", "questions", "activeQuestions", "length"]):
                            print(f"{file}:{line_no+1}: {line.strip()}")
