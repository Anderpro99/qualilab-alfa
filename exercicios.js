/* =====================================================================
   QualiLab · Banco de Exercícios (Revisado Cientificamente)
   ---------------------------------------------------------------------
   Auditoria aplicada: rigor estatístico em regras de Westgard, remoção
   de determinismos causais absolutos e fortalecimento da investigação.
   ================================================================───── */
window.bancoDeExercicios = [
  // ==========================================
  // NÍVEL BÁSICO (10 Exercícios)
  // ==========================================
  {
    id: "basico-01",
    titulo: "Ureia: Pico Isolado no Controle",
    dificuldade: "Básico",
    cenario: "O controle do Nível 1 do analito Ureia vinha com resultados estáveis. Hoje, o resultado do Nível 1 disparou para +3.4 DP, enquanto o Nível 2 passou perfeitamente na mesma corrida.",
    grafico: {
      analito: "Ureia", unidade: "mg/dL",
      niveis: [
        { nome: "Nível 1", alvo: 30, sd: 1.5, resultados: [30.5, 29.8, 31.0, 30.2, 29.5, 30.1, 35.1] },
        { nome: "Nível 2", alvo: 80, sd: 3.0, resultados: [81.0, 79.5, 80.2, 81.5, 78.9, 80.0, 79.8] }
      ]
    },
    pergunta: "Qual regra foi violada e qual a conduta investigativa inicial mais adequada?",
    alternativas: [
      { id: "a", texto: "1₃s (Sinalização de erro analítico). Suspender a liberação, investigar fatores pré-analíticos/analíticos do Nível 1 (ex: homogeneização, bolhas) antes de assumir falha de calibração." },
      { id: "b", texto: "1₃s (Erro Sistemático absoluto). Recalibrar obrigatoriamente o equipamento sem apurar o frasco." },
      { id: "c", texto: "Nenhuma regra violada, liberar a rotina de pacientes imediatamente." }
    ],
    respostaCorreta: "a",
    justificativa: "O Nível 1 obteve 35.1 mg/dL (+3.4 DP), violando a regra de controle 1₃s. Como o Nível 2 manteve-se estável na mesma corrida, os dados sugerem fortemente uma ocorrência atípica restrita ao Nível 1, exigindo investigação investigativa (como integridade do material de controle e pipetagem) antes de intervenções maiores no sistema."
  },
  {
    id: "basico-02",
    titulo: "Conceito de Erro Sistemático",
    dificuldade: "Básico",
    cenario: "O controle interno da qualidade monitora tanto a imprecisão quanto o viés do processo analítico.",
    pergunta: "Qual das alternativas abaixo caracteriza corretamente um Erro Sistemático no laboratório?",
    alternativas: [
      { id: "a", texto: "Uma variação estocástica imprevisível que afeta de forma isolada uma única amostra de paciente." },
      { id: "b", texto: "Um deslocamento constante ou tendência na média dos resultados, introduzindo viés previsível no sistema analítico." },
      { id: "c", texto: "Um erro exclusivo de digitação humana no sistema LIMS." }
    ],
    respostaCorreta: "b",
    justificativa: "O erro sistemático afeta a exatidão, provocando um desvio persistente ou tendência mensurável em direção previsível (para mais ou para menos), decorrente de fatores como degradação de reagentes ou descalibração."
  },
  {
    id: "basico-03",
    titulo: "A Regra 1₂s",
    dificuldade: "Básico",
    cenario: "O laboratório adota o conjunto clássico de regras de Westgard. Hoje, o controle de Glicose obteve um Z-Score de +2.2 DP. Nenhuma outra regra foi violada.",
    pergunta: "Qual o papel operacional da regra 1₂s neste contexto de planejamento?",
    alternativas: [
      { id: "a", texto: "Funciona como um Alerta estatístico (Warning), indicando necessidade de atenção aos dados, mas não justificando isoladamente o bloqueio imediato da rotina." },
      { id: "b", texto: "Constitui critério absoluto de rejeição automática de corrida em qualquer manual." },
      { id: "c", texto: "Determina a troca imediata do lote de reagentes." }
    ],
    respostaCorreta: "a",
    justificativa: "Estatisticamente, cerca de 4.5% dos resultados normais caem entre 2 e 3 DP devido à distribuição gaussiana. Por isso, a regra 1₂s atua como sinalizador de alerta para verificar outras regras do multi-regra, evitando falsas rejeições excessivas."
  },
  {
    id: "basico-04",
    titulo: "TSH: Desvio Contínuo (2₂s)",
    dificuldade: "Básico",
    cenario: "Na Imunologia, o TSH apresentou +2.1 DP no dia anterior e +2.3 DP no dia corrente, ambos do mesmo lado da média.",
    pergunta: "Como o sistema avalia este padrão e qual a conduta requerida pelo POP?",
    alternativas: [
      { id: "a", texto: "Violação da regra 2₂s (sugestiva de erro sistemático). A corrida deve ser contida e o processo investigado." },
      { id: "b", texto: "Violação da regra R₄s. Recomenda-se apenas registrar no livro de ocorrências." },
      { id: "c", texto: "Nenhuma anormalidade estatística relevante." }
    ],
    respostaCorreta: "a",
    justificativa: "Dois resultados consecutivos acima de 2 DP do mesmo lado da média configuram a regra 2₂s, principal indicativo de aparecimento de erro sistemático, exigindo interrupção da liberação de laudos até apuração."
  },
  {
    id: "basico-05",
    titulo: "Coeficiente de Variação (CV%)",
    dificuldade: "Básico",
    cenario: "Ao analisar o relatório mensal do CIQ, o responsável técnico avalia o Coeficiente de Variação.",
    pergunta: "O que o CV% expressa quantitativamente?",
    alternativas: [
      { id: "a", texto: "A exatidão absoluta frente ao material certificado." },
      { id: "b", texto: "A imprecisão analítica do método, representando o desvio padrão relativo percentual frente à média." },
      { id: "c", texto: "O volume total de testes rejeitados no mês." }
    ],
    respostaCorreta: "b",
    justificativa: "O CV% (Desvio Padrão dividido pela Média, multiplicado por 100) é a métrica padrão para dimensionar a dispersão ou imprecisão de um método de forma comparativa entre diferentes concentrações."
  },
  {
    id: "basico-06",
    titulo: "Gráfico de Levey-Jennings",
    dificuldade: "Básico",
    cenario: "O gráfico de Levey-Jennings plota os resultados diários dos materiais de controle.",
    pergunta: "Quais são as referências centrais e de limite padronizadas neste gráfico?",
    alternativas: [
      { id: "a", texto: "A linha central representa a Média (Alvo) e as linhas paralelas indicam os intervalos de Desvio Padrão (±1, ±2 e ±3 DP)." },
      { id: "b", texto: "As linhas delimitam o faturamento diário do laboratório." },
      { id: "c", texto: "Os eixos exibem estritamente a temperatura da geladeira de reagentes." }
    ],
    respostaCorreta: "a",
    justificativa: "O Levey-Jennings utiliza a média histórica como eixo central e linhas de desvio-padrão (DP) para monitorar visualmente o comportamento estatístico do sistema ao longo do tempo."
  },
  {
    id: "basico-07",
    titulo: "Sódio: Discrepância na Corrida",
    dificuldade: "Básico",
    cenario: "Em uma mesma corrida analítica de Sódio, o Nível 1 situou-se em +2.3 DP e o Nível 2 em -2.1 DP.",
    pergunta: "Qual regra estatística é acionada por essa grande amplitude interna?",
    alternativas: [
      { id: "a", texto: "Regra R₄s, indicando forte presença de erro aleatório na respectiva corrida." },
      { id: "b", texto: "Regra 10_x, indicando deslocamento crônico da média." },
      { id: "c", texto: "Nenhuma regra, pois os pontos estão dentro de ±3 DP." }
    ],
    respostaCorreta: "a",
    justificativa: "A regra R₄s é violada quando a diferença entre dois resultados de controle na mesma corrida excede 4 DP (um acima de +2 DP e outro abaixo de -2 DP), sinalizando erro aleatório acentuado."
  },
  {
    id: "basico-08",
    titulo: "Identificação de Viés (Bias)",
    dificuldade: "Básico",
    cenario: "O conceito de Viés (Bias) é fundamental na garantia da qualidade laboratorial.",
    pergunta: "Como o Viés analítico é conceituado?",
    alternativas: [
      { id: "a", texto: "A diferença sistemática entre a média dos resultados obtidos pelo laboratório e o valor de referência aceito." },
      { id: "b", texto: "A flutuação randômica gerada por instabilidade de voltagem elétrica." },
      { id: "c", texto: "O tempo de espera do paciente na recepção." }
    ],
    respostaCorreta: "a",
    justificativa: "O viés traduz a inexatidão ou o afastamento sistemático do valor obtido em relação ao valor verdadeiro ou de consenso atribuído ao material auditado."
  },
  {
    id: "basico-09",
    titulo: "Cálcio: Regra 4₁s",
    dificuldade: "Básico",
    cenario: "Quatro resultados consecutivos de Cálcio obtiveram os seguintes desvios: -1.2, -1.9, -1.1 e -1.8 DP.",
    pergunta: "Como se classifica essa ocorrência sob a ótica de Westgard?",
    alternativas: [
      { id: "a", texto: "Violação da regra 4₁s, sugerindo presença de erro sistemático moderado (viés direcional)." },
      { id: "b", texto: "Violação da regra R₄s por dispersão aleatória." },
      { id: "c", texto: "Comportamento perfeitamente estocástico sem significado clínico." }
    ],
    respostaCorreta: "a",
    justificativa: "Quatro medições consecutivas do mesmo lado da média e além de 1 DP caracterizam a regra 4₁s, atuando como um critério sensível para detecção de tendências a erro sistemático."
  },
  {
    id: "basico-10",
    titulo: "Reconstituição do Controle",
    dificuldade: "Básico",
    cenario: "Um lote de controle liofilizado exige rigor absoluto no volume do diluente adicionado.",
    pergunta: "Qual o impacto de um erro sistemático na pipetagem do diluente do controle?",
    alternativas: [
      { id: "a", texto: "Gera um falso deslocamento (Shift) consistente em todos os analitos daquele frasco reconstituído." },
      { id: "b", texto: "Provoca apenas falhas isoladas de regra 1₃s em dias alternados." },
      { id: "c", texto: "Altera unicamente a viscosidade do soro sem repercussão estatística." }
    ],
    respostaCorreta: "a",
    justificativa: "Se o volume do diluente estiver incorreto, a concentração de todos os analitos naquele frasco ficará alterada de maneira uniforme, simulando um erro sistemático (shift) no gráfico."
  },

  // ==========================================
  // NÍVEL INTERMEDIÁRIO (10 Exercícios)
  // ==========================================
  {
    id: "inter-01",
    titulo: "Colesterol: Planejamento (Métrica Sigma)",
    dificuldade: "Intermediário",
    cenario: "Validação de kit para Colesterol: TEa = 10%, CV = 1.2%, Viés = 1.0%.",
    pergunta: "Qual o valor da Métrica Sigma e a estratégia de CQ recomendada?",
    alternativas: [
      { id: "a", texto: "Sigma 7.5. Processo de alta robustez; recomenda-se simplificar o plano de CQ utilizando regras menos restritivas (ex: 1₃s)." },
      { id: "b", texto: "Sigma 2.0. Processo frágil que exige multiregras complexas e controle a cada 10 amostras." },
      { id: "c", texto: "Sigma 10. Processo isento de qualquer necessidade de monitoramento." }
    ],
    respostaCorreta: "a",
    justificativa: "Fórmula: Sigma = (TEa - |Viés|) / CV -> (10 - 1) / 1.2 = 7.5. Processos com Sigma > 6 possuem excelente margem analítica, dispensando multiregras excessivas que só gerariam falsas rejeições."
  },
  {
    id: "inter-02",
    titulo: "AST: O Efeito de Degradação (Tendência)",
    dificuldade: "Intermediário",
    cenario: "Resultados da enzima AST apresentaram elevação sequencial e contínua por 7 dias, sem ultrapassar os limites de 2 DP.",
    pergunta: "Como esse comportamento gráfico deve ser interpretado clinicamente?",
    alternativas: [
      { id: "a", texto: "Tendência (Trend / 7T). Indica degradação progressiva de reagentes, calibração em deriva ou envelhecimento de componentes ópticos." },
      { id: "b", texto: "Erro Aleatório agudo por instabilidade da rede elétrica." },
      { id: "c", texto: "Flutuação normal inerente à matriz biológica do controle." }
    ],
    respostaCorreta: "a",
    justificativa: "Sete ou mais resultados consecutivos caminhando na mesma direção configuram uma Tendência (Trend). Exige investigação preventiva de reagentes e sistemas antes que os limites de rejeição sejam atingidos."
  },
  {
    id: "inter-03",
    titulo: "Hemoglobina: A Troca de Lote (Shift)",
    dificuldade: "Intermediário",
    cenario: "Após troca de lote de reagente sem nova calibração, os resultados de controle mantiveram-se persistentemente do lado positivo.",
    grafico: {
      analito: "Hemoglobina", unidade: "g/dL",
      niveis: [
        { nome: "Nível 1", alvo: 12.0, sd: 0.2, resultados: [12.0, 12.1, 12.0, 12.3, 12.25, 12.2, 12.28, 12.35, 12.25, 12.3] }
      ]
    },
    configRegras: { "10_x": "rejeicao" },
    pergunta: "Que fenômeno estatístico e analítico é evidenciado após 10 pontos consecutivos?",
    alternativas: [
      { id: "a", texto: "Deslocamento sistemático (Shift), acionando a regra 10_x devido à mudança de patamar no processo." },
      { id: "b", texto: "Um pico isolado de erro aleatório." },
      { id: "c", texto: "Estabilidade perfeita do sistema de medição." }
    ],
    respostaCorreta: "a",
    justificativa: "Dez resultados consecutivos de um mesmo lado da média caracterizam um deslocamento (Shift) de processo, frequentemente associado a mudanças de lotes de reagentes ou calibrações insuficientes."
  },
  {
    id: "inter-04",
    titulo: "Padronização por Z-Score",
    dificuldade: "Intermediário",
    cenario: "Para unificar a visualização de analitos com escalas e unidades distintas em um único gráfico consolidado, o QualiLab utiliza a transformação em Z-Score.",
    pergunta: "Qual expressão matemática define o cálculo do Z-Score para um ponto analítico?",
    alternativas: [
      { id: "a", texto: "Z = (Resultado Obtido - Média Alvo) / Desvio Padrão" },
      { id: "b", texto: "Z = (Desvio Padrão / Média) * 100" },
      { id: "c", texto: "Z = Resultado Obtido * Viés" }
    ],
    respostaCorreta: "a",
    justificativa: "O Z-Score padroniza qualquer valor em unidades de desvio padrão em relação ao alvo, permitindo a comparabilidade direta entre níveis ou testes diferentes."
  },
  {
    id: "inter-05",
    titulo: "Flexibilidade da Regra 10_x",
    dificuldade: "Intermediário",
    cenario: "Diretrizes modernas de gestão de risco (CLSI C24) permitem classificar regras de longo prazo como alerta dependendo do perfil do teste.",
    pergunta: "Qual a conduta ao configurar a regra 10_x estritamente como Alerta no POP?",
    alternativas: [
      { id: "a", texto: "Iniciar investigação de tendência e checar calibrações, sem necessariamente paralisar imediatamente a liberação rotineira." },
      { id: "b", texto: "Descartar imediatamente todos os equipamentos do laboratório." },
      { id: "c", texto: "Ignorar o evento, visto que alertas não possuem valor técnico." }
    ],
    respostaCorreta: "a",
    justificativa: "Configurar regras de longo prazo como alerta permite ao laboratório conduzir ações proativas de manutenção sem o custo desproporcional de falsas paralisações de rotina, quando suportado pela análise de risco."
  },
  {
    id: "inter-06",
    titulo: "Ação Corretiva vs Preventiva",
    dificuldade: "Intermediário",
    cenario: "Após violação da regra 4₁s, a equipe identificou resíduos de proteína na cubeta de leitura, realizou limpeza profunda e restabeleceu o controle.",
    pergunta: "Essa intervenção configura qual tipo de ação no sistema de qualidade?",
    alternativas: [
      { id: "a", texto: "Ação Corretiva, por eliminar a causa raiz de uma não conformidade estatística já constatada." },
      { id: "b", texto: "Ação puramente administrativa sem vínculo com a técnica." },
      { id: "c", texto: "Ação preventiva para evitar problemas futuros hipotéticos." }
    ],
    respostaCorreta: "a",
    justificativa: "Uma vez que o erro causou desvio no CQ, a intervenção técnica para sanar a causa identificada enquadra-se rigorosamente como Ação Corretiva (ISO 15189)."
  },
  {
    id: "inter-07",
    titulo: "Aplicação Multirregra Entre Níveis",
    dificuldade: "Intermediário",
    cenario: "Em bancadas de baixa frequência onde se roda o controle uma vez ao dia, acumular 10 corridas exige dias. Pode-se associar dados entre níveis (across materials)?",
    pergunta: "Qual a utilidade da avaliação combinada entre níveis de controle?",
    alternativas: [
      { id: "a", texto: "Permite acelerar a detecção de desvios sistemáticos ao somar observações de múltiplos níveis em um mesmo patamar estatístico." },
      { id: "b", texto: "Invalida a estatística por misturar concentrações diferentes." },
      { id: "c", texto: "É proibida por todas as normativas internacionais de acreditação." }
    ],
    respostaCorreta: "a",
    justificativa: "Combinar níveis (ex: 5 dias com 2 níveis cada totalizando 10 pontos) viabiliza a aplicação antecipada de regras de tendência e deslocamento em rotinas com menor volume de passadas diárias."
  },
  {
    id: "inter-08",
    titulo: "Cálculo do Erro Total Operacional",
    dificuldade: "Intermediário",
    cenario: "Para estimar se o laboratório atende aos requisitos clínicos, calcula-se o Erro Total (ET).",
    pergunta: "Como se formula o cálculo do Erro Total estimado para o método?",
    alternativas: [
      { id: "a", texto: "ET = (Z * CV%) + Viés%" },
      { id: "b", texto: "ET = TEa / Desvio Padrão" },
      { id: "c", texto: "ET = Média * CV%" }
    ],
    respostaCorreta: "a",
    justificativa: "O Erro Total combina a imprecisão multiplicada pelo fator de confiança Z (geralmente 1.65 para 95%) somada ao viés absoluto encontrado."
  },
  {
    id: "inter-09",
    titulo: "Investigação de Nível Único",
    dificuldade: "Intermediário",
    cenario: "O Nível 1 de Glicose apresenta falha de 1₃s, enquanto o Nível 2 na mesma placa está perfeitamente centrado no alvo.",
    pergunta: "Qual hipótese diagnóstica inicial possui menor probabilidade?",
    alternativas: [
      { id: "a", texto: "Falha global na curva de calibração do instrumento para todo o ensaio." },
      { id: "b", texto: "Inconsistência física, contaminação pontual ou problema de reconstituição restrito ao frasco do Nível 1." },
      { id: "c", texto: "Erro acidental na pipetagem do tubo de Nível 1." }
    ],
    respostaCorreta: "a",
    justificativa: "Um colapso na calibração afetaria obrigatoriamente ambos os níveis de controle. Quando apenas um nível falha isoladamente, a causa costuma estar localizada no frasco, na matriz ou no manuseio específico daquele nível."
  },
  {
    id: "inter-10",
    titulo: "Validade On-Board do Controle",
    dificuldade: "Intermediário",
    cenario: "Um material de controle aberto ultrapassou o prazo de estabilidade on-board recomendado pelo fabricante, gerando viés negativo nos resultados.",
    pergunta: "Qual a conduta técnica adequada antes de cogitar uma recalibração analítica?",
    alternativas: [
      { id: "a", texto: "Substituir o material de controle por um frasco novo e íntegro dentro do prazo de validade e repetir o ensaio." },
      { id: "b", texto: "Ajustar a calibração do equipamento para compensar o controle estragado." },
      { id: "c", texto: "Ampliar os limites de controle para ±4 DP." }
    ],
    respostaCorreta: "a",
    justificativa: "A primeira regra de troubleshooting analítico é assegurar a integridade do insumo de controle. Insumos degradados geram falsos alarmes de falha no equipamento."
  },

  // ==========================================
  // NÍVEL AVANÇADO (10 Exercícios)
  // ==========================================
  {
    id: "avan-01",
    titulo: "Potássio: Desempenho Marginal e Risco",
    dificuldade: "Avançado",
    cenario: "O analito Potássio apresenta Métrica Sigma igual a 2.8, caracterizando um processo analítico marginal.",
    pergunta: "Qual o delineamento estratégico de CQ adequado para processos com Sigma < 3?",
    alternativas: [
      { id: "a", texto: "Adotar estratégia rigorosa com multiregras completas e maior frequência de controle (corridas menores) para assegurar detecção de erros." },
      { id: "b", texto: "Reduzir as passagens de controle para uma vez por semana devido à alta estabilidade." },
      { id: "c", texto: "Eliminar a verificação de desvios para otimizar custos operacionais." }
    ],
    respostaCorreta: "a",
    justificativa: "Processos com baixo Sigma (< 3) são altamente vulneráveis a falhas clínicas. Exigem controle estatístico estrito, uso de multiregras potentes e menor intervalo entre as amostras de controle."
  },
  {
    id: "avan-02",
    titulo: "A Prática Inadequada de 'Testar até Passar'",
    dificuldade: "Avançado",
    cenario: "Diante de uma rejeição por regra 1₃s, o operador repetiu a leitura do mesmo tubo de controle até obter um valor aceitável, liberando os pacientes em seguida.",
    grafico: {
      analito: "Glicose", unidade: "mg/dL",
      niveis: [
        { nome: "Nível 1", alvo: 100, sd: 3.0, resultados: [99, 101, 98, 100, 99, 102, 115, 101] }
      ]
    },
    pergunta: "Como a garantia da qualidade avalia o procedimento de 'testing into compliance'?",
    alternativas: [
      { id: "a", texto: "Prática inadequada que mascara falhas intermitentes e compromete a segurança de pacientes, pois a causa raiz não foi investigada nem resolvida." },
      { id: "b", texto: "Metodologia ágil recomendada pelas normas ISO para agilizar o laboratório de urgência." },
      { id: "c", texto: "Conduta perfeita, uma vez que o segundo resultado anulou estatisticamente o primeiro." }
    ],
    respostaCorreta: "a",
    justificativa: "Repetir o controle cegamente até obter aprovação ('testar até passar') destrói a utilidade do CQ, pois ignora uma evidência real de instabilidade mecânica ou analítica que pode ter afetado os pacientes."
  },
  {
    id: "avan-03",
    titulo: "Falsa Rejeição vs Poder de Detecção",
    dificuldade: "Avançado",
    cenario: "Em exames altamente estáveis (Sigma > 6), o uso simultâneo de regras hiper-restritivas como 4₁s e 10_x costuma ser evitado.",
    pergunta: "Qual o principal efeito indesejado de aplicar multiregras complexas em métodos de altíssimo desempenho?",
    alternativas: [
      { id: "a", texto: "Elevação drástica da taxa de Falsas Rejeições (Pfr), paralisando o laboratório desnecessariamente por variações randômicas inofensivas." },
      { id: "b", texto: "Redução do custo operacional de reagentes." },
      { id: "c", texto: "Aumento automático do Erro Total Permitido." }
    ],
    respostaCorreta: "a",
    justificativa: "Em processos com Sigma muito alto, o processo já é extremamente estável. Regras muito longas ou estritas geram alarmes falsos frequentes, gerando retrabalho sem ganho clínico real."
  },
  {
    id: "avan-04",
    titulo: "Divergência entre CIQ e Avaliação Externa",
    dificuldade: "Avançado",
    cenario: "O laboratório possui excelente desempenho no Controle Interno (CV baixo, sem violações), mas obtém conceito insatisfatório no Ensaio de Proficiência (Proficiency Testing).",
    pergunta: "A qual fator analítico essa disparidade costuma estar associada?",
    alternativas: [
      { id: "a", texto: "Erro de exatidão ou calibração (Viés analítico consolidado). O sistema é preciso consigo mesmo, mas calibrado incorretamente frente ao consenso." },
      { id: "b", texto: "Falha de estabilidade elétrica diária." },
      { id: "c", texto: "Erro grosseiro na digitação dos dados do controle interno." }
    ],
    respostaCorreta: "a",
    justificativa: "O CIQ mede repetibilidade e precisão interna. A Proficiência mede exatidão comparativa interlaboratorial. Um equipamento pode apresentar excelente precisão e manter um viés constante que passou desapercebido na calibração."
  },
  {
    id: "avan-05",
    titulo: "Adaptação de Regras de Alerta Prévio",
    dificuldade: "Avançado",
    cenario: "Em ensaios críticos de emergência (ex: Troponina ultrassensível), alguns laboratórios utilizam regras de alerta precoce como a 3_1s.",
    pergunta: "Qual o objetivo de aplicar regras com menor contagem de pontos em exames de altíssimo risco clínico?",
    alternativas: [
      { id: "a", texto: "Detectar microvieses com maior velocidade, antecipando ações corretivas antes que o limite de rejeição final seja atingido." },
      { id: "b", texto: "Aumentar artificialmente o tempo de liberação dos laudos." },
      { id: "c", texto: "Reduzir o rigor analítico exigido pela norma." }
    ],
    respostaCorreta: "a",
    justificativa: "Em analitos críticos onde a severidade do dano ao paciente é máxima, busca-se maximizar a detectabilidade precoce por meio de regras sensíveis de aviso prévio."
  },
  {
    id: "avan-06",
    titulo: "Gerenciamento de Risco (ISO 15189 / CLSI EP23)",
    dificuldade: "Avançado",
    cenario: "O modelo moderno de qualidade laboratorial baseia-se na Gestão de Risco integrada (IQCP).",
    pergunta: "Quais pilares fundamentam a análise de risco analítico segundo as diretrizes contemporâneas?",
    alternativas: [
      { id: "a", texto: "Probabilidade de ocorrência da falha, Severidade do impacto clínico e Capacidade de detecção prévia." },
      { id: "b", texto: "Custo do kit, marca do equipamento e tempo de garantia." },
      { id: "c", texto: "Volume de exames terceirizados e número de funcionários na recepção." }
    ],
    respostaCorreta: "a",
    justificativa: "A matriz de risco avalia a probabilidade do erro acontecer, quão grave ele é para o paciente (severidade) e se o sistema de controle consegue detectá-lo a tempo."
  },
  {
    id: "avan-07",
    titulo: "Definição do Alvo Próprio (Target Interno)",
    dificuldade: "Avançado",
    cenario: "Ao iniciar um novo lote de material de controle liofilizado, a bula traz uma faixa ampla de valores médios interlaboratoriais.",
    pergunta: "Como o laboratório deve proceder para estabelecer seu Alvo e DP operacionais?",
    alternativas: [
      { id: "a", texto: "Conduzir ensaios de replicação por 20 dias, calcular a média e o DP internos e validá-los frente à faixa do fabricante." },
      { id: "b", texto: "Adotar estritamente o valor máximo da bula para evitar falhas." },
      { id: "c", texto: "Manter sempre a média do lote anterior independentemente do insumo." }
    ],
    respostaCorreta: "a",
    justificativa: "As bulas trazem médias genéricas de múltiplos instrumentos e métodos. O laboratório deve estabelecer sua própria média e desvio padrão reais (com n=20 dias no mínimo) para refletir seu ambiente analítico."
  },
  {
    id: "avan-08",
    titulo: "Média Ponderada Acumulada",
    dificuldade: "Avançado",
    cenario: "No encerramento do trimestre, o sistema consolida os dados estatísticos do CIQ combinando os meses anteriores.",
    pergunta: "Por que a consolidação estatística exige tratamento ponderado com base no número de pontos (n)?",
    alternativas: [
      { id: "a", texto: "Para ponderar corretamente a variabilidade considerando a quantidade real de medições executadas em cada período." },
      { id: "b", texto: "Para zerar os custos de calibração do equipamento." },
      { id: "c", texto: "Para cumprir exigências fiscais de faturamento." }
    ],
    respostaCorreta: "a",
    justificativa: "Meses com diferentes números de dias úteis ou interrupções de rotina possuem 'n' variáveis. A média e o desvio padrão acumulados devem ponderar o peso estatístico de cada bloco de dados."
  },
  {
    id: "avan-09",
    titulo: "Sensibilidade e Especificidade das Regras",
    dificuldade: "Avançado",
    cenario: "Ao ajustar o algoritmo de multiregras, o gestor avalia se deve utilizar a regra 8_x ou 10_x.",
    pergunta: "O que ocorre ao encurtar o número de pontos exigidos em uma regra de tendência (ex: de 10_x para 8_x)?",
    alternativas: [
      { id: "a", texto: "Aumenta-se a sensibilidade (detecção mais rápida de deslocamentos), porém eleva-se proporcionalmente a taxa de falsas rejeições." },
      { id: "b", texto: "O método torna-se imune a erros sistemáticos." },
      { id: "c", texto: "O desvio padrão do equipamento diminui automaticamente." }
    ],
    respostaCorreta: "a",
    justificativa: "Existe um compromisso (trade-off) estatístico: regras mais curtas detectam desvios mais cedo, mas tornam o sistema mais sensível às flutuações estatísticas naturais, gerando mais falsos alarmes."
  },
  {
    id: "avan-10",
    titulo: "Avaliação Retrospectiva (Lookback de Pacientes)",
    dificuldade: "Avançado",
    cenario: "Após falha grave em R₄s e 1₃s confirmada por falha mecânica na agulha de aspiração, a manutenção foi concluída.",
    pergunta: "Qual procedimento obrigatório deve ser adotado em relação aos resultados liberados anteriormente?",
    alternativas: [
      { id: "a", texto: "Conduzir avaliação retrospectiva (Lookback) para rastrear e retestar amostras afetadas desde o último ponto de controle comprovadamente aceitável." },
      { id: "b", texto: "Ignorar o passado, pois o equipamento já foi consertado para a rotina atual." },
      { id: "c", texto: "Ajustar os laudos dos pacientes por telefone sem reanálise." }
    ],
    respostaCorreta: "a",
    justificativa: "Erros mecânicos severos exigem rastreabilidade retrospectiva (Lookback) para identificar quais laudos de pacientes foram emitidos sob vigência da falha analítica e promover as ações corretivas cabíveis."
  }
];
