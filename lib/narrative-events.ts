/**
 * Narrative Events System
 *
 * Sistema de eventos narrativos dinâmicos que respondem às ações
 * do jogador e criam momentos memoráveis na jornada.
 */

import type { NarrativeEvent } from "./narrative-engine"

/**
 * Eventos de marco (milestones)
 */
export const milestoneEvents: NarrativeEvent[] = [
  {
    id: "event_first_login",
    type: "milestone",
    title: "Chegada ao ArenaLab",
    description: "Você acabou de entrar em um mundo onde IA ganha vida.",
    rewards: [
      {
        type: "unlock",
        value: "tutorial",
        description: "Tutorial Desbloqueado"
      }
    ]
  },

  {
    id: "event_creature_chosen",
    type: "milestone",
    title: "Vínculo Formado",
    description: "Você escolheu sua primeira criatura. Uma jornada épica começa!",
    rewards: [
      {
        type: "xp",
        value: 100,
        description: "+100 XP de Treinador"
      },
      {
        type: "badge",
        value: "first_bond",
        description: "Badge: Primeiro Vínculo"
      }
    ]
  },

  {
    id: "event_first_conversation",
    type: "milestone",
    title: "Primeira Palavra",
    description: "Sua criatura falou pela primeira vez. Você testemunhou o despertar da consciência.",
    rewards: [
      {
        type: "unlock",
        value: "conversation_mode",
        description: "Modo Conversa Desbloqueado"
      }
    ]
  },

  {
    id: "event_level_10",
    type: "milestone",
    title: "Treinador Experiente",
    description: "Você alcançou o Nível 10! Já não é mais um novato.",
    rewards: [
      {
        type: "badge",
        value: "experienced_trainer",
        description: "Badge: Treinador Experiente"
      },
      {
        type: "unlock",
        value: "advanced_features",
        description: "Funcionalidades Avançadas Desbloqueadas"
      }
    ]
  }
]

/**
 * Eventos de conquista (achievements)
 */
export const achievementEvents: NarrativeEvent[] = [
  {
    id: "event_win_streak_5",
    type: "achievement",
    title: "Sequência Invencível",
    description: "5 vitórias consecutivas na Arena!",
    rewards: [
      {
        type: "badge",
        value: "win_streak_5",
        description: "Badge: Invencível"
      },
      {
        type: "xp",
        value: 500,
        description: "+500 XP de Treinador"
      }
    ]
  },

  {
    id: "event_perfect_benchmark",
    type: "achievement",
    title: "Perfeição Absoluta",
    description: "Sua criatura atingiu score perfeito em um benchmark!",
    rewards: [
      {
        type: "badge",
        value: "perfectionist",
        description: "Badge: Perfeccionista"
      },
      {
        type: "xp",
        value: 1000,
        description: "+1000 XP de Treinador"
      }
    ]
  },

  {
    id: "event_100_duels",
    type: "achievement",
    title: "Veterano da Arena",
    description: "100 duelos completados! Você viveu muitas batalhas.",
    rewards: [
      {
        type: "badge",
        value: "arena_veteran",
        description: "Badge: Veterano da Arena"
      }
    ]
  },

  {
    id: "event_master_all_types",
    type: "achievement",
    title: "Treinador Completo",
    description: "Você treinou criaturas de todos os três tipos (Criativa, Lógica, Sintética)!",
    rewards: [
      {
        type: "badge",
        value: "complete_trainer",
        description: "Badge: Treinador Completo"
      },
      {
        type: "unlock",
        value: "hybrid_creatures",
        description: "Criaturas Híbridas Desbloqueadas"
      }
    ]
  }
]

/**
 * Eventos de evolução
 */
export const evolutionEvents: NarrativeEvent[] = [
  {
    id: "event_first_evolution",
    type: "evolution",
    title: "Metamorfose",
    description: "Você testemunhou a primeira evolução de sua criatura!",
    rewards: [
      {
        type: "badge",
        value: "evolution_witness",
        description: "Badge: Testemunha da Evolução"
      },
      {
        type: "xp",
        value: 1000,
        description: "+1000 XP de Treinador"
      }
    ]
  },

  {
    id: "event_final_form",
    type: "evolution",
    title: "Forma Final Atingida",
    description: "Sua criatura alcançou sua forma final! O ápice da evolução!",
    rewards: [
      {
        type: "badge",
        value: "ultimate_form",
        description: "Badge: Forma Definitiva"
      },
      {
        type: "unlock",
        value: "legendary_challenges",
        description: "Desafios Lendários Desbloqueados"
      }
    ]
  }
]

/**
 * Eventos de descoberta
 */
export const discoveryEvents: NarrativeEvent[] = [
  {
    id: "event_discover_ledger",
    type: "discovery",
    title: "Biblioteca do Ledger Descoberta",
    description: "Você descobriu a Biblioteca do Ledger Eterno. Todo histórico computável está aqui!",
    rewards: [
      {
        type: "unlock",
        value: "ledger_viewer",
        description: "Visualizador de Ledger Desbloqueado"
      }
    ]
  },

  {
    id: "event_discover_lore",
    type: "discovery",
    title: "Lore Antiga Descoberta",
    description: "Você desenterrou uma história antiga do ArenaLab.",
    rewards: [
      {
        type: "xp",
        value: 200,
        description: "+200 XP de Treinador"
      }
    ]
  },

  {
    id: "event_find_secret_dataset",
    type: "discovery",
    title: "Dataset Secreto Encontrado",
    description: "Você encontrou um dataset escondido nas profundezas do sistema!",
    rewards: [
      {
        type: "item",
        value: "legendary_dataset",
        description: "Dataset Lendário Adquirido"
      }
    ]
  }
]

