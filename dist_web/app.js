// FisioAcademic - Módulo Principal (Estado, Roteamento e Grade Curricular)

// A. SISTEMA DE AUTENTICAÇÃO E PERFIS
function getProfileKey(baseKey) {
  const activeProfileId = localStorage.getItem("fisio_active_profile_id");
  if (!activeProfileId) return baseKey;
  return `${activeProfileId}_${baseKey}`;
}
window.getProfileKey = getProfileKey; // Tornar disponível para outros scripts

const THEMES = {
  teal: {
    primary: "#2bbab5",
    secondary: "#69c3be",
    primaryHover: "#229994",
    secondaryHover: "#4db0a9",
    primaryGlow: "rgba(43, 186, 181, 0.15)",
    borderGlass: "rgba(43, 186, 181, 0.15)",
    borderFocus: "rgba(43, 186, 181, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #0e2221 0%, #050808 100%)",
    bgSidebar: "#050808",
    bgCard: "rgba(22, 38, 37, 0.4)",
    bgCardHover: "rgba(30, 53, 51, 0.6)",
    bgCardGradientStart: "rgba(22, 38, 37, 0.8)",
    bgCardGradientEnd: "rgba(10, 15, 15, 0.8)"
  },
  red: {
    primary: "#ef4444",
    secondary: "#f87171",
    primaryHover: "#dc2626",
    secondaryHover: "#ef4444",
    primaryGlow: "rgba(239, 68, 68, 0.15)",
    borderGlass: "rgba(239, 68, 68, 0.15)",
    borderFocus: "rgba(239, 68, 68, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #2a0e0e 0%, #060303 100%)",
    bgSidebar: "#060303",
    bgCard: "rgba(38, 22, 22, 0.4)",
    bgCardHover: "rgba(53, 30, 30, 0.6)",
    bgCardGradientStart: "rgba(38, 22, 22, 0.8)",
    bgCardGradientEnd: "rgba(15, 10, 10, 0.8)"
  },
  purple: {
    primary: "#9d7df8",
    secondary: "#c084fc",
    primaryHover: "#8b5cf6",
    secondaryHover: "#a78bfa",
    primaryGlow: "rgba(157, 125, 248, 0.15)",
    borderGlass: "rgba(157, 125, 248, 0.15)",
    borderFocus: "rgba(157, 125, 248, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #1a0e2f 0%, #050307 100%)",
    bgSidebar: "#050307",
    bgCard: "rgba(30, 22, 38, 0.4)",
    bgCardHover: "rgba(45, 30, 58, 0.6)",
    bgCardGradientStart: "rgba(30, 22, 38, 0.8)",
    bgCardGradientEnd: "rgba(12, 10, 15, 0.8)"
  },
  gold: {
    primary: "#f59e0b",
    secondary: "#fbbf24",
    primaryHover: "#d97706",
    secondaryHover: "#f59e0b",
    primaryGlow: "rgba(245, 158, 11, 0.15)",
    borderGlass: "rgba(245, 158, 11, 0.15)",
    borderFocus: "rgba(245, 158, 11, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #251605 0%, #060403 100%)",
    bgSidebar: "#060403",
    bgCard: "rgba(38, 30, 20, 0.4)",
    bgCardHover: "rgba(53, 40, 26, 0.6)",
    bgCardGradientStart: "rgba(38, 30, 20, 0.8)",
    bgCardGradientEnd: "rgba(15, 12, 10, 0.8)"
  },
  blue: {
    primary: "#3b82f6",
    secondary: "#60a5fa",
    primaryHover: "#2563eb",
    secondaryHover: "#3b82f6",
    primaryGlow: "rgba(59, 130, 246, 0.15)",
    borderGlass: "rgba(59, 130, 246, 0.15)",
    borderFocus: "rgba(59, 130, 246, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #0b1a30 0%, #030406 100%)",
    bgSidebar: "#030406",
    bgCard: "rgba(20, 25, 38, 0.4)",
    bgCardHover: "rgba(28, 35, 53, 0.6)",
    bgCardGradientStart: "rgba(20, 25, 38, 0.8)",
    bgCardGradientEnd: "rgba(10, 12, 18, 0.8)"
  },
  sunset: {
    primary: "#f43f5e",
    secondary: "#fb923c",
    primaryHover: "#e11d48",
    secondaryHover: "#f97316",
    primaryGlow: "rgba(244, 63, 94, 0.15)",
    borderGlass: "rgba(244, 63, 94, 0.15)",
    borderFocus: "rgba(244, 63, 94, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #2e0f1a 0%, #080307 100%)",
    bgSidebar: "#080307",
    bgCard: "rgba(46, 15, 26, 0.4)",
    bgCardHover: "rgba(64, 20, 36, 0.6)",
    bgCardGradientStart: "rgba(46, 15, 26, 0.8)",
    bgCardGradientEnd: "rgba(18, 8, 12, 0.8)"
  },
  oceanic: {
    primary: "#06b6d4",
    secondary: "#3b82f6",
    primaryHover: "#0891b2",
    secondaryHover: "#2563eb",
    primaryGlow: "rgba(6, 182, 212, 0.15)",
    borderGlass: "rgba(6, 182, 212, 0.15)",
    borderFocus: "rgba(6, 182, 212, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #05202c 0%, #03070b 100%)",
    bgSidebar: "#03070b",
    bgCard: "rgba(5, 32, 44, 0.4)",
    bgCardHover: "rgba(8, 48, 66, 0.6)",
    bgCardGradientStart: "rgba(5, 32, 44, 0.8)",
    bgCardGradientEnd: "rgba(2, 12, 18, 0.8)"
  },
  aurora: {
    primary: "#10b981",
    secondary: "#06b6d4",
    primaryHover: "#059669",
    secondaryHover: "#0891b2",
    primaryGlow: "rgba(16, 185, 129, 0.15)",
    borderGlass: "rgba(16, 185, 129, 0.15)",
    borderFocus: "rgba(16, 185, 129, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #062419 0%, #020705 100%)",
    bgSidebar: "#020705",
    bgCard: "rgba(6, 36, 25, 0.4)",
    bgCardHover: "rgba(9, 54, 38, 0.6)",
    bgCardGradientStart: "rgba(6, 36, 25, 0.8)",
    bgCardGradientEnd: "rgba(2, 15, 10, 0.8)"
  },
  cyberpunk: {
    primary: "#ff007f",
    secondary: "#7f00ff",
    primaryHover: "#e60073",
    secondaryHover: "#7300e6",
    primaryGlow: "rgba(255, 0, 127, 0.15)",
    borderGlass: "rgba(255, 0, 127, 0.15)",
    borderFocus: "rgba(255, 0, 127, 0.4)",
    bgApp: "radial-gradient(circle at 50% 0%, #2a0520 0%, #060205 100%)",
    bgSidebar: "#060205",
    bgCard: "rgba(42, 5, 32, 0.4)",
    bgCardHover: "rgba(60, 8, 46, 0.6)",
    bgCardGradientStart: "rgba(42, 5, 32, 0.8)",
    bgCardGradientEnd: "rgba(15, 2, 12, 0.8)"
  }
};

function applyTheme(themeName) {
  const theme = THEMES[themeName] || THEMES.teal;
  const root = document.documentElement;
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--secondary', theme.secondary);
  root.style.setProperty('--primary-hover', theme.primaryHover);
  root.style.setProperty('--secondary-hover', theme.secondaryHover);
  root.style.setProperty('--primary-glow', theme.primaryGlow);
  root.style.setProperty('--border-glass', theme.borderGlass);
  root.style.setProperty('--border-focus', theme.borderFocus);
  root.style.setProperty('--bg-app', theme.bgApp);
  root.style.setProperty('--bg-card', theme.bgCard);
  
  // Custom Dynamic Properties
  root.style.setProperty('--bg-sidebar', theme.bgSidebar);
  root.style.setProperty('--bg-card-hover', theme.bgCardHover);
  root.style.setProperty('--bg-card-gradient-start', theme.bgCardGradientStart);
  root.style.setProperty('--bg-card-gradient-end', theme.bgCardGradientEnd);
}

let selectedSettingsTheme = 'teal';
let selectedSettingsAvatarImage = null;

function setupSettingsThemeSelector(currentTheme) {
  selectedSettingsTheme = currentTheme;
  const themeSelector = document.getElementById("theme-selector-settings");
  if (!themeSelector) return;
  
  const options = themeSelector.querySelectorAll(".color-option");
  options.forEach(opt => {
    const themeName = opt.getAttribute("data-theme");
    
    if (themeName === selectedSettingsTheme) {
      opt.classList.add("selected");
    } else {
      opt.classList.remove("selected");
    }
    
    if (!opt.dataset.listenerBound) {
      opt.dataset.listenerBound = "true";
      opt.addEventListener("click", () => {
        options.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        selectedSettingsTheme = themeName;
        
        applyTheme(themeName);
      });
    }
  });
}

function initSettingsModalControls() {
  const modal = document.getElementById("modal-settings");
  const btnOpen = document.getElementById("btn-open-settings");
  const btnClose = document.getElementById("btn-close-settings");
  const btnSave = document.getElementById("btn-save-settings");
  
  const btnUpload = document.getElementById("btn-settings-upload-avatar");
  const btnRemove = document.getElementById("btn-settings-remove-avatar");
  const fileInput = document.getElementById("settings-avatar-file-input");
  
  const btnExport = document.getElementById("btn-settings-export");
  const btnImport = document.getElementById("btn-settings-import");
  const importInput = document.getElementById("settings-import-file-input");
  
  if (!modal) return;
  
  if (btnOpen) {
    if (!btnOpen.dataset.listenerBound) {
      btnOpen.dataset.listenerBound = "true";
      btnOpen.addEventListener("click", () => {
        const activeProfileId = localStorage.getItem("fisio_active_profile_id");
        const profiles = loadProfiles();
        const activeProfile = profiles.find(p => p.id === activeProfileId);
        if (activeProfile) {
          document.getElementById("settings-name").value = activeProfile.name;
          document.getElementById("settings-semester").value = activeProfile.semester;
          selectedSettingsTheme = activeProfile.theme || 'teal';
          selectedSettingsAvatarImage = activeProfile.avatarImage || null;
          
          if (selectedSettingsAvatarImage) {
            btnRemove.style.display = "flex";
          } else {
            btnRemove.style.display = "none";
          }
          
          setupSettingsThemeSelector(selectedSettingsTheme);
          modal.style.display = "flex";
          lucide.createIcons();
        }
      });
    }
  }
  
  if (btnClose) {
    if (!btnClose.dataset.listenerBound) {
      btnClose.dataset.listenerBound = "true";
      btnClose.addEventListener("click", () => {
        const activeProfileId = localStorage.getItem("fisio_active_profile_id");
        const profiles = loadProfiles();
        const activeProfile = profiles.find(p => p.id === activeProfileId);
        if (activeProfile && activeProfile.theme) {
          applyTheme(activeProfile.theme);
        }
        modal.style.display = "none";
      });
    }
  }
  
  if (btnSave) {
    if (!btnSave.dataset.listenerBound) {
      btnSave.dataset.listenerBound = "true";
      btnSave.addEventListener("click", () => {
        const name = document.getElementById("settings-name").value.trim();
        const semester = parseInt(document.getElementById("settings-semester").value);
        
        if (!name) {
          alert("O nome de exibição não pode ficar vazio!");
          return;
        }
        
        const activeProfileId = localStorage.getItem("fisio_active_profile_id");
        const profiles = loadProfiles();
        const activeProfileIndex = profiles.findIndex(p => p.id === activeProfileId);
        
        if (activeProfileIndex !== -1) {
          profiles[activeProfileIndex].name = name;
          profiles[activeProfileIndex].semester = semester;
          profiles[activeProfileIndex].theme = selectedSettingsTheme;
          
          // Sincroniza a cor do avatar com a cor primária do tema para harmonia visual na seleção de perfis
          const themeObj = THEMES[selectedSettingsTheme] || THEMES.teal;
          profiles[activeProfileIndex].avatarColor = themeObj.primary;
          
          if (selectedSettingsAvatarImage) {
            profiles[activeProfileIndex].avatarImage = selectedSettingsAvatarImage;
          } else {
            delete profiles[activeProfileIndex].avatarImage;
          }
          
          saveProfiles(profiles);
          modal.style.display = "none";
          location.reload();
        }
      });
    }
  }
  
  if (btnUpload && fileInput) {
    if (!btnUpload.dataset.listenerBound) {
      btnUpload.dataset.listenerBound = "true";
      btnUpload.addEventListener("click", () => fileInput.click());
    }
    
    if (!fileInput.dataset.listenerBound) {
      fileInput.dataset.listenerBound = "true";
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        if (file.size > 1024 * 1024) {
          alert("A imagem é muito grande! Escolha uma foto menor (máximo 1MB).");
          return;
        }
        
        const reader = new FileReader();
        reader.onload = function(evt) {
          selectedSettingsAvatarImage = evt.target.result;
          btnRemove.style.display = "flex";
          alert("Foto de perfil carregada! Clique em 'Salvar e Fechar' para confirmar.");
        };
        reader.readAsDataURL(file);
      });
    }
  }
  
  if (btnRemove) {
    if (!btnRemove.dataset.listenerBound) {
      btnRemove.dataset.listenerBound = "true";
      btnRemove.addEventListener("click", () => {
        selectedSettingsAvatarImage = null;
        btnRemove.style.display = "none";
        fileInput.value = "";
        alert("Foto de perfil removida! Clique em 'Salvar e Fechar' para confirmar.");
      });
    }
  }
  
  if (btnExport) {
    if (!btnExport.dataset.listenerBound) {
      btnExport.dataset.listenerBound = "true";
      btnExport.addEventListener("click", () => {
        const backupData = {
          curriculum: localStorage.getItem(getProfileKey("fisio_curriculum")),
          flashcards: localStorage.getItem(getProfileKey("fisio_flashcards")),
          tasks: localStorage.getItem(getProfileKey("fisio_tasks")),
          shifts: localStorage.getItem(getProfileKey("fisio_shifts")),
          settings: localStorage.getItem(getProfileKey("fisio_settings")),
          quizStats: localStorage.getItem(getProfileKey("fisio_quiz_stats"))
        };

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `fisioacademic_backup_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
      });
    }
  }
  
  if (btnImport && importInput) {
    if (!btnImport.dataset.listenerBound) {
      btnImport.dataset.listenerBound = "true";
      btnImport.addEventListener("click", () => importInput.click());
    }
    
    if (!importInput.dataset.listenerBound) {
      importInput.dataset.listenerBound = "true";
      importInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(evt) {
          try {
            const imported = JSON.parse(evt.target.result);
            const keys = ["curriculum", "flashcards", "tasks", "shifts", "settings"];
            const hasKeys = keys.some(key => key in imported);
            
            if (!hasKeys) {
              alert("Erro: O arquivo de backup selecionado não é válido ou está corrompido.");
              return;
            }

            if (confirm("Atenção: A importação de dados substituirá todo o seu progresso atual nesta conta. Deseja continuar?")) {
              if (imported.curriculum) localStorage.setItem(getProfileKey("fisio_curriculum"), imported.curriculum);
              if (imported.flashcards) localStorage.setItem(getProfileKey("fisio_flashcards"), imported.flashcards);
              if (imported.tasks) localStorage.setItem(getProfileKey("fisio_tasks"), imported.tasks);
              if (imported.shifts) localStorage.setItem(getProfileKey("fisio_shifts"), imported.shifts);
              if (imported.settings) localStorage.setItem(getProfileKey("fisio_settings"), imported.settings);
              if (imported.quizStats) localStorage.setItem(getProfileKey("fisio_quiz_stats"), imported.quizStats);

              alert("Progresso importado com sucesso! O aplicativo será recarregado.");
              location.reload();
            }
          } catch (err) {
            alert("Erro ao ler o arquivo de backup: " + err.message);
          }
        };
        reader.readAsText(file);
      });
    }
  }
}

function loadProfiles() {
  return JSON.parse(localStorage.getItem("fisio_profiles") || "[]");
}

function saveProfiles(profiles) {
  localStorage.setItem("fisio_profiles", JSON.stringify(profiles));
}

function showAuthScreen(screenId) {
  document.getElementById("auth-screen-login").style.display = "none";
  document.getElementById("auth-screen-select").style.display = "none";
  document.getElementById("auth-screen-register").style.display = "none";
  document.getElementById(`auth-screen-${screenId}`).style.display = "block";
}

let isManagingProfiles = false;

function renderProfilesList() {
  const listEl = document.getElementById("auth-profiles-list");
  if (!listEl) return;
  listEl.innerHTML = "";
  
  const profiles = loadProfiles();
  
  profiles.forEach(p => {
    const initials = p.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
    const card = document.createElement("div");
    card.className = "profile-card";
    card.setAttribute("data-id", p.id);
    
    let avatarContent = `<div class="profile-avatar-circle" style="background: ${p.avatarColor};">${initials}</div>`;
    if (p.avatarImage) {
      avatarContent = `<div class="profile-avatar-circle" style="background: none; overflow: hidden;"><img src="${p.avatarImage}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;"></div>`;
    }
    
    card.innerHTML = `
      <button class="profile-delete-btn" title="Excluir Perfil">&times;</button>
      ${avatarContent}
      <div class="profile-name">${p.name}</div>
    `;
    
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("profile-delete-btn")) {
        e.stopPropagation();
        deleteProfile(p.id);
        return;
      }
      selectProfileForLogin(p);
    });
    
    listEl.appendChild(card);
  });
  
  const addCard = document.createElement("div");
  addCard.className = "profile-card add-profile";
  addCard.innerHTML = `
    <div class="profile-avatar-circle"><i data-lucide="plus" style="width: 24px; height: 24px;"></i></div>
    <div class="profile-name">Novo Perfil</div>
  `;
  addCard.addEventListener("click", () => {
    document.getElementById("form-register").reset();
    document.getElementById("link-register-back").style.display = "block";
    showAuthScreen("register");
    lucide.createIcons();
  });
  listEl.appendChild(addCard);
  
  lucide.createIcons();
}

function selectProfileForLogin(profile) {
  document.getElementById("select-user-display-name").textContent = profile.name;
  document.getElementById("login-select-userid").value = profile.id;
  document.getElementById("login-select-password").value = profile.rememberPassword && profile.password ? profile.password : "";
  document.getElementById("login-select-remember").checked = !!profile.rememberPassword;
  document.getElementById("auth-select-password-area").style.display = "block";
  document.getElementById("login-select-password").focus();
}

function deleteProfile(profileId) {
  const profiles = loadProfiles();
  const profile = profiles.find(p => p.id === profileId);
  if (!profile) return;
  
  if (confirm(`Deseja realmente excluir o perfil de ${profile.name}? Todos os dados de estudos dele serão apagados permanentemente!`)) {
    const updated = profiles.filter(p => p.id !== profileId);
    saveProfiles(updated);
    
    const keys = ["fisio_curriculum", "fisio_flashcards", "fisio_tasks", "fisio_shifts", "fisio_settings", "fisio_quiz_stats", "fisio_pomo_study_duration", "fisio_pomo_break_duration"];
    keys.forEach(k => {
      localStorage.removeItem(`${profileId}_${k}`);
    });
    
    if (localStorage.getItem("fisio_active_profile_id") === profileId) {
      localStorage.removeItem("fisio_active_profile_id");
    }
    
    isManagingProfiles = false;
    document.getElementById("auth-profiles-list").classList.remove("managing-profiles");
    document.getElementById("link-select-manage").textContent = "Gerenciar Perfis";
    
    checkAuthAndStart();
  }
}

function checkAuthAndStart() {
  setupAuthEvents();

  // Reset active profile on new session (app launch) so they are prompted to login/select user
  if (!sessionStorage.getItem("fisio_session_active")) {
    localStorage.removeItem("fisio_active_profile_id");
  }

  const profiles = loadProfiles();
  const activeProfileId = localStorage.getItem("fisio_active_profile_id");
  const activeProfile = profiles.find(p => p.id === activeProfileId);
  
  if (activeProfileId && activeProfile) {
    document.getElementById("auth-overlay").style.display = "none";
    if (activeProfile.theme) {
      applyTheme(activeProfile.theme);
    }
    initApp();
  } else {
    document.getElementById("auth-overlay").style.display = "flex";
    document.getElementById("auth-select-password-area").style.display = "none";
    
    if (profiles.length === 0) {
      document.getElementById("form-register").reset();
      document.getElementById("link-register-back").style.display = "none";
      showAuthScreen("register");
    } else if (profiles.length === 1) {
      const p = profiles[0];
      document.getElementById("login-user-display-name").textContent = p.name;
      document.getElementById("login-simple-userid").value = p.id;
      document.getElementById("login-simple-password").value = p.rememberPassword && p.password ? p.password : "";
      document.getElementById("login-simple-remember").checked = !!p.rememberPassword;
      showAuthScreen("login");
    } else {
      isManagingProfiles = false;
      document.getElementById("auth-profiles-list").classList.remove("managing-profiles");
      document.getElementById("link-select-manage").textContent = "Gerenciar Perfis";
      showAuthScreen("select");
      renderProfilesList();
    }
  }
}

function setupAuthEvents() {
  if (window.authEventsConfigured) return;
  window.authEventsConfigured = true;
  
  const colorOptions = document.querySelectorAll("#reg-color-selector .color-option");
  colorOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      colorOptions.forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      document.getElementById("reg-color").value = opt.getAttribute("data-color");
    });
  });
  
  // Lógica de Foto de Perfil no Cadastro
  const btnRegUpload = document.getElementById("btn-reg-upload-avatar");
  const btnRegRemove = document.getElementById("btn-reg-remove-avatar");
  const regFileInput = document.getElementById("reg-avatar-file-input");
  const regAvatarPreview = document.getElementById("reg-avatar-preview");
  const regAvatarImageHidden = document.getElementById("reg-avatar-image");
  
  if (btnRegUpload && regFileInput) {
    if (!btnRegUpload.dataset.listenerBound) {
      btnRegUpload.dataset.listenerBound = "true";
      btnRegUpload.addEventListener("click", () => regFileInput.click());
    }
    
    if (!regFileInput.dataset.listenerBound) {
      regFileInput.dataset.listenerBound = "true";
      regFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        if (file.size > 1024 * 1024) {
          alert("A imagem é muito grande! Escolha uma foto menor (máximo 1MB).");
          return;
        }
        
        const reader = new FileReader();
        reader.onload = function(evt) {
          const base64Str = evt.target.result;
          regAvatarImageHidden.value = base64Str;
          regAvatarPreview.innerHTML = `<img src="${base64Str}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
          regAvatarPreview.style.background = "none";
          btnRegRemove.style.display = "flex";
        };
        reader.readAsDataURL(file);
      });
    }
    
    if (!btnRegRemove.dataset.listenerBound) {
      btnRegRemove.dataset.listenerBound = "true";
      btnRegRemove.addEventListener("click", () => {
        regAvatarImageHidden.value = "";
        regAvatarPreview.innerHTML = "+";
        regAvatarPreview.style.background = "rgba(255,255,255,0.05)";
        btnRegRemove.style.display = "none";
        regFileInput.value = "";
      });
    }
  }

  document.getElementById("form-register").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const username = document.getElementById("reg-username").value.trim().toLowerCase();
    const password = document.getElementById("reg-password").value;
    const semester = document.getElementById("reg-semester").value;
    const avatarImage = document.getElementById("reg-avatar-image").value;
    
    const profiles = loadProfiles();
    if (profiles.some(p => p.username === username)) {
      alert("Este nome de usuário já está cadastrado neste computador.");
      return;
    }
    
    const newProfile = {
      id: "profile_" + Date.now(),
      name,
      username,
      password,
      avatarColor: "#2bbab5", // Default avatar color (Teal theme primary)
      avatarImage: avatarImage || undefined,
      semester: parseInt(semester),
      theme: "teal", // Default theme is Teal
      rememberPassword: true
    };
    
    if (profiles.length === 0) {
      const hasLegacyData = localStorage.getItem("fisio_curriculum") !== null;
      if (hasLegacyData) {
        const legacyKeys = ["fisio_curriculum", "fisio_flashcards", "fisio_tasks", "fisio_shifts", "fisio_settings", "fisio_quiz_stats", "fisio_pomo_study_duration", "fisio_pomo_break_duration"];
        legacyKeys.forEach(k => {
          const val = localStorage.getItem(k);
          if (val !== null) {
            localStorage.setItem(`${newProfile.id}_${k}`, val);
            localStorage.removeItem(k);
          }
        });
        alert("Detectamos progresso anterior neste computador! Seus dados foram importados com sucesso para o seu novo perfil.");
      }
    }
    
    profiles.push(newProfile);
    saveProfiles(profiles);
    
    sessionStorage.setItem("fisio_session_active", "true");
    localStorage.setItem("fisio_active_profile_id", newProfile.id);
    location.reload();
  });
  
  document.getElementById("form-login-simple").addEventListener("submit", (e) => {
    e.preventDefault();
    const userid = document.getElementById("login-simple-userid").value;
    const pass = document.getElementById("login-simple-password").value;
    const remember = document.getElementById("login-simple-remember").checked;
    
    const profiles = loadProfiles();
    const p = profiles.find(p => p.id === userid);
    
    if (p && p.password === pass) {
      p.rememberPassword = remember;
      saveProfiles(profiles);
      sessionStorage.setItem("fisio_session_active", "true");
      localStorage.setItem("fisio_active_profile_id", p.id);
      location.reload();
    } else {
      alert("Senha incorreta!");
    }
  });
  
  document.getElementById("form-login-select").addEventListener("submit", (e) => {
    e.preventDefault();
    const userid = document.getElementById("login-select-userid").value;
    const pass = document.getElementById("login-select-password").value;
    const remember = document.getElementById("login-select-remember").checked;
    
    const profiles = loadProfiles();
    const p = profiles.find(p => p.id === userid);
    
    if (p && p.password === pass) {
      p.rememberPassword = remember;
      saveProfiles(profiles);
      sessionStorage.setItem("fisio_session_active", "true");
      localStorage.setItem("fisio_active_profile_id", p.id);
      location.reload();
    } else {
      alert("Senha incorreta!");
    }
  });
  
  document.getElementById("link-login-switch").addEventListener("click", (e) => {
    e.preventDefault();
    isManagingProfiles = false;
    document.getElementById("auth-profiles-list").classList.remove("managing-profiles");
    document.getElementById("link-select-manage").textContent = "Gerenciar Perfis";
    showAuthScreen("select");
    renderProfilesList();
  });
  
  document.getElementById("link-register-back").addEventListener("click", (e) => {
    e.preventDefault();
    const profiles = loadProfiles();
    if (profiles.length === 1) {
      showAuthScreen("login");
    } else {
      showAuthScreen("select");
      renderProfilesList();
    }
  });
  
  document.getElementById("link-select-add").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("form-register").reset();
    document.getElementById("link-register-back").style.display = "block";
    showAuthScreen("register");
  });
  
  document.getElementById("link-select-manage").addEventListener("click", (e) => {
    e.preventDefault();
    isManagingProfiles = !isManagingProfiles;
    const listEl = document.getElementById("auth-profiles-list");
    const linkEl = document.getElementById("link-select-manage");
    
    if (isManagingProfiles) {
      listEl.classList.add("managing-profiles");
      linkEl.textContent = "Concluir";
    } else {
      listEl.classList.remove("managing-profiles");
      linkEl.textContent = "Gerenciar Perfis";
    }
  });
  
  const btnSwitch = document.getElementById("btn-switch-user");
  if (btnSwitch) {
    btnSwitch.addEventListener("click", () => {
      localStorage.removeItem("fisio_active_profile_id");
      sessionStorage.removeItem("fisio_session_active");
      location.reload();
    });
  }
  
  const btnLogout = document.getElementById("btn-logout-user");
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      localStorage.removeItem("fisio_active_profile_id");
      sessionStorage.removeItem("fisio_session_active");
      location.reload();
    });
  }
}

