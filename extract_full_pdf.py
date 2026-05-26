import os
import sys
import json
import re
import subprocess

# Instalar pypdf se necessário
try:
    import pypdf
except ImportError:
    print("pypdf não encontrado, instalando...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

def clean_text(text):
    if not text:
        return ""
    # Remover espaços em branco duplicados e manter quebras de parágrafo normais
    text = re.sub(r'[ \t]+', ' ', text)
    # Tentar juntar hifens de fim de linha
    text = re.sub(r'-\n\s*', '', text)
    return text.strip()

def extract_toc(reader):
    toc = []
    
    def process_outline(outline_list):
        for item in outline_list:
            if isinstance(item, list):
                process_outline(item)
            else:
                try:
                    title = getattr(item, 'title', None)
                    if title:
                        # Obter número da página (0-indexed no pypdf, converter para 1-indexed)
                        page_num = reader.get_destination_page_number(item) + 1
                        toc.append({"title": title.strip(), "page": page_num})
                except Exception as e:
                    pass

    try:
        outline = reader.outline
        if outline:
            process_outline(outline)
    except Exception as e:
        print(f"Erro ao extrair outline/marcadores: {e}")

    # Fallback: se nenhum item de índice for encontrado via outline, escaneamos o texto das páginas
    if not toc:
        print("Marcadores não encontrados no PDF. Escaneando texto das páginas para achar seções...")
        # Procura por "UNIDADE X", "TÓPICO X", ou "TEMA X"
        unit_pattern = re.compile(r'^\s*(UNIDADE|TÓPICO|TEMA DE APRENDIZAGEM|TEMA)\s+\d+.*$', re.IGNORECASE)
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if not text:
                continue
            for line in text.split('\n'):
                line_stripped = line.strip()
                # Procurar títulos de unidade ou capitulo no início de linhas
                if unit_pattern.match(line_stripped) and len(line_stripped) < 100:
                    # Garantir que não repetimos o mesmo título na mesma página
                    if not any(t["page"] == i + 1 and t["title"] == line_stripped for t in toc):
                        toc.append({"title": line_stripped, "page": i + 1})
                        
    # Ordena o índice por página
    toc.sort(key=lambda x: x["page"])
    return toc

def process_pdf_to_js(pdf_path, subject_id, output_dir):
    if not os.path.exists(pdf_path):
        print(f"Erro: O arquivo {pdf_path} não existe.")
        return False
        
    print(f"Lendo PDF: {pdf_path}...")
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"Total de páginas detectadas: {total_pages}")
    
    # Extrair título da matéria do nome do arquivo (sem extensão)
    title = os.path.splitext(os.path.basename(pdf_path))[0]
    
    # Obter índice/bookmarks
    print("Extraindo índice de tópicos...")
    toc = extract_toc(reader)
    print(f"Total de tópicos mapeados no índice: {len(toc)}")
    
    # Extrair texto de cada página
    print("Extraindo páginas...")
    pages = []
    for i in range(total_pages):
        page = reader.pages[i]
        try:
            raw_text = page.extract_text()
            cleaned_text = clean_text(raw_text)
            pages.append({
                "number": i + 1,
                "text": cleaned_text
            })
        except Exception as e:
            print(f"Erro na página {i+1}: {e}")
            pages.append({
                "number": i + 1,
                "text": "[Erro ao extrair o texto desta página]"
            })
            
        if (i + 1) % 50 == 0:
            print(f"Progresso: {i+1}/{total_pages} páginas extraídas...")

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

    # Assegurar que os diretórios existam e salvar o arquivo
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
