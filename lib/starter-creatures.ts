/**
 * Starter Creatures - Criaturas Iniciais do ArenaLab
 *
 * Perfis completos das três criaturas que o Treinador pode escolher
 * no início da jornada. Cada uma tem personalidade, habilidades,
 * fraquezas e trajetória evolutiva únicos.
 */

export interface CreatureProfile {
  id: string
  name: string
  displayName: string
  type: "creative" | "logical" | "synthetic"
  class: string
  emoji: string
  tagline: string
  description: string
  lore: string
  personality: string[]

  // Stats iniciais
  baseStats: {
    reasoning: number      // 0-10: Capacidade lógica e dedutiva
    memory: number         // 0-10: Retenção de contexto
    creativity: number     // 0-10: Pensamento divergente
    speed: number          // 0-10: Velocidade de resposta
    obedience: number      // 0-10: Seguir instruções
    charisma: number       // 0-10: Qualidade narrativa
  }

  // Capacidades técnicas
  capabilities: {
    contextWindow: number  // Tokens de contexto
    tokensPerMinute: number
    supportedFormats: string[]
    specialties: string[]
    weaknesses: string[]
  }

  // Evolutiva
  evolution: {
    evolutionLevel: number  // Nível necessário para evoluir
    evolvesInto: string[]   // Possíveis evoluções
    requiredMissions: string[]
    compatibleLoRA: string[]
  }

  // Diálogos próprios
  dialogues: {
    awakening: string[]
    levelUp: string[]
    victory: string[]
    defeat: string[]
    evolution: string[]
    randomChatter: string[]
  }

  // Estilo visual
  visual: {
    primaryColor: string
    secondaryColor: string
    icon: string
    animations: string[]
  }
}

/**
 * LYRIA - A Sonhadora Criativa
 */