// 1. ESTADO GLOBAL DO APLICATIVO
const state = {
  curriculum: [],
  flashcards: [],
  plannerTasks: [],
  internshipShifts: [],
  settings: {
    currentSemester: 1
  }
};

// Citações Motivacionais de Fisioterapia & Saúde
const MOTIVATIONAL_QUOTES = [{'text': 'O movimento é a nossa arma, a atividade é o nosso objetivo e a independência é a nossa recompensa.', 'author': 'Hipócrates', 'context': 'A cinesioterapia é a base da reabilitação física. O foco é sempre restabelecer a função motora e a autonomia nas atividades de vida diária (AVDs).'}, {'text': 'Estudar anatomia é compreender a obra-prima mecânica que é o corpo humano.', 'author': 'Leonardo da Vinci', 'context': 'A anatomia palpatória e o conhecimento das origens e inserções musculares guiam o fisioterapeuta na identificação exata dos pontos de dor e disfunção.'}, {'text': 'A fisioterapia devolve a vida aos anos, não apenas anos à vida.', 'author': 'Dra. Florence Kendall', 'context': 'Foco na qualidade de vida global do paciente. O tratamento fisioterapêutico busca reintegrar o indivíduo à sociedade livre de dor e limitações mecânicas.'}, {'text': 'As mãos de um fisioterapeuta são capazes de escutar a dor de um paciente e guiar sua superação.', 'author': 'Thierry Janssen', 'context': 'A terapia manual (mobilizações, liberação miofascial) exige sensibilidade tátil refinada e anamnese detalhada para obter os melhores resultados.'}, {'text': 'A persistência realiza o impossível. Cada dia de estudo te aproxima do seu jaleco.', 'author': 'Provérbio Acadêmico', 'context': 'A jornada da fisioterapia exige dedicação teórica intensa e treinamento prático constante nos laboratórios. Cada hora de estudo constrói o profissional de amanhã.'}, {'text': 'Na fisioterapia neurológica, cada milímetro de movimento reconquistado é uma vitória monumental.', 'author': 'Dr. Berta Bobath', 'context': 'A neuroplasticidade permite que o cérebro lesionado aprenda novos caminhos. O estímulo motor repetitivo e funcional é a chave da reabilitação pós-AVC.'}, {'text': 'Não force o paciente. Adapte a conduta, observe a biomecânica, confie na fisiologia.', 'author': 'Dr. Robin McKenzie', 'context': 'O tratamento deve ser individualizado. Se um exercício causa dor nociceptiva exagerada, a amplitude ou a carga devem ser ajustadas imediatamente.'}, {'text': 'A anatomia é para a fisioterapia o que o mapa é para o navegador.', 'author': 'Dr. Kendall', 'context': 'Dominar os dermátomos, miótomos e trajetos nervosos é essencial para diferenciar dores referidas de dores locais nas avaliações.'}, {'text': 'A cura é uma questão de tempo, mas às vezes também é uma questão de oportunidade.', 'author': 'Hipócrates', 'context': 'Intervir precocemente em lesões agudas (ex: entorse de tornozelo) previne fibrose, perda de amplitude e instabilidade crônica.'}, {'text': 'Cure algumas vezes, alivie frequentemente, console sempre.', 'author': 'Dr. Edward Trudeau', 'context': 'A empatia e a escuta ativa no atendimento clínico são tão terapêuticas quanto as técnicas manuais ou a eletroterapia aplicadas.'}, {'text': 'O corpo humano é uma máquina térmica e biomecânica perfeita; o fisioterapeuta é seu engenheiro de manutenção.', 'author': 'Dr. Jules Amar', 'context': 'Avaliar o alinhamento postural, os desequilíbrios musculares e as forças de cisalhamento nas articulações é a chave da cinesiologia.'}, {'text': 'O movimento cura a mente e o corpo. A inatividade corrói a saúde.', 'author': 'Sêneca', 'context': 'O repouso absoluto prolongado causa atrofia muscular e rigidez articular. O movimento precoce e controlado acelera a recuperação tecidual.'}, {'text': 'A saúde não é apenas a ausência de doença, mas a harmonia perfeita do movimento e da mente.', 'author': 'Dr. William Osler', 'context': 'Adote uma visão biopsicossocial do paciente. Fatores emocionais e laborais influenciam diretamente na percepção da dor física crônica.'}, {'text': 'Sem a cinesioterapia, a reabilitação física seria apenas uma teoria passiva.', 'author': 'Dra. Florence Kendall', 'context': 'O exercício ativo terapêutico é o recurso com maior nível de evidência científica para ganho de força, amplitude e controle motor.'}, {'text': 'Nosso papel não é apenas tratar a patologia, mas devolver a dignidade funcional ao paciente.', 'author': 'Dra. Cicely Saunders', 'context': 'Reabilitar a função de marcha ou a pinça fina de uma mão permite que o paciente se alimente, higienize e viva com autonomia.'}, {'text': 'O toque terapêutico transmite segurança, avalia a rigidez e inicia o processo de cura.', 'author': 'Dr. Albert Schweitzer', 'context': 'A palpação atenta identifica pontos-gatilho (trigger points), espasmos de defesa protetores e variações de temperatura local.'}, {'text': 'O movimento funcional é a linguagem do sistema nervoso central.', 'author': 'Dr. Charles Sherrington', 'context': 'O cérebro reconhece padrões de movimento completos (ex: pegar um copo) e não contrações musculares isoladas. Treine gestos funcionais.'}, {'text': 'Estudar fisiologia do exercício é entender como o corpo se adapta ao estresse para se tornar mais forte.', 'author': 'Dr. Archibald Hill', 'context': 'A aplicação de sobrecarga progressiva gera microlesões controladas e adaptações fisiológicas (hipertrofia e capilarização muscular).'}, {'text': 'A dor é um sinal de alerta, mas a cinesiofobia é o verdadeiro obstáculo na reabilitação.', 'author': 'Dr. Gordon Waddell', 'context': 'O medo de se movimentar (cinesiofobia) prolonga a incapacidade. Educar o paciente sobre a dor é parte vital do tratamento.'}, {'text': 'O sucesso da reabilitação depende de um diagnóstico cinésio-funcional preciso.', 'author': 'Dr. Vladimir Janda', 'context': 'Diferencie a causa da dor da compensação. Uma dor no joelho pode ser causada por uma fraqueza de glúteo médio (valgo dinâmico).'}, {'text': 'A flexibilidade articular e a estabilidade muscular caminham de mãos dadas.', 'author': 'Dr. Shirley Sahrmann', 'context': 'Articulações hipermóveis exigem estabilização ativa intensa. Articulações rígidas demandam mobilização e alongamento.'}, {'text': 'A respiração é o primeiro e o último ato da vida física. Cuidar dela é essencial.', 'author': 'Dr. Joseph Pilates', 'context': 'A fisioterapia respiratória reexpande alvéolos colapsados, otimiza a troca gasosa e melhora a mecânica ventilatória do diafragma.'}, {'text': 'Cada paciente que entra no consultório é um livro de biomecânica e patologia único.', 'author': 'Dra. Kendall', 'context': 'Evite protocolos prontos. Ajuste a conduta com base nas limitações anatômicas específicas avaliadas em cada consulta.'}, {'text': 'A melhor postura é a próxima postura. O segredo está na dinâmica.', 'author': 'Dr. Galen Cranz', 'context': 'Não existe postura estática perfeita por horas. O corpo humano necessita de alternância de posição para manter a nutrição dos tecidos.'}, {'text': 'Trabalhar com fisioterapia é devolver o controle motor que a lesão tentou roubar.', 'author': 'Dr. Sherrington', 'context': 'O feedback proprioceptivo e visual ajuda o córtex motor a reorganizar as sinapses enfraquecidas pela lesão periférica ou central.'}, {'text': 'O repouso prolongado é o inimigo número um da cartilagem articular.', 'author': 'Dr. Robert Salter', 'context': 'A cartilagem articular é avascular e se nutre por embebição durante a compressão e descompressão do movimento. Mova a articulação.'}, {'text': 'O fisioterapeuta é o profissional que escuta com os olhos e vê com as mãos.', 'author': 'Thierry Janssen', 'context': 'A inspeção visual da marcha revela compensações sutis, enquanto o toque identifica restrições fasciais e contraturas profundas.'}, {'text': 'A reabilitação cardiovascular prova que o exercício é o medicamento mais potente para o coração.', 'author': 'Dr. Herman Hellerstein', 'context': 'O treino aeróbico controlado aumenta o débito cardíaco, reduz a frequência cardíaca de repouso e melhora a complacência arterial.'}, {'text': 'O músculo estriado esquelético possui uma capacidade plástica fantástica de adaptação.', 'author': 'Dr. Archibald Hill', 'context': 'Adapte o treino: fibras do tipo I (oxidativas) exigem treino de endurance; fibras do tipo II (glicolíticas) respondem a treinos de explosão e força.'}, {'text': 'A coluna vertebral foi feita para movimentar-se em flexão, extensão, inclinação e rotação.', 'author': 'Dr. Robin McKenzie', 'context': 'Evitar o movimento da coluna por medo gera rigidez. O movimento gradual e direcionado restaura a hidratação dos discos intervertebrais.'}, {'text': 'O alinhamento do pé influencia a mecânica de toda a cadeia cinética ascendente.', 'author': 'Dr. Root', 'context': 'Um pé excessivamente pronado gera rotação interna da tíbia, valgo de joelho e báscula pélvica. Avalie sempre a pisada e os calçados.'}, {'text': 'O principal agente de cura na fisioterapia é o próprio paciente em movimento ativo.', 'author': 'Dra. Florence Kendall', 'context': 'A terapia passiva (aparelhos e massagem) prepara o tecido, mas o ganho real de função só ocorre por meio do exercício ativo e funcional.'}, {'text': 'A fáscia muscular é uma rede contínua que conecta todo o corpo, da cabeça aos pés.', 'author': 'Dr. Thomas Myers', 'context': 'Restrições fasciais em uma cadeia muscular podem gerar dor em uma articulação distante. A liberação miofascial trata a cadeia como um todo.'}, {'text': 'A força sem controle motor é apenas gasto de energia inútil.', 'author': 'Dr. Vladimir Janda', 'context': 'Treine a coordenação intermuscular e intramuscular. A ativação no tempo correto (timing) é mais importante do que a força bruta isolada.'}, {'text': 'O cérebro não conhece os músculos isolados, apenas os padrões de movimento.', 'author': 'Dr. Hughlings Jackson', 'context': 'Ao prescrever exercícios neurológicos, foque em tarefas como alcançar, sentar e levantar ou transferir objetos para estimular a plasticidade.'}, {'text': 'A fisioterapia na UTI salva vidas ao manter a funcionalidade e a ventilação do paciente graves.', 'author': 'Dra. Cicely Saunders', 'context': 'A mobilização precoce no leito reduz o tempo de ventilação mecânica, previne a fraqueza adquirida na UTI (FAUTI) e acelera a alta.'}, {'text': 'Na hidroterapia, a flutuabilidade e a pressão hidrostática trabalham a favor da reabilitação.', 'author': 'Arquimedes', 'context': 'A água aquecida reduz a descarga de peso nas articulações, diminui a dor por estímulo térmico e melhora o retorno venoso pela compressão.'}, {'text': 'A propriocepção é o sentido da posição articular que nos protege de novas lesões.', 'author': 'Dr. Sherrington', 'context': 'Treinos em superfícies instáveis (discos, cama elástica) estimulam os mecanorreceptores capsulares e ligamentares, prevenindo recidivas de entorses.'}, {'text': 'A eletroterapia modula a dor, mas o movimento devolve a função.', 'author': 'Dr. Ronald Melzack', 'context': "O TENS estimula as fibras beta de toque, fechando a 'teoria das comportas' na medula. Use-o para aliviar a dor e permitir o exercício ativo."}, {'text': 'A cinesiologia é a física aplicada à poesia do movimento humano.', 'author': 'Dr. Jules Amar', 'context': 'Estudar os braços de alavanca, torque muscular e eixos articulares permite otimizar a eficácia dos exercícios e proteger as articulações dos pacientes.'}, {'text': 'O envelhecimento ativo exige a manutenção da massa muscular e do equilíbrio dinâmico.', 'author': 'Dra. Florence Kendall', 'context': 'A sarcopenia (perda de massa muscular) em idosos aumenta o risco de quedas. O treino de força resistida é essencial na geriatria.'}, {'text': 'O diafragma é o motor da respiração e o estabilizador central da coluna.', 'author': 'Dr. Joseph Pilates', 'context': 'A contração do diafragma aumenta a pressão intra-abdominal, auxiliando na estabilização lombar (core) durante esforços físicos intensos.'}, {'text': 'Tratar a dor crônica exige paciência, educação e dessensibilização sistemática.', 'author': 'Dr. Gordon Waddell', 'context': 'Na dor crônica, o sistema de dor está hipersensível (sensibilização central). O exercício aeróbico leve ajuda a liberar endorfinas e modular a dor.'}, {'text': 'O fisioterapeuta atua na linha de frente da promoção de saúde e prevenção de lesões.', 'author': 'Hipócrates', 'context': 'Orientar sobre ergonomia no trabalho, pausas ativas e postura previne o desenvolvimento de DORT/LER e afasta o trabalhador da invalidez.'}, {'text': 'A reabilitação vestibular devolve o equilíbrio e a estabilidade visual a quem sofre de tontura.', 'author': 'Dr. Georges Baloh', 'context': 'Exercícios de adaptação e habituação visual e manobras de reposicionamento canalicular (ex: Epley) tratam eficazmente a VPPB.'}, {'text': 'O tendão precisa de carga progressiva para se reorganizar e cicatrizar.', 'author': 'Dr. Jill Cook', 'context': 'O repouso absoluto prejudica as tendinopatias. Exercícios isométricos e excêntricos estimulam a síntese de colágeno alinhado e fortalecem o tendão.'}, {'text': 'O joelho é uma articulação intermediária altamente influenciada pelo quadril e pelo tornozelo.', 'author': 'Dr. Vladimir Janda', 'context': 'Fraquezas de glúteo médio ou limitação de dorsiflexão do tornozelo forçam compensações rotacionais no joelho. Trate as articulações vizinhas.'}, {'text': 'A goniometria quantifica a evolução do paciente e valida a eficácia do tratamento físico.', 'author': 'Dra. Kendall', 'context': 'Medir a amplitude de movimento (ADM) com o goniômetro na avaliação e reavaliação fornece dados objetivos da melhora articular do paciente.'}, {'text': 'O fisioterapeuta é um facilitador que devolve a independência perdida.', 'author': 'Dra. Florence Kendall', 'context': 'Nosso objetivo final é dar alta ao paciente, munindo-o de autocuidado, exercícios domiciliares e consciência corporal para que viva de forma plena.'}, {'text': 'A anatomia palpatória é o elo de conexão entre o mapa mental e o corpo real do paciente.', 'author': 'Thierry Janssen', 'context': 'Tocar relevos ósseos, ventres musculares e tendões com precisão garante o sucesso da terapia manual e a segurança na aplicação de recursos físicos.'}];

