import fitz
import json
import os

pdf_path = r"MATRIZ CURRICULAR\1° SEMESTRE\Biossegurança em Serviços de Saúde.pdf"
doc = fitz.open(pdf_path)
page_idx = 19 # page 20
page = doc[page_idx]

# Extract images
image_list = page.get_images(full=True)
page_images = []
for img in image_list:
    xref = img[0]
    rects = page.get_image_rects(xref)
    for r in rects:
        page_images.append({
            "type": "image",
            "y0": r.y0,
            "src": f"materials/images/s1_biosseguranca/page_20_img_{xref}.png"
        })

# Extract text blocks
text_blocks = page.get_text("blocks")
page_text_blocks = []
for b in text_blocks:
    cleaned = b[4].strip()
    if cleaned:
        page_text_blocks.append({
            "type": "text",
            "y0": b[1],
            "text": cleaned
        })

# Merge and sort
all_elements = page_images + page_text_blocks
all_elements.sort(key=lambda x: x["y0"])

# Compile text and blocks
page_text = "\n\n".join([el["text"] for el in all_elements if el["type"] == "text"])
blocks = []
for el in all_elements:
    if el["type"] == "text":
        blocks.append({
            "type": "text",
            "text": el["text"]
        })
    else:
        blocks.append({
            "type": "image",
            "src": el["src"]
        })

print("--- TEXT ---")
print(page_text[:300])
print("\n--- BLOCKS ---")
print(json.dumps(blocks[:5], indent=2))