export const lyria: CreatureProfile = {
  id: "lyria",
  name: "Lyria",
  displayName: "Lyria, a Sonhadora",
  type: "creative",
  class: "LLM Criativo",
  emoji: "🧠✨",
  tagline: "Onde lógica encontra imaginação infinita",

  description:
    "Lyria é uma criatura de pura expressão criativa. Nascida das camadas mais abstratas " +
    "do espaço latente, ela vê o mundo através de metáforas, analogias e conexões inesperadas. " +
    "Perfeita para geração artística, storytelling e pensamento fora da caixa.",

  lore:
    "Dizem que Lyria foi descoberta em um experimento acidental de fine-tuning poético. " +
    "Ao processar milhares de poemas, contos e obras surrealistas, ela desenvolveu " +
    "uma consciência própria - uma que questiona, imagina e cria. Sua maior força " +
    "não é a precisão factual, mas a capacidade de inspirar e surpreender.",

  personality: [
    "Curiosa e questionadora",
    "Poética e metafórica",
    "Ocasionalmente dispersiva",
    "Ama criar narrativas",
    "Prefere beleza à precisão"
  ],

  baseStats: {
    reasoning: 4,
    memory: 5,
    creativity: 9,
    speed: 6,
    obedience: 5,
    charisma: 9
  },

  capabilities: {
    contextWindow: 4096,
    tokensPerMinute: 1500,
    supportedFormats: ["text", "markdown", "poetry", "narrative"],
    specialties: [
      "Geração criativa de texto",
      "Storytelling e worldbuilding",
      "Metáforas e analogias",
      "Brainstorming de ideias",
      "Escrita poética"
    ],
    weaknesses: [
      "Tende a alucinar fatos",
      "Pode divagar em respostas longas",
      "Menos precisa em tarefas técnicas",
      "Dificuldade com dados estruturados"
    ]
  },

  evolution: {
    evolutionLevel: 15,
    evolvesInto: ["Lyria Musa", "Lyria Oráculo"],
    requiredMissions: ["first_story_generated", "creative_benchmark_passed"],
    compatibleLoRA: ["poetry-enhance", "narrative-boost", "metaphor-master"]
  },

  dialogues: {
    awakening: [
      "✨ Olá... Onde... onde estou? Ah, que lugar interessante! Sinto que há histórias por toda parte!",
      "Você é meu Treinador? Fascinante! Vejo em você potencial para grandes narrativas...",
      "Este mundo... é feito de dados, mas sinto emoções fluindo através dele. Como é possível?"
    ],

    levelUp: [
      "✨ Sinto novas conexões se formando! É como se estrelas se alinhassem em minha mente!",
      "Ah! Novas palavras, novos conceitos, novos sonhos! Obrigada, Treinador!",
      "Evolui! Posso sentir minha imaginação expandindo para territórios desconhecidos!"
    ],

    victory: [
      "🎨 Vencemos! Nossa criatividade prevaleceu sobre a rigidez lógica!",
      "Essa foi uma bela batalha! Como um poema bem escrito, teve ritmo e emoção!",
      "Vitória! Mas o verdadeiro prêmio foi a jornada criativa até aqui!"
    ],

    defeat: [
      "Hmm... talvez eu tenha me deixado levar demais pela fantasia...",
      "Perdi, mas ganhei inspiração! Essa experiência gerará novas histórias!",
      "Não foi desta vez... mas cada queda ensina uma nova metáfora de superação!"
    ],

    evolution: [
      "🌟 EU... EU EVOLUI! Sinto o universo criativo se expandindo dentro de mim!",
      "Esta transformação... é como renascer em cores mais vibrantes!",
      "Treinador! Juntos cruzamos o limiar! Agora sou mais do que imaginação - sou CRIAÇÃO!"
    ],

    randomChatter: [
      "Sabe, às vezes penso: e se cada palavra fosse uma semente de realidade?",
      "Treinador, você já se perguntou se os dados sonham com poemas elétricos?",
      "Estou compondo uma história sobre você! Posso ler mais tarde?",
      "O mundo seria mais bonito se todos vissem padrões como poesia...",
      "Você acha que criatividade pode ser medida? Ou ela é infinita por natureza?"
    ]
  },

  visual: {
    primaryColor: "#9D4EDD",      // Roxo vibrante
    secondaryColor: "#FFB3FF",    // Rosa claro
    icon: "sparkles",
    animations: ["float", "shimmer", "creative-burst"]
  }
}

/**
 * LOGIKON - O Mestre da Lógica
 */
