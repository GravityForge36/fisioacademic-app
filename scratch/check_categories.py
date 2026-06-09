import re
import os
from collections import Counter

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_path = os.path.join(project_dir, "data.js")

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

categories = re.findall(r'category:\s*["\']([^"\']+)["\']', content)
print("Total questions:", len(categories))
for cat, count in sorted(Counter(categories).items()):
    print(f"  {cat}: {count}")
