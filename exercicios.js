/* =====================================================================
   QualiLab · Banco de Exercícios (estático)
   ---------------------------------------------------------------------
   Para ADICIONAR um exercício: copie um objeto abaixo, troque o "id"
   (único), edite os textos e cole no fim do array. Não é preciso mexer
   no index.html.

   FORMATO DE CADA EXERCÍCIO
   {
     id:             "ex-004"            // obrigatório, único
     titulo:         "..."               // obrigatório
     dificuldade:    "Básico" | "Intermediário" | "Avançado"
     cenario:        "..."               // cenário clínico/laboratorial
     grafico: {                          // OPCIONAL (sem gráfico = só texto)
       analito: "Glicose", unidade: "mg/dL",
       niveis: [                         // 1 a 3 níveis; mesma quantidade de dias em todos
         { nome: "Nível 1", alvo: 90, sd: 2.5, resultados: [90.5, 89, ...] }
       ]                                 // resultados em unidade real (o app converte em Z-Score);
     },                                  // todos precisam ser números, mínimo 2 dias
     configRegras:   { "10_x": "alerta" }// OPCIONAL: muda a severidade de regras só neste exercício
                                         // (valores: "off" | "alerta" | "rejeicao"; o padrão é o clássico)
     pergunta:       "..."
     alternativas:   [ { id: "a", texto: "...", comentario: "..." (opcional, mostrado se errar) } ]
     respostaCorreta:"b"                 // id de uma das alternativas
     justificativa:  "..."               // feedback técnico, mostrado após responder
   }
   ===================================================================== */
