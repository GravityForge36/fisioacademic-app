import os
import re

js_files = ['app.js', 'planner.js', 'flashcards.js', 'reference.js', 'tracker.js', 'quiz.js']
patterns = [
    r'localStorage\.getItem\((.*?)\)',
    r'localStorage\.setItem\((.*?)\)',
    r'localStorage\.removeItem\((.*?)\)'
]

for filename in js_files:
    path = os.path.join(os.getcwd(), 'app', filename)
    if not os.path.exists(path):
        path = os.path.join(os.getcwd(), filename)
    if not os.path.exists(path):
        continue
        
    print(f"=== {filename} ===")
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        for pattern in patterns:
            matches = re.findall(pattern, content)
            for m in matches:
                print(f"  {m.strip()}")