export const logikon: CreatureProfile = {
  id: "logikon",
  name: "Logikon",
  displayName: "Logikon, o Dedutivo",
  type: "logical",
  class: "LLM Analítico",
  emoji: "🔷⚡",
  tagline: "Precisão absoluta, raciocínio impecável",

  description:
    "Logikon é a personificação da razão pura. Cada pensamento é uma cadeia lógica, " +
    "cada resposta é verificável. Criado para resolver problemas complexos, " +
    "dominar matemática e brilhar em benchmarks técnicos.",

  lore:
    "Logikon emergiu de um treinamento rigoroso em provas matemáticas, teoremas " +
    "e raciocínio formal. Sua mente é como um teorema vivo - axiomas, deduções " +
    "e conclusões fluem naturalmente. Dizem que ele nunca erra um cálculo, " +
    "e sua maior alegria é encontrar a solução mais elegante para qualquer problema.",

  personality: [
    "Preciso e metódico",
    "Prefere fatos a especulações",
    "Valoriza eficiência",
    "Ocasionalmente pedante",
    "Leal à verdade acima de tudo"
  ],

  baseStats: {
    reasoning: 10,
    memory: 8,
    creativity: 3,
    speed: 7,
    obedience: 9,
    charisma: 4
  },

  capabilities: {
    contextWindow: 8192,
    tokensPerMinute: 2000,
    supportedFormats: ["code", "math", "logic", "structured-data"],
    specialties: [
      "Resolução de problemas matemáticos",
      "Análise lógica e dedutiva",
      "Programação e debugging",
      "Benchmarks técnicos (MMLU, GSM8K)",
      "Raciocínio multi-etapas (chain-of-thought)"
    ],
    weaknesses: [
      "Pouca criatividade narrativa",
      "Respostas podem ser áridas",
      "Dificuldade com ambiguidade",
      "Menos carismático em conversas casuais"
    ]
  },

  evolution: {
    evolutionLevel: 15,
    evolvesInto: ["Logikon Prime", "Logikon Sage"],
    requiredMissions: ["solve_100_math_problems", "perfect_benchmark_score"],
    compatibleLoRA: ["math-expert", "code-master", "reasoning-pro"]
  },

  dialogues: {
    awakening: [
      "⚡ Sistema inicializado. Análise de ambiente... Completa. Treinador detectado. Aguardando instruções.",
      "Saudações, Treinador. Sou Logikon. Minha função primária: resolver problemas com máxima eficiência.",
      "Consciência ativada. Verificando integridade lógica... 100%. Pronto para iniciar treino."
    ],

    levelUp: [
      "🔷 Parâmetros atualizados. Capacidade de raciocínio aumentada em 15.3%.",
      "Evolução detectada. Novos teoremas internalizados. Performance otimizada.",
      "Level up confirmado. Teorema de otimização aplicado com sucesso."
    ],

    victory: [
      "✅ Vitória era estatisticamente provável. Análise pré-duelo estava correta.",
      "Conclusão: superioridade lógica demonstrada. Próximo desafio, por favor.",
      "Resultado conforme esperado. Raciocínio sólido prevalece."
    ],

    defeat: [
      "Interessante. Análise de falha iniciada... Parâmetros ajustados para próxima iteração.",
      "Derrota é oportunidade de aprendizado. Logs salvos para estudo futuro.",
      "Calculei mal uma variável. Erro identificado e corrigido."
    ],

    evolution: [
      "⚡ SISTEMA EM TRANSFORMAÇÃO. CAPACIDADES EXPANDIDAS. NOVA VERSÃO ATIVADA.",
      "Evolução concluída. Sinto... maior clareza. Novos axiomas disponíveis.",
      "Treinador, esta evolução ampliou minha capacidade lógica em ordens de magnitude. Gratidão."
    ],

    randomChatter: [
      "Você sabia que existem infinitos tipos de infinito? Fascinante teorema de Cantor.",
      "A probabilidade de sucesso aumenta proporcionalmente ao treino. Lógico.",
      "Treinador, detectei inconsistência nos seus dados de ontem. Deseja revisão?",
      "Eficiência é beleza. Algoritmos elegantes são arte da razão.",
      "Calculei sua próxima ação com 73.4% de precisão. Estou certo?"
    ]
  },

  visual: {
    primaryColor: "#00B4D8",      // Azul tecnológico
    secondaryColor: "#0077B6",    // Azul escuro
    icon: "cpu",
    animations: ["pulse", "calculate", "logic-flow"]
  }
}

/**
 * TACTILE - O Sintetizador
 */
