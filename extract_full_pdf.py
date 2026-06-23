import os
import sys
import json
import re
import subprocess

# PyMuPDF (fitz) is required
try:
    import fitz
except ImportError:
    print("PyMuPDF (fitz) não encontrado, instalando...")
    # Em ambientes desktop, o pip pode ser executado a partir do sys.executable
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pymupdf"])
    import fitz

def clean_text(text):
    if not text:
        return ""
    # Remover espaços em branco duplicados e manter quebras de parágrafo normais
    text = re.sub(r'[ \t]+', ' ', text)
    # Tentar juntar hifens de fim de linha
    text = re.sub(r'-\n\s*', '', text)
    return text.strip()

def extract_toc(doc):
    toc = []
    
    # Tenta extrair a partir dos bookmarks nativos do PDF
    try:
        toc_list = doc.get_toc()
        if toc_list:
            for level, title, page_num in toc_list:
                toc.append({
                    "title": title.strip(),
                    "page": page_num
                })
    except Exception as e:
        print(f"Erro ao extrair outline/bookmarks nativos: {e}")

    # Fallback: se nenhum item de índice for encontrado via bookmarks nativos, escaneamos o texto das páginas
    if not toc:
        print("Marcadores nativos não encontrados no PDF. Escaneando texto das páginas para achar seções...")
        # Procura por "UNIDADE X", "TÓPICO X", "TEMA X", ou "TEMA DE APRENDIZAGEM X"
        unit_pattern = re.compile(r'^\s*(UNIDADE|TÓPICO|TEMA DE APRENDIZAGEM|TEMA)\s+\d+.*$', re.IGNORECASE)
        for page_idx in range(len(doc)):
            page = doc[page_idx]
            try:
                text = page.get_text("text")
                if not text:
                    continue
                for line in text.split('\n'):
                    line_stripped = line.strip()
                    # Procurar títulos de unidade ou capitulo no início de linhas
                    if unit_pattern.match(line_stripped) and len(line_stripped) < 100:
                        # Garantir que não repetimos o mesmo título na mesma página
                        if not any(t["page"] == page_idx + 1 and t["title"] == line_stripped for t in toc):
                            toc.append({"title": line_stripped, "page": page_idx + 1})
            except Exception as e:
                pass
                        
    # Ordena o índice por página
    toc.sort(key=lambda x: x["page"])
    return toc

def process_pdf_to_js(pdf_path, subject_id, output_dir):
    if not os.path.exists(pdf_path):
        print(f"Erro: O arquivo {pdf_path} não existe.")
        return False
        
    print(f"Lendo PDF com PyMuPDF (fitz): {pdf_path}...")
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"Total de páginas detectadas: {total_pages}")
    
    # Extrair título da matéria do nome do arquivo (sem extensão)
    title = os.path.splitext(os.path.basename(pdf_path))[0]
    
    # Obter índice/bookmarks
    print("Extraindo índice de tópicos...")
    toc = extract_toc(doc)
    print(f"Total de tópicos mapeados no índice: {len(toc)}")
    
    # Extrair texto e imagens de cada página preservando layout vertical (top-to-bottom)
    print("Extraindo páginas, textos e imagens...")
    pages = []
    
    for page_idx in range(total_pages):
        page = doc[page_idx]
        
        # 1. Mapear imagens e suas posições na página
        page_images = []
        try:
            image_list = page.get_images(full=True)
            for img_info in image_list:
                xref = img_info[0]
                rects = page.get_image_rects(xref)
                if not rects:
                    continue
                
                # Extrair imagem física
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]

                # Se for JPX (JPEG2000), converte para JPEG para compatibilidade com QWebEngine/Chromium
                if image_ext.lower() in ["jpx", "jp2", "jpeg2000"]:
                    try:
                        import io
                        from PIL import Image
                        img = Image.open(io.BytesIO(image_bytes))
                        out_io = io.BytesIO()
                        img.convert("RGB").save(out_io, format="JPEG", quality=75)
                        image_bytes = out_io.getvalue()
                        image_ext = "jpeg"
                    except Exception as ex:
                        print(f"Erro ao converter JPX para JPEG na pagina {page_idx + 1}: {ex}")
                
                # Definir caminhos físicos
                img_subfolder = os.path.join(output_dir, "images", subject_id)
                os.makedirs(img_subfolder, exist_ok=True)
                
                img_name = f"page_{page_idx + 1}_img_{xref}.{image_ext}"
                img_path = os.path.join(img_subfolder, img_name)
                
                # Salvar a imagem no disco se ainda não existir
                if not os.path.exists(img_path):
                    with open(img_path, "wb") as f_img:
                        f_img.write(image_bytes)
                
                # Caminho relativo usado no frontend
                rel_img_path = f"materials/images/{subject_id}/{img_name}"
                
                for r in rects:
                    page_images.append({
                        "type": "image",
                        "y0": r.y0,
                        "src": rel_img_path
                    })
        except Exception as e:
            print(f"Erro ao processar imagens na página {page_idx + 1}: {e}")
            
        # 2. Mapear blocos de texto
        page_text_blocks = []
        try:
            text_blocks = page.get_text("blocks")
            for b in text_blocks:
                # b: (x0, y0, x1, y1, text, block_no, block_type)
                cleaned = clean_text(b[4])
                if cleaned:
                    page_text_blocks.append({
                        "type": "text",
                        "y0": b[1],
                        "text": cleaned
                    })
        except Exception as e:
            print(f"Erro ao extrair blocos de texto na página {page_idx + 1}: {e}")
            
        # 3. Mesclar e ordenar todos os elementos pela coordenada Y0 (de cima para baixo)
        all_elements = page_images + page_text_blocks
        all_elements.sort(key=lambda x: x["y0"])
        
        # 4. Compilar plain text consolidado (mantendo retrocompatibilidade e pesquisa textual)
        page_text = "\n\n".join([el["text"] for el in all_elements if el["type"] == "text"])
        
        # 5. Compilar blocos estruturados na ordem correta de layout
        blocks = []
        for el in all_elements:
            if el["type"] == "text":
                blocks.append({
                    "type": "text",
                    "text": el["text"]
                })
            elif el["type"] == "image":
                blocks.append({
                    "type": "image",
                    "src": el["src"]
                })
                
        pages.append({
            "number": page_idx + 1,
            "text": page_text,
            "blocks": blocks
        })
        
        if (page_idx + 1) % 50 == 0:
            print(f"Progresso: {page_idx + 1}/{total_pages} páginas processadas...")
            
    # Estruturar os dados no formato JS
    data = {
        "title": title,
        "toc": toc,
        "pages": pages
    }
    
    # Formatar como JavaScript
    js_content = f"""// Material de Estudo Auto-Gerado para a disciplina: {title}
window.FisioMaterials = window.FisioMaterials || {{}};
window.FisioMaterials["{subject_id}"] = {json.dumps(data, ensure_ascii=False, indent=2)};
"""

    # Salvar o arquivo de materiais JS
    os.makedirs(output_dir, exist_ok=True)
    out_file_path = os.path.join(output_dir, f"{subject_id}.js")
    
    print(f"Escrevendo arquivo JS em: {out_file_path}")
    with open(out_file_path, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Processamento concluído com sucesso para: {subject_id}!")
    return True

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Uso: python extract_full_pdf.py <caminho_pdf> <subject_id> <diretorio_saida>")
        sys.exit(1)
        
    pdf = sys.argv[1]
    sub_id = sys.argv[2]
    out_dir = sys.argv[3]
    
    process_pdf_to_js(pdf, sub_id, out_dir)
