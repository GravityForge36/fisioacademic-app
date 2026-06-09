import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_path = os.path.join(project_dir, "data.js")

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find the start of QUIZ_QUESTIONS
match = re.search(r'QUIZ_QUESTIONS\s*=\s*\[', content)
if match:
    start = match.start()
    print(content[start:start+1000])
else:
    print("Not found")
