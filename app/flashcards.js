// FisioAcademic - Módulo de Flashcards (Memorização de Anatomia e Cinesiologia)

(function () {
  let activeCategory = "all";
  let activeDeck = [];
  let currentIndex = 0;

  function getCategoryIcon(cat) {
    const mapping = {
      "all": "layers",
      "Anatomia": "box",
      "s2_anatomofisio_1": "box",
      "Cinesiologia": "shuffle",
      "s4_cinesio": "shuffle",
      "Avaliação": "check-square",
      "s4_avaliacao": "check-square",
      "s1_perspectivas": "compass",
      "s1_biosseguranca": "shield-alert",
      "s1_saude_coletiva": "users",
      "s1_epidemiologia": "activity",
      "s1_exp_prof": "award",
      "s2_prod_conhecimento": "file-text",
      "s2_bioquimica": "droplets",
      "s2_anatomofisio_2": "heart",
      "s3_empreendedorismo": "zap",
      "s3_movimento": "repeat",
      "s3_fundamentos_etica": "bookmark",
      "s3_fisiopatologia": "skull",
      "s4_farmaco": "pill",
      "s4_eletro": "zap",
      "s5_recursos_manuais": "hand",
      "s5_fisiologia_ex": "activity",
      "s5_aquatica": "droplet",
      "s5_idoso": "smile",
      "s6_traumato": "bone",
      "s6_neuro": "brain",
      "s6_crianca": "baby",
      "s6_mulher": "venus",
      "s7_protese": "accessibility",
      "s7_respiratoria": "wind",
      "s8_dermatofunc": "sparkles",
      "s9_cardio": "heart-pulse",
      "s10_trabalhador": "briefcase",
      "s10_evidencias": "check-circle",
      "s10_topicos": "star"
    };
    return mapping[cat] || "book-open";
  }

  // 1. ATUALIZAR CONTADORES DE ABAS/CATEGORIAS DINAMICAMENTE
  function updateCategoryCounts() {
    const flashcards = window.FisioApp.state.flashcards || [];
    const container = document.getElementById("categories-list");
    if (!container) return;

    const currentActive = activeCategory;
    container.innerHTML = "";

    // Botão "Todos os Cards"
    const btnAll = document.createElement("button");
    btnAll.className = `deck-item ${currentActive === "all" ? "active" : ""}`;
    btnAll.setAttribute("data-category", "all");
    btnAll.innerHTML = `<i data-lucide="layers"></i> Todos os Cards (<span>${flashcards.length}</span>)`;
    container.appendChild(btnAll);

    // Obter todas as categorias únicas que possuem cards, ordenadas de forma lógica
    const uniqueCategories = [];
    flashcards.forEach(fc => {
      if (fc.category && !uniqueCategories.includes(fc.category)) {
        uniqueCategories.push(fc.category);
      }
    });

    uniqueCategories.sort((a, b) => {
      const getOrder = (cat) => {
        if (cat === "Anatomia" || cat === "Cinesiologia" || cat === "Avaliação" || cat === "Fisiologia" || cat === "Neurologia" || cat === "Cardiovascular" || cat === "Casos Clínicos" || cat === "Eletroterapia" || cat === "Pediatria" || cat === "Especialidades") {
          return 0; // Geral primeiro
        }
        const m = cat.match(/^s(\d+)_/);
        if (m) {
          return parseInt(m[1]); // Semestres 1 a 10
        }
        return 99; // Outros
      };
      const orderA = getOrder(a);
      const orderB = getOrder(b);
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return a.localeCompare(b);
    });

    // Adicionar botões para cada categoria ativa
    uniqueCategories.forEach(cat => {
      const count = flashcards.filter(fc => fc.category === cat).length;
      if (count === 0) return;

      const prettyName = (window.FisioData && window.FisioData.SUBJECT_PRETTY_NAMES && window.FisioData.SUBJECT_PRETTY_NAMES[cat]) || cat;
      const icon = getCategoryIcon(cat);

      const btn = document.createElement("button");
      btn.className = `deck-item ${currentActive === cat ? "active" : ""}`;
      btn.setAttribute("data-category", cat);
      btn.innerHTML = `<i data-lucide="${icon}"></i> ${prettyName} (<span>${count}</span>)`;
      container.appendChild(btn);
    });

    // Recriar os ícones Lucide
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }

    // Vincular cliques de evento para todas as categorias
    const deckButtons = container.querySelectorAll(".deck-item");
    deckButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        deckButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        activeCategory = btn.getAttribute("data-category");
        initFlashcardSession();
      });
    });
  }

  // 2. INICIAR UMA SESSÃO DE ESTUDO
  function initFlashcardSession() {
    const flashcards = window.FisioApp.state.flashcards;
    
    // Filtrar os flashcards da categoria ativa
    if (activeCategory === "all") {
      activeDeck = [...flashcards];
    } else {
      activeDeck = flashcards.filter(fc => fc.category === activeCategory);
    }

    currentIndex = 0;
    
    // Embaralhar as cartas para um estudo mais dinâmico
    shuffleArray(activeDeck);

    renderActiveCard();
  }

  // Função auxiliar de embaralhamento
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // 3. RENDERIZAR O CARTÃO ATIVO NA TELA
  function renderActiveCard() {
    const cardElement = document.getElementById("flashcard-element");
    const progressFill = document.getElementById("flashcard-progress-fill");
    const progressText = document.getElementById("flashcard-progress-text");
    
    const fcCategoryFront = document.getElementById("fc-view-category");
    const fcCategoryBack = document.getElementById("fc-view-category-back");
    const fcQuestion = document.getElementById("fc-view-question");
    const fcAnswer = document.getElementById("fc-view-answer");

    if (!cardElement) return;

    // Garantir que o card não esteja virado ao carregar nova questão
    cardElement.classList.remove("flipped");

    if (activeDeck.length === 0) {
      // Nenhum card na categoria
      progressFill.style.width = "0%";
      progressText.textContent = "0 de 0 cards";
      
      fcCategoryFront.textContent = "Vazio";
      fcQuestion.innerHTML = `Nenhum flashcard nesta categoria.<br><small class="text-muted">Crie um card personalizado no painel ao lado!</small>`;
      
      // Desativar clique
      cardElement.style.pointerEvents = "none";
      return;
    }

    cardElement.style.pointerEvents = "auto";

    // Atualizar barras de progresso
    const total = activeDeck.length;
    const progressPercent = Math.round((currentIndex / total) * 100);
    progressFill.style.width = `${progressPercent}%`;
    progressText.textContent = `Card ${currentIndex + 1} de ${total}`;

    // Carregar dados da carta atual
    const cardData = activeDeck[currentIndex];
    
    const prettyName = (window.FisioData && window.FisioData.SUBJECT_PRETTY_NAMES && window.FisioData.SUBJECT_PRETTY_NAMES[cardData.category]) || cardData.category;
    if (fcCategoryFront) fcCategoryFront.textContent = prettyName;
    if (fcCategoryBack) fcCategoryBack.textContent = prettyName;
    if (fcQuestion) fcQuestion.textContent = cardData.question;
    if (fcAnswer.tagName === "TEXTAREA" || fcAnswer.tagName === "INPUT") {
      fcAnswer.value = cardData.answer;
    } else {
      fcAnswer.textContent = cardData.answer;
    }
  }

  // 4. LÓGICA DE AVALIAÇÃO DE DESEMPENHO (SISTEMA LEITNER RE-ADAPTADO)
  function handleCardReview(score) {
    if (activeDeck.length === 0) return;

    const currentCard = activeDeck[currentIndex];
    const flashcards = window.FisioApp.state.flashcards;
    
    // Achar o card correspondente na base de dados global para alterar a caixa Leitner
    const originalCard = flashcards.find(fc => fc.id === currentCard.id);

    if (originalCard) {
      if (score === "easy") {
        originalCard.box = Math.min((originalCard.box || 1) + 1, 4);
        // Avança na fila
        currentIndex++;
      } else if (score === "medium") {
        // Mantém a caixa, apenas avança
        currentIndex++;
      } else if (score === "hard") {
        // Reseta caixa Leitner para 1
        originalCard.box = 1;
        
        // Coloca o card no final da fila da sessão atual para rever novamente nesta rodada!
        const cardToReplay = activeDeck.splice(currentIndex, 1)[0];
        activeDeck.push(cardToReplay);
        
        // Não incrementamos o index, pois o próximo card deslizou para a posição atual
      }

      window.FisioApp.saveState("flashcards");
      updateCategoryCounts();
    }

    // Checar se a rodada de estudos acabou
    if (currentIndex >= activeDeck.length) {
      showDeckCompletedState();
    } else {
      renderActiveCard();
    }
  }

  function showDeckCompletedState() {
    const cardElement = document.getElementById("flashcard-element");
    const progressFill = document.getElementById("flashcard-progress-fill");
    const progressText = document.getElementById("flashcard-progress-text");
    
    const fcCategoryFront = document.getElementById("fc-view-category");
    const fcQuestion = document.getElementById("fc-view-question");

    cardElement.classList.remove("flipped");
    cardElement.style.pointerEvents = "none";

    progressFill.style.width = "100%";
    progressText.textContent = "Sessão Concluída!";

    if (fcCategoryFront) fcCategoryFront.textContent = "Parabéns!";
    if (fcQuestion) {
      fcQuestion.innerHTML = `
        <div class="deck-complete-msg">
          <i data-lucide="award" class="text-primary" style="width: 48px; height: 48px; margin: 0 auto 12px auto; display: block;"></i>
          <h3>Revisão Concluída!</h3>
          <p class="text-muted text-sm mt-2">Você terminou de revisar esta pilha de cartas.</p>
          <button class="btn btn-primary mt-4" id="btn-restart-deck" style="pointer-events: auto;">Estudar Novamente</button>
        </div>
      `;
      
      // Ligar evento de reiniciar
      document.getElementById("btn-restart-deck").addEventListener("click", () => {
        initFlashcardSession();
      });
      lucide.createIcons();
    }
  }

  // 5. CRIAR NOVO FLASHCARD CUSTOMIZADO
  function createNewFlashcard(category, question, answer) {
    const newCard = {
      id: "fc_" + Date.now(),
      category,
      question,
      answer,
      box: 1,
      nextReview: 0
    };

    window.FisioApp.state.flashcards.push(newCard);
    window.FisioApp.saveState("flashcards");
    
    updateCategoryCounts();
    
    // Se o usuário estiver na categoria criada ou em "todos", atualiza a fila de estudos
    if (activeCategory === "all" || activeCategory === category) {
      initFlashcardSession();
    }
  }

  // 6. INICIALIZAÇÃO DE EVENTOS
  function initFlashcardsModule() {
    updateCategoryCounts();
    initFlashcardSession();

    // Evento de virar o card (3D Flip) ao clicar na cena/carta
    const cardElement = document.getElementById("flashcard-element");
    if (cardElement) {
      cardElement.addEventListener("click", (e) => {
        // Evitar que cliques em botões de ação ou na área de resposta de trás virem o card novamente
        if (e.target.closest(".rate-buttons") || e.target.closest(".flashcard-answer-text")) {
          return;
        }
        cardElement.classList.toggle("flipped");
      });
    }

    // Os botões de categorias do baralho agora são vinculados dinamicamente em updateCategoryCounts()

    // Botões de Desempenho (Errei, Médio, Fácil)
    const btnHard = document.getElementById("btn-fc-hard");
    const btnMedium = document.getElementById("btn-fc-medium");
    const btnEasy = document.getElementById("btn-fc-easy");

    if (btnHard) btnHard.addEventListener("click", () => handleCardReview("hard"));
    if (btnMedium) btnMedium.addEventListener("click", () => handleCardReview("medium"));
    if (btnEasy) btnEasy.addEventListener("click", () => handleCardReview("easy"));

    // Submissão do Formulário de Criação de Flashcard
    const formCreate = document.getElementById("form-create-flashcard");
    if (formCreate) {
      formCreate.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const category = document.getElementById("fc-category").value;
        const question = document.getElementById("fc-question").value;
        const answer = document.getElementById("fc-answer").value;

        createNewFlashcard(category, question, answer);
        
        // Resetar form
        formCreate.reset();
        alert("Flashcard criado com sucesso!");
      });
    }
  }

  // Função para exibir a aba sem reiniciar o estudo se já houver um baralho ativo
  function showFlashcardsTab() {
    updateCategoryCounts();
    if (activeDeck.length === 0) {
      initFlashcardSession();
    } else if (currentIndex >= activeDeck.length) {
      showDeckCompletedState();
    } else {
      renderActiveCard();
    }
  }

  // Registrar módulo globalmente e na inicialização da página
  window.initFlashcardsModule = showFlashcardsTab;
  window.addEventListener("DOMContentLoaded", initFlashcardsModule);

})();
