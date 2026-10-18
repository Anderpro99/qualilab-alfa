/* =====================================================================
   LabSim — banco de casos de plantão. Para adicionar uma história nova,
   copie um objeto da lista abaixo, troque o id e edite os textos.

   ESTRUTURA DE UM CASO
   {
     id, titulo, setor, dificuldade,
     descricao:  texto do cenário inicial (tela de abertura)
     limiteAtraso: (opcional) minutos de atraso que enchem a barra (padrão 90)
     kpisIniciais: (opcional) { atraso, qualidade, seguranca }  (padrão 0 / 100 / 100)
     inicio: id do primeiro nó
     nos: {
       idDoNo: {
         hora, titulo, texto,
         dados: [["Rótulo", "valor"], ...]      (opcional: dados do analisador/controle)
         opcoes: [{ texto, proximo, impacto: { atraso, qualidade, seguranca }, feedback }]
       },
       idDoFinal: {
         fim: true, resultado: "seguro" | "atencao" | "falha",
         titulo, texto, licao
       }
     }
   }
   "impacto": atraso soma minutos; qualidade e seguranca somam/subtraem pontos (0 a 100).
   "proximo" deve ser o id de outro nó do mesmo caso.
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

      fim_seguro: {
        fim: true, resultado: "seguro", titulo: "Plantão seguro",
        texto: "Você suspendeu a liberação diante de uma regra de rejeição, encontrou a causa, recalibrou e só liberou resultados com controles aceitáveis. A urgência foi atendida logo em seguida.",
        licao: "Uma violação de rejeição (2_2s) pede parar e investigar antes de liberar. O pequeno atraso do início evitou resultados incorretos e deixou o laboratório pronto para a urgência."
      },
      fim_atencao: {
        fim: true, resultado: "atencao", titulo: "Plantão seguro, mas lento",
        texto: "Nenhum resultado incorreto saiu, porque você investigou e corrigiu antes de liberar. A decisão de manter a ordem de chegada, porém, atrasou um paciente grave.",
        licao: "Qualidade analítica e agilidade andam juntas. Com controles aceitáveis, a urgência deve ser priorizada."
      },
      fim_atencao_rec: {
        fim: true, resultado: "atencao", titulo: "Falha contida, com ação corretiva",
        texto: "Resultados foram liberados com controle reprovado, mas você corrigiu a causa, reprocessou as amostras afetadas, emitiu laudos corrigidos e avisou os médicos.",
        licao: "O ideal era não liberar. Quando o erro já saiu, a rastreabilidade e a comunicação transformam uma falha grave em um evento controlado e documentado."
      },
      fim_falha_a: {
        fim: true, resultado: "falha", titulo: "Falha grave de liberação",
        texto: "A rotina foi liberada com controle reprovado, e o alerta do médico foi descartado. O viés positivo continuou afetando pacientes ao longo do dia.",
        licao: "Controle aprovado depende de todas as regras, não só do limite de 3 SD. A discordância clínica é um sinal que merece investigação, não defesa."
      },
      fim_falha_b: {
        fim: true, resultado: "falha", titulo: "Causa não corrigida",
        texto: "A causa do erro (viés após troca de lote sem recalibração) não foi tratada de forma completa. Resultados incorretos continuaram sendo liberados ou ficaram sem correção.",
        licao: "Erro sistemático exige ação sobre a causa e verificação com controles. Trocar o material de controle ou corrigir só o futuro não resolve."
      },
      fim_falha_c: {
        fim: true, resultado: "falha", titulo: "Controle aprovado por acaso",
        texto: "Você liberou a rotina depois de repetir o controle até ele passar. O erro sistemático seguiu ativo, e a liberação foi falsamente tranquilizadora.",
        licao: "Repetir controles até um cair dentro dos limites é uma prática arriscada: ela esconde o problema em vez de resolvê-lo."
      }
    }
  }
];
