import fitz
import os

pdf_path = r"MATRIZ CURRICULAR\1° SEMESTRE\Biossegurança em Serviços de Saúde.pdf"
doc = fitz.open(pdf_path)
page_num = 20 # 1-indexed (pypdf had page 20 with 1 image)
page = doc[page_num - 1]

# Collect text blocks
text_blocks = page.get_text("blocks")
elements = []
for b in text_blocks:
    # coordinates: x0, y0, x1, y1
    elements.append({
        "type": "text",
        "bbox": (b[0], b[1], b[2], b[3]),
        "y0": b[1],
        "content": b[4]
    })

# Collect images and their rects
image_infos = page.get_images(full=True)
for img_idx, img in enumerate(image_infos):
    xref = img[0]
    rects = page.get_image_rects(xref)
    for r in rects:
        elements.append({
            "type": "image",
            "bbox": (r.x0, r.y0, r.x1, r.y1),
            "y0": r.y0,
            "xref": xref,
            "filename": f"img_{xref}.png"
        })

# Sort by y0 (vertical position)
elements.sort(key=lambda x: x["y0"])

print(f"--- Layout Elements for Page {page_num} sorted from top to bottom ---")
for el in elements:
    if el["type"] == "text":
        print(f"[TEXT] (y0={el['y0']:.1f}):", repr(el["content"][:80].strip()))
    else:
        print(f"[IMAGE] (y0={el['y0']:.1f}):", el["filename"], f"bbox={el['bbox']}")
