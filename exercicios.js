window.bancoDeExercicios = [
  {
    id: "ex-001",
    titulo: "Ureia: Pico Isolado no Controle",
    dificuldade: "Básico",
    cenario: "O controle do Nível 1 do analito Ureia vinha com resultados estáveis. Hoje, o resultado do Nível 1 disparou, enquanto o Nível 2 passou perfeitamente na mesma corrida.",
    grafico: {
      analito: "Ureia", unidade: "mg/dL",
      niveis: [
        { nome: "Nível 1", alvo: 30, sd: 1.5, resultados: [30.5, 29.8, 31.0, 30.2, 29.5, 30.1, 35.1] },
        { nome: "Nível 2", alvo: 80, sd: 3.0, resultados: [81.0, 79.5, 80.2, 81.5, 78.9, 80.0, 79.8] }
      ]
    },
    pergunta: "Qual regra foi violada e qual a causa mais provável?",
    alternativas: [
      { id: "a", texto: "1₃s (Erro Aleatório). Investigar bolha na pipetagem ou coágulo.", comentario: "Correto. O valor 35.1 está a +3.4 SD. Como o Nível 2 está normal, é um erro pontual/aleatório." },
      { id: "b", texto: "1₃s (Erro Sistemático). Recalibrar o equipamento.", comentario: "Erro sistemático geralmente afeta os dois níveis simultaneamente." },
      { id: "c", texto: "Nenhuma regra violada, liberar a rotina." }
    ],
    respostaCorreta: "a",
    justificativa: "O Nível 1 obteve 35.1 mg/dL, o que representa +3.4 SD, violando a regra de rejeição 1₃s. Por ser um pico isolado num único nível (enquanto o N2 está normal), indica Erro Aleatório, como bolha na seringa, problema na homogeneização ou falha pontual de pipetagem."
  },
  {
    id: "ex-002",
    titulo: "TSH: Desvio Contínuo",
    dificuldade: "Básico",
    cenario: "Na bancada de Imunologia, o controle de TSH Nível 1 apresentou desvios nos últimos dois dias. O Nível 2 também está mostrando leve tendência de alta.",
    grafico: {
      analito: "TSH", unidade: "µUI/mL",
      niveis: [
        { nome: "Nível 1", alvo: 1.5, sd: 0.1, resultados: [1.48, 1.51, 1.55, 1.49, 1.62, 1.71, 1.73] }
      ]
    },
    pergunta: "Considerando os dias 6 e 7, qual a conduta apropriada?",
    alternativas: [
      { id: "a", texto: "Liberar os pacientes, pois não chegou a 3 SD." },
      { id: "b", texto: "Rejeitar a corrida pela regra 2₂s. Sugere erro sistemático.", comentario: "Exato. Dias 6 (+2.1 SD) e 7 (+2.3 SD) violam a regra." },
      { id: "c", texto: "Rejeitar a corrida pela regra R₄s." }
    ],
    respostaCorreta: "b",
    justificativa: "Os resultados do Dia 6 (1.71 = +2.1 SD) e do Dia 7 (1.73 = +2.3 SD) estão ambos acima de +2 SD e do mesmo lado da média. Isso configura violação da regra 2₂s (Rejeição por Erro Sistemático). A rotina deve ser suspensa e a calibração verificada."
  },
  {
    id: "ex-003",
    titulo: "Colesterol: Planejamento de Qualidade",
    dificuldade: "Intermediário",
    cenario: "O laboratório validou um novo kit para Colesterol. O Erro Total Permitido (TEa) é de 10%. O CV do laboratório é 1.2% e o Viés é 1.0%.",
    pergunta: "Com base na Métrica Sigma calculada, qual a abordagem recomendada?",
    alternativas: [
      { id: "a", texto: "Sigma 8.3. Aplicar todas as multiregras (10_x, 4_1s, 2_2s) para garantir a segurança." },
      { id: "b", texto: "Sigma 7.5. Processo classe mundial. Simplificar o CQ usando apenas a regra 1₃s.", comentario: "Correto. Excesso de regras num processo com Sigma 7.5 só gera falsas rejeições." },
      { id: "c", texto: "Sigma 2.0. Aumentar imediatamente a frequência de passagem de controle." }
    ],
    respostaCorreta: "b",
    justificativa: "Fórmula: Sigma = (TEa - |Viés|) / CV. Portanto: (10 - 1) / 1.2 = 7.5. Processos com Sigma > 6 são extremamente robustos. Aplicar regras sensíveis como 10_x ou 4_1s neste cenário resulta em excesso de falsas rejeições."
  },
  {
    id: "ex-004",
    titulo: "Glicose: Interpretação do Alerta",
    dificuldade: "Básico",
    cenario: "O controle Nível 1 de Glicose obteve hoje um resultado de -2.4 SD. Todo o histórico da semana estava dentro de ±1 SD. O laboratório segue o padrão clássico onde a 1₂s é apenas alerta.",
    grafico: {
      analito: "Glicose", unidade: "mg/dL",
      niveis: [
        { nome: "Nível 1", alvo: 100, sd: 3.0, resultados: [99.5, 101.2, 98.8, 100.5, 99.0, 102.1, 92.8] }
      ]
    },
    pergunta: "Qual é a interpretação prática da regra 1₂s neste contexto?",
    alternativas: [
      { id: "a", texto: "Rejeitar imediatamente a rotina e recalibrar o equipamento." },
      { id: "b", texto: "Verificar as outras regras; se nenhuma outra for violada, a corrida pode ser aceita.", comentario: "Exato. A 1₂s é um gatilho de investigação." },
      { id: "c", texto: "Repetir o controle até que ele volte para dentro de 1 SD." }
    ],
    respostaCorreta: "b",
    justificativa: "A regra 1₂s funciona como um Alerta (Warning) e não um critério de rejeição isolado. Se não houver violação concomitante de 1₃s, 2₂s ou R₄s, o resultado é estatisticamente aceitável (já que 5% dos resultados normais caem naturalmente entre 2 e 3 SD)."
  },
  {
    id: "ex-005",
    titulo: "Sódio: Discrepância entre Níveis",
    dificuldade: "Intermediário",
    cenario: "Na mesma corrida analítica, o controle Nível 1 de Sódio apresentou valor elevado, enquanto o Nível 2 apresentou valor muito baixo.",
    grafico: {
      analito: "Sódio", unidade: "mEq/L",
      niveis: [
        { nome: "Nível 1", alvo: 140, sd: 1.5, resultados: [139, 141, 140, 139.5, 140.5, 140, 143.5] },
        { nome: "Nível 2", alvo: 160, sd: 2.0, resultados: [159, 161, 160, 158.5, 161.5, 159, 155.8] }
      ]
    },
    pergunta: "Qual regra falhou no Dia 7 e o que ela indica?",
    alternativas: [
      { id: "a", texto: "Regra R₄s (Erro Aleatório).", comentario: "Correto. Nível 1 está a +2.3 SD e Nível 2 a -2.1 SD. Amplitude total: 4.4 SD." },
      { id: "b", texto: "Regra 2₂s (Erro Sistemático)." },
      { id: "c", texto: "Nenhuma, a corrida é aceita pois nenhum passou de 3 SD isoladamente." }
    ],
    respostaCorreta: "a",
    justificativa: "O Nível 1 (143.5) está a +2.3 SD. O Nível 2 (155.8) está a -2.1 SD. A amplitude entre eles na mesma corrida é de 4.4 SD, violando a regra R₄s. Esta regra é sensível a Erros Aleatórios marcantes."
  },
  {
    id: "ex-006",
    titulo: "AST: O Efeito de Degradação (Tendência)",
    dificuldade: "Intermediário",
    cenario: "O laboratório observa um aumento gradual nos resultados do controle ao longo de uma semana.",
    grafico: {
      analito: "AST", unidade: "U/L",
      niveis: [
        { nome: "Nível 1", alvo: 40, sd: 2.0, resultados: [39.8, 40.5, 41.1, 41.7, 42.4, 43.1, 43.8] }
      ]
    },
    pergunta: "O padrão visual observado até o Dia 7 indica qual fenômeno?",
    alternativas: [
      { id: "a", texto: "Deslocamento (Shift). Mudança abrupta da média." },
      { id: "b", texto: "Tendência (Trend). Sugere degradação progressiva de reagente ou lâmpada.", comentario: "Correto. É uma subida contínua de 7 pontos consecutivos (7T)." },
      { id: "c", texto: "Ruído analítico normal. Não exige ação." }
    ],
    respostaCorreta: "b",
    justificativa: "Os resultados sobem progressivamente em todas as corridas, configurando uma Tendência (Trend). Mesmo sem cruzar o limite de 2 SD, 7 resultados consecutivos em uma mesma direção apontam para degradação de reagente/calibrador ou desgaste de peça do equipamento."
  },
  {
    id: "ex-007",
    titulo: "Hemoglobina: A Troca de Lote (Shift)",
    dificuldade: "Intermediário",
    cenario: "Desde o Dia 4, o laboratório trocou o lote de reagente. Após a troca, todos os resultados, embora dentro dos limites aceitáveis, passaram a ficar do lado positivo da média.",
    grafico: {
      analito: "Hemoglobina", unidade: "g/dL",
      niveis: [
        { nome: "Nível 1", alvo: 12.0, sd: 0.2, resultados: [11.9, 12.1, 12.0, 12.25, 12.3, 12.2, 12.28, 12.35, 12.25, 12.3] }
      ]
    },
    configRegras: { "10_x": "rejeicao" },
    pergunta: "No Dia 10 (7º dia após a troca), qual o padrão observado?",
    alternativas: [
      { id: "a", texto: "Erro Aleatório. Houve um pico de variação elétrica." },
      { id: "b", texto: "Falsa Rejeição. Valores abaixo de 2 SD são sempre normais." },
      { id: "c", texto: "Deslocamento Sistemático (Shift). Investigar a calibração do novo lote.", comentario: "Correto. A linha de base foi deslocada abruptamente após a troca." }
    ],
    respostaCorreta: "c",
    justificativa: "O gráfico mostra um Deslocamento (Shift) clássico. A média mudou de forma repentina e sustentada após uma intervenção (troca de lote). Se o laboratório usa a regra 10_x, ela detectará essa falha ao alcançar 10 resultados consecutivos do mesmo lado."
  },
  {
    id: "ex-008",
    titulo: "Cálcio: Múltiplas Violações Leves",
    dificuldade: "Intermediário",
    cenario: "O equipamento automatizado tem apresentado resultados consistentemente enviesados para baixo nos últimos 4 dias.",
    grafico: {
      analito: "Cálcio", unidade: "mg/dL",
      niveis: [
        { nome: "Nível 1", alvo: 9.0, sd: 0.15, resultados: [9.05, 9.0, 8.82, 8.71, 8.84, 8.75] }
      ]
    },
    pergunta: "Considerando os dias 3 a 6, qual regra foi violada?",
    alternativas: [
      { id: "a", texto: "Regra R₄s. Rejeição imediata." },
      { id: "b", texto: "Regra 4₁s. Indica erro sistemático leve.", comentario: "Correto. Quatro resultados seguidos abaixo de -1 SD." },
      { id: "c", texto: "Nenhuma. Regras de 1 SD não existem na prática." }
    ],
    respostaCorreta: "b",
    justificativa: "Do dia 3 ao dia 6, os resultados em Z-Score são: -1.2, -1.9, -1.1 e -1.7 SD. São 4 resultados consecutivos além de 1 SD no mesmo lado da média. Isso viola a regra 4₁s, que atua como um detector sensível de erro sistemático."
  },
  {
    id: "ex-009",
    titulo: "Potássio: Desempenho Crítico",
    dificuldade: "Avançado",
    cenario: "O analito Potássio possui uma qualidade necessária (TEa) muito estreita. Após avaliação da rotina, o laboratório calculou o Sigma deste exame e obteve 2.8.",
    pergunta: "Para um processo com Sigma 2.8, qual a estratégia de controle baseada em risco (Westgard)?",
    alternativas: [
      { id: "a", texto: "Adotar limites mais elásticos no equipamento para evitar rejeições frequentes." },
      { id: "b", texto: "Aplicar apenas a regra 1₃s e passar controle apenas 1x ao dia." },
      { id: "c", texto: "Ativar multiregras rigorosas (ex: 2₂s, 4₁s, 8ₓ) e aumentar a frequência de passagem de controle.", comentario: "Exato. Processos de baixo Sigma (marginais) exigem máximo rigor para não liberar erros clínicos." }
    ],
    respostaCorreta: "c",
    justificativa: "Um processo com Sigma < 3 é considerado 'marginal' ou de baixo desempenho. A estratégia baseada em evidência determina que devem ser aplicadas multiregras (para maximizar a detecção de erros) e aumentar a frequência do CQ (diminuir o tamanho da corrida) para proteger os pacientes."
  },
  {
    id: "ex-010",
    titulo: "Cultura de Qualidade: Testar até Passar",
    dificuldade: "Avançado",
    cenario: "Após violar a regra 1₃s no Nível 1 da rotina matinal, o analista não investigou a causa e simplesmente repetiu a passagem daquele mesmo frasco de controle no equipamento. Desta vez, o resultado deu normal (+0.8 SD), e a rotina foi liberada.",
    pergunta: "Qual a avaliação desta conduta?",
    alternativas: [
      { id: "a", texto: "Conduta correta. A primeira falha foi provavelmente bolha. A repetição validou o ensaio." },
      { id: "b", texto: "Conduta inadequada. Repetir sem investigar mascara o erro e destrói o poder estatístico do CQ.", comentario: "Correto. O problema que causou o 1₃s não foi corrigido e pode afetar os pacientes." },
      { id: "c", texto: "Conduta correta, pois 5% dos testes vão falhar naturalmente." }
    ],
    respostaCorreta: "b",
    justificativa: "A prática de 'testar até passar' (testing into compliance) mascara erros intermitentes. O erro aleatório que causou a falha no primeiro controle não foi identificado e pode acometer as amostras dos pacientes processadas a seguir. O controle de qualidade monitora o sistema; a falha exige investigação e ação corretiva."
  }
];