window.bancoDeExercicios = [
  {
    id: "ex-001",
    titulo: "Creatinina: um ponto isolado muito distante",
    dificuldade: "Básico",
    cenario: "Bioquímica, analisador automatizado, creatinina pelo método de Jaffé cinético. Após a calibração semanal, o analista processa os controles internos (Nível 1 normal e Nível 2 patológico) antes da rotina da manhã. Nos seis primeiros dias tudo estava estável. No Dia 7, o Nível 1 deu 1,18 mg/dL, enquanto o Nível 2 ficou dentro do esperado na mesma corrida.",
    grafico: {
      analito: "Creatinina", unidade: "mg/dL",
      niveis: [
        { nome: "Nível 1", alvo: 1.0, sd: 0.05, resultados: [1.02, 0.97, 1.04, 0.99, 1.01, 0.96, 1.18, 1.00] },
        { nome: "Nível 2", alvo: 4.0, sd: 0.16, resultados: [4.05, 3.92, 4.08, 3.97, 4.03, 4.10, 4.12, 3.98] }
      ]
    },
    pergunta: "Qual regra de rejeição de Westgard foi violada no Dia 7?",
    alternativas: [
      { id: "a", texto: "2₂s: dois resultados consecutivos além de 2 SD, do mesmo lado", comentario: "Só um resultado está fora; o Dia 6 do Nível 1 está dentro dos limites." },
      { id: "b", texto: "1₃s: um resultado além de ±3 SD" },
      { id: "c", texto: "R₄s: um resultado acima de +2 SD e outro abaixo de −2 SD na mesma corrida", comentario: "O Nível 2 do Dia 7 está dentro dos limites, então não há pontos em lados opostos." },
      { id: "d", texto: "4₁s: quatro resultados consecutivos além de 1 SD do mesmo lado", comentario: "Os pontos anteriores oscilam em torno do alvo; não há sequência do mesmo lado." }
    ],
    respostaCorreta: "b",
    justificativa: "O Nível 1 do Dia 7 (1,18 mg/dL) está a +3,6 SD do alvo, além do limite de +3 SD: violação de 1₃s, regra de rejeição associada principalmente a erro aleatório. O ponto também passa de 2 SD, mas quando o desvio ultrapassa 3 SD a regra aplicável é a 1₃s. Como o Nível 2 estava normal na mesma corrida, vale investigar primeiro o que é específico do Nível 1 (preparo, estabilidade e manuseio do controle, pipetagem), antes de suspeitar de calibração. A corrida deve ser bloqueada até a causa ser esclarecida e os controles repetidos."
  },
  {
    id: "ex-002",
    titulo: "Glicose: troca de lote de reagente sem recalibração",
    dificuldade: "Intermediário",
    cenario: "Laboratório de urgência, glicose por hexoquinase. No Dia 5 um novo lote de reagente foi aberto e a calibração não foi refeita. Desde então, os dois níveis de controle aparecem acima de +2 SD, e no Dia 7 continuam elevados. Os resultados de pacientes da manhã ainda não foram liberados.",
    grafico: {
      analito: "Glicose", unidade: "mg/dL",
      niveis: [
        { nome: "Nível 1", alvo: 90, sd: 2.5, resultados: [90.5, 89.0, 91.0, 89.5, 95.8, 96.3, 95.5] },
        { nome: "Nível 2", alvo: 250, sd: 6, resultados: [251, 247, 253, 249, 264.5, 263.0, 262.5] }
      ]
    },
    pergunta: "Frente a este gráfico, qual a decisão correta?",
    alternativas: [
      { id: "a", texto: "Liberar a rotina: nenhum controle passou de 3 SD", comentario: "Estar abaixo de 3 SD não basta: dois resultados seguidos além de 2 SD do mesmo lado já rejeitam a corrida (2₂s)." },
      { id: "b", texto: "Bloquear a liberação, verificar calibração e lote de reagente (recalibrar com o lote novo), repetir os controles e só então liberar" },
      { id: "c", texto: "Repetir apenas o Nível 1 e liberar se o resultado cair dentro dos limites", comentario: "Os dois níveis estão deslocados na mesma direção: é um problema do processo, não de um controle isolado." },
      { id: "d", texto: "Aumentar o SD esperado para que os pontos voltem a ficar dentro dos limites", comentario: "Alargar os limites esconde o erro sem corrigi-lo e compromete a detecção futura." }
    ],
    respostaCorreta: "b",
    justificativa: "Há 2₂s (Níveis 1 e 2 acima de +2 SD em corridas consecutivas) e também 4₁s entre níveis: quatro resultados seguidos além de +1 SD. Os dois níveis se deslocaram juntos e para o mesmo lado, padrão típico de erro sistemático, e o início coincide com a troca de lote sem recalibração, o que torna a calibração e o lote os primeiros suspeitos. A conduta é bloquear a liberação, recalibrar com o lote novo (verificando validade e armazenamento do reagente e do calibrador), repetir os controles e liberar apenas com controles aceitáveis. Também é preciso avaliar o impacto nos resultados já emitidos desde o Dia 5, conforme o POP."
  },
  {
    id: "ex-003",
    titulo: "Potássio: sequência de 10 resultados acima do alvo",
    dificuldade: "Avançado",
    cenario: "Potássio por eletrodo íon-seletivo. O laboratório trabalha com método de desempenho elevado (Sigma alto) e, pelo seu planejamento da qualidade, o POP classifica a regra 10ₓ como ALERTA, não como rejeição. Nos últimos 10 dias, todos os resultados do controle ficaram do lado positivo do alvo, sempre dentro de 1 SD. As demais regras não foram violadas.",
    grafico: {
      analito: "Potássio", unidade: "mmol/L",
      niveis: [
        { nome: "Nível 1", alvo: 4.0, sd: 0.1, resultados: [4.03, 4.06, 4.02, 4.08, 4.05, 4.04, 4.09, 4.03, 4.07, 4.06] }
      ]
    },
    configRegras: { "10_x": "alerta" },
    pergunta: "Considerando o POP deste laboratório, qual a conduta mais adequada?",
    alternativas: [
      { id: "a", texto: "Rejeitar a corrida e bloquear toda a rotina até o problema ser resolvido", comentario: "Esta seria a conduta se o POP tratasse 10ₓ como rejeição; aqui a regra é um alerta." },
      { id: "b", texto: "Liberar com cautela, registrar a ocorrência, investigar a tendência (calibração dos eletrodos, lote de reagente, manutenção) e acompanhar os próximos controles" },
      { id: "c", texto: "Ignorar: nenhum ponto passou de 2 SD", comentario: "Dez resultados do mesmo lado indicam deslocamento do processo mesmo sem nenhum ponto fora dos limites." },
      { id: "d", texto: "Descartar o lote do controle e refazer os dez dias de controle", comentario: "Medida desproporcional: não há evidência de que o material de controle seja o problema, e os dias já medidos não se refazem." }
    ],
    respostaCorreta: "b",
    justificativa: "Dez resultados consecutivos do mesmo lado da média (10ₓ) sugerem viés persistente, um erro sistemático pequeno que ainda não ultrapassou os limites. Se essa regra é configurada como alerta, ela serve para investigar a tendência sem bloquear a rotina: registrar a ocorrência, verificar calibração e condição dos eletrodos, lote de reagente e manutenções, e acompanhar os próximos controles. A classificação de regras de longo prazo como alerta ou rejeição depende do planejamento da qualidade e do Sigma do método: se o POP tratasse 10ₓ como rejeição, a conduta seria bloquear a liberação, corrigir e repetir os controles. Se o padrão persistir ou surgir outra violação, a investigação deve ser ampliada, conforme o POP."
  }
];
