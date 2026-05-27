// FisioAcademic - Planejador de Estudos Híbrido & Pomodoro Timer

(function () {
  // Configurações do Pomodoro
  let studyDuration = parseInt(localStorage.getItem(window.getProfileKey ? window.getProfileKey("fisio_pomo_study_duration") : "fisio_pomo_study_duration") || "25") * 60;
  let breakDuration = parseInt(localStorage.getItem(window.getProfileKey ? window.getProfileKey("fisio_pomo_break_duration") : "fisio_pomo_break_duration") || "5") * 60;
  let timeLeft = studyDuration;
  let timerInterval = null;
  let currentMode = "study"; // "study" ou "break"
  let isTimerRunning = false;
  let soundEnabled = true;

  // Ícones inline SVG (offline-first para evitar dependências CDN)
  const PLAY_SVG = `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 2px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
  const PAUSE_SVG = `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

  // Web Audio API para alerta sonoro premium sem dependência de arquivo
  function playAlarmSound() {
    if (!soundEnabled) return;
    
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Criar osciladores para um acorde harmonioso (Fisioterapia relaxante/alerta suave)
      const playTone = (freq, startTime, duration) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);
        
        gainNode.gain.setValueAtTime(0.3, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration - 0.05);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
      };
      
      const now = audioCtx.currentTime;
      // Tocar melodia suave ascendente
      playTone(523.25, now, 0.3); // C5
      playTone(659.25, now + 0.15, 0.3); // E5
      playTone(783.99, now + 0.3, 0.5); // G5
    } catch (err) {
      console.log("Erro ao tocar áudio:", err);
    }
  }

  // 1. GERENCIAMENTO DO POMODORO TIMER
  function updateTimerDisplays() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    // Atualizar display principal (tela de estudos)
    const mainDisplay = document.getElementById("main-timer-display");
    if (mainDisplay) mainDisplay.textContent = formattedTime;

    // Atualizar display secundário (Dashboard)
    const miniDisplay = document.getElementById("mini-timer-display");
    if (miniDisplay) miniDisplay.textContent = formattedTime;

    // Atualizar anel de progresso SVG (circunferência = 2 * PI * 90 = ~565.48)
    const ring = document.getElementById("pomodoro-ring");
    if (ring) {
      const totalDuration = currentMode === "study" ? studyDuration : breakDuration;
      const progress = (totalDuration - timeLeft) / totalDuration;
      const circumference = 2 * Math.PI * 90;
      const offset = circumference - progress * circumference;
      ring.style.strokeDashoffset = offset;
    }
  }

  function startTimer() {
    if (isTimerRunning) return;
    
    isTimerRunning = true;
    updatePlayButtons(true);
    
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplays();
      } else {
        // Tempo acabou!
        clearInterval(timerInterval);
        isTimerRunning = false;
        
        playAlarmSound();
        
        // Alternar modo
        if (currentMode === "study") {
          alert("Hora de descansar! Dica Fisio: Faça alguns alongamentos cervicais e de punho.");
          currentMode = "break";
          timeLeft = breakDuration;
          const statusText = document.getElementById("pomodoro-status");
          if (statusText) statusText.textContent = "Pausa Ativa";
        } else {
          alert("Hora de focar nos estudos! Vamos para a próxima matéria.");
          currentMode = "study";
          timeLeft = studyDuration;
          const statusText = document.getElementById("pomodoro-status");
          if (statusText) statusText.textContent = "Estudo Ativo";
        }
        
        updateTimerDisplays();
        startTimer(); // Reinicia automaticamente no novo modo
      }
    }, 1000);
  }

  function pauseTimer() {
    if (!isTimerRunning) return;
    clearInterval(timerInterval);
    isTimerRunning = false;
    updatePlayButtons(false);
  }

  function toggleTimer() {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function resetTimer() {
    pauseTimer();
    currentMode = "study";
    timeLeft = studyDuration;
    const statusText = document.getElementById("pomodoro-status");
    if (statusText) statusText.textContent = "Estudo Ativo";
    updateTimerDisplays();
  }

  function skipTimer() {
    pauseTimer();
    if (currentMode === "study") {
      currentMode = "break";
      timeLeft = breakDuration;
      const statusText = document.getElementById("pomodoro-status");
      if (statusText) statusText.textContent = "Pausa Ativa";
    } else {
      currentMode = "study";
      timeLeft = studyDuration;
      const statusText = document.getElementById("pomodoro-status");
      if (statusText) statusText.textContent = "Estudo Ativo";
    }
    updateTimerDisplays();
  }

  function updatePlayButtons(running) {
    const playIconSvg = running ? PAUSE_SVG : PLAY_SVG;
    
    // Botão Principal (Estudos)
    const btnPlayPomo = document.getElementById("btn-pomo-play");
    if (btnPlayPomo) {
      btnPlayPomo.innerHTML = playIconSvg;
    }
    
    // Botão Secundário (Dashboard)
    const btnPlayMini = document.getElementById("btn-mini-play");
    if (btnPlayMini) {
      btnPlayMini.innerHTML = playIconSvg;
    }
  }

  // 2. TAREFAS DO CRONOGRAMA DE ESTUDOS
  function renderPlannerList() {
    const listContainer = document.getElementById("planner-tasks-list");
    if (!listContainer) return;

    listContainer.innerHTML = "";

    const tasks = window.FisioApp.state.plannerTasks;

    if (tasks.length === 0) {
      listContainer.innerHTML = `<div class="no-records-msg">Nenhuma atividade agendada.</div>`;
      return;
    }

    // Ordenação dos dias
    const dayOrder = {
      "Segunda-feira": 1,
      "Terça-feira": 2,
      "Quarta-feira": 3,
      "Quinta-feira": 4,
      "Sexta-feira": 5,
      "Sábado": 6,
      "Domingo": 7
    };

    const sortedTasks = [...tasks].sort((a, b) => dayOrder[a.day] - dayOrder[b.day]);

    sortedTasks.forEach(task => {
      const item = document.createElement("div");
      item.className = "planner-task-item";
      
      let typeLabel = "EAD";
      if (task.type === "pratica") typeLabel = "Prática";
      if (task.type === "prova") typeLabel = "Prova";

      item.innerHTML = `
        <div class="task-left">
          <label class="task-checkbox-container">
            <input type="checkbox" class="task-checkbox" ${task.completed ? "checked" : ""} data-task-id="${task.id}">
            <span class="custom-checkmark">
              <i data-lucide="check"></i>
            </span>
          </label>
          <div class="task-info">
            <span class="title">${task.title}</span>
            <div class="task-meta">
              <span class="task-tag tag-${task.type}">${typeLabel}</span>
              <span>• ${task.day}</span>
              ${task.details ? `<span>• ${task.details}</span>` : ""}
            </div>
          </div>
        </div>
        <div class="task-actions">
          <button class="btn-card-action btn-delete-task" data-task-id="${task.id}" title="Remover atividade">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      `;

      // Evento de completar
      item.querySelector(".task-checkbox").addEventListener("change", (e) => {
        const taskId = e.target.getAttribute("data-task-id");
        const checked = e.target.checked;
        toggleTaskCompleted(taskId, checked);
      });

      // Evento de deletar
      item.querySelector(".btn-delete-task").addEventListener("click", () => {
        deleteTask(task.id);
      });

      listContainer.appendChild(item);
    });

    lucide.createIcons();
  }

  function toggleTaskCompleted(id, completed) {
    const tasks = window.FisioApp.state.plannerTasks;
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = completed;
      window.FisioApp.saveState("plannerTasks");
      window.FisioApp.renderDashboard(); // Atualiza dashboard caso mude aulas práticas realizadas
    }
  }

  function addNewTask(title, type, day, details) {
    const newId = "task_" + Date.now();
    window.FisioApp.state.plannerTasks.push({
      id: newId,
      title,
      type,
      day,
      details,
      completed: false
    });
    window.FisioApp.saveState("plannerTasks");
    renderPlannerList();
    window.FisioApp.renderDashboard();
  }

  function deleteTask(id) {
    if (!confirm("Remover esta atividade do cronograma?")) return;
    
    const tasks = window.FisioApp.state.plannerTasks;
    const idx = tasks.findIndex(t => t.id === id);
    if (idx !== -1) {
      tasks.splice(idx, 1);
      window.FisioApp.saveState("plannerTasks");
      renderPlannerList();
      window.FisioApp.renderDashboard();
    }
  }

  // Modais de Tarefas
  function openTaskModal() {
    const modal = document.getElementById("modal-task");
    if (modal) modal.classList.add("active");
  }

  function closeTaskModal() {
    const modal = document.getElementById("modal-task");
    if (modal) modal.classList.remove("active");
  }

  // 3. EVENTOS DE INICIALIZAÇÃO DO MÓDULO
  function initPlannerModule() {
    // 1. Ligar Botões do Pomodoro
    const btnPlayPomo = document.getElementById("btn-pomo-play");
    const btnResetPomo = document.getElementById("btn-pomo-reset");
    const btnSkipPomo = document.getElementById("btn-pomo-skip");
    const btnPlayMini = document.getElementById("btn-mini-play");
    const btnSound = document.getElementById("btn-toggle-sound");

    if (btnPlayPomo) btnPlayPomo.addEventListener("click", toggleTimer);
    if (btnPlayMini) btnPlayMini.addEventListener("click", toggleTimer);
    if (btnResetPomo) btnResetPomo.addEventListener("click", resetTimer);
    if (btnSkipPomo) btnSkipPomo.addEventListener("click", skipTimer);

    if (btnSound) {
      btnSound.addEventListener("click", () => {
        soundEnabled = !soundEnabled;
        const text = document.getElementById("sound-status-text");
        const icon = document.getElementById("sound-icon");
        
        if (soundEnabled) {
          if (text) text.textContent = "Som Ativado";
          btnSound.classList.remove("btn-outline");
          btnSound.classList.add("btn-secondary");
          if (icon) icon.setAttribute("data-lucide", "volume-2");
        } else {
          if (text) text.textContent = "Som Mudo";
          btnSound.classList.remove("btn-secondary");
          btnSound.classList.add("btn-outline");
          if (icon) icon.setAttribute("data-lucide", "volume-x");
        }
        lucide.createIcons();
      });
    }

    // Tópico de Estudo Selecionado
    const selectTopic = document.getElementById("pomodoro-topic");
    if (selectTopic) {
      selectTopic.addEventListener("change", (e) => {
        const statusText = document.getElementById("pomodoro-status");
        if (statusText && currentMode === "study") {
          statusText.textContent = e.target.value;
        }
      });
    }

    // 2. Ligar Eventos da Lista de Tarefas
    const btnAddTask = document.getElementById("btn-add-task");
    const btnCloseTaskModal = document.getElementById("btn-close-task-modal");
    const btnCancelTask = document.getElementById("btn-cancel-task");
    const formTask = document.getElementById("form-task");

    if (btnAddTask) btnAddTask.addEventListener("click", openTaskModal);
    if (btnCloseTaskModal) btnCloseTaskModal.addEventListener("click", closeTaskModal);
    if (btnCancelTask) btnCancelTask.addEventListener("click", closeTaskModal);

    if (formTask) {
      formTask.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("task-title").value;
        const type = document.getElementById("task-type").value;
        const day = document.getElementById("task-day").value;
        const details = document.getElementById("task-details").value;

        addNewTask(title, type, day, details);
        
        // Resetar form e fechar modal
        formTask.reset();
        closeTaskModal();
      });
    }

    // Tornar o display de tempo editável pelo aluno em ambas as telas (Dashboard e Cronograma)
    function makeTimerEditable(displayId, isMini) {
      const display = document.getElementById(displayId);
      if (!display) return;
      
      display.style.cursor = "pointer";
      display.setAttribute("title", "Clique para editar o tempo");
      
      display.addEventListener("click", function () {
        if (isTimerRunning) {
          pauseTimer();
        }
        
        const currentMins = Math.floor(timeLeft / 60);
        
        // Criar elemento input para edição do tempo
        const input = document.createElement("input");
        input.type = "number";
        input.min = "1";
        input.max = "180";
        input.value = currentMins;
        input.className = "timer-edit-input";
        input.style.width = isMini ? "75px" : "110px";
        input.style.background = "rgba(0, 0, 0, 0.4)";
        input.style.border = "2px solid var(--primary)";
        input.style.color = "var(--text-main)";
        input.style.fontSize = isMini ? "1.6rem" : "2.5rem";
        input.style.textAlign = "center";
        input.style.borderRadius = "var(--radius-md)";
        input.style.outline = "none";
        input.style.fontWeight = "bold";
        input.style.fontFamily = "inherit";
        
        display.innerHTML = "";
        display.appendChild(input);
        input.focus();
        input.select();
        
        let saved = false;
        const saveValue = () => {
          if (saved) return;
          saved = true;
          
          let val = parseInt(input.value);
          if (isNaN(val) || val < 1) val = 25;
          if (val > 180) val = 180;
          
          if (currentMode === "study") {
            studyDuration = val * 60;
            localStorage.setItem(window.getProfileKey ? window.getProfileKey("fisio_pomo_study_duration") : "fisio_pomo_study_duration", val);
            timeLeft = studyDuration;
          } else {
            breakDuration = val * 60;
            localStorage.setItem(window.getProfileKey ? window.getProfileKey("fisio_pomo_break_duration") : "fisio_pomo_break_duration", val);
            timeLeft = breakDuration;
          }
          
          updateTimerDisplays();
        };
        
        input.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            saveValue();
          } else if (e.key === "Escape") {
            saved = true;
            updateTimerDisplays();
          }
        });
        
        input.addEventListener("blur", saveValue);
      });
    }

    makeTimerEditable("main-timer-display", false);
    makeTimerEditable("mini-timer-display", true);

    // Renderizações iniciais
    updateTimerDisplays();
    updatePlayButtons(false);
    renderPlannerList();
  }

  // Registrar as funções de renderização para o roteador global
  window.renderPlannerList = renderPlannerList;

  // Rodar ao iniciar página
  window.addEventListener("DOMContentLoaded", initPlannerModule);

})();
