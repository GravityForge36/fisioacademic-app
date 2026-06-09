import re
import os
from collections import Counter

app_dir = os.path.join(os.path.expanduser('~'), '.fisio_uniasselve_app')
data_path = os.path.join(app_dir, 'app', 'data.js')

if os.path.exists(data_path):
    with open(data_path, "r", encoding="utf-8") as f:
        content = f.read()
    categories = re.findall(r'category:\s*["\']([^"\']+)["\']', content)
    print("Total questions in persist data.js:", len(categories))
    for cat, count in sorted(Counter(categories).items()):
        print(f"  {cat}: {count}")
else:
    print("Persist data.js does not exist!")
