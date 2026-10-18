window.bancoDeExercicios = [
  {
    id: 1,
    titulo: "Pico Isolado no Controle (Regra 1_3s)",
    cenario: "O controle do Nível 1 do analito Ureia vinha com resultados perfeitamente estáveis nos últimos 15 dias. Hoje, o resultado do Nível 1 disparou para +3.2 DP. O Nível 2 passou com -0.1 DP.",
    dificuldade: "Iniciante",
    alternativas: [
      { id: "A", texto: "Liberar a rotina, pois o Nível 2 passou perfeitamente." },
      { id: "B", texto: "Rejeitar a corrida. Investigar erro aleatório (ex: bolha na seringa de aspiração, coágulo no controle)." },
      { id: "C", texto: "Rejeitar a corrida. Investigar erro sistemático (ex: degradação do reagente de Ureia)." }
    ],
    respostaCorreta: "B",
    feedback: "A violação da regra 1_3s isolada e abrupta em apenas um nível é característica de Erro Aleatório. Problemas como bolhas ou falha na pipetagem afetam amostras isoladas."
  },
  {
    id: 2,
    titulo: "Desvio Contínuo (Regra 2_2s)",
    cenario: "Na bancada de Imunologia, o controle de TSH Nível 1 obteve hoje +2.3 DP. Ontem, este mesmo controle havia obtido +2.1 DP.",
    dificuldade: "Iniciante",
    alternativas: [
      { id: "A", texto: "Rejeitar a corrida pela regra 2_2s. A causa provável é um Erro Sistemático (ex: calibração vencendo ou degradação da curva)." },
      { id: "B", texto: "Considerar como Alerta (Regra 1_2s) e liberar os pacientes, pois não chegou a 3 DP." },
      { id: "C", texto: "Rejeitar a corrida pela regra 2_2s. A causa provável é um Erro Aleatório (ex: oscilação na rede elétrica hoje)." }
    ],
    respostaCorreta: "A",
    feedback: "Dois controles consecutivos acima de 2 DP do MESMO lado da média configuram violação da 2_2s. Isso indica Erro Sistemático. Liberações devem ser suspensas até verificação de calibração ou reagente."
  },
  {
    id: 3,
    titulo: "Planejamento de Qualidade (Métrica Sigma Alta)",
    cenario: "O laboratório validou um novo kit para Colesterol. O Erro Total Permitido (TEa) é de 10%. O CV do laboratório é 1.2% e o Viés é 1.0%.",
    dificuldade: "Intermediário",
    alternativas: [
      { id: "A", texto: "O Sigma é 8.3. Deve-se aplicar todas as multiregras (10_x, 4_1s, 2_2s) para garantir a segurança." },
      { id: "B", texto: "O Sigma é 7.5. O processo é de classe mundial. Pode-se simplificar o CQ usando apenas a regra 1_3s para evitar falsas rejeições." },
      { id: "C", texto: "O Sigma é 2.0. O processo é instável e exige aumento imediato na frequência de passagem de controle." }
    ],
    respostaCorreta: "B",
    feedback: "Cálculo: Sigma = (TEa - Viés) / CV -> (10 - 1) / 1.2 = 7.5. Métodos com Sigma > 6 são extremamente robustos. Aplicar muitas regras de Westgard aqui só geraria falsas rejeições."
  },
  {
    id: 4,
    titulo: "Interpretação do Alerta (Regra 1_2s)",
    cenario: "No ensaio de Glicose, o controle Nível 2 de hoje obteve resultado de -2.4 DP. Todo o histórico dos últimos 20 dias está dentro de ±1 DP. A regra 1_3s não foi violada.",
    dificuldade: "Iniciante",
    alternativas: [
      { id: "A", texto: "Rejeitar imediatamente a rotina e recalibrar o equipamento." },
      { id: "B", texto: "Tratar a regra 1_2s como Alerta. Verificar as outras regras de Westgard; se nenhuma outra for violada, a corrida pode ser aceita." },
      { id: "C", texto: "Repetir o controle até que ele volte para dentro de 1 DP." }
    ],
    respostaCorreta: "B",
    feedback: "A regra 1_2s é desenhada para ser um gatilho de investigação, e não um critério automático de rejeição, especialmente quando isolada em um histórico excelente."
  },
  {
    id: 5,
    titulo: "Discrepância entre Níveis (Regra R_4s)",
    cenario: "Na mesma corrida analítica de Sódio, o controle Nível 1 apresentou valor correspondente a +2.2 DP, enquanto o controle Nível 2 apresentou -2.1 DP.",
    dificuldade: "Intermediário",
    alternativas: [
      { id: "A", texto: "Erro sistemático no equipamento. A lâmpada ou eletrodo está falhando para ambos." },
      { id: "B", texto: "A corrida é aceita pois nenhum passou de 3 DP." },
      { id: "C", texto: "Rejeição pela regra R_4s. Indica Erro Aleatório marcante na corrida atual (a amplitude entre os dois níveis ultrapassa 4 DP)." }
    ],
    respostaCorreta: "C",
    feedback: "A amplitude entre +2.2 e -2.1 é de 4.3 DP. A regra R_4s avalia justamente essa diferença brusca dentro de uma mesma corrida, sendo um forte indicativo de Erro Aleatório."
  },
  {
    id: 6,
    titulo: "O Efeito de Degradação (Regra 7T - Tendência)",
    cenario: "Observando o gráfico de Levey-Jennings de uma enzima (AST), nota-se que nos últimos 7 dias os resultados foram: -0.1, +0.2, +0.5, +0.8, +1.1, +1.4, +1.7 DP. Nenhum ultrapassou 2 DP ainda.",
    dificuldade: "Intermediário",
    alternativas: [
      { id: "A", texto: "Tendência sistemática. Sugere degradação progressiva do reagente, envelhecimento de lâmpada ou falha gradual no sistema de refrigeração." },
      { id: "B", texto: "Deslocamento (Shift). Sugere que o lote do reagente foi trocado há 7 dias." },
      { id: "C", texto: "Sem problemas, pois a regra 1_2s não foi violada. O laboratório pode seguir a rotina sem intervir." }
    ],
    respostaCorreta: "A",
    feedback: "Sete resultados consecutivos sempre subindo (ou sempre descendo) indicam uma Tendência (Trend). Isso exige manutenção preventiva, mesmo que os pontos ainda não tenham tocado as linhas de rejeição."
  },
  {
    id: 7,
    titulo: "A Troca de Lote (Regra 10_x)",
    cenario: "Desde o dia 10 do mês, todos os resultados de Hemoglobina (12 corridas seguidas) estão positivos, flutuando entre +0.4 DP e +1.5 DP. Antes disso, flutuavam ao redor do zero.",
    dificuldade: "Intermediário",
    alternativas: [
      { id: "A", texto: "Erro Aleatório. Houve um pico de variação na energia elétrica." },
      { id: "B", texto: "Deslocamento Sistemático (Shift). Investigar se houve troca de lote de reagente, calibrador ou manutenção corretiva que mudou o 'zero' do sistema." },
      { id: "C", texto: "Falsa Rejeição. Pontos em 0.4 DP a 1.5 DP são perfeitamente normais e não devem gerar alerta." }
    ],
    respostaCorreta: "B",
    feedback: "A regra 10_x detecta deslocamentos abruptos da média que se mantêm (Shift). É clássico em mudanças de lote sem o devido ajuste da calibração."
  },
  {
    id: 8,
    titulo: "Múltiplas Violações Leves (Regra 4_1s)",
    cenario: "Quatro dias consecutivos de controle do Nível 1 apresentaram os seguintes Z-Scores: -1.2, -1.8, -1.1, -1.5 DP.",
    dificuldade: "Intermediário",
    alternativas: [
      { id: "A", texto: "Violação da regra 4_1s. Indica erro sistemático. Como os 4 estão abaixo de -1 DP, o processo está enviesado para baixo." },
      { id: "B", texto: "Violação da regra R_4s. Rejeição imediata." },
      { id: "C", texto: "Aceitar a corrida. Regras que lidam com ±1 DP servem apenas para validação de métodos, não para rotina." }
    ],
    respostaCorreta: "A",
    feedback: "A regra 4_1s (4 resultados seguidos no mesmo lado, além de 1 DP) é um alerta precoce e eficiente de erro sistemático moderado."
  },
  {
    id: 9,
    titulo: "Desempenho Crítico e Gestão de Risco",
    cenario: "O analito Potássio possui uma qualidade necessária (TEa) muito estreita. O laboratório calculou o Sigma deste exame e obteve 2.8.",
    dificuldade: "Avançado",
    alternativas: [
      { id: "A", texto: "Aplicar apenas a regra 1_3s e testar controles apenas 1x ao dia, pois o exame já exige muita atenção clínica." },
      { id: "B", texto: "Aumentar a frequência do controle (ex: a cada 50 amostras) e ativar multiregras completas para maximizar a detecção de erros." },
      { id: "C", texto: "Adotar limites mais elásticos no equipamento para evitar retenções constantes." }
    ],
    respostaCorreta: "B",
    feedback: "Um processo com Sigma < 3 é considerado 'pobre' ou 'marginal'. Exige monitoramento rigoroso, multiregras estritas e aumento na frequência de CQ para garantir segurança aos pacientes."
  },
  {
    id: 10,
    titulo: "Problemas na Cultura de Qualidade",
    cenario: "O equipamento foi calibrado recentemente e passou perfeitamente nos controles. Dois dias depois, a corrida falhou na regra 1_3s. O analista repetiu o controle no mesmo frasco e ele passou (+0.8 DP). Ele liberou a rotina. Qual a avaliação desta conduta?",
    dificuldade: "Avançado",
    alternativas: [
      { id: "A", texto: "Conduta correta. A primeira falha foi provavelmente bolha. A repetição validou o ensaio." },
      { id: "B", texto: "Conduta correta. Regras estatísticas preveem até 5% de falhas falsas." },
      { id: "C", texto: "Conduta inadequada. Repetir o controle até 'passar' sem investigar mascara erros intermitentes e destrói o poder estatístico das Regras de Westgard." }
    ],
    respostaCorreta: "C",
    feedback: "A prática de 'testar até passar' é um dos erros mais graves na gestão laboratorial. O erro aleatório inicial não foi resolvido, apenas mascarado na segunda passagem, colocando amostras em risco."
  }
];
