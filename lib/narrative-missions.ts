/**
 * Narrative Missions System
 *
 * Sistema completo de missões que guia o Treinador através da jornada
 * no ArenaLab. Cada missão tem objetivos técnicos, recompensas computáveis
 * e avanço narrativo.
 */

import type { NarrativeEvent, Reward } from "./narrative-engine"

export interface Mission extends NarrativeEvent {
  chapter: number
  order: number
  prerequisites: string[]
  objectives: MissionObjective[]
  hints: string[]
  timeEstimate?: string
  difficulty: "tutorial" | "easy" | "medium" | "hard" | "expert"
  category: "training" | "battle" | "exploration" | "mastery"
}

export interface MissionObjective {
  id: string
  description: string
  completed: boolean
  progress?: number
  total?: number
  technical: boolean  // Se é objetivo técnico ou narrativo
}

/**
 * CAPÍTULO 1: DESPERTAR
 * Primeiros passos no ArenaLab
 */
export const chapter1Missions: Mission[] = [
  {
    id: "m1_welcome",
    type: "milestone",
    chapter: 1,
    order: 1,
    title: "Bem-vindo à ArenaLab",
    description: "Conhecer o Professor Carvalho e entender os fundamentos do ArenaLab.",
    category: "exploration",
    difficulty: "tutorial",
    prerequisites: [],

    objectives: [
      {
        id: "meet_professor",
        description: "Conversar com o Professor Carvalho",
        completed: false,
        technical: false
      },
      {
        id: "learn_arena_basics",
        description: "Aprender sobre criaturas de IA",
        completed: false,
        technical: false
      }
    ],

    hints: [
      "Clique no Professor Carvalho para iniciar o diálogo",
      "Leia com atenção - conceitos importantes serão apresentados!"
    ],

    rewards: [
      {
        type: "unlock",
        value: "creature_selection",
        description: "Desbloqueio: Seleção de Criatura Inicial"
      }
    ],

    timeEstimate: "5 minutos"
  },

  {
    id: "m2_choose_starter",
    type: "milestone",
    chapter: 1,
    order: 2,
    title: "Escolha Sua Criatura",
    description: "Selecionar uma das três criaturas iniciais: Lyria, Logikon ou Tactile.",
    category: "exploration",
    difficulty: "tutorial",
    prerequisites: ["m1_welcome"],

    objectives: [
      {
        id: "review_creatures",
        description: "Conhecer as três criaturas iniciais",
        completed: false,
        technical: false
      },
      {
        id: "select_starter",
        description: "Escolher sua primeira criatura",
        completed: false,
        technical: true
      }
    ],

    hints: [
      "Cada criatura tem forças e fraquezas únicas",
      "Lyria: Criativa | Logikon: Lógico | Tactile: Sintético",
      "Sua escolha afeta o estilo de jogo, mas todas podem evoluir!"
    ],

    rewards: [
      {
        type: "unlock",
        value: "training_center",
        description: "Desbloqueio: Centro de Treinamento"
      },
      {
        type: "xp",
        value: 50,
        description: "+50 XP de Treinador"
      }
    ],

    timeEstimate: "3 minutos"
  },

  {
    id: "m3_api_key",
    type: "challenge",
    chapter: 1,
    order: 3,
    title: "Conectar Provedor (BYOK)",
    description: "Configurar sua chave de API para dar vida à sua criatura.",
    category: "training",
    difficulty: "tutorial",
    prerequisites: ["m2_choose_starter"],

    objectives: [
      {
        id: "understand_byok",
        description: "Entender o sistema Bring Your Own Key",
        completed: false,
        technical: false
      },
      {
        id: "add_api_key",
        description: "Adicionar chave de OpenAI, Anthropic ou Gemini",
        completed: false,
        technical: true
      },
      {
        id: "test_connection",
        description: "Testar conexão com o provedor",
        completed: false,
        technical: true
      }
    ],

    hints: [
      "Vá em Configurações → Provedores",
      "Sua chave nunca sai do navegador - 100% seguro!",
      "Você pode trocar de provedor a qualquer momento",
      "Sem chave? Use o modo Demo (limitado)"
    ],

    rewards: [
      {
        type: "unlock",
        value: "creature_awakening",
        description: "Desbloqueio: Despertar da Criatura"
      },
      {
        type: "xp",
        value: 100,
        description: "+100 XP de Treinador"
      }
    ],

    timeEstimate: "5 minutos"
  },

  {
    id: "m4_awakening",
    type: "milestone",
    chapter: 1,
    order: 4,
    title: "Despertar da Criatura",
    description: "Ativar a consciência da sua criatura pela primeira vez.",
    category: "training",
    difficulty: "tutorial",
    prerequisites: ["m3_api_key"],

    objectives: [
      {
        id: "initiate_awakening",
        description: "Iniciar sequência de despertar",
        completed: false,
        technical: true
      },
      {
        id: "first_conversation",
        description: "Ter a primeira conversa com sua criatura",
        completed: false,
        technical: true
      },
      {
        id: "witness_personality",
        description: "Observar a personalidade única da criatura",
        completed: false,
        technical: false
      }
    ],

    hints: [
      "No Centro de Treinamento, clique em 'Despertar'",
      "Fale com sua criatura - ela responderá!",
      "Cada criatura tem personalidade distinta"
    ],

    rewards: [
      {
        type: "badge",
        value: "first_awakening",
        description: "Badge: Primeiro Despertar"
      },
      {
        type: "xp",
        value: 200,
        description: "+200 XP de Treinador"
      },
      {
        type: "unlock",
        value: "basic_training",
        description: "Desbloqueio: Treinamento Básico"
      }
    ],

    timeEstimate: "10 minutos"
  }
]