// Dicas Clínicas Rápidas
const CLINICAL_TIPS = [{'title': 'Manguito Rotador', 'text': 'O músculo supraespinal é o mais lesionado e inicia a abdução do ombro (primeiros 15°).', 'test': '<strong>Teste de Jobe:</strong> Braços abduzidos a 90° e rodados internamente (polegares para baixo). Se houver dor ou fraqueza contra resistência, é positivo para lesão do supraespinal.', 'image': 'tip_manguito.png'}, {'title': 'Marcha Ceifante (Hemiparética)', 'text': 'Comum em pacientes pós-AVC devido ao padrão flexor de membro superior e extensor de membro inferior.', 'test': '<strong>Observação Clínica:</strong> O paciente realiza um movimento de semicírculo com a perna afetada para evitar que o pé (em flexão plantar/equino) arraste no chão.', 'image': 'tip_marcha.png'}, {'title': 'Ultrassom Terapêutico', 'text': 'Frequência de 1MHz penetra profundamente (até 5cm) para tecidos profundos; 3MHz é absorvido superficialmente (1-2cm).', 'test': '<strong>Aplicação Prática:</strong> Use 1MHz para tendinopatias crônicas profundas (quadril, joelho) e 3MHz para cicatrizes superficiais e tendões finos (punho, dedos).', 'image': 'tip_ultrassom.png'}, {'title': 'Paralisia Facial Periférica (Bell)', 'text': 'Acomete o VII par craniano (nervo facial). Afeta toda a hemiface do mesmo lado da lesão.', 'test': '<strong>Diferencial Clínico:</strong> Na paralisia facial CENTRAL (AVC), a metade superior da face (testa) é poupada. Na periférica, o paciente não consegue franzir a testa.', 'image': 'tip_paralisia.png'}, {'title': 'Espasticidade Muscular', 'text': 'Distúrbio motor caracterizado pelo aumento do tônus muscular dependente da velocidade.', 'test': "<strong>Escala de Ashworth Modificada:</strong> Grau 0 (tônus normal) ao Grau 4 (membro rígido em flexão ou extensão). O sinal do 'canivete' é clássico na espasticidade.", 'image': 'tip_espasticidade.png'}, {'title': 'Gasometria Arterial', 'text': 'pH < 7.35 indica acidose; pH > 7.45 indica alcalose. PaCO2 normal é 35-45 mmHg. HCO3 normal é 22-26 mEq/L.', 'test': '<strong>Interpretação Rápida:</strong> Se pH está baixo e PaCO2 alto, é Acidose Respiratória. Se pH está baixo e HCO3 está baixo, é Acidose Metabólica.', 'image': 'tip_gasometria.png'}, {'title': 'Nervo Ciático (Compressão)', 'text': 'A compressão pode ocorrer na coluna lombar ou por espasmo do músculo piriforme no quadril.', 'test': '<strong>Teste de Elevação da Perna Estendida (Lasegue):</strong> Eleve a perna reta do paciente. Dor irradiada na face posterior da coxa/perna entre 30° e 70° indica radiculopatia L5-S1.', 'image': 'tip_marcha.png'}, {'title': 'Tendão de Aquiles (Ruptura)', 'text': 'O tendão calcâneo une o gastrocnêmio e o sóleo ao osso calcâneo. Rupturas são comuns em esportistas.', 'test': '<strong>Teste de Thompson:</strong> Paciente em decúbito ventral com pés fora da maca. Aperte a panturrilha; se o pé não realizar flexão plantar, indica ruptura completa do tendão.', 'image': 'tip_marcha.png'}, {'title': 'Síndrome do Túnel do Carpo', 'text': 'Compressão do nervo mediano no canal flexor do punho por inflamação de tendões.', 'test': '<strong>Teste de Phalen:</strong> Flexão máxima dos dois punhos tocando as costas das mãos por 60 segundos. O teste é positivo se houver parestesia (formigamento) nos dedos polegar, indicador e médio.', 'image': 'tip_manguito.png'}, {'title': 'Ligamento Cruzado Anterior (LCA)', 'text': 'O LCA evita a translação anterior excessiva da tíbia em relação ao fêmur no joelho.', 'test': '<strong>Teste de Gaveta Anterior:</strong> Joelho flexionado a 90°. Puxe a tíbia anteriormente. Uma translação anterior amolecida ou excessiva (sem batente firme) confirma lesão.', 'image': 'tip_marcha.png'}, {'title': 'Nervo Ulnar (Canal de Guyon)', 'text': 'O nervo ulnar passa entre os ossos pisiforme e hâmulo do ganchoso no punho.', 'test': '<strong>Sinal de Froment:</strong> Peça ao paciente para segurar um papel entre o polegar e o indicador. Se ele flexionar a interfalângica do polegar (usando o flexor longo do polegar/n. mediano) em vez de aduzir (adutor do polegar/n. ulnar), indica paralisia ulnar.', 'image': 'tip_manguito.png'}, {'title': 'Dermátomos de Membro Superior', 'text': 'C5 inerva a face lateral do braço; C6 inerva a face lateral do antebraço e o polegar; C7 inerva o dedo médio.', 'test': '<strong>Avaliação Sensitiva:</strong> Teste a sensibilidade tátil com algodão e dolorosa com agulha fina comparando ambos os lados para diagnosticar o nível da lesão cervical.', 'image': 'tip_manguito.png'}, {'title': 'Eletroterapia (TENS Burst)', 'text': 'Modulação com salvas de pulsos (Burst) estimula a liberação de opioides endógenos de efeito duradouro.', 'test': '<strong>Aplicação Clínica:</strong> Indicado para dores crônicas profundas. Ajuste a frequência de Burst (1-4 Hz) e posicione os eletrodos sobre o dermátomo ou ponto de dor.', 'image': 'tip_ultrassom.png'}, {'title': 'Linfedema (Fisioterapia Vascular)', 'text': 'Acúmulo de líquido linfático no espaço intersticial por insuficiência ou retirada de linfonodos.', 'test': '<strong>Sinal de Stemmer:</strong> Incapacidade de pinçar a pele da base do segundo dedo do pé ou da mão. Se positivo, confirma linfedema crônico.', 'image': 'tip_espasticidade.png'}, {'title': 'Paralisia Facial Central', 'text': 'Lesão encefálica (ex: AVC) acomete apenas o quadrante inferior da face contralateral à lesão.', 'test': '<strong>Avaliação Facial:</strong> O paciente consegue franzir a testa e fechar os olhos de forma preservada, devido à inervação cortical bilateral do núcleo do nervo facial superior.', 'image': 'tip_paralisia.png'}, {'title': 'Ângulo Q do Joelho', 'text': 'Ângulo entre a linha de tração do quadríceps e a linha do tendão patelar. Normal: 12° a 18°.', 'test': '<strong>Implicação Clínica:</strong> Um ângulo Q aumentado indica joelho valgo, o que aumenta a força de cisalhamento patelofemoral lateral, gerando condromalácia.', 'image': 'tip_marcha.png'}, {'title': 'Ventilação Não-Invasiva (VNI)', 'text': 'A aplicação de pressão positiva (CPAP ou BiPAP) reduz o trabalho respiratório e melhora a troca alveolar.', 'test': '<strong>Critério de Uso:</strong> Indicado em Edema Agudo de Pulmão (EAP) e DPOC exacerbado. Monitore sinais de intolerância, distensão gástrica e lesões de pele.', 'image': 'tip_gasometria.png'}, {'title': 'Síndrome de De Quervain', 'text': 'Tenossinovite estenosante do abdutor longo e extensor curto do polegar no primeiro compartimento extensor.', 'test': '<strong>Teste de Finkelstein:</strong> Paciente fecha a mão com o polegar fletido sob os outros dedos e realiza desvio ulnar passivo. Dor aguda no estiloide do rádio indica tenossinovite.', 'image': 'tip_manguito.png'}, {'title': 'Nistagmo Posicional (VPPB)', 'text': 'Presença de nistagmo provocado por alteração rápida da posição da cabeça em pacientes com Vertigem Posicional Paroxística Benigna.', 'test': '<strong>Manobra de Dix-Hallpike:</strong> Movimento rápido de rotação da cabeça a 45° seguido de deitar o paciente em decúbito dorsal estendendo o pescoço 20°. Nistagmo positivo confirma VPPB.', 'image': 'tip_paralisia.png'}, {'title': 'Tenotomia de Bíceps (Cabeça Longa)', 'text': 'O tendão da cabeça longa do bíceps braquial passa pelo sulco intertubercular do úmero.', 'test': '<strong>Teste de Speed (Yergason):</strong> Flexão do ombro a 90° com cotovelo estendido e antebraço supinado. Resista à flexão do ombro; dor no sulco bicipital indica tendinopatia.', 'image': 'tip_manguito.png'}, {'title': 'Nervo Acessório (XI Par)', 'text': 'Nervo motor que inerva os músculos trapézio e esternocleidomastóideo (ECM).', 'test': '<strong>Avaliação Motora:</strong> Peça ao paciente para elevar os ombros contra resistência (trapézio) ou rodar a cabeça lateralmente contra resistência (ECM) para testar a integridade do nervo.', 'image': 'tip_paralisia.png'}, {'title': 'Capacidade Vital Forçada (CVF)', 'text': 'Volume de ar exalado com força máxima após inspiração profunda na espirometria.', 'test': '<strong>Padrão Restritivo:</strong> Se a CVF está reduzida e a relação VEF1/CVF está normal ou elevada, indica distúrbio restritivo (ex: fibrose pulmonar).', 'image': 'tip_gasometria.png'}, {'title': 'Sinal do Canivete (Upper Motor Neuron)', 'text': 'Resistência inicial forte ao estiramento passivo rápido que cede repentinamente em pacientes espásticos.', 'test': '<strong>Mecânica:</strong> Decorre da hiperatividade do reflexo miotático. Ao mover o cotovelo ou joelho do espástico de forma rápida, a resistência aumenta até ceder no final.', 'image': 'tip_espasticidade.png'}, {'title': 'Laser Terapêutico (Fotobiomodulação)', 'text': 'O laser vermelho (660nm) é indicado para tecidos superficiais; o infravermelho (808nm) penetra tecidos profundos.', 'test': '<strong>Dosimetria Clínica:</strong> Use baixa dosagem (2 a 4 J/cm²) para efeitos cicatrizantes e regeneradores celulares, e alta dosagem (6 a 10 J/cm²) para analgesia local.', 'image': 'tip_ultrassom.png'}, {'title': 'Entorse de Tornozelo (Ligamentos)', 'text': 'A entorse em inversão é a mais frequente, lesionando os ligamentos talofibular anterior e calcaneofibular.', 'test': '<strong>Teste de Gaveta Anterior do Tornozelo:</strong> Estabilize a tíbia com uma mão e tracione o osso calcâneo anteriormente com a outra. Folga excessiva indica lesão ligamentar.', 'image': 'tip_marcha.png'}, {'title': 'Nervo Radial (Lesão)', 'text': "A lesão do nervo radial, comum em fraturas de diáfise de úmero, causa a patologia da 'mão caída'.", 'test': '<strong>Avaliação Motora:</strong> Incapacidade de estender ativamente o punho e as articulações metacarpofalângicas dos dedos.', 'image': 'tip_manguito.png'}, {'title': 'DPOC (Fisiopatologia)', 'text': 'Limitação crônica do fluxo aéreo associada à bronquite obstrutiva crônica e ao enfisema pulmonar.', 'test': '<strong>Interpretação Clínica:</strong> Redução do VEF1 na espirometria (VEF1/CVF < 70%). Pacientes retêm CO2 cronicamente, alterando o drive respiratório para hipóxia.', 'image': 'tip_gasometria.png'}, {'title': 'Clonus Muscular', 'text': 'Série de contrações musculares rítmicas e involuntárias provocadas por estiramento súbito do tendão.', 'test': '<strong>Teste de Clonus de Tornozelo:</strong> Realize uma dorsiflexão rápida do pé do paciente e mantenha a tensão. Mais de 3 oscilações rítmicas seguidas confirmam clonus positivo (lesão piramidal).', 'image': 'tip_espasticidade.png'}, {'title': 'Bursite Subacromial', 'text': 'Inflamação da bursa serosa localizada entre o acrômio/deltoide e o tendão do supraespinal no ombro.', 'test': '<strong>Arco Doloroso:</strong> O paciente relata dor aguda na abdução do braço especificamente na faixa entre 60° e 120°, onde há maior impacto subacromial.', 'image': 'tip_manguito.png'}, {'title': 'Nervo Femoral (L2-L4)', 'text': 'Nervo motor responsável por inervar o músculo quadríceps femoral e flexores do quadril.', 'test': '<strong>Teste de Estiramento do Nervo Femoral:</strong> Paciente em decúbito ventral. Flexione passivamente o joelho máximo aproximando o calcanhar do glúteo. Dor na face anterior da coxa indica compressão.', 'image': 'tip_marcha.png'}, {'title': 'Ondas Curtas (Diatermia)', 'text': 'Recurso térmico profundo por campo magnético ou capacitivo que aumenta a circulação e o relaxamento colágeno.', 'test': '<strong>Contraindicação Absoluta:</strong> Presença de implantes metálicos na área tratada, marcapasso, neoplasias ou infecções agudas devido ao risco de queimaduras internas.', 'image': 'tip_ultrassom.png'}, {'title': 'Diafragma Muscular (Inervação)', 'text': 'O diafragma, principal músculo inspiratório, é inervado bilateralmente pelo nervo frênico (raízes C3-C5).', 'test': '<strong>Implicação Clínica:</strong> Lesões medulares altas acima de C3 anulam a inervação do frênico, gerando paralisia diafragmática e dependência permanente de ventilador mecânico.', 'image': 'tip_gasometria.png'}, {'title': 'Reflexo Patelar (L3-L4)', 'text': 'Reflexo miotático profundo testado pela percussão do tendão patelar, estirando o fuso do quadríceps.', 'test': '<strong>Sinal Clínico:</strong> Arreflexia ou hiporreflexia indica lesão de neurônio motor inferior; hiperreflexia indica lesão piramidal de neurônio motor superior.', 'image': 'tip_espasticidade.png'}, {'title': 'Epicondilite Lateral (Cotovelo de Tenista)', 'text': 'Tendinopatia de origem insercional de extensores do punho (principalmente extensor radial curto do carpo) no epicôndilo lateral.', 'test': '<strong>Teste de Cozen:</strong> Peça ao paciente para realizar extensão do punho contra resistência com o cotovelo fletido a 90° e desvio radial. Dor no epicôndilo lateral é positivo.', 'image': 'tip_manguito.png'}, {'title': 'Dermátomos de Membro Inferior', 'text': 'L4 inerva a face medial da perna; L5 inerva o dorso do pé e o hálux; S1 inerva a borda lateral do pé e o calcanhar.', 'test': '<strong>Avaliação Neurológica:</strong> Faça testes de sensibilidade nos dermátomos comparando o membro acometido com o saudável para mapear radiculopatias discais.', 'image': 'tip_marcha.png'}, {'title': 'Corrente Galvânica (Iontoforese)', 'text': 'Corrente unidirecional contínua utilizada para introduzir substâncias ionizadas na pele de forma terapêutica.', 'test': '<strong>Segurança na Aplicação:</strong> Risco alto de queimadura química sob o polo negativo (catodo) devido ao acúmulo de hidróxido de sódio alcalino. Monitore sempre.', 'image': 'tip_ultrassom.png'}, {'title': 'Escápula Alada (Serrátil Anterior)', 'text': 'O músculo serrátil anterior estabiliza a borda medial da escápula contra a parede torácica.', 'test': '<strong>Lesão Nervosa:</strong> Resulta da paralisia do nervo torácico longo (C5-C7). O paciente apresenta projeção da escápula para trás ao tentar empurrar uma parede.', 'image': 'tip_manguito.png'}, {'title': 'Sarcopenia Geriátrica', 'text': 'Perda generalizada e progressiva da força e massa muscular esquelética associada ao envelhecimento.', 'test': '<strong>Força de Preensão Palmar (Dinamometria):</strong> Valores abaixo de 27 kg para homens e 16 kg para mulheres indicam fraqueza muscular grave associada à sarcopenia.', 'image': 'tip_espasticidade.png'}, {'title': 'Hiperinsuflação Pulmonar', 'text': 'Retenção anormal de ar nos pulmões (aprisionamento aéreo) comum em asmáticos e enfisematosos.', 'test': '<strong>Sinais Físicos:</strong> Tórax em tonel, aumento do diâmetro anteroposterior e hipersonoridade à percussão torácica.', 'image': 'tip_gasometria.png'}, {'title': 'Espasmo de Defesa (Guarding)', 'text': 'Contrações involuntárias e sustentadas de feixes musculares para imobilizar e proteger uma articulação lesionada ou inflamada.', 'test': '<strong>Exame Físico:</strong> Palpação revela bandas tensas rígidas que não relaxam mesmo em decúbito confortável. Tratamento foca em controle de dor.', 'image': 'tip_espasticidade.png'}, {'title': 'Reflexo Aquileu (S1-S2)', 'text': 'Reflexo profundo testado pela percussão do tendão calcâneo, gerando contração reflexa do gastrocnêmio.', 'test': '<strong>Sinal Clínico:</strong> Ausência desse reflexo é indicativa de compressão de raiz nervosa de S1 (hérnia discal L5-S1) ou neuropatia diabética periférica.', 'image': 'tip_espasticidade.png'}, {'title': 'Epicondilite Medial (Cotovelo de Golfista)', 'text': 'Tendinopatia dos flexores do punho e pronador redondo em sua inserção no epicôndilo medial do úmero.', 'test': '<strong>Teste de Epicondilite Medial:</strong> Flexione passivamente o cotovelo e estenda passivamente o punho e os dedos. Dor aguda no epicôndilo medial confirma.', 'image': 'tip_manguito.png'}, {'title': 'Instabilidade Fêmoro-Patelar', 'text': 'Mau alinhamento lateral da patela que predispõe à subluxação ou luxação patelar.', 'test': '<strong>Teste de Apreensão de Fairbank:</strong> Desloque a patela lateralmente com o joelho em leve flexão de 30°. Se o paciente contrair o quadríceps com medo, o teste é positivo.', 'image': 'tip_marcha.png'}, {'title': 'Correntes Diadinâmicas de Bernard', 'text': 'Correntes senoidais retificadas monofásica (DF) e bifásica (MF) usadas para analgesia e estímulo circulatório.', 'test': '<strong>Protocolo de Uso:</strong> Aplique a corrente Difásica Fixa (DF) por 2 minutos para anestesia inicial rápida, seguida da Ritmo Sincopado (RS) para bombeamento muscular.', 'image': 'tip_ultrassom.png'}, {'title': 'Atelectasia (Fisioterapia Respiratória)', 'text': 'Colapso completo ou parcial de um pulmão ou lobo pulmonar devido a obstrução brônquica por secreção ou hipoventilação.', 'test': '<strong>Sinal Clínico:</strong> Redução ou ausência do murmúrio vesicular na ausculta e desvio traqueal homolateral na radiografia.', 'image': 'tip_gasometria.png'}, {'title': 'Sinal de Babinski (Upper Motor Neuron)', 'text': 'Extensão dorsal do hálux acompanhada de abertura em leque dos outros dedos ao estimular a planta do pé.', 'test': '<strong>Teste Clínico:</strong> Passe uma haste pontiaguda na borda lateral da sola do pé, do calcanhar ao pequeno dedo e depois medialmente. Presente apenas em lesões piraminais (neurológico superior).', 'image': 'tip_espasticidade.png'}, {'title': 'Músculo Psoas-Ilíaco (Encurtamento)', 'text': 'O principal flexor do quadril que, quando encurtado, puxa a pelve em anteversão, aumentando a hiperlordose lombar.', 'test': '<strong>Teste de Thomas:</strong> Paciente deita em decúbito dorsal e abraça um dos joelhos contra o peito. Se a outra coxa levantar da maca, indica encurtamento do psoas contralateral.', 'image': 'tip_marcha.png'}, {'title': 'Fisioterapia Pós-Operatório Urgente', 'text': 'Prevenir complicações tromboembólicas (Trombose Venosa Profunda - TVP) e respiratórias nas primeiras 24-48h de internação.', 'test': '<strong>Conduta:</strong> Cinesioterapia ativa de tornozelo (bombeamento plantar), exercícios respiratórios incentivadores e sedestação/deambulação precoce no leito.', 'image': 'tip_marcha.png'}, {'title': 'Nervo Glúteo Superior (Lesão)', 'text': 'Inerva os músculos glúteo médio e mínimo, principais abdutores e estabilizadores pélvicos do quadril.', 'test': '<strong>Sinal de Trendelenburg:</strong> Peça ao paciente para apoiar-se em apenas uma perna. Se a pelve do lado oposto cair (báscula lateral), indica fraqueza do glúteo médio do membro de apoio.', 'image': 'tip_marcha.png'}, {'title': 'Corrente Interferencial (IFT)', 'text': 'Cruzamento de duas correntes de média frequência no interior dos tecidos, gerando uma terceira frequência modulada de baixa (AMF).', 'test': '<strong>Vantagem Clínica:</strong> Penetra profundamente vencendo a resistência capacitiva da pele sem causar desconforto sensorial ou irritação elétrica superficial.', 'image': 'tip_ultrassom.png'}];

