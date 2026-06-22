import re
import json

with open('materials/s1_biosseguranca.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's extract window.FisioMaterials["s1_biosseguranca"]
match = re.search(r'window\.FisioMaterials\["s1_biosseguranca"\] = (\{.*\});', content, re.DOTALL)
if match:
    # Let's parse just the first few pages
    # To do that without parsing the whole huge JSON, let's find the "pages" key start
    pages_index = content.find('"pages":')
    if pages_index != -1:
        print("Pages key starts at character:", pages_index)
        print("Slice of pages:")
        print(content[pages_index:pages_index + 1000])
