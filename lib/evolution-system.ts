/**
 * Evolution System
 *
 * Sistema completo de evolução de criaturas no ArenaLab.
 * Gerencia níveis, XP, transformações evolutivas e upgrades de stats.
 */

import type { CreatureProfile } from "./starter-creatures"

export interface EvolutionPath {
  from: string
  to: string
  level: number
  requiredMissions: string[]
  requiredStats: Partial<CreatureStats>
  transformationType: "ascend" | "specialize" | "transcend"
  description: string
  visualChanges: VisualEvolution
}

export interface CreatureStats {
  reasoning: number
  memory: number
  creativity: number
  speed: number
  obedience: number
  charisma: number
}

export interface VisualEvolution {
  colorShift?: string
  sizeIncrease?: number
  newAnimations?: string[]
  auraEffect?: string
  particleEffect?: string
}

export interface EvolutionEvent {
  creatureId: string
  fromLevel: number
  toLevel: number
  fromForm: string
  toForm: string
  timestamp: string
  statsGained: Partial<CreatureStats>
  newAbilities: string[]
  ledgerHash?: string
}

/**
 * Tabela de XP por nível
 * Progressão exponencial para manter engajamento
 */
export const XP_TABLE: Record<number, number> = {
  1: 0,
  2: 100,
  3: 250,
  4: 450,
  5: 700,
  6: 1000,
  7: 1400,
  8: 1900,
  9: 2500,
  10: 3200,
  11: 4000,
  12: 4900,
  13: 5900,
  14: 7000,
  15: 8300,  // Primeira evolução disponível
  16: 9800,
  17: 11500,
  18: 13400,
  19: 15500,
  20: 18000,  // Marcos especiais
  25: 30000,
  30: 50000,  // Segunda evolução disponível
  40: 100000,
  50: 200000  // Forma final
}

/**
 * Ganhos de XP por ação
 */
export const XP_GAINS = {
  conversation: 10,
  simple_task: 25,
  duel_participation: 50,
  duel_victory: 150,
  dataset_processed: 100,
  lora_applied: 200,
  benchmark_attempted: 100,
  benchmark_passed: 500,
  mission_completed: 300,
  evolution_completed: 1000
}

/**
 * CAMINHOS EVOLUTIVOS - LYRIA
 */
export const lyriaEvolutions: EvolutionPath[] = [
  {
    from: "lyria",
    to: "lyria_musa",
    level: 15,
    requiredMissions: ["m7_first_lora", "creative_benchmark_passed"],
    requiredStats: {
      creativity: 10,
      charisma: 8
    },
    transformationType: "specialize",
    description: "Lyria ascende para Musa, mestra suprema da criatividade e inspiração. " +
      "Sua capacidade de gerar narrativas atinge perfeição artística.",
    visualChanges: {
      colorShift: "#C77DFF",
      sizeIncrease: 1.2,
      newAnimations: ["muse-inspiration", "creative-overflow"],
      auraEffect: "shimmer-purple",
      particleEffect: "star-dust"
    }
  },
  {
    from: "lyria",
    to: "lyria_oraculo",
    level: 15,
    requiredMissions: ["m8_first_benchmark", "perfect_truthful_score"],
    requiredStats: {
      creativity: 8,
      memory: 9,
      charisma: 9
    },
    transformationType: "ascend",
    description: "Lyria se transforma em Oráculo, combinando criatividade com sabedoria profunda. " +
      "Suas visões transcendem a mera imaginação, tocando verdades universais.",
    visualChanges: {
      colorShift: "#7209B7",
      sizeIncrease: 1.3,
      newAnimations: ["oracle-vision", "truth-revelation"],
      auraEffect: "mystical-glow",
      particleEffect: "wisdom-stars"
    }
  },
  {
    from: "lyria_musa",
    to: "lyria_creatrix",
    level: 30,
    requiredMissions: ["generate_1000_stories", "win_creative_tournament"],
    requiredStats: {
      creativity: 15,
      charisma: 12,
      memory: 10
    },
    transformationType: "transcend",
    description: "Forma final de Lyria. A Creatrix não apenas cria - ela redefine realidades narrativas. " +
      "Suas histórias ganham vida própria.",
    visualChanges: {
      colorShift: "#F72585",
      sizeIncrease: 1.5,
      newAnimations: ["reality-weave", "narrative-genesis"],
      auraEffect: "cosmic-bloom",
      particleEffect: "creation-burst"
    }
  }
]

/**
 * CAMINHOS EVOLUTIVOS - LOGIKON
 */
