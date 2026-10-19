/* =====================================================================
   QUALILAB · TRILHA DE ESTUDOS ("Aprendendo do Zero")
   =====================================================================
   Este arquivo só guarda CONTEÚDO. Para acrescentar material, edite aqui; o index.html não muda.

   ESTRUTURA
     window.trilhaEstudos = [ módulo, módulo, ... ]

     módulo = {
       id:      "m1"                    // texto único, sem espaços (não mude depois de publicar)
       titulo:  "Conceitos Básicos"     // o "Módulo 1" é numerado automaticamente pela posição
       resumo:  "frase curta"           // opcional
       licoes:  [ lição, lição, ... ]   // a numeração 1.1, 1.2... também é automática
     }

     lição = {
       id:          "m1-l1"             // único em TODA a trilha (usado para salvar o progresso)
       titulo:      "O que é Média e SD?"
       duracao:     "8 min"             // opcional
       objetivos:   ["...", "..."]      // opcional: "Ao final desta lição você vai..."
       conteudo:    [ bloco, bloco, ... ]
       pontosChave: ["...", "..."]      // opcional: resumo no fim da lição
     }

   BLOCOS DE CONTEÚDO (campo "tipo")
     { tipo: "titulo",    texto }                       subtítulo dentro da lição
     { tipo: "paragrafo", texto }                       parágrafo; **negrito** e *itálico* funcionam dentro do texto
     { tipo: "lista",     itens: [texto, ...] }         lista com marcadores
     { tipo: "definicao", titulo, texto }               caixa azul de definição
     { tipo: "formula",   titulo, expressao, legenda }  caixa escura de fórmula (legenda opcional)
     { tipo: "exemplo",   titulo, texto | passos: [] }  caixa amarela; "passos" vira lista numerada
     { tipo: "atencao",   titulo, texto }               caixa vermelha de cuidado
     { tipo: "tabela",    cabecalho: [...], linhas: [[...], ...] }

   Dica: lição ou bloco com formato inválido é ignorado (com aviso no console do navegador,
   F12), sem derrubar o resto do curso. Todos os valores dos exemplos são FICTÍCIOS.
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
          { tipo: "paragrafo", texto: "A média sozinha não conta a história toda. Dois conjuntos podem ter a mesma média e comportamentos muito diferentes: um com resultados muito próximos entre si e outro com resultados muito espalhados. O **desvio padrão** (SD, do inglês *standard deviation*) mede esse espalhamento: quanto maior o SD, mais dispersos estão os resultados." },
          { tipo: "definicao", titulo: "Desvio padrão (SD)", texto: "Mede o quanto os resultados costumam se afastar da média. Tem a mesma unidade do resultado (mg/dL, U/L etc.)." },
          { tipo: "formula", titulo: "SD amostral", expressao: "SD = √[ Σ(xᵢ − x̄)² ÷ (N − 1) ]", legenda: "Σ: soma · (xᵢ − x̄): distância de cada resultado até a média · N − 1: correção usada para amostras" },
          { tipo: "paragrafo", texto: "As distâncias até a média são **elevadas ao quadrado** para que valores negativos e positivos não se cancelem na soma. No final, a raiz quadrada devolve o resultado à unidade original." },
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
          { tipo: "exemplo", titulo: "Exemplo (valores fictícios)", texto: "Com o exemplo da lição anterior (média 100 e SD ≈ 1,58): CV% = (1,58 ÷ 100) × 100 ≈ 1,58%." },
          { tipo: "titulo", texto: "Comparando dois níveis de controle" },
          { tipo: "tabela", cabecalho: ["Nível de controle", "Média", "SD", "CV%"], linhas: [["Nível 1", "50", "2", "4,0%"], ["Nível 2", "200", "6", "3,0%"]] },
          { tipo: "paragrafo", texto: "O Nível 2 tem o **maior SD** (6 contra 2), mas o **menor CV%** (3% contra 4%): em termos relativos, ele é mais preciso. Olhar só o SD levaria a uma conclusão enganosa." },
          { tipo: "atencao", titulo: "Média perto de zero", texto: "Quando a média é próxima de zero, o CV% fica enorme ou impossível de calcular (divisão por zero). Nesses casos, interprete-o com cautela." },
          { tipo: "paragrafo", texto: "Quanto menor o CV%, melhor a precisão. Mas o valor **aceitável** depende do analito, do método e dos requisitos de qualidade definidos pelo laboratório: não existe um número único para tudo." }
        ],
        pontosChave: [
          "CV% = SD ÷ |média| × 100: imprecisão em relação ao tamanho da média.",
          "Permite comparar níveis e métodos com concentrações diferentes.",
          "O limite aceitável de CV% depende do analito e dos requisitos do laboratório."
        ]
      },
      {
        id: "m1-l3",
        titulo: "Precisão, exatidão e viés",
        duracao: "7 min",
        objetivos: [
          "Diferenciar precisão e exatidão",
          "Calcular o viés em relação ao alvo",
          "Associar cada tipo de erro ao seu efeito nos resultados"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "Imagine lançar dardos em um alvo. Os dardos podem ficar **agrupados** entre si e, ao mesmo tempo, **longe do centro**. Esse agrupamento e a proximidade do centro são duas qualidades diferentes, e o laboratório precisa das duas." },
          { tipo: "definicao", titulo: "Precisão", texto: "Concordância entre resultados repetidos do mesmo material. Mede-se com SD e CV%. O **erro aleatório** reduz a precisão." },
          { tipo: "definicao", titulo: "Exatidão (veracidade)", texto: "Proximidade entre a média dos resultados e o valor-alvo. Mede-se com o viés. O **erro sistemático** afeta a exatidão." },
          { tipo: "formula", titulo: "Viés", expressao: "Viés = média obtida − alvo\nViés % = (média obtida − alvo) ÷ |alvo| × 100", legenda: "Viés positivo: resultados acima do alvo · viés negativo: abaixo do alvo" },
          { tipo: "exemplo", titulo: "Exemplo (valores fictícios)", texto: "Alvo = 100 e média obtida = 103. Viés = +3 (ou +3%). Se o SD for pequeno, os resultados estão agrupados, porém deslocados: sinal de erro sistemático." },
          { tipo: "tabela", cabecalho: ["Situação dos resultados", "Precisão", "Exatidão"], linhas: [
            ["Agrupados e centrados no alvo", "Alta", "Alta"],
            ["Agrupados, mas longe do alvo", "Alta", "Baixa (há viés)"],
            ["Espalhados, em torno do alvo", "Baixa", "Média próxima do alvo"],
            ["Espalhados e longe do alvo", "Baixa", "Baixa"]
          ] },
          { tipo: "lista", itens: [
            "**Erro aleatório:** imprevisível, para cima ou para baixo. Aumenta o SD e o CV%.",
            "**Erro sistemático:** empurra os resultados sempre para o mesmo lado. Desloca a média e gera viés."
          ] }
        ],
        pontosChave: [
          "Precisão: quão próximos entre si (SD, CV%). Exatidão: quão perto do alvo (viés).",
          "Erro aleatório afeta a precisão; erro sistemático afeta a exatidão.",
          "Viés = média obtida − alvo."
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
          { tipo: "paragrafo", texto: "O **controle interno da qualidade** é a análise rotineira de materiais de controle, junto com as amostras dos pacientes e pelo mesmo procedimento. Se o resultado do controle está dentro do esperado, há indício de que o processo analítico está funcionando. Se não está, é um sinal de que algo pode ter mudado." },
          { tipo: "definicao", titulo: "Material de controle", texto: "Amostra estável, com comportamento conhecido, processada como se fosse uma amostra de rotina. Não é o mesmo que calibrador." },
          { tipo: "definicao", titulo: "Nível de controle", texto: "Cada concentração diferente do material de controle (por exemplo, baixa, intermediária e alta). Usar mais de um nível permite verificar o método em faixas diferentes." },
          { tipo: "definicao", titulo: "Corrida analítica", texto: "Conjunto de análises feitas sob as mesmas condições, com seus controles. No simulador, cada “dia” representa uma corrida." },
          { tipo: "titulo", texto: "Para que serve" },
          { tipo: "lista", itens: [
            "Detectar mudanças no desempenho do método **antes** que afetem resultados de pacientes.",
            "Distinguir a variação normal de um problema real.",
            "Gerar registro para auditoria e rastreabilidade."
          ] },
          { tipo: "atencao", titulo: "Conteúdo educacional", texto: "Os exemplos desta trilha usam valores fictícios. Frequência, número de níveis e regras de decisão reais seguem os procedimentos e requisitos do seu laboratório." }
        ],
        pontosChave: [
          "Controle interno = material de controle analisado junto com a rotina.",
          "Cada concentração do controle é um nível; cada conjunto de análises é uma corrida.",
          "O objetivo é perceber mudanças no método antes de afetar pacientes."
        ]
      },
      {
        id: "m2-l2",
        titulo: "A curva normal e os limites de ±1, ±2 e ±3 SD",
        duracao: "8 min",
        objetivos: [
          "Relacionar a curva normal às faixas de ±1, ±2 e ±3 SD",
          "Calcular os limites a partir do alvo e do SD esperado"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "Quando só o acaso atua, os resultados de um controle tendem a formar uma curva em forma de sino (**distribuição normal**), centrada na média." },
          { tipo: "tabela", cabecalho: ["Faixa em torno da média", "Proporção esperada dos resultados"], linhas: [["± 1 SD", "cerca de 68%"], ["± 2 SD", "cerca de 95%"], ["± 3 SD", "cerca de 99,7%"]] },
          { tipo: "paragrafo", texto: "Na prática: por puro acaso, cerca de **5%** dos resultados ficam além de ±2 SD e apenas cerca de **0,3%** além de ±3 SD. Por isso um ponto além de 3 SD é um sinal forte, enquanto um além de 2 SD é apenas um aviso." },
          { tipo: "definicao", titulo: "Alvo e SD esperado", texto: "O alvo é a média esperada do controle e o SD esperado é a dispersão esperada. Em geral, são estabelecidos a partir de um período de dados do próprio laboratório (ou de informações do fabricante) e depois mantidos como referência." },
          { tipo: "formula", titulo: "Limites de controle", expressao: "limite = alvo ± k × SD esperado", legenda: "k = 1, 2 ou 3" },
          { tipo: "exemplo", titulo: "Exemplo (valores fictícios)", passos: [
            "Alvo = 100 e SD esperado = 4.",
            "±1 SD: de 96 a 104.",
            "±2 SD: de 92 a 108.",
            "±3 SD: de 88 a 112."
          ] },
          { tipo: "atencao", titulo: "No QualiLab", texto: "Os limites dos gráficos vêm do Alvo e do SD esperado que você configura, e não da média dos pontos digitados." }
        ],
        pontosChave: [
          "Cerca de 68%, 95% e 99,7% dos resultados caem em ±1, ±2 e ±3 SD.",
          "Além de 2 SD é aviso (≈5% por acaso); além de 3 SD é sinal forte (≈0,3%).",
          "Limite = alvo ± k × SD esperado."
        ]
      },
      {
        id: "m2-l3",
        titulo: "Z-Score: comparando níveis na mesma régua",
        duracao: "6 min",
        objetivos: [
          "Calcular o Z-Score de um resultado",
          "Entender por que ele permite comparar níveis diferentes"
        ],
        conteudo: [
          { tipo: "paragrafo", texto: "Níveis de controle diferentes têm alvos e SDs diferentes, o que dificulta compará-los. O Z-Score resolve isso dizendo **a quantos desvios padrão do alvo** está cada resultado." },
          { tipo: "formula", titulo: "Z-Score (também chamado SDI)", expressao: "Z = (resultado − alvo) ÷ SD esperado", legenda: "Z = 0: no alvo · Z = +2: 2 SD acima · Z = −1: 1 SD abaixo" },
          { tipo: "exemplo", titulo: "Exemplo (valores fictícios)", passos: [
            "Nível 1: alvo 50, SD 2, resultado 54 → Z = (54 − 50) ÷ 2 = +2,0.",
            "Nível 2: alvo 200, SD 8, resultado 192 → Z = (192 − 200) ÷ 8 = −1,0.",
            "Mesmo com escalas tão diferentes, os dois cabem no mesmo eixo."
          ] },
          { tipo: "paragrafo", texto: "A leitura é direta: Z próximo de 0 indica resultado perto do alvo; |Z| acima de 2 pede atenção; |Z| acima de 3 ultrapassa o limite clássico de rejeição. É o que mostra o gráfico “Todos juntos (Z-Score)” do Painel de Controle." }
        ],
        pontosChave: [
          "Z = (resultado − alvo) ÷ SD esperado.",
          "Z indica a distância ao alvo em desvios padrão, sem depender da unidade.",
          "Permite plotar vários níveis no mesmo gráfico."
        ]
      },
      {
        id: "m2-l4",
        titulo: "Lendo o gráfico de Levey-Jennings",
        duracao: "6 min",
        objetivos: [
          "Identificar os elementos do gráfico",
          "Reconhecer padrões que merecem atenção"
        ],
        conteudo: [
          { tipo: "definicao", titulo: "Gráfico de Levey-Jennings", texto: "Gráfico de controle em que cada resultado do material de controle é marcado em ordem cronológica (eixo X: dias ou corridas; eixo Y: valor medido), com linhas na média e em ±1, ±2 e ±3 SD." },
          { tipo: "titulo", texto: "O que observar" },
          { tipo: "lista", itens: [
            "**Pontos isolados distantes** (além de 2 ou 3 SD): sugerem erro aleatório.",
            "**Vários pontos seguidos do mesmo lado da média:** sugerem erro sistemático.",
            "**Pontos subindo ou descendo de forma contínua:** sugerem uma tendência (deriva gradual).",
            "**Resultados muito espalhados:** sugerem aumento da imprecisão."
          ] },
          { tipo: "atencao", titulo: "Próximo passo", texto: "Ler o gráfico a olho é só o começo. As regras de Westgard, na aba Modo Treinamento, transformam esses padrões em critérios objetivos." }
        ],
        pontosChave: [
          "O gráfico mostra o comportamento do controle ao longo do tempo.",
          "Pontos isolados, sequências do mesmo lado e tendências indicam tipos diferentes de erro.",
          "As regras de Westgard tornam a leitura objetiva."
        ]
      }
    ]
  }
];