// Imagens ilustrativas para cada dica clínica rápida (offline-first)
const CLINICAL_TIPS_IMAGES = [
  "tip_manguito.png",
  "tip_marcha.png",
  "tip_ultrassom.png",
  "tip_paralisia.png",
  "tip_espasticidade.png",
  "tip_gasometria.png"
];

// 2. INICIALIZAÇÃO E CONTROLE DE ESTADO
function initApp() {
  // Carregar dados do localStorage ou usar os padrões
  const localCurriculum = localStorage.getItem(getProfileKey("fisio_curriculum"));
  const localFlashcards = localStorage.getItem(getProfileKey("fisio_flashcards"));
  const localTasks = localStorage.getItem(getProfileKey("fisio_tasks"));
  const localShifts = localStorage.getItem(getProfileKey("fisio_shifts"));
  const localSettings = localStorage.getItem(getProfileKey("fisio_settings"));

  if (localCurriculum) {
    state.curriculum = JSON.parse(localCurriculum);
  } else {
    state.curriculum = JSON.parse(JSON.stringify(window.FisioData.DEFAULT_CURRICULUM));
    saveState("curriculum");
  }

  if (localFlashcards) {
    state.flashcards = JSON.parse(localFlashcards);
  } else {
    state.flashcards = JSON.parse(JSON.stringify(window.FisioData.DEFAULT_FLASHCARDS));
    saveState("flashcards");
  }

  if (localTasks) {
    state.plannerTasks = JSON.parse(localTasks);
  } else {
    // Tarefas de exemplo iniciais para o cronograma
    state.plannerTasks = [
      { id: "t1", title: "Leitura de Biofísica da Contração Muscular", type: "ead", day: "Segunda-feira", details: "Módulo 2 do portal acadêmico", completed: false },
      { id: "t2", title: "Prática de Anatomia: Palpação de Membro Superior", type: "pratica", day: "Terça-feira", details: "Laboratório de Anatomia - Bloco C", completed: true },
      { id: "t3", title: "Prova de Avaliação Cinésio-Funcional", type: "prova", day: "Quinta-feira", details: "Conteúdo: Goniometria e Testes de Força", completed: false }
    ];
    saveState("plannerTasks");
  }

  if (localShifts) {
    state.internshipShifts = JSON.parse(localShifts);
  } else {
    state.internshipShifts = [];
    saveState("internshipShifts");
  }

  if (localSettings) {
    state.settings = JSON.parse(localSettings);
  } else {
    saveState("settings");
  }

  // Sincronizar dados do perfil na sidebar
  const activeProfileId = localStorage.getItem("fisio_active_profile_id");
  const profiles = loadProfiles();
  const activeProfile = profiles.find(p => p.id === activeProfileId);
  if (activeProfile) {
    const sidebarUsername = document.getElementById("sidebar-username");
    if (sidebarUsername) sidebarUsername.textContent = activeProfile.name;
    
    const sidebarSemester = document.getElementById("sidebar-current-semester");
    if (sidebarSemester) sidebarSemester.textContent = `${activeProfile.semester}º`;
    
    const sidebarAvatar = document.getElementById("sidebar-avatar");
    if (sidebarAvatar) {
      if (activeProfile.avatarImage) {
        sidebarAvatar.innerHTML = `<img src="${activeProfile.avatarImage}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
        sidebarAvatar.style.background = "none";
      } else {
        const initials = activeProfile.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
        sidebarAvatar.textContent = initials;
        sidebarAvatar.style.background = activeProfile.avatarColor;
      }
    }
    
    // Aplica o tema
    if (activeProfile.theme) {
      applyTheme(activeProfile.theme);
    }
    
    // Inicializa os controles do modal de Configurações
    initSettingsModalControls();
  }

  // Configurar data atual no cabeçalho
  setupHeaderDate();
  
  // Configurar Roteamento das Abas
  setupRouting();

  // Configurar Dicas Clínicas e Frase do Dia
  setupDashboardQuotes();

  // Inicializar Componentes de Disciplinas (Grade Curricular)
  setupCurriculumView();

  // Atualizar contadores e interface do Dashboard
  renderDashboard();

  // Configurar exportação/importação de dados (backup)
  setupBackupRestore();

  // Configurar eventos do Caderno Digital e Anotações
  setupStudyPanelEvents();

  // Inicializar ícones do Lucide
  lucide.createIcons();
}

function saveState(key) {
  if (key === "curriculum") {
    localStorage.setItem(getProfileKey("fisio_curriculum"), JSON.stringify(state.curriculum));
  } else if (key === "flashcards") {
    localStorage.setItem(getProfileKey("fisio_flashcards"), JSON.stringify(state.flashcards));
  } else if (key === "plannerTasks") {
    localStorage.setItem(getProfileKey("fisio_tasks"), JSON.stringify(state.plannerTasks));
  } else if (key === "internshipShifts") {
    localStorage.setItem(getProfileKey("fisio_shifts"), JSON.stringify(state.internshipShifts));
  } else if (key === "settings") {
    localStorage.setItem(getProfileKey("fisio_settings"), JSON.stringify(state.settings));
  }
}

// 3. ROTEAMENTO SPA (ABAS)
function setupRouting() {
  const navItems = document.querySelectorAll(".nav-item, .mobile-nav-item");
  const tabPanels = document.querySelectorAll(".tab-panel");
  const viewTitle = document.getElementById("view-title");
  const viewSubtitle = document.getElementById("view-subtitle");

  const tabTitles = {
    dashboard: { title: "Dashboard", subtitle: "Acompanhe seu desempenho no curso de Fisioterapia." },
    curriculum: { title: "Grade Curricular", subtitle: "Gerencie as disciplinas e progresso do seu curso de 5 anos." },
    planner: { title: "Cronograma & Pomodoro", subtitle: "Organize seus estudos EAD e aulas práticas em laboratórios." },
    flashcards: { title: "Flashcards de Memorização", subtitle: "Treine sua memória em anatomia, cinesiologia e testes." },
    reference: { title: "Pocket Fisio", subtitle: "Manual rápido de consulta clínica de bolso para goniometria, testes e força." },
    internship: { title: "Estágio Clínico", subtitle: "Registre suas horas de estágio clínico supervisionado obrigatório." },
    quiz: { title: "Simulados Clínicos", subtitle: "Teste seus conhecimentos teóricos e práticos com o banco de questões." }
  };

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTab = item.getAttribute("data-tab");

      // Remover classe active de todos os nav items
      navItems.forEach(nav => nav.classList.remove("active"));
      
      // Adicionar active aos botões clicados (tanto no desktop quanto no mobile)
      document.querySelectorAll(`[data-tab="${targetTab}"]`).forEach(btn => btn.classList.add("active"));

      // Exibir o painel correspondente
      tabPanels.forEach(panel => panel.classList.remove("active"));
      const activePanel = document.getElementById(`tab-${targetTab}`);
      if (activePanel) {
        activePanel.classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Atualizar títulos
      if (tabTitles[targetTab]) {
        viewTitle.textContent = tabTitles[targetTab].title;
        viewSubtitle.textContent = tabTitles[targetTab].subtitle;
      }

      // Disparar atualizações específicas de tela
      triggerTabUpdates(targetTab);
    });
  });
}

function triggerTabUpdates(tabName) {
  if (tabName === "dashboard") {
    renderDashboard();
  } else if (tabName === "curriculum") {
    renderCurriculum();
  } else if (tabName === "planner") {
    if (window.renderPlannerList) window.renderPlannerList();
  } else if (tabName === "flashcards") {
    if (window.initFlashcardsModule) window.initFlashcardsModule();
  } else if (tabName === "reference") {
    if (window.renderReferenceData) window.renderReferenceData();
  } else if (tabName === "internship") {
    if (window.renderInternshipModule) window.renderInternshipModule();
  } else if (tabName === "quiz") {
    if (window.initQuizModule) window.initQuizModule();
  }
  
  // Recriar ícones lucide se surgirem novos elementos dinâmicos
  lucide.createIcons();
}

// Configurar a data do topo
function setupHeaderDate() {
  const dateEl = document.getElementById("header-date");
  if (!dateEl) return;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();
  
  // Formatar em português
  let formatted = today.toLocaleDateString('pt-BR', options);
  // Capitalizar a primeira letra
  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  dateEl.textContent = formatted;
}

// Configurar citação e dica randômica no Dashboard
function setupDashboardQuotes() {
  const quoteEl = document.getElementById("daily-quote");
  const quoteAuthorEl = document.getElementById("daily-quote-author");
  const quoteContextEl = document.getElementById("daily-quote-context");
  const tipEl = document.getElementById("anatomy-tip");
  const tipTestEl = document.getElementById("anatomy-tip-test");
  const imgEl = document.getElementById("anatomy-tip-img");

  // Função para obter índice determinístico baseado no dia atual
  const getDailyIndex = (arrayLength, seedOffset = 0) => {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`; // Formato "AAAA-MM-DD"
    
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash + seedOffset) % arrayLength;
  };

  const showDailyQuote = () => {
    if (quoteEl && MOTIVATIONAL_QUOTES.length > 0) {
      const idx = getDailyIndex(MOTIVATIONAL_QUOTES.length, 123);
      const q = MOTIVATIONAL_QUOTES[idx];
      quoteEl.textContent = `"${q.text}"`;
      if (quoteAuthorEl) quoteAuthorEl.textContent = `- ${q.author}`;
      if (quoteContextEl) quoteContextEl.textContent = q.context;
    }
  };

  const showDailyTip = () => {
    if (tipEl && CLINICAL_TIPS.length > 0) {
      const idx = getDailyIndex(CLINICAL_TIPS.length, 456);
      const t = CLINICAL_TIPS[idx];
      tipEl.innerHTML = `<strong>${t.title}:</strong> ${t.text}`;
      if (tipTestEl) tipTestEl.innerHTML = t.test;
      
      if (imgEl && t.image) {
        imgEl.style.opacity = 0;
        setTimeout(() => {
          imgEl.src = t.image;
          imgEl.style.opacity = 0.85;
        }, 150);
      }
    }
  };

  const changeQuote = () => {
    if (quoteEl) {
      const q = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
      quoteEl.textContent = `"${q.text}"`;
      if (quoteAuthorEl) quoteAuthorEl.textContent = `- ${q.author}`;
      if (quoteContextEl) quoteContextEl.textContent = q.context;
    }
  };

  const changeTip = () => {
    if (tipEl) {
      const randomIndex = Math.floor(Math.random() * CLINICAL_TIPS.length);
      const t = CLINICAL_TIPS[randomIndex];
      tipEl.innerHTML = `<strong>${t.title}:</strong> ${t.text}`;
      if (tipTestEl) tipTestEl.innerHTML = t.test;
      
      if (imgEl && t.image) {
        // Efeito suave de fade
        imgEl.style.opacity = 0;
        setTimeout(() => {
          imgEl.src = t.image;
          imgEl.style.opacity = 0.85;
        }, 150);
      }
    }
  };

  // Carregar dados diários únicos ao iniciar
  showDailyQuote();
  showDailyTip();

  // Associar botões se ainda não associados (evitando duplicações)
  const btnQuote = document.getElementById("btn-next-quote");
  const btnTip = document.getElementById("btn-next-tip");

  if (btnQuote && !btnQuote.dataset.listenerBound) {
    btnQuote.dataset.listenerBound = "true";
    btnQuote.addEventListener("click", changeQuote);
  }
  if (btnTip && !btnTip.dataset.listenerBound) {
    btnTip.dataset.listenerBound = "true";
    btnTip.addEventListener("click", changeTip);
  }

  // Configurar lightbox para a imagem da dica
  if (imgEl && !imgEl.dataset.lightboxBound) {
    imgEl.dataset.lightboxBound = "true";
    imgEl.style.cursor = "pointer";
    imgEl.title = "Clique para ampliar a imagem";
    imgEl.addEventListener("click", () => {
      const lightboxModal = document.getElementById("modal-lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = imgEl.src;
        lightboxModal.style.display = "flex";
      }
    });
  }

  const lightboxModal = document.getElementById("modal-lightbox");
  if (lightboxModal && !lightboxModal.dataset.listenerBound) {
    lightboxModal.dataset.listenerBound = "true";
    const closeBtn = document.getElementById("btn-close-lightbox");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        lightboxModal.style.display = "none";
      });
    }
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.style.display = "none";
      }
    });
  }
}

