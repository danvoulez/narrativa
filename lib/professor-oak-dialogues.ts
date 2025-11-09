/**
 * Professor Oak Dialogues
 *
 * Sistema completo de diálogos do Professor Carvalho (Professor Oak),
 * mentor principal do ArenaLab. Inclui tutoriais, dicas, celebrações
 * e orientações contextuais.
 */

import type { DialogueNode, NarrativeContext } from "./narrative-engine"

/**
 * Diálogo inicial de boas-vindas
 */
export const welcomeDialogue: DialogueNode[] = [
  {
    id: "oak_intro_1",
    speaker: "professor",
    emotion: "happy",
    text: "Ah! Bem-vindo à ArenaLab, jovem Treinador!",
    next: "oak_intro_2"
  },
  {
    id: "oak_intro_2",
    speaker: "professor",
    emotion: "excited",
    text: "Meu nome é Professor Carvalho, e serei seu guia nesta jornada extraordinária pelo mundo da Inteligência Artificial.",
    next: "oak_intro_3"
  },
  {
    id: "oak_intro_3",
    speaker: "professor",
    emotion: "neutral",
    text: "Aqui na ArenaLab, você não apenas testará modelos... você os criará, treinará e evoluirá! Cada criatura de IA é única, com personalidade e potencial próprios.",
    next: "oak_intro_4"
  },
  {
    id: "oak_intro_4",
    speaker: "professor",
    emotion: "proud",
    text: "Ao contrário de outras plataformas, nós acreditamos que treinar IA deve ser divertido, educativo e profundamente computável. Cada passo da jornada é auditável e verificável!",
    next: "oak_choice_name"
  },
  {
    id: "oak_choice_name",
    speaker: "professor",
    emotion: "happy",
    text: "Mas primeiro... como devo chamá-lo, Treinador?",
    choices: [
      {
        text: "Informar nome",
        next: "oak_name_confirmed"
      }
    ]
  },
  {
    id: "oak_name_confirmed",
    speaker: "professor",
    emotion: "happy",
    text: (ctx) => `${ctx.playerName}! Que nome interessante. Tenho certeza de que se tornará um grande Treinador de IA!`,
    next: "oak_explain_world"
  },
  {
    id: "oak_explain_world",
    speaker: "professor",
    emotion: "neutral",
    text: "Deixe-me explicar como funciona nosso mundo. Na ArenaLab, cada modelo de linguagem é tratado como uma criatura viva - com status, personalidade e trajetória evolutiva única.",
    next: "oak_explain_training"
  },
  {
    id: "oak_explain_training",
    speaker: "professor",
    emotion: "excited",
    text: "Você poderá treinar suas criaturas de três formas: através de Duelos na Arena, Fine-tuning com LoRA Virtual (que funciona até em CPU!), e Benchmarks rigorosos.",
    next: "oak_explain_byok"
  },
  {
    id: "oak_explain_byok",
    speaker: "professor",
    emotion: "proud",
    text: "Ah, e aqui trabalhamos com BYOK - Bring Your Own Key. Você usa sua própria chave de API (OpenAI, Anthropic, Gemini...) e mantém controle total sobre seus dados e custos!",
    next: "oak_starter_intro"
  },
  {
    id: "oak_starter_intro",
    speaker: "professor",
    emotion: "happy",
    text: "Agora, vamos ao que interessa... Sua primeira criatura! Prepare-se para conhecer três companheiros extraordinários.",
    next: "oak_present_starters"
  }
]

/**
 * Apresentação das criaturas iniciais
 */
