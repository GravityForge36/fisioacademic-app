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
    category: "s2_anatomofisio_1",
    question: "Quais são os 4 músculos que compõem o Manguito Rotador?",
    answer: "Supraespinal, Infraespinal, Redondo Menor e Subescapular (mnemônico: S.I.R.S.). Eles estabilizam a cabeça do úmero na cavidade glenoide.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc2",
    category: "s2_anatomofisio_1",
    question: "Qual é a inserção do tendão do músculo Quadríceps Femoral?",
    answer: "Na tuberosidade da tíbia, através do ligamento patelar. O quadríceps é formado pelo Reto Femoral, Vasto Lateral, Vasto Medial e Vasto Intermédio.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc3",
    category: "s4_cinesio",
    question: "Qual a diferença entre contração Concêntrica, Excêntrica e Isométrica?",
    answer: "• Concêntrica: O músculo se contrai e encurta (vence a resistência).\n• Excêntrica: O músculo se contrai e alonga (controla a gravidade/resistência).\n• Isométrica: O músculo se contrai sem alteração no comprimento (estático).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc4",
    category: "s4_avaliacao",
    question: "O que avalia o Teste de Gaveta Anterior no joelho e qual a sua indicação?",
    answer: "Avalia a integridade do Ligamento Cruzado Anterior (LCA). Uma translação anterior excessiva da tíbia em relação ao fêmur indica teste positivo (lesão do LCA).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc5",
    category: "s2_anatomofisio_2",
    question: "Qual é o principal músculo inspiratório e qual nervo o inerva?",
    answer: "O Diafragma. Ele é inervado pelo Nervo Frênico (raízes espinhais de C3, C4 e C5 - 'C3, 4 e 5 mantém o diafragma vivo').",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc6",
    category: "s4_cinesio",
    question: "O que significa cadeia cinética fechada (CCF) e cadeia cinética aberta (CCA)?",
    answer: "• CCA: A extremidade distal (mão ou pé) está livre no espaço (ex: cadeia extensora, rosca direta).\n• CCF: A extremidade distal está fixa em uma superfície de suporte (ex: agachamento, flexão de braço).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_1",
    category: "s2_anatomofisio_1",
    question: "Qual é o maior e mais longo osso do corpo humano e quais articulações ele ajuda a formar?",
    answer: "O Fêmur. Ele articula-se proximalmente com o osso do quadril (articulação coxofemoral) e distalmente com a tíbia e a patela (articulação do joelho).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_2",
    category: "s2_anatomofisio_1",
    question: "Quais são as 3 porções do músculo Deltoide e suas respectivas ações principais?",
    answer: "• Anterior: Flexão e rotação interna do braço.\n• Lateral: Abdução do braço (principal abdutor após os primeiros 15°).\n• Posterior: Extensão e rotação externa do braço.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_3",
    category: "s2_anatomofisio_1",
    question: "Onde se origina e onde se insere o músculo Bíceps Braquial?",
    answer: "• Origem: Cabeça longa no tubérculo supraglenoidal da escápula; cabeça curta no processo coracoide da escápula.\n• Inserção: Tuberosidade do rádio e aponeurose do bíceps braquial.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_4",
    category: "s2_anatomofisio_1",
    question: "Qual nervo passa pelo Túnel do Carpo e pode sofrer compressão?",
    answer: "O Nervo Mediano. A compressão crônica desse nervo no punho leva à Síndrome do Túnel do Carpo, cursando com dor e parestesia na mão lateral.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_5",
    category: "s2_anatomofisio_1",
    question: "O que são as vértebras cervicais C1 e C2 e quais seus nomes próprios?",
    answer: "• C1 chama-se Atlas (sustenta o crânio e não possui corpo vertebral).\n• C2 chama-se Áxis (possui o processo odontoide, que serve como pivô de rotação para C1).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_6",
    category: "s2_anatomofisio_1",
    question: "Quais ossos compõem a articulação do cotovelo?",
    answer: "O Úmero (extremidade distal), o Rádio (cabeça do rádio) e a Ulna (incisura troclear). É uma articulação em gínglimo (dobradiça).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_7",
    category: "s2_anatomofisio_1",
    question: "Qual músculo é conhecido como o principal extensor do quadril e é ativado fortemente no agachamento profissional?",
    answer: "O Músculo Glúteo Máximo. É o maior músculo do quadril e atua na extensão e rotação lateral da coxa.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_8",
    category: "s4_cinesio",
    question: "O que é o torque em cinesiologia e como ele é calculated?",
    answer: "É a força rotacional gerada ao redor de um eixo articular. É calculado multiplicando a força aplicada pela distância perpendicular do eixo ao vetor de força (braço de momento).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_9",
    category: "s4_cinesio",
    question: "O que diz a Lei de Starling aplicada ao comprimento-tensão muscular?",
    answer: "A força da contração muscular depende do comprimento inicial da fibra. Há um comprimento ideal onde a sobreposição dos filamentos de actina e miosina é máxima, gerando maior força.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_10",
    category: "s4_cinesio",
    question: "Qual é a função cinesiológica do Músculo Serrátil Anterior na escápula?",
    answer: "Ele realiza a abdução (protração) e rotação superior da escápula, mantendo-a firme contra a grade costal para evitar a 'escápula alada'.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_11",
    category: "s4_cinesio",
    question: "O que é o movimento de pronação e supinação do antebraço cinesiologicamente?",
    answer: "• Supinação: Rotação lateral do antebraço, voltando a palma da mão para cima/frente.\n• Pronação: Rotação medial do antebraço, voltando a palma da mão para baixo/trás.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_12",
    category: "s4_cinesio",
    question: "Qual a diferença entre agonista, antagonista e sinergista em um movimento?",
    answer: "• Agonista: Músculo principal que realiza o movimento.\n• Antagonista: Músculo que se opõe ao movimento do agonista (se alonga ou contrai excentricamente).\n• Sinergista: Auxilia o agonista ou estabiliza a articulação.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_13",
    category: "s4_cinesio",
    question: "O que é o ritmo escapuloumeral no movimento de abdução do ombro?",
    answer: "É a relação de movimento coordenada entre a articulação glenoumeral e escapulotorácica. Para cada 2° de abdução do ombro, a escápula rotaciona superiormente 1° (proporção de 2:1).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_14",
    category: "s4_avaliacao",
    question: "O que é o Teste de Lachman e qual ligamento ele avalia?",
    answer: "É considerado o teste manual mais sensível para avaliar a integridade do Ligamento Cruzado Anterior (LCA). É realizado com o joelho flexionado a 20°-30°.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_15",
    category: "s4_avaliacao",
    question: "Para que serve o Teste de Finkelstein e qual patologia ele diagnostica?",
    answer: "Diagnostica a Tenossinovite de De Quervain. Consiste em desviar o punho ulnarmente com o polegar fletido sob os outros dedos. Dor na bainha tendínea lateral é positiva.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_16",
    category: "s4_avaliacao",
    question: "O que avalia o Teste de Thomas e como ele é executado?",
    answer: "Avalia o encurtamento dos flexores do quadril (principalmente Iliopsoas e Reto Femoral). Paciente abraça um joelho contra o peito na maca; se a outra coxa se elevar da maca, o teste é positivo.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_17",
    category: "s4_avaliacao",
    question: "O que é o Teste de Patrick-Fabere e qual região ele estressa?",
    answer: "Estressa a articulação sacroilíaca e o quadril. O paciente posiciona o pé do lado avaliado sobre o joelho oposto (formando um '4') e o examinador pressiona o joelho para baixo.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_18",
    category: "s4_avaliacao",
    question: "O que indica o Sinal de Trendelenburg e qual músculo apresenta fraqueza?",
    answer: "Indica fraqueza do Músculo Glúteo Médio do lado de apoio. Ao ficar em apoio unipodal, a pelve do lado suspenso cai devido à incapacidade do glúteo médio de estabilizar o quadril.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_new_19",
    category: "s4_avaliacao",
    question: "Qual a utilidade do Teste de Cozen na avaliação clínica do cotovelo?",
    answer: "Avalia a presença de Epicondilite Lateral (epicondilalgia lateral). O teste é positivo se o paciente referir dor no epicôndilo lateral ao estender o punho contra a resistência do examinador.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_1",
    category: "s1_perspectivas",
    question: "O que representam os '3 As' fundamentais para a construção do Projeto de Vida?",
    answer: "Autoconhecimento (entender seus valores e missão), Autorresponsabilidade (saber que você cria sua realidade) e Autodisciplina (consistência nas ações).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_2",
    category: "s1_perspectivas",
    question: "Qual é a principal diferença conceitual entre Sucesso e Prosperidade?",
    answer: "Sucesso refere-se à conquista de uma meta final específica (geralmente material). Prosperidade é a satisfação de progredir constantemente nas diversas áreas da vida.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_3",
    category: "s1_perspectivas",
    question: "Quais são as 4 atitudes sabotadoras que a Autorresponsabilidade nos ensina a evitar?",
    answer: "Não condenar, não criticar (os outros de forma destrutiva), não justificar os próprios erros e não se queixar (reclamar).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_4",
    category: "s1_perspectivas",
    question: "O que avalia o pilar 'Espiritualidade' na ferramenta da Roda da Vida?",
    answer: "O relacionamento com a fé, meditação, gratidão ou qualquer prática que promova um senso de conexão profunda e propósito existencial.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_5",
    category: "s1_perspectivas",
    question: "O que significa o conceito de Personal Branding na era digital?",
    answer: "A gestão estratégica da marca pessoal, destacando competências, soft skills e valores únicos para se posicionar com autoridade no mercado.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_6",
    category: "s1_biosseguranca",
    question: "Como a NR 32 regulamenta o uso de adornos pessoais pelos profissionais de saúde?",
    answer: "É proibido o uso de adornos (relógios, anéis, pulseiras, brincos grandes) nos postos de trabalho para evitar o acúmulo de microrganismos sob eles.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_7",
    category: "s1_biosseguranca",
    question: "Quais são as classes de Resíduos de Serviços de Saúde (RSS) e o que representam?",
    answer: "Grupo A: Infectantes. Grupo B: Químicos. Grupo C: Radioativos. Grupo D: Comuns (não perigosos). Grupo E: Perfurocortantes.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_8",
    category: "s1_biosseguranca",
    question: "Quais os limites e condutas corretas no descarte de resíduos do Grupo E (perfurocortantes)?",
    answer: "Devem ser descartados em caixas rígidas específicas (como Descarpack) no local de uso, nunca excedendo o limite de preenchimento de 3/4 da caixa.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_9",
    category: "s1_biosseguranca",
    question: "No Mapa de Risco, quais cores representam os riscos Físico, Químico e Biológico?",
    answer: "Verde para riscos Físicos, Vermelho para riscos Químicos e Marrom para riscos Biológicos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_10",
    category: "s1_biosseguranca",
    question: "Qual a principal diferença entre limpeza, desinfecção e esterilização?",
    answer: "Limpeza remove a sujeira visível. Desinfecção elimina a maioria dos germes patogênicos (exceto esporos). Esterilização destrói toda forma de vida microbiana.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_11",
    category: "s1_saude_coletiva",
    question: "Quais são os três princípios doutrinários do SUS descritos na Lei 8.080/90?",
    answer: "Universalidade (acesso para todos), Integralidade (cuidado completo de saúde) e Equidade (distribuição de recursos segundo a necessidade).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_12",
    category: "s1_saude_coletiva",
    question: "Qual foi o papel da 8ª Conferência Nacional de Saúde (1986) para o SUS?",
    answer: "Foi o marco da Reforma Sanitária Brasileira que consolidou a saúde como direito universal e dever do Estado, base para a criação do SUS.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_13",
    category: "s1_saude_coletiva",
    question: "Qual a diferença conceitual entre Saúde Pública e Saúde Coletiva?",
    answer: "Saúde Pública é assistencial, baseada no modelo biomédico estatal. Saúde Coletiva é interdisciplinar, focada nos determinantes sociais de saúde.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_14",
    category: "s1_saude_coletiva",
    question: "O que é a Estratégia Saúde da Família (ESF) no SUS?",
    answer: "É o modelo prioritário da Atenção Primária, que atua com equipes multiprofissionais em territórios específicos para promover prevenção e vínculo comunitário.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_15",
    category: "s1_saude_coletiva",
    question: "O que avaliam os sistemas SINASC e SIM no planejamento de saúde?",
    answer: "SINASC monitora os nascidos vivos (taxa de natalidade, peso ao nascer); SIM monitora a mortalidade (causas e taxas de óbitos no país).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_16",
    category: "s1_epidemiologia",
    question: "O que é um Estudo de Coorte e qual sua principal característica temporal?",
    answer: "É um estudo observacional longitudinal prospectivo, onde acompanha-se um grupo exposto e outro não exposto no tempo para ver quem adoece.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_17",
    category: "s1_epidemiologia",
    question: "O que define um Estudo de Caso-Controle?",
    answer: "Estudo observacional retrospectivo que parte de doentes (casos) e saudáveis (controles) investigando exposições passadas a fatores de risco.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_18",
    category: "s1_epidemiologia",
    question: "O que é a 'Tripla Carga de Doenças' enfrentada no cenário brasileiro?",
    answer: "A coexistência de doenças transmissíveis, avanço de doenças crônico-degenerativas (envelhecimento) e alta taxa de traumas por causas externas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_19",
    category: "s1_epidemiologia",
    question: "Qual a diferença matemática entre Incidência e Prevalência?",
    answer: "Incidência calcula os novos casos da doença em um período. Prevalência calcula a totalidade de casos (novos e antigos) num determinado momento.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_20",
    category: "s1_epidemiologia",
    question: "O que é o sistema SINAN do Ministério da Saúde?",
    answer: "Sistema de Informação de Agravos de Notificação, que registra doenças de notificação compulsória para ações de controle epidemiológico rápido.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_21",
    category: "s1_exp_prof",
    question: "O que difere as Hard Skills das Soft Skills na atuação clínica?",
    answer: "Hard Skills são competências técnicas (ex: goniometria, reabilitação). Soft Skills são habilidades comportamentais (ex: empatia, escuta ativa).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_22",
    category: "s1_exp_prof",
    question: "Qual a função do conselho de ética COFFITO na Fisioterapia?",
    answer: "É o Conselho Federal que dita o código de ética profissional, regulamenta as especialidades e zela pelo bom exercício da fisioterapia no país.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_23",
    category: "s1_exp_prof",
    question: "O que é a Educação Continuada e por que ela é importante na saúde?",
    answer: "É o aprimoramento profissional constante por meio de pós-graduações, cursos e leitura científica para manter a conduta clínica atualizada.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_24",
    category: "s1_exp_prof",
    question: "O que significa 'resolubilidade clínica' na prática da fisioterapia?",
    answer: "A capacidade de responder de forma efetiva às queixas do paciente, resultando em alívio da dor, reabilitação e ganho funcional real.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem1_25",
    category: "s1_exp_prof",
    question: "Como a ética profissional orienta a divulgação de dados do paciente em redes sociais?",
    answer: "É terminantemente proibido expor a identidade, imagem ou dados de evolução do paciente sem autorização explícita e desrespeitando o sigilo profissional.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_1",
    category: "s2_prod_conhecimento",
    question: "Qual é a etapa inicial obrigatória do método científico para o desenvolvimento de uma pesquisa clínica?",
    answer: "A observação de um fenômeno ou problema e a formulação de uma pergunta de pesquisa clara.\n\nExplicação: Toda investigação científica começa com a observação minuciosa e a definição precisa de uma dúvida ou problema a ser investigado, estruturado na forma de uma pergunta científica clara.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_2",
    category: "s2_prod_conhecimento",
    question: "Na metodologia de pesquisa acadêmica, qual a diferença entre pesquisa qualitativa e quantitativa?",
    answer: "A pesquisa quantitativa avalia dados numéricos e métricas estatísticas; a qualitativa foca na compreensão profunda de percepções, significados e relatos subjetivos.\n\nExplicação: Estudos quantitativos coletam dados empíricos passíveis de análise estatística, enquanto estudos qualitativos focam na subjetividade, buscando entender crenças, comportamentos e contextos sociais.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_3",
    category: "s2_prod_conhecimento",
    question: "A apropriação inadequada de ideias, formulações ou trechos escritos de outro autor sem a devida citação e referência é classificada como:",
    answer: "Plágio, constituindo grave infração ética e legal.\n\nExplicação: O plágio ocorre quando se apresenta a autoria de ideias ou textos de outrem como se fossem originais do autor da pesquisa, violando preceitos éticos acadêmicos e leis de direitos autorais.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_4",
    category: "s2_prod_conhecimento",
    question: "Ao redigir um projeto de pesquisa, a definição provisória de uma resposta esperada para a pergunta científica do estudo é denominada:",
    answer: "Hipótese de pesquisa\n\nExplicação: A hipótese é uma proposição testável e lógica formulada pelo pesquisador como resposta preliminar ao problema sugerido, cuja validação se dá por meio da coleta e análise dos dados.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_5",
    category: "s2_prod_conhecimento",
    question: "Qual das seguintes ferramentas digitais é considerada uma base de dados científica internacional de excelência para busca de artigos na área da saúde?",
    answer: "PubMed (Medline)\n\nExplicação: O PubMed é a base de dados mantida pela Biblioteca Nacional de Medicina dos EUA (NLM), indexando as principais publicações médicas internacionais revisadas por pares, sendo padrão-ouro na área da saúde.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_6",
    category: "s2_bioquimica",
    question: "Qual é a principal molécula transportadora e armazenadora de energia química livre utilizada pelas células para realizar trabalho mecânico?",
    answer: "Adenosina Trifosfato (ATP)\n\nExplicação: O ATP é a 'moeda energética' da célula. A clivagem de suas ligações de alta energia (liberando fosfato e gerando ADP) fornece a energia necessária para processos celulares, inclusive a contração muscular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_7",
    category: "s2_bioquimica",
    question: "Durante a via da glicólise anaeróbica (ausência de oxigênio suficiente no tecido muscular), qual metabólito final é acumulado na célula?",
    answer: "Lactato\n\nExplicação: Na ausência de oxigênio adequado ou sob taxas elevadas de esforço, o piruvato gerado pela glicólise é reduzido a lactato no citosol celular pela enzima lactato desidrogenase, regenerando o NAD+ necessário para manter a glicólise ativa.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_8",
    category: "s2_bioquimica",
    question: "As enzimas atuam como catalisadores biológicos nos processos celulares. A sua principal função cinética é:",
    answer: "Diminuir a energia de ativação, acelerando consideravelmente a velocidade da reação.\n\nExplicação: Enzimas são proteínas funcionais que diminuem o limiar de energia requerido para que os reagentes alcancem o estado de transição, aumentando drasticamente a velocidade das reações metabólicas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_9",
    category: "s2_bioquimica",
    question: "O Ciclo de Krebs (Ciclo do Ácido Cítrico) ocorre em qual compartimento da célula eucariótica?",
    answer: "Matriz mitocondrial\n\nExplicação: O Ciclo de Krebs é uma via metabólica oxidativa aeróbica que ocorre exclusivamente no interior da matriz mitocondrial, onde converte grupos acetil da acetil-CoA em CO2, gerando NADH, FADH2 e GTP/ATP.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_10",
    category: "s2_bioquimica",
    question: "Para atividades de altíssima intensidade e curtíssima duração (ex: corrida de 100m ou levantamento de peso), o sistema energético muscular predominante de ressíntese rápida de ATP é:",
    answer: "Sistema dos Fosfagênios (ATP-CP ou Creatina Fosfato)\n\nExplicação: O sistema ATP-CP (anaeróbico alático) utiliza as reservas de creatina fosfato pré-existentes na célula muscular para doar um grupo fosfato ao ADP de forma imediata e rápida, sustentando contrações de máxima potência por cerca de 8 a 10 segundos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_11",
    category: "s2_anatomofisio_1",
    question: "Qual é a camada mais externa e avascular do sistema tegumentar, composta por epitélio queratinizado?",
    answer: "Epiderme\n\nExplicação: A epiderme é a camada superficial da pele, composta por epitélio pavimentoso estratificado queratinizado. Não possui vasos sanguíneos próprios, sendo nutrida por difusão a partir da derme subjacente.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_12",
    category: "s2_anatomofisio_1",
    question: "Qual é a menor unidade funcional e contrátil da fibra muscular esquelética, delimitada entre duas linhas Z consecutivas?",
    answer: "Sarcômero\n\nExplicação: O sarcômero é a unidade funcional da contração muscular, contendo filamentos finos (actina) e grossos (miosina) que se deslizam mutuamente após o influxo de cálcio intracelular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_13",
    category: "s2_anatomofisio_1",
    question: "No tecido ósseo, as células gigantes multinucleadas responsáveis pela reabsorção da matriz óssea mineralizada e remodelação óssea contínua são os:",
    answer: "Osteoclastos\n\nExplicação: Os osteoclastos reabsorvem o tecido ósseo degradando a matriz mineral com ácidos e enzimas. Trabalham em equilíbrio com os osteoblastos (responsáveis pela síntese e deposição de osso novo) na remodelação óssea.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_14",
    category: "s2_anatomofisio_1",
    question: "Quais estruturas anatômicas compõem o Sistema Nervoso Central (SNC) dos vertebrados?",
    answer: "Encéfalo e medula espinhal\n\nExplicação: O SNC compreende a porção do sistema nervoso protegida pelo esqueleto axial (crânio e coluna vertebral), sendo constituído pelo encéfalo e pela medula espinhal.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_15",
    category: "s2_anatomofisio_1",
    question: "Na sinapse química da junção neuromuscular, qual neurotransmissor é liberado pelo terminal axônico para despolarizar a membrana da fibra muscular?",
    answer: "Acetilcolina (ACh)\n\nExplicação: A acetilcolina é o neurotransmissor exclusivo da placa motora somática. Sua liberação e ligação aos receptores nicotínicos pós-sinápticos geram influxo de sódio, desencadeando o potencial de ação muscular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_16",
    category: "s2_anatomofisio_2",
    question: "Em qual órgão do sistema digestório ocorre a maior parte da digestão enzimática e da absorção de nutrientes?",
    answer: "Intestino Delgado\n\nExplicação: O intestino delgado (duodeno, jejuno e íleo) possui dobras circulares, vilosidades e microvilosidades que ampliam a área de superfície, sendo o local onde ocorre a digestão final e absorção da maioria dos nutrientes.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_17",
    category: "s2_anatomofisio_2",
    question: "Qual hormônio hipoglicemiante é sintetizado e secretado pelas células beta dos ilhotas pancreáticas?",
    answer: "Insulina\n\nExplicação: A insulina é o único hormônio hipoglicemiante do corpo. Promove a captação de glicose circulante pelos tecidos (principalmente muscular e adiposo) e induz a síntese de glicogênio hepático.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_18",
    category: "s2_anatomofisio_2",
    question: "Qual é a unidade funcional dos rins responsável pela filtração do sangue, reabsorção de água e secreção de eletrólitos para a formação da urina?",
    answer: "Néfron\n\nExplicação: Cada rim possui cerca de 1 milhão de néfrons. O néfron é a unidade morfofuncional renal, composto pelo corpúsculo renal (filtração) e pelo sistema tubular (reabsorção e secreção).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_19",
    category: "s2_anatomofisio_2",
    question: "Qual a principal função do Hormônio Antidiurético (ADH ou Vasopressina) no sistema renal?",
    answer: "Aumentar a permeabilidade à água nos ductos coletores renais, promovendo reabsorção hídrica e concentrando a urina.\n\nExplicação: Secretado pela neuro-hipófise, o ADH atua nos túbulos contorcidos distais e ductos coletores renais abrindo canais de aquaporina, favorecendo a reabsorção de água livre para o sangue e reduzindo o volume urinário.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_20",
    category: "s2_anatomofisio_2",
    question: "Qual glândula do sistema endócrino é denominada 'glândula mestra' por controlar e secretar hormônios trópicos que regulam outras glândulas periféricas?",
    answer: "Hipófise (Glândula Pituitária)\n\nExplicação: A hipófise controla a atividade secretora da tireoide, córtex suprarrenal e gônadas através de seus hormônios trópicos (TSH, ACTH, FSH, LH), sob regulação direta do hipotálamo.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_21",
    category: "s2_exp_prof",
    question: "A atuação interdisciplinar do fisioterapeuta em equipes de saúde hospitalar exige cooperação. Qual atitude clínica reflete essa prática?",
    answer: "Discutir o plano terapêutico com enfermeiros, médicos e fonoaudiólogos para integrar os cuidados de reabilitação e otimizar a alta clínica.\n\nExplicação: A interdisciplinaridade exige comunicação ativa e cooperação profissional. Planos integrados e prontuários multiprofissionais diminuem intercorrências e aceleram a recuperação do paciente.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_22",
    category: "s2_exp_prof",
    question: "Diante de um paciente com queixas vagas de dor crônica que não responde às condutas físicas e demonstra sinais de depressão profunda, qual a conduta adequada?",
    answer: "Acolher o paciente e sugerir o encaminhamento ético para avaliação psicológica ou psiquiátrica em equipe.\n\nExplicação: O fisioterapeuta atua dentro do modelo biopsicossocial. Identificar demandas emocionais e encaminhar o paciente aos profissionais competentes (como psicólogos) é dever ético e clínico.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_23",
    category: "s2_exp_prof",
    question: "Em termos de biossegurança e postura profissional contemporânea, qual a orientação sobre unhas e adornos na clínica de fisioterapia?",
    answer: "Unhas devem ser mantidas curtas, limpas e sem adornos nas mãos/pulsos para garantir eficácia na higienização e evitar lesões na pele do paciente.\n\nExplicação: Unhas curtas e ausência de adornos (relógios, anéis) previnem arranhões durante manobras de terapia manual e eliminam fômites difíceis de desinfetar, conforme preconiza a NR 32.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_24",
    category: "s2_exp_prof",
    question: "Ao registrar a evolução diária de um atendimento em Fisioterapia, qual elemento é indispensável por exigência legal e do prontuário ético?",
    answer: "A descrição das técnicas aplicadas, parâmetros utilizados, resposta clínica imediata, data, carimbo com registro CREFITO e assinatura.\n\nExplicação: O registro detalhado da evolução em prontuário é um documento legal que atesta a assistência realizada, devendo ser datado, assinado e carimbado com o número de inscrição regional do profissional.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem2_25",
    category: "s2_exp_prof",
    question: "O termo 'Prática Baseada em Evidências' (PBE) na fisioterapia moderna define a tomada de decisão clínica fundamentada em:",
    answer: "Integração da melhor evidência científica disponível com a expertise do clínico e os valores/preferências do paciente.\n\nExplicação: A PBE não se baseia apenas em artigos acadêmicos isolados, mas sim no tripé: evidências científicas de alta qualidade, julgamento profissional do terapeuta e a individualidade/desejo do paciente.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_1",
    category: "s3_empreendedorismo",
    question: "No planejamento estratégico de uma clínica de Fisioterapia, o quadro visual Canvas é útil porque:",
    answer: "Permite estruturar e visualizar em um único painel os eixos de valor, clientes, parceiros, recursos e canais do negócio.\n\nExplicação: O Business Model Canvas é uma ferramenta de gestão estratégica para esboçar e testar modelos de negócios de forma dinâmica e colaborativa, otimizando o planejamento de consultórios e clínicas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_2",
    category: "s3_empreendedorismo",
    question: "Qual ferramenta financeira gerencial monitora detalhadamente as entradas (receitas) e saídas (despesas) de dinheiro em uma clínica em um dado período?",
    answer: "Fluxo de Caixa\n\nExplicação: O fluxo de caixa registra de forma operacional todas as movimentações financeiras, permitindo ao gestor prever sobras ou faltas de caixa e tomar decisões de curto prazo de forma segura.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_3",
    category: "s3_empreendedorismo",
    question: "A criação de um protótipo simplificado de serviço clínico para testar sua aceitação no mercado com o menor custo possível é denominada:",
    answer: "Mínimo Produto Viável (MVP)\n\nExplicação: O MVP permite testar as hipóteses de um novo negócio ou serviço real diretamente com os clientes, exigindo o mínimo de esforço de desenvolvimento e recursos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_4",
    category: "s3_empreendedorismo",
    question: "Como a clínica de Fisioterapia pode utilizar o marketing de relacionamento de forma ética?",
    answer: "Criando canais de comunicação com informativos preventivos de saúde e prestando assistência pós-alta para fidelizar e cuidar do paciente.\n\nExplicação: O marketing de relacionamento na saúde foca na satisfação e no valor percebido pelo paciente por meio da informação ética e cuidado continuado, respeitando as normas dos conselhos profissionais.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_5",
    category: "s3_empreendedorismo",
    question: "Custos fixos de um consultório de Fisioterapia são aqueles que:",
    answer: "Permanecem constantes independentemente do volume de atendimentos (ex: aluguel e assinatura de softwares de gestão).\n\nExplicação: Custos fixos não dependem da produtividade mensal da clínica (ex: aluguel do espaço físico, contas de internet). Devem ser pagos mesmo se o consultório não realizar atendimentos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_6",
    category: "s3_movimento",
    question: "O plano sagital divide o corpo humano em partes:",
    answer: "Direita e esquerda\n\nExplicação: O plano sagital (ou mediano) corta o corpo de forma anteroposterior, dividindo-o em metades direita e esquerda. Movimentos como flexão e extensão ocorrem neste plano.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_7",
    category: "s3_movimento",
    question: "Os movimentos corporais de Abdução e Adução (como os do ombro ou quadril) ocorrem em qual plano anatômico e em torno de qual eixo?",
    answer: "Plano frontal (coronal) e eixo anteroposterior\n\nExplicação: A abdução (afastamento da linha média) e adução (aproximação da linha média) ocorrem no plano frontal, que divide o corpo em anterior/posterior, girando ao redor de um eixo anteroposterior.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_8",
    category: "s3_movimento",
    question: "No corpo humano, o sistema neuromuscular funciona por alavancas biomecânicas. Uma alavanca onde a força potente (inserção muscular) situa-se entre o ponto de apoio (articulação) e a força resistente (peso do segmento ou carga externa) é denominada:",
    answer: "Alavanca de Terceira Classe (Interpotente)\n\nExplicação: A maioria das articulações do corpo atua como alavanca interpotente (ex: flexão do cotovelo pelo bíceps braquial). Elas priorizam a velocidade e a amplitude de movimento em detrimento da vantagem mecânica de força.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_9",
    category: "s3_movimento",
    question: "Os músculos que auxiliam indiretamente o músculo motor primário (agonista) a realizar um movimento, estabilizando articulações adjacentes ou refinando a trajetória do movimento, são os:",
    answer: "Sinergistas\n\nExplicação: Os sinergistas atuam em conjunto com os agonistas para que o movimento ocorra sem desvios indesejados, agindo como neutralizadores ou estabilizadores da mecânica articular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_10",
    category: "s3_movimento",
    question: "Um exercício de flexão de braço no solo (apoio de frente), onde o segmento distal (mãos) permanece fixo em contato com uma superfície de suporte estável e os segmentos proximais se movem, caracteriza um exercício de:",
    answer: "Cadeia Cinética Fechada (CCF)\n\nExplicação: Nos exercícios em Cadeia Cinética Fechada (CCF), o segmento distal (mão/pé) está fixado a uma superfície inamovível, e o movimento ocorre com translação dos segmentos proximais, promovendo co-contração articular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_11",
    category: "s3_fundamentos_etica",
    question: "Em qual ano e por meio de qual veículo normativo a profissão de Fisioterapeuta foi regulamentada em lei nacional no Brasil?",
    answer: "1969, pelo Decreto-Lei nº 938\n\nExplicação: O Decreto-Lei nº 938, de 13 de outubro de 1969, proveu a regulamentação profissional conjunta das atividades de Fisioterapia e Terapia Ocupacional em território nacional.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_12",
    category: "s3_fundamentos_etica",
    question: "A autarquia federal de direito público responsável por normatizar, fiscalizar o exercício ético da Fisioterapia e julgar recursos éticos em segunda instância no Brasil é o:",
    answer: "COFFITO\n\nExplicação: O COFFITO (Conselho Federal) é o órgão central de regulamentação ética nacional, enquanto os CREFITOs (Conselhos Regionais) executam a fiscalização direta nas respectivas jurisdições regionais.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_13",
    category: "s3_fundamentos_etica",
    question: "De acordo com o Código de Ética da Fisioterapia, o profissional que prescreve tratamento físico a um paciente sem realizar uma avaliação clínica prévia comete:",
    answer: "Infração ética grave, pois a avaliação diagnóstica funcional é prerrogativa obrigatória e anterior a qualquer conduta terapêutica.\n\nExplicação: Avaliar o paciente, determinar o diagnóstico funcional e estruturar o plano terapêutico antes de aplicar qualquer técnica é um dever ético fundamental. Prescrever condutas sem avaliação prévia é proibido.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_14",
    category: "s3_fundamentos_etica",
    question: "Em relação à recusa de atendimento, o fisioterapeuta tem o direito ético de negar assistência em qual situação?",
    answer: "Quando o local de trabalho não oferecer condições seguras e dignas de atendimento ou expuser o profissional a riscos injustificados.\n\nExplicação: O código de ética garante a autonomia técnica do fisioterapeuta, permitindo recusar a prestação de serviços se as condições de trabalho forem degradantes, inseguras ou prejudiciais à dignidade humana.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_15",
    category: "s3_fundamentos_etica",
    question: "Qual a obrigatoriedade legal e ética do fisioterapeuta em relação ao sigilo das informações obtidas no exercício profissional?",
    answer: "É dever absoluto zelar pelo sigilo das informações e prontuários do paciente, só podendo revelá-los mediante autorização expressa do paciente ou por determinação legal judicial.\n\nExplicação: O sigilo profissional protege a privacidade do paciente. Revelar fatos sigilosos sem justa causa (ex: consentimento do paciente ou ordem de juiz) é crime previsto no Código Penal e infração ética grave.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_16",
    category: "s3_fisiopatologia",
    question: "Os cinco sinais cardinais da inflamação aguda tecidual local, decorrentes de alterações vasculares e liberação de mediadores químicos, são:",
    answer: "Calor, rubor, tumor (edema), dor e perda de função.\n\nExplicação: A inflamação aguda cursa com vasodilatação (calor e rubor), aumento de permeabilidade vascular com extravasamento de líquido (tumor/edema), compressão de terminações nervosas livres (dor) e limitação funcional (perda de função).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_17",
    category: "s3_fisiopatologia",
    question: "A resposta adaptativa celular caracterizada pelo aumento do volume das células e, consequentemente, do tamanho do órgão, sem multiplicação celular, é denominada:",
    answer: "Hipertrofia\n\nExplicação: A hipertrofia ocorre pelo aumento na síntese de proteínas estruturais e organelas celulares em resposta a estímulos fisiológicos (ex: musculação) ou patológicos (ex: miocárdio na hipertensão).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_18",
    category: "s3_fisiopatologia",
    question: "A morte celular programada, caracterizada por um processo ativo regulado geneticamente que não gera processo inflamatório ao redor, denomina-se:",
    answer: "Apoptose\n\nExplicação: A apoptose é uma morte celular organizada (ou suicídio celular) que envolve fragmentação do DNA e formação de corpos apoptóticos fagocitados sem liberação de citocinas inflamatórias, ao contrário da necrose.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_19",
    category: "s3_fisiopatologia",
    question: "Qual alteração fisiopatológica promove a formação de edema generalizado (anasarca) em pacientes com insuficiência hepática ou desnutrição grave?",
    answer: "Diminuição da pressão coloidosmótica (oncótica) plasmática por redução da síntese de albumina.\n\nExplicação: A albumina produzida no fígado é o principal determinante da pressão oncótica plasmática, que retém líquido dentro dos vasos. Sua queda causa extravasamento hídrico generalizado para o espaço intersticial.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_20",
    category: "s3_fisiopatologia",
    question: "A cicatrização de feridas por segunda intenção difere da cicatrização por primeira intenção por apresentar:",
    answer: "Grande perda tecidual, exigindo maior deposição de tecido de granulação e contração da ferida liderada por miofibroblastos.\n\nExplicação: Feridas abertas com bordas não aproximadas cicatrizam por segunda intenção. O processo é lento, com proliferação abundante de tecido conjuntivo jovem (granulação) e posterior retração cicatricial.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_21",
    category: "s3_exp_prof",
    question: "A atuação do fisioterapeuta nos Núcleos de Apoio à Saúde da Família (NASF) é norteada pelo princípio do apoio matricial. Esse princípio consiste em:",
    answer: "Prestar retaguarda assistencial e pedagógica compartilhada às equipes de Saúde da Família, promovendo ações coletivas, prevenção e visitas domiciliares conjuntas.\n\nExplicação: O apoio matricial no NASF visa ampliar a resolubilidade da atenção básica, capacitando e discutindo casos com a equipe da ESF, além de criar estratégias de saúde coletiva.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_22",
    category: "s3_exp_prof",
    question: "Em uma visita domiciliar da ESF, o fisioterapeuta identifica um paciente sequelado de AVC acamado com alto risco de escaras (lesões por pressão). Qual a conduta preventiva imediata recomendada?",
    answer: "Orientar os cuidadores/familiares sobre a mudança de decúbito (posicionamento na maca) a cada 2 horas e hidratação da pele.\n\nExplicação: Mudar a postura do paciente acamado a cada duas horas alivia a isquemia mecânica local sobre as proeminências ósseas, sendo a medida não invasiva mais eficaz contra escaras.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_23",
    category: "s3_exp_prof",
    question: "Qual indicador de saúde é prioritário para orientar ações de fisioterapia preventiva em grupos de convivência de idosos na atenção primária?",
    answer: "Incidência de quedas domésticas e prevalência de artrose na comunidade avaliada.\n\nExplicação: Mapear as quedas e restrições articulares nos idosos permite ao fisioterapeuta focar suas ações coletivas em exercícios de equilíbrio e fortalecimento motor na comunidade.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_24",
    category: "s3_exp_prof",
    question: "Na atenção básica, as ações educativas conduzidas pelo fisioterapeuta em grupos de gestantes visam principalmente prevenir:",
    answer: "Queixas de dor lombar crônica e disfunções do assoalho pélvico, promovendo orientações ergonômicas e exercícios físicos adaptados.\n\nExplicação: Orientar sobre a postura adequada, alongamentos e ativação do core/assoalho pélvico previne a dor musculoesquelética comum na gestação devido às mudanças gravídicas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem3_25",
    category: "s3_exp_prof",
    question: "Qual atitude demonstra a diretriz de Participação Popular/Controle Social do SUS no âmbito do município?",
    answer: "A participação ativa em Conselhos Municipais de Saúde para votar e fiscalizar a aplicação de recursos e metas de atendimento da saúde.\n\nExplicação: Os Conselhos de Saúde são instâncias colegiadas permanentes com representação de usuários, trabalhadores e gestores, garantindo a gestão democrática do SUS.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_1",
    category: "s4_farmaco",
    question: "Os Anti-inflamatórios Não Esteroidais (AINEs) agem inibindo as enzimas ciclooxigenases (COX). A inibição da COX-1 constitutiva comumente gera qual efeito adverso?",
    answer: "Irritação e úlceras na mucosa gástrica\n\nExplicação: A COX-1 é responsável pela síntese de prostaglandinas que protegem a mucosa gástrica e regulam o fluxo sanguíneo renal. Sua inibição crônica expõe o estômago à acidez gástrica, gerando úlceras.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_2",
    category: "s4_farmaco",
    question: "O estudo da farmacocinética abrange quatro etapas básicas que descrevem o destino do fármaco no organismo. A ordem correta dessas etapas é:",
    answer: "Absorção, Distribuição, Biotransformação (Metabolismo) e Excreção.\n\nExplicação: A farmacocinética estuda o trânsito da droga desde sua administração (absorção), dispersão pelos tecidos (distribuição), alteração química hepática (biotransformação) e eliminação (excreção).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_3",
    category: "s4_farmaco",
    question: "O uso crônico e prolongado de anti-inflamatórios esteroidais (Corticoides, como Dexametasona e Prednisona) pode induzir qual complicação musculoesquelética importante na clínica?",
    answer: "Osteoporose induzida por corticoides e atrofia muscular por catabolismo proteico\n\nExplicação: Corticoides em altas doses crônicas inibem osteoblastos, reduzem a absorção de cálcio e estimulam o catabolismo de proteínas musculares, levando à osteoporose e fraqueza muscular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_4",
    category: "s4_farmaco",
    question: "A fração de uma dose administrada de fármaco inalterado que atinge a circulação sistêmica e está disponível para exercer efeitos terapêuticos denomina-se:",
    answer: "Biodisponibilidade\n\nExplicação: Drogas injetadas via intravenosa possuem 100% de biodisponibilidade. Já a via oral tem biodisponibilidade menor devido à absorção incompleta e ao metabolismo de primeira passagem no fígado.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_5",
    category: "s4_farmaco",
    question: "Qual grupo de medicamentos, muito utilizado por cardiopatas e hipertensos, exige atenção do fisioterapeuta pois mascara a frequência cardíaca durante o exercício físico?",
    answer: "Beta-bloqueadores (ex: Atenolol, Propranolol)\n\nExplicação: Os beta-bloqueadores antagonizam receptores beta-1 cardíacos, atenuando a resposta de elevação da frequência cardíaca e pressão arterial ao esforço. Recomenda-se usar a Escala de Borg (esforço percebido) para avaliar a intensidade do exercício nesses pacientes.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_6",
    category: "s4_cinesio",
    question: "Na reabilitação física, os exercícios que utilizam contrações musculares nas quais a tensão gerada permanece constante enquanto o comprimento muscular varia são classificados como:",
    answer: "Exercícios isotônicos (excêntricos ou concêntricos)\n\nExplicação: Os exercícios isotônicos envolvem movimento articular com o músculo variando seu comprimento sob tensão, podendo ser concêntricos (encurtamento) ou excêntricos (alongamento controlado).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_7",
    category: "s4_cinesio",
    question: "Qual alteração fisiológica ocorre na estrutura dos sarcômeros em resposta a um protocolo crônico de alongamento muscular estático?",
    answer: "Aumento do número de sarcômeros em série no final das fibras musculares.\n\nExplicação: O alongamento mantido e repetitivo induz a adição de sarcômeros em série na junção miotendínea como adaptação mecânica para tolerar maiores comprimentos de repouso.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_8",
    category: "s4_cinesio",
    question: "Os exercícios pendulares de Codman são técnicas cinesioterapêuticas indicadas principalmente na fase inicial de reabilitação do ombro para:",
    answer: "Promover tração e oscilação suave da cabeça umeral, aliviando a dor e mantendo a mobilidade da articulação glenoumeral.\n\nExplicação: Os exercícios de Codman utilizam a força da gravidade e a inércia em movimentos pendulares de tronco flexionado. Isso induz distração da glenoumeral por forças de tração suaves e oscilação sem ativação muscular dolorosa.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_9",
    category: "s4_cinesio",
    question: "Qual o principal receptor sensorial muscular responsável pelo reflexo miotático de estiramento, protegendo o músculo contra alongamentos rápidos excessivos?",
    answer: "Fuso Neuromuscular\n\nExplicação: O fuso neuromuscular monitora a velocidade e a variação do comprimento muscular. Alongamentos rápidos ativam o fuso, que dispara uma resposta reflexa de contração (reflexo de estiramento).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_10",
    category: "s4_cinesio",
    question: "A técnica de facilitação neuromuscular proprioceptiva (FNP) baseada no princípio de 'contrair-relaxar' baseia-se em qual fenômeno neurofisiológico?",
    answer: "Inibição autógena (via ativação do OTG durante a contração isométrica máxima)\n\nExplicação: Ao realizar uma contração isométrica máxima do músculo alvo antes de alongá-lo, ativa-se o Órgão Tendinoso de Golgi (OTG). Isso induz relaxamento reflexo (inibição autógena), facilitando o ganho de flexibilidade subsequente.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_11",
    category: "s4_eletro",
    question: "Qual das seguintes parametrizações de ultrassom terapêutico é indicada para induzir efeitos predominantemente não térmicos (mecânicos/cavitacionais), ideais para processos inflamatórios agudos?",
    answer: "Ultrassom pulsado (ciclo de trabalho de 20%) a 0,5 W/cm²\n\nExplicação: O ultrassom pulsado com baixo ciclo de trabalho (20%) dissipa o calor gerado pela fricção mecânica das ondas, favorecendo apenas microfluxo acústico e cavitação estável para auxiliar a cicatrização aguda.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_12",
    category: "s4_eletro",
    question: "O uso de diatermia por Ondas Curtas ou Micro-ondas exige cuidados rigorosos. Qual é uma contraindicação absoluta para essas modalidades de termoterapia profunda?",
    answer: "Presença de implantes metálicos ou marcapasso cardíaco na região de aplicação.\n\nExplicação: As ondas eletromagnéticas de alta frequência aquecem metais por indução rápida e desregulam dispositivos eletrônicos como marcapassos, com risco iminente de queimadura interna e falha do aparelho.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_13",
    category: "s4_eletro",
    question: "Qual modalidade de corrente elétrica de média frequência utiliza a modulação de correntes alternadas senoidais cruzadas no interior do tecido para reduzir a dor crônica?",
    answer: "Corrente Interferencial (DIF)\n\nExplicação: A corrente interferencial utiliza duas correntes de média frequência com leve defasagem. O cruzamento das ondas gera uma nova corrente de baixa frequência modulada no interior do tecido, diminuindo a resistência da pele.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_14",
    category: "s4_eletro",
    question: "Para tratar um paciente com paralisia facial periférica ou denervação muscular, qual a modalidade de estimulação elétrica indicada?",
    answer: "Corrente Exponencial/Monofásica Pulsada com largura de pulso longa (milissegundos) para despolarizar a fibra muscular diretamente\n\nExplicação: Músculos denervados necessitam de pulsos de longa duração para atingir o limiar de contração da membrana da própria fibra muscular, já que a via nervosa rápida motora foi perdida.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_15",
    category: "s4_eletro",
    question: "Qual o principal efeito fisiológico celular induzido pelo Laser de Baixa Intensidade (LBI - fotobiomodulação) na cicatrização de tecidos moles?",
    answer: "Absorção de fótons por cromóforos mitocondriais (citocromo c oxidase), aumentando a síntese de ATP e acelerando o reparo celular.\n\nExplicação: A irradiação de fótons estimula a atividade enzimática na cadeia respiratória mitocondrial, aumentando o aporte de energia (ATP) disponível para proliferação celular e cicatrização.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_16",
    category: "s4_avaliacao",
    question: "O teste ortopédico especial no qual o examinador posiciona o joelho a 30 graus de flexão e realiza uma translação anterior manual da tíbia é denominado:",
    answer: "Teste de Lachman\n\nExplicação: O teste de Lachman é considerado o teste físico mais acurado e padrão-ouro para detectar lesões do LCA. Sua sensibilidade é maior que a do teste de gaveta anterior clássico realizado a 90 graus.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_17",
    category: "s4_avaliacao",
    question: "A goniometria é um procedimento clínico sistemático de avaliação. Para avaliar a amplitude de flexão do joelho, o goniômetro deve ter seu eixo posicionado sobre:",
    answer: "O epicôndilo lateral do fêmur\n\nExplicação: O epicôndilo lateral do fêmur representa o centro aproximado de rotação articular do joelho, servindo de fulcro para o alinhamento dos braços fixo (fêmur) e móvel (fíbula) do goniômetro.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_18",
    category: "s4_avaliacao",
    question: "Ao avaliar radiografias (Raios-X), tecidos densos como o osso cortical absorvem muita radiação e aparecem em tonalidades brancas no filme. Essa característica é denominada:",
    answer: "Radiopacidade\n\nExplicação: Estruturas densas barram a passagem dos raios-X, impedindo que atinjam o filme fotográfico. São classificadas como radiopacas (brancas). Tecidos aerados como pulmões são radiotransparentes (pretos).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_19",
    category: "s4_avaliacao",
    question: "O teste de Trendelenburg avalia a estabilidade pélvica em apoio unipodal. A queda da pelve do lado sem apoio (oscilante) indica fraqueza de qual músculo estabilizador no quadril de apoio?",
    answer: "Glúteo Médio do membro de apoio\n\nExplicação: O glúteo médio age como abdutor do quadril, mantendo a pelve nivelada durante a marcha. Se houver fraqueza no glúteo médio do lado de apoio, a pelve contralateral desaba durante a fase oscilante.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_20",
    category: "s4_avaliacao",
    question: "O teste de Phalen é um teste provocativo físico amplamente utilizado para triagem de qual patologia ocupacional de compressão nervosa?",
    answer: "Síndrome do Túnel do Carpo (compressão do nervo mediano)\n\nExplicação: O teste de Phalen envolve manter os punhos flexionados encostados pelo dorso por 60 segundos. O surgimento de parestesia nos dedos inervados pelo nervo mediano (polegar, indicador e médio) é indicativo de compressão no canal do carpo.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_21",
    category: "s4_estudo_contemp",
    question: "A transformação digital na saúde introduziu o uso de dispositivos vestíveis (wearables) acoplados ao corpo. Qual sua principal finalidade na cinesioterapia contemporânea?",
    answer: "Monitorar parâmetros biológicos e de movimento (ex: frequência cardíaca, passos, amplitude articular) em tempo real, gerando dados contínuos de evolução.\n\nExplicação: Os wearables integram a internet das coisas (IoT) na saúde, permitindo que clínicos analisem dados reais e objetivos sobre o nível de atividade física diária e reabilitação de seus pacientes.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_22",
    category: "s4_estudo_contemp",
    question: "De acordo com as normativas vigentes dos conselhos profissionais de saúde no Brasil, a prestação de serviços de fisioterapia de forma remota é denominada:",
    answer: "Telessaúde / Teleconsulta em Fisioterapia\n\nExplicação: A telessaúde em Fisioterapia foi normatizada pelo COFFITO permitindo teleconsultas, telemonitoramentos e teleconsultorias, otimizando o acesso de pacientes em áreas remotas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_23",
    category: "s4_estudo_contemp",
    question: "O conceito de Big Data aplicado ao planejamento de políticas públicas de saúde e epidemiologia representa:",
    answer: "A análise computacional avançada de conjuntos massivos de dados digitais complexos de saúde para identificar padrões, surtos e predizer riscos de epidemias.\n\nExplicação: Big Data envolve processar grandes volumes de dados desestruturados de forma rápida, permitindo mapear perfis epidemiológicos regionais detalhados e tendências de morbimortalidade no país.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_24",
    category: "s4_estudo_contemp",
    question: "Para a proteção dos dados dos pacientes coletados em prontuários digitais, qual legislação brasileira estabelece diretrizes e sanções específicas no tratamento dessas informações?",
    answer: "Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)\n\nExplicação: A LGPD regula o tratamento de dados pessoais nos meios digitais e físicos, classificando dados de saúde como sensíveis, exigindo consentimento explícito e segurança de sistemas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_25",
    category: "s4_estudo_contemp",
    question: "O uso de algoritmos de inteligência artificial (IA) na triagem e diagnóstico clínico por imagem atua como:",
    answer: "Uma ferramenta de apoio diagnóstico que identifica anomalias em grandes volumes de imagens com alta sensibilidade, acelerando a decisão do clínico responsável.\n\nExplicação: A IA na imaginologia auxilia os clínicos a identificarem alterações estruturais de forma ágil, mas a responsabilidade do diagnóstico final permanece com o profissional de saúde responsável.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_26",
    category: "s4_exp_prof",
    question: "As Práticas Integrativas e Complementares em Saúde (PICS) no SUS incluem técnicas de Fisioterapia integrativa. Qual dessas práticas é regulamentada para atuação clínica do fisioterapeuta especializado?",
    answer: "Acupuntura e Fitoterapia / Plantas medicinais\n\nExplicação: O COFFITO reconhece a especialidade profissional de Fisioterapia em Acupuntura e Práticas Integrativas, aplicando técnicas como auriculoterapia e fitoterapia no manejo da dor e ansiedade.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_27",
    category: "s4_exp_prof",
    question: "A aplicação clínica da acupuntura baseia-se na inserção de agulhas estéreis em pontos específicos (acupontos). Qual o principal mecanismo fisiológico da acupuntura no controle da dor física?",
    answer: "Estimulação de fibras nervosas aferentes que induz a liberação de opioides endógenos (endorfinas e encefalinas) no sistema nervoso central.\n\nExplicação: A neurofisiologia da acupuntura demonstra que a estimulação mecânica das agulhas ativa vias aferentes aferentes somáticas que sobem à medula e ao cérebro, ativando a via descendente inibidora da dor.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_28",
    category: "s4_exp_prof",
    question: "A auriculoterapia, prática integrativa de micro-sistema, fundamenta-se na estimulação de pontos na orelha. A sua principal vantagem na cinesioterapia clínica é:",
    answer: "Apoiar o manejo de quadros de dor crônica e ansiedade associados, de forma complementar e não invasiva.\n\nExplicação: A estimulação de ramos nervosos auriculares (como ramos do vago e trigêmeo) promove regulação neurovegetativa e modulação da dor, auxiliando a adesão e o conforto no tratamento físico.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_29",
    category: "s4_exp_prof",
    question: "No planejamento de uma sessão que integra cinesioterapia e acupuntura para um paciente com fibromialgia, a conduta recomendada é:",
    answer: "Utilizar a acupuntura para modular a dor e relaxar os tecidos, e em seguida realizar os exercícios terapêuticos de forma confortável.\n\nExplicação: A modulação prévia da dor crônica com PICS reduz a cinesiofobia (medo de se mover) e relaxa o tônus muscular excessivo, permitindo realizar o plano de exercícios terapêuticos com maior eficiência.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem4_30",
    category: "s4_exp_prof",
    question: "O uso de práticas integrativas na reabilitação deve ser conduzido de acordo com qual padrão ético profissional?",
    answer: "De forma complementar à conduta baseada em evidências (cinesioterapia, terapia manual), respeitando a qualificação técnica e a anuência livre do paciente.\n\nExplicação: As PICS servem como adjuvantes e ferramentas integradoras de reabilitação. O fisioterapeuta deve possuir habilitação registrada e integrar essas condutas em prontuário de forma ética.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_1",
    category: "s5_recursos_manuais",
    question: "De acordo com o conceito de mobilização articular de Maitland, o Grau III de aplicação é caracterizado como:",
    answer: "Um movimento oscilatório de grande amplitude que vai até o limite da amplitude de movimento disponível, entrando na resistência tecidual.\n\nExplicação: Os Graus III e IV de Maitland são aplicados contra a resistência do tecido conjuntivo retraído (cápsula articular, ligamentos), sendo as dosagens indicadas para alongar tecidos rígidos e ganhar ADM.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_2",
    category: "s5_recursos_manuais",
    question: "A técnica manual de liberação miofascial tem como alvo estrutural a fáscia profunda. A fáscia é composta principalmente por qual tipo de tecido?",
    answer: "Tecido conjuntivo denso, rico em fibras de colágeno e elastina\n\nExplicação: A fáscia é uma teia tridimensional de tecido conjuntivo colagenoso que envolve músculos, ossos, nervos e órgãos, podendo sofrer restrições e densificações após traumas ou posições mantidas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_3",
    category: "s5_recursos_manuais",
    question: "O que caracteriza clinicamente um Ponto-Gatilho (trigger point) miofascial ativo na palpação muscular?",
    answer: "Um nódulo palpável em uma banda tensa de músculo esquelético que gera dor local e dor referida característica à compressão.\n\nExplicação: Pontos-gatilho são focos de hiperirritabilidade mecânica e acúmulo de metabólitos ácidos em bandas tensas do sarcômero, gerando dor local, referida e espasmo muscular local protetor.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_4",
    category: "s5_recursos_manuais",
    question: "Ao aplicar a massagem terapêutica para promover a drenagem linfática e diminuir o edema periférico, qual a direção correta das manobras manuais?",
    answer: "Manobras suaves, rítmicas e lentas na direção centrípeta (em direção aos linfonodos proximais e ao ducto torácico).\n\nExplicação: A drenagem linfática manual requer pressões leves (para não colapsar os capilares linfáticos superficiais) e sentido centrípeto, facilitando o escoamento da linfa em direção aos linfonodos e circulação venosa.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_5",
    category: "s5_recursos_manuais",
    question: "Qual é a contraindicação clínica absoluta para a aplicação de tração cervical mecânica ou manual na coluna vertebral?",
    answer: "Instabilidade atlantoaxial (comum em pacientes com Artrite Reumatoide) ou fraturas ósseas não consolidadas.\n\nExplicação: A Artrite Reumatoide enfraquece o ligamento transverso do atlas. Aplicar forças de tração nessa região pode causar luxação atlantoaxial, compressão da medula cervical e consequências fatais.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_6",
    category: "s5_fisiologia_ex",
    question: "O Consumo Máximo de Oxigênio (VO2 máx) é considerado o melhor índice de avaliação de qual sistema?",
    answer: "Do sistema de transporte de oxigênio e aptidão cardiorrespiratória global.\n\nExplicação: O VO2 máx reflete a capacidade integrada dos pulmões, coração, vasos sanguíneos e músculos ativos em captar, transportar e metabolizar oxigênio durante esforço máximo.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_7",
    category: "s5_fisiologia_ex",
    question: "O limiar anaeróbio (ou segundo limiar ventilatório) representa o ponto durante o exercício progressivo onde:",
    answer: "A produção de lactato excede a taxa de remoção e o sistema de tamponamento renal/respiratório não consegue mais evitar a acidose metabólica.\n\nExplicação: Acima do limiar anaeróbio, o exercício é sustentado pela glicólise rápida com acúmulo de lactato e íons H+. O consequente aumento na produção de CO2 estimula a ventilação pulmonar de forma desproporcional.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_8",
    category: "s5_fisiologia_ex",
    question: "Durante a realização de um teste ergométrico ou de esforço aeróbico progressivo, qual a resposta fisiológica esperada para a Pressão Arterial Sistólica (PAS) e Diastólica (PAD) em indivíduos saudáveis?",
    answer: "Elevação gradual da PAS proporcionalmente à intensidade do esforço, enquanto a PAD permanece constante ou varia levemente (+/- 10 mmHg).\n\nExplicação: A PAS aumenta devido ao incremento no débito cardíaco (maior volume sistólico e FC). A PAD reflete a resistência vascular periférica; como ocorre vasodilatação nos músculos ativos, a PAD tende a se manter estável ou cair levemente.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_9",
    category: "s5_fisiologia_ex",
    question: "O Teste de Caminhada de 6 Minutos (TC6M) é um teste funcional submáximo amplamente utilizado. Seu principal objetivo clínico é:",
    answer: "Medir a distância máxima que o paciente percorre caminhando rápido sobre uma superfície plana em 6 minutos, avaliando a capacidade funcional ao exercício.\n\nExplicação: O TC6M avalia a tolerância ao esforço físico em atividades do dia a dia, sendo sensível para monitorar evolução e prognóstico de pacientes pneumopatas e cardiopatas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_10",
    category: "s5_fisiologia_ex",
    question: "O treinamento aeróbico contínuo induz bradicardia de repouso crônica em atletas. Qual a principal adaptação fisiológica cardíaca responsável por esse efeito?",
    answer: "Aumento do volume sistólico (volume de ejeção) devido ao aumento da cavidade do ventrículo esquerdo e tônus vagal elevado no repouso.\n\nExplicação: Com um ventrículo esquerdo maior e mais forte, o coração ejeta mais sangue a cada batimento. Para manter o mesmo débito cardíaco basal, a frequência cardíaca de repouso pode diminuir.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_11",
    category: "s5_aquatica",
    question: "O Princípio de Arquimedes descreve a força física do Empuxo. Qual a sua aplicação prática na reabilitação de um paciente em piscina terapêutica?",
    answer: "Reduzir o peso aparente do paciente submerso, diminuindo as forças de compressão articular e facilitando a marcha precoce.\n\nExplicação: O empuxo é uma força vertical dirigida para cima contrária à gravidade. Ela alivia o estresse nas articulações de suporte de peso (ex: quadril, joelho), facilitando a mobilização precoce.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_12",
    category: "s5_aquatica",
    question: "O Método de Bad Ragaz na fisioterapia aquática é caracterizado pelo uso de:",
    answer: "Padrões de movimento baseados na Facilitação Neuromuscular Proprioceptiva (FNP), onde o terapeuta serve de ponto fixo enquanto o paciente flutua com auxílio de flutuadores.\n\nExplicação: O Anel de Bad Ragaz adapta os conceitos da FNP clássica em meio aquático, promovendo fortalecimento muscular através de resistência hidrodinâmica gerada pelo deslocamento na água.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_13",
    category: "s5_aquatica",
    question: "Qual a temperatura recomendada da piscina aquecida para reabilitação neurofuncional de pacientes espásticos ou reumáticos?",
    answer: "Entre 32°C e 34°C (água aquecida/terapêutica)\n\nExplicação: A água aquecida a 32-34°C induz vasodilatação periférica, promove relaxamento muscular reflexo e modula a nocicepção, facilitando a execução de cinesioterapia.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_14",
    category: "s5_aquatica",
    question: "A pressão hidrostática exercida pela água sobre o corpo do paciente submerso em posição vertical promove qual efeito circulatório fisiológico?",
    answer: "Deslocamento do sangue periférico para o tórax (retorno venoso aumentado) e aumento do débito cardíaco.\n\nExplicação: A pressão da água aumenta conforme a profundidade. Isso comprime o sistema venoso periférico dos membros inferiores, agindo como uma meia de compressão elástica que facilita o retorno venoso.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_15",
    category: "s5_aquatica",
    question: "Qual das seguintes condições clínicas representa uma contraindicação absoluta para a realização de Fisioterapia Aquática?",
    answer: "Pacientes com feridas abertas infectadas ou incontinência urinária/fecal não controlada.\n\nExplicação: Feridas infectadas representam risco de contaminação cruzada para a água e piora infecciosa no paciente. A incontinência não controlada compromete a higienização sanitária da piscina de uso coletivo.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_16",
    category: "s5_idoso",
    question: "A sarcopenia é uma síndrome geriátrica prevalente. Ela é caracterizada pela perda progressiva e generalizada de:",
    answer: "Força, massa e desempenho físico da musculatura esquelética.\n\nExplicação: A sarcopenia no envelhecimento reduz a autonomia funcional do idoso, aumentando o risco de fragilidade, dependência física e episódios de quedas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_17",
    category: "s5_idoso",
    question: "O teste Timed Up and Go (TUG) avalia a mobilidade funcional em idosos. Um tempo superior a 12 ou 14 segundos para realizar o teste é indicativo de:",
    answer: "Risco aumentado de quedas e necessidade de intervenção preventiva.\n\nExplicação: O TUG quantifica em segundos o tempo para levantar-se de uma cadeira, caminhar 3 metros, girar 180°, voltar e sentar-se. Tempos elevados sinalizam déficit de equilíbrio dinâmico e risco cinético.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_18",
    category: "s5_idoso",
    question: "Durante o envelhecimento fisiológico da coluna vertebral, qual alteração postural do plano sagital é comumente encontrada no idoso?",
    answer: "Aumento da cifose torácica (hipercifose) e anteriorização da cabeça.\n\nExplicação: A hipercifose senil resulta do acunhamento de corpos vertebrais (osteoporose), perda de espessura de discos intervertebrais e fraqueza dos eretores da espinha.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_19",
    category: "s5_idoso",
    question: "Qual a melhor estratégia cinesioterapêutica para prevenir quedas e manter a densidade mineral óssea em idosos com osteoporose?",
    answer: "Exercícios de fortalecimento com carga progressiva (musculação de impacto controlado) associados a treinos de equilíbrio dinâmico e coordenação.\n\nExplicação: O tecido ósseo responde à tração mecânica muscular e carga gravitacional (Lei de Wolff). Exercícios resistidos com carga estimulam a deposição de cálcio pelos osteoblastos, prevenindo a osteoporose.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_20",
    category: "s5_idoso",
    question: "A fragilidade no idoso, segundo o fenótipo de Fried, é caracterizada por cinco critérios mensuráveis. Qual dos seguintes faz parte dessa avaliação?",
    answer: "Perda de peso não intencional, exaustão autorreferida, fraqueza muscular (preensão manual), lentidão na marcha e baixo nível de atividade física.\n\nExplicação: O fenótipo de fragilidade quantifica o risco clínico do idoso sofrer declínios rápidos de saúde, orientando o fisioterapeuta no planejamento de treinos de força e condicionamento seguro.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_21",
    category: "s5_estudo_contemp",
    question: "A concessão de uma patente de invenção pelo órgão regulamentador oficial de propriedade industrial confere ao inventor:",
    answer: "O direito de exploração comercial exclusiva por um período determinado em lei nacional, em troca da divulgação pública do conteúdo técnico.\n\nExplicação: A patente é um título de propriedade temporária concedido pelo Estado (geralmente 20 anos para patentes de invenção), garantindo exclusividade de fabricação ao titular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_22",
    category: "s5_estudo_contemp",
    question: "O órgão federal brasileiro responsável pelo registro de marcas, patentes de invenção, modelos de utilidade e desenhos industriais é o:",
    answer: "INPI (Instituto Nacional da Propriedade Industrial)\n\nExplicação: O INPI é a autarquia federal vinculada ao Ministério do Desenvolvimento que analisa e aprova os registros de marcas e concessão de patentes no Brasil.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_23",
    category: "s5_estudo_contemp",
    question: "Qual a diferença conceitual entre Patente de Invenção e Patente de Modelo de Utilidade?",
    answer: "A Patente de Invenção protege algo totalmente novo do estado da técnica; o Modelo de Utilidade protege uma melhora funcional ou prática no uso de um objeto já existente.\n\nExplicação: O modelo de utilidade representa uma inovação de menor complexidade técnica (ex: um cabo anatômico adaptado a uma muleta ou andador fisioterapêutico), tendo vigência menor.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_24",
    category: "s5_estudo_contemp",
    question: "Direitos autorais de obras científicas e livros acadêmicos no Brasil protegem:",
    answer: "A expressão literal da obra (o texto e as imagens publicadas), vedando cópias não autorizadas sem citar devidamente a autoria.\n\nExplicação: Os direitos autorais protegem a expressão da forma literária ou artística, não as ideias científicas subjacentes em si, as quais devem ser citadas para evitar o plágio acadêmico.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_25",
    category: "s5_estudo_contemp",
    question: "A inovação tecnológica considerada 'incremental' caracteriza-se por:",
    answer: "Melhorias e otimizações contínuas em produtos ou serviços já existentes no mercado, reduzindo custos ou otimizando a qualidade.\n\nExplicação: A inovação incremental aprimora tecnologias pré-existentes (ex: novos recursos e sensores em aparelhos de ultrassom terapêutico de gerações mais recentes), sendo o tipo mais comum.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_26",
    category: "s5_exp_prof",
    question: "Ao prescrever eletroestimulação para fortalecimento muscular em um atleta na clínica, qual corrente e parametrização são adequadas?",
    answer: "Corrente Russa (2500 Hz modulada a 50 Hz) com intensidade limiar de contração vigorosa respeitando a relação ativação/repouso (Duty Cycle).\n\nExplicação: A corrente Russa é uma corrente alternada de média frequência modulada em baixa que despolariza fibras motoras de forma profunda e confortável, induzindo contrações musculares efetivas para ganho de torque.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_27",
    category: "s5_exp_prof",
    question: "Durante a aplicação de TENS para analgesia pós-operatória de cirurgia de joelho, onde devem ser preferencialmente posicionados os eletrodos?",
    answer: "Ao redor da incisão cirúrgica ou no trajeto dos nervos aferentes periféricos da dor (ex: dermátomo correspondente).\n\nExplicação: Posicionar os eletrodos cercando a cicatriz estimula as fibras sensoriais locais A-beta que bloqueiam as sinapses da dor na medula espinhal, sem intercorrer com a incisão cirúrgica.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_28",
    category: "s5_exp_prof",
    question: "Qual parâmetro físico do ultrassom terapêutico determina a profundidade de penetração das ondas no tecido do paciente?",
    answer: "A frequência de oscilação da onda (1 MHz para tecidos profundos e 3 MHz para superficiais)\n\nExplicação: A frequência de 1 MHz é menos absorvida pela epiderme/derme, penetrando até 5 cm de profundidade (músculos profundos). A de 3 MHz é altamente absorvida superficialmente (fáscias superficiais e derme, até 1,5 cm).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_29",
    category: "s5_exp_prof",
    question: "A aplicação de FES (Estimulação Elétrica Funcional) para controle do 'pé caído' em pacientes hemiplégicos pós-AVC deve ocorrer em qual momento da marcha?",
    answer: "Durante a fase de oscilação do membro afetado, estimulando os músculos flexores dorsais (tibial anterior).\n\nExplicação: O FES é sincronizado por um sensor no calcanhar que dispara estímulos elétricos no nervo fibular comum para ativar o tibial anterior na fase oscilante, permitindo a elevação do pé e evitando a queda ou tropeço.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem5_30",
    category: "s5_exp_prof",
    question: "Qual cuidado de segurança com a pele é obrigatório antes de aplicar correntes elétricas terapêuticas no paciente?",
    answer: "Avaliar a sensibilidade tátil-térmica local, certificar que a pele está íntegra (sem feridas) e higienizar a área com água ou álcool para remover oleosidade.\n\nExplicação: A sensibilidade preservada evita queimaduras por correntes de alta intensidade. A pele íntegra e sem óleos garante uma distribuição de corrente uniforme pelos eletrodos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_1",
    category: "s6_traumato",
    question: "Paciente no 3º dia pós-operatório de Reconstrução do LCA do joelho (enxerto de tendões flexores). Qual a conduta de reabilitação prioritária nessa fase inicial?",
    answer: "Controle de dor/edema (Crioterapia), ativação isométrica do quadríceps (submáxima) e ganho passivo de extensão total do joelho.\n\nExplicação: O foco precoce pós-LCA é restabelecer a extensão total do joelho para evitar fibrose/artrofibrose periarticular e ativar o quadríceps para combater a inibição muscular artrogênica.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_2",
    category: "s6_traumato",
    question: "A capsulite adesiva do ombro (ombro congelado) é uma patologia inflamatória crônica caracterizada clinicamente por:",
    answer: "Dor intensa e perda progressiva e incapacitante dos movimentos ativos e passivos, obedecendo ao padrão capsular (rotação externa, abdução e rotação interna).\n\nExplicação: A capsulite cursa com retração e espessamento da cápsula articular glenoumeral, limitando severamente a ADM ativa e passiva nos eixos clássicos do padrão capsular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_3",
    category: "s6_traumato",
    question: "Durante o exame físico de um paciente com suspeita de ruptura total do tendão de Aquiles (tendão do calcâneo), qual teste ortopédico positivo indica essa lesão?",
    answer: "Teste de Thompson (ausência de plantiflexão ao comprimir o ventre muscular da panturrilha)\n\nExplicação: O teste de Thompson avalia a continuidade do tendão. Apertar o tríceps sural deve forçar mecanicamente uma flexão plantar. A ausência de resposta confirma a ruptura total.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_4",
    category: "s6_traumato",
    question: "Para o tratamento conservador da osteoartrose de joelho (gonartrose) visando diminuir a sobrecarga articular e a dor na marcha, o fisioterapeuta deve priorizar o fortalecimento de qual músculo?",
    answer: "Músculo Quadríceps Femoral\n\nExplicação: O quadríceps é o principal amortecedor dinâmico do joelho. Sua ativação e ganho de força reduzem o estresse compressivo sobre a cartilagem femoropatelar e femorotibial.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_5",
    category: "s6_traumato",
    question: "A epicondilite lateral (conhecida como cotovelo de tenista) é uma tendinopatia por sobrecarga (overuse) que acomete a origem comum de quais músculos?",
    answer: "Músculos extensores do punho e dedos (especialmente o extensor radial curto do carpo).\n\nExplicação: A epicondilite lateral resulta de microtraumas repetitivos no tendão extensor comum na face externa do cotovelo, desencadeando dor localizada à extensão resistida do punho.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_6",
    category: "s6_neuro",
    question: "Um paciente que apresenta marcha hemiplégica (ceifante ou helicoidal), espasticidade e sinal de Babinski positivo pós-AVC provavelmente apresenta lesão de qual via do sistema nervoso?",
    answer: "Via Corticoespinhal (Piramidal / Neurônio Motor Superior)\n\nExplicação: A via corticoespinhal controla a motricidade voluntária. Lesões nessa via liberam reflexos medulares, induzindo o quadro clássico de espasticidade e liberação piramidal.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_7",
    category: "s6_neuro",
    question: "Quais sintomas motores clássicos da Doença de Parkinson o fisioterapeuta visa mitigar através de exercícios de coordenação e dupla tarefa?",
    answer: "Rigidez em roda dentada, bradicinesia (lentidão de movimento), tremor de repouso e instabilidade postural.\n\nExplicação: O Parkinson resulta da degeneração de neurônios dopaminérgicos na substância negra. O tratamento foca em cinesioterapia para combater a rigidez, bradicinesia e melhorar o padrão da marcha.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_8",
    category: "s6_neuro",
    question: "O Conceito Neuroevolutivo Bobath, amplamente empregado na fisioterapia neurológica pediátrica e adulta, apoia-se em qual princípio?",
    answer: "Facilitar o alinhamento postural e os padrões de movimento normais através do manuseio de pontos-chave de controle, enquanto inibe padrões reflexos anormais.\n\nExplicação: O Bobath utiliza pontos-chave (ex: quadril, ombro) para guiar o paciente rumo ao movimento funcional fisiológico, modulando o tônus e estimulando reações de retificação.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_9",
    category: "s6_neuro",
    question: "Um paciente que sofreu um trauma medular completo na altura da vértebra torácica T10 apresenta qual quadro clínico funcional de déficit motor?",
    answer: "Paraplegia espástica dos membros inferiores com preservação motora dos membros superiores e controle de tronco alto.\n\nExplicação: Lesões medulares abaixo de T2 preservam os membros superiores (inervados pelo plexo braquial C5-T1), resultando em perda de controle motor e sensibilidade nos membros inferiores (paraplegia).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_10",
    category: "s6_neuro",
    question: "Qual das seguintes patologias neurológicas é classificada como uma polineuropatia desmielinizante inflamatória aguda de padrão ascendente e flácido?",
    answer: "Síndrome de Guillain-Barré\n\nExplicação: A Síndrome de Guillain-Barré é uma doença autoimune pós-infecciosa que destrói a mielina dos nervos periféricos, gerando fraqueza flácida ascendente simétrica que pode afetar a respiração.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_11",
    category: "s6_crianca",
    question: "Em qual idade do desenvolvimento motor típico do bebê espera-se o desaparecimento do Reflexo de Moro?",
    answer: "Entre 4 e 6 meses de idade.\n\nExplicação: O Reflexo de Moro (reação de sobressalto) é um reflexo primitivo integrado no tronco encefálico que deve desaparecer entre 4 e 6 meses com a maturação cortical.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_12",
    category: "s6_crianca",
    question: "Qual o principal sinal motor que caracteriza a Paralisia Cerebral (Encefalopatia Crônica Não Progressiva da Infância) do tipo Espástica?",
    answer: "Hipertonia espástica dependente de velocidade, hiperreflexia tendinosa e persistência de padrões posturais reflexos primitivos.\n\nExplicação: A PC espástica decorre de lesão na via corticoespinhal piramidal, levando à espasticidade e aumento de reflexos profundos, limitando o controle voluntário.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_13",
    category: "s6_crianca",
    question: "Na fisioterapia respiratória pediátrica para lactentes com Bronquiolite Viral Aguda na fase hipersecretiva, a conduta mecânica recomendada é:",
    answer: "Higiene brônquica suave através de desobstrução rinofaríngea retrógrada (DRR), soro fisiológico e aspiração de vias aéreas superiores se necessário.\n\nExplicação: A DRR e a lavagem nasal removem a secreção espessa na via aérea superior de lactentes, que são respiradores nasais exclusivos, aliviando o esforço respiratório.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_14",
    category: "s6_crianca",
    question: "O reflexo tônico-labiríntico (RTL) ativo no lactente sob estímulo gravitacional atua promovendo:",
    answer: "Extensão global do corpo quando o bebê está em decúbito dorsal e flexão global quando em decúbito ventral.\n\nExplicação: O RTL é influenciado pelo labirinto. Em decúbito dorsal, o tônus extensor é máximo. Em decúbito ventral, prevalece o tônus flexor.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_15",
    category: "s6_crianca",
    question: "Na reabilitação de crianças com mielomeningocele (espinha bífida aberta), qual a preocupação ortopédica prioritária do fisioterapeuta?",
    answer: "Prevenir deformidades articulares (como pé torto congênito e luxação de quadril) e promover órteses adequadas para a verticalização e marcha precoce.\n\nExplicação: A mielomeningocele gera desequilíbrios musculares abaixo do nível da lesão medular. Órteses e alongamentos previnem contraturas e auxiliam a deambulação.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_16",
    category: "s6_mulher",
    question: "O grupo de músculos do assoalho pélvico (MAP) é fundamental para a continência urinária e suporte visceral na mulher. As fibras que compõem o principal músculo desse grupo (Músculo Levantador do Ânus) são:",
    answer: "Músculo Pubococcígeo, Iliococcígeo e Puborretal (estriados esqueléticos).\n\nExplicação: O levantador do ânus é composto pelos fascículos puborretal, pubococcígeo e iliococcígeo, agindo no fechamento da uretra e reto sob controle motor voluntário.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_17",
    category: "s6_mulher",
    question: "A diástase dos retos abdominais (DRA), comum no período pós-parto, consiste fisiologicamente em:",
    answer: "O afastamento das bordas mediais dos dois ventres do músculo reto abdominal ao longo da linha alba devido ao estiramento tecidual na gestação.\n\nExplicação: A DRA é consequência do crescimento uterino e ação de hormônios (relaxina) que afrouxam o colágeno da linha alba, exigindo exercícios de ativação do músculo transverso.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_18",
    category: "s6_mulher",
    question: "Uma paciente pós-mastectomia radical com linfadenectomia axilar esquerda apresenta alto risco de linfedema de membro superior. Qual conduta preventiva é indicada?",
    answer: "Exercícios ativos suaves de bombeamento de membro superior esquerdo, automassagem linfática e cuidados de pele contra ferimentos na área.\n\nExplicação: Exercícios ativos ativam a bomba muscular que impulsiona a linfa. Higienizar e evitar ferimentos previne infecções locais que sobrecarregam o sistema linfático frágil.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_19",
    category: "s6_mulher",
    question: "Durante a gestação no terceiro trimestre, ocorrem adaptações posturais fisiológicas compensatórias devido ao crescimento fetal anterior. Essas mudanças incluem:",
    answer: "Deslocamento anterior do centro de gravidade, aumento da lordose lombar (hiperlordose) e báscula anterior da pelve (anteversão).\n\nExplicação: O peso do útero desloca o centro de gravidade para a frente. Para não cair, a gestante aumenta a curvatura lombar e projeta os ombros para trás, tensionando a lombar.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_20",
    category: "s6_mulher",
    question: "A aplicação de TENS portátil durante o trabalho de parto ativo é uma recurso eletroterapêutico útil para:",
    answer: "Fornecer alívio não farmacológico da dor do parto por meio da estimulação nervosa sensitiva na região lombar (dermátomos T10-L1 e S2-S4).\n\nExplicação: O TENS de alta frequência na lombar bloqueia sinais álgicos uterinos e sacrais, fornecendo uma alternativa segura e controlada pela própria parturiente para alívio de dor.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_21",
    category: "s6_estudo_contemp",
    question: "O Estatuto da Igualdade Racial no Brasil garante o direito à saúde da população negra por meio de qual diretriz nacional do SUS?",
    answer: "Políticas de saúde específicas que combatam as desigualdades raciais, racismo institucional e tratem de doenças com maior prevalência nessa população (ex: anemia falciforme).\n\nExplicação: A Política Nacional de Saúde Integral da População Negra busca combater o racismo institucional e garantir a equidade assistencial frente a vulnerabilidades específicas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_22",
    category: "s6_estudo_contemp",
    question: "O princípio da Equidade do SUS, de forte cunho ético e de Direitos Humanos, preconiza que o sistema de saúde deve:",
    answer: "Oferecer mais atenção e recursos àqueles que apresentam maiores necessidades sociais ou clínicas, visando reduzir as desigualdades de saúde.\n\nExplicação: Equidade significa tratar de forma desigual os desiguais para atingir a igualdade de direitos, alocando recursos em populações marginalizadas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_23",
    category: "s6_estudo_contemp",
    question: "A discriminação racial estrutural que se expressa de forma sutil através de barreiras de acesso e menor qualidade assistencial nos serviços públicos e privados denomina-se:",
    answer: "Racismo institucional\n\nExplicação: O racismo institucional ocorre quando instituições falham em prover serviços adequados a pessoas devido à sua cor, cultura ou origem étnica de forma sistêmica.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_24",
    category: "s6_estudo_contemp",
    question: "De acordo com os Direitos Humanos e as leis de inclusão social, as clínicas de fisioterapia e estabelecimentos de saúde devem obrigatoriamente prover:",
    answer: "Acessibilidade física arquitetônica (rampas, banheiros adaptados, portas largas) para pessoas com deficiência ou mobilidade reduzida.\n\nExplicação: A acessibilidade é direito fundamental das pessoas com deficiência assegurado por lei, garantindo autonomia de locomoção nas clínicas de saúde.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_25",
    category: "s6_estudo_contemp",
    question: "Políticas de ações afirmativas de cotas no ensino superior no Brasil visam:",
    answer: "Corrigir distorções históricas de acesso e promover a diversidade social e étnico-racial nos espaços acadêmicos de formação profissional.\n\nExplicação: As ações afirmativas atuam compensando desvantagens acumuladas ao longo de gerações decorrentes da exclusão social e discriminação étnico-racial.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_26",
    category: "s6_exp_prof",
    question: "A utilização de sistemas de Realidade Virtual (games interativos) na reabilitação neurológica contemporânea apoia-se em qual conceito neurofisiológico?",
    answer: "Neuroplasticidade induzida por feedback visual imediato e repetição de tarefas motivadoras voltadas a objetivos.\n\nExplicação: A realidade virtual fornece biofeedback visual e auditivo de alta motivação. Isso induz maior engajamento do paciente, estimulando conexões sinápticas novas nas áreas motoras cerebrais.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_27",
    category: "s6_exp_prof",
    question: "A reabilitação robótica da marcha por meio de exoesqueletos mecanizados e esteiras de suspensão parcial de peso é indicada prioritariamente para:",
    answer: "Pacientes com sequelas neurológicas graves (ex: lesão medular incompleta ou AVC grave) para treinar o padrão de marcha com múltiplos ciclos repetitivos precisos.\n\nExplicação: Robôs de marcha promovem a repetição simétrica ideal do ciclo de caminhada, ativando aferências sensoriais proprioceptivas cruciais para a reorganização cortical e padrão gerador central de ritmo medular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_28",
    category: "s6_exp_prof",
    question: "O uso de softwares e aplicativos de biofeedback eletromiográfico na clínica de fisioterapia permite ao paciente:",
    answer: "Visualizar graficamente na tela a atividade elétrica de contração muscular, auxiliando o controle voluntário e aprendizado motor de músculos fracos ou hiperativos.\n\nExplicação: O biofeedback eletromiográfico (EMG) monitora sinais de superfície. Ao ver o sinal gráfico subindo na contração, o paciente aprende de forma cognitiva a recrutar as unidades motoras adequadas.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_29",
    category: "s6_exp_prof",
    question: "Qual inovação em Fisioterapia Cardiorrespiratória utiliza a telemetria e o monitoramento digital à distância?",
    answer: "A telereabilitação monitorada, onde o paciente realiza exercícios respiratórios em casa usando sensores de oxigênio conectados ao profissional via aplicativo.\n\nExplicação: A telereabilitação cardíaca monitora remotamente a saturação de O2 e FC, expandindo a assistência para pacientes pós-IAM que não podem ir à clínica com frequência.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem6_30",
    category: "s6_exp_prof",
    question: "O emprego clínico de exoesqueletos infantis mecanizados na reabilitação da Paralisia Cerebral permite:",
    answer: "A verticalização precoce e o treino de marcha lúdica com alinhamento mecânico excelente das articulações de carga, prevenindo osteopenia e deformidades.\n\nExplicação: Exoesqueletos pediátricos mantém a criança de pé de forma ergonômica, estimulando a descarga de peso ósseo e a locomoção lúdica ativa, promovendo ganho de controle motor.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_1",
    category: "s7_protese",
    question: "Qual órtese espinhal rígida é a mais recomendada para o tratamento conservador de curvas escolióticas progressivas moderadas (ângulos de Cobb entre 20 e 40 graus) em adolescentes em fase de crescimento esquelético ativo?",
    answer: "Colete de Boston ou colete de Milwaukee\n\nExplicação: Os coletes de Milwaukee (com superestrutura cervical) ou Boston (TLSO sob medida) aplicam pressões corretivas em três pontos na caixa torácica e pelve, contendo o avanço da escoliose no estirão de crescimento.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_2",
    category: "s7_protese",
    question: "Nas próteses para amputados de membro inferior a nível transtibial, qual região anatômica do coto de amputação é a principal área de descarga de peso tolerável no encaixe do tipo PTB (Patellar Tendon Bearing)?",
    answer: "O tendão patelar (ligamento patelar).\n\nExplicação: O ápice do coto ósseo é sensível a pressões e pode sofrer lesões de pele. O encaixe PTB desvia a carga para o tendão patelar e áreas adjacentes (condilos tibiais), que toleram melhor a compressão.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_3",
    category: "s7_protese",
    question: "Qual a finalidade de uma órtese do tipo splint de posicionamento estático para punho e dedos (órtese cock-up) para um paciente com espasticidade em flexão pós-AVC?",
    answer: "Manter o punho e os dedos em posição funcional neutra para prevenir encurtamentos musculares crônicos, fibroses e contraturas articulares por padrão flexor.\n\nExplicação: A espasticidade mantida sem posicionamento adequado causa o encurtamento mecânico dos flexores do punho. A órtese estática de repouso previne deformidades e deformações articulares.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_4",
    category: "s7_protese",
    question: "Antes de iniciar o treino de marcha com prótese em um paciente recém-amputado de coxa (transfemoral), qual a conduta fisioterapêutica preparatória prioritária no coto de amputação?",
    answer: "Enfaixamento compressivo modelador de padrão em oito para reduzir o edema e modelar o coto em formato cônico, além de dessensibilização cutânea.\n\nExplicação: O enfaixamento compressivo acelera o retorno venoso/linfático e remodela o tecido adiposo, preparando o coto para encaixar de forma estável na prótese. A dessensibilização reduz a dor fantasma.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_5",
    category: "s7_protese",
    question: "As órteses dinâmicas diferem das órteses estáticas simples por possuírem:",
    answer: "Componentes móveis como elásticos, molas ou dobradiças articuladas que auxiliam ou resistem a movimentos ativos e preservam a mobilidade das articulações.\n\nExplicação: Órteses dinâmicas aplicam uma força de baixa intensidade e longa duração para recuperar ADM ou assistir a função extensora (ex: lesão do nervo radial com 'mão caída').",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_6",
    category: "s7_respiratoria",
    question: "A técnica de higiene brônquica que consiste em expirações lentas e controladas em diferentes volumes pulmonares, sem o uso de equipamentos adicionais, é denominada:",
    answer: "Drenagem Autógena\n\nExplicação: A Drenagem Autógena utiliza variações de fluxo aéreo expiratório para mobilizar secreções desde as vias aéreas periféricas até as centrais de forma autônoma e confortável.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_7",
    category: "s7_respiratoria",
    question: "Na Ventilação Mecânica Invasiva na UTI, o modo Ventilação com Pressão de Suporte (PSV) é caracterizado por ser um modo:",
    answer: "Espontâneo, onde o ventilador fornece uma pressão de ajuda predefinida durante a inspiração iniciada pelo paciente, e a ciclagem ocorre pela queda do fluxo inspiratório.\n\nExplicação: No modo PSV, o paciente comanda a frequência, fluxo e tempo inspiratório. O ventilador apenas apóia a fase inspiratória ativa, facilitando o desmame da ventilação mecânica.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_8",
    category: "s7_respiratoria",
    question: "Qual é o principal efeito fisiológico pulmonar imediato da aplicação da Pressão Expiratória Final Positiva (PEEP) na ventilação mecânica de pacientes com congestão pulmonar?",
    answer: "Recrutamento alveolar (abertura de alvéolos colapsados), aumento da capacidade residual funcional (CRF) e melhora da oxigenação sanguínea.\n\nExplicação: A PEEP impede que os alvéolos colapsem no final da expiração, mantendo-os abertos para trocas gasosas contínuas, reduzindo o shunt pulmonar e melhorando a complacência.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_9",
    category: "s7_respiratoria",
    question: "O incentivador inspiratório volumétrico (ex: Voldyne) difere do incentivador a fluxo (ex: Respiron) porque o volumétrico:",
    answer: "Mede e exibe o volume de ar inalado pelo paciente estimulando respirações profundas e lentas, sendo ideal para profilaxia de atelectasias pós-operatórias.\n\nExplicação: Incentivadores a volume focam na inspiração lenta e sustentada para melhor distribuição da ventilação em alvéolos da base pulmonar. Incentivadores a fluxo exigem altos fluxos turbulentos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_10",
    category: "s7_respiratoria",
    question: "Qual patologia respiratória aguda em UTI cursa com hipoxemia refratária grave e infiltrado pulmonar bilateral difuso (imagem em asa de borboleta), sem origem cardíaca primária?",
    answer: "Síndrome do Desconforto Respiratório Agudo (SDRA)\n\nExplicação: A SDRA é uma síndrome inflamatória alveolar grave causada por lesão da membrana alvéolo-capilar, levando a edema pulmonar não cardiogênico com colapso maciço de alvéolos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_11",
    category: "s7_estudo_contemp",
    question: "A sustentabilidade nas práticas de gestão de saúde e de clínicas de fisioterapia pode ser demonstrada através de qual ação?",
    answer: "Descarte seletivo de resíduos biológicos e químicos segundo a RDC 222, digitalização de prontuários (redução de papel) e uso eficiente de energia e água.\n\nExplicação: A ecoeficiência une gestão financeira e responsabilidade ambiental, diminuindo os impactos dos serviços assistenciais no ecossistema e na comunidade.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_12",
    category: "s7_estudo_contemp",
    question: "O Código de Defesa do Consumidor (CDC) regulamenta a prestação de serviços de saúde. Diante disso, o contrato de prestação de serviços de fisioterapia constitui uma obrigação de:",
    answer: "Meio, onde o profissional se compromete a empregar a melhor técnica baseada em evidência e zelo clínico para reabilitar o paciente, sem garantir a cura biológica absoluta.\n\nExplicação: Por lidar com biologia humana e variáveis individuais, o fisioterapeuta responde pela qualidade técnica de suas condutas (obrigação de meio), mas não pode garantir um desfecho de cura de forma contratual.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_13",
    category: "s7_estudo_contemp",
    question: "O conceito de 'obsolescência programada' na cadeia de consumo de equipamentos tecnológicos de saúde representa:",
    answer: "A estratégia comercial de desenvolver aparelhos com vida útil limitada de fábrica para forçar o consumidor a adquirir novos modelos.\n\nExplicação: A obsolescência programada visa manter o ciclo econômico ativo, mas gera graves impactos ambientais pelo acúmulo de lixo eletrônico não biodegradável.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_14",
    category: "s7_estudo_contemp",
    question: "Qual a correta conduta para o descarte de pilhas, baterias e equipamentos de eletroterapia antigos inutilizados na clínica?",
    answer: "Encaminhamento para descarte por logística reversa em postos autorizados ou assistência técnica do fabricante para destinação ambiental segura.\n\nExplicação: Metais pesados presentes em eletrônicos contaminam o solo e lençóis freáticos. A logística reversa garante que o fabricante recicle ou descarte os resíduos com segurança.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_15",
    category: "s7_estudo_contemp",
    question: "O princípio da Autonomia do Paciente, no âmbito ético e jurídico, assegura ao paciente de Fisioterapia o direito de:",
    answer: "Consentir ou recusar de forma livre e esclarecida as propostas terapêuticas sugeridas pelo fisioterapeuta, após receber explicações claras sobre riscos e benefícios.\n\nExplicação: A autonomia garante o respeito à liberdade do paciente sobre seu próprio corpo e destino de saúde, formalizado pelo Termo de Consentimento Livre e Esclarecido.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_16",
    category: "s7_exp_prof",
    question: "A Artrite Reumatoide (AR) é uma doença inflamatória autoimune sistêmica crônica. Na fase inflamatória aguda articular de mãos, qual a conduta cinesioterapêutica recomendada?",
    answer: "Exercícios ativos suaves de amplitude de movimento sem carga e sem forçar dor, além de repouso articular nas crises em posições funcionais.\n\nExplicação: Nas crises de inflamação aguda da AR, as articulações sofrem sinovite intensa e fragilidade capsuloligamentar. Condutas forçadas geram deformidades e piora inflamatória.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_17",
    category: "s7_exp_prof",
    question: "Um paciente com Espondilite Anquilosante (EA) apresenta dor lombar crônica inflamatória e tendência à fusão óssea da coluna em cifose (postura do esquiador). Qual a orientação terapêutica principal?",
    answer: "Exercícios de extensão da coluna (postural) e expansibilidade torácica profunda diários para contrapor a anquilose da coluna e costelas.\n\nExplicação: A EA anquilosa as articulações da coluna e as costovertebrais, reduzindo a capacidade vital pulmonar. Exercícios de extensão e expansão torácica preservam a função respiratória e postural.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_18",
    category: "s7_exp_prof",
    question: "A Fibromialgia é uma síndrome caracterizada por dor musculoesquelética difusa crônica. Qual modalidade terapêutica possui maior nível de evidência científica para controle de sintomas a longo prazo nesses pacientes?",
    answer: "Exercícios físicos aeróbicos de intensidade leve a moderada de forma regular e gradual, associados a suporte cognitivo-comportamental.\n\nExplicação: Exercícios aeróbicos estimulam a liberação de neurotransmissores moduladores da dor (serotonina e endorfinas) e melhoram o padrão de sono e a fadiga desses pacientes.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_19",
    category: "s7_exp_prof",
    question: "A Osteoartrite (ou Artrose) é uma patologia articular degenerativa. Qual o principal fator fisiopatológico mecânico associado ao seu desenvolvimento nas articulações de carga?",
    answer: "A degradação progressiva da cartilagem hialina articular devido a forças de compressão repetitivas e inflamação local de baixo grau.\n\nExplicação: A artrose envolve o desgaste da cartilagem que reveste as superfícies ósseas, causando dor e limitação funcional, sendo muito comum no quadril e joelhos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem7_20",
    category: "s7_exp_prof",
    question: "No planejamento de tratamento para idosos com osteoartrose grave de joelho, qual conduta manual visa melhorar o deslizamento articular e aliviar a dor mecânica imediata?",
    answer: "Tração articular suave de Grau I ou II e mobilizações acessórias de Maitland para descompressão e estimulação do líquido sinovial.\n\nExplicação: Mobilizações articulares suaves reduzem a dor por meio de efeitos neurofisiológicos locais que estimulam mecanorreceptores e favorecem a lubrificação do líquido sinovial articular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem8_1",
    category: "s8_dermatofunc",
    question: "Qual recurso terapêutico e técnica compõem o padrão-ouro de tratamento para a redução do linfedema periférico crônico (ex: linfedema de membro superior pós-mastectomia)?",
    answer: "Terapia Física Complexa (TFC), que engloba drenagem linfática manual, enfaixamento compressivo multicamadas, exercícios miolinfokinetos e cuidados de pele.\n\nExplicação: A TFC atua de forma sistêmica: a drenagem mobiliza a linfa, o enfaixamento mantém a redução e evita o acúmulo intersticial, e os exercícios promovem a bomba muscular.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem8_2",
    category: "s8_dermatofunc",
    question: "Ao reabilitar cicatrizes de queimaduras em fase de maturação para evitar a formação de aderências teciduais rígidas, qual técnica manual de massagem transversa profunda é indicada?",
    answer: "Técnica de Cyriax (aplicada transversalmente às fibras musculares/teciduais sem deslizamento sobre a pele).\n\nExplicação: A massagem de Cyriax rompe as pontes de hidrogênio e colágeno desalinhados da cicatriz espessa, mantendo o tecido móvel e evitando a retração cicatricial restritiva.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem8_3",
    category: "s8_dermatofunc",
    question: "No tratamento estético e dermatofuncional do fibroedema geloide (FEG - celulite) e da adiposidade localizada superficial, qual a frequência do ultrassom recomendada?",
    answer: "3 MHz contínuo de dosagem moderada, por sua absorção seletiva nos primeiros 1,5 a 2 cm de profundidade cutânea.\n\nExplicação: O ultrassom de 3 MHz foca a energia acústica no tecido subcutâneo adiposo superficial, promovendo microfluxo acústico, aumento circulatório e estímulo metabólico local.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem8_4",
    category: "s8_dermatofunc",
    question: "Qual a principal diferença clínica e tecidual entre uma cicatriz hipertrófica e um queloide?",
    answer: "A cicatriz hipertrófica permanece nos limites originais da lesão e tende a regredir espontaneamente com o tempo; o queloide ultrapassa as bordas da lesão original e não regride.\n\nExplicação: Queloides são lesões fibroproliferativas benignas com deposição excessiva e desorganizada de colágeno Tipo I e III que invadem tecidos saudáveis adjacentes.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem8_5",
    category: "s8_dermatofunc",
    question: "A tecnologia de Radiofrequência aplicada à dermatofuncional para rejuvenescimento facial e tratamento de flacidez de pele baseia-se em qual princípio fisiológico?",
    answer: "Aquecimento volumétrico profundo da derme que desnatura as fibras de colágeno antigas, estimulando a neocofibrilopoiese (síntese de colágeno novo por fibroblastos).\n\nExplicação: A radiofrequência aquece a derme profunda a temperaturas específicas (geralmente entre 39°C e 42°C). Isso causa contração imediata do colágeno e ativação fibroblástica de longo prazo.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem9_1",
    category: "s9_cardio",
    question: "A Fase I da Reabilitação Cardiovascular (RCV) inicia-se em qual período e qual o seu objetivo principal?",
    answer: "No período de internação hospitalar pós-evento coronário agudo, visando mobilização precoce segura, prevenção de complicações do imobilismo e independência funcional para a alta.\n\nExplicação: A Fase I hospitalar foca em cinesioterapia metabólica de baixíssima intensidade (1 a 3 METs), visando garantir que o paciente retorne às atividades básicas diárias sem riscos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem9_2",
    category: "s9_cardio",
    question: "Durante as sessões de Reabilitação Cardiovascular em pacientes cardiopatas, qual ferramenta clínica simples e validada é usada para monitorar subjetivamente a percepção de esforço físico?",
    answer: "Escala de Percepção de Esforço de Borg (de 6 a 20 ou de 0 a 10).\n\nExplicação: A escala de Borg permite que o cardiopata correlacione seu esforço físico com a exaustão, sendo fundamental para o treino de pacientes sob uso de beta-bloqueadores.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem9_3",
    category: "s9_cardio",
    question: "Em um programa de RCV ambulatorial na Fase II (pós-alta), qual o tipo de exercício físico e intensidade recomendada para recondicionamento inicial?",
    answer: "Exercício aeróbico dinâmico (caminhada, cicloergômetro) de intensidade moderada (50-70% da frequência cardíaca de reserva ou Borg 11-13) monitorado continuamente.\n\nExplicação: O exercício aeróbico dinâmico moderado promove condicionamento periférico cardiovascular, aumenta a densidade mitocondrial e melhora a eficiência metabólica sem sobrecarregar o coração.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem9_4",
    category: "s9_cardio",
    question: "Qual das seguintes condições clínicas representa uma contraindicação absoluta para a realização de exercícios físicos na reabilitação cardiovascular?",
    answer: "Angina instável (dor torácica de origem cardíaca em repouso ou esforços mínimos) ou arritmias ventriculares não controladas.\n\nExplicação: A angina instável indica isquemia miocárdica ativa severa com risco iminente de infarto do miocárdio ou arritmia cardíaca fatal se submetida a estresse físico.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem9_5",
    category: "s9_cardio",
    question: "A reabilitação cardíaca na insuficiência cardíaca congestiva estável promove qual adaptação muscular periférica benéfica ao paciente?",
    answer: "Melhora na captação periférica de oxigênio pelo aumento da densidade capilar e mitocondrial nos músculos esqueléticos ativos.\n\nExplicação: Cardiopatas com insuficiência têm baixo débito. O exercício treina a musculatura periférica a extrair e utilizar o O2 disponível de forma mais eficiente, diminuindo os sintomas de fadiga e dispneia.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_1",
    category: "s10_trabalhador",
    question: "Qual ferramenta ergonômica semiquantitativa é amplamente utilizada por fisioterapeutas do trabalho para avaliar posturas e sobrecargas biomecânicas nos membros superiores?",
    answer: "Método RULA (Rapid Upper Limb Assessment)\n\nExplicação: O método RULA é uma ferramenta observacional rápida que avalia a carga musculoesquelética no pescoço, tronco e membros superiores com base em ângulos posturais.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_2",
    category: "s10_trabalhador",
    question: "A Ginástica Laboral preparatória, realizada no próprio posto de trabalho das empresas, caracteriza-se por:",
    answer: "Exercícios de alongamento, aquecimento e ativação muscular de curta duração (10 a 15 minutos) realizados no início da jornada para preparar os tecidos.\n\nExplicação: A ginástica preparatória visa despertar o trabalhador, aumentar o fluxo sanguíneo local e preparar as articulações para a carga de trabalho subsequente.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_3",
    category: "s10_trabalhador",
    question: "A Norma Regulamentadora nº 17 (NR 17) do Ministério do Trabalho e Emprego visa estabelecer parâmetros ergonômicos para:",
    answer: "Adaptar as condições de trabalho às características psicofisiológicas dos trabalhadores, de modo a proporcionar máximo conforto, segurança e desempenho eficiente.\n\nExplicação: A NR 17 rege a ergonomia ocupacional, abrangendo o transporte de cargas, mobiliário, condições ambientais de trabalho (ruído, temperatura) e organização do trabalho.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_4",
    category: "s10_trabalhador",
    question: "A LER/DORT (Lesões por Esforços Repetitivos / Distúrbios Osteomusculares Relacionados ao Trabalho) é provocada principalmente por:",
    answer: "Sobrecarga biomecânica contínua decorrente de movimentos repetitivos, posturas mantidas nocivas, ausência de pausas e pressões psicológicas no trabalho.\n\nExplicação: LER/DORT são quadros inflamatórios ocupacionais multifatoriais associados à fadiga persistente, falta de repouso estruturado e movimentos repetitivos excessivos.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_5",
    category: "s10_trabalhador",
    question: "A elaboração da Análise Ergonômica do Trabalho (AET) é um processo que envolve:",
    answer: "O diagnóstico ergonômico detalhado das tarefas e postos de trabalho de uma empresa, visando identificar riscos e sugerir melhorias posturais e organizacionais.\n\nExplicação: A AET mapeia de forma científica os riscos ergonômicos da empresa, servindo de base para o fisioterapeuta do trabalho propor adequações ergonômicas em máquinas e mobiliários.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_6",
    category: "s10_evidencias",
    question: "Na pirâmide de evidência científica que guia a prática clínica, qual desenho de estudo apresenta maior robustez metodológica e nível de recomendação clínica?",
    answer: "Revisão Sistemática com Metanálise de Ensaios Clínicos Controlados Aleatorizados\n\nExplicação: Revisões sistemáticas com metanálise reúnem de forma estatística os dados de múltiplos ensaios clínicos aleatorizados, gerando estimativas precisas de efeito e eficácia clínica.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_7",
    category: "s10_evidencias",
    question: "No planejamento de uma pesquisa de tratamento fisioterapêutico, a randomização é um processo estatístico crucial que visa:",
    answer: "Distribuir aleatoriamente os participantes entre o grupo intervenção e controle, minimizando vieses de seleção e garantindo a homogeneidade dos grupos.\n\nExplicação: A randomização garante que variáveis de confusão (como idade, sexo ou severidade inicial) tenham chances iguais de distribuição entre os grupos comparados.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_8",
    category: "s10_evidencias",
    question: "A escala PEDro (Physiotherapy Evidence Database) é um instrumento de avaliação amplamente utilizado na área de fisioterapia para avaliar:",
    answer: "A qualidade metodológica interna e clareza estatística de ensaios clínicos controlados aleatorizados.\n\nExplicação: A escala PEDro pontua de 0 a 10 critérios chaves (como cegamento, randomização e análise por intenção de tratar) para que clínicos saibam o quão confiável é um artigo.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_9",
    category: "s10_evidencias",
    question: "O termo 'Cegamento' (blinding) em um ensaio clínico controlado aleatorizado de fisioterapia visa evitar:",
    answer: "Vieses de expectativa ou de aferição, garantindo que o paciente e/ou o avaliador de dados não saibam a qual grupo (teste ou controle) o indivíduo pertence.\n\nExplicação: Saber qual intervenção está recebendo pode induzir efeitos placebo ou nocebo no paciente, ou fazer com que o examinador dê notas melhores inconscientemente.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_10",
    category: "s10_evidencias",
    question: "O acrônimo P.I.C.O. é uma estratégia metodológica recomendada para formular perguntas de pesquisa em saúde. O significado de suas letras é:",
    answer: "Paciente (ou População), Intervenção, Comparação (ou Controle) e Outcome (Desfecho)\n\nExplicação: A estratégia P.I.C.O. ajuda o profissional a definir de forma organizada os elementos essenciais de sua dúvida clínica, facilitando a busca precisa por evidências na literatura.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_11",
    category: "s10_topicos",
    question: "A atuação do fisioterapeuta em Cuidados Paliativos integrados visa prioritariamente:",
    answer: "Promover o alívio da dor física, controle de sintomas (como dispneia e fadiga) e melhora da qualidade de vida e funcionalidade do paciente sem cura biológica, integrando a família.\n\nExplicação: Cuidados Paliativos focam no conforto e na dignidade do indivíduo diante do fim da vida, controlando o sofrimento sob uma abordagem multidisciplinar e compassiva.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_12",
    category: "s10_topicos",
    question: "A Fadiga Crônica pós-viral (como na Síndrome Pós-COVID) exige atenção terapêutica. A conduta cinesioterapêutica recomendada é:",
    answer: "Treinamento físico gradual e individualizado (exercício de baixo impacto) com monitoramento cuidadoso de energia (Pacing) para evitar piora pós-esforço.\n\nExplicação: Pacientes com fadiga pós-viral possuem intolerância ao esforço. Exercícios pesados desregulam o sistema imunológico e autonômico, gerando crises de exaustão severas (PEM).",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_13",
    category: "s10_topicos",
    question: "As Práticas Integrativas e Complementares (PICS) no âmbito de tópicos especiais atuam no SUS de forma a:",
    answer: "Complementar a assistência à saúde, integrando a medicina tradicional e a visão holística no cuidado integral de dores crônicas e estresse.\n\nExplicação: As PICS atuam na prevenção e promoção da saúde mental e física, alinhando saberes tradicionais aos cuidados convencionais de reabilitação.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_14",
    category: "s10_topicos",
    question: "O uso de órteses robóticas (exoesqueletos de membros inferiores) no treino de marcha de pacientes com lesão medular completa acima de T6 auxilia na prevenção de qual complicação crônica?",
    answer: "Osteopenia por desuso (perda de massa óssea) nos membros inferiores, através da descarga de peso em pé, e redução de espasticidade.\n\nExplicação: Ficar de pé e caminhar de forma assistida mecanicamente impõe estresse gravitacional no fêmur e tíbia, atenuando a reabsorção óssea decorrente do desuso.",
    box: 1,
    nextReview: 0
  },
  {
    id: "fc_sem10_15",
    category: "s10_topicos",
    question: "A Fisioterapia preventiva na oncologia pediátrica atua de forma a:",
    answer: "Preservar a força muscular, amplitude de movimento articular e marcos do desenvolvimento motor típicos da infância durante o tratamento oncológico (quimio/radioterapia).\n\nExplicação: O tratamento do câncer infantil induz efeitos adversos como fraqueza e neuropatias. A fisioterapia lúdica preventiva mantém a integridade física e funcional da criança.",
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
    category: "s1_perspectivas",
    question: "Quais são os chamados '3 As' do Projeto de Vida, essenciais para gerenciar a própria carreira?",
    options: [
      "Autoconhecimento, Autorresponsabilidade e Autodisciplina",
      "Assertividade, Ação e Altruísmo",
      "Autonomia, Ambição e Adaptação",
      "Análise, Atualização e Associação"
    ],
    correctIndex: 0,
    rationale: "O projeto de vida de acordo com a metodologia de gestão pessoal fundamenta-se nos pilares da consciência sobre si (Autoconhecimento), da autoria dos próprios resultados (Autorresponsabilidade) e da constância nas ações planejadas (Autodisciplina)."
  },
  {
    id: "q_sem1_2",
    category: "s1_perspectivas",
    question: "Na Roda da Vida, ferramenta clássica de autoavaliação pessoal, qual o objetivo principal da análise?",
    options: [
      "Garantir que a vida seja focada unicamente no sucesso financeiro.",
      "Buscar o desenvolvimento e equilíbrio sistêmico entre as diversas dimensões da vida (família, saúde, carreira, etc.).",
      "Classificar os indivíduos de acordo com padrões competitivos de desempenho corporativo.",
      "Determinar dogmas de fé específicos de forma compulsória."
    ],
    correctIndex: 1,
    rationale: "A Roda da Vida ajuda o indivíduo a enxergar sua existência de forma sistêmica, alertando sobre áreas negligenciadas (como saúde ou família) em detrimento de outras (como profissional), buscando o equilíbrio sustentável."
  },
  {
    id: "q_sem1_3",
    category: "s1_perspectivas",
    question: "Como a metodologia de gestão de carreira distingue 'Sucesso' de 'Prosperidade'?",
    options: [
      "Sucesso é apenas para executivos de grandes corporações.",
      "Prosperidade refere-se à evolução e aprendizado constante nas diversas esferas, enquanto Sucesso costuma representar a conquista final de uma meta.",
      "Não há nenhuma distinção conceitual ou prática, sendo sinônimos exatos.",
      "Prosperidade refere-se unicamente ao acúmulo de bens materiais e dinheiro."
    ],
    correctIndex: 1,
    rationale: "A prosperidade é o processo de evolução constante e a capacidade de ser grato e fazer bom uso dos recursos disponíveis em cada momento da caminhada, gerando contentamento mesmo antes de atingir o sucesso (objetivo final)."
  },
  {
    id: "q_sem1_4",
    category: "s1_perspectivas",
    question: "Qual conduta profissional demonstra 'Autorresponsabilidade' diante de uma meta não atingida?",
    options: [
      "Criticar a incompetência dos demais membros do setor.",
      "Lamentar e queixar-se com os pacientes sobre o excesso de trabalho.",
      "Analisar as próprias atitudes e planejar ações corretivas de forma consciente para melhorar na próxima oportunidade.",
      "Apresentar justificativas externas detalhadas para isentar-se de qualquer erro."
    ],
    correctIndex: 2,
    rationale: "A autorresponsabilidade é a crença de que somos os responsáveis pelos resultados da nossa vida. Em vez de buscar culpados ou justificativas inibidoras, a postura autorresponsável foca em aprender com os erros e atuar na melhoria."
  },
  {
    id: "q_sem1_5",
    category: "s1_perspectivas",
    question: "O que constitui o conceito de 'Personal Branding' e qual sua utilidade profissional?",
    options: [
      "A criação de logotipos comerciais e registros de marcas para empresas de calçados.",
      "A gestão estratégica do perfil profissional, demonstrando reputação, valores e competências de forma clara ao mercado.",
      "A publicação de opiniões informais e dados privados de forma irrestrita na internet.",
      "A contratação de assessoria de imagem para disfarçar limitações técnicas de conduta."
    ],
    correctIndex: 1,
    rationale: "Personal Branding refere-se à construção e gestão de sua marca pessoal, permitindo que a comunidade e o mercado compreendam quem você é, o que você valoriza e quais são suas especialidades técnicas, gerando autoridade profissional."
  },
  {
    id: "q_sem1_6",
    category: "s1_biosseguranca",
    question: "Em relação aos Riscos Ambientais, a NR 32 regulamenta a exposição do trabalhador da saúde. Radiação ionizante e ruído ocupacional pertencem a qual grupo?",
    options: [
      "Riscos Químicos",
      "Riscos Biológicos",
      "Riscos Físicos",
      "Riscos Ergonômicos"
    ],
    correctIndex: 2,
    rationale: "O grupo de Riscos Físicos (representado pela cor verde no mapa de riscos) inclui agentes que agem por meio de forças e energias físicas no corpo, como vibrações, ruído, pressões extremas, temperaturas intensas e radiações."
  },
  {
    id: "q_sem1_7",
    category: "s1_biosseguranca",
    question: "Sob a regulamentação do Gerenciamento de Resíduos de Serviços de Saúde (RDC 222/Anvisa), as ampolas de vidro, agulhas e lâminas cirúrgicas pertencem a qual grupo?",
    options: [
      "Grupo A (Infectantes)",
      "Grupo B (Químicos)",
      "Grupo D (Comuns)",
      "Grupo E (Perfurocortantes)"
    ],
    correctIndex: 3,
    rationale: "O Grupo E do RSS corresponde aos resíduos perfurocortantes: materiais contendo cantos, bordas, pontas ou protuberâncias rígidas e agudas capazes de cortar ou perfurar (agulhas, ampolas, lancetas, lâminas de bisturi)."
  },
  {
    id: "q_sem1_8",
    category: "s1_biosseguranca",
    question: "Qual a correta conduta de descarte para os recipientes coletores de perfurocortantes (Grupo E) nas clínicas de saúde?",
    options: [
      "Devem ser esvaziados no lixo comum e higienizados com álcool para reutilização.",
      "Devem ser descartados quando o nível de resíduos atingir a marca limite de 3/4 de sua capacidade total.",
      "Devem ser mantidos abertos em locais de passagem rápida para agilizar o descarte.",
      "Devem ser acondicionados em sacos plásticos vermelhos comuns sem identificação."
    ],
    correctIndex: 1,
    rationale: "Para garantir a segurança dos profissionais de saúde e trabalhadores da limpeza, as caixas coletoras rígidas de perfurocortantes devem ser fechadas e lacradas quando atingirem o limite de 3/4 do volume útil, evitando acidentes por agulhas expostas."
  },
  {
    id: "q_sem1_9",
    category: "s1_biosseguranca",
    question: "A Norma Regulamentadora 32 (NR 32) proíbe expressamente o uso de adornos pessoais nos postos de trabalho dos profissionais de saúde. Qual a justificativa científica dessa medida?",
    options: [
      "Evitar o roubo ou perda desses itens valiosos nas clínicas.",
      "Minimizar a distração visual dos pacientes durante a terapia física.",
      "Reduzir o risco de infecções, visto que adornos servem de fômites, acumulando biofilmes patogênicos que resistem à higienização das mãos.",
      "Padronizar a estética e uniformização visual de forma corporativa."
    ],
    correctIndex: 2,
    rationale: "Adornos (anéis, alianças, relógios, pulseiras) acumulam sujeira e microrganismos de difícil remoção. A remoção de adornos é essencial para garantir a eficácia da fricção de antissépticos e lavagem de mãos nas práticas de controle de infecção."
  },
  {
    id: "q_sem1_10",
    category: "s1_biosseguranca",
    question: "No planejamento de segurança clínica, o Mapa de Risco utiliza círculos de diâmetros diferentes. O tamanho do círculo representa:",
    options: [
      "A quantidade de funcionários expostos em cada setor.",
      "A gravidade e intensidade do risco presente (pequeno, médio ou grande).",
      "O orçamento financeiro investido na compra de EPIs daquele departamento.",
      "O número de saídas de emergência disponíveis na planta."
    ],
    correctIndex: 1,
    rationale: "No Mapa de Risco, a dimensão do círculo sinaliza a intensidade do risco avaliado no ambiente de trabalho: círculos pequenos indicam risco leve; círculos médios, risco moderado; e círculos grandes representam risco elevado/grave."
  },
  {
    id: "q_sem1_11",
    category: "s1_saude_coletiva",
    question: "A 8ª Conferência Nacional de Saúde, realizada em 1986 sob a liderança do sanitarista Sérgio Arouca, é um marco histórico porque:",
    options: [
      "Definiu o fechamento dos hospitais filantrópicos no país.",
      "Propôs a criação de convênios médicos privados obrigatórios.",
      "Consolidou as bases ideológicas da Reforma Sanitária, definindo a saúde como direito de todos e dever do Estado, dando origem ao SUS.",
      "Criou o primeiro programa de residência médica em cirurgia plástica."
    ],
    correctIndex: 2,
    rationale: "A 8ª Conferência foi a primeira de caráter democrático com ampla participação da sociedade civil. O relatório final da conferência delineou as bases conceituais, doutrinárias e diretrizes organizativas que foram inseridas na Constituição Federal de 1988 para instituir o SUS."
  },
  {
    id: "q_sem1_12",
    category: "s1_saude_coletiva",
    question: "O princípio do SUS que estabelece a garantia de assistência integral em todos os níveis de complexidade, englobando a promoção, proteção, recuperação e reabilitação da saúde, é o princípio da:",
    options: [
      "Universalidade",
      "Hierarquização",
      "Equidade",
      "Integralidade"
    ],
    correctIndex: 3,
    rationale: "A Integralidade (princípio doutrinário) preconiza que a atenção à saúde deve considerar o indivíduo como um todo biopsicossocial, atendendo a todas as suas demandas de saúde de forma contínua, do cuidado preventivo básico até a reabilitação avançada."
  },
  {
    id: "q_sem1_13",
    category: "s1_saude_coletiva",
    question: "Como a Saúde Coletiva analisa o processo de adoecimento em contraposição à Saúde Pública tradicional?",
    options: [
      "Considera a doença como um fenômeno puramente biológico e individual.",
      "Baseia-se unicamente nas descobertas dos exames de imagem e exames laboratoriais.",
      "Analisa a saúde-doença como um processo social complexo determinado pelas condições sociais, econômicas e históricas de vida das populações.",
      "Desconsidera totalmente os estudos estatísticos e a epidemiologia matemática."
    ],
    correctIndex: 2,
    rationale: "A Saúde Coletiva rompe com a visão puramente biológica da patologia (modelo biomédico) e entende que o adoecimento é influenciado pelos determinantes sociais da saúde (saneamento, alimentação, renda, acesso à cultura, etc.)."
  },
  {
    id: "q_sem1_14",
    category: "s1_saude_coletiva",
    question: "Na organização da Atenção Primária à Saúde no Brasil, qual é o modelo prioritário de reorganização dos serviços básicos nas comunidades?",
    options: [
      "Estratégia Saúde da Família (ESF)",
      "Pronto Atendimento de Urgência de 24h",
      "Mutirões de Especialidades Cirúrgicas",
      "Consultórios Médicos Populares Particulares"
    ],
    correctIndex: 0,
    rationale: "A ESF atua como modelo prioritário para consolidar e expandir a atenção básica no SUS. Ela opera com território delimitado, cadastro de famílias, equipes multiprofissionais e busca ativa focado na prevenção e promoção."
  },
  {
    id: "q_sem1_15",
    category: "s1_saude_coletiva",
    question: "Qual Sistema de Informação em Saúde (SIS) do SUS coleta dados a partir das Declarações de Óbito (DO) para subsidiar estudos epidemiológicos sobre causas de morte?",
    options: [
      "SINASC",
      "SIH/SUS",
      "SIM",
      "SISVAN"
    ],
    correctIndex: 2,
    rationale: "O SIM (Sistema de Informações sobre Mortalidade) compila informações brutas a partir das DOs médicas emitidas em território nacional, permitindo que gestores analisem as causas mais incidentes de óbito e tracem planos preventivos."
  },
  {
    id: "q_sem1_16",
    category: "s1_epidemiologia",
    question: "Um estudo epidemiológico que parte da causa (exposição) em direção ao efeito, acompanhando prospectivamente no tempo um grupo exposto a um fator de risco e outro não exposto, é denominado:",
    options: [
      "Estudo Ecológico",
      "Estudo de Caso-Controle",
      "Estudo de Coorte",
      "Ensaio Clínico Laboratorial"
    ],
    correctIndex: 2,
    rationale: "O estudo de Coorte é um desenho observacional longitudinal no qual os participantes expostos e não expostos ao fator em estudo são acompanhados prospectivamente no tempo para observar o desenvolvimento da doença de interesse."
  },
  {
    id: "q_sem1_17",
    category: "s1_epidemiologia",
    question: "O termo 'Tripla Carga de Doenças' representa a transição epidemiológica brasileira. O que a caracteriza?",
    options: [
      "Aumento da taxa de mortalidade infantil, materna e fetal nas capitais.",
      "A coexistência de surtos e epidemias de doenças transmissíveis, aumento expressivo das doenças crônicas não transmissíveis e alta incidência de traumas por causas externas (acidentes e violência).",
      "Sobrecarga nas contas da união, dos estados e dos municípios.",
      "Ocorrência de gripe aviária, peste suína e dengue simultaneamente."
    ],
    correctIndex: 1,
    rationale: "Diferente dos países desenvolvidos, que erradicaram a maior parte das doenças infecciosas antes do aumento das crônicas, o Brasil enfrenta um paradoxo de triplo desafio: doenças infecciosas remanescentes, aumento das crônicas decorrente do envelhecimento, e violência urbana/trânsito."
  },
  {
    id: "q_sem1_18",
    category: "s1_epidemiologia",
    question: "Qual indicador epidemiológico é calculado pela divisão do número de novos casos diagnosticados de uma doença em um período pelo número total de pessoas expostas ao risco de contraí-la?",
    options: [
      "Prevalência",
      "Morbidade acumulada",
      "Taxa de Incidência",
      "Taxa de Letalidade"
    ],
    correctIndex: 2,
    rationale: "A incidência representa a taxa de novos casos que surgem em uma população em risco durante um período específico. Difere da prevalência, que inclui todos os casos (novos e antigos) ativos em um ponto no tempo."
  },
  {
    id: "q_sem1_19",
    category: "s1_epidemiologia",
    question: "No desenho de um estudo Caso-Controle, os grupos de participantes são selecionados a partir de:",
    options: [
      "Sua renda mensal familiar declarada no censo.",
      "Sua exposição prévia a produtos poluentes ou tóxicos.",
      "A presença ou ausência da doença (efeito) em estudo, investigando retrospectivamente o histórico de exposições a fatores de risco.",
      "Sua concordância voluntária em tomar uma vacina teste experimental."
    ],
    correctIndex: 2,
    rationale: "Os estudos Caso-Controle iniciam com indivíduos que possuem a doença (Casos) e indivíduos sem a doença (Controles). O investigador examina retrospectivamente (voltando no tempo) o histórico de ambos para mapear a exposição prévia aos fatores causais."
  },
  {
    id: "q_sem1_20",
    category: "s1_epidemiologia",
    question: "O regulamento de Notificação Compulsória de doenças do SUS exige que:",
    options: [
      "Apenas hospitais públicos realizem a notificação de exames rotineiros.",
      "Os médicos e profissionais de saúde comuniquem obrigatoriamente a ocorrência de certas patologias de risco (como dengue, tuberculose, meningite) à vigilância epidemiológica.",
      "Pacientes publiquem seus históricos de exames clínicos na internet para consulta nacional pública.",
      "As farmácias registrem todas as vendas de analgésicos e fitoterápicos."
    ],
    correctIndex: 1,
    rationale: "A notificação compulsória é um dever legal e ético de profissionais e gestores de saúde, visando alertar rapidamente as autoridades públicas sobre surtos ou avanço de doenças transmissíveis para tomada rápida de medidas de controle sanitário."
  },
  {
    id: "q_sem1_21",
    category: "s1_exp_prof",
    question: "No perfil moderno de atuação do fisioterapeuta, a empatia e a capacidade de escuta ativa durante o acolhimento clínico são qualificadas como:",
    options: [
      "Hard Skills (competências técnicas)",
      "Soft Skills (competências comportamentais)",
      "Technical Skills (habilidades mecânicas)",
      "Digital Skills (habilidades tecnológicas)"
    ],
    correctIndex: 1,
    rationale: "Soft skills correspondem às competências interpessoais e socioemocionais (comunicação, inteligência emocional, trabalho em equipe e empatia), indispensáveis para estabelecer a aliança terapêutica e a humanização no atendimento de saúde."
  },
  {
    id: "q_sem1_22",
    category: "s1_exp_prof",
    question: "O código de ética profissional de Fisioterapia estabelecido pelo COFFITO regulamenta a divulgação de resultados clínicos. Qual conduta é considerada infração ética?",
    options: [
      "Apresentar casos clínicos de forma anônima em congressos acadêmicos científicos.",
      "Publicar fotos de 'antes e depois' identificando rostos de pacientes e expondo dados de prontuário em redes sociais para fins puramente comerciais.",
      "Manter o prontuário digital seguro com criptografia forte contra vazamentos.",
      "Discutir diagnósticos funcionais em reuniões clínicas privadas de equipe multipessoal."
    ],
    correctIndex: 1,
    rationale: "De acordo com as resoluções do COFFITO, expor a imagem do paciente, expor sua identidade e divulgar dados sem fins estritamente acadêmicos/científicos e sem autorização expressa é uma violação do sigilo profissional e do código de ética."
  },
  {
    id: "q_sem1_23",
    category: "s1_exp_prof",
    question: "O que representa a 'resolubilidade clínica' na conduta profissional de um fisioterapeuta?",
    options: [
      "O número absoluto de consultas realizadas e faturadas por dia útil na clínica.",
      "A capacidade de resolver com eficácia as disfunções cinético-funcionais do paciente, devolvendo autonomia, funcionalidade e alívio da dor.",
      "A habilidade de delegar todas as sessões de reabilitação para auxiliares e estagiários.",
      "A aplicação compulsória de protocolos idênticos para todos os pacientes."
    ],
    correctIndex: 1,
    rationale: "A resolubilidade é o grau de eficácia do atendimento fisioterapêutico, ou seja, se a conduta clínica do profissional de fato resolve a queixa de dor e restrição de mobilidade do paciente, melhorando sua autonomia e qualidade de vida."
  },
  {
    id: "q_sem1_24",
    category: "s1_exp_prof",
    question: "Para obter a autorização legal e o registro necessário para a atuação profissional de Fisioterapia no Brasil, o recém-formado deve solicitar inscrição no:",
    options: [
      "Conselho Federal de Medicina (CFM)",
      "Conselho Regional de Fisioterapia e Terapia Ocupacional (CREFITO)",
      "Sindicato Nacional de Trabalhadores em Saúde (SINDSAÚDE)",
      "Conselho Federal de Farmácia (CFF)"
    ],
    correctIndex: 1,
    rationale: "O registro profissional e fiscalização direta da atividade do fisioterapeuta em cada estado ou região geográfica são competências do CREFITO (Conselho Regional de Fisioterapia e Terapia Ocupacional)."
  },
  {
    id: "q_sem1_25",
    category: "s1_exp_prof",
    question: "Qual a importância das atividades acadêmicas de extensão universitária na construção da carreira da saúde?",
    options: [
      "Evitar que o aluno precise estudar as matérias teóricas curriculares.",
      "Reduzir o tempo total exigido de formação acadêmica na faculdade.",
      "Aproximar o estudante da prática social comunitária, aplicando o conhecimento da academia para responder às necessidades de saúde reais da população.",
      "Garantir a aprovação automática em todas as disciplinas de provas escritas."
    ],
    correctIndex: 2,
    rationale: "Os projetos de extensão cumprem a função social de integrar o conhecimento da universidade com a comunidade, promovendo a vivência de saúde em cenários reais, fortalecendo a empatia e o perfil prático do futuro profissional."
  },
  {
    id: "q_sem2_1",
    category: "s2_prod_conhecimento",
    question: "Qual é a etapa inicial obrigatória do método científico para o desenvolvimento de uma pesquisa clínica?",
    options: [
      "A redação final do artigo científico.",
      "A observação de um fenômeno ou problema e a formulação de uma pergunta de pesquisa clara.",
      "A aplicação compulsória de placebo nos indivíduos.",
      "O patenteamento imediato de uma ideia inovadora."
    ],
    correctIndex: 1,
    rationale: "Toda investigação científica começa com a observação minuciosa e a definição precisa de uma dúvida ou problema a ser investigado, estruturado na forma de uma pergunta científica clara."
  },
  {
    id: "q_sem2_2",
    category: "s2_prod_conhecimento",
    question: "Na metodologia de pesquisa acadêmica, qual a diferença entre pesquisa qualitativa e quantitativa?",
    options: [
      "A pesquisa quantitativa avalia dados numéricos e métricas estatísticas; a qualitativa foca na compreensão profunda de percepções, significados e relatos subjetivos.",
      "A qualitativa é sempre superior cientificamente em relação à quantitativa.",
      "A quantitativa utiliza apenas estudos retrospectivos simples em animais.",
      "Não há diferença prática, ambas utilizam as mesmas ferramentas matemáticas."
    ],
    correctIndex: 0,
    rationale: "Estudos quantitativos coletam dados empíricos passíveis de análise estatística, enquanto estudos qualitativos focam na subjetividade, buscando entender crenças, comportamentos e contextos sociais."
  },
  {
    id: "q_sem2_3",
    category: "s2_prod_conhecimento",
    question: "A apropriação inadequada de ideias, formulações ou trechos escritos de outro autor sem a devida citação e referência é classificada como:",
    options: [
      "Tradução científica livre.",
      "Paráfrase acadêmica aceitável.",
      "Plágio, constituindo grave infração ética e legal.",
      "Direito de livre uso compartilhado."
    ],
    correctIndex: 2,
    rationale: "O plágio ocorre quando se apresenta a autoria de ideias ou textos de outrem como se fossem originais do autor da pesquisa, violando preceitos éticos acadêmicos e leis de direitos autorais."
  },
  {
    id: "q_sem2_4",
    category: "s2_prod_conhecimento",
    question: "Ao redigir um projeto de pesquisa, a definição provisória de uma resposta esperada para a pergunta científica do estudo é denominada:",
    options: [
      "Variável independente",
      "Hipótese de pesquisa",
      "Análise univariada",
      "Revisão integrativa"
    ],
    correctIndex: 1,
    rationale: "A hipótese é uma proposição testável e lógica formulada pelo pesquisador como resposta preliminar ao problema sugerido, cuja validação se dá por meio da coleta e análise dos dados."
  },
  {
    id: "q_sem2_5",
    category: "s2_prod_conhecimento",
    question: "Qual das seguintes ferramentas digitais é considerada uma base de dados científica internacional de excelência para busca de artigos na área da saúde?",
    options: [
      "Wikipédia",
      "PubMed (Medline)",
      "Google Acadêmico Geral sem filtros",
      "Redes sociais de pesquisadores acadêmicos"
    ],
    correctIndex: 1,
    rationale: "O PubMed é a base de dados mantida pela Biblioteca Nacional de Medicina dos EUA (NLM), indexando as principais publicações médicas internacionais revisadas por pares, sendo padrão-ouro na área da saúde."
  },
  {
    id: "q_sem2_6",
    category: "s2_bioquimica",
    question: "Qual é a principal molécula transportadora e armazenadora de energia química livre utilizada pelas células para realizar trabalho mecânico?",
    options: [
      "Glicose livre",
      "Ácido lático",
      "Triglicerídeo",
      "Adenosina Trifosfato (ATP)"
    ],
    correctIndex: 3,
    rationale: "O ATP é a 'moeda energética' da célula. A clivagem de suas ligações de alta energia (liberando fosfato e gerando ADP) fornece a energia necessária para processos celulares, inclusive a contração muscular."
  },
  {
    id: "q_sem2_7",
    category: "s2_bioquimica",
    question: "Durante a via da glicólise anaeróbica (ausência de oxigênio suficiente no tecido muscular), qual metabólito final é acumulado na célula?",
    options: [
      "Piruvato",
      "Lactato",
      "Acetil-CoA",
      "Creatina Fosfato"
    ],
    correctIndex: 1,
    rationale: "Na ausência de oxigênio adequado ou sob taxas elevadas de esforço, o piruvato gerado pela glicólise é reduzido a lactato no citosol celular pela enzima lactato desidrogenase, regenerando o NAD+ necessário para manter a glicólise ativa."
  },
  {
    id: "q_sem2_8",
    category: "s2_bioquimica",
    question: "As enzimas atuam como catalisadores biológicos nos processos celulares. A sua principal função cinética é:",
    options: [
      "Aumentar a energia de ativação necessária para iniciar uma reação química.",
      "Diminuir a energia de ativação, acelerando consideravelmente a velocidade da reação.",
      "Inibir a quebra de macronutrientes na digestão.",
      "Alterar a constante de equilíbrio termodinâmico final da reação."
    ],
    correctIndex: 1,
    rationale: "Enzimas são proteínas funcionais que diminuem o limiar de energia requerido para que os reagentes alcancem o estado de transição, aumentando drasticamente a velocidade das reações metabólicas."
  },
  {
    id: "q_sem2_9",
    category: "s2_bioquimica",
    question: "O Ciclo de Krebs (Ciclo do Ácido Cítrico) ocorre em qual compartimento da célula eucariótica?",
    options: [
      "Citosol",
      "Ribossomos",
      "Matriz mitocondrial",
      "Complexo de Golgi"
    ],
    correctIndex: 2,
    rationale: "O Ciclo de Krebs é uma via metabólica oxidativa aeróbica que ocorre exclusivamente no interior da matriz mitocondrial, onde converte grupos acetil da acetil-CoA em CO2, gerando NADH, FADH2 e GTP/ATP."
  },
  {
    id: "q_sem2_10",
    category: "s2_bioquimica",
    question: "Para atividades de altíssima intensidade e curtíssima duração (ex: corrida de 100m ou levantamento de peso), o sistema energético muscular predominante de ressíntese rápida de ATP é:",
    options: [
      "Ciclo de Krebs e Fosforilação Oxidativa",
      "Beta-oxidação de ácidos graxos",
      "Sistema dos Fosfagênios (ATP-CP ou Creatina Fosfato)",
      "Glicólise aeróbica"
    ],
    correctIndex: 2,
    rationale: "O sistema ATP-CP (anaeróbico alático) utiliza as reservas de creatina fosfato pré-existentes na célula muscular para doar um grupo fosfato ao ADP de forma imediata e rápida, sustentando contrações de máxima potência por cerca de 8 a 10 segundos."
  },
  {
    id: "q_sem2_11",
    category: "s2_anatomofisio_1",
    question: "Qual é a camada mais externa e avascular do sistema tegumentar, composta por epitélio queratinizado?",
    options: [
      "Derme papilar",
      "Hipoderme (tecido subcutâneo)",
      "Epiderme",
      "Derme reticular"
    ],
    correctIndex: 2,
    rationale: "A epiderme é a camada superficial da pele, composta por epitélio pavimentoso estratificado queratinizado. Não possui vasos sanguíneos próprios, sendo nutrida por difusão a partir da derme subjacente."
  },
  {
    id: "q_sem2_12",
    category: "s2_anatomofisio_1",
    question: "Qual é a menor unidade funcional e contrátil da fibra muscular esquelética, delimitada entre duas linhas Z consecutivas?",
    options: [
      "Miofibrila",
      "Sarcômero",
      "Sarcolema",
      "Fáscia muscular"
    ],
    correctIndex: 1,
    rationale: "O sarcômero é a unidade funcional da contração muscular, contendo filamentos finos (actina) e grossos (miosina) que se deslizam mutuamente após o influxo de cálcio intracelular."
  },
  {
    id: "q_sem2_13",
    category: "s2_anatomofisio_1",
    question: "No tecido ósseo, as células gigantes multinucleadas responsáveis pela reabsorção da matriz óssea mineralizada e remodelação óssea contínua são os:",
    options: [
      "Osteoblastos",
      "Osteócitos",
      "Osteoclastos",
      "Condrócitos"
    ],
    correctIndex: 2,
    rationale: "Os osteoclastos reabsorvem o tecido ósseo degradando a matriz mineral com ácidos e enzimas. Trabalham em equilíbrio com os osteoblastos (responsáveis pela síntese e deposição de osso novo) na remodelação óssea."
  },
  {
    id: "q_sem2_14",
    category: "s2_anatomofisio_1",
    question: "Quais estruturas anatômicas compõem o Sistema Nervoso Central (SNC) dos vertebrados?",
    options: [
      "Nervos cranianos e gânglios espinhais",
      "Encéfalo e medula espinhal",
      "Nervos periféricos e placas motoras",
      "Sistema nervoso simpático e parassimpático periférico"
    ],
    correctIndex: 1,
    rationale: "O SNC compreende a porção do sistema nervoso protegida pelo esqueleto axial (crânio e coluna vertebral), sendo constituído pelo encéfalo e pela medula espinhal."
  },
  {
    id: "q_sem2_15",
    category: "s2_anatomofisio_1",
    question: "Na sinapse química da junção neuromuscular, qual neurotransmissor é liberado pelo terminal axônico para despolarizar a membrana da fibra muscular?",
    options: [
      "Dopamina",
      "Serotonina",
      "Noraadrenalina",
      "Acetilcolina (ACh)"
    ],
    correctIndex: 3,
    rationale: "A acetilcolina é o neurotransmissor exclusivo da placa motora somática. Sua liberação e ligação aos receptores nicotínicos pós-sinápticos geram influxo de sódio, desencadeando o potencial de ação muscular."
  },
  {
    id: "q_sem2_16",
    category: "s2_anatomofisio_2",
    question: "Em qual órgão do sistema digestório ocorre a maior parte da digestão enzimática e da absorção de nutrientes?",
    options: [
      "Estômago",
      "Intestino Delgado",
      "Intestino Grosso",
      "Esôfago"
    ],
    correctIndex: 1,
    rationale: "O intestino delgado (duodeno, jejuno e íleo) possui dobras circulares, vilosidades e microvilosidades que ampliam a área de superfície, sendo o local onde ocorre a digestão final e absorção da maioria dos nutrientes."
  },
  {
    id: "q_sem2_17",
    category: "s2_anatomofisio_2",
    question: "Qual hormônio hipoglicemiante é sintetizado e secretado pelas células beta dos ilhotas pancreáticas?",
    options: [
      "Glucagon",
      "Cortisol",
      "Insulina",
      "Somatotrofina"
    ],
    correctIndex: 2,
    rationale: "A insulina é o único hormônio hipoglicemiante do corpo. Promove a captação de glicose circulante pelos tecidos (principalmente muscular e adiposo) e induz a síntese de glicogênio hepático."
  },
  {
    id: "q_sem2_18",
    category: "s2_anatomofisio_2",
    question: "Qual é a unidade funcional dos rins responsável pela filtração do sangue, reabsorção de água e secreção de eletrólitos para a formação da urina?",
    options: [
      "Néfron",
      "Glomérulo isolado",
      "Cálice renal",
      "Uretra"
    ],
    correctIndex: 0,
    rationale: "Cada rim possui cerca de 1 milhão de néfrons. O néfron é a unidade morfofuncional renal, composto pelo corpúsculo renal (filtração) e pelo sistema tubular (reabsorção e secreção)."
  },
  {
    id: "q_sem2_19",
    category: "s2_anatomofisio_2",
    question: "Qual a principal função do Hormônio Antidiurético (ADH ou Vasopressina) no sistema renal?",
    options: [
      "Induzir a eliminação maciça de água na urina.",
      "Aumentar a permeabilidade à água nos ductos coletores renais, promovendo reabsorção hídrica e concentrando a urina.",
      "Estimular a filtração glomerular de proteínas.",
      "Provocar a secreção de potássio na urina."
    ],
    correctIndex: 1,
    rationale: "Secretado pela neuro-hipófise, o ADH atua nos túbulos contorcidos distais e ductos coletores renais abrindo canais de aquaporina, favorecendo a reabsorção de água livre para o sangue e reduzindo o volume urinário."
  },
  {
    id: "q_sem2_20",
    category: "s2_anatomofisio_2",
    question: "Qual glândula do sistema endócrino é denominada 'glândula mestra' por controlar e secretar hormônios trópicos que regulam outras glândulas periféricas?",
    options: [
      "Glândula Tireoide",
      "Glândula Suprarrenal",
      "Hipófise (Glândula Pituitária)",
      "Pâncreas"
    ],
    correctIndex: 2,
    rationale: "A hipófise controla a atividade secretora da tireoide, córtex suprarrenal e gônadas através de seus hormônios trópicos (TSH, ACTH, FSH, LH), sob regulação direta do hipotálamo."
  },
  {
    id: "q_sem2_21",
    category: "s2_exp_prof",
    question: "A atuação interdisciplinar do fisioterapeuta em equipes de saúde hospitalar exige cooperação. Qual atitude clínica reflete essa prática?",
    options: [
      "Modificar a prescrição medicamentosa do paciente sem aval médico.",
      "Discutir o plano terapêutico com enfermeiros, médicos e fonoaudiólogos para integrar os cuidados de reabilitação e otimizar a alta clínica.",
      "Realizar testes ortopédicos e ignorar os exames de imagem anexados.",
      "Isolar o paciente e realizar as sessões sem registrar evolução em prontuário comum."
    ],
    correctIndex: 1,
    rationale: "A interdisciplinaridade exige comunicação ativa e cooperação profissional. Planos integrados e prontuários multiprofissionais diminuem intercorrências e aceleram a recuperação do paciente."
  },
  {
    id: "q_sem2_22",
    category: "s2_exp_prof",
    question: "Diante de um paciente com queixas vagas de dor crônica que não responde às condutas físicas e demonstra sinais de depressão profunda, qual a conduta adequada?",
    options: [
      "Continuar o tratamento físico indefinitely sem alteração.",
      "Indicar a suspensão do tratamento e alta compulsória por falta de cooperação.",
      "Acolher o paciente e sugerir o encaminhamento ético para avaliação psicológica ou psiquiátrica em equipe.",
      "Prescrever antidepressivos fitoterápicos leves."
    ],
    correctIndex: 2,
    rationale: "O fisioterapeuta atua dentro do modelo biopsicossocial. Identificar demandas emocionais e encaminhar o paciente aos profissionais competentes (como psicólogos) é dever ético e clínico."
  },
  {
    id: "q_sem2_23",
    category: "s2_exp_prof",
    question: "Em termos de biossegurança e postura profissional contemporânea, qual a orientação sobre unhas e adornos na clínica de fisioterapia?",
    options: [
      "Unhas longas são permitidas desde que pintadas com cores discretas.",
      "Unhas devem ser mantidas curtas, limpas e sem adornos nas mãos/pulsos para garantir eficácia na higienização e evitar lesões na pele do paciente.",
      "O uso de relógio de pulso é obrigatório para marcar o tempo exato das condutas manuais.",
      "Anéis grandes podem ser usados se o profissional utilizar luvas por cima."
    ],
    correctIndex: 1,
    rationale: "Unhas curtas e ausência de adornos (relógios, anéis) previnem arranhões durante manobras de terapia manual e eliminam fômites difíceis de desinfetar, conforme preconiza a NR 32."
  },
  {
    id: "q_sem2_24",
    category: "s2_exp_prof",
    question: "Ao registrar a evolução diária de um atendimento em Fisioterapia, qual elemento é indispensável por exigência legal e do prontuário ético?",
    options: [
      "Apenas a assinatura do paciente atestando a presença.",
      "A descrição das técnicas aplicadas, parâmetros utilizados, resposta clínica imediata, data, carimbo com registro CREFITO e assinatura.",
      "Um breve resumo semanal sem necessidade de data detalhada.",
      "A anotação de valores financeiros e taxas de cobrança."
    ],
    correctIndex: 1,
    rationale: "O registro detalhado da evolução em prontuário é um documento legal que atesta a assistência realizada, devendo ser datado, assinado e carimbado com o número de inscrição regional do profissional."
  },
  {
    id: "q_sem2_25",
    category: "s2_exp_prof",
    question: "O termo 'Prática Baseada em Evidências' (PBE) na fisioterapia moderna define a tomada de decisão clínica fundamentada em:",
    options: [
      "Opiniões pessoais de colegas mais experientes sem base empírica.",
      "Integração da melhor evidência científica disponível com a expertise do clínico e os valores/preferências do paciente.",
      "Seguir unicamente os protocolos corporativos sem adaptação.",
      "Utilizar apenas técnicas históricas tradicionais descritas no século XIX."
    ],
    correctIndex: 1,
    rationale: "A PBE não se baseia apenas em artigos acadêmicos isolados, mas sim no tripé: evidências científicas de alta qualidade, julgamento profissional do terapeuta e a individualidade/desejo do paciente."
  },
  {
    id: "q_sem3_1",
    category: "s3_empreendedorismo",
    question: "No planejamento estratégico de uma clínica de Fisioterapia, o quadro visual Canvas é útil porque:",
    options: [
      "Substitui a necessidade de registro da empresa nos órgãos fiscais.",
      "Permite estruturar e visualizar em um único painel os eixos de valor, clientes, parceiros, recursos e canais do negócio.",
      "Serve para calcular automaticamente o imposto de renda anual.",
      "Determina a escala salarial rígida dos funcionários."
    ],
    correctIndex: 1,
    rationale: "O Business Model Canvas é uma ferramenta de gestão estratégica para esboçar e testar modelos de negócios de forma dinâmica e colaborativa, otimizando o planejamento de consultórios e clínicas."
  },
  {
    id: "q_sem3_2",
    category: "s3_empreendedorismo",
    question: "Qual ferramenta financeira gerencial monitora detalhadamente as entradas (receitas) e saídas (despesas) de dinheiro em uma clínica em um dado período?",
    options: [
      "Balanço Patrimonial rígido anual",
      "Fluxo de Caixa",
      "Demonstração de Lucros Acumulados",
      "Orçamento de Capital Fixo"
    ],
    correctIndex: 1,
    rationale: "O fluxo de caixa registra de forma operacional todas as movimentações financeiras, permitindo ao gestor prever sobras ou faltas de caixa e tomar decisões de curto prazo de forma segura."
  },
  {
    id: "q_sem3_3",
    category: "s3_empreendedorismo",
    question: "A criação de um protótipo simplificado de serviço clínico para testar sua aceitação no mercado com o menor custo possível é denominada:",
    options: [
      "Franquia corporativa",
      "Mínimo Produto Viável (MVP)",
      "Fusão de mercado",
      "Pesquisa de marcas patenteadas"
    ],
    correctIndex: 1,
    rationale: "O MVP permite testar as hipóteses de um novo negócio ou serviço real diretamente com os clientes, exigindo o mínimo de esforço de desenvolvimento e recursos."
  },
  {
    id: "q_sem3_4",
    category: "s3_empreendedorismo",
    question: "Como a clínica de Fisioterapia pode utilizar o marketing de relacionamento de forma ética?",
    options: [
      "Oferecendo brindes farmacêuticos proibidos por lei.",
      "Criando canais de comunicação com informativos preventivos de saúde e prestando assistência pós-alta para fidelizar e cuidar do paciente.",
      "Enviando mensagens promocionais de serviços invasivos sem aval ético.",
      "Divulgando nomes de pacientes curados para atrair clientes novos."
    ],
    correctIndex: 1,
    rationale: "O marketing de relacionamento na saúde foca na satisfação e no valor percebido pelo paciente por meio da informação ética e cuidado continuado, respeitando as normas dos conselhos profissionais."
  },
  {
    id: "q_sem3_5",
    category: "s3_empreendedorismo",
    question: "Custos fixos de um consultório de Fisioterapia são aqueles que:",
    options: [
      "Variam de acordo com o número de pacientes atendidos no mês.",
      "Permanecem constantes independentemente do volume de atendimentos (ex: aluguel e assinatura de softwares de gestão).",
      "São pagos apenas uma vez na abertura da clínica.",
      "Oscilam conforme as taxas de juros bancárias externas."
    ],
    correctIndex: 1,
    rationale: "Custos fixos não dependem da produtividade mensal da clínica (ex: aluguel do espaço físico, contas de internet). Devem ser pagos mesmo se o consultório não realizar atendimentos."
  },
  {
    id: "q_sem3_6",
    category: "s3_movimento",
    question: "O plano sagital divide o corpo humano em partes:",
    options: [
      "Superior e inferior",
      "Anterior e posterior",
      "Direita e esquerda",
      "Superficial e profunda"
    ],
    correctIndex: 2,
    rationale: "O plano sagital (ou mediano) corta o corpo de forma anteroposterior, dividindo-o em metades direita e esquerda. Movimentos como flexão e extensão ocorrem neste plano."
  },
  {
    id: "q_sem3_7",
    category: "s3_movimento",
    question: "Os movimentos corporais de Abdução e Adução (como os do ombro ou quadril) ocorrem em qual plano anatômico e em torno de qual eixo?",
    options: [
      "Plano frontal (coronal) e eixo anteroposterior",
      "Plano sagital e eixo laterolateral",
      "Plano transversal e eixo longitudinal",
      "Plano inclinado oblíquo e eixo vertical"
    ],
    correctIndex: 0,
    rationale: "A abdução (afastamento da linha média) e adução (aproximação da linha média) ocorrem no plano frontal, que divide o corpo em anterior/posterior, girando ao redor de um eixo anteroposterior."
  },
  {
    id: "q_sem3_8",
    category: "s3_movimento",
    question: "No corpo humano, o sistema neuromuscular funciona por alavancas biomecânicas. Uma alavanca onde a força potente (inserção muscular) situa-se entre o ponto de apoio (articulação) e a força resistente (peso do segmento ou carga externa) é denominada:",
    options: [
      "Alavanca de Primeira Classe (Interfixa)",
      "Alavanca de Segunda Classe (Inter-resistente)",
      "Alavanca de Terceira Classe (Interpotente)",
      "Alavanca Neutra"
    ],
    correctIndex: 2,
    rationale: "A maioria das articulações do corpo atua como alavanca interpotente (ex: flexão do cotovelo pelo bíceps braquial). Elas priorizam a velocidade e a amplitude de movimento em detrimento da vantagem mecânica de força."
  },
  {
    id: "q_sem3_9",
    category: "s3_movimento",
    question: "Os músculos que auxiliam indiretamente o músculo motor primário (agonista) a realizar um movimento, estabilizando articulações adjacentes ou refinando a trajetória do movimento, são os:",
    options: [
      "Antagonistas",
      "Sinergistas",
      "Fixadores estáticos isolados",
      "Agonistas puros"
    ],
    correctIndex: 1,
    rationale: "Os sinergistas atuam em conjunto com os agonistas para que o movimento ocorra sem desvios indesejados, agindo como neutralizadores ou estabilizadores da mecânica articular."
  },
  {
    id: "q_sem3_10",
    category: "s3_movimento",
    question: "Um exercício de flexão de braço no solo (apoio de frente), onde o segmento distal (mãos) permanece fixo em contato com uma superfície de suporte estável e os segmentos proximais se movem, caracteriza um exercício de:",
    options: [
      "Cadeia Cinética Aberta (CCA)",
      "Cadeia Cinética Fechada (CCF)",
      "Isocinético assistido passivo",
      "Contração isométrica isolada de ombro"
    ],
    correctIndex: 1,
    rationale: "Nos exercícios em Cadeia Cinética Fechada (CCF), o segmento distal (mão/pé) está fixado a uma superfície inamovível, e o movimento ocorre com translação dos segmentos proximais, promovendo co-contração articular."
  },
  {
    id: "q_sem3_11",
    category: "s3_fundamentos_etica",
    question: "Em qual ano e por meio de qual veículo normativo a profissão de Fisioterapeuta foi regulamentada em lei nacional no Brasil?",
    options: [
      "1988, pela Constituição Federal",
      "1969, pelo Decreto-Lei nº 938",
      "1975, pela Lei nº 6.316",
      "1993, pelo Código Civil"
    ],
    correctIndex: 1,
    rationale: "O Decreto-Lei nº 938, de 13 de outubro de 1969, proveu a regulamentação profissional conjunta das atividades de Fisioterapia e Terapia Ocupacional em território nacional."
  },
  {
    id: "q_sem3_12",
    category: "s3_fundamentos_etica",
    question: "A autarquia federal de direito público responsável por normatizar, fiscalizar o exercício ético da Fisioterapia e julgar recursos éticos em segunda instância no Brasil é o:",
    options: [
      "CREFITO",
      "COFFITO",
      "Ministério da Saúde",
      "Sindicato dos Fisioterapeutas"
    ],
    correctIndex: 1,
    rationale: "O COFFITO (Conselho Federal) é o órgão central de regulamentação ética nacional, enquanto os CREFITOs (Conselhos Regionais) executam a fiscalização direta nas respectivas jurisdições regionais."
  },
  {
    id: "q_sem3_13",
    category: "s3_fundamentos_etica",
    question: "De acordo com o Código de Ética da Fisioterapia, o profissional que prescreve tratamento físico a um paciente sem realizar uma avaliação clínica prévia comete:",
    options: [
      "Prática aceitável em casos de triagem hospitalar rápida.",
      "Infração ética grave, pois a avaliação diagnóstica funcional é prerrogativa obrigatória e anterior a qualquer conduta terapêutica.",
      "Prática opcional dependendo do desejo da gerência da clínica.",
      "Falta administrativa simples sem sanções previstas."
    ],
    correctIndex: 1,
    rationale: "Avaliar o paciente, determinar o diagnóstico funcional e estruturar o plano terapêutico antes de aplicar qualquer técnica é um dever ético fundamental. Prescrever condutas sem avaliação prévia é proibido."
  },
  {
    id: "q_sem3_14",
    category: "s3_fundamentos_etica",
    question: "Em relação à recusa de atendimento, o fisioterapeuta tem o direito ético de negar assistência em qual situação?",
    options: [
      "Quando o paciente pertence a uma classe social desfavorável.",
      "Sempre que o paciente discordar da taxa de cobrança de forma pacífica.",
      "Quando o local de trabalho não oferecer condições seguras e dignas de atendimento ou expuser o profissional a riscos injustificados.",
      "O profissional nunca pode recusar atendimento sob nenhuma hipótese."
    ],
    correctIndex: 2,
    rationale: "O código de ética garante a autonomia técnica do fisioterapeuta, permitindo recusar a prestação de serviços se as condições de trabalho forem degradantes, inseguras ou prejudiciais à dignidade humana."
  },
  {
    id: "q_sem3_15",
    category: "s3_fundamentos_etica",
    question: "Qual a obrigatoriedade legal e ética do fisioterapeuta em relação ao sigilo das informações obtidas no exercício profissional?",
    options: [
      "O sigilo é opcional se os familiares do paciente solicitarem dados verbais.",
      "É dever absoluto zelar pelo sigilo das informações e prontuários do paciente, só podendo revelá-los mediante autorização expressa do paciente ou por determinação legal judicial.",
      "O sigilo deixa de existir se o caso clínico for incomum e merecer postagem imediata na internet.",
      "Apenas ginecologistas ou psicólogos possuem dever legal de sigilo."
    ],
    correctIndex: 1,
    rationale: "O sigilo profissional protege a privacidade do paciente. Revelar fatos sigilosos sem justa causa (ex: consentimento do paciente ou ordem de juiz) é crime previsto no Código Penal e infração ética grave."
  },
  {
    id: "q_sem3_16",
    category: "s3_fisiopatologia",
    question: "Os cinco sinais cardinais da inflamação aguda tecidual local, decorrentes de alterações vasculares e liberação de mediadores químicos, são:",
    options: [
      "Parestesia, rigidez, cianose, necrose e febre.",
      "Calor, rubor, tumor (edema), dor e perda de função.",
      "Atrofia, hipotonia, palidez, parestesia e espasmo.",
      "Hipertrofia, fibrose, hemorragia, febre e prurido."
    ],
    correctIndex: 1,
    rationale: "A inflamação aguda cursa com vasodilatação (calor e rubor), aumento de permeabilidade vascular com extravasamento de líquido (tumor/edema), compressão de terminações nervosas livres (dor) e limitação funcional (perda de função)."
  },
  {
    id: "q_sem3_17",
    category: "s3_fisiopatologia",
    question: "A resposta adaptativa celular caracterizada pelo aumento do volume das células e, consequentemente, do tamanho do órgão, sem multiplicação celular, é denominada:",
    options: [
      "Hiperplasia",
      "Metaplasia",
      "Hipertrofia",
      "Atrofia"
    ],
    correctIndex: 2,
    rationale: "A hipertrofia ocorre pelo aumento na síntese de proteínas estruturais e organelas celulares em resposta a estímulos fisiológicos (ex: musculação) ou patológicos (ex: miocárdio na hipertensão)."
  },
  {
    id: "q_sem3_18",
    category: "s3_fisiopatologia",
    question: "A morte celular programada, caracterizada por um processo ativo regulado geneticamente que não gera processo inflamatório ao redor, denomina-se:",
    options: [
      "Necrose de liquefação",
      "Apoptose",
      "Necrose coagulativa",
      "Isquemia tecidual"
    ],
    correctIndex: 1,
    rationale: "A apoptose é uma morte celular organizada (ou suicídio celular) que envolve fragmentação do DNA e formação de corpos apoptóticos fagocitados sem liberação de citocinas inflamatórias, ao contrário da necrose."
  },
  {
    id: "q_sem3_19",
    category: "s3_fisiopatologia",
    question: "Qual alteração fisiopatológica promove a formação de edema generalizado (anasarca) em pacientes com insuficiência hepática ou desnutrição grave?",
    options: [
      "Aumento excessivo da pressão hidrostática arterial.",
      "Diminuição da pressão coloidosmótica (oncótica) plasmática por redução da síntese de albumina.",
      "Obstrução crônica de vasos linfáticos periféricos.",
      "Aumento da densidade do colágeno intersticial."
    ],
    correctIndex: 1,
    rationale: "A albumina produzida no fígado é o principal determinante da pressão oncótica plasmática, que retém líquido dentro dos vasos. Sua queda causa extravasamento hídrico generalizado para o espaço intersticial."
  },
  {
    id: "q_sem3_20",
    category: "s3_fisiopatologia",
    question: "A cicatrização de feridas por segunda intenção difere da cicatrização por primeira intenção por apresentar:",
    options: [
      "Aproximação cirúrgica imediata das bordas limpas.",
      "Grande perda tecidual, exigindo maior deposição de tecido de granulação e contração da ferida liderada por miofibroblastos.",
      "Ausência completa de resposta inflamatória tecidual.",
      "Retorno total da função das glândulas sudoríparas originais."
    ],
    correctIndex: 1,
    rationale: "Feridas abertas com bordas não aproximadas cicatrizam por segunda intenção. O processo é lento, com proliferação abundante de tecido conjuntivo jovem (granulação) e posterior retração cicatricial."
  },
  {
    id: "q_sem3_21",
    category: "s3_exp_prof",
    question: "A atuação do fisioterapeuta nos Núcleos de Apoio à Saúde da Família (NASF) é norteada pelo princípio do apoio matricial. Esse princípio consiste em:",
    options: [
      "Realizar atendimentos individuais e curativos isolados em clínicas privadas vinculadas.",
      "Prestar retaguarda assistencial e pedagógica compartilhada às equipes de Saúde da Família, promovendo ações coletivas, prevenção e visitas domiciliares conjuntas.",
      "Auditar as contas públicas de saúde do município de forma administrativa.",
      "Substituir os médicos de família nas consultas de rotina."
    ],
    correctIndex: 1,
    rationale: "O apoio matricial no NASF visa ampliar a resolubilidade da atenção básica, capacitando e discutindo casos com a equipe da ESF, além de criar estratégias de saúde coletiva."
  },
  {
    id: "q_sem3_22",
    category: "s3_exp_prof",
    question: "Em uma visita domiciliar da ESF, o fisioterapeuta identifica um paciente sequelado de AVC acamado com alto risco de escaras (lesões por pressão). Qual a conduta preventiva imediata recomendada?",
    options: [
      "Prescrever pomadas cicatrizantes invasivas sem aval médico.",
      "Orientar os cuidadores/familiares sobre a mudança de decúbito (posicionamento na maca) a cada 2 horas e hidratação da pele.",
      "Encaminhar o paciente imediatamente para internação de urgência em UTI.",
      "Recomendar que o paciente permaneça imóvel na mesma postura."
    ],
    correctIndex: 1,
    rationale: "Mudar a postura do paciente acamado a cada duas horas alivia a isquemia mecânica local sobre as proeminências ósseas, sendo a medida não invasiva mais eficaz contra escaras."
  },
  {
    id: "q_sem3_23",
    category: "s3_exp_prof",
    question: "Qual indicador de saúde é prioritário para orientar ações de fisioterapia preventiva em grupos de convivência de idosos na atenção primária?",
    options: [
      "Taxa de mortalidade infantil por desnutrição.",
      "Incidência de quedas domésticas e prevalência de artrose na comunidade avaliada.",
      "Número de cirurgias plásticas eletivas registradas na região.",
      "Taxa de natalidade de partos cesáreos."
    ],
    correctIndex: 1,
    rationale: "Mapear as quedas e restrições articulares nos idosos permite ao fisioterapeuta focar suas ações coletivas em exercícios de equilíbrio e fortalecimento motor na comunidade."
  },
  {
    id: "q_sem3_24",
    category: "s3_exp_prof",
    question: "Na atenção básica, as ações educativas conduzidas pelo fisioterapeuta em grupos de gestantes visam principalmente prevenir:",
    options: [
      "O surgimento de diabetes gestacional puramente por meio de remédios.",
      "Queixas de dor lombar crônica e disfunções do assoalho pélvico, promovendo orientações ergonômicas e exercícios físicos adaptados.",
      "A necessidade de consultas de pré-natal com a enfermagem.",
      "A amamentação precoce e o aleitamento materno."
    ],
    correctIndex: 1,
    rationale: "Orientar sobre a postura adequada, alongamentos e ativação do core/assoalho pélvico previne a dor musculoesquelética comum na gestação devido às mudanças gravídicas."
  },
  {
    id: "q_sem3_25",
    category: "s3_exp_prof",
    question: "Qual atitude demonstra a diretriz de Participação Popular/Controle Social do SUS no âmbito do município?",
    options: [
      "A contratação de profissionais sem concurso público.",
      "A participação ativa em Conselhos Municipais de Saúde para votar e fiscalizar a aplicação de recursos e metas de atendimento da saúde.",
      "A escolha unipessoal do Secretário de Saúde sem discussão local.",
      "O fechamento das unidades básicas de saúde nos feriados."
    ],
    correctIndex: 1,
    rationale: "Os Conselhos de Saúde são instâncias colegiadas permanentes com representação de usuários, trabalhadores e gestores, garantindo a gestão democrática do SUS."
  },
  {
    id: "q_sem4_1",
    category: "s4_farmaco",
    question: "Os Anti-inflamatórios Não Esteroidais (AINEs) agem inibindo as enzimas ciclooxigenases (COX). A inibição da COX-1 constitutiva comumente gera qual efeito adverso?",
    options: [
      "Broncodilatação intensa",
      "Irritação e úlceras na mucosa gástrica",
      "Queda súbita da glicemia",
      "Aumento da densidade óssea"
    ],
    correctIndex: 1,
    rationale: "A COX-1 é responsável pela síntese de prostaglandinas que protegem a mucosa gástrica e regulam o fluxo sanguíneo renal. Sua inibição crônica expõe o estômago à acidez gástrica, gerando úlceras."
  },
  {
    id: "q_sem4_2",
    category: "s4_farmaco",
    question: "O estudo da farmacocinética abrange quatro etapas básicas que descrevem o destino do fármaco no organismo. A ordem correta dessas etapas é:",
    options: [
      "Analgesia, sedação, tolerância e dependência.",
      "Absorção, Distribuição, Biotransformação (Metabolismo) e Excreção.",
      "Ligação química, antagonismo, efeito clínico e desintegração.",
      "Filtração, reabsorção, despolarização e recaptação."
    ],
    correctIndex: 1,
    rationale: "A farmacocinética estuda o trânsito da droga desde sua administração (absorção), dispersão pelos tecidos (distribuição), alteração química hepática (biotransformação) e eliminação (excreção)."
  },
  {
    id: "q_sem4_3",
    category: "s4_farmaco",
    question: "O uso crônico e prolongado de anti-inflamatórios esteroidais (Corticoides, como Dexametasona e Prednisona) pode induzir qual complicação musculoesquelética importante na clínica?",
    options: [
      "Espasticidade de origem central",
      "Osteoporose induzida por corticoides e atrofia muscular por catabolismo proteico",
      "Hipertrofia muscular esquelética",
      "Regeneração acelerada de cartilagem articular"
    ],
    correctIndex: 1,
    rationale: "Corticoides em altas doses crônicas inibem osteoblastos, reduzem a absorção de cálcio e estimulam o catabolismo de proteínas musculares, levando à osteoporose e fraqueza muscular."
  },
  {
    id: "q_sem4_4",
    category: "s4_farmaco",
    question: "A fração de uma dose administrada de fármaco inalterado que atinge a circulação sistêmica e está disponível para exercer efeitos terapêuticos denomina-se:",
    options: [
      "Meia-vida biológica",
      "Biodisponibilidade",
      "Efeito de primeira passagem",
      "Afinidade de ligação"
    ],
    correctIndex: 1,
    rationale: "Drogas injetadas via intravenosa possuem 100% de biodisponibilidade. Já a via oral tem biodisponibilidade menor devido à absorção incompleta e ao metabolismo de primeira passagem no fígado."
  },
  {
    id: "q_sem4_5",
    category: "s4_farmaco",
    question: "Qual grupo de medicamentos, muito utilizado por cardiopatas e hipertensos, exige atenção do fisioterapeuta pois mascara a frequência cardíaca durante o exercício físico?",
    options: [
      "Beta-bloqueadores (ex: Atenolol, Propranolol)",
      "Broncodilatadores adrenérgicos",
      "Anti-inflamatórios AINEs",
      "Diuréticos de alça"
    ],
    correctIndex: 0,
    rationale: "Os beta-bloqueadores antagonizam receptores beta-1 cardíacos, atenuando a resposta de elevação da frequência cardíaca e pressão arterial ao esforço. Recomenda-se usar a Escala de Borg (esforço percebido) para avaliar a intensidade do exercício nesses pacientes."
  },
  {
    id: "q_sem4_6",
    category: "s4_cinesio",
    question: "Na reabilitação física, os exercícios que utilizam contrações musculares nas quais a tensão gerada permanece constante enquanto o comprimento muscular varia são classificados como:",
    options: [
      "Exercícios isométricos",
      "Exercícios isotônicos (excêntricos ou concêntricos)",
      "Exercícios isocinéticos com velocidade livre",
      "Exercícios puramente passivos contínuos"
    ],
    correctIndex: 1,
    rationale: "Os exercícios isotônicos envolvem movimento articular com o músculo variando seu comprimento sob tensão, podendo ser concêntricos (encurtamento) ou excêntricos (alongamento controlado)."
  },
  {
    id: "q_sem4_7",
    category: "s4_cinesio",
    question: "Qual alteração fisiológica ocorre na estrutura dos sarcômeros em resposta a um protocolo crônico de alongamento muscular estático?",
    options: [
      "Diminuição drástica do número de sarcômeros.",
      "Aumento do número de sarcômeros em série no final das fibras musculares.",
      "Fusão transversa irreversível das pontes cruzadas.",
      "Conversão de fibras do Tipo I em fibras musculares brancas do Tipo II."
    ],
    correctIndex: 1,
    rationale: "O alongamento mantido e repetitivo induz a adição de sarcômeros em série na junção miotendínea como adaptação mecânica para tolerar maiores comprimentos de repouso."
  },
  {
    id: "q_sem4_8",
    category: "s4_cinesio",
    question: "Os exercícios pendulares de Codman são técnicas cinesioterapêuticas indicadas principalmente na fase inicial de reabilitação do ombro para:",
    options: [
      "Fortalecimento máximo concêntrico do manguito rotador.",
      "Promover tração e oscilação suave da cabeça umeral, aliviando a dor e mantendo a mobilidade da articulação glenoumeral.",
      "Alongar excessivamente a cápsula articular posterior em caso de instabilidade anterior.",
      "Estimular a hipertrofia do músculo deltoide."
    ],
    correctIndex: 1,
    rationale: "Os exercícios de Codman utilizam a força da gravidade e a inércia em movimentos pendulares de tronco flexionado. Isso induz distração da glenoumeral por forças de tração suaves e oscilação sem ativação muscular dolorosa."
  },
  {
    id: "q_sem4_9",
    category: "s4_cinesio",
    question: "Qual o principal receptor sensorial muscular responsável pelo reflexo miotático de estiramento, protegendo o músculo contra alongamentos rápidos excessivos?",
    options: [
      "Órgão Tendinoso de Golgi (OTG)",
      "Fuso Neuromuscular",
      "Corpúsculo de Pacini",
      "Nociceptores periféricos"
    ],
    correctIndex: 1,
    rationale: "O fuso neuromuscular monitora a velocidade e a variação do comprimento muscular. Alongamentos rápidos ativam o fuso, que dispara uma resposta reflexa de contração (reflexo de estiramento)."
  },
  {
    id: "q_sem4_10",
    category: "s4_cinesio",
    question: "A técnica de facilitação neuromuscular proprioceptiva (FNP) baseada no princípio de 'contrair-relaxar' baseia-se em qual fenômeno neurofisiológico?",
    options: [
      "Inibição recíproca",
      "Inibição autógena (via ativação do OTG durante a contração isométrica máxima)",
      "Co-contração involuntária cortical",
      "Reflexo patelar descendente"
    ],
    correctIndex: 1,
    rationale: "Ao realizar uma contração isométrica máxima do músculo alvo antes de alongá-lo, ativa-se o Órgão Tendinoso de Golgi (OTG). Isso induz relaxamento reflexo (inibição autógena), facilitando o ganho de flexibilidade subsequente."
  },
  {
    id: "q_sem4_11",
    category: "s4_eletro",
    question: "Qual das seguintes parametrizações de ultrassom terapêutico é indicada para induzir efeitos predominantemente não térmicos (mecânicos/cavitacionais), ideais para processos inflamatórios agudos?",
    options: [
      "Ultrassom contínuo a 1,0 W/cm²",
      "Ultrassom pulsado (ciclo de trabalho de 20%) a 0,5 W/cm²",
      "Ultrassom contínuo a 2,5 W/cm²",
      "Frequência de 3 MHz contínuo de alta dosagem"
    ],
    correctIndex: 1,
    rationale: "O ultrassom pulsado com baixo ciclo de trabalho (20%) dissipa o calor gerado pela fricção mecânica das ondas, favorecendo apenas microfluxo acústico e cavitação estável para auxiliar a cicatrização aguda."
  },
  {
    id: "q_sem4_12",
    category: "s4_eletro",
    question: "O uso de diatermia por Ondas Curtas ou Micro-ondas exige cuidados rigorosos. Qual é uma contraindicação absoluta para essas modalidades de termoterapia profunda?",
    options: [
      "Espasmo muscular leve na coluna.",
      "Presença de implantes metálicos ou marcapasso cardíaco na região de aplicação.",
      "Edema crônico pós-entorse.",
      "Idade superior a 40 anos."
    ],
    correctIndex: 1,
    rationale: "As ondas eletromagnéticas de alta frequência aquecem metais por indução rápida e desregulam dispositivos eletrônicos como marcapassos, com risco iminente de queimadura interna e falha do aparelho."
  },
  {
    id: "q_sem4_13",
    category: "s4_eletro",
    question: "Qual modalidade de corrente elétrica de média frequência utiliza a modulação de correntes alternadas senoidais cruzadas no interior do tecido para reduzir a dor crônica?",
    options: [
      "Corrente Russa",
      "Corrente Interferencial (DIF)",
      "Corrente Galvânica Pura",
      "Corrente Microcorrentes"
    ],
    correctIndex: 1,
    rationale: "A corrente interferencial utiliza duas correntes de média frequência com leve defasagem. O cruzamento das ondas gera uma nova corrente de baixa frequência modulada no interior do tecido, diminuindo a resistência da pele."
  },
  {
    id: "q_sem4_14",
    category: "s4_eletro",
    question: "Para tratar um paciente com paralisia facial periférica ou denervação muscular, qual a modalidade de estimulação elétrica indicada?",
    options: [
      "Corrente Alternada TENS",
      "Corrente Exponencial/Monofásica Pulsada com largura de pulso longa (milissegundos) para despolarizar a fibra muscular diretamente",
      "Corrente de Média Frequência Russa a 2500 Hz",
      "Corrente Alternada Senoidal FES comum"
    ],
    correctIndex: 1,
    rationale: "Músculos denervados necessitam de pulsos de longa duração para atingir o limiar de contração da membrana da própria fibra muscular, já que a via nervosa rápida motora foi perdida."
  },
  {
    id: "q_sem4_15",
    category: "s4_eletro",
    question: "Qual o principal efeito fisiológico celular induzido pelo Laser de Baixa Intensidade (LBI - fotobiomodulação) na cicatrização de tecidos moles?",
    options: [
      "Necrose térmica controlada de bactérias locais.",
      "Absorção de fótons por cromóforos mitocondriais (citocromo c oxidase), aumentando a síntese de ATP e acelerando o reparo celular.",
      "Inibição da síntese de colágeno.",
      "Diminuição da atividade metabólica dos fibroblastos."
    ],
    correctIndex: 1,
    rationale: "A irradiação de fótons estimula a atividade enzimática na cadeia respiratória mitocondrial, aumentando o aporte de energia (ATP) disponível para proliferação celular e cicatrização."
  },
  {
    id: "q_sem4_16",
    category: "s4_avaliacao",
    question: "O teste ortopédico especial no qual o examinador posiciona o joelho a 30 graus de flexão e realiza uma translação anterior manual da tíbia é denominado:",
    options: [
      "Teste de Gaveta Posterior",
      "Teste de Lachman",
      "Teste de Apley",
      "Teste de McMurray"
    ],
    correctIndex: 1,
    rationale: "O teste de Lachman é considerado o teste físico mais acurado e padrão-ouro para detectar lesões do LCA. Sua sensibilidade é maior que a do teste de gaveta anterior clássico realizado a 90 graus."
  },
  {
    id: "q_sem4_17",
    category: "s4_avaliacao",
    question: "A goniometria é um procedimento clínico sistemático de avaliação. Para avaliar a amplitude de flexão do joelho, o goniômetro deve ter seu eixo posicionado sobre:",
    options: [
      "O maléolo lateral",
      "O epicôndilo lateral do fêmur",
      "O trocânter maior do fêmur",
      "A patela central"
    ],
    correctIndex: 1,
    rationale: "O epicôndilo lateral do fêmur representa o centro aproximado de rotação articular do joelho, servindo de fulcro para o alinhamento dos braços fixo (fêmur) e móvel (fíbula) do goniômetro."
  },
  {
    id: "q_sem4_18",
    category: "s4_avaliacao",
    question: "Ao avaliar radiografias (Raios-X), tecidos densos como o osso cortical absorvem muita radiação e aparecem em tonalidades brancas no filme. Essa característica é denominada:",
    options: [
      "Radiotransparência (Radiolucidez)",
      "Radiopacidade",
      "Isoecogenicidade",
      "Hiperintensidade de sinal"
    ],
    correctIndex: 1,
    rationale: "Estruturas densas barram a passagem dos raios-X, impedindo que atinjam o filme fotográfico. São classificadas como radiopacas (brancas). Tecidos aerados como pulmões são radiotransparentes (pretos)."
  },
  {
    id: "q_sem4_19",
    category: "s4_avaliacao",
    question: "O teste de Trendelenburg avalia a estabilidade pélvica em apoio unipodal. A queda da pelve do lado sem apoio (oscilante) indica fraqueza de qual músculo estabilizador no quadril de apoio?",
    options: [
      "Glúteo Máximo",
      "Adutor Longo",
      "Glúteo Médio do membro de apoio",
      "Iliopsoas"
    ],
    correctIndex: 2,
    rationale: "O glúteo médio age como abdutor do quadril, mantendo a pelve nivelada durante a marcha. Se houver fraqueza no glúteo médio do lado de apoio, a pelve contralateral desaba durante a fase oscilante."
  },
  {
    id: "q_sem4_20",
    category: "s4_avaliacao",
    question: "O teste de Phalen é um teste provocativo físico amplamente utilizado para triagem de qual patologia ocupacional de compressão nervosa?",
    options: [
      "Síndrome do desfiladeiro torácico",
      "Radiculopatia cervical C6",
      "Síndrome do Túnel do Carpo (compressão do nervo mediano)",
      "Epicondilite medial do cotovelo"
    ],
    correctIndex: 2,
    rationale: "O teste de Phalen envolve manter os punhos flexionados encostados pelo dorso por 60 segundos. O surgimento de parestesia nos dedos inervados pelo nervo mediano (polegar, indicador e médio) é indicativo de compressão no canal do carpo."
  },
  {
    id: "q_sem4_21",
    category: "s4_estudo_contemp",
    question: "A transformação digital na saúde introduziu o uso de dispositivos vestíveis (wearables) acoplados ao corpo. Qual sua principal finalidade na cinesioterapia contemporânea?",
    options: [
      "Substituir totalmente o profissional no atendimento presencial.",
      "Monitorar parâmetros biológicos e de movimento (ex: frequência cardíaca, passos, amplitude articular) em tempo real, gerando dados contínuos de evolução.",
      "Realizar a prescrição de remédios de forma remota.",
      "Garantir a limpeza física dos equipamentos clínicos de reabilitação."
    ],
    correctIndex: 1,
    rationale: "Os wearables integram a internet das coisas (IoT) na saúde, permitindo que clínicos analisem dados reais e objetivos sobre o nível de atividade física diária e reabilitação de seus pacientes."
  },
  {
    id: "q_sem4_22",
    category: "s4_estudo_contemp",
    question: "De acordo com as normativas vigentes dos conselhos profissionais de saúde no Brasil, a prestação de serviços de fisioterapia de forma remota é denominada:",
    options: [
      "Telessaúde / Teleconsulta em Fisioterapia",
      "Consultoria informal digital",
      "Automedicação virtual assistida",
      "Atendimento de livre demanda remota"
    ],
    correctIndex: 0,
    rationale: "A telessaúde em Fisioterapia foi normatizada pelo COFFITO permitindo teleconsultas, telemonitoramentos e teleconsultorias, otimizando o acesso de pacientes em áreas remotas."
  },
  {
    id: "q_sem4_23",
    category: "s4_estudo_contemp",
    question: "O conceito de Big Data aplicado ao planejamento de políticas públicas de saúde e epidemiologia representa:",
    options: [
      "O arquivo físico de prontuários em papel de grandes hospitais.",
      "A análise computacional avançada de conjuntos massivos de dados digitais complexos de saúde para identificar padrões, surtos e predizer riscos de epidemias.",
      "A listagem de contatos comerciais de clientes em redes sociais.",
      "O controle de compras de insumos mecânicos pesados na saúde."
    ],
    correctIndex: 1,
    rationale: "Big Data envolve processar grandes volumes de dados desestruturados de forma rápida, permitindo mapear perfis epidemiológicos regionais detalhados e tendências de morbimortalidade no país."
  },
  {
    id: "q_sem4_24",
    category: "s4_estudo_contemp",
    question: "Para a proteção dos dados dos pacientes coletados em prontuários digitais, qual legislação brasileira estabelece diretrizes e sanções específicas no tratamento dessas informações?",
    options: [
      "Código de Defesa do Consumidor",
      "Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)",
      "Estatuto da Criança e do Adolescente",
      "Marco Civil da Internet sem adendos"
    ],
    correctIndex: 1,
    rationale: "A LGPD regula o tratamento de dados pessoais nos meios digitais e físicos, classificando dados de saúde como sensíveis, exigindo consentimento explícito e segurança de sistemas."
  },
  {
    id: "q_sem4_25",
    category: "s4_estudo_contemp",
    question: "O uso de algoritmos de inteligência artificial (IA) na triagem e diagnóstico clínico por imagem atua como:",
    options: [
      "Um substituto absoluto que dispensa a responsabilidade técnica do profissional médico ou terapeuta.",
      "Uma ferramenta de apoio diagnóstico que identifica anomalias em grandes volumes de imagens com alta sensibilidade, acelerando a decisão do clínico responsável.",
      "Uma tecnologia restrita a pesquisas militares sem aplicação em reabilitação.",
      "Um gerador automático de condutas cirúrgicas compulsórias."
    ],
    correctIndex: 1,
    rationale: "A IA na imaginologia auxilia os clínicos a identificarem alterações estruturais de forma ágil, mas a responsabilidade do diagnóstico final permanece com o profissional de saúde responsável."
  },
  {
    id: "q_sem4_26",
    category: "s4_exp_prof",
    question: "As Práticas Integrativas e Complementares em Saúde (PICS) no SUS incluem técnicas de Fisioterapia integrativa. Qual dessas práticas é regulamentada para atuação clínica do fisioterapeuta especializado?",
    options: [
      "Homeopatia cirúrgica avançada",
      "Acupuntura e Fitoterapia / Plantas medicinais",
      "Psicanálise clínica ortodoxa",
      "Prescrição de dietas cetogênicas estruturadas"
    ],
    correctIndex: 1,
    rationale: "O COFFITO reconhece a especialidade profissional de Fisioterapia em Acupuntura e Práticas Integrativas, aplicando técnicas como auriculoterapia e fitoterapia no manejo da dor e ansiedade."
  },
  {
    id: "q_sem4_27",
    category: "s4_exp_prof",
    question: "A aplicação clínica da acupuntura baseia-se na inserção de agulhas estéreis em pontos específicos (acupontos). Qual o principal mecanismo fisiológico da acupuntura no controle da dor física?",
    options: [
      "Anestesia mecânica direta das fibras musculares.",
      "Estimulação de fibras nervosas aferentes que induz a liberação de opioides endógenos (endorfinas e encefalinas) no sistema nervoso central.",
      "Bloqueio da circulação sanguínea no local da agulha.",
      "Destruição tecidual localizada de nociceptores."
    ],
    correctIndex: 1,
    rationale: "A neurofisiologia da acupuntura demonstra que a estimulação mecânica das agulhas ativa vias aferentes aferentes somáticas que sobem à medula e ao cérebro, ativando a via descendente inibidora da dor."
  },
  {
    id: "q_sem4_28",
    category: "s4_exp_prof",
    question: "A auriculoterapia, prática integrativa de micro-sistema, fundamenta-se na estimulação de pontos na orelha. A sua principal vantagem na cinesioterapia clínica é:",
    options: [
      "Promover o ganho imediato de força de forma isométrica.",
      "Apoiar o manejo de quadros de dor crônica e ansiedade associados, de forma complementar e não invasiva.",
      "Substituir os exercícios ativos de cinesioterapia.",
      "Garantir a redução rápida de fraturas instáveis."
    ],
    correctIndex: 1,
    rationale: "A estimulação de ramos nervosos auriculares (como ramos do vago e trigêmeo) promove regulação neurovegetativa e modulação da dor, auxiliando a adesão e o conforto no tratamento físico."
  },
  {
    id: "q_sem4_29",
    category: "s4_exp_prof",
    question: "No planejamento de uma sessão que integra cinesioterapia e acupuntura para um paciente com fibromialgia, a conduta recomendada é:",
    options: [
      "Aplicar as agulhas durante a execução de exercícios ativos rápidos.",
      "Utilizar a acupuntura para modular a dor e relaxar os tecidos, e em seguida realizar os exercícios terapêuticos de forma confortável.",
      "Aplicar eletroterapia de alta intensidade junto com as agulhas em áreas com ferida ativa.",
      "Proibir o paciente de realizar qualquer tipo de movimento após as agulhas."
    ],
    correctIndex: 1,
    rationale: "A modulação prévia da dor crônica com PICS reduz a cinesiofobia (medo de se mover) e relaxa o tônus muscular excessivo, permitindo realizar o plano de exercícios terapêuticos com maior eficiência."
  },
  {
    id: "q_sem4_30",
    category: "s4_exp_prof",
    question: "O uso de práticas integrativas na reabilitação deve ser conduzido de acordo com qual padrão ético profissional?",
    options: [
      "Como substituto exclusivo de todas as abordagens fisioterapêuticas tradicionais.",
      "De forma complementar à conduta baseada em evidências (cinesioterapia, terapia manual), respeitando a qualificação técnica e a anuência livre do paciente.",
      "Sem registro em prontuário por se tratar de terapia considerada alternativa.",
      "Prescrevendo ervas medicinais tóxicas sem aval científico."
    ],
    correctIndex: 1,
    rationale: "As PICS servem como adjuvantes e ferramentas integradoras de reabilitação. O fisioterapeuta deve possuir habilitação registrada e integrar essas condutas em prontuário de forma ética."
  },
  {
    id: "q_sem5_1",
    category: "s5_recursos_manuais",
    question: "De acordo com o conceito de mobilização articular de Maitland, o Grau III de aplicação é caracterizado como:",
    options: [
      "Um movimento oscilatório de pequena amplitude no início da ADM disponível, livre de resistência.",
      "Um movimento oscilatório de grande amplitude que vai até o limite da amplitude de movimento disponível, entrando na resistência tecidual.",
      "Um impulso de alta velocidade e pequena amplitude no final da barreira anatômica.",
      "Uma mobilização contínua de baixa tração sustentada por 2 minutos."
    ],
    correctIndex: 1,
    rationale: "Os Graus III e IV de Maitland são aplicados contra a resistência do tecido conjuntivo retraído (cápsula articular, ligamentos), sendo as dosagens indicadas para alongar tecidos rígidos e ganhar ADM."
  },
  {
    id: "q_sem5_2",
    category: "s5_recursos_manuais",
    question: "A técnica manual de liberação miofascial tem como alvo estrutural a fáscia profunda. A fáscia é composta principalmente por qual tipo de tecido?",
    options: [
      "Tecido epitelial queratinizado",
      "Tecido conjuntivo denso, rico em fibras de colágeno e elastina",
      "Tecido muscular liso involuntário",
      "Tecido adiposo marrom denso"
    ],
    correctIndex: 1,
    rationale: "A fáscia é uma teia tridimensional de tecido conjuntivo colagenoso que envolve músculos, ossos, nervos e órgãos, podendo sofrer restrições e densificações após traumas ou posições mantidas."
  },
  {
    id: "q_sem5_3",
    category: "s5_recursos_manuais",
    question: "O que caracteriza clinicamente um Ponto-Gatilho (trigger point) miofascial ativo na palpação muscular?",
    options: [
      "Uma área de anestesia na pele.",
      "Um nódulo palpável em uma banda tensa de músculo esquelético que gera dor local e dor referida característica à compressão.",
      "A ausência de reflexo tendinoso patelar na perna oposta.",
      "Uma calcificação óssea no ventre do músculo afetado."
    ],
    correctIndex: 1,
    rationale: "Pontos-gatilho são focos de hiperirritabilidade mecânica e acúmulo de metabólitos ácidos em bandas tensas do sarcômero, gerando dor local, referida e espasmo muscular local protetor."
  },
  {
    id: "q_sem5_4",
    category: "s5_recursos_manuais",
    question: "Ao aplicar a massagem terapêutica para promover a drenagem linfática e diminuir o edema periférico, qual a direção correta das manobras manuais?",
    options: [
      "Manobras rápidas e profundas no sentido centrífugo (do centro para a extremidade).",
      "Manobras suaves, rítmicas e lentas na direção centrípeta (em direção aos linfonodos proximais e ao ducto torácico).",
      "Fricções circulares fortes e aleatórias na região distal.",
      "Aplicação de pressão contínua no centro da articulação."
    ],
    correctIndex: 1,
    rationale: "A drenagem linfática manual requer pressões leves (para não colapsar os capilares linfáticos superficiais) e sentido centrípeto, facilitando o escoamento da linfa em direção aos linfonodos e circulação venosa."
  },
  {
    id: "q_sem5_5",
    category: "s5_recursos_manuais",
    question: "Qual é a contraindicação clínica absoluta para a aplicação de tração cervical mecânica ou manual na coluna vertebral?",
    options: [
      "Hérnia de disco cervical posterolateral leve.",
      "Instabilidade atlantoaxial (comum em pacientes com Artrite Reumatoide) ou fraturas ósseas não consolidadas.",
      "Cefaleia tensional crônica leve.",
      "Espasmo dos trapézios superiores."
    ],
    correctIndex: 1,
    rationale: "A Artrite Reumatoide enfraquece o ligamento transverso do atlas. Aplicar forças de tração nessa região pode causar luxação atlantoaxial, compressão da medula cervical e consequências fatais."
  },
  {
    id: "q_sem5_6",
    category: "s5_fisiologia_ex",
    question: "O Consumo Máximo de Oxigênio (VO2 máx) é considerado o melhor índice de avaliação de qual sistema?",
    options: [
      "Do sistema imunológico humoral.",
      "Do sistema de transporte de oxigênio e aptidão cardiorrespiratória global.",
      "Do sistema excretor urinário.",
      "Do sistema endócrino ovariano."
    ],
    correctIndex: 1,
    rationale: "O VO2 máx reflete a capacidade integrada dos pulmões, coração, vasos sanguíneos e músculos ativos em captar, transportar e metabolizar oxigênio durante esforço máximo."
  },
  {
    id: "q_sem5_7",
    category: "s5_fisiologia_ex",
    question: "O limiar anaeróbio (ou segundo limiar ventilatório) representa o ponto durante o exercício progressivo onde:",
    options: [
      "O corpo passa a produzir energia exclusivamente pela via oxidativa lipídica.",
      "A produção de lactato excede a taxa de remoção e o sistema de tamponamento renal/respiratório não consegue mais evitar a acidose metabólica.",
      "A frequência cardíaca cai subitamente até o repouso.",
      "A ventilação pulmonar cessa devido ao cansaço."
    ],
    correctIndex: 1,
    rationale: "Acima do limiar anaeróbio, o exercício é sustentado pela glicólise rápida com acúmulo de lactato e íons H+. O consequente aumento na produção de CO2 estimula a ventilação pulmonar de forma desproporcional."
  },
  {
    id: "q_sem5_8",
    category: "s5_fisiologia_ex",
    question: "Durante a realização de um teste ergométrico ou de esforço aeróbico progressivo, qual a resposta fisiológica esperada para a Pressão Arterial Sistólica (PAS) e Diastólica (PAD) em indivíduos saudáveis?",
    options: [
      "Queda na PAS e aumento expressivo na PAD.",
      "Elevação gradual da PAS proporcionalmente à intensidade do esforço, enquanto a PAD permanece constante ou varia levemente (+/- 10 mmHg).",
      "Elevação maciça de ambas com valores idênticos.",
      "Ambas caem linearmente para evitar sobrecarga cardíaca."
    ],
    correctIndex: 1,
    rationale: "A PAS aumenta devido ao incremento no débito cardíaco (maior volume sistólico e FC). A PAD reflete a resistência vascular periférica; como ocorre vasodilatação nos músculos ativos, a PAD tende a se manter estável ou cair levemente."
  },
  {
    id: "q_sem5_9",
    category: "s5_fisiologia_ex",
    question: "O Teste de Caminhada de 6 Minutos (TC6M) é um teste funcional submáximo amplamente utilizado. Seu principal objetivo clínico é:",
    options: [
      "Avaliar a força de preensão manual isométrica.",
      "Medir a distância máxima que o paciente percorre caminhando rápido sobre uma superfície plana em 6 minutos, avaliando a capacidade funcional ao exercício.",
      "Determinar o VO2 máx absoluto por via direta com analisador de gases.",
      "Controle fino de arritmias ventriculares agudas em UTI."
    ],
    correctIndex: 1,
    rationale: "O TC6M avalia a tolerância ao esforço físico em atividades do dia a dia, sendo sensível para monitorar evolução e prognóstico de pacientes pneumopatas e cardiopatas."
  },
  {
    id: "q_sem5_10",
    category: "s5_fisiologia_ex",
    question: "O treinamento aeróbico contínuo induz bradicardia de repouso crônica em atletas. Qual a principal adaptação fisiológica cardíaca responsável por esse efeito?",
    options: [
      "Diminuição da contratilidade miocárdica.",
      "Aumento do volume sistólico (volume de ejeção) devido ao aumento da cavidade do ventrículo esquerdo e tônus vagal elevado no repouso.",
      "Espessamento patológico das paredes das artérias coronárias.",
      "Fibrilação atrial fisiológica benigna."
    ],
    correctIndex: 1,
    rationale: "Com um ventrículo esquerdo maior e mais forte, o coração ejeta mais sangue a cada batimento. Para manter o mesmo débito cardíaco basal, a frequência cardíaca de repouso pode diminuir."
  },
  {
    id: "q_sem5_11",
    category: "s5_aquatica",
    question: "O Princípio de Arquimedes descreve a força física do Empuxo. Qual a sua aplicação prática na reabilitação de um paciente em piscina terapêutica?",
    options: [
      "Aumentar o impacto mecânico sobre as articulações dos membros inferiores.",
      "Reduzir o peso aparente do paciente submerso, diminuindo as forças de compressão articular e facilitando a marcha precoce.",
      "Resistir a qualquer tipo de movimento descendente passivo.",
      "Provocar hipotermia sistêmica reflexa nos tecidos."
    ],
    correctIndex: 1,
    rationale: "O empuxo é uma força vertical dirigida para cima contrária à gravidade. Ela alivia o estresse nas articulações de suporte de peso (ex: quadril, joelho), facilitando a mobilização precoce."
  },
  {
    id: "q_sem5_12",
    category: "s5_aquatica",
    question: "O Método de Bad Ragaz na fisioterapia aquática é caracterizado pelo uso de:",
    options: [
      "Imersão do paciente em água gelada para induzir anestesia geral.",
      "Padrões de movimento baseados na Facilitação Neuromuscular Proprioceptiva (FNP), onde o terapeuta serve de ponto fixo enquanto o paciente flutua com auxílio de flutuadores.",
      "Técnicas de massagem subaquática com jato de água direcionado.",
      "Exercícios de ioga adaptados exclusivamente a nadadores profissionais."
    ],
    correctIndex: 1,
    rationale: "O Anel de Bad Ragaz adapta os conceitos da FNP clássica em meio aquático, promovendo fortalecimento muscular através de resistência hidrodinâmica gerada pelo deslocamento na água."
  },
  {
    id: "q_sem5_13",
    category: "s5_aquatica",
    question: "Qual a temperatura recomendada da piscina aquecida para reabilitação neurofuncional de pacientes espásticos ou reumáticos?",
    options: [
      "Entre 18°C e 22°C (água fria)",
      "Entre 32°C e 34°C (água aquecida/terapêutica)",
      "Acima de 40°C (água termal quente)",
      "Qualquer temperatura ambiente."
    ],
    correctIndex: 1,
    rationale: "A água aquecida a 32-34°C induz vasodilatação periférica, promove relaxamento muscular reflexo e modula a nocicepção, facilitando a execução de cinesioterapia."
  },
  {
    id: "q_sem5_14",
    category: "s5_aquatica",
    question: "A pressão hidrostática exercida pela água sobre o corpo do paciente submerso em posição vertical promove qual efeito circulatório fisiológico?",
    options: [
      "Estase venosa e acúmulo de líquido periférico nas pernas.",
      "Deslocamento do sangue periférico para o tórax (retorno venoso aumentado) e aumento do débito cardíaco.",
      "Isquemia renal aguda imediata.",
      "Diminuição da ventilação pulmonar voluntária crônica."
    ],
    correctIndex: 1,
    rationale: "A pressão da água aumenta conforme a profundidade. Isso comprime o sistema venoso periférico dos membros inferiores, agindo como uma meia de compressão elástica que facilita o retorno venoso."
  },
  {
    id: "q_sem5_15",
    category: "s5_aquatica",
    question: "Qual das seguintes condições clínicas representa uma contraindicação absoluta para a realização de Fisioterapia Aquática?",
    options: [
      "Artrose leve de quadril com pouca dor.",
      "Pacientes com feridas abertas infectadas ou incontinência urinária/fecal não controlada.",
      "Espasticidade pós-AVC estável.",
      "Idoso com histórico de queda."
    ],
    correctIndex: 1,
    rationale: "Feridas infectadas representam risco de contaminação cruzada para a água e piora infecciosa no paciente. A incontinência não controlada compromete a higienização sanitária da piscina de uso coletivo."
  },
  {
    id: "q_sem5_16",
    category: "s5_idoso",
    question: "A sarcopenia é uma síndrome geriátrica prevalente. Ela é caracterizada pela perda progressiva e generalizada de:",
    options: [
      "Flexibilidade de tecidos moles e colágeno dérmico.",
      "Força, massa e desempenho físico da musculatura esquelética.",
      "Memória recente e capacidade cognitiva apenas.",
      "Elasticidade da cartilagem hialina de carga."
    ],
    correctIndex: 1,
    rationale: "A sarcopenia no envelhecimento reduz a autonomia funcional do idoso, aumentando o risco de fragilidade, dependência física e episódios de quedas."
  },
  {
    id: "q_sem5_17",
    category: "s5_idoso",
    question: "O teste Timed Up and Go (TUG) avalia a mobilidade funcional em idosos. Um tempo superior a 12 ou 14 segundos para realizar o teste é indicativo de:",
    options: [
      "Excelente equilíbrio funcional estático.",
      "Risco aumentado de quedas e necessidade de intervenção preventiva.",
      "Boa resistência muscular de quadríceps.",
      "Marcha sem limitações mecânicas."
    ],
    correctIndex: 1,
    rationale: "O TUG quantifica em segundos o tempo para levantar-se de uma cadeira, caminhar 3 metros, girar 180°, voltar e sentar-se. Tempos elevados sinalizam déficit de equilíbrio dinâmico e risco cinético."
  },
  {
    id: "q_sem5_18",
    category: "s5_idoso",
    question: "Durante o envelhecimento fisiológico da coluna vertebral, qual alteração postural do plano sagital é comumente encontrada no idoso?",
    options: [
      "Aumento da cifose torácica (hipercifose) e anteriorização da cabeça.",
      "Retificação completa da lordose lombar sem alterações cervicais.",
      "Aparecimento de escoliose torácica à esquerda pura.",
      "Desvio lateral da pelve com báscula."
    ],
    correctIndex: 0,
    rationale: "A hipercifose senil resulta do acunhamento de corpos vertebrais (osteoporose), perda de espessura de discos intervertebrais e fraqueza dos eretores da espinha."
  },
  {
    id: "q_sem5_19",
    category: "s5_idoso",
    question: "Qual a melhor estratégia cinesioterapêutica para prevenir quedas e manter a densidade mineral óssea em idosos com osteoporose?",
    options: [
      "Repouso absoluto na cama para evitar fraturas acidentais.",
      "Exercícios de fortalecimento com carga progressiva (musculação de impacto controlado) associados a treinos de equilíbrio dinâmico e coordenação.",
      "Apenas alongamentos passivos estáticos de membros superiores.",
      "Hidroginástica recreativa de baixíssima intensidade sem carga."
    ],
    correctIndex: 1,
    rationale: "O tecido ósseo responde à tração mecânica muscular e carga gravitacional (Lei de Wolff). Exercícios resistidos com carga estimulam a deposição de cálcio pelos osteoblastos, prevenindo a osteoporose."
  },
  {
    id: "q_sem5_20",
    category: "s5_idoso",
    question: "A fragilidade no idoso, segundo o fenótipo de Fried, é caracterizada por cinco critérios mensuráveis. Qual dos seguintes faz parte dessa avaliação?",
    options: [
      "Insônia de repouso.",
      "Perda de peso não intencional, exaustão autorreferida, fraqueza muscular (preensão manual), lentidão na marcha e baixo nível de atividade física.",
      "Presença de hipertensão arterial e diabetes melito estável.",
      "Histórico de cirurgias ortopédicas de joelho."
    ],
    correctIndex: 1,
    rationale: "O fenótipo de fragilidade quantifica o risco clínico do idoso sofrer declínios rápidos de saúde, orientando o fisioterapeuta no planejamento de treinos de força e condicionamento seguro."
  },
  {
    id: "q_sem5_21",
    category: "s5_estudo_contemp",
    question: "A concessão de uma patente de invenção pelo órgão regulamentador oficial de propriedade industrial confere ao inventor:",
    options: [
      "O direito de exclusividade para exploração comercial daquela invenção por tempo ilimitado.",
      "O direito de exploração comercial exclusiva por um período determinado em lei nacional, em troca da divulgação pública do conteúdo técnico.",
      "A isenção perpétua de impostos federais da empresa.",
      "O controle dos preços de venda no mercado internacional."
    ],
    correctIndex: 1,
    rationale: "A patente é um título de propriedade temporária concedido pelo Estado (geralmente 20 anos para patentes de invenção), garantindo exclusividade de fabricação ao titular."
  },
  {
    id: "q_sem5_22",
    category: "s5_estudo_contemp",
    question: "O órgão federal brasileiro responsável pelo registro de marcas, patentes de invenção, modelos de utilidade e desenhos industriais é o:",
    options: [
      "INSS",
      "INPI (Instituto Nacional da Propriedade Industrial)",
      "Anvisa",
      "Banco Central do Brasil"
    ],
    correctIndex: 1,
    rationale: "O INPI é a autarquia federal vinculada ao Ministério do Desenvolvimento que analisa e aprova os registros de marcas e concessão de patentes no Brasil."
  },
  {
    id: "q_sem5_23",
    category: "s5_estudo_contemp",
    question: "Qual a diferença conceitual entre Patente de Invenção e Patente de Modelo de Utilidade?",
    options: [
      "Não há diferença prática, sendo termos sinônimos nos registros industriais.",
      "A Patente de Invenção protege algo totalmente novo do estado da técnica; o Modelo de Utilidade protege uma melhora funcional ou prática no uso de um objeto já existente.",
      "A de Invenção protege apenas remédios químicos; a de Modelo de Utilidade protege softwares.",
      "A de Modelo de Utilidade protege apenas criações de marcas artísticas de design de moda."
    ],
    correctIndex: 1,
    rationale: "O modelo de utilidade representa uma inovação de menor complexidade técnica (ex: um cabo anatômico adaptado a uma muleta ou andador fisioterapêutico), tendo vigência menor."
  },
  {
    id: "q_sem5_24",
    category: "s5_estudo_contemp",
    question: "Direitos autorais de obras científicas e livros acadêmicos no Brasil protegem:",
    options: [
      "A ideia abstrata do conteúdo técnico sem necessidade de publicação.",
      "A expressão literal da obra (o texto e as imagens publicadas), vedando cópias não autorizadas sem citar devidamente a autoria.",
      "A fabricação de qualquer máquina descrita na obra de forma prática.",
      "A patente comercial de produtos físicos testados na pesquisa."
    ],
    correctIndex: 1,
    rationale: "Os direitos autorais protegem a expressão da forma literária ou artística, não as ideias científicas subjacentes em si, as quais devem ser citadas para evitar o plágio acadêmico."
  },
  {
    id: "q_sem5_25",
    category: "s5_estudo_contemp",
    question: "A inovação tecnológica considerada 'incremental' caracteriza-se por:",
    options: [
      "Uma tecnologia revolucionária que altera toda a indústria global e extingue os produtos concorrentes.",
      "Melhorias e otimizações contínuas em produtos ou serviços já existentes no mercado, reduzindo custos ou otimizando a qualidade.",
      "Processo ilegal de quebra de patentes comerciais industriais vigentes.",
      "Copiar um produto idêntico com troca apenas do logotipo da marca."
    ],
    correctIndex: 1,
    rationale: "A inovação incremental aprimora tecnologias pré-existentes (ex: novos recursos e sensores em aparelhos de ultrassom terapêutico de gerações mais recentes), sendo o tipo mais comum."
  },
  {
    id: "q_sem5_26",
    category: "s5_exp_prof",
    question: "Ao prescrever eletroestimulação para fortalecimento muscular em um atleta na clínica, qual corrente e parametrização são adequadas?",
    options: [
      "Corrente Russa (2500 Hz modulada a 50 Hz) com intensidade limiar de contração vigorosa respeitando a relação ativação/repouso (Duty Cycle).",
      "Corrente TENS convencional de baixa frequência sensorial.",
      "Corrente de Microcorrentes a 0,5 W/cm² contínuo.",
      "Corrente Galvânica Pura contínua de alta amperagem."
    ],
    correctIndex: 0,
    rationale: "A corrente Russa é uma corrente alternada de média frequência modulada em baixa que despolariza fibras motoras de forma profunda e confortável, induzindo contrações musculares efetivas para ganho de torque."
  },
  {
    id: "q_sem5_27",
    category: "s5_exp_prof",
    question: "Durante a aplicação de TENS para analgesia pós-operatória de cirurgia de joelho, onde devem ser preferencialmente posicionados os eletrodos?",
    options: [
      "Diretamente sobre a ferida cirúrgica aberta recente.",
      "Ao redor da incisão cirúrgica ou no trajeto dos nervos aferentes periféricos da dor (ex: dermátomo correspondente).",
      "No membro contralateral não operado para efeito cruzado puramente mental.",
      "Nas plantas dos pés exclusivamente."
    ],
    correctIndex: 1,
    rationale: "Posicionar os eletrodos cercando a cicatriz estimula as fibras sensoriais locais A-beta que bloqueiam as sinapses da dor na medula espinhal, sem intercorrer com a incisão cirúrgica."
  },
  {
    id: "q_sem5_28",
    category: "s5_exp_prof",
    question: "Qual parâmetro físico do ultrassom terapêutico determina a profundidade de penetração das ondas no tecido do paciente?",
    options: [
      "A intensidade da potência (W/cm²)",
      "A frequência de oscilação da onda (1 MHz para tecidos profundos e 3 MHz para superficiais)",
      "A área do transdutor (ERA)",
      "O tempo total de aplicação da terapia"
    ],
    correctIndex: 1,
    rationale: "A frequência de 1 MHz é menos absorvida pela epiderme/derme, penetrando até 5 cm de profundidade (músculos profundos). A de 3 MHz é altamente absorvida superficialmente (fáscias superficiais e derme, até 1,5 cm)."
  },
  {
    id: "q_sem5_29",
    category: "s5_exp_prof",
    question: "A aplicação de FES (Estimulação Elétrica Funcional) para controle do 'pé caído' em pacientes hemiplégicos pós-AVC deve ocorrer em qual momento da marcha?",
    options: [
      "Durante a fase de apoio unipodal de sustentação máxima.",
      "Durante a fase de oscilação do membro afetado, estimulando os músculos flexores dorsais (tibial anterior).",
      "Apenas quando o paciente estiver deitado de barriga para baixo.",
      "De forma contínua durante todo o ciclo de marcha sem pausa."
    ],
    correctIndex: 1,
    rationale: "O FES é sincronizado por um sensor no calcanhar que dispara estímulos elétricos no nervo fibular comum para ativar o tibial anterior na fase oscilante, permitindo a elevação do pé e evitando a queda ou tropeço."
  },
  {
    id: "q_sem5_30",
    category: "s5_exp_prof",
    question: "Qual cuidado de segurança com a pele é obrigatório antes de aplicar correntes elétricas terapêuticas no paciente?",
    options: [
      "Passar hidratante oleoso espesso sobre o local.",
      "Avaliar a sensibilidade tátil-térmica local, certificar que a pele está íntegra (sem feridas) e higienizar a área com água ou álcool para remover oleosidade.",
      "Lixar a pele até sangrar para reduzir a resistência elétrica.",
      "O profissional não precisa realizar nenhuma inspeção de pele."
    ],
    correctIndex: 1,
    rationale: "A sensibilidade preservada evita queimaduras por correntes de alta intensidade. A pele íntegra e sem óleos garante uma distribuição de corrente uniforme pelos eletrodos."
  },
  {
    id: "q_sem6_1",
    category: "s6_traumato",
    question: "Paciente no 3º dia pós-operatório de Reconstrução do LCA do joelho (enxerto de tendões flexores). Qual a conduta de reabilitação prioritária nessa fase inicial?",
    options: [
      "Exercícios de agachamento profundo com carga máxima imediata.",
      "Controle de dor/edema (Crioterapia), ativação isométrica do quadríceps (submáxima) e ganho passivo de extensão total do joelho.",
      "Corrida leve em esteira ergométrica.",
      "Alongamento forçado passivo da flexão do joelho além de 130 graus."
    ],
    correctIndex: 1,
    rationale: "O foco precoce pós-LCA é restabelecer a extensão total do joelho para evitar fibrose/artrofibrose periarticular e ativar o quadríceps para combater a inibição muscular artrogênica."
  },
  {
    id: "q_sem6_2",
    category: "s6_traumato",
    question: "A capsulite adesiva do ombro (ombro congelado) é uma patologia inflamatória crônica caracterizada clinicamente por:",
    options: [
      "Aumento excessivo e instável da amplitude de movimento articular.",
      "Dor intensa e perda progressiva e incapacitante dos movimentos ativos e passivos, obedecendo ao padrão capsular (rotação externa, abdução e rotação interna).",
      "Ruptura completa do tendão da cabeça longa do bíceps braquial.",
      "Espasmo transitório e puramente voluntário do músculo redondo maior."
    ],
    correctIndex: 1,
    rationale: "A capsulite cursa com retração e espessamento da cápsula articular glenoumeral, limitando severamente a ADM ativa e passiva nos eixos clássicos do padrão capsular."
  },
  {
    id: "q_sem6_3",
    category: "s6_traumato",
    question: "Durante o exame físico de um paciente com suspeita de ruptura total do tendão de Aquiles (tendão do calcâneo), qual teste ortopédico positivo indica essa lesão?",
    options: [
      "Teste de Gaveta Anterior",
      "Teste de Thompson (ausência de plantiflexão ao comprimir o ventre muscular da panturrilha)",
      "Teste de Phalen",
      "Teste de McMurray"
    ],
    correctIndex: 1,
    rationale: "O teste de Thompson avalia a continuidade do tendão. Apertar o tríceps sural deve forçar mecanicamente uma flexão plantar. A ausência de resposta confirma a ruptura total."
  },
  {
    id: "q_sem6_4",
    category: "s6_traumato",
    question: "Para o tratamento conservador da osteoartrose de joelho (gonartrose) visando diminuir a sobrecarga articular e a dor na marcha, o fisioterapeuta deve priorizar o fortalecimento de qual músculo?",
    options: [
      "Músculo Gastrocnêmio lateral",
      "Músculo Quadríceps Femoral",
      "Músculo Adutor Curto",
      "Músculo Sóleo"
    ],
    correctIndex: 1,
    rationale: "O quadríceps é o principal amortecedor dinâmico do joelho. Sua ativação e ganho de força reduzem o estresse compressivo sobre a cartilagem femoropatelar e femorotibial."
  },
  {
    id: "q_sem6_5",
    category: "s6_traumato",
    question: "A epicondilite lateral (conhecida como cotovelo de tenista) é uma tendinopatia por sobrecarga (overuse) que acomete a origem comum de quais músculos?",
    options: [
      "Músculos flexores do punho e dedos (pronador redondo).",
      "Músculos extensores do punho e dedos (especialmente o extensor radial curto do carpo).",
      "Músculos bíceps e braquial anterior.",
      "Músculos rotadores internos do cotovelo."
    ],
    correctIndex: 1,
    rationale: "A epicondilite lateral resulta de microtraumas repetitivos no tendão extensor comum na face externa do cotovelo, desencadeando dor localizada à extensão resistida do punho."
  },
  {
    id: "q_sem6_6",
    category: "s6_neuro",
    question: "Um paciente que apresenta marcha hemiplégica (ceifante ou helicoidal), espasticidade e sinal de Babinski positivo pós-AVC provavelmente apresenta lesão de qual via do sistema nervoso?",
    options: [
      "Via Espinocerebelar",
      "Via Corticoespinhal (Piramidal / Neurônio Motor Superior)",
      "Via Rubroespinhal periférica",
      "Cordão posterior da medula espinhal"
    ],
    correctIndex: 1,
    rationale: "A via corticoespinhal controla a motricidade voluntária. Lesões nessa via liberam reflexos medulares, induzindo o quadro clássico de espasticidade e liberação piramidal."
  },
  {
    id: "q_sem6_7",
    category: "s6_neuro",
    question: "Quais sintomas motores clássicos da Doença de Parkinson o fisioterapeuta visa mitigar através de exercícios de coordenação e dupla tarefa?",
    options: [
      "Flacidez flácida, hiperreflexia patelar e atrofia progressiva.",
      "Rigidez em roda dentada, bradicinesia (lentidão de movimento), tremor de repouso e instabilidade postural.",
      "Perda de sensibilidade térmica e dor neuropática periférica bilateral.",
      "Espasticidade em canivete e espasmos flexores involuntários."
    ],
    correctIndex: 1,
    rationale: "O Parkinson resulta da degeneração de neurônios dopaminérgicos na substância negra. O tratamento foca em cinesioterapia para combater a rigidez, bradicinesia e melhorar o padrão da marcha."
  },
  {
    id: "q_sem6_8",
    category: "s6_neuro",
    question: "O Conceito Neuroevolutivo Bobath, amplamente empregado na fisioterapia neurológica pediátrica e adulta, apoia-se em qual princípio?",
    options: [
      "Estimular o ganho de força bruta isolada sem se preocupar com os padrões de movimento.",
      "Facilitar o alinhamento postural e os padrões de movimento normais através do manuseio de pontos-chave de controle, enquanto inibe padrões reflexos anormais.",
      "Aplicar eletroestimulação neuromuscular dolorosa contínua.",
      "Manter o paciente em posições estáticas de repouso na maca."
    ],
    correctIndex: 1,
    rationale: "O Bobath utiliza pontos-chave (ex: quadril, ombro) para guiar o paciente rumo ao movimento funcional fisiológico, modulando o tônus e estimulando reações de retificação."
  },
  {
    id: "q_sem6_9",
    category: "s6_neuro",
    question: "Um paciente que sofreu um trauma medular completo na altura da vértebra torácica T10 apresenta qual quadro clínico funcional de déficit motor?",
    options: [
      "Tetraplegia espástica com necessidade de ventilador mecânico permanente.",
      "Paraplegia espástica dos membros inferiores com preservação motora dos membros superiores e controle de tronco alto.",
      "Hemiplegia ipsilateral pura sem comprometimento sensitivo.",
      "Perda isolada dos movimentos finos dos dedos das mãos."
    ],
    correctIndex: 1,
    rationale: "Lesões medulares abaixo de T2 preservam os membros superiores (inervados pelo plexo braquial C5-T1), resultando em perda de controle motor e sensibilidade nos membros inferiores (paraplegia)."
  },
  {
    id: "q_sem6_10",
    category: "s6_neuro",
    question: "Qual das seguintes patologias neurológicas é classificada como uma polineuropatia desmielinizante inflamatória aguda de padrão ascendente e flácido?",
    options: [
      "Esclerose Lateral Amiotrófica (ELA)",
      "Síndrome de Guillain-Barré",
      "Doença de Alzheimer",
      "Esclerose Múltipla"
    ],
    correctIndex: 1,
    rationale: "A Síndrome de Guillain-Barré é uma doença autoimune pós-infecciosa que destrói a mielina dos nervos periféricos, gerando fraqueza flácida ascendente simétrica que pode afetar a respiração."
  },
  {
    id: "q_sem6_11",
    category: "s6_crianca",
    question: "Em qual idade do desenvolvimento motor típico do bebê espera-se o desaparecimento do Reflexo de Moro?",
    options: [
      "Até o final do 1º mês de vida.",
      "Entre 4 e 6 meses de idade.",
      "Acima de 12 meses de idade.",
      "O Reflexo de Moro permanece ativo por toda a vida."
    ],
    correctIndex: 1,
    rationale: "O Reflexo de Moro (reação de sobressalto) é um reflexo primitivo integrado no tronco encefálico que deve desaparecer entre 4 e 6 meses com a maturação cortical."
  },
  {
    id: "q_sem6_12",
    category: "s6_crianca",
    question: "Qual o principal sinal motor que caracteriza a Paralisia Cerebral (Encefalopatia Crônica Não Progressiva da Infância) do tipo Espástica?",
    options: [
      "Hipotonia muscular grave generalizada e flacidez.",
      "Hipertonia espástica dependente de velocidade, hiperreflexia tendinosa e persistência de padrões posturais reflexos primitivos.",
      "Movimentos involuntários coreicos rápidos contínuos.",
      "Ataxia com marcha ebriosa e tremores intencionais puros."
    ],
    correctIndex: 1,
    rationale: "A PC espástica decorre de lesão na via corticoespinhal piramidal, levando à espasticidade e aumento de reflexos profundos, limitando o controle voluntário."
  },
  {
    id: "q_sem6_13",
    category: "s6_crianca",
    question: "Na fisioterapia respiratória pediátrica para lactentes com Bronquiolite Viral Aguda na fase hipersecretiva, a conduta mecânica recomendada é:",
    options: [
      "Técnicas de tapotagem forte e vigorosa na coluna do bebê.",
      "Higiene brônquica suave através de desobstrução rinofaríngea retrógrada (DRR), soro fisiológico e aspiração de vias aéreas superiores se necessário.",
      "Aplicação de PEEP de 20 cmH2O na máscara de nebulização simples.",
      "Recomendar que a criança permaneça em repouso de barriga para baixo."
    ],
    correctIndex: 1,
    rationale: "A DRR e a lavagem nasal removem a secreção espessa na via aérea superior de lactentes, que são respiradores nasais exclusivos, aliviando o esforço respiratório."
  },
  {
    id: "q_sem6_14",
    category: "s6_crianca",
    question: "O reflexo tônico-labiríntico (RTL) ativo no lactente sob estímulo gravitacional atua promovendo:",
    options: [
      "Flexão de tronco na posição em pé rígida.",
      "Extensão global do corpo quando o bebê está em decúbito dorsal e flexão global quando em decúbito ventral.",
      "Rotação automática da cabeça ao tocar a bochecha.",
      "Passos automáticos simétricos quando apoiado no solo."
    ],
    correctIndex: 1,
    rationale: "O RTL é influenciado pelo labirinto. Em decúbito dorsal, o tônus extensor é máximo. Em decúbito ventral, prevalece o tônus flexor."
  },
  {
    id: "q_sem6_15",
    category: "s6_crianca",
    question: "Na reabilitação de crianças com mielomeningocele (espinha bífida aberta), qual a preocupação ortopédica prioritária do fisioterapeuta?",
    options: [
      "Evitar o ganho de peso a qualquer custo.",
      "Prevenir deformidades articulares (como pé torto congênito e luxação de quadril) e promover órteses adequadas para a verticalização e marcha precoce.",
      "Realizar alongamentos vigorosos com tração axial forte.",
      "Imobilizar o quadril em gesso."
    ],
    correctIndex: 1,
    rationale: "A mielomeningocele gera desequilíbrios musculares abaixo do nível da lesão medular. Órteses e alongamentos previnem contraturas e auxiliam a deambulação."
  },
  {
    id: "q_sem6_16",
    category: "s6_mulher",
    question: "O grupo de músculos do assoalho pélvico (MAP) é fundamental para a continência urinária e suporte visceral na mulher. As fibras que compõem o principal músculo desse grupo (Músculo Levantador do Ânus) são:",
    options: [
      "Fibras lisas involuntárias do esfíncter anal.",
      "Músculo Pubococcígeo, Iliococcígeo e Puborretal (estriados esqueléticos).",
      "Músculo Glúteo Mínimo e Obturador Interno.",
      "Músculo Reto Abdominal e Piriforme."
    ],
    correctIndex: 1,
    rationale: "O levantador do ânus é composto pelos fascículos puborretal, pubococcígeo e iliococcígeo, agindo no fechamento da uretra e reto sob controle motor voluntário."
  },
  {
    id: "q_sem6_17",
    category: "s6_mulher",
    question: "A diástase dos retos abdominais (DRA), comum no período pós-parto, consiste fisiologicamente em:",
    options: [
      "Uma hérnia inguinal com encarceramento de alças.",
      "O afastamento das bordas mediais dos dois ventres do músculo reto abdominal ao longo da linha alba devido ao estiramento tecidual na gestação.",
      "A contratura crônica dolorosa do músculo transverso do abdômen.",
      "A inflamação do apêndice xifoide."
    ],
    correctIndex: 1,
    rationale: "A DRA é consequência do crescimento uterino e ação de hormônios (relaxina) que afrouxam o colágeno da linha alba, exigindo exercícios de ativação do músculo transverso."
  },
  {
    id: "q_sem6_18",
    category: "s6_mulher",
    question: "Uma paciente pós-mastectomia radical com linfadenectomia axilar esquerda apresenta alto risco de linfedema de membro superior. Qual conduta preventiva é indicada?",
    options: [
      "Crioterapia de alta intensidade e compressas geladas sobre a axila.",
      "Exercícios ativos suaves de bombeamento de membro superior esquerdo, automassagem linfática e cuidados de pele contra ferimentos na área.",
      "Fricções circulares fortes e compressão estática dolorosa no braço.",
      "Imobilização do braço esquerdo em tipoia por 30 dias."
    ],
    correctIndex: 1,
    rationale: "Exercícios ativos ativam a bomba muscular que impulsiona a linfa. Higienizar e evitar ferimentos previne infecções locais que sobrecarregam o sistema linfático frágil."
  },
  {
    id: "q_sem6_19",
    category: "s6_mulher",
    question: "Durante a gestação no terceiro trimestre, ocorrem adaptações posturais fisiológicas compensatórias devido ao crescimento fetal anterior. Essas mudanças incluem:",
    options: [
      "Desvio posterior do centro de gravidade e retificação da cifose.",
      "Deslocamento anterior do centro de gravidade, aumento da lordose lombar (hiperlordose) e báscula anterior da pelve (anteversão).",
      "Aumento da lordose cervical isolada com encurtamento de isquiotibiais.",
      "Báscula posterior da pelve constante com retificação lombar."
    ],
    correctIndex: 1,
    rationale: "O peso do útero desloca o centro de gravidade para a frente. Para não cair, a gestante aumenta a curvatura lombar e projeta os ombros para trás, tensionando a lombar."
  },
  {
    id: "q_sem6_20",
    category: "s6_mulher",
    question: "A aplicação de TENS portátil durante o trabalho de parto ativo é uma recurso eletroterapêutico útil para:",
    options: [
      "Paralisar as contrações uterinas e adiar o parto.",
      "Fornecer alívio não farmacológico da dor do parto por meio da estimulação nervosa sensitiva na região lombar (dermátomos T10-L1 e S2-S4).",
      "Garantir a descida mecânica automática do feto.",
      "Promover anestesia farmacológica local na vagina."
    ],
    correctIndex: 1,
    rationale: "O TENS de alta frequência na lombar bloqueia sinais álgicos uterinos e sacrais, fornecendo uma alternativa segura e controlada pela própria parturiente para alívio de dor."
  },
  {
    id: "q_sem6_21",
    category: "s6_estudo_contemp",
    question: "O Estatuto da Igualdade Racial no Brasil garante o direito à saúde da população negra por meio de qual diretriz nacional do SUS?",
    options: [
      "Atendimento segregado em hospitais específicos de campanha.",
      "Políticas de saúde específicas que combatam as desigualdades raciais, racismo institucional e tratem de doenças com maior prevalência nessa população (ex: anemia falciforme).",
      "Isenção de consultas básicas no setor privado.",
      "Acesso limitado a exames complexos de imagem."
    ],
    correctIndex: 1,
    rationale: "A Política Nacional de Saúde Integral da População Negra busca combater o racismo institucional e garantir a equidade assistencial frente a vulnerabilidades específicas."
  },
  {
    id: "q_sem6_22",
    category: "s6_estudo_contemp",
    question: "O princípio da Equidade do SUS, de forte cunho ético e de Direitos Humanos, preconiza que o sistema de saúde deve:",
    options: [
      "Distribuir recursos idênticos a todos os cidadãos sem distinção de carências.",
      "Oferecer mais atenção e recursos àqueles que apresentam maiores necessidades sociais ou clínicas, visando reduzir as desigualdades de saúde.",
      "Atender prioritariamente apenas os contribuintes do regime financeiro.",
      "Priorizar cirurgias plásticas eletivas estéticas no setor público."
    ],
    correctIndex: 1,
    rationale: "Equidade significa tratar de forma desigual os desiguais para atingir a igualdade de direitos, alocando recursos em populações marginalizadas."
  },
  {
    id: "q_sem6_23",
    category: "s6_estudo_contemp",
    question: "A discriminação racial estrutural que se expressa de forma sutil através de barreiras de acesso e menor qualidade assistencial nos serviços públicos e privados denomina-se:",
    options: [
      "Racismo institucional",
      "Preconceito recreativo livre",
      "Diferença assistencial clínica involuntária",
      "Segregação legal explícita"
    ],
    correctIndex: 0,
    rationale: "O racismo institucional ocorre quando instituições falham em prover serviços adequados a pessoas devido à sua cor, cultura ou origem étnica de forma sistêmica."
  },
  {
    id: "q_sem6_24",
    category: "s6_estudo_contemp",
    question: "De acordo com os Direitos Humanos e as leis de inclusão social, as clínicas de fisioterapia e estabelecimentos de saúde devem obrigatoriamente prover:",
    options: [
      "Atendimento gratuito a todas as pessoas de forma ilimitada no setor privado.",
      "Acessibilidade física arquitetônica (rampas, banheiros adaptados, portas largas) para pessoas com deficiência ou mobilidade reduzida.",
      "Equipamentos eletrônicos individuais descartáveis.",
      "Contratação de terapeutas estrangeiros certificados de forma compulsória."
    ],
    correctIndex: 1,
    rationale: "A acessibilidade é direito fundamental das pessoas com deficiência assegurado por lei, garantindo autonomia de locomoção nas clínicas de saúde."
  },
  {
    id: "q_sem6_25",
    category: "s6_estudo_contemp",
    question: "Políticas de ações afirmativas de cotas no ensino superior no Brasil visam:",
    options: [
      "Garantir diplomas automáticos para minorias sociais.",
      "Corrigir distorções históricas de acesso e promover a diversidade social e étnico-racial nos espaços acadêmicos de formação profissional.",
      "Diminuir o número total de vagas públicas ofertadas.",
      "Privilegiar estudantes com maior renda econômica familiar."
    ],
    correctIndex: 1,
    rationale: "As ações afirmativas atuam compensando desvantagens acumuladas ao longo de gerações decorrentes da exclusão social e discriminação étnico-racial."
  },
  {
    id: "q_sem6_26",
    category: "s6_exp_prof",
    question: "A utilização de sistemas de Realidade Virtual (games interativos) na reabilitação neurológica contemporânea apoia-se em qual conceito neurofisiológico?",
    options: [
      "Degeneração Walleriana periférica.",
      "Neuroplasticidade induzida por feedback visual imediato e repetição de tarefas motivadoras voltadas a objetivos.",
      "Anestesia cortical sensorial reflexa.",
      "Aumento da fadiga central protetora."
    ],
    correctIndex: 1,
    rationale: "A realidade virtual fornece biofeedback visual e auditivo de alta motivação. Isso induz maior engajamento do paciente, estimulando conexões sinápticas novas nas áreas motoras cerebrais."
  },
  {
    id: "q_sem6_27",
    category: "s6_exp_prof",
    question: "A reabilitação robótica da marcha por meio de exoesqueletos mecanizados e esteiras de suspensão parcial de peso é indicada prioritariamente para:",
    options: [
      "Ganho de força concêntrica em atletas de elite de corrida de velocidade.",
      "Pacientes com sequelas neurológicas graves (ex: lesão medular incompleta ou AVC grave) para treinar o padrão de marcha com múltiplos ciclos repetitivos precisos.",
      "Tratar contraturas fibróticas de pele em queimaduras extensas.",
      "Substituir os exercícios de alongamento passivo diários."
    ],
    correctIndex: 1,
    rationale: "Robôs de marcha promovem a repetição simétrica ideal do ciclo de caminhada, ativando aferências sensoriais proprioceptivas cruciais para a reorganização cortical e padrão gerador central de ritmo medular."
  },
  {
    id: "q_sem6_28",
    category: "s6_exp_prof",
    question: "O uso de softwares e aplicativos de biofeedback eletromiográfico na clínica de fisioterapia permite ao paciente:",
    options: [
      "Fazer o download de exames de imagem e laudos ortopédicos.",
      "Visualizar graficamente na tela a atividade elétrica de contração muscular, auxiliando o controle voluntário e aprendizado motor de músculos fracos ou hiperativos.",
      "Automatizar o controle das correntes de alta voltagem dolorosas.",
      "Substituir o uso de aparelhos de ultrassom diagnóstico."
    ],
    correctIndex: 1,
    rationale: "O biofeedback eletromiográfico (EMG) monitora sinais de superfície. Ao ver o sinal gráfico subindo na contração, o paciente aprende de forma cognitiva a recrutar as unidades motoras adequadas."
  },
  {
    id: "q_sem6_29",
    category: "s6_exp_prof",
    question: "Qual inovação em Fisioterapia Cardiorrespiratória utiliza a telemetria e o monitoramento digital à distância?",
    options: [
      "O transplante cardíaco assistido por robô local.",
      "A telereabilitação monitorada, onde o paciente realiza exercícios respiratórios em casa usando sensores de oxigênio conectados ao profissional via aplicativo.",
      "A ausculta pulmonar eletrônica autônoma sem aval terapêutico.",
      "O uso de ventiladores de UTI controlados por celular comercial."
    ],
    correctIndex: 1,
    rationale: "A telereabilitação cardíaca monitora remotamente a saturação de O2 e FC, expandindo a assistência para pacientes pós-IAM que não podem ir à clínica com frequência."
  },
  {
    id: "q_sem6_30",
    category: "s6_exp_prof",
    question: "O emprego clínico de exoesqueletos infantis mecanizados na reabilitação da Paralisia Cerebral permite:",
    options: [
      "A cura definitiva da encefalopatia crônica em poucas sessões.",
      "A verticalização precoce e o treino de marcha lúdica com alinhamento mecânico excelente das articulações de carga, prevenindo osteopenia e deformidades.",
      "Aumentar o tempo que a criança passa deitada em repouso passivo.",
      "Substituir a necessidade de cirurgias ortopédicas em casos de luxação completa grave estrutural."
    ],
    correctIndex: 1,
    rationale: "Exoesqueletos pediátricos mantém a criança de pé de forma ergonômica, estimulando a descarga de peso ósseo e a locomoção lúdica ativa, promovendo ganho de controle motor."
  },
  {
    id: "q_sem7_1",
    category: "s7_protese",
    question: "Qual órtese espinhal rígida é a mais recomendada para o tratamento conservador de curvas escolióticas progressivas moderadas (ângulos de Cobb entre 20 e 40 graus) em adolescentes em fase de crescimento esquelético ativo?",
    options: [
      "Colete de Putti alto macio",
      "Colete de Boston ou colete de Milwaukee",
      "Cinturão lombar de neoprene simples",
      "Colar cervical rígido do tipo Philadelphia"
    ],
    correctIndex: 1,
    rationale: "Os coletes de Milwaukee (com superestrutura cervical) ou Boston (TLSO sob medida) aplicam pressões corretivas em três pontos na caixa torácica e pelve, contendo o avanço da escoliose no estirão de crescimento."
  },
  {
    id: "q_sem7_2",
    category: "s7_protese",
    question: "Nas próteses para amputados de membro inferior a nível transtibial, qual região anatômica do coto de amputação é a principal área de descarga de peso tolerável no encaixe do tipo PTB (Patellar Tendon Bearing)?",
    options: [
      "O ápice distal do osso da tíbia amputada.",
      "O tendão patelar (ligamento patelar).",
      "A cabeça do osso fíbula lateral.",
      "A fossa poplítea posterior muscular."
    ],
    correctIndex: 1,
    rationale: "O ápice do coto ósseo é sensível a pressões e pode sofrer lesões de pele. O encaixe PTB desvia a carga para o tendão patelar e áreas adjacentes (condilos tibiais), que toleram melhor a compressão."
  },
  {
    id: "q_sem7_3",
    category: "s7_protese",
    question: "Qual a finalidade de uma órtese do tipo splint de posicionamento estático para punho e dedos (órtese cock-up) para um paciente com espasticidade em flexão pós-AVC?",
    options: [
      "Forçar a execução de tarefas motoras finas ativas.",
      "Manter o punho e os dedos em posição funcional neutra para prevenir encurtamentos musculares crônicos, fibroses e contraturas articulares por padrão flexor.",
      "Estimular a via piramidal através de atrito sensorial.",
      "Reduzir o edema linfático por meio de calor interno."
    ],
    correctIndex: 1,
    rationale: "A espasticidade mantida sem posicionamento adequado causa o encurtamento mecânico dos flexores do punho. A órtese estática de repouso previne deformidades e deformações articulares."
  },
  {
    id: "q_sem7_4",
    category: "s7_protese",
    question: "Antes de iniciar o treino de marcha com prótese em um paciente recém-amputado de coxa (transfemoral), qual a conduta fisioterapêutica preparatória prioritária no coto de amputação?",
    options: [
      "Aplicar calor profundo por ondas curtas.",
      "Enfaixamento compressivo modelador de padrão em oito para reduzir o edema e modelar o coto em formato cônico, além de dessensibilização cutânea.",
      "Evitar tocar ou mover o coto por 60 dias pós-cirúrgicos.",
      "Alongamento passivo forçado da flexão do quadril."
    ],
    correctIndex: 1,
    rationale: "O enfaixamento compressivo acelera o retorno venoso/linfático e remodela o tecido adiposo, preparando o coto para encaixar de forma estável na prótese. A dessensibilização reduz a dor fantasma."
  },
  {
    id: "q_sem7_5",
    category: "s7_protese",
    question: "As órteses dinâmicas diferem das órteses estáticas simples por possuírem:",
    options: [
      "Materiais puramente de gesso de alta densidade.",
      "Componentes móveis como elásticos, molas ou dobradiças articuladas que auxiliam ou resistem a movimentos ativos e preservam a mobilidade das articulações.",
      "Um marcapasso interno embutido para controle motor.",
      "Aplicações restritas a pacientes acamados em UTIs."
    ],
    correctIndex: 1,
    rationale: "Órteses dinâmicas aplicam uma força de baixa intensidade e longa duração para recuperar ADM ou assistir a função extensora (ex: lesão do nervo radial com 'mão caída')."
  },
  {
    id: "q_sem7_6",
    category: "s7_respiratoria",
    question: "A técnica de higiene brônquica que consiste em expirações lentas e controladas em diferentes volumes pulmonares, sem o uso de equipamentos adicionais, é denominada:",
    options: [
      "Tapotagem torácica de percussão",
      "Drenagem Autógena",
      "Incentivador inspiratório a fluxo",
      "Aspiração traqueal fechada"
    ],
    correctIndex: 1,
    rationale: "A Drenagem Autógena utiliza variações de fluxo aéreo expiratório para mobilizar secreções desde as vias aéreas periféricas até as centrais de forma autônoma e confortável."
  },
  {
    id: "q_sem7_7",
    category: "s7_respiratoria",
    question: "Na Ventilação Mecânica Invasiva na UTI, o modo Ventilação com Pressão de Suporte (PSV) é caracterizado por ser um modo:",
    options: [
      "Totalmente controlado por tempo, onde o paciente não realiza esforço.",
      "Espontâneo, onde o ventilador fornece uma pressão de ajuda predefinida durante a inspiração iniciada pelo paciente, e a ciclagem ocorre pela queda do fluxo inspiratório.",
      "Controlado por volume rígido onde a frequência respiratória é travada.",
      "Limitado a altas pressões contínuas sem alívio expiratório."
    ],
    correctIndex: 1,
    rationale: "No modo PSV, o paciente comanda a frequência, fluxo e tempo inspiratório. O ventilador apenas apóia a fase inspiratória ativa, facilitando o desmame da ventilação mecânica."
  },
  {
    id: "q_sem7_8",
    category: "s7_respiratoria",
    question: "Qual é o principal efeito fisiológico pulmonar imediato da aplicação da Pressão Expiratória Final Positiva (PEEP) na ventilação mecânica de pacientes com congestão pulmonar?",
    options: [
      "Aumento do colapso expiratório dos alvéolos instáveis.",
      "Recrutamento alveolar (abertura de alvéolos colapsados), aumento da capacidade residual funcional (CRF) e melhora da oxigenação sanguínea.",
      "Diminuição da ventilação do espaço morto anatômico.",
      "Redução da pressão intratorácica sistólica."
    ],
    correctIndex: 1,
    rationale: "A PEEP impede que os alvéolos colapsem no final da expiração, mantendo-os abertos para trocas gasosas contínuas, reduzindo o shunt pulmonar e melhorando a complacência."
  },
  {
    id: "q_sem7_9",
    category: "s7_respiratoria",
    question: "O incentivador inspiratório volumétrico (ex: Voldyne) difere do incentivador a fluxo (ex: Respiron) porque o volumétrico:",
    options: [
      "Exige fluxos muito rápidos que geram maior fadiga muscular.",
      "Mede e exibe o volume de ar inalado pelo paciente estimulando respirações profundas e lentas, sendo ideal para profilaxia de atelectasias pós-operatórias.",
      "Serve para treinar a força muscular expiratória.",
      "Não pode ser utilizado por pacientes com capacidade pulmonar preservada."
    ],
    correctIndex: 1,
    rationale: "Incentivadores a volume focam na inspiração lenta e sustentada para melhor distribuição da ventilação em alvéolos da base pulmonar. Incentivadores a fluxo exigem altos fluxos turbulentos."
  },
  {
    id: "q_sem7_10",
    category: "s7_respiratoria",
    question: "Qual patologia respiratória aguda em UTI cursa com hipoxemia refratária grave e infiltrado pulmonar bilateral difuso (imagem em asa de borboleta), sem origem cardíaca primária?",
    options: [
      "Derrame pleural leve unilateral",
      "Síndrome do Desconforto Respiratório Agudo (SDRA)",
      "Asma brônquica crônica",
      "Tromboembolismo pulmonar localizado sem edema"
    ],
    correctIndex: 1,
    rationale: "A SDRA é uma síndrome inflamatória alveolar grave causada por lesão da membrana alvéolo-capilar, levando a edema pulmonar não cardiogênico com colapso maciço de alvéolos."
  },
  {
    id: "q_sem7_11",
    category: "s7_estudo_contemp",
    question: "A sustentabilidade nas práticas de gestão de saúde e de clínicas de fisioterapia pode ser demonstrada através de qual ação?",
    options: [
      "Utilização de copos e descartáveis de plástico sem restrição.",
      "Descarte seletivo de resíduos biológicos e químicos segundo a RDC 222, digitalização de prontuários (redução de papel) e uso eficiente de energia e água.",
      "Uso prolongado de lâmpadas incandescentes na área de termoterapia.",
      "Queima de lixo clínico comum no próprio terreno da clínica."
    ],
    correctIndex: 1,
    rationale: "A ecoeficiência une gestão financeira e responsabilidade ambiental, diminuindo os impactos dos serviços assistenciais no ecossistema e na comunidade."
  },
  {
    id: "q_sem7_12",
    category: "s7_estudo_contemp",
    question: "O Código de Defesa do Consumidor (CDC) regulamenta a prestação de serviços de saúde. Diante disso, o contrato de prestação de serviços de fisioterapia constitui uma obrigação de:",
    options: [
      "Resultado garantido a qualquer custo (cura absoluta compulsória).",
      "Meio, onde o profissional se compromete a empregar a melhor técnica baseada em evidência e zelo clínico para reabilitar o paciente, sem garantir a cura biológica absoluta.",
      "Consumo compulsório de bens farmacêuticos associados.",
      "Resultado apenas em caso de cirurgias plásticas concomitantes."
    ],
    correctIndex: 1,
    rationale: "Por lidar com biologia humana e variáveis individuais, o fisioterapeuta responde pela qualidade técnica de suas condutas (obrigação de meio), mas não pode garantir um desfecho de cura de forma contratual."
  },
  {
    id: "q_sem7_13",
    category: "s7_estudo_contemp",
    question: "O conceito de 'obsolescência programada' na cadeia de consumo de equipamentos tecnológicos de saúde representa:",
    options: [
      "A obsolescência natural gerada pelo desgaste de peças.",
      "A estratégia comercial de desenvolver aparelhos com vida útil limitada de fábrica para forçar o consumidor a adquirir novos modelos.",
      "A atualização gratuita e perpétua de softwares de diagnóstico.",
      "O controle ético do descarte de lixo hospitalar no meio ambiente."
    ],
    correctIndex: 1,
    rationale: "A obsolescência programada visa manter o ciclo econômico ativo, mas gera graves impactos ambientais pelo acúmulo de lixo eletrônico não biodegradável."
  },
  {
    id: "q_sem7_14",
    category: "s7_estudo_contemp",
    question: "Qual a correta conduta para o descarte de pilhas, baterias e equipamentos de eletroterapia antigos inutilizados na clínica?",
    options: [
      "Descarte no lixo comum ou sacos plásticos infectantes pretos.",
      "Encaminhamento para descarte por logística reversa em postos autorizados ou assistência técnica do fabricante para destinação ambiental segura.",
      "Armazenamento indefinido na recepção da clínica.",
      "Descarte em rios ou redes de esgoto pluvial locais."
    ],
    correctIndex: 1,
    rationale: "Metais pesados presentes em eletrônicos contaminam o solo e lençóis freáticos. A logística reversa garante que o fabricante recicle ou descarte os resíduos com segurança."
  },
  {
    id: "q_sem7_15",
    category: "s7_estudo_contemp",
    question: "O princípio da Autonomia do Paciente, no âmbito ético e jurídico, assegura ao paciente de Fisioterapia o direito de:",
    options: [
      "Determinar e alterar a dosagem de medicamentos prescritos por médicos.",
      "Consentir ou recusar de forma livre e esclarecida as propostas terapêuticas sugeridas pelo fisioterapeuta, após receber explicações claras sobre riscos e benefícios.",
      "Exigir tratamentos ilegais ou sem evidência científica na clínica.",
      "Trabalhar na administração financeira da clínica de forma compulsória."
    ],
    correctIndex: 1,
    rationale: "A autonomia garante o respeito à liberdade do paciente sobre seu próprio corpo e destino de saúde, formalizado pelo Termo de Consentimento Livre e Esclarecido."
  },
  {
    id: "q_sem7_16",
    category: "s7_exp_prof",
    question: "A Artrite Reumatoide (AR) é uma doença inflamatória autoimune sistêmica crônica. Na fase inflamatória aguda articular de mãos, qual a conduta cinesioterapêutica recomendada?",
    options: [
      "Fortalecimento isométrico máximo e mobilização articular Grau V Maitland.",
      "Exercícios ativos suaves de amplitude de movimento sem carga e sem forçar dor, além de repouso articular nas crises em posições funcionais.",
      "Alongamento passivo vigoroso de flexores de dedos até o limiar de dor intensa.",
      "Exercícios resistidos pesados com halteres para prevenir atrofia."
    ],
    correctIndex: 1,
    rationale: "Nas crises de inflamação aguda da AR, as articulações sofrem sinovite intensa e fragilidade capsuloligamentar. Condutas forçadas geram deformidades e piora inflamatória."
  },
  {
    id: "q_sem7_17",
    category: "s7_exp_prof",
    question: "Um paciente com Espondilite Anquilosante (EA) apresenta dor lombar crônica inflamatória e tendência à fusão óssea da coluna em cifose (postura do esquiador). Qual a orientação terapêutica principal?",
    options: [
      "Exercícios focados em manter a flexão lombar continuada.",
      "Exercícios de extensão da coluna (postural) e expansibilidade torácica profunda diários para contrapor a anquilose da coluna e costelas.",
      "Evitar qualquer tipo de exercício respiratório.",
      "Imobilização da coluna com colete rígido 24 horas por dia."
    ],
    correctIndex: 1,
    rationale: "A EA anquilosa as articulações da coluna e as costovertebrais, reduzindo a capacidade vital pulmonar. Exercícios de extensão e expansão torácica preservam a função respiratória e postural."
  },
  {
    id: "q_sem7_18",
    category: "s7_exp_prof",
    question: "A Fibromialgia é uma síndrome caracterizada por dor musculoesquelética difusa crônica. Qual modalidade terapêutica possui maior nível de evidência científica para controle de sintomas a longo prazo nesses pacientes?",
    options: [
      "Uso contínuo de aparelhos de ultrassom terapêutico de alta dosagem nas costas.",
      "Exercícios físicos aeróbicos de intensidade leve a moderada de forma regular e gradual, associados a suporte cognitivo-comportamental.",
      "Alongamentos puramente passivos forçados estáticos semanais.",
      "Eletroterapia de alta voltagem para induzir fadiga muscular total."
    ],
    correctIndex: 1,
    rationale: "Exercícios aeróbicos estimulam a liberação de neurotransmissores moduladores da dor (serotonina e endorfinas) e melhoram o padrão de sono e a fadiga desses pacientes."
  },
  {
    id: "q_sem7_19",
    category: "s7_exp_prof",
    question: "A Osteoartrite (ou Artrose) é uma patologia articular degenerativa. Qual o principal fator fisiopatológico mecânico associado ao seu desenvolvimento nas articulações de carga?",
    options: [
      "A infecção crônica bacteriana da sinóvia.",
      "A degradação progressiva da cartilagem hialina articular devido a forças de compressão repetitivas e inflamação local de baixo grau.",
      "A ausência de vasos linfáticos no periósteo distal.",
      "A proliferação excessiva de discos de crescimento ósseo."
    ],
    correctIndex: 1,
    rationale: "A artrose envolve o desgaste da cartilagem que reveste as superfícies ósseas, causando dor e limitação funcional, sendo muito comum no quadril e joelhos."
  },
  {
    id: "q_sem7_20",
    category: "s7_exp_prof",
    question: "No planejamento de tratamento para idosos com osteoartrose grave de joelho, qual conduta manual visa melhorar o deslizamento articular e aliviar a dor mecânica imediata?",
    options: [
      "Fricção forte transversal sobre o ligamento patelar doloroso.",
      "Tração articular suave de Grau I ou II e mobilizações acessórias de Maitland para descompressão e estimulação do líquido sinovial.",
      "Imobilização gessada em extensão total por duas semanas.",
      "Forçar a flexão articular do joelho até o limite da dor máxima."
    ],
    correctIndex: 1,
    rationale: "Mobilizações articulares suaves reduzem a dor por meio de efeitos neurofisiológicos locais que estimulam mecanorreceptores e favorecem a lubrificação do líquido sinovial articular."
  },
  {
    id: "q_sem8_1",
    category: "s8_dermatofunc",
    question: "Qual recurso terapêutico e técnica compõem o padrão-ouro de tratamento para a redução do linfedema periférico crônico (ex: linfedema de membro superior pós-mastectomia)?",
    options: [
      "Termoterapia por ondas curtas profunda.",
      "Terapia Física Complexa (TFC), que engloba drenagem linfática manual, enfaixamento compressivo multicamadas, exercícios miolinfokinetos e cuidados de pele.",
      "Aplicação de Laser de Alta Intensidade destrutivo local.",
      "Repouso absoluto com o membro em declive acentuado permanente."
    ],
    correctIndex: 1,
    rationale: "A TFC atua de forma sistêmica: a drenagem mobiliza a linfa, o enfaixamento mantém a redução e evita o acúmulo intersticial, e os exercícios promovem a bomba muscular."
  },
  {
    id: "q_sem8_2",
    category: "s8_dermatofunc",
    question: "Ao reabilitar cicatrizes de queimaduras em fase de maturação para evitar a formação de aderências teciduais rígidas, qual técnica manual de massagem transversa profunda é indicada?",
    options: [
      "Técnica de Cyriax (aplicada transversalmente às fibras musculares/teciduais sem deslizamento sobre a pele).",
      "Tapping rápido e superficial com as pontas dos dedos.",
      "Fricções lineares superficiais leves com uso de óleos vegetais.",
      "Pinçamento vigoroso de dobras com tração forte."
    ],
    correctIndex: 0,
    rationale: "A massagem de Cyriax rompe as pontes de hidrogênio e colágeno desalinhados da cicatriz espessa, mantendo o tecido móvel e evitando a retração cicatricial restritiva."
  },
  {
    id: "q_sem8_3",
    category: "s8_dermatofunc",
    question: "No tratamento estético e dermatofuncional do fibroedema geloide (FEG - celulite) e da adiposidade localizada superficial, qual a frequência do ultrassom recomendada?",
    options: [
      "1 MHz contínuo de alta potência profunda.",
      "3 MHz contínuo de dosagem moderada, por sua absorção seletiva nos primeiros 1,5 a 2 cm de profundidade cutânea.",
      "0,5 MHz pulsado com baixa ERA.",
      "Qualquer frequência, desde que associada a correntes elétricas."
    ],
    correctIndex: 1,
    rationale: "O ultrassom de 3 MHz foca a energia acústica no tecido subcutâneo adiposo superficial, promovendo microfluxo acústico, aumento circulatório e estímulo metabólico local."
  },
  {
    id: "q_sem8_4",
    category: "s8_dermatofunc",
    question: "Qual a principal diferença clínica e tecidual entre uma cicatriz hipertrófica e um queloide?",
    options: [
      "A cicatriz hipertrófica espalha-se além das bordas originais da ferida; o queloide permanece dentro dos limites originais.",
      "A cicatriz hipertrófica permanece nos limites originais da lesão e tende a regredir espontaneamente com o tempo; o queloide ultrapassa as bordas da lesão original e não regride.",
      "O queloide ocorre apenas em cirurgias ósseas profundas.",
      "Não há nenhuma distinção tecidual ou histológica relevante."
    ],
    correctIndex: 1,
    rationale: "Queloides são lesões fibroproliferativas benignas com deposição excessiva e desorganizada de colágeno Tipo I e III que invadem tecidos saudáveis adjacentes."
  },
  {
    id: "q_sem8_5",
    category: "s8_dermatofunc",
    question: "A tecnologia de Radiofrequência aplicada à dermatofuncional para rejuvenescimento facial e tratamento de flacidez de pele baseia-se em qual princípio fisiológico?",
    options: [
      "Fototermólise seletiva por emissão de luz laser azul.",
      "Aquecimento volumétrico profundo da derme que desnatura as fibras de colágeno antigas, estimulando a neocofibrilopoiese (síntese de colágeno novo por fibroblastos).",
      "Contração muscular facial vigorosa por indução elétrica alternada.",
      "Resfriamento superficial da pele que induz lipólise."
    ],
    correctIndex: 1,
    rationale: "A radiofrequência aquece a derme profunda a temperaturas específicas (geralmente entre 39°C e 42°C). Isso causa contração imediata do colágeno e ativação fibroblástica de longo prazo."
  },
  {
    id: "q_sem9_1",
    category: "s9_cardio",
    question: "A Fase I da Reabilitação Cardiovascular (RCV) inicia-se em qual período e qual o seu objetivo principal?",
    options: [
      "No período de internação hospitalar pós-evento coronário agudo, visando mobilização precoce segura, prevenção de complicações do imobilismo e independência funcional para a alta.",
      "Três meses após a alta hospitalar, focando em treinos intensivos de corrida na esteira.",
      "Apenas no ambiente de consultório ambulatorial especializado particular.",
      "Exclusivamente após a realização de cirurgia de ponte de safena de emergência."
    ],
    correctIndex: 0,
    rationale: "A Fase I hospitalar foca em cinesioterapia metabólica de baixíssima intensidade (1 a 3 METs), visando garantir que o paciente retorne às atividades básicas diárias sem riscos."
  },
  {
    id: "q_sem9_2",
    category: "s9_cardio",
    question: "Durante as sessões de Reabilitação Cardiovascular em pacientes cardiopatas, qual ferramenta clínica simples e validada é usada para monitorar subjetivamente a percepção de esforço físico?",
    options: [
      "Fórmula de Karvonen clássica pura.",
      "Escala de Percepção de Esforço de Borg (de 6 a 20 ou de 0 a 10).",
      "Aferição do pulso venoso jugular visual.",
      "Eletrocardiograma de esforço com esfigmomanômetro eletrônico."
    ],
    correctIndex: 1,
    rationale: "A escala de Borg permite que o cardiopata correlacione seu esforço físico com a exaustão, sendo fundamental para o treino de pacientes sob uso de beta-bloqueadores."
  },
  {
    id: "q_sem9_3",
    category: "s9_cardio",
    question: "Em um programa de RCV ambulatorial na Fase II (pós-alta), qual o tipo de exercício físico e intensidade recomendada para recondicionamento inicial?",
    options: [
      "Treino resistido isométrico estático de alta carga na lombar.",
      "Exercício aeróbico dinâmico (caminhada, cicloergômetro) de intensidade moderada (50-70% da frequência cardíaca de reserva ou Borg 11-13) monitorado continuamente.",
      "Corrida em velocidade de sprint intervalado sem monitorização.",
      "Exercícios passivos leves apenas em membros superiores."
    ],
    correctIndex: 1,
    rationale: "O exercício aeróbico dinâmico moderado promove condicionamento periférico cardiovascular, aumenta a densidade mitocondrial e melhora a eficiência metabólica sem sobrecarregar o coração."
  },
  {
    id: "q_sem9_4",
    category: "s9_cardio",
    question: "Qual das seguintes condições clínicas representa uma contraindicação absoluta para a realização de exercícios físicos na reabilitação cardiovascular?",
    options: [
      "Hipertensão arterial leve controlada com remédios.",
      "Angina instável (dor torácica de origem cardíaca em repouso ou esforços mínimos) ou arritmias ventriculares não controladas.",
      "Frequência cardíaca de repouso de 75 bpm.",
      "Pós-infarto tardio em fase estável há mais de 4 semanas."
    ],
    correctIndex: 1,
    rationale: "A angina instável indica isquemia miocárdica ativa severa com risco iminente de infarto do miocárdio ou arritmia cardíaca fatal se submetida a estresse físico."
  },
  {
    id: "q_sem9_5",
    category: "s9_cardio",
    question: "A reabilitação cardíaca na insuficiência cardíaca congestiva estável promove qual adaptação muscular periférica benéfica ao paciente?",
    options: [
      "Aumento patológico do tamanho da cavidade atrial esquerda.",
      "Melhora na captação periférica de oxigênio pelo aumento da densidade capilar e mitocondrial nos músculos esqueléticos ativos.",
      "Disfunção do sistema simpático central.",
      "Fibrose generalizada nas artérias de membros inferiores."
    ],
    correctIndex: 1,
    rationale: "Cardiopatas com insuficiência têm baixo débito. O exercício treina a musculatura periférica a extrair e utilizar o O2 disponível de forma mais eficiente, diminuindo os sintomas de fadiga e dispneia."
  },
  {
    id: "q_sem10_1",
    category: "s10_trabalhador",
    question: "Qual ferramenta ergonômica semiquantitativa é amplamente utilizada por fisioterapeutas do trabalho para avaliar posturas e sobrecargas biomecânicas nos membros superiores?",
    options: [
      "Escala de equilíbrio Tinetti",
      "Método RULA (Rapid Upper Limb Assessment)",
      "Classificação Internacional de Funcionalidade (CIF)",
      "Goniômetro universal mecânico puro"
    ],
    correctIndex: 1,
    rationale: "O método RULA é uma ferramenta observacional rápida que avalia a carga musculoesquelética no pescoço, tronco e membros superiores com base em ângulos posturais."
  },
  {
    id: "q_sem10_2",
    category: "s10_trabalhador",
    question: "A Ginástica Laboral preparatória, realizada no próprio posto de trabalho das empresas, caracteriza-se por:",
    options: [
      "Exercícios de alta intensidade para exaustão e fadiga muscular.",
      "Exercícios de alongamento, aquecimento e ativação muscular de curta duração (10 a 15 minutos) realizados no início da jornada para preparar os tecidos.",
      "Exercícios passivos de relaxamento profundo para induzir o sono.",
      "Exercícios aeróbicos de corrida ao ar livre coletiva."
    ],
    correctIndex: 1,
    rationale: "A ginástica preparatória visa despertar o trabalhador, aumentar o fluxo sanguíneo local e preparar as articulações para a carga de trabalho subsequente."
  },
  {
    id: "q_sem10_3",
    category: "s10_trabalhador",
    question: "A Norma Regulamentadora nº 17 (NR 17) do Ministério do Trabalho e Emprego visa estabelecer parâmetros ergonômicos para:",
    options: [
      "Definir a escala rígida de horas extras permitidas no ano.",
      "Adaptar as condições de trabalho às características psicofisiológicas dos trabalhadores, de modo a proporcionar máximo conforto, segurança e desempenho eficiente.",
      "Regulamentar o uso de EPIs em áreas com risco biológico.",
      "Determinar o valor do salário-mínimo nacional."
    ],
    correctIndex: 1,
    rationale: "A NR 17 rege a ergonomia ocupacional, abrangendo o transporte de cargas, mobiliário, condições ambientais de trabalho (ruído, temperatura) e organização do trabalho."
  },
  {
    id: "q_sem10_4",
    category: "s10_trabalhador",
    question: "A LER/DORT (Lesões por Esforços Repetitivos / Distúrbios Osteomusculares Relacionados ao Trabalho) é provocada principalmente por:",
    options: [
      "Dificuldade genética involuntária de síntese de colágeno.",
      "Sobrecarga biomecânica contínua decorrente de movimentos repetitivos, posturas mantidas nocivas, ausência de pausas e pressões psicológicas no trabalho.",
      "Quedas acidentais no ambiente doméstico fora de serviço.",
      "Infecção fúngica nas articulações periféricas."
    ],
    correctIndex: 1,
    rationale: "LER/DORT são quadros inflamatórios ocupacionais multifatoriais associados à fadiga persistente, falta de repouso estruturado e movimentos repetitivos excessivos."
  },
  {
    id: "q_sem10_5",
    category: "s10_trabalhador",
    question: "A elaboração da Análise Ergonômica do Trabalho (AET) é um processo que envolve:",
    options: [
      "A contratação simplificada de funcionários de limpeza.",
      "O diagnóstico ergonômico detalhado das tarefas e postos de trabalho de uma empresa, visando identificar riscos e sugerir melhorias posturais e organizacionais.",
      "Um laudo de perícia judicial para demissão compulsória.",
      "A prescrição de remédios analgésicos coletivos na empresa."
    ],
    correctIndex: 1,
    rationale: "A AET mapeia de forma científica os riscos ergonômicos da empresa, servindo de base para o fisioterapeuta do trabalho propor adequações ergonômicas em máquinas e mobiliários."
  },
  {
    id: "q_sem10_6",
    category: "s10_evidencias",
    question: "Na pirâmide de evidência científica que guia a prática clínica, qual desenho de estudo apresenta maior robustez metodológica e nível de recomendação clínica?",
    options: [
      "Relatos de Casos Clínicos isolados",
      "Estudos de coorte retrospectivos simples",
      "Revisão Sistemática com Metanálise de Ensaios Clínicos Controlados Aleatorizados",
      "Opinião pessoal de especialistas renomados"
    ],
    correctIndex: 2,
    rationale: "Revisões sistemáticas com metanálise reúnem de forma estatística os dados de múltiplos ensaios clínicos aleatorizados, gerando estimativas precisas de efeito e eficácia clínica."
  },
  {
    id: "q_sem10_7",
    category: "s10_evidencias",
    question: "No planejamento de uma pesquisa de tratamento fisioterapêutico, a randomização é um processo estatístico crucial que visa:",
    options: [
      "Garantir a exclusão de idosos e crianças na amostra.",
      "Distribuir aleatoriamente os participantes entre o grupo intervenção e controle, minimizando vieses de seleção e garantindo a homogeneidade dos grupos.",
      "Selecionar o terapeuta que melhor sabe aplicar a técnica.",
      "Reduzir o tempo de duração da pesquisa clínica."
    ],
    correctIndex: 1,
    rationale: "A randomização garante que variáveis de confusão (como idade, sexo ou severidade inicial) tenham chances iguais de distribuição entre os grupos comparados."
  },
  {
    id: "q_sem10_8",
    category: "s10_evidencias",
    question: "A escala PEDro (Physiotherapy Evidence Database) é um instrumento de avaliação amplamente utilizado na área de fisioterapia para avaliar:",
    options: [
      "A força muscular de membros inferiores em idosos.",
      "A qualidade metodológica interna e clareza estatística de ensaios clínicos controlados aleatorizados.",
      "O número absoluto de citações de um autor de pesquisa.",
      "A facilidade de uso de aparelhos de eletroterapia."
    ],
    correctIndex: 1,
    rationale: "A escala PEDro pontua de 0 a 10 critérios chaves (como cegamento, randomização e análise por intenção de tratar) para que clínicos saibam o quão confiável é um artigo."
  },
  {
    id: "q_sem10_9",
    category: "s10_evidencias",
    question: "O termo 'Cegamento' (blinding) em um ensaio clínico controlado aleatorizado de fisioterapia visa evitar:",
    options: [
      "O surgimento de lesões ópticas nos pacientes.",
      "Vieses de expectativa ou de aferição, garantindo que o paciente e/ou o avaliador de dados não saibam a qual grupo (teste ou controle) o indivíduo pertence.",
      "A fuga voluntária dos pacientes participantes.",
      "A necessidade de análise estatística de dados no final do estudo."
    ],
    correctIndex: 1,
    rationale: "Saber qual intervenção está recebendo pode induzir efeitos placebo ou nocebo no paciente, ou fazer com que o examinador dê notas melhores inconscientemente."
  },
  {
    id: "q_sem10_10",
    category: "s10_evidencias",
    question: "O acrônimo P.I.C.O. é uma estratégia metodológica recomendada para formular perguntas de pesquisa em saúde. O significado de suas letras é:",
    options: [
      "Prognóstico, Investigação, Controle e Organização",
      "Paciente (ou População), Intervenção, Comparação (ou Controle) e Outcome (Desfecho)",
      "Prevenção, Intensidade, Custos e Opções de cura",
      "Pesquisador, Indivíduo, Conduta e Observação"
    ],
    correctIndex: 1,
    rationale: "A estratégia P.I.C.O. ajuda o profissional a definir de forma organizada os elementos essenciais de sua dúvida clínica, facilitando a busca precisa por evidências na literatura."
  },
  {
    id: "q_sem10_11",
    category: "s10_topicos",
    question: "A atuação do fisioterapeuta em Cuidados Paliativos integrados visa prioritariamente:",
    options: [
      "Curar a patologia oncológica em fase avançada reversível.",
      "Promover o alívio da dor física, controle de sintomas (como dispneia e fadiga) e melhora da qualidade de vida e funcionalidade do paciente sem cura biológica, integrando a família.",
      "Prescrever suporte farmacológico intensivo paliativo.",
      "Realizar exercícios resistidos de alta intensidade para ganho de massa."
    ],
    correctIndex: 1,
    rationale: "Cuidados Paliativos focam no conforto e na dignidade do indivíduo diante do fim da vida, controlando o sofrimento sob uma abordagem multidisciplinar e compassiva."
  },
  {
    id: "q_sem10_12",
    category: "s10_topicos",
    question: "A Fadiga Crônica pós-viral (como na Síndrome Pós-COVID) exige atenção terapêutica. A conduta cinesioterapêutica recomendada é:",
    options: [
      "Exercícios de alta intensidade para vencer a fadiga por esforço rápido.",
      "Treinamento físico gradual e individualizado (exercício de baixo impacto) com monitoramento cuidadoso de energia (Pacing) para evitar piora pós-esforço.",
      "Repouso absoluto na cama sem qualquer tipo de mobilização física.",
      "Aplicação de calor profundo contínuo e massagens fortes diárias."
    ],
    correctIndex: 1,
    rationale: "Pacientes com fadiga pós-viral possuem intolerância ao esforço. Exercícios pesados desregulam o sistema imunológico e autonômico, gerando crises de exaustão severas (PEM)."
  },
  {
    id: "q_sem10_13",
    category: "s10_topicos",
    question: "As Práticas Integrativas e Complementares (PICS) no âmbito de tópicos especiais atuam no SUS de forma a:",
    options: [
      "Substituir de forma compulsória a atenção terciária hospitalar de urgência.",
      "Complementar a assistência à saúde, integrando a medicina tradicional e a visão holística no cuidado integral de dores crônicas e estresse.",
      "Garantir a cura de doenças bacterianas agudas.",
      "Dispensar a necessidade de campanhas de vacinação."
    ],
    correctIndex: 1,
    rationale: "As PICS atuam na prevenção e promoção da saúde mental e física, alinhando saberes tradicionais aos cuidados convencionais de reabilitação."
  },
  {
    id: "q_sem10_14",
    category: "s10_topicos",
    question: "O uso de órteses robóticas (exoesqueletos de membros inferiores) no treino de marcha de pacientes com lesão medular completa acima de T6 auxilia na prevenção de qual complicação crônica?",
    options: [
      "Progressão da escoliose idiopática na adolescência.",
      "Osteopenia por desuso (perda de massa óssea) nos membros inferiores, através da descarga de peso em pé, e redução de espasticidade.",
      "Dificuldade de controle de movimentos dos membros superiores.",
      "Incontinência urinária aguda transitória."
    ],
    correctIndex: 1,
    rationale: "Ficar de pé e caminhar de forma assistida mecanicamente impõe estresse gravitacional no fêmur e tíbia, atenuando a reabsorção óssea decorrente do desuso."
  },
  {
    id: "q_sem10_15",
    category: "s10_topicos",
    question: "A Fisioterapia preventiva na oncologia pediátrica atua de forma a:",
    options: [
      "Proibir qualquer tipo de mobilização ativa da criança com câncer.",
      "Preservar a força muscular, amplitude de movimento articular e marcos do desenvolvimento motor típicos da infância durante o tratamento oncológico (quimio/radioterapia).",
      "Acelerar o metabolismo do tumor primário de forma direta.",
      "Substituir o tratamento médico oncológico."
    ],
    correctIndex: 1,
    rationale: "O tratamento do câncer infantil induz efeitos adversos como fraqueza e neuropatias. A fisioterapia lúdica preventiva mantém a integridade física e funcional da criança."
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
const SUBJECT_PRETTY_NAMES = {
  "Anatomia": "Anatomia Humana",
  "Cinesiologia": "Cinesiologia & Biomecânica",
  "Avaliação": "Avaliação Cinésio-Funcional",
  "Fisiologia": "Fisiologia Geral",
  "Neurologia": "Fisioterapia Neurofuncional Geral",
  "Cardiovascular": "Fisioterapia Cardiovascular Geral",
  "Casos Clínicos": "Casos Clínicos Integrados",
  "Eletroterapia": "Eletroterapia Geral",
  "Pediatria": "Fisioterapia Pediátrica Geral",
  "Especialidades": "Especialidades Clínicas Gerais",
  "s1_perspectivas": "1º Sem - Perspectivas Profissionais",
  "s1_biosseguranca": "1º Sem - Biossegurança em Serviços de Saúde",
  "s1_saude_coletiva": "1º Sem - Formação Integral em Saúde (Saúde Coletiva)",
  "s1_epidemiologia": "1º Sem - Epidemiologia e Bioestatística",
  "s1_exp_prof": "1º Sem - Experiência Profissional: Carreira e Sucesso",
  "s2_prod_conhecimento": "2º Sem - Produção do Conhecimento e Tec. Emergentes",
  "s2_bioquimica": "2º Sem - Bioquímica Básica e Metabolismo",
  "s2_anatomofisio_1": "2º Sem - Anatomofisiologia (Tegumentar, Locomotor e Nervoso)",
  "s2_anatomofisio_2": "2º Sem - Anatomofisiologia (Digestório, Endócrino, Urinário e Reprodutor)",
  "s2_exp_prof": "2º Sem - Experiência Profissional: Desafios Contemporâneos",
  "s3_empreendedorismo": "3º Sem - Empreendedorismo Criativo",
  "s3_movimento": "3º Sem - Movimento Funcional Humano",
  "s3_fundamentos_etica": "3º Sem - Fundamentos e Ética profissional",
  "s3_fisiopatologia": "3º Sem - Fisiopatologia Geral",
  "s3_exp_prof": "3º Sem - Experiência Profissional: Saúde Coletiva",
  "s4_farmaco": "4º Sem - Farmacologia e Toxicologia",
  "s4_cinesio": "4º Sem - Cinesioterapia",
  "s4_eletro": "4º Sem - Eletrotermofototerapia",
  "s4_avaliacao": "4º Sem - Avaliação Físico-Funcional e Imaginologia",
  "s4_estudo_contemp": "4º Sem - Estudo Contemporâneo: Indústria e Transf. Digital",
  "s4_exp_prof": "4º Sem - Experiência Profissional: Práticas Integrativas",
  "s5_recursos_manuais": "5º Sem - Recursos Terapêuticos Manuais",
  "s5_fisiologia_ex": "5º Sem - Fisiologia do Exercício e Avaliação Cardio",
  "s5_aquatica": "5º Sem - Fisioterapia Aquática",
  "s5_idoso": "5º Sem - Fisioterapia na Saúde do Idoso",
  "s5_estudo_contemp": "5º Sem - Estudo Contemporâneo: Propriedade Intelectual",
  "s5_exp_prof": "5º Sem - Experiência Profissional: Rec. Eletrofisioterapêuticos",
  "s6_traumato": "6º Sem - Fisioterapia Traumato-Ortopédica",
  "s6_neuro": "6º Sem - Fisioterapia Neurofuncional",
  "s6_crianca": "6º Sem - Fisioterapia na Saúde da Criança",
  "s6_mulher": "6º Sem - Fisioterapia na Saúde da Mutilhar",
  "s6_estudo_contemp": "6º Sem - Estudo Contemporâneo: Relações Étnico-Raciais, Cult. e DH",
  "s6_exp_prof": "6º Sem - Experiência Profissional: Novas Tec. em Fisioterapia",
  "s7_protese": "7º Sem - Prótese e Órtese",
  "s7_respiratoria": "7º Sem - Fisioterapia Respiratória e Intensivismo",
  "s7_estudo_contemp": "7º Sem - Estudo Contemporâneo: Autonomia, Relação de Consumo e Sustentabilidade",
  "s7_exp_prof": "7º Sem - Experiência Profissional: Fisioterapia em Reumatologia",
  "s8_dermatofunc": "8º Sem - Fisioterapia Dermatofuncional",
  "s9_cardio": "9º Sem - Fisioterapia Cardiovascular",
  "s10_trabalhador": "10º Sem - Fisioterapia na Saúde do Trabalhador",
  "s10_evidencias": "10º Sem - Fisioterapia Baseada em Evidências",
  "s10_topicos": "10º Sem - Tópicos Especiais em Fisioterapia"
};

window.FisioData = {
  DEFAULT_CURRICULUM,
  DEFAULT_FLASHCARDS,
  REFERENCE_DATA,
  QUIZ_QUESTIONS,
  STUDY_MATERIALS,
  SUBJECT_PRETTY_NAMES
};
