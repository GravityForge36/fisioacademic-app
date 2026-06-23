import os
import io
from PIL import Image

def fix_jpx_in_folder(images_dir, js_dir):
    # 1. Convert .jpx to .jpeg
    jpx_converted = 0
    for root, dirs, files in os.walk(images_dir):
        for f in files:
            if f.endswith('.jpx'):
                jpx_path = os.path.join(root, f)
                jpeg_path = os.path.splitext(jpx_path)[0] + '.jpeg'
                
                try:
                    img = Image.open(jpx_path)
                    img.convert('RGB').save(jpeg_path, 'JPEG', quality=75)
                    os.remove(jpx_path)
                    jpx_converted += 1
                except Exception as e:
                    print(f"Error converting {jpx_path}: {e}")
                    
    print(f"Converted {jpx_converted} JPX files in {images_dir}")
    
    # 2. Update references in .js files
    js_updated = 0
    for root, dirs, files in os.walk(js_dir):
        for f in files:
            if f.endswith('.js'):
                js_path = os.path.join(root, f)
                try:
                    with open(js_path, 'r', encoding='utf-8') as file_obj:
                        content = file_obj.read()
                    
                    if '.jpx' in content:
                        new_content = content.replace('.jpx', '.jpeg')
                        with open(js_path, 'w', encoding='utf-8') as file_obj:
                            file_obj.write(new_content)
                        js_updated += 1
                except Exception as e:
                    print(f"Error updating JS file {js_path}: {e}")
                    
    print(f"Updated {js_updated} JS files in {js_dir}")

project_dir = r"C:\Users\Robson Silva\.gemini\antigravity\scratch\fisioterapia-study-app"
print("Processing materials...")
fix_jpx_in_folder(os.path.join(project_dir, "materials", "images"), os.path.join(project_dir, "materials"))
print("Processing app/materials...")
fix_jpx_in_folder(os.path.join(project_dir, "app", "materials", "images"), os.path.join(project_dir, "app", "materials"))
print("Finished fixing JPX references.")
