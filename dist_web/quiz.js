// FisioAcademic - Módulo de Simulados (Quiz)

(function () {
  // Estado local do simulado
  let activeQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let isAnswered = false;
  let selectedOptionIndex = null;
  let currentSessionHistory = []; // historico do simulado ativo

  // Estatísticas persistidas no localStorage
  let stats = {
    totalAnswered: 0,
    totalCorrect: 0
  };

  // Referências DOM
  const selectCategory = document.getElementById("quiz-category-select");
  const btnStartQuiz = document.getElementById("btn-start-quiz");
  const btnResetStats = document.getElementById("btn-reset-quiz-stats");
  
  const totalAnsweredEl = document.getElementById("quiz-total-answered");
  const successRateEl = document.getElementById("quiz-success-rate");

  const activeHeader = document.getElementById("quiz-active-header");
  const currentQuestionNumEl = document.getElementById("quiz-current-question-num");
  const progressBarEl = document.getElementById("quiz-progress-bar");
  const currentScoreEl = document.getElementById("quiz-current-score");

  const welcomeScreen = document.getElementById("quiz-welcome-screen");
  const activeBody = document.getElementById("quiz-active-body");
  const resultsScreen = document.getElementById("quiz-results-screen");
  const historyScreen = document.getElementById("quiz-history-screen");

  const questionCategoryEl = document.getElementById("quiz-question-category");
  const questionTextEl = document.getElementById("quiz-question-text");
  const optionsContainer = document.getElementById("quiz-options-container");
  
  const rationaleContainer = document.getElementById("quiz-rationale-container");
  const rationaleTextEl = document.getElementById("quiz-rationale-text");

  const btnQuit = document.getElementById("btn-quit-quiz");
  const btnNext = document.getElementById("btn-next-question");
  const btnConfirm = document.getElementById("btn-confirm-answer");
  const btnRestart = document.getElementById("btn-restart-quiz");
  const btnViewHistory = document.getElementById("btn-view-quiz-history");
  const btnBackToWelcome = document.getElementById("btn-back-to-quiz-welcome");

  const finalScoreEl = document.getElementById("quiz-final-score-text");
  const performanceFeedbackEl = document.getElementById("quiz-performance-feedback");

  // Inicializar o módulo
  function initQuizModule() {
    loadStats();
    
    // Se o simulado já está ativo ou em resultados/histórico, não reseta para a tela inicial
    const isAnyScreenVisible = 
      (welcomeScreen && welcomeScreen.style.display === "block") ||
      (activeBody && activeBody.style.display === "block") ||
      (resultsScreen && resultsScreen.style.display === "block") ||
      (historyScreen && historyScreen.style.display === "block");
      
    if (!isAnyScreenVisible) {
      resetToWelcome();
    }
  }

  // Carregar estatísticas do localStorage
  function loadStats() {
    const savedStats = localStorage.getItem(window.FisioApp?.getProfileKey ? window.FisioApp.getProfileKey("fisio_quiz_stats") : "fisio_quiz_stats");
    if (savedStats) {
      stats = JSON.parse(savedStats);
    } else {
      stats = { totalAnswered: 0, totalCorrect: 0 };
    }
    updateStatsUI();
  }

  // Atualizar a interface com as estatísticas
  function updateStatsUI() {
    if (totalAnsweredEl) totalAnsweredEl.textContent = stats.totalAnswered;
    if (successRateEl) {
      if (stats.totalAnswered > 0) {
        const rate = Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
        successRateEl.textContent = `${rate}%`;
      } else {
        successRateEl.textContent = "0%";
      }
    }
  }

  // Salvar estatísticas no localStorage
  function saveStats() {
    localStorage.setItem(window.FisioApp?.getProfileKey ? window.FisioApp.getProfileKey("fisio_quiz_stats") : "fisio_quiz_stats", JSON.stringify(stats));
    updateStatsUI();
  }

  // Configurar listeners
  function setupEventListeners() {
    // Evitar múltiplos ouvintes se a função for chamada novamente
    btnStartQuiz?.replaceWith(btnStartQuiz.cloneNode(true));
    btnResetStats?.replaceWith(btnResetStats.cloneNode(true));
    btnQuit?.replaceWith(btnQuit.cloneNode(true));
    btnNext?.replaceWith(btnNext.cloneNode(true));
    btnConfirm?.replaceWith(btnConfirm.cloneNode(true));
    btnRestart?.replaceWith(btnRestart.cloneNode(true));
    btnViewHistory?.replaceWith(btnViewHistory.cloneNode(true));
    btnBackToWelcome?.replaceWith(btnBackToWelcome.cloneNode(true));

    // Re-obter referências
    const newBtnStartQuiz = document.getElementById("btn-start-quiz");
    const newBtnResetStats = document.getElementById("btn-reset-quiz-stats");
    const newBtnQuit = document.getElementById("btn-quit-quiz");
    const newBtnNext = document.getElementById("btn-next-question");
    const newBtnConfirm = document.getElementById("btn-confirm-answer");
    const newBtnRestart = document.getElementById("btn-restart-quiz");
    const newBtnViewHistory = document.getElementById("btn-view-quiz-history");
    const newBtnBackToWelcome = document.getElementById("btn-back-to-quiz-welcome");

    newBtnStartQuiz?.addEventListener("click", startNewQuiz);
    newBtnResetStats?.addEventListener("click", resetStats);
    
    newBtnQuit?.addEventListener("click", () => {
      if (confirm("Tem certeza que deseja sair do simulado atual? Seu progresso será perdido.")) {
        resetToWelcome();
      }
    });

    newBtnNext?.addEventListener("click", nextQuestion);
    newBtnConfirm?.addEventListener("click", confirmSelectedOption);
    newBtnRestart?.addEventListener("click", startNewQuiz);
    newBtnViewHistory?.addEventListener("click", showQuizHistory);
    newBtnBackToWelcome?.addEventListener("click", resetToWelcome);
  }

  // Resetar a interface para a tela inicial
  function resetToWelcome() {
    const layout = document.querySelector(".quiz-layout");
    if (layout) layout.classList.remove("quiz-active");
    
    if (welcomeScreen) welcomeScreen.style.display = "block";
    if (activeBody) activeBody.style.display = "none";
    if (activeHeader) activeHeader.style.display = "none";
    if (resultsScreen) resultsScreen.style.display = "none";
    if (historyScreen) historyScreen.style.display = "none";
  }

  // Limpar estatísticas de desempenho e histórico
  function resetStats() {
    if (confirm("Tem certeza que deseja zerar seu histórico de desempenho nos simulados? Isso também apagará o histórico detalhado dos testes realizados.")) {
      stats = { totalAnswered: 0, totalCorrect: 0 };
      saveStats();
      
      const profileKey = window.FisioApp?.getProfileKey ? window.FisioApp.getProfileKey("fisio_quiz_history") : "fisio_quiz_history";
      localStorage.removeItem(profileKey);
      
      const listEl = document.getElementById("quiz-history-list");
      if (listEl) listEl.innerHTML = "";
    }
  }

  // Iniciar novo simulado
  function startNewQuiz() {
    const category = selectCategory ? selectCategory.value : "all";
    let allQuestions = window.FisioData?.QUIZ_QUESTIONS || [];
    
    if (category !== "all") {
      allQuestions = allQuestions.filter(q => q.category === category);
    }

    if (allQuestions.length === 0) {
      alert("Nenhuma questão disponível para esta categoria.");
      return;
    }

    // Embaralhar as questões e pegar 10
    activeQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    currentQuestionIndex = 0;
    score = 0;
    currentSessionHistory = [];
    
    if (welcomeScreen) welcomeScreen.style.display = "none";
    if (resultsScreen) resultsScreen.style.display = "none";
    if (historyScreen) historyScreen.style.display = "none";
    if (activeHeader) activeHeader.style.display = "flex";
    if (activeBody) activeBody.style.display = "block";
    
    const layout = document.querySelector(".quiz-layout");
    if (layout) layout.classList.add("quiz-active");
 
    displayQuestion();
  }

  // Exibir a questão atual
  function displayQuestion() {
    isAnswered = false;
    selectedOptionIndex = null;
    const currentQuestion = activeQuestions[currentQuestionIndex];

    if (currentQuestionNumEl) {
      currentQuestionNumEl.textContent = `${currentQuestionIndex + 1} / ${activeQuestions.length}`;
    }
    if (progressBarEl) {
      const progressPercent = Math.round(((currentQuestionIndex) / activeQuestions.length) * 100);
      progressBarEl.style.width = `${progressPercent}%`;
    }
    if (currentScoreEl) {
      currentScoreEl.textContent = score;
    }

    if (questionCategoryEl) {
      questionCategoryEl.textContent = currentQuestion.category;
    }
    if (questionTextEl) {
      questionTextEl.textContent = currentQuestion.question;
    }

    if (rationaleContainer) {
      rationaleContainer.style.display = "none";
    }
    
    const btnConfirm = document.getElementById("btn-confirm-answer");
    if (btnConfirm) {
      btnConfirm.style.display = "inline-flex";
      btnConfirm.disabled = true;
    }

    const btnNext = document.getElementById("btn-next-question");
    if (btnNext) {
      btnNext.style.display = "none";
    }

    // Gerar alternativas
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      
      currentQuestion.options.forEach((optText, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "quiz-option";
        
        const letterSpan = document.createElement("span");
        letterSpan.className = "quiz-option-letter";
        letterSpan.textContent = String.fromCharCode(65 + index);
        
        const textSpan = document.createElement("span");
        textSpan.textContent = optText;
        
        optionBtn.appendChild(letterSpan);
        optionBtn.appendChild(textSpan);
        
        optionBtn.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(optionBtn);
      });
    }
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Selecionar uma alternativa (antes de confirmar)
  function selectOption(selectedIndex) {
    if (isAnswered) return;
    
    selectedOptionIndex = selectedIndex;
    
    const optionButtons = optionsContainer.querySelectorAll(".quiz-option");
    optionButtons.forEach((btn, idx) => {
      btn.classList.remove("selected");
      if (idx === selectedIndex) {
        btn.classList.add("selected");
      }
    });
    
    const btnConfirm = document.getElementById("btn-confirm-answer");
    if (btnConfirm) {
      btnConfirm.disabled = false;
    }
  }

  // Confirmar a resposta selecionada
  function confirmSelectedOption() {
    if (isAnswered || selectedOptionIndex === null) return;
    isAnswered = true;
    
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const optionButtons = optionsContainer.querySelectorAll(".quiz-option");
    
    stats.totalAnswered++;
    
    const isCorrect = selectedOptionIndex === currentQuestion.correctIndex;
    if (isCorrect) {
      score++;
      stats.totalCorrect++;
      optionButtons[selectedOptionIndex].classList.remove("selected");
      optionButtons[selectedOptionIndex].classList.add("correct");
    } else {
      optionButtons[selectedOptionIndex].classList.remove("selected");
      optionButtons[selectedOptionIndex].classList.add("incorrect");
      optionButtons[currentQuestion.correctIndex].classList.add("correct");
    }
    
    // Guardar no histórico da sessão
    currentSessionHistory.push({
      question: currentQuestion.question,
      category: currentQuestion.category,
      options: [...currentQuestion.options],
      correctIndex: currentQuestion.correctIndex,
      selectedIndex: selectedOptionIndex,
      rationale: currentQuestion.rationale
    });

    saveStats();
    
    // Desativar botões
    optionButtons.forEach(btn => {
      btn.disabled = true;
    });

    const btnConfirm = document.getElementById("btn-confirm-answer");
    if (btnConfirm) {
      btnConfirm.style.display = "none";
    }

    if (rationaleTextEl && rationaleContainer) {
      rationaleTextEl.textContent = currentQuestion.rationale;
      rationaleContainer.style.display = "block";
    }

    const btnNext = document.getElementById("btn-next-question");
    if (btnNext) {
      btnNext.style.display = "inline-flex";
      if (currentQuestionIndex === activeQuestions.length - 1) {
        btnNext.innerHTML = 'Finalizar Simulado <i data-lucide="award"></i>';
      } else {
        btnNext.innerHTML = 'Próxima Questão <i data-lucide="arrow-right"></i>';
      }
    }

    if (currentScoreEl) {
      currentScoreEl.textContent = score;
    }
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Ir para a próxima questão
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
      displayQuestion();
    } else {
      finishQuiz();
    }
  }

  // Finalizar o simulado e mostrar resultados
  function finishQuiz() {
    if (activeBody) activeBody.style.display = "none";
    if (activeHeader) activeHeader.style.display = "none";
    if (resultsScreen) resultsScreen.style.display = "block";
    
    const layout = document.querySelector(".quiz-layout");
    if (layout) layout.classList.add("quiz-active");

    if (progressBarEl) {
      progressBarEl.style.width = "100%";
    }

    if (finalScoreEl) {
      finalScoreEl.textContent = `${score} / ${activeQuestions.length}`;
    }

    if (performanceFeedbackEl) {
      const percentage = (score / activeQuestions.length) * 100;
      if (percentage === 100) {
        performanceFeedbackEl.textContent = "Excelente! Desempenho perfeito, você dominou esta matéria! 🌟";
      } else if (percentage >= 80) {
        performanceFeedbackEl.textContent = "Muito bom! Ótimo aproveitamento acadêmico. Continue assim! 📚";
      } else if (percentage >= 50) {
        performanceFeedbackEl.textContent = "Bom trabalho! Mas vale a pena revisar os tópicos que você errou. 📝";
      } else {
        performanceFeedbackEl.textContent = "Precisamos de mais estudos! Revise a teoria através dos flashcards e tente de novo. 💪";
      }
    }

    // Salvar sessão inteira no histórico
    saveQuizSessionToHistory();
  }

  // Salvar o simulado concluído no histórico do LocalStorage
  function saveQuizSessionToHistory() {
    if (currentSessionHistory.length === 0) return;
    
    const profileKey = window.FisioApp?.getProfileKey ? window.FisioApp.getProfileKey("fisio_quiz_history") : "fisio_quiz_history";
    let history = [];
    const savedHistory = localStorage.getItem(profileKey);
    if (savedHistory) {
      try {
        history = JSON.parse(savedHistory);
      } catch (e) {
        history = [];
      }
    }
    
    const categoryName = selectCategory ? selectCategory.options[selectCategory.selectedIndex].text : "Simulado Geral";
    const newSession = {
      id: "sim_" + Date.now(),
      date: new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      category: categoryName,
      score: score,
      total: activeQuestions.length,
      questions: [...currentSessionHistory]
    };
    
    history.unshift(newSession);
    if (history.length > 20) {
      history = history.slice(0, 20);
    }
    
    localStorage.setItem(profileKey, JSON.stringify(history));
  }

  // Exibir a tela de histórico
  function showQuizHistory() {
    if (welcomeScreen) welcomeScreen.style.display = "none";
    if (activeBody) activeBody.style.display = "none";
    if (activeHeader) activeHeader.style.display = "none";
    if (resultsScreen) resultsScreen.style.display = "none";
    
    const historyScreen = document.getElementById("quiz-history-screen");
    if (historyScreen) historyScreen.style.display = "block";
    
    const layout = document.querySelector(".quiz-layout");
    if (layout) layout.classList.add("quiz-active");
    
    renderQuizHistory();
  }

  // Renderizar a lista de simulados anteriores
  function renderQuizHistory() {
    const listEl = document.getElementById("quiz-history-list");
    if (!listEl) return;
    
    listEl.innerHTML = "";
    
    const profileKey = window.FisioApp?.getProfileKey ? window.FisioApp.getProfileKey("fisio_quiz_history") : "fisio_quiz_history";
    let history = [];
    const savedHistory = localStorage.getItem(profileKey);
    if (savedHistory) {
      try {
        history = JSON.parse(savedHistory);
      } catch (e) {
        history = [];
      }
    }
    
    if (history.length === 0) {
      listEl.innerHTML = `<div style="text-align: center; color: #888; padding: 40px 20px;">Nenhum simulado registrado no histórico.</div>`;
      return;
    }
    
    history.forEach(session => {
      const card = document.createElement("div");
      card.className = "card glass-card";
      card.style.padding = "16px";
      card.style.background = "rgba(255, 255, 255, 0.01)";
      card.style.borderColor = "var(--border-glass)";
      card.style.marginBottom = "12px";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      
      const rate = Math.round((session.score / session.total) * 100);
      const isPerfect = rate === 100;
      const isGood = rate >= 70;
      const badgeStyle = `font-size: 0.8rem; padding: 4px 8px; border-radius: 4px; font-weight: 700; background-color: ${isPerfect ? '#10b981' : (isGood ? 'var(--primary)' : '#ef4444')}; color: white;`;
      
      card.innerHTML = `
        <div class="flex-row justify-between align-center" style="cursor: pointer; user-select: none;" id="header-${session.id}">
          <div>
            <div style="font-weight: 700; font-size: 0.95rem; color: #fff;">${session.category}</div>
            <div style="font-size: 0.75rem; color: #888; margin-top: 2px;">Realizado em: ${session.date}</div>
          </div>
          <div class="flex-row align-center gap-3">
            <span style="${badgeStyle}">${session.score} / ${session.total} (${rate}%)</span>
            <i class="chevron-icon" data-lucide="chevron-down" style="width: 18px; height: 18px; color: #888; transition: transform 0.2s;"></i>
          </div>
        </div>
        <div class="history-details" id="details-${session.id}" style="display: none; margin-top: 14px; border-top: 1px solid var(--border-glass); padding-top: 14px;"></div>
      `;
      
      const header = card.querySelector(`#header-${session.id}`);
      header.addEventListener("click", () => {
        const details = card.querySelector(`#details-${session.id}`);
        const chevron = header.querySelector(".chevron-icon");
        
        if (details.style.display === "none") {
          details.style.display = "block";
          chevron.style.transform = "rotate(180deg)";
          
          if (details.innerHTML === "") {
            renderSessionQuestions(details, session.questions);
          }
        } else {
          details.style.display = "none";
          chevron.style.transform = "rotate(0deg)";
        }
      });
      
      listEl.appendChild(card);
    });
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Renderizar as questões detalhadas do simulado anterior
  function renderSessionQuestions(container, questions) {
    container.innerHTML = "";
    
    questions.forEach((q, idx) => {
      const qDiv = document.createElement("div");
      qDiv.style.marginBottom = "20px";
      qDiv.style.borderBottom = "1px dashed rgba(255, 255, 255, 0.05)";
      qDiv.style.paddingBottom = "14px";
      
      const isCorrect = q.selectedIndex === q.correctIndex;
      const statusText = isCorrect ? "Acertou" : "Errou";
      const statusColor = isCorrect ? "#10b981" : "#ef4444";
      const iconName = isCorrect ? "check-circle" : "x-circle";
      
      qDiv.innerHTML = `
        <div class="flex-row align-center gap-2 mb-2" style="font-weight: 700; font-size: 0.9rem; color: ${statusColor};">
          <i class="status-icon" style="color: ${statusColor}; font-size: 0.9rem; font-style: normal; font-weight: 700;">●</i> Questão ${idx + 1} - ${statusText}
        </div>
        <p style="font-size: 0.95rem; font-weight: 600; color: #ddd; margin-bottom: 12px; line-height: 1.4;">${q.question}</p>
        <div class="flex-column" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;"></div>
        <div style="background: rgba(255,255,255,0.02); border-left: 3px solid var(--primary); padding: 10px 14px; border-radius: 4px; margin-top: 10px;">
          <h5 style="font-size: 0.85rem; font-weight: 700; margin: 0 0 4px 0; color: var(--primary);">
            Justificativa do Gabarito:
          </h5>
          <p style="margin: 0; font-size: 0.85rem; color: #bbb; line-height: 1.4;">${q.rationale}</p>
        </div>
      `;
      
      const optionsContainer = qDiv.querySelector(".flex-column");
      q.options.forEach((optText, optIdx) => {
        const optDiv = document.createElement("div");
        optDiv.style.display = "flex";
        optDiv.style.alignItems = "center";
        optDiv.style.gap = "8px";
        optDiv.style.padding = "10px 14px";
        optDiv.style.borderRadius = "6px";
        optDiv.style.fontSize = "0.85rem";
        optDiv.style.border = "1px solid rgba(255,255,255,0.04)";
        
        const letter = String.fromCharCode(65 + optIdx);
        
        if (optIdx === q.correctIndex) {
          optDiv.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
          optDiv.style.borderColor = "#10b981";
          optDiv.style.color = "#10b981";
          optDiv.innerHTML = `<span style="background: #10b981; color: #1e1e1e; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 700; font-size: 0.75rem; margin-right: 6px;">${letter}</span> <span>${optText}</span> <strong style="margin-left:auto; font-size:0.75rem;">(Gabarito)</strong>`;
        } else if (optIdx === q.selectedIndex && !isCorrect) {
          optDiv.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
          optDiv.style.borderColor = "#ef4444";
          optDiv.style.color = "#ef4444";
          optDiv.innerHTML = `<span style="background: #ef4444; color: white; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 700; font-size: 0.75rem; margin-right: 6px;">${letter}</span> <span>${optText}</span> <strong style="margin-left:auto; font-size:0.75rem;">(Sua Resposta)</strong>`;
        } else {
          optDiv.style.backgroundColor = "rgba(255,255,255,0.01)";
          optDiv.style.color = "#aaa";
          optDiv.innerHTML = `<span style="background: rgba(255,255,255,0.05); color: #888; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 700; font-size: 0.75rem; margin-right: 6px;">${letter}</span> <span>${optText}</span>`;
        }
        optionsContainer.appendChild(optDiv);
      });
      
      container.appendChild(qDiv);
    });
  }

  // Auto-inicializar no carregamento
  window.addEventListener("DOMContentLoaded", () => {
    loadStats();
    setupEventListeners();
  });

  window.initQuizModule = initQuizModule;
})();
