/* =====================================================================
   LabSim — banco de casos de plantão. Para adicionar uma história nova,
   copie um objeto da lista abaixo, troque o id e edite os textos.
   ===================================================================== */
window.cenariosPlantao = [
  {
    id: "bioq-manha-glicose",
    titulo: "Plantão da manhã na Bioquímica: o controle que não fechou",
    setor: "Bioquímica",
    dificuldade: "Básico",
    descricao: "São 7h05 e você assumiu a bancada de Bioquímica. A fila tem 38 amostras da internação, e o Pronto-Socorro costuma mandar urgências a partir das 8h. Antes de liberar a rotina, você roda os controles de glicose. O reagente foi trocado às 6h50, no plantão da madrugada, e nada sobre calibração foi registrado.",
    limiteAtraso: 90,
    inicio: "n1",
    nos: {
      n1: {
        hora: "07:05", titulo: "Controles da glicose",
        texto: "Os dois níveis de controle ficaram acima do alvo. Nenhum passou de 3 SD, mas ambos estão do mesmo lado e além de 2 SD. A equipe espera a liberação da rotina.",
        dados: [["Glicose N1 (alvo 100, SD 3)", "107,5 mg/dL (Z = +2,5)"], ["Glicose N2 (alvo 250, SD 8)", "270 mg/dL (Z = +2,5)"], ["Fila", "38 amostras da internação"]],
        opcoes: [
          { texto: "Liberar a rotina: nenhum controle passou de 3 SD.", proximo: "n2a", impacto: { atraso: 0, qualidade: -30, seguranca: -30 },
            feedback: "Regra 2_2s violada entre níveis: indica erro sistemático (viés positivo). Liberar sem investigar emite resultados falsamente altos de glicose." },
          { texto: "Suspender a liberação, registrar a violação 2_2s e investigar a causa.", proximo: "n2b", impacto: { atraso: 10, qualidade: 0, seguranca: 0 },
            feedback: "Conduta correta: a 2_2s é regra de rejeição. O custo é um pequeno atraso, mas nenhum resultado duvidoso sai do laboratório." },
          { texto: "Repetir os controles até um deles cair dentro dos limites e então liberar.", proximo: "n2c", impacto: { atraso: 5, qualidade: -25, seguranca: -20 },
            feedback: "Repetir até passar mascara o erro: o desvio sistemático continua lá, e o controle aprovado pode ser só acaso." }
        ]
      },
      n2a: {
        hora: "08:15", titulo: "O médico estranha o resultado",
        texto: "A rotina foi liberada. O médico do Pronto-Socorro liga: a glicose de um paciente estável veio em 214 mg/dL, incompatível com o quadro clínico, e ele pergunta se o resultado é confiável.",
        dados: [["Resultados já liberados", "cerca de 30 amostras desde 07:05"]],
        opcoes: [
          { texto: "Responder que os controles passaram e o resultado é válido.", proximo: "fim_falha_a", impacto: { atraso: 0, qualidade: -30, seguranca: -40 },
            feedback: "Ignorar a discordância clínica e a violação anterior mantém o erro ativo. Outros pacientes continuam recebendo valores falsamente altos." },
          { texto: "Reconhecer a possibilidade de erro, bloquear novas liberações e reavaliar os controles.", proximo: "n4", impacto: { atraso: 15, qualidade: 10, seguranca: 15 },
            feedback: "Boa atitude: a discordância clínica é um sinal de alerta. Reabrir a investigação limita o número de pacientes afetados." }
        ]
      },
      n2c: {
        hora: "07:25", titulo: "O terceiro controle passou",
        texto: "Na terceira tentativa o controle do nível 1 caiu dentro de 2 SD. O nível 2 continua alto, mas a fila está crescendo e a equipe pressiona para liberar.",
        dados: [["Tentativas de controle", "3"], ["Glicose N2", "ainda acima de +2 SD"]],
        opcoes: [
          { texto: "Liberar a rotina, já que um controle finalmente passou.", proximo: "fim_falha_c", impacto: { atraso: 0, qualidade: -30, seguranca: -30 },
            feedback: "O nível 2 segue com viés, e a aprovação do nível 1 foi casual. A rotina sai com erro sistemático não resolvido." },
          { texto: "Reconhecer que repetir até passar não resolve e voltar a investigar a causa.", proximo: "n2b", impacto: { atraso: 10, qualidade: 5, seguranca: 5 },
            feedback: "Correção de rota. O tempo perdido ainda pesa, mas a decisão volta para o caminho seguro." }
        ]
      },
      n2b: {
        hora: "07:20", titulo: "Investigando a causa",
        texto: "Você revisa o registro: o lote de reagente foi trocado às 6h50 e o equipamento não foi recalibrado. Um viés positivo logo depois da troca de lote é coerente com a violação observada.",
        dados: [["Troca de lote", "06:50, sem recalibração"], ["Tipo de erro sugerido", "sistemático"]],
        opcoes: [
          { taxa: "Recalibrar com o calibrador do novo lote e rodar controles novos.", proximo: "n3", impacto: { atraso: 15, qualidade: 15, seguranca: 10 },
            feedback: "Calibração é a ação indicada para erro sistemático após troca de lote. Os controles novos verificam se o problema foi corrigido." },
          { texto: "Recalibrar com o calibrador do novo lote e rodar controles novos.", proximo: "n3", impacto: { atraso: 15, qualidade: 15, seguranca: 10 },
            feedback: "Calibração é a ação indicada para erro sistemático após troca de lote. Os controles novos verificam se o problema foi corrigido." },
          { texto: "Abrir um frasco novo de controle e liberar a rotina sem recalibrar.", proximo: "fim_falha_b", impacto: { atraso: 5, qualidade: -25, seguranca: -30 },
            feedback: "O controle não era o problema. Trocar o material sem tratar a causa só adia o erro." }
        ]
      },
      n3: {
        hora: "07:50", titulo: "Controles aceitáveis e uma urgência",
        texto: "Após a recalibração, os controles ficaram dentro dos limites. Ao mesmo tempo, o Pronto-Socorro envia uma amostra urgente de glicose de um paciente com rebaixamento do nível de consciência, e a enfermaria pede a liberação da fila.",
        dados: [["Glicose N1", "100,8 mg/dL (Z = +0,3)"], ["Glicose N2", "247 mg/dL (Z = −0,4)"], ["Pendentes", "1 urgência + 38 da rotina"]],
        opcoes: [
          { texto: "Processar a urgência primeiro, liberar o resultado e depois seguir com a rotina.", proximo: "fim_seguro", impacto: { atraso: 0, qualidade: 5, seguranca: 15 },
            feedback: "Com controles aceitáveis, priorizar a urgência é correto: o resultado é confiável e chega rápido a quem precisa." },
          { texto: "Concluir toda a fila antes da urgência, para manter a ordem de chegada.", proximo: "fim_atencao", impacto: { atraso: 35, qualidade: 0, seguranca: -20 },
            feedback: "Os resultados são confiáveis, mas o paciente grave espera sem necessidade. Priorizar é parte da gestão do plantão." }
        ]
      },
      n4: {
        hora: "08:30", titulo: "Recuperando o erro",
        texto: "Os controles repetidos confirmam o viés. Cerca de 30 resultados já foram liberados desde as 7h05, e o equipamento não foi recalibrado após a troca de lote.",
        dados: [["Resultados liberados com controle reprovado", "~30"], ["Causa provável", "troca de lote sem recalibração"]],
        opcoes: [
          { texto: "Recalibrar, validar com controles, reprocessar as amostras liberadas, emitir laudos corrigidos e avisar os médicos.", proximo: "fim_atencao_rec", impacto: { atraso: 40, qualidade: 15, seguranca: 20 },
            feedback: "Ação corretiva completa: elimina a causa, recupera os resultados afetados e comunica o impacto. O custo é alto, mas é o que se espera quando o erro já saiu." },
          { texto: "Recalibrar e apenas liberar os resultados novos dali em diante.", proximo: "fim_falha_b", impacto: { atraso: 15, qualidade: -15, seguranca: -25 },
            feedback: "Os laudos errados já emitidos continuam valendo. Corrigir só o futuro deixa pacientes com resultados falsos." }
        ]
      },
      fim_seguro: { fim: true, resultado: "seguro", titulo: "Plantão seguro", texto: "Você suspendeu a liberação diante de uma regra de rejeição, encontrou a causa, recalibrou e só liberou resultados com controles aceitáveis.", licao: "Parar e investigar evita danos diretos aos pacientes." },
      fim_atencao: { fim: true, resultado: "atencao", titulo: "Plantão seguro, mas lento", texto: "Nenhum resultado incorreto saiu, mas a falta de priorização atrasou um caso grave.", licao: "Qualidade analítica e agilidade devem caminhar juntas." },
      fim_atencao_rec: { fim: true, resultado: "atencao", titulo: "Falha contida com ação corretiva", texto: "Você conteve o dano, emitiu laudos corrigidos e notificou a equipe clínica.", licao: "Erros acontecem; a rastreabilidade e a ação retrospectiva (lookback) definem a excelência da gestão." },
      fim_falha_a: { fim: true, resultado: "falha", titulo: "Falha grave de liberação", texto: "A rotina seguiu com controle reprovado e alerta médico ignorado.", licao: "Sempre investigue discordâncias clínicas frente a alertas de CQ." },
      fim_falha_b: { fim: true, resultado: "falha", titulo: "Causa não corrigida", texto: "O erro sistemático permaneceu ativo sem correção efetiva.", licao: "Trocar o frasco de controle não resolve desvios de método." },
      fim_falha_c: { fim: true, resultado: "falha", titulo: "Controle aprovado por acaso", texto: "Repetir até passar esconde o problema real.", licao: "Testing into compliance é uma violação grave de qualidade." }
    }
  },
  {
    id: "eletrolitos-r4s",
    titulo: "Eletrolíticos no Plantão Noturno: O choque da regra R₄s",
    setor: "Eletrólitos / Ion-seletivo",
    dificuldade: "Intermediário",
    descricao: "São 23h15. O plantão noturno está calmo até que a rotina de eletrólitos (Sódio e Potássio) é processada. Ao olhar o gráfico de Levey-Jennings dos dois níveis de controle de Sódio na corrida atual, você nota uma dispersão incomum entre os frascos.",
    limiteAtraso: 90,
    inicio: "r4s_1",
    nos: {
      r4s_1: {
        hora: "23:20", titulo: "Análise do Gráfico de Sódio",
        texto: "O Sódio Nível 1 deu +2.4 SD e o Sódio Nível 2 deu -2.3 SD na mesma corrida analítica. A amplitude total entre eles ultrapassou 4 SD. A enfermeira do CTI liga cobrando o potássio e o sódio de um paciente em pós-operatório.",
        dados: [["Sódio Nível 1", "+2,4 SD (Acima do limite de alerta)"], ["Sódio Nível 2", "-2,3 SD (Abaixo do limite de alerta)"], ["Amplitude (N1 - N2)", "4,7 SD total"]],
        opcoes: [
          { texto: "Identificar violação da regra R₄s (Erro Aleatório severo). Rejeitar a corrida imediatamente.", proximo: "r4s_investigar", impacto: { atraso: 10, qualidade: 10, seguranca: 10 },
            feedback: "Excelente! A regra R₄s pega discrepâncias de amplitude em uma mesma corrida. Indica erro puramente aleatório (ex: problema momentâneo de agitação ou bolha)." },
          { texto: "Tratar como variação aceitável, já que os pontos estão individuais abaixo de 3 SD, e liberar a rotina.", proximo: "r4s_falha", impacto: { atraso: 0, qualidade: -30, seguranca: -30 },
            feedback: "Erro grave. A distância de 4 SD entre os controles na mesma passada destrói a confiabilidade da corrida." }
        ]
      },
      r4s_investigar: {
        hora: "23:35", titulo: "Investigando o Erro Aleatório",
        texto: "Você verifica o equipamento de íon-seletivo. Os eletrodos estão conectados, mas nota-se microbolhas na linha de sucção do braço mecânico devido a um tubo mal posicionado.",
        dados: [["Causa suspeita", "Microbolhas na linha de aspiração"], ["Status", "Amostras de CTI aguardando"]],
        opcoes: [
          { texto: "Eliminar as bolhas com ciclo de lavagem (prime), homogeneizar novamente os controles e reprocessar a corrida.", proximo: "r4s_sucesso", impacto: { atraso: 15, qualidade: 15, seguranca: 15 },
            feedback: "Conduta perfeita. Resolve o componente aleatório físico, roda novos controles e valida o sistema antes dos pacientes." },
          { texto: "Apenas passar os controles de novo sem limpeza, torcendo para encaixarem.", proximo: "r4s_falha2", impacto: { atraso: 5, qualidade: -20, seguranca: -20 },
            feedback: "Sem remover a bolha da linha, a chance de nova falha na R₄s é altíssima." }
        ]
      },
      r4s_sucesso: {
        hora: "23:55", titulo: "Controles Restaurados",
        texto: "Com o sistema limpo, os controles de Sódio deram Z-Score de +0.2 e -0.1. A corrida foi validada com sucesso.",
        dados: [["Sódio N1", "Z = +0,2"], ["Sódio N2", "Z = −0,1"]],
        opcoes: [
          { texto: "Liberar os exames do CTI e o restante da rotina.", proximo: "fim_r4s_ok", impacto: { atraso: 0, qualidade: 10, seguranca: 15 },
            feedback: "Tudo nos conformes. O CTI recebe resultados confiáveis após contenção rigorosa." }
        ]
      },
      r4s_falha: {
        fim: true, resultado: "falha", titulo: "Liberação com Erro Aleatório",
        texto: "Você liberou exames sob vigência de uma R₄s não investigada. O eletrólito do paciente do CTI veio completamente distorcido.",
        licao: "A regra R₄s é um marco clássico de erro aleatório crítico na mesma corrida. Ignorá-la compromete o diagnóstico imediato."
      },
      r4s_falha2: {
        fim: true, resultado: "falha", titulo: "Insistência sem correção",
        texto: "O problema mecânico persistiu, gerando novas falhas e atrasando criticamente o plantão noturno.",
        licao: "Erro aleatório físico exige intervenção física (limpeza/purga), e não apenas nova tentativa estatística."
      },
      fim_r4s_ok: {
        fim: true, resultado: "seguro", titulo: "Plantão Noturno exemplar",
        texto: "Você interceptou uma falha de R₄s, identificou a bolha mecânica, limpou o sistema e liberou os resultados com total segurança.",
        licao: "A atenção aos detalhes no gráfico de Levey-Jennings evita erros grotescos na madrugada."
      }
    }
  },
  {
    id: "enzimas-7t",
    titulo: "Enzimas Hepáticas: A Tendência Silenciosa (Regra 7T)",
    setor: "Química Clínica",
    dificuldade: "Avançado",
    descricao: "Durante a verificação semanal dos gráficos de controle de AST e ALT, você percebe um comportamento sutil: nos últimos 7 dias, os pontos do controle de ALT vêm subindo de forma contínua, dia após dia, caminhando em direção ao limite superior.",
    limiteAtraso: 90,
    inicio: "t7_1",
    nos: {
      t7_1: {
        hora: "14:00", titulo: "Análise da Tendência (Trend)",
        texto: "Os valores diários de ALT foram: +0.2, +0.4, +0.6, +0.9, +1.2, +1.5 e hoje +1.8 SD. Nenhum ponto cruzou 2 SD ainda, mas são 7 dias seguidos subindo na mesma direção (Regra 7T).",
        dados: [["Regra acionada", "7T (Tendência sistemática de degradação)"], ["Ponto atual", "+1,8 SD"]],
        opcoes: [
          { texto: "Ignorar o alerta, já que o ponto de hoje (+1,8 SD) ainda está tecnicamente dentro da faixa de aceitação de ±2 SD.", proximo: "t7_ignorar", impacto: { atraso: 0, qualidade: -25, seguranca: -25 },
            feedback: "Erro conceitual grave. Esperar cruzar 2 ou 3 SD numa tendência significa permitir que o viés afete laudos de pacientes antes de agir." },
          { texto: "Tratar como Tendência (7T). Iniciar investigação preventiva de estabilidade de reagente e calibração.", proximo: "t7_investigar", impacto: { atraso: 15, qualidade: 15, seguranca: 15 },
            feedback: "Perfeito! A regra 7T avisa sobre deriva sistemática antes que a catástrofe analítica aconteça." }
        ]
      },
      t7_investigar: {
        hora: "14:30", titulo: "Rastreando a Deriva",
        texto: "Você verifica o frasco de reagente de ALT: ele está no final da validade on-board (aberto há 28 dias). A fotometria do equipamento também aponta lâmpada com muitas horas de uso.",
        dados: [["Reagente ALT", "Próximo ao limite de estabilidade aberta"], ["Lâmpada fotométrica", "85% de desgaste"]],
        opcoes: [
          { texto: "Substituir o frasco de reagente por um novo, recalibrar o ensaio e testar novos controles.", proximo: "t7_sucesso", impacto: { atraso: 20, qualidade: 20, seguranca: 20 },
            feedback: "Ação preventiva exemplar. Corta a tendência pela raiz e zera o viés antes de gerar laudos incorretos." },
          { texto: "Apenas esticar a validade do reagente por mais uma semana para economizar insumo.", proximo: "t7_ignorar", impacto: { atraso: 0, qualidade: -30, seguranca: -30 },
            feedback: "Economia de reagente que custa a confiabilidade laboratorial." }
        ]
      },
      t7_sucesso: {
        hora: "15:10", titulo: "Processo Reestabilizado",
        texto: "Com o reagente novo e a calibração refeita, o controle de ALT retornou imediatamente para a faixa de Z-Score próxima de 0.0.",
        dados: [["Novo Z-Score ALT", "Z = +0,1"]],
        opcoes: [
          { texto: "Documentar a ação preventiva no livro de ocorrências e liberar as enzimas normalmente.", proximo: "fim_t7_ok", impacto: { atraso: 0, qualidade: 15, seguranca: 15 },
            feedback: "Ciclo de qualidade completo e documentado." }
        ]
      },
      t7_ignorar: {
        fim: true, resultado: "falha", titulo: "Estouro de Limite Posterior",
        texto: "Dois dias depois, a tendência empurrou o ensaio para +3.2 SD (regra 1₃s), invalidando dezenas de exames de perfil hepático de pacientes externos e do ambulatório.",
        licao: "Tendências (Trends) nunca devem ser ignoradas. O aviso prévio estatístico serve justamente para evitar a rejeição futura."
      },
      fim_t7_ok: {
        fim: true, resultado: "seguro", titulo: "Gestão Proativa de Qualidade",
        texto: "Você leu a tendência (7T) antes do colapso, trocou o reagente envelhecido e garantiu exames hepáticos impecáveis.",
        licao: "O controle de qualidade moderno é preditivo e preventivo, e não apenas reativo a erros já estourados."
      }
    }
  }
];
