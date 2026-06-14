import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
app_path = os.path.join(project_dir, "app.js")

with open(app_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for where a profile object is pushed or created
matches = re.finditer(r'profiles\.push\(', content)
for m in matches:
    start = max(0, m.start() - 500)
    end = min(len(content), m.end() + 1000)
    print(content[start:end])
    print("="*40)
