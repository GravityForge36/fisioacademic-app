import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Match the content inside QUIZ_QUESTIONS = [ ... ]
match = re.search(r'QUIZ_QUESTIONS\s*=\s*\[(.*?)\];', content, re.DOTALL)
if match:
    q_text = match.group(1)
    
    # Let's find each object inside {}
    # Since they are curly brace blocks, we can find them.
    # To keep it simple, let's split by '},'
    questions = q_text.split('},')
    for i in range(min(12, len(questions))):
        print(f"--- QUESTION {i+1} ---")
        print(questions[i].strip() + "},")
else:
    print("Not found")
