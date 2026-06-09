import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_path = os.path.join(project_dir, "data.js")

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find all questions blocks in QUIZ_QUESTIONS
# A question block starts with { and ends with }
# We can find all blocks containing 'category: "s1_epidemiologia"'
blocks = re.findall(r'\{\s*id:\s*["\'][^"\']+["\'],\s*category:\s*["\']s1_epidemiologia["\'],\s*question:.*?\n\s*\}', content, re.DOTALL)
print(f"Found {len(blocks)} blocks via regex")

# Let's print the question texts
question_texts = re.findall(r'category:\s*["\']s1_epidemiologia["\'].*?question:\s*["\']([^"\']+)["\']', content, re.DOTALL)
for i, q in enumerate(question_texts):
    print(f"{i+1}. {q}")