// 4. LÓGICA E RENDERIZAÇÃO DO DASHBOARD
function renderDashboard() {
  // 1. Progresso do Curso (Disciplinas Concluídas)
  const allSubjects = state.curriculum.reduce((acc, sem) => acc.concat(sem.subjects), []);
  const totalSubjectsCount = allSubjects.length;
  const completedSubjects = allSubjects.filter(sub => sub.status === "completed");
  const completedCount = completedSubjects.length;

  const progressPercent = totalSubjectsCount > 0 ? Math.round((completedCount / totalSubjectsCount) * 100) : 0;

  // Atualizar Círculo SVG de Progresso
  const circleFg = document.getElementById("course-progress-circle");
  const percentText = document.getElementById("course-progress-percent");
  const countText = document.getElementById("completed-subjects-count");

  if (circleFg && percentText) {
    percentText.textContent = `${progressPercent}%`;
    
    // Circunferência de raio 50 é 2 * PI * 50 = ~314.16
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (progressPercent / 100) * circumference;
    circleFg.style.strokeDashoffset = offset;
  }
  
  if (countText) {
    countText.textContent = `${completedCount} / ${totalSubjectsCount}`;
  }

  // 2. Média Geral do Curso (IRA)
  const gradedSubjects = completedSubjects.filter(sub => sub.grade !== null && sub.grade !== undefined && sub.grade !== "");
  const academicAverageEl = document.getElementById("academic-average");
  
  if (academicAverageEl) {
    if (gradedSubjects.length > 0) {
      const sum = gradedSubjects.reduce((acc, sub) => acc + parseFloat(sub.grade), 0);
      const avg = sum / gradedSubjects.length;
      academicAverageEl.textContent = avg.toFixed(1);
    } else {
      academicAverageEl.textContent = "0.0";
    }
  }

  // 3. Atualizar semestre atual do usuário no menu lateral
  const sidebarSemEl = document.getElementById("sidebar-current-semester");
  const sidebarUserEl = document.getElementById("sidebar-username");
  if (sidebarSemEl) {
    const activeProfileId = localStorage.getItem("fisio_active_profile_id");
    const profiles = loadProfiles();
    const activeProfileIndex = profiles.findIndex(p => p.id === activeProfileId);
    let activeProfile = activeProfileIndex !== -1 ? profiles[activeProfileIndex] : null;

    if (activeProfile) {
      let currentSemester = activeProfile.semester || 1;

      // Auto-advancement: check if all subjects of a semester are marked as "completed"
      let highestCompletedSemester = 0;
      for (let sem of state.curriculum) {
        if (sem.subjects.length > 0 && sem.subjects.every(sub => sub.status === "completed")) {
          highestCompletedSemester = sem.semester;
        }
      }

      // If they completed semester X, they should be at least in semester X + 1
      if (highestCompletedSemester > 0 && currentSemester <= highestCompletedSemester) {
        currentSemester = Math.min(highestCompletedSemester + 1, 10);
        profiles[activeProfileIndex].semester = currentSemester;
        saveProfiles(profiles);
      }

      // Auto-advance if cursando any subject in a higher semester
      let highestInProgressSemester = 0;
      for (let sem of state.curriculum) {
        if (sem.subjects.some(sub => sub.status === "in_progress")) {
          highestInProgressSemester = sem.semester;
        }
      }

      if (highestInProgressSemester > currentSemester) {
        currentSemester = highestInProgressSemester;
        profiles[activeProfileIndex].semester = currentSemester;
        saveProfiles(profiles);
      }

      state.settings.currentSemester = currentSemester;
      saveState("settings");
      
      sidebarSemEl.textContent = `${currentSemester}º`;

      // Atualizar nome do usuário e título conforme o semestre letivo
      if (sidebarUserEl) {
        let title = "Calouro de Fisioterapia";
        if (currentSemester >= 3 && currentSemester <= 4) {
          title = "Acadêmico de Fisioterapia";
        } else if (currentSemester >= 5 && currentSemester <= 6) {
          title = "Estagiário de Fisioterapia I";
        } else if (currentSemester >= 7 && currentSemester <= 8) {
          title = "Estagiário de Fisioterapia II";
        } else if (currentSemester >= 9 && currentSemester <= 10) {
          title = "Fisioterapeuta Formando";
        }
        
        sidebarUserEl.textContent = activeProfile.name;
        sidebarUserEl.setAttribute("title", title); // Dica ao passar o mouse: Calouro, etc.
      }
    }
  }

  // 4. Lógica de Horas de Estágio no Dashboard
  const totalHoursCompleted = state.internshipShifts.reduce((acc, shift) => acc + parseInt(shift.hours), 0);
  const totalRequiredHours = 600;
  const hoursBar = document.getElementById("dash-hours-bar");
  const hoursCompletedEl = document.getElementById("dash-hours-completed");
  const hoursMetaEl = document.getElementById("dash-hours-meta");

  if (hoursCompletedEl) hoursCompletedEl.textContent = `${totalHoursCompleted}h`;
  
  if (hoursBar) {
    const hoursPercent = Math.min(Math.round((totalHoursCompleted / totalRequiredHours) * 100), 100);
    hoursBar.style.width = `${hoursPercent}%`;
  }

  if (hoursMetaEl) {
    const remaining = totalRequiredHours - totalHoursCompleted;
    if (remaining > 0) {
      hoursMetaEl.textContent = `Faltam completar ${remaining} horas de estágio supervisionado.`;
    } else {
      hoursMetaEl.textContent = `Parabéns! Carga horária de estágio concluída com sucesso. 🎉`;
    }
  }

  // Contagem por área para o mini-painel do Dashboard
  const orthoHrs = state.internshipShifts.filter(s => s.specialty === "orthopedics").reduce((a, c) => a + parseInt(c.hours), 0);
  const neuroHrs = state.internshipShifts.filter(s => s.specialty === "neuro").reduce((a, c) => a + parseInt(c.hours), 0);
  const cardioHrs = state.internshipShifts.filter(s => s.specialty === "cardio").reduce((a, c) => a + parseInt(c.hours), 0);

  const dashOrtho = document.getElementById("dash-ortho-hours");
  const dashNeuro = document.getElementById("dash-neuro-hours");
  const dashCardio = document.getElementById("dash-cardio-hours");

  if (dashOrtho) dashOrtho.textContent = `${orthoHrs} / 150h`;
  if (dashNeuro) dashNeuro.textContent = `${neuroHrs} / 150h`;
  if (dashCardio) dashCardio.textContent = `${cardioHrs} / 150h`;

  // 5. Próxima Aula Prática na agenda do Dashboard
  const nextClassEl = document.getElementById("dash-next-class");
  if (nextClassEl) {
    // Buscar primeira tarefa do tipo "pratica" não completada
    const nextPratTask = state.plannerTasks.find(t => t.type === "pratica" && !t.completed);
    if (nextPratTask) {
      nextClassEl.innerHTML = `<strong>${nextPratTask.day}</strong> - ${nextPratTask.title}<br><small>${nextPratTask.details}</small>`;
    } else {
      nextClassEl.textContent = "Nenhuma prática agendada";
    }
  }

  // 6. Atualizar a lista de anotações no Dashboard
  renderDashboardNotesList();
}

function renderDashboardNotesList() {
  const notesCountEl = document.getElementById("dash-notes-count");
  const notesListEl = document.getElementById("dash-notes-list");
  if (!notesListEl) return;

  notesListEl.innerHTML = "";

  const subjectsWithNotes = [];
  
  state.curriculum.forEach(sem => {
    sem.subjects.forEach(sub => {
      const hasNotes = sub.studyNotes && sub.studyNotes.trim() !== "";
      const hasHls = sub.studyHighlights && sub.studyHighlights.length > 0;
      if (hasNotes || hasHls) {
        subjectsWithNotes.push({
          ...sub,
          semesterName: sem.name,
          hasNotes,
          highlightsCount: sub.studyHighlights ? sub.studyHighlights.length : 0
        });
      }
    });
  });

  if (notesCountEl) {
    notesCountEl.textContent = `${subjectsWithNotes.length} Disciplina(s) com Anotações`;
  }

  if (subjectsWithNotes.length === 0) {
    notesListEl.style.display = "block";
    notesListEl.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-muted); font-style: italic; font-size: 0.9rem; border: 1px dashed rgba(255,255,255,0.05); border-radius: 8px;">
        Nenhum resumo ou anotação criado ainda. Acesse o Caderno Digital de alguma matéria para marcar textos ou fazer anotações!
      </div>
    `;
    return;
  }

  notesListEl.style.display = "grid";
  subjectsWithNotes.forEach(sub => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.background = "rgba(255, 255, 255, 0.02)";
    card.style.border = "1px solid var(--border-glass)";
    card.style.padding = "16px";
    card.style.borderRadius = "12px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "space-between";
    card.style.gap = "12px";

    const header = document.createElement("div");
    header.innerHTML = `
      <span style="font-size: 0.7rem; color: var(--primary); font-weight: 600; text-transform: uppercase;">${sub.semesterName}</span>
      <h4 style="margin: 4px 0 0 0; font-family: var(--font-title); font-size: 1rem; color: var(--text);">${sub.name}</h4>
    `;
    card.appendChild(header);

    const body = document.createElement("div");
    body.style.display = "flex";
    body.style.gap = "10px";
    body.style.fontSize = "0.8rem";
    body.style.color = "var(--text-muted)";
    
    let notesBadge = sub.hasNotes 
      ? `<span style="background: rgba(43,186,181,0.1); color: var(--primary); padding: 2px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px;"><i data-lucide="sticky-note" style="width: 12px; height: 12px;"></i> Notas</span>`
      : "";
      
    let hlsBadge = sub.highlightsCount > 0
      ? `<span style="background: rgba(114,46,209,0.1); color: var(--purple); padding: 2px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px;"><i data-lucide="highlighter" style="width: 12px; height: 12px;"></i> ${sub.highlightsCount} Marcações</span>`
      : "";

    body.innerHTML = `${notesBadge} ${hlsBadge}`;
    if (!notesBadge && !hlsBadge) {
      body.textContent = "Sem anotações.";
    }
    card.appendChild(body);

    const btn = document.createElement("button");
    btn.className = "btn btn-secondary btn-sm";
    btn.style.width = "100%";
    btn.style.marginTop = "4px";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.gap = "6px";
    btn.innerHTML = `<i data-lucide="eye" style="width: 14px; height: 14px;"></i> Ver Caderno`;
    
    btn.addEventListener("click", () => {
      currentActiveSubjectId = sub.id;
      openAnotacoesConsolidado();
    });
    card.appendChild(btn);

    notesListEl.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

// 5. LÓGICA DA GRADE CURRICULAR (DISCIPLINAS)
let currentSelectedSemester = 1;

function setupCurriculumView() {
  const semesterSelect = document.getElementById("semester-select");
  const btnAddSubject = document.getElementById("btn-add-subject");
  const btnCloseModal = document.getElementById("btn-close-subject-modal");
  const btnCancelSubject = document.getElementById("btn-cancel-subject");
  const formSubject = document.getElementById("form-subject");

  // Mudança do Semestre
  if (semesterSelect) {
    semesterSelect.addEventListener("change", (e) => {
      currentSelectedSemester = parseInt(e.target.value);
      renderCurriculum();
    });
  }

  // Abrir Modal de Adição
  if (btnAddSubject) {
    btnAddSubject.addEventListener("click", () => {
      openSubjectModal(null);
    });
  }

  // Fechar Modal
  if (btnCloseModal) btnCloseModal.addEventListener("click", closeSubjectModal);
  if (btnCancelSubject) btnCancelSubject.addEventListener("click", closeSubjectModal);

  // Submissão do Formulário da Disciplina
  if (formSubject) {
    formSubject.addEventListener("submit", (e) => {
      e.preventDefault();
      saveSubjectFromModal();
    });
  }
}

function renderCurriculum() {
  const subjectsListContainer = document.getElementById("subjects-list");
  if (!subjectsListContainer) return;

  const semData = state.curriculum.find(s => s.semester === currentSelectedSemester);
  if (!semData) return;

  // Atualizar Resumos do Semestre Superior
  const semTotalSubjects = document.getElementById("sem-total-subjects");
  const semCompletedSubjects = document.getElementById("sem-completed-subjects");
  const semAverage = document.getElementById("sem-average");

  const total = semData.subjects.length;
  const completed = semData.subjects.filter(sub => sub.status === "completed").length;
  const graded = semData.subjects.filter(sub => sub.status === "completed" && sub.grade !== null && sub.grade !== undefined && sub.grade !== "");
  
  let average = 0;
  if (graded.length > 0) {
    const sum = graded.reduce((acc, sub) => acc + parseFloat(sub.grade), 0);
    average = sum / graded.length;
  }

  if (semTotalSubjects) semTotalSubjects.textContent = total;
  if (semCompletedSubjects) semCompletedSubjects.textContent = completed;
  if (semAverage) semAverage.textContent = average > 0 ? average.toFixed(1) : "0.0";

  // Gerar Grid de Cards
  subjectsListContainer.innerHTML = "";

  if (semData.subjects.length === 0) {
    subjectsListContainer.innerHTML = `<div class="no-records-msg w-full col-span-3">Nenhuma disciplina cadastrada para este semestre.</div>`;
    return;
  }

  semData.subjects.forEach(sub => {
    const card = document.createElement("div");
    card.className = "card glass-card subject-card";
    
    let statusText = "Não Iniciada";
    if (sub.status === "in_progress") statusText = "Cursando";
    if (sub.status === "completed") statusText = "Concluída";

    const isGraded = sub.grade !== null && sub.grade !== undefined && sub.grade !== "";
    const displayGrade = isGraded ? parseFloat(sub.grade).toFixed(1) : "N/D";
    const gradeClass = isGraded ? "" : "not-graded";

    card.innerHTML = `
      <div class="card-header subject-card-header">
        <div class="subject-card-top">
          <span class="subject-badge status-${sub.status}">${statusText}</span>
          <div class="subject-card-actions">
            <button class="btn-card-action btn-edit-sub" data-sub-id="${sub.id}" title="Editar Disciplina">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="btn-card-action btn-delete-sub" data-sub-id="${sub.id}" title="Excluir Disciplina">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>
        <h4 class="subject-name">${sub.name}</h4>
      </div>
      <div class="card-body flex-grow flex flex-col justify-between">
        <div class="subject-info-row">
          <span>Carga Horária:</span>
          <strong>${sub.hours}h</strong>
        </div>
        ${sub.notes ? `<p class="text-muted text-xs mt-2 italic conduta-cell" title="${sub.notes}">${sub.notes}</p>` : ""}
        <div class="subject-grade-indicator">
          <span class="text-muted text-xs">Nota Final:</span>
          <span class="grade-val ${gradeClass}">${displayGrade}</span>
        </div>
      </div>
    `;

    // Eventos nos botões do Card
    card.querySelector(".btn-edit-sub").addEventListener("click", (e) => {
      e.stopPropagation();
      openSubjectModal(sub.id);
    });
    card.querySelector(".btn-delete-sub").addEventListener("click", (e) => {
      e.stopPropagation();
      deleteSubject(sub.id);
    });
    
    // Clique em qualquer parte do card abre a edição
    card.addEventListener("click", () => {
      openSubjectModal(sub.id);
    });

    subjectsListContainer.appendChild(card);
  });

  // Atualizar ícones do lucide dentro dos cards
  lucide.createIcons();
}

// Variable to track currently active subject in modals
let currentActiveSubjectId = null;

// Modal Disciplina
function openSubjectModal(subjectId) {
  const modal = document.getElementById("modal-subject");
  const modalTitle = document.getElementById("modal-subject-title");
  
  const inputId = document.getElementById("modal-subject-id");
  const inputName = document.getElementById("modal-subject-name");
  const inputHours = document.getElementById("modal-subject-hours");
  const inputGrade = document.getElementById("modal-subject-grade");
  const selectStatus = document.getElementById("modal-subject-status");
  const inputNotes = document.getElementById("modal-subject-notes");
  const studyPanel = document.querySelector(".study-panel");

  if (!modal) return;

  if (subjectId) {
    // Modo Edição
    currentActiveSubjectId = subjectId;
    modalTitle.textContent = "Editar Disciplina";
    if (studyPanel) studyPanel.style.display = "flex";
    
    // Achar matéria
    let foundSub = null;
    for (let sem of state.curriculum) {
      foundSub = sem.subjects.find(s => s.id === subjectId);
      if (foundSub) break;
    }

    if (foundSub) {
      inputId.value = foundSub.id;
      inputName.value = foundSub.name;
      inputHours.value = foundSub.hours;
      inputGrade.value = foundSub.grade !== null ? foundSub.grade : "";
      selectStatus.value = foundSub.status;
      inputNotes.value = foundSub.notes || "";
    }
  } else {
    // Modo Adição
    currentActiveSubjectId = null;
    modalTitle.textContent = "Adicionar Disciplina";
    if (studyPanel) studyPanel.style.display = "none";
    inputId.value = "";
    inputName.value = "";
    inputHours.value = "60";
    inputGrade.value = "";
    selectStatus.value = "not_started";
    inputNotes.value = "";
  }

  modal.classList.add("active");
}

function closeSubjectModal() {
  const modal = document.getElementById("modal-subject");
  if (modal) modal.classList.remove("active");
}

function saveSubjectFromModal() {
  const id = document.getElementById("modal-subject-id").value;
  const name = document.getElementById("modal-subject-name").value;
  const hours = parseInt(document.getElementById("modal-subject-hours").value);
  const gradeInput = document.getElementById("modal-subject-grade").value;
  const grade = gradeInput !== "" ? parseFloat(gradeInput) : null;
  const status = document.getElementById("modal-subject-status").value;
  const notes = document.getElementById("modal-subject-notes").value;

  if (id) {
    // Salvar Edição
    for (let sem of state.curriculum) {
      const idx = sem.subjects.findIndex(s => s.id === id);
      if (idx !== -1) {
        sem.subjects[idx] = { ...sem.subjects[idx], name, hours, grade, status, notes };
        break;
      }
    }
  } else {
    // Criar Nova
    const newId = "custom_sub_" + Date.now();
    const semData = state.curriculum.find(s => s.semester === currentSelectedSemester);
    if (semData) {
      semData.subjects.push({
        id: newId,
        name,
        hours,
        grade,
        status,
        notes
      });
    }
  }

  saveState("curriculum");
  closeSubjectModal();
  renderCurriculum();
  renderDashboard(); // Atualiza médias e progresso global
}

function deleteSubject(subjectId) {
  if (!confirm("Tem certeza que deseja excluir esta disciplina?")) return;

  for (let sem of state.curriculum) {
    const idx = sem.subjects.findIndex(s => s.id === subjectId);
    if (idx !== -1) {
      sem.subjects.splice(idx, 1);
      break;
    }
  }

  saveState("curriculum");
  renderCurriculum();
  renderDashboard();
}

// 6. CONTROLE DE BACKUP E RESTAURAÇÃO (EXPORTAR/IMPORTAR)
function setupBackupRestore() {
  const btnExport = document.getElementById("btn-export-data");
  const btnImport = document.getElementById("btn-import-data");
  const importInput = document.getElementById("import-file-input");

  if (btnExport) {
    btnExport.addEventListener("click", () => {
      const backupData = {
        curriculum: localStorage.getItem(getProfileKey("fisio_curriculum")),
        flashcards: localStorage.getItem(getProfileKey("fisio_flashcards")),
        tasks: localStorage.getItem(getProfileKey("fisio_tasks")),
        shifts: localStorage.getItem(getProfileKey("fisio_shifts")),
        settings: localStorage.getItem(getProfileKey("fisio_settings")),
        quizStats: localStorage.getItem(getProfileKey("fisio_quiz_stats"))
      };

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `fisioacademic_backup_${new Date().toISOString().slice(0,10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  if (btnImport && importInput) {
    btnImport.addEventListener("click", () => {
      importInput.click();
    });

    importInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const imported = JSON.parse(evt.target.result);
          
          // Validação básica
          const keys = ["curriculum", "flashcards", "tasks", "shifts", "settings"];
          const hasKeys = keys.some(key => key in imported);
          
          if (!hasKeys) {
            alert("Erro: O arquivo de backup selecionado não é válido ou está corrompido.");
            return;
          }

          if (confirm("Atenção: A importação de dados substituirá todo o seu progresso atual neste computador. Deseja continuar?")) {
            if (imported.curriculum) localStorage.setItem(getProfileKey("fisio_curriculum"), imported.curriculum);
            if (imported.flashcards) localStorage.setItem(getProfileKey("fisio_flashcards"), imported.flashcards);
            if (imported.tasks) localStorage.setItem(getProfileKey("fisio_tasks"), imported.tasks);
            if (imported.shifts) localStorage.setItem(getProfileKey("fisio_shifts"), imported.shifts);
            if (imported.settings) localStorage.setItem(getProfileKey("fisio_settings"), imported.settings);
            if (imported.quizStats) localStorage.setItem(getProfileKey("fisio_quiz_stats"), imported.quizStats);

            alert("Progresso importado com sucesso! O aplicativo será recarregado.");
            location.reload();
          }
        } catch (err) {
          alert("Erro ao ler o arquivo de backup: " + err.message);
        }
      };
      reader.readAsText(file);
    });
  }
}

