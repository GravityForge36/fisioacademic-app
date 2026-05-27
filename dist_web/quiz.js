// FisioAcademic - Módulo de Simulados (Quiz)

(function () {
  // Estado local do simulado
  let activeQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let isAnswered = false;

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

  const questionCategoryEl = document.getElementById("quiz-question-category");
  const questionTextEl = document.getElementById("quiz-question-text");
  const optionsContainer = document.getElementById("quiz-options-container");
  
  const rationaleContainer = document.getElementById("quiz-rationale-container");
  const rationaleTextEl = document.getElementById("quiz-rationale-text");

  const btnQuit = document.getElementById("btn-quit-quiz");
  const btnNext = document.getElementById("btn-next-question");
  const btnRestart = document.getElementById("btn-restart-quiz");
  const finalScoreEl = document.getElementById("quiz-final-score-text");
  const performanceFeedbackEl = document.getElementById("quiz-performance-feedback");

  // Inicializar o módulo
  function initQuizModule() {
    loadStats();
    setupEventListeners();
    resetToWelcome();
  }

  // Carregar estatísticas do localStorage
  function loadStats() {
    const savedStats = localStorage.getItem(window.getProfileKey ? window.getProfileKey("fisio_quiz_stats") : "fisio_quiz_stats");
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
    localStorage.setItem(window.getProfileKey ? window.getProfileKey("fisio_quiz_stats") : "fisio_quiz_stats", JSON.stringify(stats));
    updateStatsUI();
  }

  // Configurar listeners
  function setupEventListeners() {
    // Evitar múltiplos ouvintes se a função for chamada novamente
    btnStartQuiz?.replaceWith(btnStartQuiz.cloneNode(true));
    btnResetStats?.replaceWith(btnResetStats.cloneNode(true));
    btnQuit?.replaceWith(btnQuit.cloneNode(true));
    btnNext?.replaceWith(btnNext.cloneNode(true));
    btnRestart?.replaceWith(btnRestart.cloneNode(true));

    // Re-obter referências aos botões clonados para ligar os eventos corretamente
    const newBtnStartQuiz = document.getElementById("btn-start-quiz");
    const newBtnResetStats = document.getElementById("btn-reset-quiz-stats");
    const newBtnQuit = document.getElementById("btn-quit-quiz");
    const newBtnNext = document.getElementById("btn-next-question");
    const newBtnRestart = document.getElementById("btn-restart-quiz");

    newBtnStartQuiz?.addEventListener("click", startNewQuiz);
    newBtnResetStats?.addEventListener("click", resetStats);
    
    newBtnQuit?.addEventListener("click", () => {
      if (confirm("Tem certeza que deseja sair do simulado atual? Seu progresso será perdido.")) {
        resetToWelcome();
      }
    });

    newBtnNext?.addEventListener("click", nextQuestion);
    newBtnRestart?.addEventListener("click", startNewQuiz);
  }

  // Resetar a interface para a tela inicial
  function resetToWelcome() {
    if (welcomeScreen) welcomeScreen.style.display = "block";
    if (activeBody) activeBody.style.display = "none";
    if (activeHeader) activeHeader.style.display = "none";
    if (resultsScreen) resultsScreen.style.display = "none";
  }

  // Limpar estatísticas de desempenho
  function resetStats() {
    if (confirm("Tem certeza que deseja zerar seu histórico de desempenho nos simulados?")) {
      stats = { totalAnswered: 0, totalCorrect: 0 };
      saveStats();
    }
  }

  // Iniciar novo simulado
  function startNewQuiz() {
    const category = selectCategory ? selectCategory.value : "all";
    let allQuestions = window.FisioData?.QUIZ_QUESTIONS || [];
    
    // Filtrar por categoria se necessário
    if (category !== "all") {
      allQuestions = allQuestions.filter(q => q.category === category);
    }

    if (allQuestions.length === 0) {
      alert("Nenhuma questão disponível para esta categoria.");
      return;
    }

    // Embaralhar as questões e pegar no máximo 10
    activeQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    currentQuestionIndex = 0;
    score = 0;
    
    if (welcomeScreen) welcomeScreen.style.display = "none";
    if (resultsScreen) resultsScreen.style.display = "none";
    if (activeHeader) activeHeader.style.display = "flex";
    if (activeBody) activeBody.style.display = "block";

    displayQuestion();
  }

  // Exibir a questão atual
  function displayQuestion() {
    isAnswered = false;
    const currentQuestion = activeQuestions[currentQuestionIndex];

    // Atualizar cabeçalho do quiz
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

    // Exibir tags de categoria e o texto da pergunta
    if (questionCategoryEl) {
      questionCategoryEl.textContent = currentQuestion.category;
    }
    if (questionTextEl) {
      questionTextEl.textContent = currentQuestion.question;
    }

    // Ocultar justificativa por padrão
    if (rationaleContainer) {
      rationaleContainer.style.display = "none";
    }
    
    const newBtnNext = document.getElementById("btn-next-question");
    if (newBtnNext) {
      newBtnNext.style.display = "none";
    }

    // Gerar alternativas
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      
      currentQuestion.options.forEach((optText, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "quiz-option";
        
        const letterSpan = document.createElement("span");
        letterSpan.className = "quiz-option-letter";
        letterSpan.textContent = String.fromCharCode(65 + index); // A, B, C, D...
        
        const textSpan = document.createElement("span");
        textSpan.textContent = optText;
        
        optionBtn.appendChild(letterSpan);
        optionBtn.appendChild(textSpan);
        
        optionBtn.addEventListener("click", () => selectOption(index));
        
        optionsContainer.appendChild(optionBtn);
      });
    }
    
    // Recriar ícones lucide se houver algum
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Selecionar uma alternativa
  function selectOption(selectedIndex) {
    if (isAnswered) return;
    isAnswered = true;
    
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const optionButtons = optionsContainer.querySelectorAll(".quiz-option");
    
    stats.totalAnswered++;
    
    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    if (isCorrect) {
      score++;
      stats.totalCorrect++;
      optionButtons[selectedIndex].classList.add("correct");
    } else {
      optionButtons[selectedIndex].classList.add("incorrect");
      optionButtons[currentQuestion.correctIndex].classList.add("correct");
    }

    // Salvar as estatísticas atualizadas
    saveStats();
    
    // Desabilitar todas as opções
    optionButtons.forEach(btn => {
      btn.disabled = true;
    });

    // Exibir justificativa clínica
    if (rationaleTextEl && rationaleContainer) {
      rationaleTextEl.textContent = currentQuestion.rationale;
      rationaleContainer.style.display = "block";
    }

    // Mostrar botão de próxima
    const newBtnNext = document.getElementById("btn-next-question");
    if (newBtnNext) {
      newBtnNext.style.display = "inline-flex";
      
      // Se for a última questão, alterar o texto do botão para "Finalizar"
      if (currentQuestionIndex === activeQuestions.length - 1) {
        newBtnNext.innerHTML = 'Finalizar Simulado <i data-lucide="award"></i>';
      } else {
        newBtnNext.innerHTML = 'Próxima Questão <i data-lucide="arrow-right"></i>';
      }
      
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
    
    // Atualizar pontuação no cabeçalho
    if (currentScoreEl) {
      currentScoreEl.textContent = score;
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
  }

  // Auto-inicializar no carregamento
  window.addEventListener("DOMContentLoaded", () => {
    // Se o aplicativo já estiver pronto ou for inicializado via tab, garanta que carregue as estatísticas iniciais
    loadStats();
    setupEventListeners();
  });

  // Expor no escopo global para que a navegação do app.js consiga disparar
  window.initQuizModule = initQuizModule;
})();
