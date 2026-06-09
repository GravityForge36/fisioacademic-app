import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_path = os.path.join(project_dir, "data.js")

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's print the category count and the question text of all s1_epidemiologia questions
occurrences = []
matches = re.finditer(r'category:\s*["\']s1_epidemiologia["\']', content)
for m in matches:
    # Find the block around this match
    start = max(0, m.start() - 200)
    end = min(len(content), m.end() + 1000)
    block = content[start:end]
    # Extract the question text
    q_match = re.search(r'question:\s*["\']([^"\']+)["\']', block)
    if q_match:
        occurrences.append(q_match.group(1))

print(f"Total found: {len(occurrences)}")
for i, q in enumerate(occurrences):
    print(f"  {i+1}: {q[:60]}")