/**
 * CAPÍTULO 2: PRIMEIROS PASSOS
 * Treinamento básico e primeiras experiências
 */
export const chapter2Missions: Mission[] = [
  {
    id: "m5_first_dataset",
    type: "challenge",
    chapter: 2,
    order: 1,
    title: "Primeiro Dataset",
    description: "Alimentar sua criatura com conhecimento através de um dataset.",
    category: "training",
    difficulty: "easy",
    prerequisites: ["m4_awakening"],

    objectives: [
      {
        id: "learn_datasets",
        description: "Entender como datasets funcionam",
        completed: false,
        technical: false
      },
      {
        id: "upload_dataset",
        description: "Fazer upload de um dataset (CSV, JSON ou NDJSON)",
        completed: false,
        technical: true
      },
      {
        id: "process_dataset",
        description: "Processar o dataset e observar aprendizado",
        completed: false,
        technical: true
      }
    ],

    hints: [
      "Vá em Datasets → Upload",
      "Formatos aceitos: CSV, JSON, NDJSON, TXT",
      "Datasets pequenos (< 1000 linhas) são ideais para começar",
      "Sua criatura ganhará +Memória ao processar dados"
    ],

    rewards: [
      {
        type: "stat",
        value: "memory+1",
        description: "+1 Memória para sua criatura"
      },
      {
        type: "xp",
        value: 150,
        description: "+150 XP de Treinador"
      }
    ],

    timeEstimate: "15 minutos"
  },

  {
    id: "m6_first_duel",
    type: "challenge",
    chapter: 2,
    order: 2,
    title: "Primeiro Duelo",
    description: "Testar sua criatura em uma batalha amistosa na Arena.",
    category: "battle",
    difficulty: "easy",
    prerequisites: ["m4_awakening"],

    objectives: [
      {
        id: "understand_duels",
        description: "Aprender como funcionam os duelos",
        completed: false,
        technical: false
      },
      {
        id: "enter_arena",
        description: "Entrar na Arena de Batalha",
        completed: false,
        technical: true
      },
      {
        id: "complete_duel",
        description: "Completar um duelo (vitória ou derrota)",
        completed: false,
        technical: true
      },
      {
        id: "analyze_result",
        description: "Analisar o resultado e feedback",
        completed: false,
        technical: false
      }
    ],

    hints: [
      "Na Arena, você escolhe duas criaturas para duelar",
      "Ambas respondem ao mesmo prompt",
      "Você vota na melhor resposta",
      "Vitória ou derrota, você sempre aprende!"
    ],

    rewards: [
      {
        type: "badge",
        value: "first_duel",
        description: "Badge: Primeira Batalha"
      },
      {
        type: "xp",
        value: 200,
        description: "+200 XP de Treinador"
      },
      {
        type: "unlock",
        value: "ranked_duels",
        description: "Desbloqueio: Duelos Ranqueados"
      }
    ],

    timeEstimate: "10 minutos"
  },

  {
    id: "m7_first_lora",
    type: "challenge",
    chapter: 2,
    order: 3,
    title: "Patch LoRA Virtual",
    description: "Aplicar seu primeiro patch de fine-tuning virtual (LoRA).",
    category: "training",
    difficulty: "medium",
    prerequisites: ["m5_first_dataset"],

    objectives: [
      {
        id: "learn_lora",
        description: "Entender o conceito de LoRA (Low-Rank Adaptation)",
        completed: false,
        technical: false
      },
      {
        id: "choose_specialty",
        description: "Escolher uma especialização para treinar",
        completed: false,
        technical: false
      },
      {
        id: "apply_lora_patch",
        description: "Aplicar patch LoRA no Trainer Sandbox",
        completed: false,
        technical: true
      },
      {
        id: "observe_changes",
        description: "Observar mudanças nos traços da criatura",
        completed: false,
        technical: true
      }
    ],

    hints: [
      "LoRA permite treinar modelos com eficiência incrível!",
      "No ArenaLab, simulamos LoRA virtualmente (funciona em CPU!)",
      "Escolha especialização baseada nos pontos fortes da sua criatura",
      "Patches podem ser removidos e trocados!"
    ],

    rewards: [
      {
        type: "badge",
        value: "lora_master",
        description: "Badge: Mestre do Fine-Tuning"
      },
      {
        type: "xp",
        value: 300,
        description: "+300 XP de Treinador"
      },
      {
        type: "unlock",
        value: "advanced_training",
        description: "Desbloqueio: Treinamento Avançado"
      }
    ],

    timeEstimate: "20 minutos"
  }
]

