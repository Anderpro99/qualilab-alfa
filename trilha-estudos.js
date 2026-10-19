/* =====================================================================
   QUALILAB · TRILHA DE ESTUDOS ("Aprendendo do Zero")
   =====================================================================
   Este arquivo guarda o conteúdo didático da trilha de estudos.
   ===================================================================== */
window.trilhaEstudos = [
  {
    id: "m1",
    titulo: "Conceitos Básicos de Estatística",
    resumo: "Média, dispersão e erro: a linguagem básica do controle da qualidade.",
    licoes: [
      {
        id: "m1-l1",
        titulo: "O que é Média e SD?",
        duracao: "8 min",
        objetivos: [
          "Calcular a média de um conjunto de resultados",
          "Entender o desvio padrão como medida de dispersão",
          "Calcular o SD amostral passo a passo"
        ],
        conteudo: [
          { tipo: "titulo", texto: "Por que olhar para vários resultados?" },
          { tipo: "paragrafo", texto: "Quando o laboratório analisa o **mesmo material de controle** várias vezes, os resultados nunca são idênticos. Pequenas variações aparecem por causa da pipetagem, do equipamento, da temperatura e de outros fatores. Para descrever esse conjunto de resultados usamos duas ideias: **onde ele está centrado** (a média) e **quanto ele se espalha** (o desvio padrão)." },
          { tipo: "titulo", texto: "Média" },
          { tipo: "definicao", titulo: "Média (x̄)", texto: "É o valor central do conjunto: a soma de todos os resultados dividida pela quantidade de resultados (N)." },
          { tipo: "formula", titulo: "Fórmula da média", expressao: "x̄ = (x₁ + x₂ + … + xₙ) ÷ N", legenda: "x₁ … xₙ: cada resultado · N: quantidade de resultados" },
          { tipo: "titulo", texto: "Desvio padrão (SD)" },
          { tipo: "paragrafo", texto: "A média sozinha não conta a história toda. Dois conjuntos podem ter a mesma média e comportamentos muito diferentes. O **desvio padrão** (SD, do inglês *standard deviation*) mede esse espalhamento: quanto maior o SD, mais dispersos estão os resultados." },
          { tipo: "definicao", titulo: "Desvio padrão (SD)", texto: "Mede o quanto os resultados costumam se afastar da média. Tem a mesma unidade do resultado (mg/dL, U/L etc.)." },
          { tipo: "formula", titulo: "SD amostral", expressao: "SD = √[ Σ(xᵢ − x̄)² ÷ (N − 1) ]", legenda: "Σ: soma · (xᵢ − x̄): distância de cada resultado até a média · N − 1: correção usada para amostras" },
          { tipo: "atencao", titulo: "Por que N − 1 e não N?", texto: "No controle da qualidade, os resultados são uma **amostra** de todas as medições possíveis do material. Dividir por N − 1 corrige a tendência de subestimar a dispersão. É o cálculo usado no simulador do QualiLab." },
          { tipo: "exemplo", titulo: "Exemplo passo a passo (valores fictícios)", passos: [
            "Resultados: 98, 100, 102, 101 e 99 (N = 5).",
            "Média = (98 + 100 + 102 + 101 + 99) ÷ 5 = 500 ÷ 5 = 100.",
            "Distâncias até a média: −2, 0, +2, +1 e −1.",
            "Elevadas ao quadrado: 4, 0, 4, 1 e 1. A soma é 10.",
            "Dividindo por N − 1 = 4: 10 ÷ 4 = 2,5.",
            "Raiz quadrada: SD = √2,5 ≈ 1,58."
          ] }
        ],
        pontosChave: [
          "A média mostra o centro; o SD mostra a dispersão.",
          "Quanto menor o SD, mais próximos entre si estão os resultados.",
          "No controle da qualidade usa-se o SD amostral (divisão por N − 1)."
        ]
      },
      {
        id: "m1-l2",
        titulo: "Coeficiente de Variação (CV%)",
        duracao: "6 min",
        objetivos: [
          "Entender por que o SD sozinho dificulta comparações",
          "Calcular e interpretar o CV%"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "O SD tem a unidade do resultado, então não serve bem para comparar controles com concentrações muito diferentes. Um SD de 6 pode ser enorme para um controle com média 20 e pequeno para outro com média 200." },
          { tipo: "definicao", titulo: "Coeficiente de Variação (CV%)", texto: "Expressa o SD como porcentagem da média. É uma medida **relativa** de imprecisão, sem unidade, que permite comparar níveis e métodos diferentes." },
          { tipo: "formula", titulo: "Fórmula do CV%", expressao: "CV% = (SD ÷ |média|) × 100", legenda: "|média|: valor da média sem o sinal" },
          { tipo: "exemplo", titulo: "Exemplo (valores fictícios)", texto: "Com a média 100 e SD ≈ 1,58: CV% = (1,58 ÷ 100) × 100 ≈ 1,58%." },
          { tipo: "tabela", cabecalho: ["Nível de controle", "Média", "SD", "CV%"], linhas: [["Nível 1", "50", "2", "4,0%"], ["Nível 2", "200", "6", "3,0%"]] },
          { tipo: "paragrafo", texto: "O Nível 2 tem o **maior SD** (6 contra 2), mas o **menor CV%** (3% contra 4%): em termos relativos, ele é mais preciso." }
        ],
        pontosChave: [
          "CV% = SD ÷ |média| × 100: imprecisão em relação ao tamanho da média.",
          "Permite comparar níveis e métodos com concentrações diferentes."
        ]
      },
      {
        id: "m1-l3",
        titulo: "Precisão, exatidão e viés",
        duracao: "7 min",
        objetivos: [
          "Diferenciar precisão e exatidão",
          "Calcular o viés em relação ao alvo"
        ],
        conteudo: [
          { tipo: "definicao", titulo: "Precisão", texto: "Concordância entre resultados repetidos do mesmo material. Mede-se com SD e CV%. O **erro aleatório** reduz a precisão." },
          { tipo: "definicao", titulo: "Exatidão (veracidade)", texto: "Proximidade entre a média dos resultados e o valor-alvo. Mede-se com o viés. O **erro sistemático** afeta a exatidão." },
          { tipo: "formula", titulo: "Viés", expressao: "Viés = média obtida − alvo\nViés % = (média obtida − alvo) ÷ |alvo| × 100", legenda: "Viés positivo: resultados acima do alvo · viés negativo: abaixo do alvo" }
        ],
        pontosChave: [
          "Precisão: quão próximos entre si (SD, CV%). Exatidão: quão perto do alvo (viés).",
          "Erro aleatório afeta a precisão; erro sistemático afeta a exatidão."
        ]
      }
    ]
  },
  {
    id: "m2",
    titulo: "Controle Interno da Qualidade",
    resumo: "Como usar a estatística para vigiar o desempenho do método no dia a dia.",
    licoes: [
      {
        id: "m2-l1",
        titulo: "O que é o controle interno?",
        duracao: "7 min",
        objetivos: [
          "Explicar o que é e para que serve o controle interno",
          "Diferenciar material de controle, nível e corrida"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "O **controle interno da qualidade** é a análise rotineira de materiais de controle, junto com as amostras dos pacientes. Se o resultado está dentro do esperado, há indício de que o processo analítico está sob controle." },
          { tipo: "definicao", titulo: "Material de controle", texto: "Amostra estável, com matriz semelhante à do paciente e faixa de concentração conhecida. Não deve ser usado como calibrador." },
          { tipo: "definicao", titulo: "Nível de controle", texto: "Concentração do controle (ex: Nível 1 - Normal, Nível 2 - Patológico). Permite avaliar o método em faixas de decisão clínica distintas." }
        ],
        pontosChave: [
          "Controle interno monitora a estabilidade diária do processo analítico.",
          "Exige pelo menos dois níveis em faixas de decisão clínica."
        ]
      },
      {
        id: "m2-l2",
        titulo: "A curva normal e os limites de ±1, ±2 e ±3 SD",
        duracao: "8 min",
        objetivos: [
          "Relacionar a curva gaussiana às faixas estatísticas",
          "Calcular limites de controle"
        ],
        conteudo: [
          { tipo: "tabela", cabecalho: ["Faixa em torno da média", "Proporção esperada dos resultados"], linhas: [["± 1 SD", "cerca de 68,3%"], ["± 2 SD", "cerca de 95,5%"], ["± 3 SD", "cerca de 99,7%"]] },
          { tipo: "paragrafo", texto: "Estatisticamente, apenas 0,3% dos resultados caem fora de ±3 SD por puro acaso. Um resultado além de 3 SD é um forte indicador de problema analítico real." }
        ],
        pontosChave: [
          "A curva de Gauss estabelece a probabilidade dos resultados.",
          "Ponto fora de 3 SD tem 99,7% de chance de ser um erro verdadeiro, não variação normal."
        ]
      },
      {
        id: "m2-l3",
        titulo: "Z-Score: comparando níveis na mesma régua",
        duracao: "6 min",
        objetivos: [
          "Calcular o Z-Score (SDI)",
          "Plotar múltiplos níveis no mesmo gráfico"
        ],
        conteudo: [
          { tipo: "formula", titulo: "Z-Score", expressao: "Z = (resultado − alvo) ÷ SD esperado", legenda: "Transforma qualquer resultado em número de desvios padrão em relação ao alvo" }
        ],
        pontosChave: [
          "Z-Score padroniza resultados de níveis diferentes em uma escala comum."
        ]
      }
    ]
  },
  {
    id: "m3",
    titulo: "Multiregras de Westgard e Troubleshooting",
    resumo: "Identificação de violações analíticas, distinção entre erros e algoritmos de investigação.",
    licoes: [
      {
        id: "m3-l1",
        titulo: "As Regras de Westgard na Prática",
        duracao: "10 min",
        objetivos: [
          "Diferenciar regras de Alerta de regras de Rejeição",
          "Identificar o tipo de erro (Sistemático vs. Aleatório) associado a cada regra"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "Em 1981, Dr. James Westgard estabeleceu uma combinação de regras estatísticas para avaliar corridas analíticas, reduzindo as falsas rejeições enquanto mantinha alta sensibilidade para erros reais." },
          { tipo: "definicao", titulo: "Regra de Alerta (1₂ₛ)", texto: "1 ponto fora de ±2 SD. Serve apenas como aviso para inspecionar os dados. **Não deve bloquear a corrida** sozinha." },
          { tipo: "definicao", titulo: "Regras de Rejeição (Erro Aleatório)", texto: "• **1₃ₛ:** 1 ponto além de ±3 SD.\n• **R₄ₛ:** A diferença entre dois controles na mesma corrida excede 4 SD (ex: um em +2,2 e outro em -1,9)." },
          { tipo: "definicao", titulo: "Regras de Rejeição (Erro Sistemático)", texto: "• **2₂ₛ:** 2 pontos consecutivos além de +2 SD ou -2 SD.\n• **4₁ₛ:** 4 pontos consecutivos além de +1 SD ou -1 SD.\n• **10ₓ:** 10 pontos consecutivos do mesmo lado da média." },
          { tipo: "tabela", cabecalho: ["Regra", "Tipo de Violação", "Erro Provável", "Ação Recomendada"], linhas: [
            ["1₂ₛ", "Alerta", "Aviso de dispersão", "Inspecionar gráfico; liberar rotina"],
            ["1₃ₛ / R₄ₛ", "Rejeição", "Erro Aleatório", "Rejeitar corrida; checar bolhas/pipetagem"],
            ["2₂ₛ / 4₁ₛ / 10ₓ", "Rejeição", "Erro Sistemático", "Rejeitar corrida; checar calibração/reagente"]
          ] }
        ],
        pontosChave: [
          "1₂ₛ é apenas alerta. Nunca rejeite um lote baseado somente na 1₂ₛ.",
          "Erro aleatório (1₃ₛ, R₄ₛ) é pontual e imprevisível.",
          "Erro sistemático (2₂ₛ, 4₁ₛ, 10ₓ) indica deslocamento persistente do método."
        ]
      },
      {
        id: "m3-l2",
        titulo: "Tratamento de Dados e Outliers",
        duracao: "8 min",
        objetivos: [
          "Saber quando excluir um ponto do gráfico estatístico sem adulterar o controle",
          "Aplicar critérios para detecção de Outliers (Ex: Regra de Grubbs)"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "Um erro comum em laboratórios é apagar pontos ruins do gráfico para 'deixar o controle bonito'. Isso mascara problemas reais e invalida a auditoria." },
          { tipo: "definicao", titulo: "O que é um Outlier Legítimo?", texto: "Um ponto discrepante gerado por um erro crasso comprovado (ex: tubo de controle errado, falha grave de energia, bolha visível na agulha)." },
          { tipo: "atencao", titulo: "Regra de Ouro da Exclusão", texto: "Um ponto só pode ser excluído do cálculo da Média e SD mensais se a causa técnica da falha for identificada e documentada. Se o ponto for rejeitado por causa analítica desconhecida, ele deve ser investigado, mantido no registro de ocorrências e tratado no cálculo de dispersão." }
        ],
        pontosChave: [
          "Nunca apague pontos sem justificativa técnica registrada.",
          "Pontos discrepantes por erro crasso conhecido devem ser desconsiderados na média mas registrados no relatório."
        ]
      },
      {
        id: "m3-l3",
        titulo: "Investigação de Causa Raiz (Troubleshooting)",
        duracao: "9 min",
        objetivos: [
          "Seguir um algoritmo lógico passo a passo quando o controle estourar",
          "Evitar a prática nociva de 'repetir o controle até passar'"
        ],
        conteudo: [
          { tipo: "titulo", texto: "O Perigo do 'Testing into Compliance'" },
          { tipo: "paragrafo", texto: "Repetir o material de controle repetidamente sem investigar até que ele caia dentro de 2 SD é chamado de *testing into compliance*. Por probabilidade estatística, o controle uma hora vai passar por mero acaso, mas o erro no equipamento continuará afetando os pacientes!" },
          { tipo: "definicao", titulo: "Algoritmo de Resolução de Problemas", texto: "1. **Identifique a regra violada:** É erro aleatório ou sistemático?\n2. **Inspecione o equipamento:** Temperatura, reagentes, alíquotas, bolhas, validade.\n3. **Se for Erro Aleatório:** Prepare uma nova alíquota do controle e repita a medição.\n4. **Se for Erro Sistemático:** Verifique lote de reagente, estabilidade on-board e faça uma recalibração.\n5. **Valide com controles:** Se aprovado, processe a rotina. Se reprovado, bloqueie o módulo analítico e acione a assistência técnica." }
        ],
        pontosChave: [
          "Não repita o controle cegamente.",
          "Erro aleatório pede nova alíquota/limpeza; erro sistemático pede recalibração/troca de reagente."
        ]
      }
    ]
  },
  {
    id: "m4",
    titulo: "Avaliação Mensal de Desempenho e Métrica Sigma",
    resumo: "Análise crônica do CV%, Erro Total Permitido (TEa), Variabilidade Biológica e Six Sigma.",
    licoes: [
      {
        id: "m4-l1",
        titulo: "Fechamento Mensal e Avaliação de CV% Acumulado",
        duracao: "8 min",
        objetivos: [
          "Calcular e comparar o CV% acumulado do mês contra o CV% de bula",
          "Avaliar a imprecisão crônica do equipamento"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "Ao final de cada mês, o analista deve consolidar todos os dados dos controles. O **CV% mensal acumulado** revela se a precisão do laboratório está equivalente à prometida pelo fabricante no folheto reativo." },
          { tipo: "formula", titulo: "Razão de Imprecisão (IR)", expressao: "IR = CV% obtido no mês ÷ CV% do fabricante", legenda: "IR ≤ 1,0: Excelência analítica · IR > 1,0: O método está mais impreciso que o esperado" }
        ],
        pontosChave: [
          "O fechamento mensal avalia o desempenho crônico do setor.",
          "Se o CV% do mês subir continuamente em relação aos meses anteriores, agende manutenção preventiva."
        ]
      },
      {
        id: "m4-l2",
        titulo: "Variabilidade Biológica e Erro Total Permitido (TEa)",
        duracao: "10 min",
        objetivos: [
          "Entender a origem médica dos limites de erro permissíveis",
          "Definir o Erro Total Permitido (TEa) usando tabelas de referência (CLIA / EFLM / Ricós)"
        ],
        conteudo: [
          { tipo: "definicao", titulo: "Variabilidade Biológica", texto: "Flutuação natural dos componentes biológicos ao longo do tempo no próprio indivíduo (intraindividual) e entre indivíduos (interindividual)." },
          { tipo: "definicao", titulo: "Erro Total Permitido (TEa)", texto: "Limite máximo de erro (soma da imprecisão e do viés) que um exame pode ter sem comprometer a decisão médica e a segurança do paciente." },
          { tipo: "formula", titulo: "Erro Total Calculado (TE)", expressao: "TE% = |Viés%| + (1,65 × CV%)", legenda: "1,65 representa o fator z para 95% de confiança unilateral" },
          { tipo: "atencao", titulo: "Critério de Aprovação", texto: "O Erro Total Calculado (TE%) do laboratório DEVE ser menor que o Erro Total Permitido (TEa) estabelecido pelas normas (ex: CLIA '88 ou EFLM). Se TE > TEa, o método não tem qualidade clínica aceitável." }
        ],
        pontosChave: [
          "O TEa é o teto máximo de erro aceitável antes de causar dano clínico ao paciente.",
          "TE% = Viés% + 1,65 × CV%."
        ]
      },
      {
        id: "m4-l3",
        titulo: "Métrica Six Sigma no Laboratório Clínico",
        duracao: "10 min",
        objetivos: [
          "Calcular a Métrica Sigma de um procedimento analítico",
          "Personalizar regras de Westgard com base no nível Sigma do exame"
        ],
        conteudo: [
          { tipo: "definicao", titulo: "Métrica Sigma", texto: "Indica quantos desvios padrão (sigmas) cabem dentro dos limites de tolerância do exame (TEa). Mede os defeitos por milhão de oportunidades (DPMO)." },
          { tipo: "formula", titulo: "Cálculo da Métrica Sigma", expressao: "Sigma = (TEa% − |Viés%|) ÷ CV%", legenda: "TEa: Erro Total Permitido (%) · Viés: Erro Sistemático (%) · CV: Coeficiente de Variação (%)" },
          { tipo: "tabela", cabecalho: ["Métrica Sigma", "Desempenho", "Estratégia de Controle Recomendada"], linhas: [
            ["> 6,0 Sigma", "Excelente (World Class)", "Apenas 1₂.₅ₛ ou 1₃ₛ (Mínimo esforço, baixíssima falsa rejeição)"],
            ["4,0 a 5,0 Sigma", "Bom / Aceitável", "Combinar regras simples (1₃ₛ / 2₂ₛ / R₄ₛ)"],
            ["< 3,0 Sigma", "Marginal / Inaceitável", "Exige múltiplas regras, maior frequência de controles e revisão do método"]
          ] }
        ],
        pontosChave: [
          "Quanto maior o Sigma, menor a necessidade de regras rígidas e menor o custo com rejeições falsas.",
          "Exames com Sigma < 3 exigem atenção imediata da gestão do laboratório."
        ]
      }
    ]
  },
  {
    id: "m5",
    titulo: "Controle Externo da Qualidade (Ensaio de Proficiência)",
    resumo: "Garantia da exatidão analítica através da comparação interlaboratorial e análise do SDI.",
    licoes: [
      {
        id: "m5-l1",
        titulo: "Controle Interno (CIQ) vs. Controle Externo (AEQ)",
        duracao: "7 min",
        objetivos: [
          "Diferenciar a finalidade do CIQ e do AEQ",
          "Entender a dinâmica dos programas de proficiência (Controllab, PNCQ, CAP)"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "Enquanto o Controle Interno (CIQ) avalia a **precisão diária** (se o método é reprodutível), o Controle Externo (AEQ ou Ensaio de Proficiência) avalia a **exatidão verdadeira** comparando o laboratório com centenas de outros estabelecimentos." },
          { tipo: "tabela", cabecalho: ["Característica", "Controle Interno (CIQ)", "Controle Externo (AEQ)"], linhas: [
            ["Frequência", "Diária / Por corrida analítica", "Mensal ou trimestral"],
            ["Valores", "Conhecidos pelo analista", "Amostras cegas (desconhecidas)"],
            ["Foco Principal", "Precisão (repetibilidade)", "Exatidão (ausência de viés exógeno)"],
            ["Comparação", "Consigo mesmo ao longo do tempo", "Com o Grupo Par (mesma metodologia)"]
          ] }
        ],
        pontosChave: [
          "O CIQ enxerga o dia a dia; o AEQ enxerga a exatidão em relação ao mercado.",
          "O ensaio de proficiência é obrigatório por legislação sanitária."
        ]
      },
      {
        id: "m5-l2",
        titulo: "Interpretação do Relatório de Proficiência e SDI",
        duracao: "9 min",
        objetivos: [
          "Calcular e interpretar o Índice de Desvio do Sistema (SDI / Z-Score Interlaboratorial)",
          "Elaborar planos de ação para resultados inadequados no ensaio de proficiência"
        ],
        conteudo: [
          { tipo: "definicao", titulo: "Índice de Desvio Padrão (SDI)", texto: "Mede o afastamento do resultado do seu laboratório em relação à média do Grupo Par de comparação no programa externo." },
          { tipo: "formula", titulo: "Cálculo do SDI", expressao: "SDI = (Resultado do Laboratório − Média do Grupo Par) ÷ SD do Grupo Par", legenda: "Grupo Par: laboratórios que usam a mesma marca de equipamento e reagente" },
          { tipo: "tabela", cabecalho: ["Faixa de SDI", "Avaliação", "Conduta Recomendada"], linhas: [
            ["0,0 a ±1,0", "Excelente", "Manter rotina analítica"],
            ["±1,1 a ±1,9", "Aceitável", "Monitorar tendência no CIQ"],
            ["±2,0 a ±3,0", "Inadequado / Alerta", "Investigar viés de calibração"],
            ["> ±3,0", "Inaceitável / Erro Grave", "Ação Corretiva Obrigatória e análise de impacto em laudos emitidos"]
          ] }
        ],
        pontosChave: [
          "SDI entre -1,5 e +1,5 indica excelente alinhamento com o mercado.",
          "Resultados inadequados no AEQ exigem Ação Corretiva formalizada para auditorias."
        ]
      }
    ]
  },
  {
    id: "m6",
    titulo: "Auditoria, Compliance e Gestão de Risco",
    resumo: "Legislação sanitária (RDC 786/2023), ISO 15189, PALC/DICQ, rastreabilidade e ações corretivas.",
    licoes: [
      {
        id: "m6-l1",
        titulo: "Normas Técnicas e Requisitos de Acreditação",
        duracao: "8 min",
        objetivos: [
          "Conhecer os requisitos da RDC 786/2023 da Anvisa para controle de qualidade",
          "Entender os pilares dos sistemas de acreditação (PALC, DICQ, ONA, ISO 15189)"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "No Brasil, a **RDC 786/2023 da Anvisa** estabelece que todo serviço de saúde que realiza exames de análises clínicas DEVE manter programa de controle interno e externo da qualidade registrado e auditável." },
          { tipo: "lista", itens: [
            "**Obrigatoriedade de Registro:** Todos os resultados de controles, calibradores, manutenções e ocorrências devem ficar armazenados por no mínimo 5 anos.",
            "**Acreditação Voluntária:** Programas como PALC (SBPC/ML) e DICQ (SBAC) atestam que a gestão da qualidade do laboratório segue padrões internacionais."
          ] }
        ],
        pontosChave: [
          "O controle de qualidade não é opcional: é exigência sanitária legal.",
          "Rastreabilidade de lotes, manutenções e calibrações é cobrança central em auditorias."
        ]
      },
      {
        id: "m6-l2",
        titulo: "Ação Corretiva, Rastreabilidade e Lookback",
        duracao: "10 min",
        objetivos: [
          "Estruturar um Relatório de Ação Corretiva (RAC) formal",
          "Realizar a avaliação retroativa de pacientes (Lookback) em caso de quebra de controle"
        ],
        conteudo: [
          { tipo: "definicao", titulo: "Análise de Causa Raiz (RCA)", texto: "Uso de metodologias como **5 Porquês** ou **Diagrama de Ishikawa (Espinha de Peixe)** para descobrir a causa fundamental de uma falha de qualidade, evitando que ela se repita." },
          { tipo: "definicao", titulo: "Avaliação Retroativa (Lookback)", texto: "Quando um controle é reprovado com erro sistemático severo, o analista deve determinar desde quando o erro esteve presente e **reavaliar/reprocessar os exames de pacientes** que foram liberados naquela janela de tempo." },
          { tipo: "atencao", titulo: "Passos da Ação Corretiva Auditável", texto: "1. **Bloqueio e Contenção:** Interromper liberações imediatamente.\n2. **Ação Imediata:** Corrigir a falha pontual (ex: recalibrar).\n3. **Investigação da Causa Raiz:** Descobrir por que a falha aconteceu.\n4. **Análise de Impacto:** Verificar se laudos incorretos foram emitidos a pacientes.\n5. **Ação Preventiva:** Alterar o processo para que o erro nunca mais ocorra." }
        ],
        pontosChave: [
          "Identificar a Causa Raiz previne a reincidência do problema.",
          "O Lookback protege a segurança do paciente quando uma falha analítica é detectada tardiamente."
        ]
      }
    ]
  }
];