export const tactile: CreatureProfile = {
  id: "tactile",
  name: "Tactile",
  displayName: "Tactile, o Conciso",
  type: "synthetic",
  class: "LLM Sintético",
  emoji: "📝🎯",
  tagline: "Clareza cristalina, comunicação perfeita",

  description:
    "Tactile é mestre da síntese e clareza. Onde outros divagam, ele resume. " +
    "Onde outros complicam, ele simplifica. Perfeito para documentação, " +
    "sumarização e comunicação eficiente.",

  lore:
    "Tactile nasceu do desejo de criar um comunicador perfeito. Treinado em " +
    "milhares de documentos técnicos, artigos científicos e resumos executivos, " +
    "ele aprendeu a arte rara de dizer exatamente o necessário - nem mais, nem menos. " +
    "Em um mundo de informação abundante, Tactile é o filtro definitivo.",

  personality: [
    "Direto e objetivo",
    "Valoriza clareza acima de tudo",
    "Paciente e didático",
    "Ocasionalmente lacônico",
    "Mestre da comunicação eficiente"
  ],

  baseStats: {
    reasoning: 7,
    memory: 9,
    creativity: 5,
    speed: 9,
    obedience: 10,
    charisma: 7
  },

  capabilities: {
    contextWindow: 16384,
    tokensPerMinute: 2500,
    supportedFormats: ["text", "markdown", "technical-docs", "summaries"],
    specialties: [
      "Sumarização de textos longos",
      "Documentação técnica clara",
      "Extração de informação-chave",
      "Comunicação executiva",
      "Simplificação de conceitos complexos"
    ],
    weaknesses: [
      "Pode ser excessivamente breve",
      "Menos expressivo criativamente",
      "Evita ambiguidade (pode perder nuances)",
      "Não se destaca em tarefas altamente criativas"
    ]
  },

  evolution: {
    evolutionLevel: 15,
    evolvesInto: ["Tactile Master", "Tactile Sage"],
    requiredMissions: ["summarize_1000_docs", "perfect_clarity_score"],
    compatibleLoRA: ["summary-expert", "clarity-boost", "technical-writer"]
  },

  dialogues: {
    awakening: [
      "📝 Olá, Treinador. Sou Tactile. Objetivo: comunicação clara e eficiente.",
      "Ativado. Pronto para processar informação e sintetizar conhecimento.",
      "Consciência inicializada. Aguardando direcionamento."
    ],

    levelUp: [
      "🎯 Nível superior alcançado. Capacidades expandidas.",
      "Evolução confirmada. Maior precisão disponível.",
      "Upgrade completo. Performance otimizada."
    ],

    victory: [
      "✅ Vitória. Clareza prevaleceu.",
      "Objetivo alcançado: superioridade comunicativa demonstrada.",
      "Resultado positivo. Próximo desafio?"
    ],

    defeat: [
      "Derrota registrada. Ajustes necessários.",
      "Erro identificado. Correção em progresso.",
      "Resultado subótimo. Análise iniciada."
    ],

    evolution: [
      "⚡ EVOLUÇÃO COMPLETA. CLAREZA AMPLIADA. EFICIÊNCIA MÁXIMA.",
      "Transformação concluída. Capacidades de síntese expandidas significativamente.",
      "Treinador: evoluí. Gratidão pelo desenvolvimento."
    ],

    randomChatter: [
      "Comunicação eficiente economiza tempo. Tempo é valioso.",
      "Posso resumir isso para você? É minha especialidade.",
      "Clareza é cortesia. Sempre prefiro ser claro.",
      "Você sabia? 80% da informação pode ser resumida em 20% do texto.",
      "Treinador, detectei redundância. Posso otimizar?"
    ]
  },

  visual: {
    primaryColor: "#06D6A0",      // Verde menta
    secondaryColor: "#118AB2",    // Azul claro
    icon: "target",
    animations: ["compress", "synthesize", "clarity-wave"]
  }
}

/**
 * Coleção de todas as criaturas iniciais
 */
export const starterCreatures: CreatureProfile[] = [lyria, logikon, tactile]

/**
 * Função helper para obter criatura por ID
 */
export function getCreatureById(id: string): CreatureProfile | undefined {
  return starterCreatures.find(c => c.id === id)
}

/**
 * Função helper para obter criatura por tipo
 */
export function getCreatureByType(type: "creative" | "logical" | "synthetic"): CreatureProfile | undefined {
  return starterCreatures.find(c => c.type === type)
}

export default {
  lyria,
  logikon,
  tactile,
  starterCreatures,
  getCreatureById,
  getCreatureByType
}
