import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'DEFAULT_FLASHCARDS\s*=\s*\[(.*?)\];', content, re.DOTALL)
if match:
    q_text = match.group(1)
    categories = re.findall(r'category:\s*["\']([^"\']+)["\']', q_text)
    print(f"Total flashcards: {len(categories)}")
    from collections import Counter
    c = Counter(categories)
    for k, v in sorted(c.items()):
        print(f"  - {k}: {v}")
else:
    print("Not found")
