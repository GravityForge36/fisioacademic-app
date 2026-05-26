// FisioAcademic - Base de Dados Inicial

const DEFAULT_CURRICULUM = [
  {
    semester: 1,
    name: "1º Semestre - Fundamentos",
    subjects: [
      { id: "s1_perspectivas", name: "Perspectivas Profissionais", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s1_biosseguranca", name: "Biossegurança", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s1_saude_coletiva", name: "Saúde Coletiva", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s1_epidemiologia", name: "Epidemiologia e Bioestatística", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s1_exp_prof", name: "Experiência Profissional: Carreira e Sucesso", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 2,
    name: "2º Semestre - Sistemas e Movimento",
    subjects: [
      { id: "s2_prod_conhecimento", name: "Produção do Conhecimento e Tecnologias Emergentes", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s2_bioquimica", name: "Bioquímica Básica", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s2_anatomofisio_1", name: "Anatomofisiologia (Tegumentar, Locomotor e Nervoso)", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s2_anatomofisio_2", name: "Anatomofisiologia (Digestório, Endócrino, Urinário e Reprodutor)", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s2_exp_prof", name: "Experiência Profissional: Desafios Contemporâneos", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 3,
    name: "3º Semestre - Função e Ética",
    subjects: [
      { id: "s3_empreendedorismo", name: "Empreendedorismo Criativo", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s3_movimento", name: "Movimento Funcional Humano", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s3_fundamentos_etica", name: "Fundamentos e Ética", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s3_fisiopatologia", name: "Fisiopatologia Geral", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s3_exp_prof", name: "Experiência Profissional: Saúde Coletiva", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 4,
    name: "4º Semestre - Recursos e Farmacologia",
    subjects: [
      { id: "s4_farmaco", name: "Farmacologia e Toxicologia", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s4_cinesio", name: "Cinesioterapia", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s4_eletro", name: "Eletrotermofototerapia", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s4_avaliacao", name: "Avaliação Físico-Funcional e Imaginologia", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s4_estudo_contemp", name: "Estudo Contemporâneo: Indústria e Transformação", status: "not_started", grade: null, hours: 40, notes: "" },
      { id: "s4_exp_prof", name: "Experiência Profissional: Práticas Integrativas", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 5,
    name: "5º Semestre - Recursos Avançados",
    subjects: [
      { id: "s5_recursos_manuais", name: "Recursos Manuais", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s5_fisiologia_ex", name: "Fisiologia do Exercício e Avaliação Cardio", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s5_aquatica", name: "Fisioterapia Aquática", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s5_idoso", name: "Saúde do Idoso", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s5_estudo_contemp", name: "Estudo Contemporâneo: Propriedade Intelectual", status: "not_started", grade: null, hours: 40, notes: "" },
      { id: "s5_exp_prof", name: "Experiência Profissional: Recursos Eletrofisioterapêuticos", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 6,
    name: "6º Semestre - Especialidades I",
    subjects: [
      { id: "s6_traumato", name: "Fisioterapia Traumato-Ortopédica", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s6_neuro", name: "Fisioterapia Neurofuncional", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s6_crianca", name: "Fisioterapia na Saúde da Criança", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s6_mulher", name: "Fisioterapia na Saúde da Mulher", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s6_estudo_contemp", name: "Estudo Contemporâneo: Relações Étnico-Raciais, Cultura e DH", status: "not_started", grade: null, hours: 40, notes: "" },
      { id: "s6_exp_prof", name: "Experiência Profissional: Novas Tecnologias em Fisioterapia", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 7,
    name: "7º Semestre - Especialidades II",
    subjects: [
      { id: "s7_estagio_basica", name: "Estágio Curricular Supervisionado na Atenção Básica", status: "not_started", grade: null, hours: 150, notes: "" },
      { id: "s7_protese", name: "Prótese e Órtese", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s7_respiratoria", name: "Fisioterapia Respiratória e Intensivismo", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s7_estudo_contemp", name: "Estudo Contemporâneo: Autonomia, Relação de Consumo e Sustentabilidade", status: "not_started", grade: null, hours: 40, notes: "" },
      { id: "s7_exp_prof", name: "Experiência Profissional: Fisioterapia em Reumatologia", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 8,
    name: "8º Semestre - Especialidades III",
    subjects: [
      { id: "s8_estagio_amb1", name: "Estágio Curricular Supervisionado Ambulatorial I", status: "not_started", grade: null, hours: 150, notes: "" },
      { id: "s8_dermatofunc", name: "Fisioterapia Dermatofuncional", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s8_exp_prof_atleta", name: "Experiência Profissional: Fisioterapia na Saúde do Atleta", status: "not_started", grade: null, hours: 40, notes: "" },
      { id: "s8_estudo_contemp", name: "Estudo Contemporâneo: Administração de Conflitos e Inteligência Emocional", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 9,
    name: "9º Semestre - Prática e Pesquisa I",
    subjects: [
      { id: "s9_estagio_amb2", name: "Estágio Curricular Supervisionado Ambulatorial II", status: "not_started", grade: null, hours: 150, notes: "" },
      { id: "s9_tcc1", name: "Trabalho de Conclusão de Curso I", status: "not_started", grade: null, hours: 40, notes: "" },
      { id: "s9_cardio", name: "Fisioterapia Cardiovascular", status: "not_started", grade: null, hours: 80, notes: "" },
      { id: "s9_estudo_contemp", name: "Estudo Contemporâneo: Gestão de Indicadores e Compliance", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  },
  {
    semester: 10,
    name: "10º Semestre - Prática e Pesquisa II",
    subjects: [
      { id: "s10_estagio_hosp", name: "Estágio Curricular Supervisionado Hospitalar", status: "not_started", grade: null, hours: 150, notes: "" },
      { id: "s10_tcc2", name: "Trabalho de Conclusão de Curso II", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s10_trabalhador", name: "Fisioterapia na Saúde do Trabalhador", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s10_evidencias", name: "Fisioterapia Baseada em Evidências", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s10_topicos", name: "Tópicos Especiais em Fisioterapia", status: "not_started", grade: null, hours: 60, notes: "" },
      { id: "s10_estudo_contemp", name: "Estudo Contemporâneo: Gestão do Conhecimento e Comunicação Assertiva", status: "not_started", grade: null, hours: 40, notes: "" }
    ]
  }
];

const DEFAULT_FLASHCARDS = [
{
    id: "fc1",
    category: "Anatomia",
    question: "Quais são os 4 músculos que compõem o Manguito Rotador?",
    answer: "Supraespinal, Infraespinal, Redondo Menor e Subescapular (mnemônico: S.I.R.S.). Eles estabilizam a cabeça do úmero na cavidade glenoide.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc2",
    category: "Anatomia",
    question: "Qual é a inserção do tendão do músculo Quadríceps Femoral?",
    answer: "Na tuberosidade da tíbia, através do ligamento patelar. O quadríceps é formado pelo Reto Femoral, Vasto Lateral, Vasto Medial e Vasto Intermédio.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc3",
    category: "Cinesiologia",
    question: "Qual a diferença entre contração Concêntrica, Excêntrica e Isométrica?",
    answer: "• Concêntrica: O músculo se contrai e encurta (vence a resistência).\n• Excêntrica: O músculo se contrai e alonga (controla a gravidade/resistência).\n• Isométrica: O músculo se contrai sem alteração no comprimento (estático).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc4",
    category: "Avaliação",
    question: "O que avalia o Teste de Gaveta Anterior no joelho e qual a sua indicação?",
    answer: "Avalia a integridade do Ligamento Cruzado Anterior (LCA). Uma translação anterior excessiva da tíbia em relação ao fêmur indica teste positivo (lesão do LCA).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc5",
    category: "Fisiologia",
    question: "Qual é o principal músculo inspiratório e qual nervo o inerva?",
    answer: "O Diafragma. Ele é inervado pelo Nervo Frênico (raízes espinhais de C3, C4 e C5 - 'C3, 4 e 5 mantém o diafragma vivo').",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc6",
    category: "Cinesiologia",
    question: "O que significa cadeia cinética fechada (CCF) e cadeia cinética aberta (CCA)?",
    answer: "• CCA: A extremidade distal (mão ou pé) está livre no espaço (ex: cadeira extensora, rosca direta).\n• CCF: A extremidade distal está fixa em uma superfície de suporte (ex: agachamento, flexão de braço).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_1",
    category: "Perspectivas Profissionais",
    question: "O que representam os '3 As' fundamentais para a construção do Projeto de Vida?",
    answer: "Autoconhecimento (entender seus valores e missão), Autorresponsabilidade (saber que você cria sua realidade) e Autodisciplina (consistência nas ações).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_2",
    category: "Perspectivas Profissionais",
    question: "Qual é a principal diferença conceitual entre Sucesso e Prosperidade?",
    answer: "Sucesso refere-se à conquista de uma meta final específica (geralmente material). Prosperidade é a satisfação de progredir constantemente nas diversas áreas da vida.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_3",
    category: "Perspectivas Profissionais",
    question: "Quais são as 4 atitudes sabotadoras que a Autorresponsabilidade nos ensina a evitar?",
    answer: "Não condenar, não criticar (os outros de forma destrutiva), não justificar os próprios erros e não se queixar (reclamar).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_4",
    category: "Perspectivas Profissionais",
    question: "O que avalia o pilar 'Espiritualidade' na ferramenta da Roda da Vida?",
    answer: "O relacionamento com a fé, meditação, gratidão ou qualquer prática que promova um senso de conexão profunda e propósito existencial.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_5",
    category: "Perspectivas Profissionais",
    question: "O que significa o conceito de Personal Branding na era digital?",
    answer: "A gestão estratégica da marca pessoal, destacando competências, soft skills e valores únicos para se posicionar com autoridade no mercado.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_6",
    category: "Biossegurança",
    question: "Como a NR 32 regulamenta o uso de adornos pessoais pelos profissionais de saúde?",
    answer: "É proibido o uso de adornos (relógios, anéis, pulseiras, brincos grandes) nos postos de trabalho para evitar o acúmulo de microrganismos sob eles.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_7",
    category: "Biossegurança",
    question: "Quais são as classes de Resíduos de Serviços de Saúde (RSS) e o que representam?",
    answer: "Grupo A: Infectantes. Grupo B: Químicos. Grupo C: Radioativos. Grupo D: Comuns (não perigosos). Grupo E: Perfurocortantes.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_8",
    category: "Biossegurança",
    question: "Quais os limites e condutas corretas no descarte de resíduos do Grupo E (perfurocortantes)?",
    answer: "Devem ser descartados em caixas rígidas específicas (como Descarpack) no local de uso, nunca excedendo o limite de preenchimento de 3/4 da caixa.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_9",
    category: "Biossegurança",
    question: "No Mapa de Risco, quais cores representam os riscos Físico, Químico e Biológico?",
    answer: "Verde para riscos Físicos, Vermelho para riscos Químicos e Marrom para riscos Biológicos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_10",
    category: "Biossegurança",
    question: "Qual a principal diferença entre limpeza, desinfecção e esterilização?",
    answer: "Limpeza remove a sujeira visível. Desinfecção elimina a maioria dos germes patogênicos (exceto esporos). Esterilização destrói toda forma de vida microbiana.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_11",
    category: "Saúde Coletiva",
    question: "Quais são os três princípios doutrinários do SUS descritos na Lei 8.080/90?",
    answer: "Universalidade (acesso para todos), Integralidade (cuidado completo de saúde) e Equidade (distribuição de recursos segundo a necessidade).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_12",
    category: "Saúde Coletiva",
    question: "Qual foi o papel da 8ª Conferência Nacional de Saúde (1986) para o SUS?",
    answer: "Foi o marco da Reforma Sanitária Brasileira que consolidou a saúde como direito universal e dever do Estado, base para a criação do SUS.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_13",
    category: "Saúde Coletiva",
    question: "Qual a diferença conceitual entre Saúde Pública e Saúde Coletiva?",
    answer: "Saúde Pública é assistencial, baseada no modelo biomédico estatal. Saúde Coletiva é interdisciplinar, focada nos determinantes sociais de saúde.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_14",
    category: "Saúde Coletiva",
    question: "O que é a Estratégia Saúde da Família (ESF) no SUS?",
    answer: "É o modelo prioritário da Atenção Primária, que atua com equipes multiprofissionais em territórios específicos para promover prevenção e vínculo comunitário.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_15",
    category: "Saúde Coletiva",
    question: "O que avaliam os sistemas SINASC e SIM no planejamento de saúde?",
    answer: "SINASC monitora os nascidos vivos (taxa de natalidade, peso ao nascer); SIM monitora a mortalidade (causas e taxas de óbitos no país).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_16",
    category: "Epidemiologia",
    question: "O que é um Estudo de Coorte e qual sua principal característica temporal?",
    answer: "É um estudo observacional longitudinal prospectivo, onde acompanha-se um grupo exposto e outro não exposto no tempo para ver quem adoece.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_17",
    category: "Epidemiologia",
    question: "O que define um Estudo de Caso-Controle?",
    answer: "Estudo observacional retrospectivo que parte de doentes (casos) e saudáveis (controles) investigando exposições passadas a fatores de risco.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_18",
    category: "Epidemiologia",
    question: "O que é a 'Tripla Carga de Doenças' enfrentada no cenário brasileiro?",
    answer: "A coexistência de doenças transmissíveis, avanço de doenças crônico-degenerativas (envelhecimento) e alta taxa de traumas por causas externas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_19",
    category: "Epidemiologia",
    question: "Qual a diferença matemática entre Incidência e Prevalência?",
    answer: "Incidência calcula os novos casos da doença em um período. Prevalência calcula a totalidade de casos (novos e antigos) num determinado momento.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_20",
    category: "Epidemiologia",
    question: "O que é o sistema SINAN do Ministério da Saúde?",
    answer: "Sistema de Informação de Agravos de Notificação, que registra doenças de notificação compulsória para ações de controle epidemiológico rápido.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_21",
    category: "Carreira e Sucesso",
    question: "O que difere as Hard Skills das Soft Skills na atuação clínica?",
    answer: "Hard Skills são competências técnicas (ex: goniometria, reabilitação). Soft Skills são habilidades comportamentais (ex: empatia, escuta ativa).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_22",
    category: "Carreira e Sucesso",
    question: "Qual a função do conselho de ética COFFITO na Fisioterapia?",
    answer: "É o Conselho Federal que dita o código de ética profissional, regulamenta as especialidades e zela pelo bom exercício da fisioterapia no país.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_23",
    category: "Carreira e Sucesso",
    question: "O que é a Educação Continuada e por que ela é importante na saúde?",
    answer: "É o aprimoramento profissional constante por meio de pós-graduações, cursos e leitura científica para manter a conduta clínica atualizada.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_24",
    category: "Carreira e Sucesso",
    question: "O que significa 'resolubilidade clínica' na prática da fisioterapia?",
    answer: "A capacidade de responder de forma efetiva às queixas do paciente, resultando em alívio da dor, reabilitação e ganho funcional real.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_25",
    category: "Carreira e Sucesso",
    question: "Como a ética profissional orienta a divulgação de dados do paciente em redes sociais?",
    answer: "É terminantemente proibido expor a identidade, imagem ou dados de evolução do paciente sem autorização explícita e desrespeitando o sigilo profissional.",
    box: 1,
    nextReview: 0
  }
];

const REFERENCE_DATA = {
  goniometria: [
    { joint: "Ombro", movements: [
      { name: "Flexão", range: "0° a 180°" },
      { name: "Extensão", range: "0° a 45° - 60°" },
      { name: "Abdução", range: "0° a 180°" },
      { name: "Adução", range: "0° a 40°" },
      { name: "Rotação Interna", range: "0° a 70° - 90°" },
      { name: "Rotação Externa", range: "0° a 90°" }
    ]},
    { joint: "Cotovelo / Antebraço", movements: [
      { name: "Flexão", range: "0° a 140° - 150°" },
      { name: "Extensão", range: "140° a 0° (ou hiperextensão até 10°)" },
      { name: "Pronação", range: "0° a 80° - 90°" },
      { name: "Supinação", range: "0° a 80° - 90°" }
    ]},
    { joint: "Punho", movements: [
      { name: "Flexão (Flexão Palmar)", range: "0° a 80° - 90°" },
      { name: "Extensão (Dorsiflexão)", range: "0° a 70° - 80°" },
      { name: "Desvio Radial (Abdução)", range: "0° a 20°" },
      { name: "Desvio Ulnar (Adução)", range: "0° a 30° - 40°" }
    ]},
    { joint: "Quadril", movements: [
      { name: "Flexão (Joelho Dobrado)", range: "0° a 120°" },
      { name: "Flexão (Joelho Esticado)", range: "0° a 90°" },
      { name: "Extensão", range: "0° a 20° - 30°" },
      { name: "Abdução", range: "0° a 45°" },
      { name: "Adução", range: "0° a 20° - 30°" },
      { name: "Rotação Interna", range: "0° a 45°" },
      { name: "Rotação Externa", range: "0° a 45°" }
    ]},
    { joint: "Joelho", movements: [
      { name: "Flexão", range: "0° a 135° - 145°" },
      { name: "Extensão", range: "135° a 0°" }
    ]},
    { joint: "Tornozelo (Talocrural)", movements: [
      { name: "Dorsiflexão", range: "0° a 20°" },
      { name: "Flexão Plantar", range: "0° a 45° - 50°" },
      { name: "Inversão (Subtalar)", range: "0° a 30° - 35°" },
      { name: "Eversão (Subtalar)", range: "0° a 15° - 20°" }
    ]}
  ],
  forca_muscular: [
    { grade: "Grau 5 (Normal)", desc: "O músculo consegue completar toda a amplitude de movimento contra a gravidade e tolera resistência máxima aplicada pelo examinador." },
    { grade: "Grau 4 (Bom)", desc: "O músculo consegue completar toda a amplitude de movimento contra a gravidade e tolera resistência moderada, mas cede à resistência máxima." },
    { grade: "Grau 3 (Regular)", desc: "O músculo consegue completar toda a amplitude de movimento contra a gravidade, mas cede totalmente se qualquer resistência externa for aplicada." },
    { grade: "Grau 2 (Fraco)", desc: "O músculo consegue realizar o movimento apenas se a gravidade for eliminada (ex: plano horizontal sobre a maca)." },
    { grade: "Grau 1 (Traço de Contração)", desc: "Nenhum movimento articular ocorre, mas é possível palpar ou inspecionar uma leve contração ou tensão no tendão do músculo." },
    { grade: "Grau 0 (Zero)", desc: "Nenhuma evidência de contração muscular é sentida ou vista na palpação/inspeção visual." }
  ],
  testes_ortopedicos: [
    {
      name: "Teste de Phalen",
      target: "Síndrome do Túnel do Carpo (Nervo Mediano)",
      execution: "O paciente aproxima o dorso das mãos com os punhos fletidos a 90° e mantém a posição por 60 segundos.",
      positive: "Dormência, parestesia ou formigamento no território do nervo mediano (polegar, indicador, médio e metade lateral do anular)."
    },
    {
      name: "Teste de Gaveta Anterior (Joelho)",
      target: "Instabilidade do Ligamento Cruzado Anterior (LCA)",
      execution: "Paciente em decúbito dorsal, joelho fletido a 90°, pé fixado na maca. O terapeuta segura a tíbia proximal com as duas mãos e traciona-a anteriormente.",
      positive: "Translação anterior excessiva da tíbia em relação ao fêmur, com ausência de um batente firme."
    },
    {
      name: "Teste de Neer",
      target: "Síndrome do Impacto do Ombro (Tendinite do Supraespinal)",
      execution: "Com o paciente em pé, o terapeuta estabiliza a escápula com uma mão e, com a outra, realiza uma elevação passiva máxima do braço em rotação interna.",
      positive: "Dor na região anterolateral do ombro durante o movimento, devido ao impacto do supraespinal sob o arco coracoacromial."
    },
    {
      name: "Teste de Laségue (Elevação da Perna Estendida)",
      target: "Lombociatalgia / Compressão de Raiz Nervosa (L4-S1)",
      execution: "Paciente em decúbito dorsal. O examinador eleva a perna estendida do paciente passivamente até que ocorra dor ou o limite de movimento seja atingido (geralmente entre 30° e 70°).",
      positive: "Dor aguda irradiando ao longo do trajeto do nervo ciático na parte posterior da coxa/perna abaixo do joelho."
    },
    {
      name: "Teste de Hawkins-Kennedy",
      target: "Impacto Subacromial (Bursite/Tendinite do Manguito)",
      execution: "O braço do paciente é fletido a 90° com cotovelo fletido a 90°. O examinador realiza uma rotação interna rápida e passiva do ombro.",
      positive: "Dor no ombro, reproduzindo o pinçamento do tendão do supraespinal e bursa subacromial contra o ligamento coracoacromial."
    },
    {
      name: "Teste de Thompson",
      target: "Ruptura do Tendão Calcâneo (Tendão de Aquiles)",
      execution: "Paciente em decúbito ventral com os pés para fora da maca. O examinador comprime o ventre muscular do gastrocnêmio (panturrilha).",
      positive: "Ausência de flexão plantar do tornozelo durante a compressão da panturrilha (indica ruptura completa do tendão)."
    }
  ],
  dermatomos: [
    { root: "C3", area: "Região lateral do pescoço" },
    { root: "C4", area: "Região supraclavicular e ombro superior" },
    { root: "C5", area: "Região lateral do braço (músculo deltoide)" },
    { root: "C6", area: "Região lateral do antebraço e polegar" },
    { root: "C7", area: "Dedo médio (terceiro quirodáctilo)" },
    { root: "C8", area: "Região medial do antebraço, dedo anular e mínimo" },
    { root: "T1", area: "Região medial do braço proximal" },
    { root: "T4", area: "Linha dos mamilos" },
    { root: "T10", area: "Linha do umbigo" },
    { root: "L2", area: "Coxa anterior e medial superior" },
    { root: "L3", area: "Coxa anterior inferior e região do joelho medial" },
    { root: "L4", area: "Região anterior da tíbia e maléolo medial" },
    { root: "L5", area: "Dorso do pé e hálux (dedão do pé)" },
    { root: "S1", area: "Borda lateral do pé e maléolo lateral" },
    { root: "S2", area: "Fossa poplítea e face posterior da coxa" }
  ]
};

const QUIZ_QUESTIONS = [
{
    id: "q1",
    category: "Anatomia",
    question: "Qual dos seguintes músculos NÃO faz parte do manguito rotador do ombro?",
    options: [
      "Músculo Supraespinal",
      "Músculo Redondo Maior",
      "Músculo Redondo Menor",
      "Músculo Subescapular"
    ],
    correctIndex: 1,
    rationale: "O manguito rotador é composto pelos músculos Supraespinal, Infraespinal, Redondo Menor e Subescapular (mnemônico S.I.R.S.). O Redondo Maior NÃO faz parte do manguito rotador; ele atua na adução e rotação interna do braço, mas não se insere na cápsula articular para estabilizar a cabeça do úmero da mesma forma."
  },
  {
    id: "q2",
    category: "Cinesiologia",
    question: "Durante a realização de um agachamento livre (fase descendente), quais contrações e ações musculares ocorrem no quadríceps e nos glúteos?",
    options: [
      "Contração concêntrica para vencer a gravidade.",
      "Contração isométrica para manter a postura estática.",
      "Contração excêntrica para controlar a descida contra a gravidade.",
      "Nenhuma contração ativa ocorre, sendo um movimento puramente passivo."
    ],
    correctIndex: 2,
    rationale: "Na fase descendente (flexão de quadril e joelho) do agachamento livre, a gravidade tende a acelerar a descida. Para controlar o movimento de forma segura, os extensores do joelho (quadríceps) e do quadril (glúteo máximo) realizam uma contração excêntrica (alongamento sob tensão)."
  },
  {
    id: "q3",
    category: "Avaliação",
    question: "Ao realizar o Teste de Gaveta Anterior no joelho de um paciente, o examinador observa uma translação anterior excessiva da tíbia em relação ao fêmur. Este achado sugere lesão de qual estrutura?",
    options: [
      "Ligamento Cruzado Posterior (LCP)",
      "Menisco Lateral",
      "Ligamento Colateral Medial (LCM)",
      "Ligamento Cruzado Anterior (LCA)"
    ],
    correctIndex: 3,
    rationale: "O Ligamento Cruzado Anterior (LCA) é o principal restritor primário da translação anterior da tíbia. Portanto, a gaveta anterior positiva (deslocamento anterior excessivo) indica incompetência ou ruptura do LCA."
  },
  {
    id: "q4",
    category: "Fisiologia",
    question: "Qual é o principal nervo responsável pela inervação motora do músculo diafragma, essencial para a mecânica ventilatória?",
    options: [
      "Nervo Vago (CN X)",
      "Nervo Frênico",
      "Nervo Intercostal",
      "Nervo Acessório (CN XI)"
    ],
    correctIndex: 1,
    rationale: "O Diafragma é inervado pelo Nervo Frênico, originado dos níveis espinhais cervicais C3, C4 e C5. Lesões cervicais altas acima de C3 podem comprometer a inervação frênica e levar à necessidade de suporte ventilatório mecânico."
  },
  {
    id: "q5",
    category: "Neurologia",
    question: "Um paciente pós-AVC apresenta hiperreflexia patelar, sinal de Babinski positivo no membro inferior acometido e espasticidade em padrão flexor no membro superior. Esses achados caracterizam uma lesão de:",
    options: [
      "Neurônio Motor Superior (NMS)",
      "Neurônio Motor Inferior (NMI)",
      "Cerebelo (Síndrome Cerebelar)",
      "Placa motora neuromuscular (Miastenia Gravis)"
    ],
    correctIndex: 0,
    rationale: "Sinais de liberação piramidal como espasticidade, hiperreflexia, sinal de Babinski e clonus são característicos de uma síndrome do Neurônio Motor Superior (Via Corticoespinhal). Lesões do Neurônio Motor Inferior, por outro lado, cursam com flacidez, hiporreflexia, hipotonia e fasciculações."
  },
  {
    id: "q6",
    category: "Cardiovascular",
    question: "Durante a ausculta pulmonar de um paciente com insuficiência cardíaca congestiva e congestão pulmonar, qual ruído adventício descontínuo e agudo (semelhante ao atrito de fios de cabelo) é comumente ouvido no final da inspiração?",
    options: [
      "Sibilos",
      "Roncos",
      "Estertores Crepitantes",
      "Estridor"
    ],
    correctIndex: 2,
    rationale: "Os estertores crepitantes são ruídos descontínuos provocados pela abertura súbita de alvéolos e vias aéreas colapsadas pelo acúmulo de fluido intersticial no final da inspiração. Sibilos e roncos são contínuos e associados a obstrução/broncoespasmo ou secreções em vias aéreas maiores."
  },
  {
    id: "q7",
    category: "Casos Clínicos",
    question: "Um atleta de futebol sofreu entorse de tornozelo em inversão súbita. Apresenta edema na face lateral do tornozelo, equimose local e dor intensa à palpação logo abaixo do maléolo lateral. Qual ligamento é estatisticamente o mais comumente lesionado nesse mecanismo?",
    options: [
      "Ligamento Deltoide",
      "Ligamento Talofibular Anterior (LTFA)",
      "Ligamento Talocalcâneo Interósseo",
      "Ligamento Tibiofibular Anterior"
    ],
    correctIndex: 1,
    rationale: "O mecanismo de entorse em inversão (plantiflexão + adução + supinação) tensiona primeiramente as estruturas laterais do tornozelo. O Ligamento Talofibular Anterior (LTFA) é o mais fraco e o primeiro a sofrer estiramento ou ruptura, seguido pelo ligamento calcâneofibular."
  },
  {
    id: "q8",
    category: "Eletroterapia",
    question: "Para o manejo de uma dor lombar aguda intensa pós-esforço, qual a modalidade e parametrização mais recomendada para aplicação imediata de TENS (Estimulação Elétrica Nervosa Transcutânea)?",
    options: [
      "TENS Acupuntura: Baixa frequência (2-5 Hz) e alta largura de pulso (200 µs), intensidade limiar de contração motora.",
      "TENS Convencional: Alta frequência (100-150 Hz) e baixa largura de pulso (50-80 µs), intensidade no limiar sensorial forte (sem contração).",
      "Corrente Galvânica Contínua de alta intensidade.",
      "Corrente Russa a 2500 Hz para fortalecimento muscular na fase aguda."
    ],
    correctIndex: 1,
    rationale: "A estimulação de alta frequência e baixa duração de pulso (TENS Convencional) ativa as fibras aferentes calibrosas A-beta, bloqueando a transmissão dos estímulos nociceptivos nas comportas da dor (Teoria das Comportas de Melzack e Wall) no corno posterior da medula espinhal. É ideal para dor aguda pois atua rapidamente e é confortável."
  },
  {
    id: "q9",
    category: "Pediatria",
    question: "Do ponto de vista do desenvolvimento motor típico do lactente, em qual faixa etária média espera-se que a criança adquira o controle postural para sentar-se sem apoio de forma estável?",
    options: [
      "3 a 4 meses",
      "6 a 7 meses",
      "10 a 11 meses",
      "12 a 15 meses"
    ],
    correctIndex: 1,
    rationale: "Bebês com desenvolvimento motor típico costumam sentar-se com apoio das mãos ('posição de tripé') por volta dos 5-6 meses, e sentar-se de forma independente e sem apoio (com bom controle de tronco e rotação) entre 6 e 7 meses de idade."
  },
  {
    id: "q10",
    category: "Especialidades",
    question: "A Escala de Equilíbrio de Berg (EEB) é um instrumento clínico amplamente utilizado na reabilitação geriátrica e neurológica. O seu principal objetivo é avaliar:",
    options: [
      "A força muscular isométrica global dos membros inferiores.",
      "A amplitude de movimento ativa de quadril e joelhos.",
      "O equilíbrio funcional estático/dinâmico e o risco de quedas em idosos.",
      "A velocidade da marcha e o consumo máximo de oxigênio (VO2 máx)."
    ],
    correctIndex: 2,
    rationale: "A Escala de Berg avalia o equilíbrio (estático e dinâmico) do indivíduo através de 14 tarefas comuns do dia a dia. A pontuação máxima é 56 pontos. Um escore menor ou igual a 45 indica alto risco de quedas, sendo uma ferramenta preditiva fundamental em geriatria."
  },
  {
    id: "q_sem1_1",
    category: "Perspectivas Profissionais",
    question: "Quais são os chamados '3 As' do Projeto de Vida, essenciais para gerenciar a própria carreira?",
    options: ["Autoconhecimento, Autorresponsabilidade e Autodisciplina", "Assertividade, Ação e Altruísmo", "Autonomia, Ambição e Adaptação", "Análise, Atualização e Associação"],
    correctIndex: 0,
    rationale: "O projeto de vida de acordo com a metodologia de gestão pessoal fundamenta-se nos pilares da consciência sobre si (Autoconhecimento), da autoria dos próprios resultados (Autorresponsabilidade) e da constância nas ações planejadas (Autodisciplina)."
  },
  {
    id: "q_sem1_2",
    category: "Perspectivas Profissionais",
    question: "Na Roda da Vida, ferramenta clássica de autoavaliação pessoal, qual o objetivo principal da análise?",
    options: ["Garantir que a vida seja focada unicamente no sucesso financeiro.", "Buscar o desenvolvimento e equilíbrio sistêmico entre as diversas dimensões da vida (família, saúde, carreira, etc.).", "Classificar os indivíduos de acordo com padrões competitivos de desempenho corporativo.", "Determinar dogmas de fé específicos de forma compulsória."],
    correctIndex: 1,
    rationale: "A Roda da Vida ajuda o indivíduo a enxergar sua existência de forma sistêmica, alertando sobre áreas negligenciadas (como saúde ou família) em detrimento de outras (como profissional), buscando o equilíbrio sustentável."
  },
  {
    id: "q_sem1_3",
    category: "Perspectivas Profissionais",
    question: "Como a metodologia de gestão de carreira distingue 'Sucesso' de 'Prosperidade'?",
    options: ["Sucesso é apenas para executivos de grandes corporações.", "Prosperidade refere-se à evolução e aprendizado constante nas diversas esferas, enquanto Sucesso costuma representar a conquista final de uma meta.", "Não há nenhuma distinção conceitual ou prática, sendo sinônimos exatos.", "Prosperidade refere-se unicamente ao acúmulo de bens materiais e dinheiro."],
    correctIndex: 1,
    rationale: "A prosperidade é o processo de evolução constante e a capacidade de ser grato e fazer bom uso dos recursos disponíveis em cada momento da caminhada, gerando contentamento mesmo antes de atingir o sucesso (objetivo final)."
  },
  {
    id: "q_sem1_4",
    category: "Perspectivas Profissionais",
    question: "Qual conduta profissional demonstra 'Autorresponsabilidade' diante de uma meta não atingida?",
    options: ["Criticar a incompetência dos demais membros do setor.", "Lamentar e queixar-se com os pacientes sobre o excesso de trabalho.", "Analisar as próprias atitudes e planejar ações corretivas de forma consciente para melhorar na próxima oportunidade.", "Apresentar justificativas externas detalhadas para isentar-se de qualquer erro."],
    correctIndex: 2,
    rationale: "A autorresponsabilidade é a crença de que somos os responsáveis pelos resultados da nossa vida. Em vez de buscar culpados ou justificativas inibidoras, a postura autorresponsável foca em aprender com os erros e atuar na melhoria."
  },
  {
    id: "q_sem1_5",
    category: "Perspectivas Profissionais",
    question: "O que constitui o conceito de 'Personal Branding' e qual sua utilidade profissional?",
    options: ["A criação de logotipos comerciais e registros de marcas para empresas de calçados.", "A gestão estratégica do perfil profissional, demonstrando reputação, valores e competências de forma clara ao mercado.", "A publicação de opiniões informais e dados privados de forma irrestrita na internet.", "A contratação de assessoria de imagem para disfarçar limitações técnicas de conduta."],
    correctIndex: 1,
    rationale: "Personal Branding refere-se à construção e gestão de sua marca pessoal, permitindo que a comunidade e o mercado compreendam quem você é, o que você valoriza e quais são suas especialidades técnicas, gerando autoridade profissional."
  },
  {
    id: "q_sem1_6",
    category: "Biossegurança",
    question: "Em relação aos Riscos Ambientais, a NR 32 regulamenta a exposição do trabalhador da saúde. Radiação ionizante e ruído ocupacional pertencem a qual grupo?",
    options: ["Riscos Químicos", "Riscos Biológicos", "Riscos Físicos", "Riscos Ergonômicos"],
    correctIndex: 2,
    rationale: "O grupo de Riscos Físicos (representado pela cor verde no mapa de riscos) inclui agentes que agem por meio de forças e energias físicas no corpo, como vibrações, ruído, pressões extremas, temperaturas intensas e radiações."
  },
  {
    id: "q_sem1_7",
    category: "Biossegurança",
    question: "Sob a regulamentação do Gerenciamento de Resíduos de Serviços de Saúde (RDC 222/Anvisa), as ampolas de vidro, agulhas e lâminas cirúrgicas pertencem a qual grupo?",
    options: ["Grupo A (Infectantes)", "Grupo B (Químicos)", "Grupo D (Comuns)", "Grupo E (Perfurocortantes)"],
    correctIndex: 3,
    rationale: "O Grupo E do RSS corresponde aos resíduos perfurocortantes: materiais contendo cantos, bordas, pontas ou protuberâncias rígidas e agudas capazes de cortar ou perfurar (agulhas, ampolas, lancetas, lâminas de bisturi)."
  },
  {
    id: "q_sem1_8",
    category: "Biossegurança",
    question: "Qual a correta conduta de descarte para os recipientes coletores de perfurocortantes (Grupo E) nas clínicas de saúde?",
    options: ["Devem ser esvaziados no lixo comum e higienizados com álcool para reutilização.", "Devem ser descartados quando o nível de resíduos atingir a marca limite de 3/4 de sua capacidade total.", "Devem ser mantidos abertos em locais de passagem rápida para agilizar o descarte.", "Devem ser acondicionados em sacos plásticos vermelhos comuns sem identificação."],
    correctIndex: 1,
    rationale: "Para garantir a segurança dos profissionais de saúde e trabalhadores da limpeza, as caixas coletoras rígidas de perfurocortantes devem ser fechadas e lacradas quando atingirem o limite de 3/4 do volume útil, evitando acidentes por agulhas expostas."
  },
  {
    id: "q_sem1_9",
    category: "Biossegurança",
    question: "A Norma Regulamentadora 32 (NR 32) proíbe expressamente o uso de adornos pessoais nos postos de trabalho dos profissionais de saúde. Qual a justificativa científica dessa medida?",
    options: ["Evitar o roubo ou perda desses itens valiosos nas clínicas.", "Minimizar a distração visual dos pacientes durante a terapia física.", "Reduzir o risco de infecções, visto que adornos servem de fômites, acumulando biofilmes patogênicos que resistem à higienização das mãos.", "Padronizar a estética e uniformização visual de forma corporativa."],
    correctIndex: 2,
    rationale: "Adornos (anéis, alianças, relógios, pulseiras) acumulam sujeira e microrganismos de difícil remoção. A remoção de adornos é essencial para garantir a eficácia da fricção de antissépticos e lavagem de mãos nas práticas de controle de infecção."
  },
  {
    id: "q_sem1_10",
    category: "Biossegurança",
    question: "No planejamento de segurança clínica, o Mapa de Risco utiliza círculos de diâmetros diferentes. O tamanho do círculo representa:",
    options: ["A quantidade de funcionários expostos em cada setor.", "A gravidade e intensidade do risco presente (pequeno, médio ou grande).", "O orçamento financeiro investido na compra de EPIs daquele departamento.", "O número de saídas de emergência disponíveis na planta."],
    correctIndex: 1,
    rationale: "No Mapa de Risco, a dimensão do círculo sinaliza a intensidade do risco avaliado no ambiente de trabalho: círculos pequenos indicam risco leve; círculos médios, risco moderado; e círculos grandes representam risco elevado/grave."
  },
  {
    id: "q_sem1_11",
    category: "Saúde Coletiva",
    question: "A 8ª Conferência Nacional de Saúde, realizada em 1986 sob a liderança do sanitarista Sérgio Arouca, é um marco histórico porque:",
    options: ["Definiu o fechamento dos hospitais filantrópicos no país.", "Propôs a criação de convênios médicos privados obrigatórios.", "Consolidou as bases ideológicas da Reforma Sanitária, definindo a saúde como direito de todos e dever do Estado, dando origem ao SUS.", "Criou o primeiro programa de residência médica em cirurgia plástica."],
    correctIndex: 2,
    rationale: "A 8ª Conferência foi a primeira de caráter democrático com ampla participação da sociedade civil. O relatório final da conferência delineou as bases conceituais, doutrinárias e diretrizes organizativas que foram inseridas na Constituição Federal de 1988 para instituir o SUS."
  },
  {
    id: "q_sem1_12",
    category: "Saúde Coletiva",
    question: "O princípio do SUS que estabelece a garantia de assistência integral em todos os níveis de complexidade, englobando a promoção, proteção, recuperação e reabilitação da saúde, é o princípio da:",
    options: ["Universalidade", "Hierarquização", "Equidade", "Integralidade"],
    correctIndex: 3,
    rationale: "A Integralidade (princípio doutrinário) preconiza que a atenção à saúde deve considerar o indivíduo como um todo biopsicossocial, atendendo a todas as suas demandas de saúde de forma contínua, do cuidado preventivo básico até a reabilitação avançada."
  },
  {
    id: "q_sem1_13",
    category: "Saúde Coletiva",
    question: "Como a Saúde Coletiva analisa o processo de adoecimento em contraposição à Saúde Pública tradicional?",
    options: ["Considera a doença como um fenômeno puramente biológico e individual.", "Baseia-se unicamente nas descobertas dos exames de imagem e exames laboratoriais.", "Analisa a saúde-doença como um processo social complexo determinado pelas condições sociais, econômicas e históricas de vida das populações.", "Desconsidera totalmente os estudos estatísticos e a epidemiologia matemática."],
    correctIndex: 2,
    rationale: "A Saúde Coletiva rompe com a visão puramente biológica da patologia (modelo biomédico) e entende que o adoecimento é influenciado pelos determinantes sociais da saúde (saneamento, alimentação, renda, acesso à cultura, etc.)."
  },
  {
    id: "q_sem1_14",
    category: "Saúde Coletiva",
    question: "Na organização da Atenção Primária à Saúde no Brasil, qual é o modelo prioritário de reorganização dos serviços básicos nas comunidades?",
    options: ["Estratégia Saúde da Família (ESF)", "Pronto Atendimento de Urgência de 24h", "Mutirões de Especialidades Cirúrgicas", "Consultórios Médicos Populares Particulares"],
    correctIndex: 0,
    rationale: "A ESF atua como modelo prioritário para consolidar e expandir a atenção básica no SUS. Ela opera com território delimitado, cadastro de famílias, equipes multiprofissionais e busca ativa focado na prevenção e promoção."
  },
  {
    id: "q_sem1_15",
    category: "Saúde Coletiva",
    question: "Qual Sistema de Informação em Saúde (SIS) do SUS coleta dados a partir das Declarações de Óbito (DO) para subsidiar estudos epidemiológicos sobre causas de morte?",
    options: ["SINASC", "SIH/SUS", "SIM", "SISVAN"],
    correctIndex: 2,
    rationale: "O SIM (Sistema de Informações sobre Mortalidade) compila informações brutas a partir das DOs médicas emitidas em território nacional, permitindo que gestores analisem as causas mais incidentes de óbito e tracem planos preventivos."
  },
  {
    id: "q_sem1_16",
    category: "Epidemiologia",
    question: "Um estudo epidemiológico que parte da causa (exposição) em direção ao efeito, acompanhando prospectivamente no tempo um grupo exposto a um fator de risco e outro não exposto, é denominado:",
    options: ["Estudo Ecológico", "Estudo de Caso-Controle", "Estudo de Coorte", "Ensaio Clínico Laboratorial"],
    correctIndex: 2,
    rationale: "O estudo de Coorte é um desenho observacional longitudinal no qual os participantes expostos e não expostos ao fator em estudo são acompanhados prospectivamente no tempo para observar o desenvolvimento da doença de interesse."
  },
  {
    id: "q_sem1_17",
    category: "Epidemiologia",
    question: "O termo 'Tripla Carga de Doenças' representa a transição epidemiológica brasileira. O que a caracteriza?",
    options: ["Aumento da taxa de mortalidade infantil, materna e fetal nas capitais.", "A coexistência de surtos e epidemias de doenças transmissíveis, aumento expressivo das doenças crônicas não transmissíveis e alta incidência de traumas por causas externas (acidentes e violência).", "Sobrecarga nas contas da união, dos estados e dos municípios.", "Ocorrência de gripe aviária, peste suína e dengue simultaneamente."],
    correctIndex: 1,
    rationale: "Diferente dos países desenvolvidos, que erradicaram a maior parte das doenças infecciosas antes do aumento das crônicas, o Brasil enfrenta um paradoxo de triplo desafio: doenças infecciosas remanescentes, aumento das crônicas decorrente do envelhecimento, e violência urbana/trânsito."
  },
  {
    id: "q_sem1_18",
    category: "Epidemiologia",
    question: "Qual indicador epidemiológico é calculado pela divisão do número de novos casos diagnosticados de uma doença em um período pelo número total de pessoas expostas ao risco de contraí-la?",
    options: ["Prevalência", "Morbidade acumulada", "Taxa de Incidência", "Taxa de Letalidade"],
    correctIndex: 2,
    rationale: "A incidência representa a taxa de novos casos que surgem em uma população em risco durante um período específico. Difere da prevalência, que inclui todos os casos (novos e antigos) ativos em um ponto no tempo."
  },
  {
    id: "q_sem1_19",
    category: "Epidemiologia",
    question: "No desenho de um estudo Caso-Controle, os grupos de participantes são selecionados a partir de:",
    options: ["Sua renda mensal familiar declarada no censo.", "Sua exposição prévia a produtos poluentes ou tóxicos.", "A presença ou ausência da doença (efeito) em estudo, investigando retrospectivamente o histórico de exposições a fatores de risco.", "Sua concordância voluntária em tomar uma vacina teste experimental."],
    correctIndex: 2,
    rationale: "Os estudos Caso-Controle iniciam com indivíduos que possuem a doença (Casos) e indivíduos sem a doença (Controles). O investigador examina retrospectivamente (voltando no tempo) o histórico de ambos para mapear a exposição prévia aos fatores causais."
  },
  {
    id: "q_sem1_20",
    category: "Epidemiologia",
    question: "O regulamento de Notificação Compulsória de doenças do SUS exige que:",
    options: ["Apenas hospitais públicos realizem a notificação de exames rotineiros.", "Os médicos e profissionais de saúde comuniquem obrigatoriamente a ocorrência de certas patologias de risco (como dengue, tuberculose, meningite) à vigilância epidemiológica.", "Pacientes publiquem seus históricos de exames clínicos na internet para consulta nacional pública.", "As farmácias registrem todas as vendas de analgésicos e fitoterápicos."],
    correctIndex: 1,
    rationale: "A notificação compulsória é um dever legal e ético de profissionais e gestores de saúde, visando alertar rapidamente as autoridades públicas sobre surtos ou avanço de doenças transmissíveis para tomada rápida de medidas de controle sanitário."
  },
  {
    id: "q_sem1_21",
    category: "Carreira e Sucesso",
    question: "No perfil moderno de atuação do fisioterapeuta, a empatia e a capacidade de escuta ativa durante o acolhimento clínico são qualificadas como:",
    options: ["Hard Skills (competências técnicas)", "Soft Skills (competências comportamentais)", "Technical Skills (habilidades mecânicas)", "Digital Skills (habilidades tecnológicas)"],
    correctIndex: 1,
    rationale: "Soft skills correspondem às competências interpessoais e socioemocionais (comunicação, inteligência emocional, trabalho em equipe e empatia), indispensáveis para estabelecer a aliança terapêutica e a humanização no atendimento de saúde."
  },
  {
    id: "q_sem1_22",
    category: "Carreira e Sucesso",
    question: "O código de ética profissional de Fisioterapia estabelecido pelo COFFITO regulamenta a divulgação de resultados clínicos. Qual conduta é considerada infração ética?",
    options: ["Apresentar casos clínicos de forma anônima em congressos acadêmicos científicos.", "Publicar fotos de 'antes e depois' identificando rostos de pacientes e expondo dados de prontuário em redes sociais para fins puramente comerciais.", "Manter o prontuário digital seguro com criptografia forte contra vazamentos.", "Discutir diagnósticos funcionais em reuniões clínicas privadas de equipe multiprofissional."],
    correctIndex: 1,
    rationale: "De acordo com as resoluções do COFFITO, expor a imagem do paciente, expor sua identidade e divulgar dados sem fins estritamente acadêmicos/científicos e sem autorização expressa é uma violação do sigilo profissional e do código de ética."
  },
  {
    id: "q_sem1_23",
    category: "Carreira e Sucesso",
    question: "O que representa a 'resolubilidade clínica' na conduta profissional de um fisioterapeuta?",
    options: ["O número absoluto de consultas realizadas e faturadas por dia útil na clínica.", "A capacidade de resolver com eficácia as disfunções cinético-funcionais do paciente, devolvendo autonomia, funcionalidade e alívio da dor.", "A habilidade de delegar todas as sessões de reabilitação para auxiliares e estagiários.", "A aplicação compulsória de protocolos idênticos para todos os pacientes."],
    correctIndex: 1,
    rationale: "A resolubilidade é o grau de eficácia do atendimento fisioterapêutico, ou seja, se a conduta clínica do profissional de fato resolve a queixa de dor e restrição de mobilidade do paciente, melhorando sua autonomia e qualidade de vida."
  },
  {
    id: "q_sem1_24",
    category: "Carreira e Sucesso",
    question: "Para obter a autorização legal e o registro necessário para a atuação profissional de Fisioterapia no Brasil, o recém-formado deve solicitar inscrição no:",
    options: ["Conselho Federal de Medicina (CFM)", "Conselho Regional de Fisioterapia e Terapia Ocupacional (CREFITO)", "Sindicato Nacional de Trabalhadores em Saúde (SINDSAÚDE)", "Conselho Federal de Farmácia (CFF)"],
    correctIndex: 1,
    rationale: "O registro profissional e fiscalização direta da atividade do fisioterapeuta em cada estado ou região geográfica são competências do CREFITO (Conselho Regional de Fisioterapia e Terapia Ocupacional)."
  },
  {
    id: "q_sem1_25",
    category: "Carreira e Sucesso",
    question: "Qual a importância das atividades acadêmicas de extensão universitária na construção da carreira da saúde?",
    options: ["Evitar que o aluno precise estudar as matérias teóricas curriculares.", "Reduzir o tempo total exigido de formação acadêmica na faculdade.", "Aproximar o estudante da prática social comunitária, aplicando o conhecimento da academia para responder às necessidades de saúde reais da população.", "Garantir a aprovação automática em todas as disciplinas de provas escritas."],
    correctIndex: 2,
    rationale: "Os projetos de extensão cumprem a função social de integrar o conhecimento da universidade com a comunidade, promovendo a vivência de saúde em cenários reais, fortalecendo a empatia e o perfil prático do futuro profissional."
  }
];

// Materiais de Estudo em Caderno Digital por Disciplina
const STUDY_MATERIALS = {
s5_recursos_manuais: {
    title: "Recursos Manuais - Cinesiologia e Prática de Mobilização",
    content: [
      "A terapia manual é uma das áreas mais tradicionais e fundamentais da Fisioterapia. Ela compreende um conjunto de técnicas terapêuticas aplicadas manualmente com o objetivo de tratar disfunções neuro-músculo-esqueléticas.",
      "As principais condutas incluem a mobilização articular, manipulação, tração espinhal, liberação miofascial e massoterapia terapêutica.",
      "A mobilização articular baseia-se nos movimentos acessórios (artrocinemática): rolamento, deslizamento e rotação. Estes movimentos ocorrem dentro da articulação e não estão sob controle voluntário do paciente, mas são essenciais para a amplitude de movimento (ADM) fisiológica.",
      "Maitland propõe uma escala de mobilização articular em 5 graus fundamentais. O Grau I e II são aplicados no início da amplitude de movimento articular, sem atingir a barreira de restrição de tecido, sendo ideais para alívio da dor e indução de efeitos neurofisiológicos. O Grau III e IV são aplicados na barreira do tecido, sendo indicados para ganhar ADM e alongar a cápsula articular rígida.",
      "O Grau V de Maitland representa a manipulação de alta velocidade e baixa amplitude (impulso/thrust), que ultrapassa a barreira do tecido de restrição mas permanece dentro do limite anatômico da articulação. Esta técnica induz cavitação (estalo articular) e promove relaxamento muscular reflexo imediato.",
      "A liberação miofascial atua diretamente sobre o tecido conjuntivo (fáscia). A fáscia envolve todos os músculos do corpo e, após traumas ou sobrecargas repetitivas, pode sofrer restrições e formar pontos de gatilho (trigger points). O terapeuta aplica pressão contínua e deslizamento para reidratar a fáscia e restaurar a flexibilidade dos tecidos.",
      "Indicações clínicas principais da terapia manual: redução de dor aguda ou crônica, aumento da ADM ativa e passiva, facilitação da drenagem linfática e circulação local, e diminuição de espasmos musculares protetores."
    ]
  },
  s1_perspectivas: {
    title: "Perspectivas Profissionais - Projeto de Vida e Carreira",
    content: [
      "O desenvolvimento pessoal e profissional fundamenta-se na sinergia entre autoconhecimento, autorresponsabilidade e autodisciplina (conhecidos como os '3 As' do Projeto de Vida). O plano estratégico pessoal atua como um mapa, permitindo ao estudante visualizar antecipadamente o estado desejado de carreira e estruturar os passos práticos para alcançá-lo.",
      "A Roda da Vida é um instrumento de gestão holística que avalia dez pilares vitais: espiritualidade, família, relação conjugal, saúde/bem-estar, social/lazer, financeiro, profissional, desenvolvimento pessoal, realização/propósito e equilíbrio emocional. Monitorar esses eixos ajuda a identificar áreas carentes de intervenção, garantindo um progresso de vida equilibrado e sustentável.",
      "Diferenciar sucesso de prosperidade é crucial para a saúde emocional. Enquanto o sucesso material é associado a metas tangíveis de acúmulo financeiro ou cargos elevados, a prosperidade é o sentimento de contentamento e progresso constante nas diversas áreas da vida, valorizando a jornada de evolução mesmo antes de atingir os objetivos finais.",
      "A autorresponsabilidade é o reconhecimento de que somos os únicos produtores dos nossos resultados e da realidade que vivenciamos. Pessoas autorresponsáveis abandonam hábitos inibidores como a crítica destrutiva, a reclamação contínua, as justificativas para os próprios fracassos e a vitimização, focando sua energia em reverter resultados adversos com inteligência.",
      "Na Era Digital, as transformações do mercado de trabalho exigem adaptabilidade e habilidades comportamentais (soft skills), como inteligência emocional, empatia e resiliência. A construção de uma marca pessoal forte (personal branding) e a prática ética do marketing pessoal auxiliam o profissional a destacar suas competências e valores de mercado.",
      "A evolução na carreira requer autoavaliação periódica do desempenho técnico e pessoal, além do estabelecimento de limites ecológicos. Planejar períodos de descanso e pausas estratégicas (timeout) é fundamental para preservar a saúde mental, manter o foco produtivo de longo prazo e evitar o esgotamento profissional."
    ]
  },
  s1_biosseguranca: {
    title: "Biossegurança em Serviços de Saúde - Proteção Clínico-Ocupacional",
    content: [
      "A Biossegurança em saúde compreende um conjunto de ações técnicas e normativas voltadas para prevenir, minimizar ou eliminar os riscos à saúde de pacientes, profissionais e do meio ambiente, oriundos das atividades assistenciais e de laboratório.",
      "A NR 32 (Norma Regulamentadora 32) é a legislação trabalhista responsável por estabelecer diretrizes para a proteção da saúde e segurança dos trabalhadores em serviços de saúde. Ela abrange a gestão de riscos biológicos, químicos, radiações, resíduos e proíbe terminantemente o uso de adornos pessoais para otimizar a desinfecção.",
      "Os riscos ocupacionais no ambiente clínico subdividem-se em cinco categorias clássicas: Riscos Físicos (ruídos, radiações, pressões, vibrações, temperaturas extremas); Riscos Químicos (substâncias tóxicas, medicamentos, gases); Riscos Biológicos (micro-organismos como vírus, bactérias, parasitas e fungos); Riscos Ergonômicos (posturas inadequadas, repetição); e Riscos de Acidentes.",
      "O Mapa de Risco é uma representação gráfica setorizada da clínica de Fisioterapia que utiliza círculos de tamanhos diferentes (sinalizando a gravidade leve, moderada ou severa) e cores padronizadas (verde para físico, vermelho para químico, marrom para biológico, amarelo para ergonômico e azul para acidentes) para alertar os trabalhadores.",
      "O gerenciamento de resíduos (RSS) segue a RDC 222 da Anvisa, classificando-os em: Grupo A (Infectantes com potencial biológico); Grupo B (Químicos tóxicos); Grupo C (Radioativos); Grupo D (Comuns sem riscos especiais); e Grupo E (Perfurocortantes). O descarte do Grupo E, como agulhas de acupuntura e ampolas, exige recipientes rígidos específicos preenchidos até o limite máximo de 3/4.",
      "A higienização das mãos é a medida mais simples e eficaz de controle de infecções cruzadas, devendo ser executada antes e após o contato com o paciente. O uso correto de Equipamentos de Proteção Individual (EPIs), como luvas de procedimento, máscaras e óculos, associado à desinfecção de macas com álcool 70% compõem as precauções padrão."
    ]
  },
  s1_saude_coletiva: {
    title: "Saúde Coletiva - Sistemas, Políticas de Saúde e SUS",
    content: [
      "A Saúde Coletiva estruturou-se no Brasil nos anos 1970 como um campo interdisciplinar que investiga as dimensões sociais do processo saúde-doença em coletividades. Diferente da Saúde Pública tradicional, focada no modelo biológico e curativo focado no médico, a Saúde Coletiva integra a epidemiologia social, o planejamento de gestões políticas e as ciências humanas.",
      "O Movimento de Reforma Sanitária Brasileira liderou as discussões políticas para democratizar a saúde no país. A 8ª Conferência Nacional de Saúde (1986), presidida pelo sanitarista Sérgio Arouca, reuniu a sociedade civil e aprovou a tese da saúde como direito do cidadão e dever do Estado, servindo de base para a redação da seção de saúde na Constituição Federal de 1988.",
      "O Sistema Único de Saúde (SUS) apoia-se em princípios doutrinários éticos: Universalidade (garantia de acesso a todos sem distinção), Integralidade (assistência em todas as necessidades preventivas, curativas e de reabilitação) e Equidade (oferecer mais a quem necessita mais, visando reduzir as desigualdades sociais).",
      "As diretrizes organizativas do SUS englobam a Descentralização (redistribuição do poder e responsabilidades para os municípios), Regionalização e Hierarquização (organização de serviços em redes de atenção básica, média e alta complexidade) e a Participação Popular/Controle Social (assegurada por Conselhos e Conferências de Saúde).",
      "A Atenção Primária à Saúde (APS) funciona como porta de entrada e ordenadora do SUS, tendo na Estratégia Saúde da Família (ESF) seu modelo principal. Equipes multiprofissionais (médicos, enfermeiros, fisioterapeutas no NASF, agentes de saúde) atuam em territórios definidos para realizar visitas domiciliares, diagnósticos de comunidade e ações de prevenção de doenças.",
      "O planejamento do SUS é viabilizado por instrumentos como o Plano Municipal de Saúde e a Programação Pactuada Integrada (PPI). Os Sistemas de Informação em Saúde (SIS) fornecem as estatísticas brutas para as gestões locais, destacando-se o SINASC (nascidos vivos), o SIM (dados de óbitos), o SIH (internações) e o HIPERDIA (controle de hipertensão e diabetes)."
    ]
  },
  s1_epidemiologia: {
    title: "Epidemiologia e Bioestatística - Indicadores e Estudos em Saúde",
    content: [
      "A Epidemiologia é a ciência que estuda a distribuição e os fatores determinantes da frequência de doenças e agravos à saúde nas populações humanas. Ela fornece o substrato matemático e os indicadores que orientam o planejamento, orçamentos, compra de insumos e alocação de equipes na gestão de saúde.",
      "O nexo causal é o pilar que demonstra cientificamente o vínculo entre uma exposição e o adoecimento. Os estudos epidemiológicos dividem-se em Descritivos (quem adoece, quando e onde) e Analíticos, subdivididos em Observacionais (Coorte, que acompanha expostos prospectivamente; Caso-Controle, que analisa retrospectivamente doentes e sadios; e Ecológicos) e Experimentais (Ensaios Clínicos Randomizados com placebo).",
      "O perfil de adoecimento brasileiro é caracterizado pelo fenômeno da 'tripla carga de doenças'. Ao mesmo tempo que o SUS enfrenta doenças infecciosas e parasitárias persistentes, há o avanço das doenças crônicas não transmissíveis decorrente do envelhecimento populacional (demografia) e o crescimento alarmante das mortes e traumas por causas externas (acidentes de trânsito e violência urbana).",
      "Os indicadores epidemiológicos expressam a dinâmica das patologias. A Taxa de Incidência calcula a velocidade de novos casos surgidos em um período, enquanto a Taxa de Prevalência mede a quantidade total de casos ativos (novos e antigos) em um dado instante. O DATASUS reúne essas informações integrando bases como o SIM (mortalidade) e o SINAN.",
      "O SINAN (Sistema de Informação de Agravos de Notificação) é alimentado pelas notificações compulsórias de doenças infecciosas de interesse sanitário (como dengue, tuberculose, meningite ou intoxicações químicas). A detecção precoce de anomalias permite à Vigilância Epidemiológica atuar no bloqueio rápido de cadeias de transmissão.",
      "A investigação epidemiológica de campo é acionada em situações de surto ou epidemia. Coordenada pelo CIEVS, ela segue passos padronizados que envolvem a confirmação do diagnóstico, definição de caso, formulação de hipóteses da fonte de contágio (ex: contaminação de água ou alimento) e aplicação imediata de protocolos terapêuticos e medidas sanitárias de controle."
    ]
  },
  s1_exp_prof: {
    title: "Experiência Profissional - Inserção no Mercado e Competências Clínicas",
    content: [
      "A disciplina de Experiência Profissional integra os conceitos teóricos do currículo com as exigências reais do mercado de trabalho em Fisioterapia. Ela prepara o estudante para compreender o fluxo dos serviços de reabilitação e as demandas sociais de assistência física nas redes pública e privada.",
      "O perfil de excelência clínica exige o equilíbrio entre competências técnicas e científicas (hard skills) e habilidades comportamentais e relacionais (soft skills). Empatia no acolhimento, escuta ativa, inteligência emocional e liderança colaborativa em equipes de saúde multidisciplinares são diferenciais que potencializam a adesão do paciente ao tratamento.",
      "A preparação de carreira inclui a estruturação de um currículo estratégico, criação de portfólios práticos e a participação em projetos de extensão e iniciação científica. Essas vivências acadêmicas, monitorias e ligas de especialidades desenvolvem o pensamento científico e a rede de contatos profissionais (networking) do aluno.",
      "A ética no exercício da Fisioterapia é resguardada pelo Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO) e fiscalizada pelos Conselhos Regionais (CREFITOs). Atuar em conformidade com o Código de Ética exige zelar pelo sigilo das informações do paciente, prontuários de evolução completos e a autonomia técnica nas condutas de reabilitação.",
      "O fisioterapeuta deve planejar sua carreira estabelecendo metas de curto, médio e longo prazos. A busca por Educação Continuada por meio de residências multiprofissionais, especializações reconhecidas e leitura constante de evidências científicas garante a atualização diante das inovações terapêuticas e da tecnologia em saúde.",
      "A resolubilidade clínica — que é a capacidade real de reabilitar, aliviar a dor física e restaurar a funcionalidade motora do indivíduo — define a relevância social do fisioterapeuta. Avaliar criticamente os resultados das condutas, buscar a satisfação do paciente e cultivar a ética são os alicerces fundamentais para obter o reconhecimento e o sucesso profissional."
    ]
  }
};

// Exportar os dados globais para estarem disponíveis nos outros módulos
window.FisioData = {
  DEFAULT_CURRICULUM,
  DEFAULT_FLASHCARDS,
  REFERENCE_DATA,
  QUIZ_QUESTIONS,
  STUDY_MATERIALS
};
