import os
from PIL import Image

def compress_images_in_dir(images_dir):
    print(f"Compressing images in {images_dir}...")
    total_saved = 0
    count = 0
    for root, dirs, files in os.walk(images_dir):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in ['.jpg', '.jpeg', '.png']:
                path = os.path.join(root, f)
                old_size = os.path.getsize(path)
                try:
                    img = Image.open(path)
                    
                    # 1. Resize if too wide
                    max_width = 800
                    if img.width > max_width:
                        new_height = int((max_width / img.width) * img.height)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                    
                    # 2. Compress based on format
                    if ext in ['.jpg', '.jpeg']:
                        img = img.convert('RGB')
                        img.save(path, 'JPEG', quality=60, optimize=True)
                    elif ext == '.png':
                        # Convert to adaptive 256 colors palette mode (saves tons of space for screenshots/drawings)
                        if img.mode != 'P':
                            img = img.convert('P', palette=Image.Palette.ADAPTIVE, colors=256)
                        img.save(path, 'PNG', optimize=True)
                        
                    new_size = os.path.getsize(path)
                    saved = old_size - new_size
                    total_saved += saved
                    count += 1
                except Exception as e:
                    print(f"Error compressing {path}: {e}")
                    
    print(f"Compressed {count} files. Saved {total_saved / (1024*1024):.2f} MB.")

project_dir = r"C:\Users\Robson Silva\.gemini\antigravity\scratch\fisioterapia-study-app"
print("Compressing materials images...")
compress_images_in_dir(os.path.join(project_dir, "materials", "images"))
print("Compressing app/materials images...")
compress_images_in_dir(os.path.join(project_dir, "app", "materials", "images"))
print("Finished image compression.")
