import os
import sys
import urllib.request
import json
import zipfile
import shutil
import tempfile
from PySide6.QtCore import QUrl
from PySide6.QtWidgets import QApplication, QMainWindow, QFileDialog, QMessageBox
from PySide6.QtGui import QIcon
from PySide6.QtWebEngineWidgets import QWebEngineView
from PySide6.QtWebEngineCore import QWebEngineDownloadRequest, QWebEngineProfile, QWebEnginePage, QWebEngineSettings

# Configuração do GitHub para o Auto-Updater
# (O usuário deve criar este repositório no GitHub para que o auto-update funcione)
GITHUB_OWNER = "RobsonSilva31"
GITHUB_REPO = "fisioacademic-app"

def check_for_updates(persist_dir, persist_web):
    version_url = f"https://raw.githubusercontent.com/{GITHUB_OWNER}/{GITHUB_REPO}/main/version.json"
    zip_url = f"https://github.com/{GITHUB_OWNER}/{GITHUB_REPO}/archive/refs/heads/main.zip"
    
    local_version_path = os.path.join(persist_dir, 'version.json')
    local_version = 1
    
    if os.path.exists(local_version_path):
        try:
            with open(local_version_path, 'r', encoding='utf-8') as f:
                local_version = json.load(f).get('version', 1)
        except Exception:
            pass
            
    print(f"[Auto-Updater] Versão local atual: {local_version}")
    
    try:
        # Tenta buscar a versão remota no GitHub com timeout curto de 3 segundos
        req = urllib.request.Request(
            version_url, 
            headers={'User-Agent': 'Mozilla/5.0'}
        )
        with urllib.request.urlopen(req, timeout=3) as response:
            remote_data = json.loads(response.read().decode('utf-8'))
            remote_version = remote_data.get('version', 1)
            print(f"[Auto-Updater] Versão no GitHub: {remote_version}")
            
            if remote_version > local_version:
                print("[Auto-Updater] Nova versão encontrada! Iniciando download da atualização...")
                with tempfile.TemporaryDirectory() as temp_dir:
                    zip_path = os.path.join(temp_dir, 'update.zip')
                    
                    # Faz o download do arquivo ZIP
                    download_req = urllib.request.Request(
                        zip_url,
                        headers={'User-Agent': 'Mozilla/5.0'}
                    )
                    with urllib.request.urlopen(download_req, timeout=20) as dl_response:
                        with open(zip_path, 'wb') as out_file:
                            out_file.write(dl_response.read())
                    
                    # Extrai o arquivo ZIP
                    extract_dir = os.path.join(temp_dir, 'extracted')
                    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                        zip_ref.extractall(extract_dir)
                    
                    # Procura a pasta app extraída
                    extracted_web_src = None
                    for root, dirs, files in os.walk(extract_dir):
                        if 'app' in dirs:
                            extracted_web_src = os.path.join(root, 'app')
                            break
                    
                    if extracted_web_src and os.path.exists(extracted_web_src):
                        # Limpa pasta dist_web local para evitar conflito de arquivos obsoletos
                        if os.path.exists(persist_web):
                            shutil.rmtree(persist_web)
                        os.makedirs(persist_web, exist_ok=True)
                        
                        # Copia novos arquivos para a pasta estável
                        for root, dirs, files in os.walk(extracted_web_src):
                            rel_path = os.path.relpath(root, extracted_web_src)
                            dest_path = os.path.join(persist_web, rel_path) if rel_path != '.' else persist_web
                            os.makedirs(dest_path, exist_ok=True)
                            
                            for file in files:
                                shutil.copy2(os.path.join(root, file), os.path.join(dest_path, file))
                        
                        # Salva o novo arquivo de versão local
                        with open(local_version_path, 'w', encoding='utf-8') as f:
                            json.dump({'version': remote_version}, f)
                        print(f"[Auto-Updater] Atualizado com sucesso para a versão {remote_version}!")
                        return True
    except Exception as e:
        print(f"[Auto-Updater] Sem internet ou falha ao buscar atualizações: {e}")
    return False

