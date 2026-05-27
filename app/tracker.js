// FisioAcademic - Módulo de Estágio Supervisionado (Controle de Horas Clínicas)

(function () {
  const REQUIRED_HOURS_PER_SPECIALTY = 150; // Cada especialidade exige 150h de estágio

  // Dicionário de Formatação de Nomes das Áreas
  const SPECIALTY_NAMES = {
    orthopedics: "Traumato-Ortopedia / Reuma",
    neuro: "Neurologia / Pediatria",
    cardio: "Cardiorrespiratória / UTI",
    public_health: "Saúde Coletiva / Atenção Básica"
  };

  // 1. RENDERIZAR O MÓDULO COMPLETO
  function renderInternshipModule() {
    const shifts = window.FisioApp.state.internshipShifts;

    // Calcular Cargas Horárias por Área
    const hoursBySpecialty = {
      orthopedics: 0,
      neuro: 0,
      cardio: 0,
      public_health: 0
    };

    shifts.forEach(shift => {
      if (hoursBySpecialty[shift.specialty] !== undefined) {
        hoursBySpecialty[shift.specialty] += parseInt(shift.hours);
      }
    });

    // 1.1 Atualizar Contadores de Texto e Barras de Progresso de Cada Especialidade
    updateSpecialtyUI("ortho", hoursBySpecialty.orthopedics);
    updateSpecialtyUI("neuro", hoursBySpecialty.neuro);
    updateSpecialtyUI("cardio", hoursBySpecialty.cardio);
    updateSpecialtyUI("public", hoursBySpecialty.public_health);

    // 1.2 Renderizar Histórico de Turnos na Tabela
    renderShiftsHistoryTable(shifts);
  }

  // Função auxiliar para atualizar as barras de progresso
  function updateSpecialtyUI(key, currentHours) {
    const countEl = document.getElementById(`hours-count-${key}`);
    const barEl = document.getElementById(`hours-bar-${key}`);

    if (countEl) {
      countEl.textContent = `${currentHours} / ${REQUIRED_HOURS_PER_SPECIALTY}h`;
    }

    if (barEl) {
      const percentage = Math.min(Math.round((currentHours / REQUIRED_HOURS_PER_SPECIALTY) * 100), 100);
      barEl.style.width = `${percentage}%`;
    }
  }

  // 1.3 Renderizar o histórico
  function renderShiftsHistoryTable(shifts) {
    const tableBody = document.getElementById("internship-history-rows");
    const emptyMsg = document.getElementById("internship-empty-msg");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (shifts.length === 0) {
      if (emptyMsg) emptyMsg.style.display = "flex";
      return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";

    // Ordenar turnos por data decrescente (mais recentes primeiro)
    const sortedShifts = [...shifts].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedShifts.forEach(shift => {
      const row = document.createElement("tr");

      // Formatar Data (dd/mm/aaaa)
      const dateParts = shift.date.split("-");
      const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : shift.date;

      const areaName = SPECIALTY_NAMES[shift.specialty] || shift.specialty;

      row.innerHTML = `
        <td data-label="Data"><strong>${formattedDate}</strong></td>
        <td data-label="Área"><span class="subject-badge status-in_progress" style="background-color: rgba(139, 92, 246, 0.08); color: var(--purple);">${areaName}</span></td>
        <td data-label="Horas" class="font-bold text-primary">${shift.hours}h</td>
        <td data-label="Supervisor">${shift.supervisor}</td>
        <td data-label="Conduta" class="conduta-cell" title="${shift.notes || "Sem anotações"}">${shift.notes || "-"}</td>
        <td data-label="Ações">
          <button class="btn-card-action btn-delete-shift" data-shift-id="${shift.id}" title="Excluir Registro">
            <i data-lucide="trash-2"></i>
          </button>
        </td>
      `;

      // Evento de excluir
      row.querySelector(".btn-delete-shift").addEventListener("click", () => {
        deleteShift(shift.id);
      });

      tableBody.appendChild(row);
    });

    lucide.createIcons();
  }

  // 2. EXCLUIR REGISTRO DE ESTÁGIO
  function deleteShift(id) {
    if (!confirm("Deseja realmente excluir este registro de estágio? Isso alterará o seu contador de horas.")) return;

    const shifts = window.FisioApp.state.internshipShifts;
    const idx = shifts.findIndex(s => s.id === id);

    if (idx !== -1) {
      shifts.splice(idx, 1);
      window.FisioApp.saveState("internshipShifts");
      renderInternshipModule();
      window.FisioApp.renderDashboard(); // Sincronizar painel principal
    }
  }

  // 3. ADICIONAR NOVO TURNO DE ESTÁGIO
  function addNewShift(date, specialty, hours, supervisor, notes) {
    const newShift = {
      id: "shift_" + Date.now(),
      date,
      specialty,
      hours: parseInt(hours),
      supervisor,
      notes
    };

    window.FisioApp.state.internshipShifts.push(newShift);
    window.FisioApp.saveState("internshipShifts");
    
    renderInternshipModule();
    window.FisioApp.renderDashboard(); // Atualiza dashboard
  }

  // 4. CONFIGURAR EVENTOS E INICIALIZAR
  function initTrackerModule() {
    const formAddShift = document.getElementById("form-add-shift");
    const inputDate = document.getElementById("shift-date");

    // Preencher a data padrão do form com a data de hoje
    if (inputDate) {
      const today = new Date().toISOString().split("T")[0];
      inputDate.value = today;
    }

    if (formAddShift) {
      formAddShift.addEventListener("submit", (e) => {
        e.preventDefault();

        const date = document.getElementById("shift-date").value;
        const specialty = document.getElementById("shift-specialty").value;
        const hours = document.getElementById("shift-hours").value;
        const supervisor = document.getElementById("shift-supervisor").value;
        const notes = document.getElementById("shift-notes").value;

        addNewShift(date, specialty, hours, supervisor, notes);

        // Resetar form e redefinir data
        formAddShift.reset();
        if (inputDate) {
          inputDate.value = new Date().toISOString().split("T")[0];
        }

        alert("Turno de estágio registrado e horas contabilizadas com sucesso!");
      });
    }

    renderInternshipModule();
  }

  // Disponibilizar globalmente para o roteador SPA
  window.renderInternshipModule = renderInternshipModule;

  // Registrar na inicialização
  window.addEventListener("DOMContentLoaded", initTrackerModule);

})();