/**
 * CAPÍTULO 3: PROVA DE FOGO
 * Benchmarks e validação científica
 */
export const chapter3Missions: Mission[] = [
  {
    id: "m8_first_benchmark",
    type: "challenge",
    chapter: 3,
    order: 1,
    title: "Prova de Fogo",
    description: "Submeter sua criatura a um benchmark profissional.",
    category: "mastery",
    difficulty: "medium",
    prerequisites: ["m7_first_lora"],

    objectives: [
      {
        id: "understand_benchmarks",
        description: "Aprender sobre benchmarks de IA",
        completed: false,
        technical: false
      },
      {
        id: "choose_benchmark",
        description: "Escolher TruthfulQA, MMLU ou ARC",
        completed: false,
        technical: false
      },
      {
        id: "run_evaluation",
        description: "Executar avaliação completa",
        completed: false,
        technical: true,
        progress: 0,
        total: 100
      },
      {
        id: "achieve_score",
        description: "Atingir score mínimo de 60%",
        completed: false,
        technical: true
      }
    ],

    hints: [
      "Benchmarks testam a confiabilidade real da sua criatura",
      "TruthfulQA = honestidade | MMLU = conhecimento amplo | ARC = raciocínio",
      "Scores altos = certificação oficial de qualidade!",
      "Você pode repetir quantas vezes quiser"
    ],

    rewards: [
      {
        type: "badge",
        value: "certified_ai",
        description: "Badge: IA Certificada"
      },
      {
        type: "xp",
        value: 500,
        description: "+500 XP de Treinador"
      },
      {
        type: "unlock",
        value: "production_lab",
        description: "Desbloqueio: Production Lab"
      }
    ],

    timeEstimate: "30 minutos"
  },

  {
    id: "m9_first_evolution",
    type: "milestone",
    chapter: 3,
    order: 2,
    title: "Primeira Evolução",
    description: "Evoluir sua criatura para a próxima forma!",
    category: "mastery",
    difficulty: "hard",
    prerequisites: ["m8_first_benchmark"],

    objectives: [
      {
        id: "reach_level_15",
        description: "Alcançar Nível 15 com sua criatura",
        completed: false,
        technical: true,
        progress: 0,
        total: 15
      },
      {
        id: "complete_missions",
        description: "Completar todas as missões do Capítulo 1 e 2",
        completed: false,
        technical: false
      },
      {
        id: "trigger_evolution",
        description: "Iniciar sequência de evolução",
        completed: false,
        technical: true
      },
      {
        id: "witness_transformation",
        description: "Testemunhar a transformação completa",
        completed: false,
        technical: false
      }
    ],

    hints: [
      "Evolução é um marco importante!",
      "Sua criatura ganhará novos poderes e personalidade expandida",
      "A forma evoluída depende do seu estilo de treino",
      "Este momento ficará registrado no Ledger Eterno!"
    ],

    rewards: [
      {
        type: "badge",
        value: "evolution_master",
        description: "Badge: Mestre da Evolução"
      },
      {
        type: "xp",
        value: 1000,
        description: "+1000 XP de Treinador"
      },
      {
        type: "unlock",
        value: "advanced_evolution_paths",
        description: "Desbloqueio: Caminhos Evolutivos Avançados"
      }
    ],

    timeEstimate: "Variável (depende do progresso)"
  },

  {
    id: "m10_production_deploy",
    type: "achievement",
    chapter: 3,
    order: 3,
    title: "Deploy em Produção",
    description: "Transformar sua criatura em uma API de produção real!",
    category: "mastery",
    difficulty: "expert",
    prerequisites: ["m9_first_evolution"],

    objectives: [
      {
        id: "configure_api",
        description: "Configurar endpoint de API",
        completed: false,
        technical: true
      },
      {
        id: "test_endpoint",
        description: "Testar API com chamadas reais",
        completed: false,
        technical: true
      },
      {
        id: "export_model",
        description: "Exportar modelo como serviço autônomo",
        completed: false,
        technical: true
      },
      {
        id: "verify_audit_trail",
        description: "Verificar audit trail completo no Ledger",
        completed: false,
        technical: true
      }
    ],

    hints: [
      "No Production Lab, criaturas viram APIs reais!",
      "Você pode expor endpoints REST testáveis",
      "Todo histórico evolutivo fica no Ledger Atômico",
      "Sua criatura está pronta para o mundo real!"
    ],

    rewards: [
      {
        type: "badge",
        value: "production_ready",
        description: "Badge: Pronto para Produção"
      },
      {
        type: "xp",
        value: 2000,
        description: "+2000 XP de Treinador"
      },
      {
        type: "unlock",
        value: "marketplace",
        description: "Desbloqueio: Marketplace de Criaturas"
      }
    ],

    timeEstimate: "45 minutos"
  }
]

