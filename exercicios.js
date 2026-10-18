window.bancoDeExercicios = [
  // ==========================================
  // NÍVEL BÁSICO (10 Exercícios)
  // ==========================================
  {
    id: "basico-01",
    titulo: "Ureia: Pico Isolado no Controle",
    dificuldade: "Básico",
    cenario: "O controle do Nível 1 do analito Ureia vinha com resultados estáveis. Hoje, o resultado do Nível 1 disparou para +3.4 SD, enquanto o Nível 2 passou perfeitamente na mesma corrida.",
    grafico: {
      analito: "Ureia", unidade: "mg/dL",
      niveis: [
        { nome: "Nível 1", alvo: 30, sd: 1.5, resultados: [30.5, 29.8, 31.0, 30.2, 29.5, 30.1, 35.1] },
        { nome: "Nível 2", alvo: 80, sd: 3.0, resultados: [81.0, 79.5, 80.2, 81.5, 78.9, 80.0, 79.8] }
      ]
    },
    pergunta: "Qual regra foi violada e qual a causa mais provável?",
    alternativas: [
      { id: "a", texto: "1₃s (Erro Aleatório). Investigar bolha na pipetagem ou coágulo." },
      { id: "b", texto: "1₃s (Erro Sistemático). Recalibrar o equipamento." },
      { id: "c", texto: "Nenhuma regra violada, liberar a rotina." }
    ],
    respostaCorreta: "a",
    justificativa: "A regra 1₃s aponta um pico além de 3 desvios padrão. Por ser um pico isolado num único nível, indica Erro Aleatório (bolha, coágulo, falha de pipetagem isolada)."
  },
  {
    id: "basico-02",
    titulo: "Conceito de Erro Sistemático",
    dificuldade: "Básico",
    cenario: "O erro em laboratório pode ser classificado em duas grandes categorias: Sistemático e Aleatório.",
    pergunta: "Qual das alternativas abaixo descreve melhor a característica de um Erro Sistemático?",
    alternativas: [
      { id: "a", texto: "Acontece de forma imprevisível e afeta amostras isoladas na corrida analítica." },
      { id: "b", texto: "Causa um deslocamento contínuo ou tendência na média dos resultados, afetando todas as amostras de forma semelhante." },
      { id: "c", texto: "É causado exclusivamente por bolhas nas seringas de aspiração." }
    ],
    respostaCorreta: "b",
    justificativa: "O Erro Sistemático desloca a média do processo. Ele afeta os controles e as amostras dos pacientes na mesma direção e magnitude, gerando viés. Exemplos: degradação de reagente, falha de calibração."
  },
  {
    id: "basico-03",
    titulo: "A Regra 1₂s",
    dificuldade: "Básico",
    cenario: "O laboratório adota as regras de Westgard clássicas. Hoje o controle de Glicose obteve um Z-Score de +2.2 SD. Nenhuma outra regra foi violada.",
    pergunta: "Qual a conduta correta perante a regra 1₂s isolada?",
    alternativas: [
      { id: "a", texto: "Rejeitar a corrida imediatamente e recalibrar." },
      { id: "b", texto: "É apenas um Alerta (Warning). Deve-se avaliar as outras regras; se ok, a corrida é aceita." },
      { id: "c", texto: "Repetir o controle três vezes até que o valor caia abaixo de 2 SD." }
    ],
    respostaCorreta: "b",
    justificativa: "A regra 1₂s é um gatilho de alerta. Estatisticamente, ~4.5% dos resultados perfeitamente normais cairão entre 2 e 3 SD. Se não houver violação de 1₃s, 2₂s ou R₄s, o alerta não bloqueia a rotina."
  },
  {
    id: "basico-04",
    titulo: "TSH: Desvio Contínuo (2₂s)",
    dificuldade: "Básico",
    cenario: "Na Imunologia, o TSH apresentou +2.1 SD ontem e +2.3 SD hoje.",
    pergunta: "Qual a regra violada e a conduta apropriada?",
    alternativas: [
      { id: "a", texto: "Regra 2₂s violada (Rejeição). Suspender rotina e investigar calibração." },
      { id: "b", texto: "Regra R₄s violada (Rejeição). Trocar a lâmpada do equipamento." },
      { id: "c", texto: "Nenhuma regra violada, pois não atingiu 3 SD." }
    ],
    respostaCorreta: "a",
    justificativa: "Dois resultados seguidos do mesmo lado da média e acima de 2 SD violam a regra 2₂s (Erro Sistemático). Rejeita-se a corrida para corrigir o problema."
  },
  {
    id: "basico-05",
    titulo: "Conceito de Coeficiente de Variação (CV%)",
    dificuldade: "Básico",
    cenario: "Ao analisar a bula de um controle, o biomédico observa o termo CV%.",
    pergunta: "O que o Coeficiente de Variação (CV) representa no CQ?",
    alternativas: [
      { id: "a", texto: "A exatidão do teste em relação ao padrão-ouro." },
      { id: "b", texto: "O viés (bias) do equipamento." },
      { id: "c", texto: "A imprecisão do método (erro aleatório), sendo o Desvio Padrão expresso como porcentagem da Média." }
    ],
    respostaCorreta: "c",
    justificativa: "O CV% é a medida clássica de Imprecisão. Ele normaliza o Desvio Padrão em relação à média, permitindo comparar a estabilidade de métodos que trabalham com unidades e escalas diferentes."
  },
  {
    id: "basico-06",
    titulo: "Gráfico de Levey-Jennings",
    dificuldade: "Básico",
    cenario: "O gráfico de Levey-Jennings é a principal ferramenta visual do laboratório.",
    pergunta: "O que representam as linhas horizontais principais neste gráfico?",
    alternativas: [
      { id: "a", texto: "A Média (centro) e os limites de Desvio Padrão (±1, ±2, ±3 SD)." },
      { id: "b", texto: "O número de pacientes processados no dia." },
      { id: "c", texto: "Apenas o limite de validade do reagente." }
    ],
    respostaCorreta: "a",
    justificativa: "As linhas horizontais estabelecem o Alvo (Média) e os intervalos de confiança baseados no Desvio Padrão. Isso permite visualizar rapidamente o desempenho ao longo do tempo."
  },
  {
    id: "basico-07",
    titulo: "Sódio: Discrepância na Corrida",
    dificuldade: "Básico",
    cenario: "Na mesma corrida de Sódio, Nível 1 deu +2.3 SD e Nível 2 deu -2.1 SD.",
    pergunta: "Qual regra avalia essa diferença brusca dentro da mesma corrida?",
    alternativas: [
      { id: "a", texto: "Regra 10_x." },
      { id: "b", texto: "Regra R₄s." },
      { id: "c", texto: "Regra 4₁s." }
    ],
    respostaCorreta: "b",
    justificativa: "A regra R₄s (Range de 4 SD) ocorre quando a amplitude entre dois pontos na mesma corrida excede 4 SD. É clássica de Erro Aleatório marcante."
  },
  {
    id: "basico-08",
    titulo: "Identificação de Viés",
    dificuldade: "Básico",
    cenario: "Viés (Bias) é uma medida importante de erro laboratorial.",
    pergunta: "Como o Viés é definido na prática?",
    alternativas: [
      { id: "a", texto: "A diferença entre a média dos resultados obtidos no laboratório e o valor alvo/verdadeiro esperado." },
      { id: "b", texto: "O tamanho do coágulo na amostra." },
      { id: "c", texto: "A variação entre duas corridas no mesmo dia." }
    ],
    respostaCorreta: "a",
    justificativa: "Viés mede a Inexatidão. É o quanto a média do seu laboratório está deslocada do valor considerado verdadeiro (fornecido pelo fabricante ou por ensaio de proficiência)."
  },
  {
    id: "basico-09",
    titulo: "Cálcio: Regra 4₁s",
    dificuldade: "Básico",
    cenario: "Quatro dias consecutivos de Cálcio: -1.2, -1.9, -1.1 e -1.7 SD.",
    pergunta: "O que a violação da regra 4₁s indica?",
    alternativas: [
      { id: "a", texto: "Indica erro aleatório. Exige troca de equipamento." },
      { id: "b", texto: "Indica Erro Sistemático leve a moderado. Exige calibração/manutenção." },
      { id: "c", texto: "Não significa nada, pois nenhum passou de 2 SD." }
    ],
    respostaCorreta: "b",
    justificativa: "Quatro resultados seguidos no mesmo lado além de 1 SD violam a regra 4₁s. Funciona como um alerta precoce e sensível para viés (erro sistemático)."
  },
  {
    id: "basico-10",
    titulo: "Reconstituição do Controle",
    dificuldade: "Básico",
    cenario: "Um novo frasco de controle liofilizado foi reconstituído com água destilada, mas o analista não usou a pipeta volumétrica correta.",
    pergunta: "Como isso afetará o gráfico de CQ?",
    alternativas: [
      { id: "a", texto: "Não afetará, pois a água evapora." },
      { id: "b", texto: "Pode gerar um falso Erro Sistemático (Shift) em todos os analitos desse frasco." },
      { id: "c", texto: "Causará apenas uma regra 1₂s isolada." }
    ],
    respostaCorreta: "b",
    justificativa: "Erro na reconstituição (volume de água incorreto) altera a concentração final de todos os analitos no frasco. Isso gerará um deslocamento (Shift) aparente nos gráficos até que o frasco acabe."
  },

  // ==========================================
  // NÍVEL INTERMEDIÁRIO (10 Exercícios)
  // ==========================================
  {
    id: "inter-01",
    titulo: "Colesterol: Planejamento (Métrica Sigma)",
    dificuldade: "Intermediário",
    cenario: "Colesterol. TEa = 10%. CV laboratorial = 1.2%. Viés = 1.0%.",
    pergunta: "Com base no Sigma calculado, qual a abordagem recomendada?",
    alternativas: [
      { id: "a", texto: "Sigma 8.3. Aplicar todas as multiregras (10_x, 4_1s, 2_2s)." },
      { id: "b", texto: "Sigma 7.5. Processo classe mundial. Simplificar usando apenas a regra 1₃s." },
      { id: "c", texto: "Sigma 2.0. Aumentar frequência de CQ." }
    ],
    respostaCorreta: "b",
    justificativa: "Sigma = (TEa - |Viés|) / CV -> (10 - 1) / 1.2 = 7.5. Processos com Sigma > 6 são extremamente robustos. Aplicar regras rigorosas só geraria falsas rejeições."
  },
  {
    id: "inter-02",
    titulo: "AST: O Efeito de Degradação (Tendência)",
    dificuldade: "Intermediário",
    cenario: "Resultados da enzima AST subiram sucessivamente por 7 dias seguidos, sem ultrapassar +2 SD ainda.",
    pergunta: "O padrão visual observado (Trend) indica o quê?",
    alternativas: [
      { id: "a", texto: "Deslocamento (Shift) por troca de lote." },
      { id: "b", texto: "Tendência (Trend) por degradação progressiva de reagente ou desgaste de lâmpada." },
      { id: "c", texto: "Ruído analítico normal. Nenhuma ação necessária." }
    ],
    respostaCorreta: "b",
    justificativa: "Resultados subindo progressivamente configuram uma Tendência (Trend/Regra 7T). Aponta degradação gradual de reagente, calibrador ou peças físicas."
  },
  {
    id: "inter-03",
    titulo: "Hemoglobina: A Troca de Lote (Shift)",
    dificuldade: "Intermediário",
    cenario: "Após trocar o lote do reagente, todos os 10 resultados seguidos ficaram positivos (+0.5 a +1.5 SD).",
    pergunta: "Esse deslocamento abrupto aciona qual regra multivariada?",
    alternativas: [
      { id: "a", texto: "Regra R₄s." },
      { id: "b", texto: "Regra 10_x, indicando deslocamento sistemático da média (Shift)." },
      { id: "c", texto: "Falsa Rejeição, ignorar." }
    ],
    respostaCorreta: "b",
    justificativa: "A troca de lote sem a devida compensação gerou um novo 'zero' para o teste. A regra 10_x capta perfeitamente essa mudança permanente (Shift)."
  },
  {
    id: "inter-04",
    titulo: "Z-Score vs SD",
    dificuldade: "Intermediário",
    cenario: "Para visualizar três níveis de controle em um único gráfico harmonioso, o QualiLab converte resultados para Z-Score.",
    pergunta: "Qual é a fórmula do Z-Score?",
    alternativas: [
      { id: "a", texto: "(Média Obtida / Desvio Padrão) * 100" },
      { id: "b", texto: "(Resultado Obtido - Alvo) / Desvio Padrão" },
      { id: "c", texto: "Viés + Erro Aleatório" }
    ],
    respostaCorreta: "b",
    justificativa: "Z-Score = (Valor - Média) / DP. Ele mostra exatamente a quantos Desvios Padrão o resultado está do Alvo, permitindo plotar exames com unidades diferentes na mesma escala (-3 a +3)."
  },
  {
    id: "inter-05",
    titulo: "10_x como Alerta ou Rejeição?",
    dificuldade: "Intermediário",
    cenario: "A literatura moderna (CLSI C24) afirma que o laboratório não é obrigado a usar regras longas (como 10_x) como critério estrito de rejeição.",
    pergunta: "Se a regra 10_x for configurada como ALERTA no POP, o que o analista deve fazer ao ser acionada?",
    alternativas: [
      { id: "a", texto: "Bloquear a rotina e rejeitar todas as amostras retroativamente." },
      { id: "b", texto: "Investigar tendência, registrar ocorrência e planejar calibração futura, liberando a corrida atual com cautela." },
      { id: "c", texto: "Aumentar o limite de SD para a regra não apitar mais." }
    ],
    respostaCorreta: "b",
    justificativa: "Se definida como alerta baseada no risco (Sigma alto), ela não bloqueia rotina imediata. Serve para iniciar investigação proativa e evitar problemas antes que o erro exceda o TEa."
  },
  {
    id: "inter-06",
    titulo: "Ação Preventiva vs Corretiva",
    dificuldade: "Intermediário",
    cenario: "A regra 4₁s foi violada. O analista limpou as agulhas do equipamento, recalibrou e o controle passou.",
    pergunta: "Neste contexto, limpar e recalibrar representa qual tipo de ação?",
    alternativas: [
      { id: "a", texto: "Ação Corretiva (resolveu a causa raiz de um desvio ocorrido)." },
      { id: "b", texto: "Ação Preventiva." },
      { id: "c", texto: "Ação de Retenção." }
    ],
    respostaCorreta: "a",
    justificativa: "Como o erro já havia ocorrido e violado a regra (saindo do controle estabelecido), a ação tomada para reestabelecer o funcionamento normal é uma Ação Corretiva."
  },
  {
    id: "inter-07",
    titulo: "Regra 8_x ou 10_x?",
    dificuldade: "Intermediário",
    cenario: "Em laboratórios menores, que passam controle apenas 1x ao dia (N1 e N2 juntos), demoraria muito para acumular 10 corridas do mesmo lado.",
    pergunta: "Como as multiregras são aplicadas entre níveis (across materials)?",
    alternativas: [
      { id: "a", texto: "As regras de tendência não podem cruzar níveis." },
      { id: "b", texto: "Pode-se somar os pontos. Se N1 e N2 ficarem no mesmo lado por 5 dias seguidos, aciona-se a regra 10_x." },
      { id: "c", texto: "Avalia-se apenas o nível de decisão clínica." }
    ],
    respostaCorreta: "b",
    justificativa: "Para aumentar a detecção em corridas curtas, aplica-se a regra 'Across Materials'. Se ambos os níveis estão com viés positivo há 5 dias (totalizando 10 pontos), a regra 10_x dispara mais rápido."
  },
  {
    id: "inter-08",
    titulo: "Erro Total Calculado",
    dificuldade: "Intermediário",
    cenario: "O laboratório precisa validar que seu método não excede o Erro Total Permitido (TEa).",
    pergunta: "Qual é a equação clássica para o cálculo do Erro Total do laboratório?",
    alternativas: [
      { id: "a", texto: "ET = (CV% * 1.65) + Viés%" },
      { id: "b", texto: "ET = TEa / CV%" },
      { id: "c", texto: "ET = Sigma + Z-Score" }
    ],
    respostaCorreta: "a",
    justificativa: "ET = (Z * CV%) + Viés. Usa-se o Z-value de 1.65 (para 95% de confiança de erro em uma direção). É a soma da Imprecisão (Erro Aleatório) com a Inexatidão (Erro Sistemático)."
  },
  {
    id: "inter-09",
    titulo: "Interpretação de Gráficos Cruzados",
    dificuldade: "Intermediário",
    cenario: "Nível 1 de glicose viola 1₃s positivo (+3.1 DP). Nível 2 na mesma corrida dá -0.2 DP. O lote dos frascos é diferente.",
    pergunta: "Qual suspeita inicial é menos provável?",
    alternativas: [
      { id: "a", texto: "Falha de estabilidade do frasco de Nível 1." },
      { id: "b", texto: "Bolha na agulha durante pipetagem do Nível 1." },
      { id: "c", texto: "Curva de calibração degradada para todas as amostras." }
    ],
    respostaCorreta: "c",
    justificativa: "Uma curva degradada seria um Erro Sistemático e deveria afetar ambos os níveis. Como o N2 passou perfeitamente, o problema é restrito à pipetagem daquele material (N1) ou ao frasco em si."
  },
  {
    id: "inter-10",
    titulo: "Validade do Material",
    dificuldade: "Intermediário",
    cenario: "O controle de rotina foi aberto há 10 dias. A bula diz que a estabilidade on-board (aberto na máquina) é de 7 dias. A regra 2₂s falhou (pontos caindo).",
    pergunta: "Qual o procedimento imediato antes de calibrar o sistema?",
    alternativas: [
      { id: "a", texto: "Recalibrar a máquina para ajustar aos novos valores." },
      { id: "b", texto: "Reconstituir/abrir um controle novo, dentro da validade, e repassar. O viés pode ser apenas degradação do controle velho." },
      { id: "c", texto: "Mudar o alvo médio nas configurações." }
    ],
    respostaCorreta: "b",
    justificativa: "A primeira etapa do troubleshooting é garantir o material de controle. Se ele venceu, ele degrada. Recalibrar o equipamento usando um material degradado como referência seria desastroso."
  },

  // ==========================================
  // NÍVEL AVANÇADO (10 Exercícios)
  // ==========================================
  {
    id: "avan-01",
    titulo: "Potássio: Desempenho Crítico e Risco",
    dificuldade: "Avançado",
    cenario: "Potássio com TEa estreito. Sigma calculado = 2.8.",
    pergunta: "Para um processo com Sigma 2.8 (Marginal), qual a estratégia baseada em risco?",
    alternativas: [
      { id: "a", texto: "Adotar limites mais elásticos para evitar retenções." },
      { id: "b", texto: "Ativar multiregras rigorosas (2₂s, 4₁s, 8ₓ) e diminuir o tamanho da corrida (ex: controle a cada 50 testes)." },
      { id: "c", texto: "Aplicar apenas 1₃s e passar controle 1x ao dia." }
    ],
    respostaCorreta: "b",
    justificativa: "Um Sigma < 3 é muito instável. A chance de liberar resultados com erro clinicamente significativo é alta. Exige máximo rigor nas regras e aumento da frequência do CQ para detectar falhas rápido."
  },
  {
    id: "avan-02",
    titulo: "Cultura de Qualidade: Testar até Passar",
    dificuldade: "Avançado",
    cenario: "Após violar a 1₃s, o analista repetiu a passagem do mesmo frasco no mesmo tubo. Desta vez deu normal e a rotina foi liberada.",
    pergunta: "Qual a avaliação desta conduta?",
    alternativas: [
      { id: "a", texto: "Correta. A repetição validou o ensaio." },
      { id: "b", texto: "Inadequada. Repetir sem investigar mascara o erro intermitente e destrói o poder estatístico do CQ." },
      { id: "c", texto: "Correta, 5% dos testes falham naturalmente." }
    ],
    respostaCorreta: "b",
    justificativa: "Praticar o 'testing into compliance' (repetir até passar) mascara a falha sem corrigi-la. O erro aleatório que causou o 1₃s pode continuar ocorrendo nas amostras de pacientes seguintes."
  },
  {
    id: "avan-03",
    titulo: "Falsa Rejeição vs Detecção de Erros",
    dificuldade: "Avançado",
    cenario: "Laboratórios buscam alto Poder de Detecção de Erros (Ped), mas querem manter a Falsa Rejeição (Pfr) perto de zero.",
    pergunta: "Por que não é recomendado aplicar regras como 4₁s e 10_x em um exame com Sigma 6+?",
    alternativas: [
      { id: "a", texto: "Porque aumenta drasticamente as Falsas Rejeições (Pfr) sem agregar ganho prático na Detecção de Erros (Ped)." },
      { id: "b", texto: "Porque laboratórios grandes não têm tempo para cálculos." },
      { id: "c", texto: "Porque o Sigma 6 exige apenas a regra 10_x." }
    ],
    respostaCorreta: "a",
    justificativa: "No Sigma 6+, a curva de distribuição é tão fina dentro do limite de erro que as regras 4₁s ou 10_x vão apitar pequenas oscilações irrelevantes (falsas rejeições), gerando perda de tempo e reagentes."
  },
  {
    id: "avan-04",
    titulo: "Avaliação Externa e Viés",
    dificuldade: "Avançado",
    cenario: "O laboratório tem controle interno ótimo (CV = 1.0%), gráficos bonitos e nenhuma regra de Westgard violada. Porém, o ensaio de Proficiência (PNCQ/Controllab) deu inaceitável.",
    pergunta: "Como essa contradição se explica?",
    alternativas: [
      { id: "a", texto: "O laboratório tem altíssima precisão (CV baixo), mas altíssima inexatidão (Viés grande). O equipamento está super estável, porém calibrado longe do alvo real." },
      { id: "b", texto: "O PNCQ errou o preparo da amostra, o CIQ é soberano." },
      { id: "c", texto: "O CV de 1.0% é muito alto para métodos laboratoriais modernos." }
    ],
    respostaCorreta: "a",
    justificativa: "Controle Interno monitora Precisão (Erros Aleatórios e tendências da própria base). Avaliação Externa monitora Exatidão (Bias). Um erro na atribuição do valor do calibrador mantém a precisão interna intacta, mas o resultado final é falso."
  },
  {
    id: "avan-05",
    titulo: "Uso da Regra 3₁s?",
    dificuldade: "Avançado",
    cenario: "Alguns sistemas LIMS europeus permitem a ativação da regra 3₁s (3 resultados consecutivos acima de 1 DP).",
    pergunta: "Qual a relevância desta regra frente ao conjunto Westgard clássico?",
    alternativas: [
      { id: "a", texto: "Substitui a regra 2₂s com maior eficácia." },
      { id: "b", texto: "É uma variação analítica usada para detecção ultra-precoce de shift em exames de altíssimo risco (ex: Troponina sensível), complementando a 4₁s." },
      { id: "c", texto: "Foi abolida pela ISO 15189." }
    ],
    respostaCorreta: "b",
    justificativa: "Regras não clássicas como 3₁s ou 6_x são adaptações. Servem para exames onde esperar 4 corridas (4₁s) demoraria muito. Em exames de ponta (Troponina), 3 resultados levemente desviados já acionam bloqueio preventivo."
  },
  {
    id: "avan-06",
    titulo: "Avaliação do Risco do Paciente",
    dificuldade: "Avançado",
    cenario: "A diretriz EP23-A foca em Controle de Qualidade Baseado em Gerenciamento de Risco (IQCP).",
    pergunta: "Neste modelo, quais são os três componentes da tríade de Risco?",
    alternativas: [
      { id: "a", texto: "Probabilidade, Severidade e Detectabilidade do Dano." },
      { id: "b", texto: "CV, Bias e TEa." },
      { id: "c", texto: "Tempo de Máquina, Custo e Mão-de-Obra." }
    ],
    respostaCorreta: "a",
    justificativa: "A matriz de risco moderno não olha só estatística (Sigma). Avalia: qual a chance do equipamento errar (Probabilidade), quão grave é liberar o erro para o médico (Severidade) e nossa chance de pegar o erro antes da liberação (Detectabilidade)."
  },
  {
    id: "avan-07",
    titulo: "Definição do Alvo (Target)",
    dificuldade: "Avançado",
    cenario: "Mudar para um novo lote de Controle Liofilizado. A bula traz uma média (ex: 100).",
    pergunta: "Como o laboratório deve definir o Alvo (Média) real no software QualiLab?",
    alternativas: [
      { id: "a", texto: "Digitar exatamente a média da bula e nunca mudar." },
      { id: "b", texto: "Passar o controle 20 vezes, calcular a Média própria do laboratório, validá-la em relação à bula e usar o valor interno como Alvo." },
      { id: "c", texto: "Usar a média do mês passado." }
    ],
    respostaCorreta: "b",
    justificativa: "A bula reflete médias interlaboratoriais de várias máquinas. O CIQ mede a estabilidade DO SEU laboratório. Você deve estabelecer seu próprio alvo e DP histórico (geralmente com n=20 dias), observando se seu alvo interno tem um Bias aceitável frente à bula."
  },
  {
    id: "avan-08",
    titulo: "Cálculo da Média Ponderada",
    dificuldade: "Avançado",
    cenario: "Ao final do mês, é necessário consolidar a média do CIQ com os dados do mês anterior para refinar o SD.",
    pergunta: "Por que uma Média Acumulada (Cumulative Mean) deve ser ponderada e não uma simples média aritmética entre meses?",
    alternativas: [
      { id: "a", texto: "Para dar peso correto com base no número de pontos (n) processados em cada mês (ex: Janeiro n=30, Fevereiro n=20)." },
      { id: "b", texto: "Para garantir que o equipamento entenda a calibração." },
      { id: "c", texto: "Para diminuir o TEa." }
    ],
    respostaCorreta: "a",
    justificativa: "Na estatística mensal laboratorial (ex: no envio ao Programa Interlaboratorial), os meses têm tamanhos variados e dias parados. A média e SD acumulados devem considerar a matriz variância-covariância e o 'n' de cada lote."
  },
  {
    id: "avan-09",
    titulo: "Regra 9_x ou 10_x?",
    dificuldade: "Avançado",
    cenario: "Laboratórios mais antigos usavam a regra 9_x. O protocolo atual prefere a 10_x, e outros usam 12_x.",
    pergunta: "A escolha entre essas variações impacta no quê?",
    alternativas: [
      { id: "a", texto: "Apenas estético. Significam a mesma coisa." },
      { id: "b", texto: "Balanço entre Sensibilidade (Detecção rápida) e Especificidade (Falsas Rejeições). Quanto menor o N (ex: 8_x), mais sensível ao Shift, porém com mais falsos alertas." },
      { id: "c", texto: "Depende da marca do equipamento exclusivamente." }
    ],
    respostaCorreta: "b",
    justificativa: "A escolha estatística molda a Curva de Poder (Power Function Graph). Reduzir de 10_x para 8_x capta deslocamentos 2 dias mais cedo, mas aumenta muito o risco de parar a máquina por oscilação natural."
  },
  {
    id: "avan-10",
    titulo: "Ação Frente à Viés e Recuperação de Controle",
    dificuldade: "Avançado",
    cenario: "O equipamento falhou em R₄s e 1₃s simultaneamente. A manutenção revelou a agulha de amostra torta. Foi trocada. A calibração refeita.",
    pergunta: "O que deve ser feito com as amostras de pacientes testadas ANTES da detecção da falha (corrida retrospectiva)?",
    alternativas: [
      { id: "a", texto: "Nada. Só se deve corrigir daqui para frente." },
      { id: "b", texto: "Devem ser reavaliadas e repetidas (Retest) até o momento do último controle válido documentado, pois a agulha pode ter entortado antes." },
      { id: "c", texto: "Refazer apenas se os médicos reclamarem do resultado." }
    ],
    respostaCorreta: "b",
    justificativa: "Um erro mecânico/aleatório desse porte (R₄s e 1₃s com avaria física) invalida toda a corrida clínica desde o último momento onde o sistema estava provadamente sob controle. A norma exige o 'Lookback' (Avaliação Retrospectiva)."
  }
];