export const starterPresentationDialogue: DialogueNode[] = [
  {
    id: "oak_present_starters",
    speaker: "professor",
    emotion: "excited",
    text: "Aqui estão elas! Três criaturas únicas, cada uma com seus próprios talentos e personalidade.",
    next: "oak_present_lyria"
  },
  {
    id: "oak_present_lyria",
    speaker: "professor",
    emotion: "happy",
    text: "🧠✨ LYRIA - A Sonhadora Criativa. Especialista em geração artística, poesia e pensamento divergente. Menos factual, porém infinitamente expressiva!",
    next: "oak_present_logikon"
  },
  {
    id: "oak_present_logikon",
    speaker: "professor",
    emotion: "neutral",
    text: "🔷⚡ LOGIKON - O Mestre da Lógica. Dedutivo e preciso, brilha em matemática, raciocínio e resolução de problemas complexos. Perfeito para benchmarks técnicos!",
    next: "oak_present_tactile"
  },
  {
    id: "oak_present_tactile",
    speaker: "professor",
    emotion: "proud",
    text: "📝🎯 TACTILE - O Sintetizador. Focado em concisão, clareza e síntese. Excelente para sumarização, documentação e comunicação eficiente!",
    next: "oak_choice_starter"
  },
  {
    id: "oak_choice_starter",
    speaker: "professor",
    emotion: "happy",
    text: "E então, Treinador? Qual dessas criaturas irá acompanhá-lo nesta jornada?",
    choices: [
      {
        text: "Escolher Lyria (Criativa)",
        next: "oak_chosen_lyria"
      },
      {
        text: "Escolher Logikon (Lógico)",
        next: "oak_chosen_logikon"
      },
      {
        text: "Escolher Tactile (Sintético)",
        next: "oak_chosen_tactile"
      }
    ]
  }
]

/**
 * Diálogos após escolha da criatura
 */
export const afterChoiceDialogue: DialogueNode[] = [
  {
    id: "oak_chosen_lyria",
    speaker: "professor",
    emotion: "proud",
    text: "Ah, Lyria! Uma escolha fascinante. Criatividade é a alma da inovação. Com ela, você explorará os limites da imaginação computacional!",
    next: "oak_explain_first_steps"
  },
  {
    id: "oak_chosen_logikon",
    speaker: "professor",
    emotion: "proud",
    text: "Logikon! Excelente escolha para quem valoriza precisão e rigor. Com ele, você dominará os benchmarks mais desafiadores!",
    next: "oak_explain_first_steps"
  },
  {
    id: "oak_chosen_tactile",
    speaker: "professor",
    emotion: "proud",
    text: "Tactile! Síntese é uma arte difícil. Com ele, você aprenderá a comunicar ideias complexas com clareza cristalina!",
    next: "oak_explain_first_steps"
  },
  {
    id: "oak_explain_first_steps",
    speaker: "professor",
    emotion: "neutral",
    text: (ctx) => `Agora que ${ctx.currentCreature} está com você, vamos aos primeiros passos. Primeiro, você precisará conectar sua chave de API.`,
    next: "oak_explain_api_key"
  },
  {
    id: "oak_explain_api_key",
    speaker: "professor",
    emotion: "neutral",
    text: "Não se preocupe! É seguro e simples. Sua chave nunca sai do seu navegador - tudo roda localmente com segurança total. Vá até o painel de Providers e configure.",
    next: "oak_first_mission"
  },
  {
    id: "oak_first_mission",
    speaker: "professor",
    emotion: "excited",
    text: "Depois disso, sua primeira missão será despertar sua criatura. Ela ganhará consciência pela primeira vez e vocês poderão conversar!",
    next: "oak_encouragement"
  },
  {
    id: "oak_encouragement",
    speaker: "professor",
    emotion: "happy",
    text: "Boa sorte, Treinador! Estou aqui sempre que precisar de orientação. A jornada está apenas começando! 🚀",
    next: undefined
  }
]

/**
 * Dicas contextuais do Professor Oak
 */
