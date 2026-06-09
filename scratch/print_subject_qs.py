import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_path = os.path.join(project_dir, "data.js")

with open(data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's count how many times category: "s1_epidemiologia" appears, and let's extract the questions
matches = re.findall(r'id:\s*["\']([^"\']+)["\'],\s*category:\s*["\']s1_epidemiologia["\'],\s*question:\s*["\']([^"\']+)["\']', content)
print("Epidemiologia matches count:", len(matches))

# Let's also find all questions for s1_epidemiologia by parsing the JS code a bit more loosely
# to make sure we don't miss anything due to formatting
import json
# Let's search all occurrences of s1_epidemiologia
all_occurrences = re.findall(r'category:\s*["\']s1_epidemiologia["\']', content)
print("Total occurrences of category s1_epidemiologia:", len(all_occurrences))

# Let's count total questions in database
total_qs = re.findall(r'category:\s*["\']([^"\']+)["\']', content)
print("Total questions in entire DB:", len(total_qs))