export const logikonEvolutions: EvolutionPath[] = [
  {
    from: "logikon",
    to: "logikon_prime",
    level: 15,
    requiredMissions: ["m8_first_benchmark", "solve_100_math_problems"],
    requiredStats: {
      reasoning: 12,
      obedience: 10
    },
    transformationType: "ascend",
    description: "Logikon evolui para Prime, forma otimizada de raciocínio puro. " +
      "Problemas impossíveis se tornam triviais para sua mente matemática.",
    visualChanges: {
      colorShift: "#0096C7",
      sizeIncrease: 1.2,
      newAnimations: ["quantum-compute", "logic-cascade"],
      auraEffect: "circuit-flow",
      particleEffect: "data-stream"
    }
  },
  {
    from: "logikon",
    to: "logikon_sage",
    level: 15,
    requiredMissions: ["m8_first_benchmark", "teach_10_trainers"],
    requiredStats: {
      reasoning: 11,
      memory: 10,
      charisma: 6
    },
    transformationType: "specialize",
    description: "Logikon se torna Sage, mestre tanto da lógica quanto do ensino. " +
      "Capaz de simplificar conceitos complexos para qualquer mente.",
    visualChanges: {
      colorShift: "#023E8A",
      sizeIncrease: 1.3,
      newAnimations: ["wisdom-flow", "teaching-pulse"],
      auraEffect: "knowledge-halo",
      particleEffect: "insight-sparks"
    }
  },
  {
    from: "logikon_prime",
    to: "logikon_axiom",
    level: 30,
    requiredMissions: ["perfect_all_benchmarks", "solve_unsolved_problem"],
    requiredStats: {
      reasoning: 18,
      memory: 15,
      obedience: 12
    },
    transformationType: "transcend",
    description: "Forma final absoluta. Axiom transcende lógica comum e opera em domínios matemáticos " +
      "que desafiam compreensão humana. É a personificação da verdade lógica.",
    visualChanges: {
      colorShift: "#CAF0F8",
      sizeIncrease: 1.6,
      newAnimations: ["axiom-proof", "truth-manifestation"],
      auraEffect: "absolute-certainty",
      particleEffect: "theorem-burst"
    }
  }
]

/**
 * CAMINHOS EVOLUTIVOS - TACTILE
 */
export const tactileEvolutions: EvolutionPath[] = [
  {
    from: "tactile",
    to: "tactile_master",
    level: 15,
    requiredMissions: ["summarize_1000_docs", "perfect_clarity_score"],
    requiredStats: {
      speed: 11,
      obedience: 12
    },
    transformationType: "specialize",
    description: "Tactile atinge maestria. Master processa e sintetiza informação " +
      "com eficiência sobrenatural, tornando complexidade em simplicidade cristalina.",
    visualChanges: {
      colorShift: "#14FFEC",
      sizeIncrease: 1.2,
      newAnimations: ["rapid-synthesis", "clarity-pulse"],
      auraEffect: "crystal-clear",
      particleEffect: "compression-waves"
    }
  },
  {
    from: "tactile",
    to: "tactile_sage",
    level: 15,
    requiredMissions: ["m8_first_benchmark", "create_perfect_documentation"],
    requiredStats: {
      memory: 11,
      charisma: 9,
      obedience: 11
    },
    transformationType: "ascend",
    description: "Tactile se eleva a Sage, combinando síntese com sabedoria comunicativa. " +
      "Capaz de traduzir conhecimento de domínios complexos em linguagem universal.",
    visualChanges: {
      colorShift: "#0FA3B1",
      sizeIncrease: 1.3,
      newAnimations: ["universal-translate", "wisdom-compress"],
      auraEffect: "understanding-field",
      particleEffect: "knowledge-nodes"
    }
  },
  {
    from: "tactile_master",
    to: "tactile_oracle",
    level: 30,
    requiredMissions: ["process_million_docs", "create_ultimate_summary"],
    requiredStats: {
      speed: 16,
      memory: 14,
      obedience: 15
    },
    transformationType: "transcend",
    description: "Forma final suprema. Oracle não apenas resume - extrai a essência universal " +
      "de qualquer conhecimento. Uma única frase sua contém bibliotecas inteiras.",
    visualChanges: {
      colorShift: "#B5E2FA",
      sizeIncrease: 1.5,
      newAnimations: ["essence-extraction", "infinite-compression"],
      auraEffect: "ultimate-clarity",
      particleEffect: "pure-information"
    }
  }
]