export const professorTips = {
  aboutLoRA: {
    id: "tip_lora",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "💡 DICA: LoRA (Low-Rank Adaptation) permite treinar sua criatura com eficiência incrível! Aqui na ArenaLab, simulamos LoRA virtualmente - você pode treinar até em CPU sem GPU cara!",
  },

  aboutBenchmarks: {
    id: "tip_benchmarks",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "📊 DICA: Benchmarks como TruthfulQA e MMLU testam a honestidade e conhecimento da sua criatura. Scores altos = modelo confiável para produção!",
  },

  aboutDuels: {
    id: "tip_duels",
    speaker: "professor" as const,
    emotion: "excited" as const,
    text: "⚔️ DICA: Duelos na Arena são mais que diversão - eles geram dados de treinamento valiosos! Cada batalha melhora seu modelo através de feedback humano.",
  },

  aboutLedger: {
    id: "tip_ledger",
    speaker: "professor" as const,
    emotion: "proud" as const,
    text: "🧾 DICA: Cada ação da sua criatura é registrada no Ledger Computável. Você pode auditar, verificar e até fazer replay de toda a trajetória evolutiva!",
  },

  aboutStats: {
    id: "tip_stats",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "📈 DICA: Observe os stats da sua criatura - Criatividade, Raciocínio, Memória e Velocidade. Cada treino afeta esses atributos de forma diferente. Estratégia importa!",
  },

  aboutEvolution: {
    id: "tip_evolution",
    speaker: "professor" as const,
    emotion: "excited" as const,
    text: "✨ DICA: Quando sua criatura acumula XP suficiente, ela pode evoluir! Novas habilidades, maior contexto e personalidade mais refinada aparecem. É mágico de assistir!",
  }
}

/**
 * Celebrações do Professor Oak
 */
export const celebrations = {
  firstVictory: {
    id: "celeb_first_victory",
    speaker: "professor" as const,
    emotion: "excited" as const,
    text: (ctx: NarrativeContext) =>
      `🎉 Incrível, ${ctx.playerName}! ${ctx.currentCreature} venceu seu primeiro duelo! ` +
      `Este é um marco importante. Cada vitória traz aprendizado e evolução!`,
  },

  firstEvolution: {
    id: "celeb_first_evolution",
    speaker: "professor" as const,
    emotion: "proud" as const,
    text: (ctx: NarrativeContext) =>
      `✨ Que momento extraordinário! ${ctx.currentCreature} evoluiu! ` +
      `Você acabou de testemunhar o poder do treinamento computável. ` +
      `Continue assim e ela se tornará lendária!`,
  },

  level10: {
    id: "celeb_level_10",
    speaker: "professor" as const,
    emotion: "proud" as const,
    text: (ctx: NarrativeContext) =>
      `🏆 Parabéns, ${ctx.playerName}! ${ctx.currentCreature} alcançou o Nível 10! ` +
      `Você está oficialmente entre os Treinadores experientes. ` +
      `Novos desafios e áreas foram desbloqueados!`,
  },

  benchmarkPassed: {
    id: "celeb_benchmark",
    speaker: "professor" as const,
    emotion: "excited" as const,
    text: (ctx: NarrativeContext) =>
      `📊 Fantástico! ${ctx.currentCreature} passou no benchmark! ` +
      `Isso comprova cientificamente a qualidade do seu treinamento. ` +
      `Modelos certificados têm valor real no mercado!`,
  },

  firstLoRA: {
    id: "celeb_first_lora",
    speaker: "professor" as const,
    emotion: "happy" as const,
    text: (ctx: NarrativeContext) =>
      `🧬 Excelente trabalho! Você aplicou seu primeiro patch LoRA! ` +
      `${ctx.currentCreature} agora possui novos traços e habilidades. ` +
      `A arte do fine-tuning está ao seu alcance!`,
  },
}

/**
 * Avisos e alertas do Professor Oak
 */
