import re
import os

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the QUIZ_QUESTIONS array
match = re.search(r'const QUIZ_QUESTIONS = \[(.*?)\];', content, re.DOTALL)
if not match:
    match = re.search(r'QUIZ_QUESTIONS\s*=\s*\[(.*?)\];', content, re.DOTALL)

if match:
    q_text = match.group(1)
    categories = re.findall(r'category:\s*["\']([^"\']+)["\']', q_text)
    print(f"Total questions found: {len(categories)}")
    from collections import Counter
    c = Counter(categories)
    print("Categories and counts:")
    for k, v in sorted(c.items()):
        print(f"  - {k}: {v}")
else:
    print("Could not find QUIZ_QUESTIONS array")
