import json
import re

with open('materials/s1_biosseguranca.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's clean the javascript to load it as JSON or inspect it with regex
# The JS file does window.FisioMaterials["s1_biosseguranca"] = { ... }
# Let's extract the dict/object
match = re.search(r'window\.FisioMaterials\["s1_biosseguranca"\] = (\{.*\});', content, re.DOTALL)
if match:
    data_str = match.group(1)
    # Just inspect the first 1000 chars of the object or keys
    print("Found object starting with:")
    print(data_str[:500])
    
    # Let's find keys using regex
    keys = re.findall(r'"([^"]+)":', data_str)
    # Filter keys that are top-level (i.e. not nested inside toc)
    # We can check how the keys are defined.
    print("Top level keys or first few keys:")
    print(keys[:20])
else:
    print("No match found.")