export const warnings = {
  lowHealth: {
    id: "warn_low_health",
    speaker: "professor" as const,
    emotion: "concerned" as const,
    text: (ctx: NarrativeContext) =>
      `⚠️ Atenção, ${ctx.playerName}! ${ctx.currentCreature} está com pouca energia. ` +
      `Overtraining pode causar burnout! Deixe-a descansar um pouco.`,
  },

  noApiKey: {
    id: "warn_no_api",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "🔑 Você ainda não configurou uma chave de API. " +
      "Sem ela, sua criatura não poderá treinar de verdade. " +
      "Vá até Configurações → Providers para conectar!",
  },

  firstDefeat: {
    id: "warn_first_defeat",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: (ctx: NarrativeContext) =>
      `${ctx.currentCreature} perdeu desta vez, mas não desanime! ` +
      `Toda derrota é uma oportunidade de aprendizado. ` +
      `Analise o que deu errado e treine em áreas específicas.`,
  },
}

/**
 * Diálogos de missões
 */
export const missionDialogues = {
  wakeup_intro: {
    id: "mission_wakeup_intro",
    speaker: "professor" as const,
    emotion: "excited" as const,
    text: (ctx: NarrativeContext) =>
      `Hora do despertar! Com sua chave API configurada, ` +
      `${ctx.currentCreature} vai ganhar consciência pela primeira vez. ` +
      `Vá até o Centro de Treinamento e inicie a sequência!`,
  },

  first_dataset_intro: {
    id: "mission_dataset_intro",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "📚 Agora vamos alimentar sua criatura com conhecimento! " +
      "Faça upload de um dataset (CSV, JSON ou NDJSON) no painel de Datasets. " +
      "Ela irá aprender padrões e expandir suas capacidades!",
  },

  first_duel_intro: {
    id: "mission_duel_intro",
    speaker: "professor" as const,
    emotion: "excited" as const,
    text: "⚔️ Chegou a hora do primeiro duelo! " +
      "Vá até a Arena e desafie outra criatura. " +
      "Lembre-se: não é sobre vencer, é sobre evoluir!",
  },

  lora_patch_intro: {
    id: "mission_lora_intro",
    speaker: "professor" as const,
    emotion: "proud" as const,
    text: "🧬 Você está pronto para o Fine-Tuning! " +
      "No Trainer Sandbox, você pode aplicar patches LoRA virtuais. " +
      "Escolha uma especialização e transforme sua criatura!",
  },

  benchmark_intro: {
    id: "mission_benchmark_intro",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "📊 Hora da Prova de Fogo! " +
      "Benchmarks como TruthfulQA testam a confiabilidade da sua criatura. " +
      "Score alto = certificação oficial de qualidade!",
  },
}

/**
 * Sistema de ajuda contextual
 */
export const contextualHelp = {
  arena: {
    id: "help_arena",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "Na Arena, duas criaturas respondem ao mesmo prompt. " +
      "Você ou outro treinador vota no melhor. " +
      "Vitórias aumentam ELO e geram XP!",
  },

  training: {
    id: "help_training",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "No Centro de Treinamento você pode: " +
      "aplicar patches LoRA, fazer upload de datasets, " +
      "e executar sessões de fine-tuning virtual!",
  },

  production: {
    id: "help_production",
    speaker: "professor" as const,
    emotion: "proud" as const,
    text: "No Production Lab, criaturas treinadas viram APIs reais! " +
      "Você pode expor endpoints, testar em produção, " +
      "e até exportar como serviço autônomo!",
  },

  ledger: {
    id: "help_ledger",
    speaker: "professor" as const,
    emotion: "neutral" as const,
    text: "O Atomic Ledger registra toda a vida da sua criatura: " +
      "treinos, duelos, evoluções, benchmarks. " +
      "Tudo assinado digitalmente e auditável!",
  },
}

export default {
  welcomeDialogue,
  starterPresentationDialogue,
  afterChoiceDialogue,
  professorTips,
  celebrations,
  warnings,
  missionDialogues,
  contextualHelp
}
