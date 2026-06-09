import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, "app_source.html")

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find quiz-category-select
match = re.search(r'id=["\']quiz-category-select["\'].*?</select>', content, re.DOTALL)
if match:
    print(match.group(0))
else:
    print("Not found")
