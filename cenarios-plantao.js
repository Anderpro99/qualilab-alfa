/* =====================================================================
   LabSim — complemento (carregue DEPOIS de cenarios-plantao.js).
   1) Corrige a opção duplicada com "taxa:" no nó n2b do primeiro caso.
   2) Anexa gráficos de Levey-Jennings a nós dos casos existentes.
   3) Acrescenta dois casos novos.
   Quando quiser, você pode mover tudo para o arquivo principal: um nó pode
   ter  grafico: { analito, unidade, niveis: [{ nome, alvo, sd, resultados: [...] }] }
   ===================================================================== */
(function () {
  const L = window.cenariosPlantao = Array.isArray(window.cenariosPlantao) ? window.cenariosPlantao : [];
  const nv = (nome, alvo, sd, resultados) => ({ nome, alvo, sd, resultados });
  const gr = (analito, unidade, niveis) => ({ analito, unidade, niveis });

  /* ---- 1) correção do erro de digitação ---- */
  const c1 = L.find(c => c.id === "bioq-manha-glicose");
  if (c1 && c1.nos.n2b) c1.nos.n2b.opcoes = c1.nos.n2b.opcoes.filter(o => o && o.texto);

  /* ---- 2) gráficos dos casos existentes (chave: id do caso -> id do nó) ---- */
  const gN1 = [100.5, 99, 101.5, 98.5, 100, 101, 99.5], gN2 = [252, 247, 255, 249, 251, 246, 253];
  const naN1 = [135.4, 134.6, 135.2, 136, 134.8, 135.6, 134.4], naN2 = [150.5, 149.2, 150.8, 149.6, 151, 149.4, 150.2];
  const alt = [40.4, 40.8, 41.2, 41.8, 42.4, 43, 43.6];
  const G = {
    "bioq-manha-glicose": {
      n1: gr("Glicose", "mg/dL", [nv("Nível 1", 100, 3, [...gN1, 107.5]), nv("Nível 2", 250, 8, [...gN2, 270])]),
      n3: gr("Glicose", "mg/dL", [nv("Nível 1", 100, 3, [...gN1, 107.5, 100.8]), nv("Nível 2", 250, 8, [...gN2, 270, 247])])
    },
    "eletrolitos-r4s": {
      r4s_1: gr("Sódio", "mmol/L", [nv("Nível 1", 135, 2, [...naN1, 139.8]), nv("Nível 2", 150, 2.5, [...naN2, 144.25])]),
      r4s_sucesso: gr("Sódio", "mmol/L", [nv("Nível 1", 135, 2, [...naN1, 139.8, 135.4]), nv("Nível 2", 150, 2.5, [...naN2, 144.25, 149.75])])
    },
    "enzimas-7t": {
      t7_1: gr("ALT", "U/L", [nv("Controle", 40, 2, alt)]),
      t7_sucesso: gr("ALT", "U/L", [nv("Controle", 40, 2, [...alt, 40.2])])
    }
  };
  L.forEach(c => { const g = G[c.id]; if (g) Object.entries(g).forEach(([n, gf]) => { if (c.nos[n]) c.nos[n].grafico = gf; }); });

  /* ---- 3) casos novos ---- */
  const inr = [2.49, 2.46, 2.54, 2.58, 2.52, 2.59, 2.56, 2.55, 2.58, 2.53, 2.57, 2.58];
  const tn1 = [0.49, 0.51, 0.5, 0.52, 0.48, 0.51, 0.505], tn2 = [1.98, 2.03, 2.01, 1.95, 2.04, 1.99, 2.02];
  const novos = [
    {
      id: "coag-inr-10x",
      titulo: "Coagulação: o viés que ninguém viu (regra 10ₓ)",
      setor: "Coagulação", dificuldade: "Intermediário", limiteAtraso: 90, inicio: "c1",
      descricao: "Plantão da tarde na Coagulação. Ao revisar o gráfico do controle de INR, você nota que os últimos 10 pontos ficaram todos acima do alvo. Nenhum passou de 1 SD, e o equipamento passou por manutenção preventiva há 10 dias. A fila inclui muitos pacientes em uso de varfarina.",
      nos: {
        c1: {
          hora: "14:00", titulo: "Dez pontos do mesmo lado",
          texto: "Cada ponto, isolado, parece aceitável. Mas os 10 últimos controles de INR estão todos do mesmo lado do alvo.",
          dados: [["Regra 10_x", "10 pontos seguidos acima do alvo"], ["Maior ponto", "+0,9 SD"]],
          grafico: gr("INR (controle)", "", [nv("Controle", 2.5, 0.1, inr)]),
          opcoes: [
            { texto: "Ignorar: todos os pontos estão dentro de ±1 SD.", proximo: "fim_a", impacto: { atraso: 0, qualidade: -25, seguranca: -25 },
              feedback: "A 10_x existe para enxergar viés pequeno e persistente que nenhum ponto isolado revela. Em pacientes anticoagulados, um INR levemente alto pode levar à redução indevida de dose." },
            { texto: "Reconhecer a violação 10_x como sinal de erro sistemático e investigar o que mudou há 10 dias.", proximo: "c2", impacto: { atraso: 10, qualidade: 5, seguranca: 5 },
              feedback: "Conduta correta: a sequência de 10 pontos do mesmo lado aponta para um deslocamento do processo, e o início dele coincide com a manutenção." },
            { texto: "Mover o alvo do controle para a média atual, para o gráfico voltar a ficar centrado.", proximo: "fim_b", impacto: { atraso: 0, qualidade: -30, seguranca: -25 },
              feedback: "Reajustar o alvo esconde o viés em vez de corrigi-lo. O erro continua chegando aos pacientes." }
          ]
        },
        c2: {
          hora: "14:20", titulo: "O que mudou há 10 dias",
          texto: "O registro mostra que, na manutenção preventiva, foi aberto um lote novo de tromboplastina. O valor de ISI do lote novo não foi atualizado no equipamento, e um ISI incorreto causa viés pequeno e constante no INR.",
          dados: [["Manutenção preventiva", "há 10 dias"], ["Lote de reagente", "novo, ISI não atualizado"]],
          opcoes: [
            { texto: "Corrigir o ISI do lote no sistema, validar com controles novos e documentar.", proximo: "c3", impacto: { atraso: 15, qualidade: 15, seguranca: 10 },
              feedback: "Ação sobre a causa, seguida de verificação com controles. É assim que se fecha o ciclo de um erro sistemático." },
            { texto: "Manter o ISI como está e anotar a ocorrência para discutir na reunião do mês.", proximo: "fim_d", impacto: { atraso: 0, qualidade: -25, seguranca: -30 },
              feedback: "Saber da causa e manter o erro ativo transforma um desvio em falha de gestão." }
          ]
        },
        c3: {
          hora: "15:00", titulo: "E os laudos dos últimos 10 dias?",
          texto: "Com o ISI corrigido, o controle voltou ao alvo. Durante 10 dias, porém, os INR de pacientes em uso de varfarina saíram com leve viés positivo, e alguns médicos podem ter ajustado doses com base neles.",
          dados: [["Controle de hoje", "2,50 (Z = 0,0)"], ["Período afetado", "10 dias"]],
          grafico: gr("INR (controle)", "", [nv("Controle", 2.5, 0.1, [...inr, 2.5])]),
          opcoes: [
            { texto: "Fazer a revisão retrospectiva: identificar os INR do período, avaliar o impacto e comunicar os médicos dos pacientes afetados.", proximo: "fim_ok", impacto: { atraso: 20, qualidade: 15, seguranca: 25 },
              feedback: "A revisão retrospectiva (lookback) e a comunicação reduzem o dano clínico do erro que já havia saído." },
            { texto: "Seguir só com resultados novos corretos e arquivar o caso.", proximo: "fim_atencao", impacto: { atraso: 0, qualidade: -10, seguranca: -25 },
              feedback: "O problema foi corrigido, mas os pacientes que receberam laudos com viés continuam sem aviso." }
          ]
        },
        fim_ok: { fim: true, resultado: "seguro", titulo: "Viés detectado e tratado por completo", texto: "Você reconheceu a 10_x, achou a causa, corrigiu o ISI e comunicou o impacto aos médicos.", licao: "A regra 10_x enxerga o que o olho não vê em pontos isolados. Corrigir a causa e revisar o passado fecha o ciclo da qualidade." },
        fim_atencao: { fim: true, resultado: "atencao", titulo: "Causa corrigida, impacto não tratado", texto: "O erro parou, mas pacientes anticoagulados ficaram sem a revisão dos laudos do período afetado.", licao: "Corrigir o futuro não basta quando já houve resultados liberados com viés." },
        fim_a: { fim: true, resultado: "falha", titulo: "Viés ignorado", texto: "A sequência de 10 pontos foi tratada como normal, e o viés continuou afetando o INR de pacientes anticoagulados.", licao: "Estar dentro de ±1 SD não basta: um viés pequeno e persistente também é erro sistemático." },
        fim_b: { fim: true, resultado: "falha", titulo: "Alvo ajustado para esconder o viés", texto: "Ao mover o alvo, o gráfico ficou bonito, mas o erro continuou nos resultados dos pacientes.", licao: "O alvo de um controle não deve ser alterado para acompanhar um desvio do método." },
        fim_d: { fim: true, resultado: "falha", titulo: "Causa conhecida e mantida", texto: "A causa foi identificada, mas o erro seguiu ativo até a reunião mensal.", licao: "Uma causa de erro sistemático identificada deve ser corrigida antes de continuar liberando resultados." }
      }
    },
    {
      id: "imuno-troponina-1-3s",
      titulo: "Imunoensaio na madrugada: urgência de dor torácica e controle 1₃s",
      setor: "Imunoensaios", dificuldade: "Básico", limiteAtraso: 60, inicio: "t1",
      descricao: "São 22h40 no plantão noturno. Uma amostra urgente de troponina, de um paciente com dor torácica, acaba de chegar do Pronto-Socorro. Ao rodar os controles do ensaio, o nível 1 aparece muito acima do alvo.",
      nos: {
        t1: {
          hora: "22:40", titulo: "Controle fora e urgência esperando",
          texto: "O controle de nível 1 passou de +3 SD e o nível 2 está dentro dos limites. O médico quer o resultado o mais rápido possível.",
          dados: [["Troponina N1", "0,602 ng/mL (Z = +3,4)"], ["Troponina N2", "2,08 ng/mL (Z = +0,8)"], ["Pendente", "1 urgência (dor torácica)"]],
          grafico: gr("Troponina", "ng/mL", [nv("Nível 1", 0.5, 0.03, [...tn1, 0.602]), nv("Nível 2", 2, 0.1, [...tn2, 2.08])]),
          opcoes: [
            { texto: "Liberar o resultado da urgência: o paciente está grave e o nível 2 está bom.", proximo: "fim_falha", impacto: { atraso: 0, qualidade: -30, seguranca: -40 },
              feedback: "A 1_3s é regra de rejeição. Liberar uma troponina com controle reprovado pode levar a uma decisão clínica errada, como uma alta indevida." },
            { texto: "Suspender a corrida, avisar o Pronto-Socorro do pequeno atraso e investigar o controle de nível 1.", proximo: "t2", impacto: { atraso: 10, qualidade: 5, seguranca: 5 },
              feedback: "Conduta correta: manter a comunicação com o médico e investigar antes de liberar protege o paciente." },
            { texto: "Enviar a amostra para um equipamento de contingência sem verificar os controles dele.", proximo: "fim_falha2", impacto: { atraso: 5, qualidade: -25, seguranca: -25 },
              feedback: "Trocar de equipamento só ajuda se o outro estiver com os controles verificados e aceitos." }
          ]
        },
        t2: {
          hora: "22:55", titulo: "Investigando o controle",
          texto: "O frasco do controle de nível 1 está aberto há 6 dias e a tampa estava mal fechada, o que pode ter concentrado o material por evaporação.",
          dados: [["Frasco do controle N1", "aberto há 6 dias"], ["Suspeita", "evaporação do material"]],
          opcoes: [
            { texto: "Abrir um frasco novo, rodar os dois níveis e, com controles aceitáveis, processar a urgência com prioridade.", proximo: "t3", impacto: { atraso: 10, qualidade: 15, seguranca: 15 },
              feedback: "Elimina a causa provável, confirma com controles novos e só então libera o resultado do paciente." },
            { texto: "Liberar a urgência com a observação \"controle em verificação\" no laudo.", proximo: "fim_falha", impacto: { atraso: 0, qualidade: -25, seguranca: -35 },
              feedback: "Uma ressalva no laudo não torna confiável um resultado obtido sem controle aceito." }
          ]
        },
        t3: {
          hora: "23:10", titulo: "O médico pede a repetição",
          texto: "Os controles novos ficaram aceitáveis. O resultado da urgência saiu acima do ponto de corte, e o médico liga pedindo para repetir a amostra, só para confirmar.",
          dados: [["Troponina N1 (frasco novo)", "0,51 ng/mL (Z = +0,3)"], ["Troponina N2", "2,02 ng/mL (Z = +0,2)"], ["Pedido do médico", "repetir a mesma amostra"]],
          grafico: gr("Troponina", "ng/mL", [nv("Nível 1", 0.5, 0.03, [...tn1, 0.602, 0.51]), nv("Nível 2", 2, 0.1, [...tn2, 2.08, 2.02])]),
          opcoes: [
            { texto: "Repetir a amostra, explicar que o controle está aceitável e sugerir a coleta seriada conforme o protocolo da instituição.", proximo: "fim_ok", impacto: { atraso: 5, qualidade: 5, seguranca: 10 },
              feedback: "Atende o pedido sem perder tempo, esclarece que o resultado é confiável e reforça a prática clínica de troponina seriada." },
            { texto: "Recusar: dizer que o controle passou e não há motivo para repetir.", proximo: "fim_atencao", impacto: { atraso: 0, qualidade: 0, seguranca: -10 },
              feedback: "O resultado é confiável, mas a recusa cria atrito. A repetição é razoável e a troponina costuma ser avaliada em série." }
          ]
        },
        fim_ok: { fim: true, resultado: "seguro", titulo: "Urgência atendida com segurança", texto: "Você rejeitou a corrida, achou a causa, confirmou com controles novos e atendeu a urgência e o pedido do médico com boa comunicação.", licao: "Uma regra 1_3s pede parar e investigar, mesmo com urgência. Comunicar o atraso e a causa mantém a confiança da equipe clínica." },
        fim_atencao: { fim: true, resultado: "atencao", titulo: "Resultado confiável, comunicação falha", texto: "A parte analítica foi bem conduzida, mas a recusa do pedido de repetição prejudicou a relação com o Pronto-Socorro.", licao: "A qualidade analítica inclui a relação com o clínico. Explicar é melhor que recusar." },
        fim_falha: { fim: true, resultado: "falha", titulo: "Liberação com controle reprovado", texto: "A troponina de um paciente com dor torácica foi liberada com controle fora de ±3 SD.", licao: "A gravidade do paciente aumenta, e não diminui, a exigência de um resultado confiável." },
        fim_falha2: { fim: true, resultado: "falha", titulo: "Contingência sem verificação", texto: "A amostra foi processada em outro equipamento sem confirmar que os controles dele estavam aceitáveis.", licao: "Equipamento de reserva também precisa de controles aceitos antes de liberar resultados." }
      }
    }
  ];
  novos.forEach(n => { if (!L.some(c => c.id === n.id)) L.push(n); });
})();
