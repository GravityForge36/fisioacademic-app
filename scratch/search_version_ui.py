import re
import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, "app_source.html")

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Search for version or v in app_source.html
matches = re.findall(r'(?:[vV]erso|[vV]ersion)\s*[:\d\.]+', content)
print("Matches for version text in app_source.html:", matches)
