// FisioAcademic - Módulo Pocket Fisio (Guias de Referência Clínica Rápida)

(function () {
  let activeRefType = "goniometria"; // "goniometria", "forca", "testes", "dermatomos"
  let searchQuery = "";

  // 1. RENDERIZAR RESULTADOS BASEADOS NO FILTRO E BUSCA
  function renderReferenceData() {
    const container = document.getElementById("reference-results-container");
    if (!container) return;

    container.innerHTML = "";
    
    // Obter base de dados estática do Pocket Fisio
    const refData = window.FisioData.REFERENCE_DATA;

    if (activeRefType === "goniometria") {
      renderGoniometria(container, refData.goniometria);
    } else if (activeRefType === "forca") {
      renderForcaMuscular(container, refData.forca_muscular);
    } else if (activeRefType === "testes") {
      renderTestesOrtopedicos(container, refData.testes_ortopedicos);
    } else if (activeRefType === "dermatomos") {
      renderDermatomos(container, refData.dermatomos);
    }

    // Adicionar ícones Lucide recém-criados
    lucide.createIcons();
  }

  // --- RENDERIZADORES ESPECÍFICOS DE CATEGORIA ---

  // 1.1 Goniometria (Amplitude de Movimento - ADM)
  function renderGoniometria(container, data) {
    // Filtrar dados da busca
    const filtered = data.map(jointGroup => {
      const matchingMovements = jointGroup.movements.filter(m => 
        jointGroup.joint.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...jointGroup, movements: matchingMovements };
    }).filter(group => group.movements.length > 0);

    if (filtered.length === 0) {
      renderNoResults(container);
      return;
    }

    filtered.forEach(group => {
      const card = document.createElement("div");
      card.className = "card glass-card ref-card";
      
      let tableRows = group.movements.map(m => `
        <tr>
          <td><strong>${m.name}</strong></td>
          <td class="text-primary font-semibold">${m.range}</td>
        </tr>
      `).join("");

      card.innerHTML = `
        <h4 class="ref-card-title"><i data-lucide="activity" class="mr-2 inline"></i> ${group.joint}</h4>
        <span class="ref-card-meta">Valores de Referência Goniométrica</span>
        <div class="ref-card-content mt-2">
          <table class="ref-table-gonio">
            <thead>
              <tr>
                <th>Movimento Articular</th>
                <th>Graus Normais (Diretriz SBG)</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // 1.2 Força Muscular (Escala de Oxford)
  function renderForcaMuscular(container, data) {
    const filtered = data.filter(item => 
      item.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filtered.length === 0) {
      renderNoResults(container);
      return;
    }

    const card = document.createElement("div");
    card.className = "card glass-card ref-card";
    
    let listItems = filtered.map(item => `
      <div class="pb-3 mb-3 border-b border-glass" style="border-bottom: 1px solid var(--border-glass); padding-bottom: 12px; margin-bottom: 12px;">
        <h5 class="text-primary font-bold" style="font-size: 0.95rem; margin-bottom: 4px;">${item.grade}</h5>
        <p class="text-muted text-sm">${item.desc}</p>
      </div>
    `).join("");

    card.innerHTML = `
      <h4 class="ref-card-title"><i data-lucide="dumbbell" class="mr-2 inline"></i> Graus de Força Muscular (Oxford)</h4>
      <span class="ref-card-meta">Escala Usada em Avaliação Cinésio-Funcional</span>
      <div class="ref-card-content mt-4">
        ${listItems}
      </div>
    `;
    container.appendChild(card);
  }

  // 1.3 Testes Ortopédicos Especiais
  function renderTestesOrtopedicos(container, data) {
    const filtered = data.filter(test => 
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.execution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.positive.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filtered.length === 0) {
      renderNoResults(container);
      return;
    }

    filtered.forEach(test => {
      const card = document.createElement("div");
      card.className = "card glass-card ref-card";
      
      card.innerHTML = `
        <h4 class="ref-card-title">${test.name}</h4>
        <span class="ref-card-meta">Alvo Clínico: ${test.target}</span>
        <div class="ref-card-content mt-3">
          <div class="mb-3">
            <strong class="text-white text-xs block mb-1">Como Executar:</strong>
            <p>${test.execution}</p>
          </div>
          <div class="mt-2 p-3 bg-red-opacity" style="background-color: rgba(239, 68, 68, 0.05); border-left: 3px solid var(--red); padding: 10px; border-radius: 4px;">
            <strong class="text-red text-xs block mb-1" style="color: var(--red);">Resposta Positiva (+):</strong>
            <p class="text-sm">${test.positive}</p>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // 1.4 Dermátomos & Miótomos (Sensório)
  function renderDermatomos(container, data) {
    const filtered = data.filter(item => 
      item.root.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.area.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filtered.length === 0) {
      renderNoResults(container);
      return;
    }

    const card = document.createElement("div");
    card.className = "card glass-card ref-card";

    let gridItems = filtered.map(item => `
      <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border-glass);">
        <strong class="text-primary" style="font-family: var(--font-title); font-size: 1.05rem;">${item.root}</strong>
        <span class="text-muted text-sm">${item.area}</span>
      </div>
    `).join("");

    card.innerHTML = `
      <h4 class="ref-card-title"><i data-lucide="map" class="mr-2 inline"></i> Mapeamento Sensorial de Dermátomos</h4>
      <span class="ref-card-meta">Inervação Sensorial Cutânea por Raiz Espinhal</span>
      <div class="ref-card-content mt-3">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          ${gridItems}
        </div>
      </div>
    `;
    container.appendChild(card);
  }

  // Renderizador para estados sem resultados
  function renderNoResults(container) {
    container.innerHTML = `
      <div class="no-records-msg card glass-card w-full">
        <i data-lucide="search-code"></i>
        <h3>Nenhum resultado encontrado</h3>
        <p class="text-muted text-sm">Tente buscar por termos médicos diferentes ou verifique a grafia.</p>
      </div>
    `;
  }

  // 2. INICIALIZAR EVENTOS DA TELA
  function initReferenceModule() {
    const searchInput = document.getElementById("ref-search-input");
    const refTabs = document.querySelectorAll(".ref-tab-btn");

    // Evento de Digitação na Barra de Busca
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderReferenceData();
      });
    }

    // Seletores de Abas da Referência
    refTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        refTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        activeRefType = tab.getAttribute("data-ref-type");
        renderReferenceData();
      });
    });

    renderReferenceData();
  }

  // Disponibilizar globalmente para o roteador SPA
  window.renderReferenceData = renderReferenceData;

  // Registrar na inicialização
  window.addEventListener("DOMContentLoaded", initReferenceModule);

})();