// 7. LÓGICA DO CADERNO DIGITAL AVANÇADO (CONTEÚDO INTEGRAL & SELEÇÃO LIVRE)
let currentTool = 'read'; // 'read', 'highlight', 'erase'

function setupStudyPanelEvents() {
  const btnOpenCaderno = document.getElementById("btn-open-caderno");
  const btnOpenAnotacoes = document.getElementById("btn-open-anotacoes-materia");
  
  const btnCloseCaderno = document.getElementById("btn-close-caderno");
  const btnCloseAnotacoes = document.getElementById("btn-close-anotacoes-consolidado");
  const btnCloseAnotacoesFooter = document.getElementById("btn-close-anotacoes-footer");
  
  const btnSaveCadernoNotes = document.getElementById("btn-save-caderno-notes");
  const btnExportAnotacoesTxt = document.getElementById("btn-export-anotacoes-txt");

  // Botões de Ferramentas do Leitor
  const btnToolRead = document.getElementById("btn-tool-read");
  const btnToolHighlight = document.getElementById("btn-tool-highlight");
  const btnToolErase = document.getElementById("btn-tool-erase");

  // Abas da Sidebar do Leitor
  const btnSidebarToc = document.getElementById("btn-sidebar-toc");
  const btnSidebarSearch = document.getElementById("btn-sidebar-search");

  // Barra de Pesquisa
  const searchInput = document.getElementById("caderno-search-input");
  const btnSearch = document.getElementById("btn-caderno-search");

  if (btnOpenCaderno) btnOpenCaderno.addEventListener("click", openCadernoDigital);
  if (btnOpenAnotacoes) btnOpenAnotacoes.addEventListener("click", openAnotacoesConsolidado);
  
  if (btnCloseCaderno) btnCloseCaderno.addEventListener("click", () => {
    document.getElementById("modal-caderno").classList.remove("active");
    if (currentActiveSubjectId) openSubjectModal(currentActiveSubjectId);
  });
  
  if (btnCloseAnotacoes) btnCloseAnotacoes.addEventListener("click", () => {
    document.getElementById("modal-anotacoes-consolidado").classList.remove("active");
    if (currentActiveSubjectId) openSubjectModal(currentActiveSubjectId);
  });
  
  if (btnCloseAnotacoesFooter) btnCloseAnotacoesFooter.addEventListener("click", () => {
    document.getElementById("modal-anotacoes-consolidado").classList.remove("active");
    if (currentActiveSubjectId) openSubjectModal(currentActiveSubjectId);
  });

  if (btnSaveCadernoNotes) btnSaveCadernoNotes.addEventListener("click", saveCadernoNotes);
  if (btnExportAnotacoesTxt) btnExportAnotacoesTxt.addEventListener("click", exportAnotacoesTxt);

  // Seleção de Ferramentas
  if (btnToolRead) btnToolRead.addEventListener("click", () => switchReaderTool('read'));
  if (btnToolHighlight) btnToolHighlight.addEventListener("click", () => switchReaderTool('highlight'));
  if (btnToolErase) btnToolErase.addEventListener("click", () => switchReaderTool('erase'));

  // Abas da Sidebar
  if (btnSidebarToc) btnSidebarToc.addEventListener("click", () => switchSidebarTab('toc'));
  if (btnSidebarSearch) btnSidebarSearch.addEventListener("click", () => switchSidebarTab('search'));

  // Pesquisa
  if (btnSearch) btnSearch.addEventListener("click", performCadernoSearch);
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") performCadernoSearch();
    });
  }

  // Índice Retrátil (Sidebar Collapsible)
  const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");
  if (btnToggleSidebar) {
    btnToggleSidebar.addEventListener("click", () => {
      const sidebar = document.querySelector(".caderno-sidebar-column");
      if (sidebar) {
        if (sidebar.style.display === "none") {
          sidebar.style.display = "flex";
          btnToggleSidebar.classList.add("active");
        } else {
          sidebar.style.display = "none";
          btnToggleSidebar.classList.remove("active");
        }
      }
    });
  }

  // Inicializar Bloco de Notas Estilo OneNote
  setupNotebookEvents();
}

function switchReaderTool(tool) {
  currentTool = tool;
  const modalCaderno = document.getElementById("modal-caderno");
  
  // Remover active de todos os botões de ferramentas
  document.getElementById("btn-tool-read").classList.remove("active");
  document.getElementById("btn-tool-highlight").classList.remove("active");
  document.getElementById("btn-tool-erase").classList.remove("active");
  
  // Adicionar active ao selecionado
  document.getElementById(`btn-tool-${tool}`).classList.add("active");

  // Configurar classes no modal
  modalCaderno.classList.remove("caderno-mode-read", "caderno-mode-highlight", "caderno-mode-erase");
  modalCaderno.classList.add(`caderno-mode-${tool}`);
}

function switchSidebarTab(tab) {
  const btnToc = document.getElementById("btn-sidebar-toc");
  const btnSearch = document.getElementById("btn-sidebar-search");
  const areaToc = document.getElementById("caderno-toc-area");
  const areaSearch = document.getElementById("caderno-search-results-area");

  if (tab === 'toc') {
    btnToc.classList.add("active");
    btnToc.style.borderBottom = "2px solid var(--primary)";
    btnToc.style.color = "var(--text)";
    
    btnSearch.classList.remove("active");
    btnSearch.style.borderBottom = "2px solid transparent";
    btnSearch.style.color = "var(--text-muted)";
    
    areaToc.style.display = "block";
    areaSearch.style.display = "none";
  } else {
    btnSearch.classList.add("active");
    btnSearch.style.borderBottom = "2px solid var(--primary)";
    btnSearch.style.color = "var(--text)";
    
    btnToc.classList.remove("active");
    btnToc.style.borderBottom = "2px solid transparent";
    btnToc.style.color = "var(--text-muted)";
    
    areaSearch.style.display = "block";
    areaToc.style.display = "none";
  }
}

function openCadernoDigital() {
  if (!currentActiveSubjectId) return;

  const modalCaderno = document.getElementById("modal-caderno");
  const titleEl = document.getElementById("modal-caderno-title");
  const contentEl = document.getElementById("caderno-content-area");

  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) break;
  }

  if (!subject) return;

  titleEl.textContent = `Caderno Digital: ${subject.name}`;

  // Reset collapsible sidebar to visible on open
  const sidebar = document.querySelector(".caderno-sidebar-column");
  if (sidebar) {
    sidebar.style.display = "flex";
  }
  const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");
  if (btnToggleSidebar) {
    btnToggleSidebar.classList.add("active");
  }
  
  // Limpar conteúdo e mostrar estado de carregamento
  contentEl.innerHTML = `
    <div style="text-align: center; padding: 100px 0; color: var(--text-muted);">
      <div class="loading-spinner" style="border: 4px solid rgba(255,255,255,0.1); border-top-color: var(--primary); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 16px auto;"></div>
      <p>Carregando livro digital completo...</p>
    </div>
  `;
  
  // Fechar o modal de disciplina para ver o leitor em tela cheia
  const modalSubject = document.getElementById("modal-subject");
  if (modalSubject) modalSubject.classList.remove("active");
  
  modalCaderno.classList.add("active");

  // Carregar dinamicamente o arquivo JS
  loadSubjectMaterial(currentActiveSubjectId, () => {
    renderCadernoBook(currentActiveSubjectId);
  });
}

function loadSubjectMaterial(subjectId, callback) {
  // Se já estiver na memória global, rodar callback
  if (window.FisioMaterials && window.FisioMaterials[subjectId]) {
    callback();
    return;
  }

  // Se o script já foi injetado mas ainda não carregou, esperar
  const scriptId = `script-material-${subjectId}`;
  let script = document.getElementById(scriptId);
  
  if (script) {
    script.addEventListener("load", callback);
    return;
  }

  // Criar nova tag de script
  script = document.createElement("script");
  script.id = scriptId;
  script.src = `materials/${subjectId}.js`;
  script.async = true;
  
  script.onload = () => {
    console.log(`Material ${subjectId} carregado com sucesso!`);
    callback();
  };
  
  script.onerror = () => {
    console.error(`Erro ao carregar material ${subjectId}.`);
    // Mostrar mensagem de material não encontrado
    const contentEl = document.getElementById("caderno-content-area");
    contentEl.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <i data-lucide="alert-circle" style="width: 48px; height: 48px; margin-bottom: 12px; color: var(--red); opacity: 0.8;"></i>
        <p><strong>Livro não disponível no momento.</strong></p>
        <p style="font-size: 0.85rem; margin-top: 8px; max-width: 500px; margin-left: auto; margin-right: auto;">
          Não foi possível localizar o arquivo de material de estudo para a disciplina <strong>"${subjectId}"</strong>. 
          Certifique-se de que os PDFs desta matéria foram devidamente processados e estão na pasta <code>materials/</code> do aplicativo.
        </p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  };

  document.body.appendChild(script);
}

function renderCadernoBook(subjectId) {
  const bookData = window.FisioMaterials[subjectId];
  if (!bookData) return;

  const contentEl = document.getElementById("caderno-content-area");
  const tocList = document.querySelector(".toc-list");
  const searchCount = document.getElementById("caderno-search-count");
  const searchResultsList = document.getElementById("caderno-search-results-list");
  const searchInput = document.getElementById("caderno-search-input");

  // Resetar busca e ferramentas
  searchInput.value = "";
  searchCount.textContent = "0";
  searchResultsList.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; text-align: center; margin-top: 20px;">Pesquise uma palavra no topo para ver os resultados.</p>`;
  switchReaderTool('read');
  switchSidebarTab('toc');

  // Renderizar o Índice (TOC)
  tocList.innerHTML = "";
  if (bookData.toc && bookData.toc.length > 0) {
    bookData.toc.forEach(item => {
      const li = document.createElement("li");
      li.className = "toc-item";
      
      const a = document.createElement("a");
      a.className = "toc-link";
      a.innerHTML = `
        <span class="toc-title">${item.title}</span>
        <span class="toc-page-num">Pág. ${item.page}</span>
      `;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        // Remover active de outros links
        document.querySelectorAll(".toc-link").forEach(link => link.classList.remove("active"));
        a.classList.add("active");
        scrollToPage(item.page);
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });
  } else {
    tocList.innerHTML = `<li style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; padding: 12px;">Nenhum marcador de índice disponível no PDF.</li>`;
  }

  // Renderizar as páginas de texto
  contentEl.innerHTML = "";
  
  // Obter disciplina do estado para ler highlights
  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === subjectId);
    if (subject) break;
  }
  const savedHighlights = (subject && subject.studyHighlights) || [];

  bookData.pages.forEach(page => {
    const pageDiv = document.createElement("div");
    pageDiv.className = "caderno-page";
    pageDiv.id = `page-container-${page.number}`;
    pageDiv.setAttribute("data-page", page.number);
    pageDiv.style.borderBottom = "1px dashed rgba(255, 255, 255, 0.05)";
    pageDiv.style.paddingBottom = "24px";
    pageDiv.style.marginBottom = "32px";

    // Cabeçalho da página
    const pageHeader = document.createElement("div");
    pageHeader.style.display = "flex";
    pageHeader.style.justifyContent = "space-between";
    pageHeader.style.fontSize = "0.75rem";
    pageHeader.style.color = "var(--text-muted)";
    pageHeader.style.marginBottom = "14px";
    pageHeader.style.userSelect = "none";
    pageHeader.innerHTML = `
      <span>Página ${page.number}</span>
      <span style="font-weight: 500;">${bookData.title}</span>
    `;
    pageDiv.appendChild(pageHeader);

    // Corpo de texto
    const textContainer = document.createElement("div");
    textContainer.className = "page-text-container";
    
    // Dividir em parágrafos para renderização
    if (page.text && page.text.trim()) {
      const paras = page.text.split("\n\n");
      paras.forEach(pText => {
        const cleanP = pText.trim();
        if (cleanP) {
          const p = document.createElement("p");
          p.textContent = cleanP;
          textContainer.appendChild(p);
        }
      });
    } else {
      textContainer.innerHTML = `<p style="color: var(--text-muted); font-style: italic; font-size: 0.9rem;">Esta página está em branco ou contém apenas imagens.</p>`;
    }
    
    pageDiv.appendChild(textContainer);

    // Aplicar highlights salvos para esta página
    const pageHighlights = savedHighlights.filter(hl => hl.pageNum === page.number);
    applyPageHighlights(textContainer, pageHighlights);

    // Escutar eventos de seleção e clique para marcação/borracha
    textContainer.addEventListener("mouseup", (e) => handleTextSelection(e, page.number, textContainer));
    
    contentEl.appendChild(pageDiv);
  });

  // Listener para destacar o TOC correspondente com base no scroll
  setupScrollSpy(bookData.toc);

  if (window.lucide) window.lucide.createIcons();
}

function applyPageHighlights(container, highlights) {
  // Ordenar decrescente por startOffset para não avariar índices
  const sortedHls = [...highlights].sort((a, b) => b.startOffset - a.startOffset);
  
  sortedHls.forEach(hl => {
    applySingleHighlightToDOM(container, hl.startOffset, hl.endOffset, hl.id);
  });
}

function applySingleHighlightToDOM(container, start, end, id) {
  let charIndex = 0;
  const textNodes = [];
  
  function findTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      textNodes.push(node);
    } else {
      for (let child of node.childNodes) {
        findTextNodes(child);
      }
    }
  }
  
  findTextNodes(container);
  
  let startNode = null, startOffset = 0;
  let endNode = null, endOffset = 0;
  
  for (let node of textNodes) {
    let nodeLength = node.textContent.length;
    if (!startNode && charIndex + nodeLength >= start) {
      startNode = node;
      startOffset = start - charIndex;
    }
    if (startNode && charIndex + nodeLength >= end) {
      endNode = node;
      endOffset = end - charIndex;
      break;
    }
    charIndex += nodeLength;
  }
  
  if (startNode && endNode) {
    try {
      const range = document.createRange();
      range.setStart(startNode, startOffset);
      range.setEnd(endNode, endOffset);
      
      const mark = document.createElement("mark");
      mark.className = "custom-highlight";
      mark.setAttribute("data-id", id);
      
      // Ao clicar em uma marcação no modo borracha, apagá-la
      mark.addEventListener("click", (e) => {
        if (currentTool === 'erase') {
          e.stopPropagation();
          deleteHighlightById(id);
        }
      });
      
      range.surroundContents(mark);
    } catch (err) {
      console.warn("Falha ao cercar conteúdo com highlight:", err);
    }
  }
}