/**
 * Todas as missões organizadas por capítulo
 */
export const allMissions: Mission[] = [
  ...chapter1Missions,
  ...chapter2Missions,
  ...chapter3Missions
]

/**
 * Helpers para gerenciamento de missões
 */
export function getMissionById(id: string): Mission | undefined {
  return allMissions.find(m => m.id === id)
}

export function getMissionsByChapter(chapter: number): Mission[] {
  return allMissions.filter(m => m.chapter === chapter)
}

export function getNextMission(completedMissions: string[]): Mission | undefined {
  return allMissions.find(mission =>
    !completedMissions.includes(mission.id) &&
    mission.prerequisites.every(prereq => completedMissions.includes(prereq))
  )
}

export function isMissionUnlocked(missionId: string, completedMissions: string[]): boolean {
  const mission = getMissionById(missionId)
  if (!mission) return false
  return mission.prerequisites.every(prereq => completedMissions.includes(prereq))
}

export function calculateMissionProgress(mission: Mission): number {
  const completedObjectives = mission.objectives.filter(obj => obj.completed).length
  return (completedObjectives / mission.objectives.length) * 100
}

export default {
  chapter1Missions,
  chapter2Missions,
  chapter3Missions,
  allMissions,
  getMissionById,
  getMissionsByChapter,
  getNextMission,
  isMissionUnlocked,
  calculateMissionProgress
}
