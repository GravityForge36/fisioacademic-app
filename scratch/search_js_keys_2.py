import re

with open('materials/s1_biosseguranca.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's search for where `"toc"` ends.
# In JS, the object looks like:
# {
#   "title": "...",
#   "toc": [...],
#   "something": ...
# }
# Let's search for the first key that appears after "toc": [...]
# We can find all keys at the root indentation (2 spaces)
matches = re.findall(r'^  "([^"]+)"\s*:', content, re.MULTILINE)
print("Indented 2 spaces keys:")
print(matches)

# Let's search for where the file has "content" or "pages"
for key in ['content', 'pages', 'chapters', 'data', 'text', 'sections']:
    if f'"{key}"' in content:
        print(f"Contains key: {key}")