class ConsolePage(QWebEnginePage):
    def __init__(self, profile, parent=None):
        super().__init__(profile, parent)

    def javaScriptConsoleMessage(self, level, message, lineNumber, sourceID):
        print(f"JS Console: {message} (Line: {lineNumber}, Source: {sourceID})")

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("FisioAcademic - Gestor de Estudos de Fisioterapia")
        self.resize(1280, 800)
        self.setMinimumSize(1024, 768)
        
        # Resolve caminhos e garante diretório de persistência estável
        if getattr(sys, 'frozen', False):
            base_path = sys._MEIPASS
            persist_dir = os.path.join(os.path.expanduser('~'), '.fisio_uniasselve_app')
            persist_web = os.path.join(persist_dir, 'app')
            src_web = os.path.join(base_path, 'app')
            
            # 1. Carrega versão embutida no executável (bundle)
            bundle_version = 1
            bundle_version_path = os.path.join(src_web, 'version.json')
            if os.path.exists(bundle_version_path):
                try:
                    with open(bundle_version_path, 'r', encoding='utf-8') as f:
                        bundle_version = json.load(f).get('version', 1)
                except Exception:
                    pass
            
            # 2. Carrega versão local instalada
            local_version_path = os.path.join(persist_dir, 'version.json')
            local_version = 0
            if os.path.exists(local_version_path):
                try:
                    with open(local_version_path, 'r', encoding='utf-8') as f:
                        local_version = json.load(f).get('version', 1)
                except Exception:
                    pass
            
            # 3. Se a versão embutida for maior, sobrescreve a pasta local (nova versão instalada por instalador/exe)
            if bundle_version > local_version:
                print(f"[Core] Sobrescrevendo pasta local (Versão embutida {bundle_version} > Versão local {local_version})")
                try:
                    if os.path.exists(persist_web):
                        shutil.rmtree(persist_web)
                    os.makedirs(persist_web, exist_ok=True)
                    
                    for root, dirs, files in os.walk(src_web):
                        rel_path = os.path.relpath(root, src_web)
                        dest_path = os.path.join(persist_web, rel_path) if rel_path != '.' else persist_web
                        os.makedirs(dest_path, exist_ok=True)
                        
                        for file in files:
                            shutil.copy2(os.path.join(root, file), os.path.join(dest_path, file))
                            
                    # Atualiza o arquivo de versão local
                    with open(local_version_path, 'w', encoding='utf-8') as f:
                        json.dump({'version': bundle_version}, f)
                except Exception as e:
                    print(f"[Core] Erro ao copiar arquivos estáticos: {e}")
            
            # 4. Procura atualizações online no GitHub
            check_for_updates(persist_dir, persist_web)
            
            entry_path = os.path.join(persist_web, 'index.html')
        else:
            base_path = os.path.dirname(os.path.abspath(__file__))
            entry_path = os.path.join(base_path, 'app', 'index.html')
            persist_dir = os.path.join(base_path, '.dev_storage')
            
        profile_path = os.path.join(persist_dir, 'profile')
        cache_path = os.path.join(persist_dir, 'cache')
        
        # Garante que os caminhos de armazenamento existam
        os.makedirs(profile_path, exist_ok=True)
        os.makedirs(cache_path, exist_ok=True)
        
        # Cria perfil personalizado e persistente com nome de armazenamento exclusivo antes de inicializar a página
        self.profile = QWebEngineProfile("FisioUniasselveProfile", self)
        self.profile.setPersistentStoragePath(profile_path)
        self.profile.setCachePath(cache_path)
        self.profile.setPersistentCookiesPolicy(QWebEngineProfile.PersistentCookiesPolicy.AllowPersistentCookies)
        self.profile.setHttpCacheType(QWebEngineProfile.HttpCacheType.NoCache)
        self.profile.clearHttpCache()
        
        # Garante suporte a localStorage ativo
        self.profile.settings().setAttribute(QWebEngineSettings.LocalStorageEnabled, True)
        
        # Cria a página com o perfil configurado e console capture
        self.page = ConsolePage(self.profile, self)
        
        # Cria a visualização web e associa a página
        self.browser = QWebEngineView()
        self.browser.setPage(self.page)
        
        # Conecta o manipulador de downloads ao perfil
        self.profile.downloadRequested.connect(self.handle_download)
        
        # Define o ícone da janela do aplicativo
        icon_path = os.path.join(base_path, 'logo.png')
        if os.path.exists(icon_path):
            self.setWindowIcon(QIcon(icon_path))
            
        if not os.path.exists(entry_path):
            print(f"Erro: O arquivo de entrada '{entry_path}' nao foi encontrado.")
            sys.exit(1)
            
        # Carrega o arquivo HTML local
        self.browser.setUrl(QUrl.fromLocalFile(entry_path))
        self.setCentralWidget(self.browser)

    def handle_download(self, download: QWebEngineDownloadRequest):
        # Sugere o diretório padrão de Downloads do sistema
        downloads_path = os.path.join(os.path.expanduser('~'), 'Downloads')
        suggested_file = download.suggestedFileName()
        
        # Abre uma caixa de diálogo para salvar o arquivo de forma interativa
        file_path, _ = QFileDialog.getSaveFileName(
            self,
            "Salvar Resumo em PDF",
            os.path.join(downloads_path, suggested_file),
            "Arquivos PDF (*.pdf);;Todos os Arquivos (*)"
        )
        
        if file_path:
            # Substitui barras invertidas no Windows
            clean_path = os.path.normpath(file_path)
            download.setDownloadDirectory(os.path.dirname(clean_path))
            download.setDownloadFileName(os.path.basename(clean_path))
            download.accept()
            
            # Mostra uma mensagem de sucesso quando o download terminar
            download.isFinishedChanged.connect(lambda: self.show_download_finished(download))
        else:
            download.cancel()

    def show_download_finished(self, download: QWebEngineDownloadRequest):
        if download.state() == QWebEngineDownloadRequest.DownloadState.DownloadCompleted:
            QMessageBox.information(
                self,
                "Download Concluído",
                f"O resumo foi exportado com sucesso!\n\nSalvo em: {download.downloadDirectory()}/{download.downloadFileName()}"
            )

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MainWindow()
    window.showMaximized()
    sys.exit(app.exec())