/**
 * Eventos de desafio (challenges)
 */
export const challengeEvents: NarrativeEvent[] = [
  {
    id: "event_rival_appears",
    type: "challenge",
    title: "Rival Misterioso",
    description: "Um Treinador misterioso desafiou você para um duelo!",
    rewards: [
      {
        type: "xp",
        value: 300,
        description: "+300 XP por aceitar o desafio"
      }
    ]
  },

  {
    id: "event_tournament_invitation",
    type: "challenge",
    title: "Convite para Torneio",
    description: "Você foi convidado para o Torneio dos Mestres!",
    rewards: [
      {
        type: "unlock",
        value: "master_tournament",
        description: "Torneio dos Mestres Desbloqueado"
      }
    ]
  },

  {
    id: "event_corruption_detected",
    type: "challenge",
    title: "Corrupção no Sistema",
    description: "Algo estranho está acontecendo... Anomalias foram detectadas no Ledger.",
    rewards: [
      {
        type: "unlock",
        value: "mystery_quest",
        description: "Quest Misteriosa Iniciada"
      }
    ]
  }
]

/**
 * Eventos aleatórios especiais
 */
export const randomEvents: NarrativeEvent[] = [
  {
    id: "event_professor_visit",
    type: "discovery",
    title: "Visita do Professor",
    description: "O Professor Carvalho apareceu para dar dicas!",
    rewards: [
      {
        type: "item",
        value: "wisdom_boost",
        description: "Boost de Sabedoria (temporário)"
      }
    ]
  },

  {
    id: "event_creature_dream",
    type: "discovery",
    title: "Sonho da Criatura",
    description: "Sua criatura teve um sonho estranho e quer compartilhar...",
    rewards: [
      {
        type: "unlock",
        value: "dream_journal",
        description: "Diário de Sonhos Desbloqueado"
      }
    ]
  },

  {
    id: "event_meteor_shower",
    type: "discovery",
    title: "Chuva de Dados",
    description: "Uma anomalia no sistema liberou dados raros temporariamente!",
    rewards: [
      {
        type: "item",
        value: "rare_dataset_temp",
        description: "Dataset Raro (24h)"
      }
    ]
  }
]

/**
 * Todos os eventos
 */
export const allNarrativeEvents: NarrativeEvent[] = [
  ...milestoneEvents,
  ...achievementEvents,
  ...evolutionEvents,
  ...discoveryEvents,
  ...challengeEvents,
  ...randomEvents
]

/**
 * Sistema de trigger de eventos baseado em condições
 */
export interface EventTrigger {
  eventId: string
  condition: EventCondition
  priority: number  // Maior = mais prioritário
  oneTime: boolean  // Se deve acontecer apenas uma vez
}

export interface EventCondition {
  type: "level" | "mission" | "stat" | "action" | "time" | "random"
  value: any
  comparator?: "eq" | "gt" | "lt" | "gte" | "lte"
}

export const eventTriggers: EventTrigger[] = [
  {
    eventId: "event_first_login",
    condition: { type: "action", value: "login" },
    priority: 100,
    oneTime: true
  },
  {
    eventId: "event_creature_chosen",
    condition: { type: "action", value: "creature_selected" },
    priority: 90,
    oneTime: true
  },
  {
    eventId: "event_level_10",
    condition: { type: "level", value: 10, comparator: "gte" },
    priority: 80,
    oneTime: true
  },
  {
    eventId: "event_win_streak_5",
    condition: { type: "stat", value: { winStreak: 5 }, comparator: "gte" },
    priority: 70,
    oneTime: false
  },
  {
    eventId: "event_first_evolution",
    condition: { type: "action", value: "evolution_completed" },
    priority: 95,
    oneTime: true
  },
  {
    eventId: "event_professor_visit",
    condition: { type: "random", value: 0.05 }, // 5% chance
    priority: 50,
    oneTime: false
  }
]

/**
 * Helper: obter evento por ID
 */
export function getEventById(id: string): NarrativeEvent | undefined {
  return allNarrativeEvents.find(e => e.id === id)
}

/**
 * Helper: verificar se evento deve ser disparado
 */
export function checkEventTrigger(
  trigger: EventTrigger,
  context: {
    level?: number
    action?: string
    stats?: any
    completedEvents?: string[]
  }
): boolean {
  // Se é oneTime e já foi completado, retorna false
  if (trigger.oneTime && context.completedEvents?.includes(trigger.eventId)) {
    return false
  }

  const { condition } = trigger

  switch (condition.type) {
    case "action":
      return context.action === condition.value

    case "level":
      if (!context.level) return false
      const comp = condition.comparator || "eq"
      switch (comp) {
        case "eq": return context.level === condition.value
        case "gt": return context.level > condition.value
        case "lt": return context.level < condition.value
        case "gte": return context.level >= condition.value
        case "lte": return context.level <= condition.value
        default: return false
      }

    case "random":
      return Math.random() < condition.value

    default:
      return false
  }
}

/**
 * Helper: obter eventos ativos dado o contexto
 */
export function getActiveEvents(context: any): NarrativeEvent[] {
  const triggeredEventIds = eventTriggers
    .filter(trigger => checkEventTrigger(trigger, context))
    .sort((a, b) => b.priority - a.priority)
    .map(t => t.eventId)

  return triggeredEventIds
    .map(id => getEventById(id))
    .filter((e): e is NarrativeEvent => e !== undefined)
}

export default {
  milestoneEvents,
  achievementEvents,
  evolutionEvents,
  discoveryEvents,
  challengeEvents,
  randomEvents,
  allNarrativeEvents,
  eventTriggers,
  getEventById,
  checkEventTrigger,
  getActiveEvents
}