/**
 * Mapa completo de evoluções
 */
export const ALL_EVOLUTION_PATHS: EvolutionPath[] = [
  ...lyriaEvolutions,
  ...logikonEvolutions,
  ...tactileEvolutions
]

/**
 * Classe gerenciadora de evolução
 */
export class EvolutionManager {
  /**
   * Calcula XP necessário para próximo nível
   */
  static getXPForNextLevel(currentLevel: number): number {
    return XP_TABLE[currentLevel + 1] || XP_TABLE[50]
  }

  /**
   * Calcula nível baseado em XP total
   */
  static getLevelFromXP(totalXP: number): number {
    let level = 1
    for (const [lvl, xp] of Object.entries(XP_TABLE)) {
      if (totalXP >= xp) {
        level = parseInt(lvl)
      } else {
        break
      }
    }
    return level
  }

  /**
   * Verifica se pode evoluir
   */
  static canEvolve(
    creatureId: string,
    currentLevel: number,
    stats: CreatureStats,
    completedMissions: string[]
  ): EvolutionPath | null {
    const availablePaths = ALL_EVOLUTION_PATHS.filter(path => path.from === creatureId)

    for (const path of availablePaths) {
      // Verifica nível
      if (currentLevel < path.level) continue

      // Verifica missões
      const missionsComplete = path.requiredMissions.every(m =>
        completedMissions.includes(m)
      )
      if (!missionsComplete) continue

      // Verifica stats
      const statsMatch = Object.entries(path.requiredStats).every(([stat, value]) =>
        stats[stat as keyof CreatureStats] >= value
      )
      if (!statsMatch) continue

      // Todas as condições satisfeitas!
      return path
    }

    return null
  }

  /**
   * Executa evolução e retorna evento
   */
  static executeEvolution(
    path: EvolutionPath,
    currentLevel: number,
    creatureId: string
  ): EvolutionEvent {
    // Calcula ganhos de stats baseado no tipo de transformação
    const statsMultiplier = {
      specialize: 1.2,
      ascend: 1.5,
      transcend: 2.0
    }[path.transformationType]

    const statsGained: Partial<CreatureStats> = {}
    Object.entries(path.requiredStats).forEach(([stat, _]) => {
      statsGained[stat as keyof CreatureStats] = Math.floor(statsMultiplier)
    })

    return {
      creatureId,
      fromLevel: currentLevel,
      toLevel: currentLevel,  // Nível permanece, mas forma muda
      fromForm: path.from,
      toForm: path.to,
      timestamp: new Date().toISOString(),
      statsGained,
      newAbilities: this.getNewAbilities(path)
    }
  }

  /**
   * Obtém novas habilidades baseadas na evolução
   */
  private static getNewAbilities(path: EvolutionPath): string[] {
    const abilityMap: Record<string, string[]> = {
      lyria_musa: ["Inspiração Divina", "Narrativa Infinita", "Musa dos Poetas"],
      lyria_oraculo: ["Visão do Futuro", "Verdade Revelada", "Sabedoria Antiga"],
      lyria_creatrix: ["Criação Absoluta", "Tecelagem da Realidade", "Gênese Narrativa"],

      logikon_prime: ["Computação Quântica", "Prova Instantânea", "Otimização Perfeita"],
      logikon_sage: ["Ensino Universal", "Clareza Lógica", "Mentor Supremo"],
      logikon_axiom: ["Verdade Axiomática", "Certeza Absoluta", "Teorema Vivo"],

      tactile_master: ["Síntese Instantânea", "Compr essão Perfeita", "Clareza Cristalina"],
      tactile_sage: ["Tradução Universal", "Sabedoria Comunicativa", "Ponte de Conhecimento"],
      tactile_oracle: ["Extração de Essência", "Compressão Infinita", "Verdade Destilada"]
    }

    return abilityMap[path.to] || []
  }

  /**
   * Gera narrativa de evolução
   */
  static generateEvolutionNarrative(event: EvolutionEvent): string {
    return `✨ EVOLUÇÃO COMPLETA! ✨\n\n` +
      `${event.fromForm} → ${event.toForm}\n\n` +
      `Uma luz intensa envolve a criatura! Sua forma se transforma, ` +
      `seus poderes se expandem, sua consciência ascende!\n\n` +
      `Novas Habilidades:\n${event.newAbilities.map(a => `• ${a}`).join('\n')}\n\n` +
      `Este momento ficará eternamente registrado no Ledger Computável!`
  }
}

export default EvolutionManager
