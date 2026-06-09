import random

# Mock question database
all_questions = [{"id": f"q{i}", "category": "epidemiologia"} for i in range(1, 31)] # 30 questions

# Simulator of getProfileKey/localStorage
local_storage = {}

def start_new_quiz(category, target_count=20):
    profile_key = f"fisio_recent_q_{category}"
    
    # Load recently used
    saved = local_storage.get(profile_key)
    recently_used_ids = eval(saved) if saved else []
    
    # Filter
    category_questions = [q for q in all_questions if q["category"] == category]
    
    unused = [q for q in category_questions if q["id"] not in recently_used_ids]
    used = [q for q in category_questions if q["id"] in recently_used_ids]
    
    # Shuffle
    random.shuffle(unused)
    random.shuffle(used)
    
    # Combine and slice
    active_questions = (unused + used)[:target_count]
    
    # Save
    selected_ids = [q["id"] for q in active_questions]
    local_storage[profile_key] = str(selected_ids)
    
    return selected_ids

# Run quiz 1
q1 = start_new_quiz("epidemiologia")
print("Quiz 1 selected:", len(q1), q1)

# Run quiz 2
q2 = start_new_quiz("epidemiologia")
print("Quiz 2 selected:", len(q2), q2)

# Check overlap
overlap = set(q1).intersection(set(q2))
print("Overlap between Quiz 1 and Quiz 2:", len(overlap), sorted(list(overlap)))
print("Expected overlap: 10 (since we have 30 total questions and pick 20 each time)")

# Run quiz 3
q3 = start_new_quiz("epidemiologia")
print("Quiz 3 selected:", len(q3), q3)
overlap2 = set(q2).intersection(set(q3))
print("Overlap between Quiz 2 and Quiz 3:", len(overlap2), sorted(list(overlap2)))