function handleTextSelection(event, pageNum, textContainer) {
  const selection = window.getSelection();
  if (selection.isCollapsed || selection.toString().trim() === "") return;

  const textRange = selection.getRangeAt(0);
  
  // Garantir que a seleção está dentro do mesmo container de página
  if (!textContainer.contains(textRange.commonAncestorContainer)) {
    return;
  }

  // Obter offsets
  const offsets = getSelectionCharacterOffsetsWithin(textContainer);
  const selectedText = selection.toString();

  // Obter o subject ativo
  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) break;
  }
  if (!subject) return;

  if (currentTool === 'highlight') {
    // Criar destaque
    const newHl = {
      id: "hl_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      pageNum: pageNum,
      startOffset: offsets.start,
      endOffset: offsets.end,
      text: selectedText
    };

    subject.studyHighlights = subject.studyHighlights || [];
    subject.studyHighlights.push(newHl);
    saveState("curriculum");

    // Limpar seleção física e re-renderizar highlights da página
    selection.removeAllRanges();
    rebuildPageTextAndHighlights(pageNum, textContainer);
  } else if (currentTool === 'erase') {
    // Remover highlights que colidem com a seleção do usuário
    subject.studyHighlights = subject.studyHighlights || [];
    const originalLength = subject.studyHighlights.length;
    
    subject.studyHighlights = subject.studyHighlights.filter(hl => {
      if (hl.pageNum !== pageNum) return true;
      // Verificar colisão
      const overlap = (hl.startOffset < offsets.end && hl.endOffset > offsets.start);
      return !overlap;
    });

    if (subject.studyHighlights.length < originalLength) {
      saveState("curriculum");
      selection.removeAllRanges();
      rebuildPageTextAndHighlights(pageNum, textContainer);
    }
  }
}

function deleteHighlightById(id) {
  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) break;
  }
  if (!subject) return;

  subject.studyHighlights = subject.studyHighlights || [];
  const originalLength = subject.studyHighlights.length;
  subject.studyHighlights = subject.studyHighlights.filter(hl => hl.id !== id);

  if (subject.studyHighlights.length < originalLength) {
    saveState("curriculum");
    renderCadernoBook(currentActiveSubjectId);
  }
}

function rebuildPageTextAndHighlights(pageNum, textContainer) {
  // Limpar texto e re-inserir parágrafos limpos
  const bookData = window.FisioMaterials[currentActiveSubjectId];
  if (!bookData) return;

  const page = bookData.pages.find(p => p.number === pageNum);
  if (!page) return;

  textContainer.innerHTML = "";
  if (page.text && page.text.trim()) {
    const paras = page.text.split("\n\n");
    paras.forEach(pText => {
      const cleanP = pText.trim();
      if (cleanP) {
        const p = document.createElement("p");
        p.textContent = cleanP;
        textContainer.appendChild(p);
      }
    });
  }

  // Re-aplicar os highlights
  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) break;
  }
  if (!subject) return;

  const savedHighlights = subject.studyHighlights || [];
  const pageHighlights = savedHighlights.filter(hl => hl.pageNum === pageNum);
  applyPageHighlights(textContainer, pageHighlights);
}

function getSelectionCharacterOffsetsWithin(element) {
  let start = 0, end = 0;
  const sel = window.getSelection();
  if (sel.rangeCount > 0) {
    const range = sel.getRangeAt(0);
    const priorRange = range.cloneRange();
    priorRange.selectNodeContents(element);
    priorRange.setEnd(range.startContainer, range.startOffset);
    start = priorRange.toString().length;
    end = start + range.toString().length;
  }
  return { start, end };
}

function performCadernoSearch() {
  if (!currentActiveSubjectId) return;

  const bookData = window.FisioMaterials[currentActiveSubjectId];
  if (!bookData) return;

  const queryInput = document.getElementById("caderno-search-input");
  const query = queryInput.value.trim().toLowerCase();
  const searchCount = document.getElementById("caderno-search-count");
  const resultsList = document.getElementById("caderno-search-results-list");

  if (!query) {
    searchCount.textContent = "0";
    resultsList.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; text-align: center; margin-top: 20px;">Digite um termo na busca.</p>`;
    return;
  }

  const results = [];

  bookData.pages.forEach(page => {
    if (!page.text) return;
    const textLower = page.text.toLowerCase();
    let index = textLower.indexOf(query);
    
    while (index !== -1) {
      // Coletar trecho
      const start = Math.max(0, index - 40);
      const end = Math.min(page.text.length, index + query.length + 40);
      let snippet = page.text.substring(start, end);
      
      // Sanitizar snippet para HTML
      snippet = snippet.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      
      // Destacar o termo no snippet
      const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, "gi");
      snippet = snippet.replace(regex, "<strong>$1</strong>");

      results.push({
        pageNum: page.number,
        startOffset: index,
        endOffset: index + query.length,
        snippet: "... " + snippet.trim() + " ..."
      });

      index = textLower.indexOf(query, index + 1);
    }
  });

  searchCount.textContent = results.length;
  switchSidebarTab('search');

  resultsList.innerHTML = "";
  if (results.length > 0) {
    results.forEach(res => {
      const div = document.createElement("div");
      div.className = "search-result-item";
      div.innerHTML = `
        <div class="search-result-meta">
          <span>Página ${res.pageNum}</span>
          <span style="font-size: 0.65rem; background-color: rgba(43,186,181,0.1); padding: 2px 6px; border-radius: 4px;">Ir para</span>
        </div>
        <div class="search-result-snippet">${res.snippet}</div>
      `;
      div.addEventListener("click", () => {
        scrollToMatch(res.pageNum, res.startOffset, res.endOffset);
      });
      resultsList.appendChild(div);
    });
  } else {
    resultsList.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; margin-top: 20px;">Nenhuma ocorrência encontrada.</p>`;
  }
}

function scrollToPage(pageNum) {
  const pageDiv = document.getElementById(`page-container-${pageNum}`);
  if (pageDiv) {
    pageDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function scrollToMatch(pageNum, startOffset, endOffset) {
  const pageDiv = document.getElementById(`page-container-${pageNum}`);
  if (!pageDiv) return;

  // Rolar até a página
  pageDiv.scrollIntoView({ behavior: "smooth", block: "start" });

  const textContainer = pageDiv.querySelector(".page-text-container");
  if (!textContainer) return;

  // Limpar qualquer busca match anterior
  document.querySelectorAll("mark.search-match").forEach(el => {
    const parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });

  // Temporariamente aplicar a marcação de busca no DOM
  let charIndex = 0;
  const textNodes = [];
  
  function findTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      textNodes.push(node);
    } else {
      for (let child of node.childNodes) {
        findTextNodes(child);
      }
    }
  }
  
  findTextNodes(textContainer);
  
  let startNode = null, startNodeOffset = 0;
  let endNode = null, endNodeOffset = 0;
  
  for (let node of textNodes) {
    let nodeLength = node.textContent.length;
    if (!startNode && charIndex + nodeLength >= startOffset) {
      startNode = node;
      startNodeOffset = startOffset - charIndex;
    }
    if (startNode && charIndex + nodeLength >= endOffset) {
      endNode = node;
      endNodeOffset = endOffset - charIndex;
      break;
    }
    charIndex += nodeLength;
  }
  
  if (startNode && endNode) {
    try {
      const range = document.createRange();
      range.setStart(startNode, startNodeOffset);
      range.setEnd(endNode, endNodeOffset);
      
      const mark = document.createElement("mark");
      mark.className = "search-match";
      range.surroundContents(mark);

      // Piscar por 3.5 segundos e sumir
      setTimeout(() => {
        if (mark.parentNode) {
          const parent = mark.parentNode;
          parent.replaceChild(document.createTextNode(mark.textContent), mark);
          parent.normalize();
        }
      }, 3500);
    } catch (err) {
      console.warn("Erro ao destacar match da busca:", err);
    }
  }
}

function setupScrollSpy(toc) {
  const container = document.getElementById("caderno-scroll-container");
  if (!container || !toc || toc.length === 0) return;

  container.addEventListener("scroll", () => {
    // Detectar qual página está visível no topo
    const pages = document.querySelectorAll(".caderno-page");
    let activePage = 1;
    const containerTop = container.getBoundingClientRect().top;

    for (let page of pages) {
      const rect = page.getBoundingClientRect();
      if (rect.top - containerTop <= 120 && rect.bottom - containerTop > 120) {
        activePage = parseInt(page.getAttribute("data-page"));
        break;
      }
    }

    // Achar o item de índice correspondente mais próximo
    let activeToc = null;
    toc.forEach(item => {
      if (item.page <= activePage) {
        if (!activeToc || item.page > activeToc.page) {
          activeToc = item;
        }
      }
    });

    if (activeToc) {
      // Destacar no menu
      document.querySelectorAll(".toc-link").forEach(link => {
        const titleText = link.querySelector(".toc-title").textContent;
        if (titleText === activeToc.title) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

function saveCadernoNotes() {
  autoSaveCurrentPage();
}

function openAnotacoesConsolidado() {
  if (!currentActiveSubjectId) return;

  const modalAnotacoes = document.getElementById("modal-anotacoes-consolidado");
  const titleEl = document.getElementById("modal-anotacoes-title");
  const notesArea = document.getElementById("consolidado-notes-area");
  const highlightsList = document.getElementById("consolidado-highlights-list");

  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) break;
  }

  if (!subject) return;

  titleEl.textContent = `Anotações da Matéria: ${subject.name}`;
  
  if (subject.studyNotes && subject.studyNotes.trim() !== "") {
    notesArea.textContent = subject.studyNotes;
  } else {
    notesArea.innerHTML = `<span style="font-style: italic; color: var(--text-muted);">Nenhuma observação digitada no caderno digital desta disciplina ainda.</span>`;
  }

  highlightsList.innerHTML = "";
  const highlights = subject.studyHighlights || [];

  if (highlights.length > 0) {
    highlights.forEach((hl) => {
      const hlDiv = document.createElement("div");
      hlDiv.className = "highlight-item";
      hlDiv.style.display = "flex";
      hlDiv.style.justifyContent = "space-between";
      hlDiv.style.alignItems = "center";
      
      const spanText = document.createElement("span");
      spanText.style.flexGrow = "1";
      spanText.innerHTML = `<strong>Pág. ${hl.pageNum}:</strong> "${hl.text}"`;
      hlDiv.appendChild(spanText);
      
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-hl";
      removeBtn.innerHTML = "&times; Remover";
      removeBtn.style.flexShrink = "0";
      removeBtn.addEventListener("click", () => {
        if (confirm("Deseja remover esta marcação?")) {
          deleteHighlightById(hl.id);
          setTimeout(openAnotacoesConsolidado, 100);
        }
      });
      hlDiv.appendChild(removeBtn);
      
      highlightsList.appendChild(hlDiv);
    });
  } else {
    highlightsList.innerHTML = `<div style="font-style: italic; color: var(--text-muted); font-size: 0.85rem;">Nenhum trecho de texto marcado nesta disciplina ainda.</div>`;
  }

  const modalSubject = document.getElementById("modal-subject");
  if (modalSubject) modalSubject.classList.remove("active");

  modalAnotacoes.classList.add("active");
  if (window.lucide) window.lucide.createIcons();
}

function exportAnotacoesTxt() {
  if (!currentActiveSubjectId) return;

  let subject = null;
  let semesterName = "";
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) {
      semesterName = sem.name;
      break;
    }
  }

  if (!subject) return;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let y = 20;

  // Função auxiliar para verificar e adicionar nova página se estourar
  function checkPageOverflow(neededHeight) {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      drawHeaderFooter();
    }
  }

  // Desenhar Cabeçalho e Rodapé padrão em todas as páginas
  function drawHeaderFooter() {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    // Cabeçalho
    doc.text("Fisio Uniasselve - Caderno Digital de Estudos", margin, 10);
    doc.line(margin, 12, pageWidth - margin, 12);
    
    // Rodapé
    const totalPages = doc.internal.getNumberOfPages();
    doc.text(`Página ${totalPages}`, pageWidth - margin - 15, pageHeight - 10);
    doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`, margin, pageHeight - 10);
  }

  // Primeira página: desenhar cabeçalho
  drawHeaderFooter();

  // Título do Documento
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(43, 186, 181); // Cor primária do app (#2bbab5)
  doc.text("Resumo de Estudos", margin, y + 10);
  y += 20;

  // Informações da Matéria
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text("Disciplina: ", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text(subject.name, margin + 25, y);
  y += 7;

  doc.setFont("helvetica", "bold");
  doc.text("Semestre: ", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text(semesterName, margin + 25, y);
  y += 7;

  doc.setFont("helvetica", "bold");
  doc.text("Data de Criação: ", margin, y);
  doc.setFont("helvetica", "normal");
  doc.text(new Date().toLocaleDateString('pt-BR') + " às " + new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'}), margin + 35, y);
  y += 12;

  // Linha divisória
  doc.setDrawColor(43, 186, 181);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  // 1. Observações Digitadas
  checkPageOverflow(20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(43, 186, 181);
  doc.text("Observações Digitadas", margin, y);
  y += 8;

  const notesText = (subject.studyNotes && subject.studyNotes.trim() !== "") 
    ? subject.studyNotes 
    : "Nenhuma observação digitada para esta disciplina.";

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  
  const splitNotes = doc.splitTextToSize(notesText, contentWidth);
  splitNotes.forEach(line => {
    checkPageOverflow(5);
    doc.text(line, margin, y);
    y += 5;
  });
  y += 10;

  // 2. Trechos Marcados (Highlights)
  checkPageOverflow(20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(114, 46, 209); // Roxo do design (#722ed1)
  doc.text("Trechos Marcados (Highlights)", margin, y);
  y += 8;

  const highlights = subject.studyHighlights || [];
  if (highlights.length > 0) {
    const sortedHls = [...highlights].sort((a, b) => a.pageNum - b.pageNum);
    doc.setFontSize(10);
    
    sortedHls.forEach((hl, index) => {
      checkPageOverflow(15);
      
      // Indicador de página
      doc.setFont("helvetica", "bold");
      doc.setTextColor(114, 46, 209);
      doc.text(`[${index + 1}] Página ${hl.pageNum}:`, margin, y);
      y += 5;

      // Texto do destaque
      doc.setFont("helvetica", "oblique");
      doc.setTextColor(80, 80, 80);
      
      const hlText = `"${hl.text}"`;
      const splitHl = doc.splitTextToSize(hlText, contentWidth - 5);
      splitHl.forEach(line => {
        checkPageOverflow(5);
        doc.text(line, margin + 5, y);
        y += 5;
      });
      y += 5; // Espaçamento entre marcações
    });
  } else {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Nenhum trecho de texto marcado nesta disciplina ainda.", margin, y);
    y += 5;
  }

  // Baixar o arquivo PDF
  const filename = `Resumo_${subject.name.replace(/\s+/g, "_")}.pdf`;
  doc.save(filename);
}

/* --- ONENOTE NOTEBOOK SYSTEM LOGIC --- */
let activeNotebookSubject = null;
let currentActiveSectionId = null;
let currentActivePageId = null;

// Opens the Notebook modal
function openNotebook() {
  if (!currentActiveSubjectId) return;
  
  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) break;
  }
  if (!subject) return;
  
  activeNotebookSubject = subject;
  
  // 1. Check/Migrate data
  initializeNotebookData(subject);
  
  // 2. Open modal
  const modalNotebook = document.getElementById("modal-notebook");
  if (modalNotebook) modalNotebook.style.display = "flex";
  
  // Set window title
  const titleEl = document.getElementById("notebook-modal-title");
  if (titleEl) titleEl.textContent = `Bloco de Notas - ${subject.name}`;
  
  // 3. Set default active section & page
  if (subject.notebook.sections.length > 0) {
    currentActiveSectionId = subject.notebook.sections[0].id;
    if (subject.notebook.sections[0].pages.length > 0) {
      currentActivePageId = subject.notebook.sections[0].pages[0].id;
    } else {
      currentActivePageId = null;
    }
  } else {
    currentActiveSectionId = null;
    currentActivePageId = null;
  }
  
  // 4. Render panels
  renderNotebookSections();
  renderNotebookPages();
  loadNotebookPageContent();
  
  // Refresh lucide icons
  if (window.lucide) window.lucide.createIcons();
}

function initializeNotebookData(subject) {
  if (!subject.notebook) {
    subject.notebook = { sections: [] };
  }
  
  // Migrate from subject.studyNotes if exists and sections are empty
  if (subject.notebook.sections.length === 0) {
    const hasLegacyNotes = subject.studyNotes && subject.studyNotes.trim() !== "";
    const contentHtml = hasLegacyNotes 
      ? subject.studyNotes.split('\n').map(line => `<div>${escapeHtml(line)}</div>`).join('')
      : "";
      
    subject.notebook.sections.push({
      id: "sec_" + Date.now(),
      title: "Geral",
      color: "#9d7df8",
      pages: [
        {
          id: "page_" + Date.now(),
          title: "Minhas Observações",
          date: new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          content: contentHtml
        }
      ]
    });
  }
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderNotebookSections() {
  const listEl = document.getElementById("notebook-sections-list");
  if (!listEl) return;
  listEl.innerHTML = "";
  
  if (!activeNotebookSubject || !activeNotebookSubject.notebook) return;
  
  activeNotebookSubject.notebook.sections.forEach(sec => {
    const secItem = document.createElement("div");
    secItem.className = `notebook-section-item ${sec.id === currentActiveSectionId ? 'active' : ''}`;
    secItem.style.borderLeft = `4px solid ${sec.color || '#9d7df8'}`;
    secItem.innerHTML = `
      <span class="sec-title" style="flex-grow:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${escapeHtml(sec.title)}">${escapeHtml(sec.title)}</span>
      <button class="btn-delete-sec" data-id="${sec.id}">&times;</button>
    `;
    
    // Select section
    secItem.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-delete-sec")) return;
      
      // Auto-save active page before switching
      autoSaveCurrentPage();
      
      currentActiveSectionId = sec.id;
      if (sec.pages && sec.pages.length > 0) {
        currentActivePageId = sec.pages[0].id;
      } else {
        currentActivePageId = null;
      }
      renderNotebookSections();
      renderNotebookPages();
      loadNotebookPageContent();
    });
    
    // Rename section on double click
    secItem.querySelector(".sec-title").addEventListener("dblclick", () => {
      const newTitle = prompt("Renomear Seção:", sec.title);
      if (newTitle && newTitle.trim() !== "") {
        sec.title = newTitle.trim();
        renderNotebookSections();
        autoSaveCurrentPage();
      }
    });
    
    // Delete section
    secItem.querySelector(".btn-delete-sec").addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(`Tem certeza que deseja excluir a seção "${sec.title}" e todas as suas páginas?`)) {
        activeNotebookSubject.notebook.sections = activeNotebookSubject.notebook.sections.filter(s => s.id !== sec.id);
        
        if (currentActiveSectionId === sec.id) {
          if (activeNotebookSubject.notebook.sections.length > 0) {
            currentActiveSectionId = activeNotebookSubject.notebook.sections[0].id;
            if (activeNotebookSubject.notebook.sections[0].pages.length > 0) {
              currentActivePageId = activeNotebookSubject.notebook.sections[0].pages[0].id;
            } else {
              currentActivePageId = null;
            }
          } else {
            currentActiveSectionId = null;
            currentActivePageId = null;
          }
        }
        renderNotebookSections();
        renderNotebookPages();
        loadNotebookPageContent();
        autoSaveCurrentPage();
      }
    });
    
    listEl.appendChild(secItem);
  });
}

function renderNotebookPages() {
  const listEl = document.getElementById("notebook-pages-list");
  if (!listEl) return;
  listEl.innerHTML = "";
  
  if (!activeNotebookSubject || !currentActiveSectionId) return;
  
  const sec = activeNotebookSubject.notebook.sections.find(s => s.id === currentActiveSectionId);
  if (!sec || !sec.pages) return;
  
  sec.pages.forEach(page => {
    const pageItem = document.createElement("div");
    pageItem.className = `notebook-page-item ${page.id === currentActivePageId ? 'active' : ''}`;
    pageItem.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="page-title" style="flex-grow:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${escapeHtml(page.title || 'Sem Título')}">${escapeHtml(page.title || 'Sem Título')}</span>
        <button class="btn-delete-page" data-id="${page.id}" style="background:none; border:none; color:#ff4d4d; font-size:1.1rem; cursor:pointer; line-height:1; display:none;">&times;</button>
      </div>
      <span class="page-meta">${page.date || ''}</span>
    `;
    
    // Show delete button on hover
    pageItem.addEventListener("mouseenter", () => {
      pageItem.querySelector(".btn-delete-page").style.display = "block";
    });
    pageItem.addEventListener("mouseleave", () => {
      pageItem.querySelector(".btn-delete-page").style.display = "none";
    });
    
    // Select page
    pageItem.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-delete-page")) return;
      
      // Auto-save active page before switching
      autoSaveCurrentPage();
      
      currentActivePageId = page.id;
      renderNotebookPages();
      loadNotebookPageContent();
    });
    
    // Delete page
    pageItem.querySelector(".btn-delete-page").addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(`Excluir a página "${page.title || 'Sem Título'}"?`)) {
        sec.pages = sec.pages.filter(p => p.id !== page.id);
        
        if (currentActivePageId === page.id) {
          if (sec.pages.length > 0) {
            currentActivePageId = sec.pages[0].id;
          } else {
            currentActivePageId = null;
          }
        }
        renderNotebookPages();
        loadNotebookPageContent();
        autoSaveCurrentPage();
      }
    });
    
    listEl.appendChild(pageItem);
  });
}

