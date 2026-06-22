import fitz
import os

pdf_path = r"MATRIZ CURRICULAR\1° SEMESTRE\Biossegurança em Serviços de Saúde.pdf"
if not os.path.exists(pdf_path):
    print("PDF not found!")
    exit(1)

doc = fitz.open(pdf_path)
print("Total pages:", len(doc))

# Let's inspect page 30 or another page that contains an image
# Let's find pages with images
pages_with_images = []
for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images(full=True)
    if image_list:
        pages_with_images.append((page_num + 1, len(image_list)))

print("Pages with images:", pages_with_images[:10])

# Let's print blocks for a page with images, say the first one
if pages_with_images:
    p_num = pages_with_images[0][0]
    print(f"\n--- Blocks for page {p_num} ---")
    page = doc[p_num - 1]
    blocks = page.get_text("blocks")
    for b in blocks[:15]:
        # block tuple: (x0, y0, x1, y1, "text_content_or_image_metadata", block_no, block_type)
        print(f"Type {b[6]} (coord: {b[0]:.1f}, {b[1]:.1f}, {b[2]:.1f}, {b[3]:.1f}):")
        if b[6] == 0: # text
            print("  Text:", repr(b[4][:100]))
        else: # image
            print("  Image info:", repr(b[4]))
