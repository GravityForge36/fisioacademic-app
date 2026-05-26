// FisioAcademic - Módulo Principal (Estado, Roteamento e Grade Curricular)

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
  const localCurriculum = localStorage.getItem("fisio_curriculum");
  const localFlashcards = localStorage.getItem("fisio_flashcards");
  const localTasks = localStorage.getItem("fisio_tasks");
  const localShifts = localStorage.getItem("fisio_shifts");
  const localSettings = localStorage.getItem("fisio_settings");

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
    localStorage.setItem("fisio_curriculum", JSON.stringify(state.curriculum));
  } else if (key === "flashcards") {
    localStorage.setItem("fisio_flashcards", JSON.stringify(state.flashcards));
  } else if (key === "plannerTasks") {
    localStorage.setItem("fisio_tasks", JSON.stringify(state.plannerTasks));
  } else if (key === "internshipShifts") {
    localStorage.setItem("fisio_shifts", JSON.stringify(state.internshipShifts));
  } else if (key === "settings") {
    localStorage.setItem("fisio_settings", JSON.stringify(state.settings));
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
    // Encontrar qual o semestre atual do usuário
    // Semestre atual = o maior semestre que possui pelo menos uma matéria 'in_progress',
    // ou senão o maior semestre com matérias 'completed', senão 1.
    let detectedSemester = 1;
    for (let sem of state.curriculum) {
      const hasInProgress = sem.subjects.some(sub => sub.status === "in_progress");
      if (hasInProgress) {
        detectedSemester = sem.semester;
      }
    }
    
    // Se não encontrou nenhuma cursando, busca o semestre da última concluída
    if (detectedSemester === 1) {
      for (let sem of state.curriculum) {
        const hasCompleted = sem.subjects.some(sub => sub.status === "completed");
        if (hasCompleted) {
          detectedSemester = Math.min(sem.semester + 1, 10);
        }
      }
    }
    
    state.settings.currentSemester = detectedSemester;
    saveState("settings");
    sidebarSemEl.textContent = `${detectedSemester}º`;

    // Atualizar título do usuário conforme o semestre letivo
    if (sidebarUserEl) {
      let title = "Calouro de Fisioterapia";
      if (detectedSemester >= 3 && detectedSemester <= 4) {
        title = "Acadêmico de Fisioterapia";
      } else if (detectedSemester >= 5 && detectedSemester <= 6) {
        title = "Estagiário de Fisioterapia I";
      } else if (detectedSemester >= 7 && detectedSemester <= 8) {
        title = "Estagiário de Fisioterapia II";
      } else if (detectedSemester >= 9 && detectedSemester <= 10) {
        title = "Fisioterapeuta Formando";
      }
      sidebarUserEl.textContent = title;
      sidebarUserEl.setAttribute("title", title); // Dica ao passar o mouse
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
        curriculum: localStorage.getItem("fisio_curriculum"),
        flashcards: localStorage.getItem("fisio_flashcards"),
        tasks: localStorage.getItem("fisio_tasks"),
        shifts: localStorage.getItem("fisio_shifts"),
        settings: localStorage.getItem("fisio_settings"),
        quizStats: localStorage.getItem("fisio_quiz_stats")
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
            if (imported.curriculum) localStorage.setItem("fisio_curriculum", imported.curriculum);
            if (imported.flashcards) localStorage.setItem("fisio_flashcards", imported.flashcards);
            if (imported.tasks) localStorage.setItem("fisio_tasks", imported.tasks);
            if (imported.shifts) localStorage.setItem("fisio_shifts", imported.shifts);
            if (imported.settings) localStorage.setItem("fisio_settings", imported.settings);
            if (imported.quizStats) localStorage.setItem("fisio_quiz_stats", imported.quizStats);

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
  const notesInput = document.getElementById("caderno-observation-input");

  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) break;
  }

  if (!subject) return;

  titleEl.textContent = `Caderno Digital: ${subject.name}`;
  notesInput.value = subject.studyNotes || "";
  
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
  if (!currentActiveSubjectId) return;

  const notesInput = document.getElementById("caderno-observation-input");
  
  let subject = null;
  for (let sem of state.curriculum) {
    subject = sem.subjects.find(s => s.id === currentActiveSubjectId);
    if (subject) break;
  }

  if (subject) {
    subject.studyNotes = notesInput.value;
    saveState("curriculum");
    alert("Observações salvas com sucesso!");
  }
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

// 8. INICIALIZAÇÃO NO CARREGAMENTO DA PÁGINA
window.addEventListener("DOMContentLoaded", initApp);

// Exportar estado para outros módulos
window.FisioApp = {
  state,
  saveState,
  renderDashboard
};
