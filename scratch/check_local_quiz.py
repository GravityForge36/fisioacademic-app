import os
import json

app_dir = os.path.join(os.path.expanduser('~'), '.fisio_uniasselve_app')
version_path = os.path.join(app_dir, 'version.json')
quiz_path = os.path.join(app_dir, 'app', 'quiz.js')

print("Checking local persist files in .fisio_uniasselve_app:")
if os.path.exists(version_path):
    try:
        with open(version_path, 'r', encoding='utf-8') as f:
            vdata = json.load(f)
            print("  version.json exists. Version:", vdata.get('version'))
    except Exception as e:
        print("  Error reading version.json:", e)
else:
    print("  version.json does not exist!")

if os.path.exists(quiz_path):
    try:
        with open(quiz_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        print("  quiz.js exists. Searching for slice limit:")
        for idx, line in enumerate(lines):
            if "slice(0," in line:
                print(f"    Line {idx+1}: {line.strip()}")
    except Exception as e:
        print("  Error reading quiz.js:", e)
else:
    print("  quiz.js does not exist in persist folder!")