function loadNotebookPageContent() {
  const container = document.getElementById("notebook-pages-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  if (!activeNotebookSubject || !currentActiveSectionId || !currentActivePageId) {
    const emptySheet = createNewSheet(0, true);
    container.appendChild(emptySheet);
    return;
  }
  
  const sec = activeNotebookSubject.notebook.sections.find(s => s.id === currentActiveSectionId);
  if (!sec) {
    const emptySheet = createNewSheet(0, true);
    container.appendChild(emptySheet);
    return;
  }
  
  const page = sec.pages.find(p => p.id === currentActivePageId);
  if (!page) {
    const emptySheet = createNewSheet(0, true);
    container.appendChild(emptySheet);
    return;
  }
  
  // Create first page (with title and metadata)
  const firstSheet = createNewSheet(0, false, page);
  container.appendChild(firstSheet);
  
  const firstEditor = firstSheet.querySelector('.notebook-page-content-editor');
  
  // Parse page content and split it across sheets if it overflows
  if (page.content && page.content.trim() !== "") {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = page.content;
    
    let currentEditor = firstEditor;
    let currentSheet = firstSheet;
    
    const children = Array.from(tempDiv.childNodes);
    children.forEach(child => {
      currentEditor.appendChild(child.cloneNode(true));
      
      const isFirst = currentSheet.id === "sheet-1";
      const maxH = isFirst ? 880 : 970;
      
      if (currentEditor.scrollHeight > maxH) {
        // Create next sheet
        const nextSheetIndex = container.children.length;
        const nextSheet = createNewSheet(nextSheetIndex, false);
        container.appendChild(nextSheet);
        
        currentSheet = nextSheet;
        const nextEditor = nextSheet.querySelector('.notebook-page-content-editor');
        
        // Move the child we just added to the new page
        const lastNode = currentEditor.lastChild;
        if (lastNode) {
          nextEditor.appendChild(lastNode);
        }
        currentEditor = nextEditor;
      }
    });
  }
}

function createNewSheet(index, isDisabled = false, pageData = null) {
  const sheet = document.createElement("div");
  sheet.className = `notebook-sheet ${index === 0 ? 'first-page' : ''}`;
  sheet.id = `sheet-${index + 1}`;
  
  if (index === 0) {
    // Title Area (exactly 84px height)
    const titleArea = document.createElement("div");
    titleArea.className = "notebook-title-area";
    
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "notebook-page-title-input";
    titleInput.placeholder = "Sem Título";
    titleInput.maxLength = 60;
    titleInput.disabled = isDisabled;
    titleInput.value = pageData ? (pageData.title || "") : "";
    titleInput.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    titleInput.style.fontSize = "1.75rem";
    titleInput.style.fontWeight = "700";
    titleInput.style.border = "none";
    titleInput.style.outline = "none";
    titleInput.style.width = "100%";
    titleInput.style.color = "#333333";
    titleInput.style.background = "transparent";
    titleInput.style.padding = "4px 0";
    
    const metaDiv = document.createElement("div");
    metaDiv.style.fontSize = "0.8rem";
    metaDiv.style.color = "#666666";
    metaDiv.style.marginTop = "4px";
    metaDiv.style.display = "flex";
    metaDiv.style.gap = "12px";
    metaDiv.style.fontFamily = "var(--font-body)";
    
    const dateSpan = document.createElement("span");
    dateSpan.id = "notebook-page-date";
    dateSpan.textContent = pageData ? (pageData.date || "") : "";
    
    const timeSpan = document.createElement("span");
    timeSpan.id = "notebook-page-time";
    timeSpan.textContent = pageData ? (pageData.time || "") : "";
    
    metaDiv.appendChild(dateSpan);
    metaDiv.appendChild(timeSpan);
    titleArea.appendChild(titleInput);
    titleArea.appendChild(metaDiv);
    sheet.appendChild(titleArea);
  }
  
  const editor = document.createElement("div");
  editor.className = "notebook-page-content-editor";
  editor.contentEditable = isDisabled ? "false" : "true";
  editor.setAttribute("placeholder", index === 0 ? "Comece a digitar suas anotações aqui..." : "");
  
  sheet.appendChild(editor);
  return sheet;
}

function handleOverflow(editor, maxH) {
  const sheet = editor.closest('.notebook-sheet');
  const container = document.getElementById("notebook-pages-container");
  
  let nextSheet = sheet.nextElementSibling;
  if (!nextSheet || !nextSheet.classList.contains('notebook-sheet')) {
    nextSheet = createNewSheet(container.children.length, false);
    container.appendChild(nextSheet);
  }
  
  const nextEditor = nextSheet.querySelector('.notebook-page-content-editor');
  
  const elementsToMove = [];
  while (editor.scrollHeight > maxH && editor.children.length > 1) {
    const lastChild = editor.lastElementChild;
    if (!lastChild) break;
    elementsToMove.unshift(lastChild);
    editor.removeChild(lastChild);
  }
  
  if (elementsToMove.length > 0) {
    // Prepend to next editor
    elementsToMove.forEach(el => {
      if (nextEditor.firstChild) {
        nextEditor.insertBefore(el, nextEditor.firstChild);
      } else {
        nextEditor.appendChild(el);
      }
    });
    
    autoSaveCurrentPage();
    
    // Move focus
    nextEditor.focus();
    placeCaretAtStart(elementsToMove[0]);
    
    // Check overflow recursively
    const nextMaxH = 970;
    if (nextEditor.scrollHeight > nextMaxH) {
      handleOverflow(nextEditor, nextMaxH);
    }
  }
}

function mergePageWithPrevious(sheet) {
  const prevSheet = sheet.previousElementSibling;
  if (!prevSheet || !prevSheet.classList.contains('notebook-sheet')) return;
  
  const prevEditor = prevSheet.querySelector('.notebook-page-content-editor');
  const currentEditor = sheet.querySelector('.notebook-page-content-editor');
  
  // Create a marker to restore caret position
  const marker = document.createElement("span");
  marker.id = "merge-marker";
  marker.style.display = "inline-block";
  marker.style.width = "0";
  marker.style.height = "0";
  marker.style.overflow = "hidden";
  
  // Append current elements to previous editor
  const children = Array.from(currentEditor.childNodes);
  if (children.length > 0) {
    prevEditor.appendChild(marker);
    children.forEach(child => {
      prevEditor.appendChild(child);
    });
  }
  
  sheet.parentNode.removeChild(sheet);
  
  prevEditor.focus();
  
  const m = document.getElementById("merge-marker");
  if (m) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStartBefore(m);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
    m.parentNode.removeChild(m);
  }
  
  autoSaveCurrentPage();
}

function placeCaretAtStart(el) {
  el.focus();
  try {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  } catch (err) {
    console.warn("Failed to place caret at start", err);
  }
}

function addSection() {
  if (!activeNotebookSubject) return;
  
  const colors = ["#9d7df8", "#fbbf24", "#3b82f6", "#ef4444", "#10b981", "#ec4899", "#f97316"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const sectionTitle = prompt("Nome da Seção:", "Nova Seção");
  if (sectionTitle === null) return; // Cancelled
  
  const title = sectionTitle.trim() !== "" ? sectionTitle.trim() : "Nova Seção";
  
  const newSec = {
    id: "sec_" + Date.now(),
    title: title,
    color: randomColor,
    pages: []
  };
  
  // Automatically add one page to the new section
  newSec.pages.push({
    id: "page_" + Date.now(),
    title: "Anotação 1",
    date: new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    content: ""
  });
  
  // Auto-save current active page content before switching
  autoSaveCurrentPage();
  
  activeNotebookSubject.notebook.sections.push(newSec);
  currentActiveSectionId = newSec.id;
  currentActivePageId = newSec.pages[0].id;
  
  renderNotebookSections();
  renderNotebookPages();
  loadNotebookPageContent();
  autoSaveCurrentPage();
}

function addPage() {
  if (!activeNotebookSubject || !currentActiveSectionId) return;
  
  const sec = activeNotebookSubject.notebook.sections.find(s => s.id === currentActiveSectionId);
  if (!sec) return;
  
  // Auto-save current active page content before switching
  autoSaveCurrentPage();
  
  const newPage = {
    id: "page_" + Date.now(),
    title: "Sem Título",
    date: new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    content: ""
  };
  
  sec.pages.push(newPage);
  currentActivePageId = newPage.id;
  
  renderNotebookPages();
  loadNotebookPageContent();
  autoSaveCurrentPage();
  
  // Focus the title input automatically
  const titleInput = document.getElementById("notebook-page-title-input");
  if (titleInput) {
    titleInput.focus();
    titleInput.select();
  }
}

function autoSaveCurrentPage() {
  if (!activeNotebookSubject || !currentActiveSectionId || !currentActivePageId) return;
  
  const sec = activeNotebookSubject.notebook.sections.find(s => s.id === currentActiveSectionId);
  if (!sec) return;
  
  const page = sec.pages.find(p => p.id === currentActivePageId);
  if (!page) return;
  
  const titleInput = document.getElementById("notebook-page-title-input");
  
  if (titleInput) {
    const val = titleInput.value.trim();
    const oldTitle = page.title;
    page.title = val !== "" ? val : "Sem Título";
    
    // Update pages list UI in real-time only if the title actually changed
    if (oldTitle !== page.title) {
      const activePageItem = document.querySelector(`.notebook-page-item.active .page-title`);
      if (activePageItem) activePageItem.textContent = page.title;
    }
  }
  
  // Gather contents from all sheets
  const editors = document.querySelectorAll('.notebook-page-content-editor');
  let combinedContent = "";
  editors.forEach(editor => {
    combinedContent += editor.innerHTML;
  });
  page.content = combinedContent;
  
  // Compile to legacy studyNotes field so that other views/PDF exports still function
  activeNotebookSubject.studyNotes = compileNotebookToStudyNotes(activeNotebookSubject);
  
  // Save global curriculum state
  saveState("curriculum");
}

function compileNotebookToStudyNotes(subject) {
  if (!subject.notebook || !subject.notebook.sections) return subject.studyNotes || "";
  let compiledText = "";
  subject.notebook.sections.forEach(sec => {
    compiledText += `=== SEÇÃO: ${sec.title.toUpperCase()} ===\n\n`;
    sec.pages.forEach(page => {
      compiledText += `--- PÁGINA: ${page.title} (${page.date} às ${page.time}) ---\n`;
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = page.content;
      
      // Replace checkbox input tags with [ ] or [X]
      tempDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        const checkedStr = cb.checked ? "[X] " : "[ ] ";
        const textNode = document.createTextNode(checkedStr);
        cb.parentNode.replaceChild(textNode, cb);
      });
      
      // Clean paragraphs and add linebreaks
      let text = tempDiv.innerText || tempDiv.textContent || "";
      compiledText += text;
      compiledText += "\n\n";
    });
    compiledText += "\n";
  });
  return compiledText.trim();
}

function setupNotebookEvents() {
  const btnOpenNotebook = document.getElementById("btn-open-notebook");
  const btnCloseNotebook = document.getElementById("btn-close-notebook");
  const btnAddSection = document.getElementById("btn-notebook-add-section");
  const btnAddPage = document.getElementById("btn-notebook-add-page");
  
  if (btnOpenNotebook) btnOpenNotebook.addEventListener("click", openNotebook);
  if (btnCloseNotebook) btnCloseNotebook.addEventListener("click", () => {
    autoSaveCurrentPage();
    document.getElementById("modal-notebook").style.display = "none";
    // reopen subject modal to keep normal flow
    if (currentActiveSubjectId) openSubjectModal(currentActiveSubjectId);
  });
  
  if (btnAddSection) btnAddSection.addEventListener("click", addSection);
  if (btnAddPage) btnAddPage.addEventListener("click", addPage);
  
  // Event Delegation for Notebook dynamic elements
  const pagesContainer = document.getElementById("notebook-pages-container");
  if (pagesContainer) {
    // Handle typing inputs (autosave & overflow pagination)
    pagesContainer.addEventListener("input", (e) => {
      if (e.target.id === "notebook-page-title-input") {
        autoSaveCurrentPage();
      } else if (e.target.classList.contains("notebook-page-content-editor")) {
        autoSaveCurrentPage();
        
        const editor = e.target;
        const sheet = editor.closest('.notebook-sheet');
        const isFirst = sheet.id === 'sheet-1';
        const maxH = isFirst ? 880 : 970;
        
        if (editor.scrollHeight > maxH) {
          handleOverflow(editor, maxH);
        }
      }
    });
    
    // Checkbox click listener
    pagesContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        if (e.target.checked) {
          e.target.setAttribute("checked", "checked");
        } else {
          e.target.removeAttribute("checked");
        }
        autoSaveCurrentPage();
      }
    });
    
    // Backspace handling for merging pages
    pagesContainer.addEventListener("keydown", (e) => {
      if (e.target.classList.contains("notebook-page-content-editor")) {
        if (e.key === "Backspace") {
          const editor = e.target;
          const sheet = editor.closest('.notebook-sheet');
          const selection = window.getSelection();
          if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            
            // Check if caret is at the start of the editor
            let isAtStart = false;
            if (range.startOffset === 0 && range.collapsed) {
              if (range.startContainer === editor) {
                isAtStart = true;
              } else {
                let node = range.startContainer;
                while (node && node.parentNode !== editor) {
                  node = node.parentNode;
                }
                if (node && node === editor.firstChild) {
                  isAtStart = true;
                }
              }
            }
            
            if (isAtStart && sheet.id !== 'sheet-1') {
              e.preventDefault();
              mergePageWithPrevious(sheet);
            }
          }
        }
      }
    });
  }
  
  // Ribbon commands
  document.getElementById("nb-font-family").addEventListener("change", (e) => {
    document.execCommand("fontName", false, e.target.value);
    autoSaveCurrentPage();
  });
  document.getElementById("nb-font-size").addEventListener("change", (e) => {
    document.execCommand("fontSize", false, e.target.value);
    autoSaveCurrentPage();
  });
  
  document.getElementById("nb-btn-bold").addEventListener("click", () => {
    document.execCommand("bold");
    autoSaveCurrentPage();
  });
  document.getElementById("nb-btn-italic").addEventListener("click", () => {
    document.execCommand("italic");
    autoSaveCurrentPage();
  });
  document.getElementById("nb-btn-underline").addEventListener("click", () => {
    document.execCommand("underline");
    autoSaveCurrentPage();
  });
  document.getElementById("nb-btn-strike").addEventListener("click", () => {
    document.execCommand("strikeThrough");
    autoSaveCurrentPage();
  });
  
  document.getElementById("nb-font-color").addEventListener("input", (e) => {
    document.execCommand("foreColor", false, e.target.value);
    autoSaveCurrentPage();
  });
  document.getElementById("nb-highlight-color").addEventListener("input", (e) => {
    document.execCommand("hiliteColor", false, e.target.value);
    autoSaveCurrentPage();
  });
  
  document.getElementById("nb-btn-bullets").addEventListener("click", () => {
    document.execCommand("insertUnorderedList");
    autoSaveCurrentPage();
  });
  document.getElementById("nb-btn-numbers").addEventListener("click", () => {
    document.execCommand("insertOrderedList");
    autoSaveCurrentPage();
  });
  document.getElementById("nb-btn-todo").addEventListener("click", () => {
    insertTodoCheckbox();
    autoSaveCurrentPage();
  });
  
  document.getElementById("nb-heading").addEventListener("change", (e) => {
    document.execCommand("formatBlock", false, e.target.value);
    autoSaveCurrentPage();
  });
}

function insertTodoCheckbox() {
  let activeEditor = document.activeElement;
  if (!activeEditor || !activeEditor.classList.contains('notebook-page-content-editor')) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      let node = selection.anchorNode;
      while (node && node !== document.body) {
        if (node.classList && node.classList.contains('notebook-page-content-editor')) {
          activeEditor = node;
          break;
        }
        node = node.parentNode;
      }
    }
  }
  
  if (!activeEditor) {
    activeEditor = document.querySelector('.notebook-page-content-editor');
  }
  
  if (!activeEditor) return;
  activeEditor.focus();
  
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  const range = selection.getRangeAt(0);
  range.deleteContents();
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.width = "16px";
  checkbox.style.height = "16px";
  checkbox.style.marginRight = "6px";
  checkbox.style.cursor = "pointer";
  checkbox.style.accentColor = "#10b981";
  
  range.insertNode(checkbox);
  
  const spaceNode = document.createTextNode(" ");
  range.insertNode(spaceNode);
  
  range.setStartAfter(spaceNode);
  range.setEndAfter(spaceNode);
  selection.removeAllRanges();
  selection.addRange(range);
}

// 8. INICIALIZAÇÃO NO CARREGAMENTO DA PÁGINA
window.addEventListener("DOMContentLoaded", checkAuthAndStart);

// Exportar estado para outros módulos
window.FisioApp = {
  state,
  saveState,
  renderDashboard
};
