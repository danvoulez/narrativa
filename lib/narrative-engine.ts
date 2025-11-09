/**
 * ArenaLab Narrative Engine
 *
 * Sistema central de narrativa que gerencia diálogos, eventos,
 * progressão da história e feedback contextual ao jogador.
 */

export interface NarrativeContext {
  playerName?: string
  currentCreature?: string
  trainerLevel: number
  completedMissions: string[]
  currentMission?: string
  worldState: WorldState
}

export interface WorldState {
  day: number
  achievements: string[]
  unlockedAreas: string[]
  reputation: number
}

export interface DialogueNode {
  id: string
  speaker: "professor" | "creature" | "system" | "rival"
  text: string | ((context: NarrativeContext) => string)
  emotion?: "neutral" | "happy" | "excited" | "concerned" | "proud"
  choices?: DialogueChoice[]
  next?: string
  condition?: (context: NarrativeContext) => boolean
}

export interface DialogueChoice {
  text: string
  next: string
  action?: (context: NarrativeContext) => void
}

export interface NarrativeEvent {
  id: string
  type: "milestone" | "achievement" | "evolution" | "discovery" | "challenge"
  title: string
  description: string
  dialogue?: DialogueNode[]
  rewards?: Reward[]
  unlocks?: string[]
}

export interface Reward {
  type: "xp" | "item" | "unlock" | "badge" | "stat"
  value: string | number
  description: string
}

export class NarrativeEngine {
  private context: NarrativeContext
  private dialogueHistory: DialogueNode[] = []
  private currentDialogue?: DialogueNode

  constructor(initialContext: Partial<NarrativeContext> = {}) {
    this.context = {
      trainerLevel: 1,
      completedMissions: [],
      worldState: {
        day: 1,
        achievements: [],
        unlockedAreas: ["training-center"],
        reputation: 0
      },
      ...initialContext
    }
  }

  /**
   * Processa um evento narrativo e retorna os diálogos correspondentes
   */
  processEvent(event: NarrativeEvent): DialogueNode[] {
    const validDialogues = event.dialogue?.filter(node =>
      !node.condition || node.condition(this.context)
    ) || []

    return validDialogues
  }

  /**
   * Obtém o diálogo atual baseado no contexto
   */
  getCurrentDialogue(nodeId: string, dialogueTree: DialogueNode[]): DialogueNode | undefined {
    const node = dialogueTree.find(d => d.id === nodeId)

    if (node && node.condition && !node.condition(this.context)) {
      return undefined
    }

    return node
  }

  /**
   * Interpola texto com contexto
   */
  interpolateText(text: string | ((context: NarrativeContext) => string)): string {
    if (typeof text === 'function') {
      return text(this.context)
    }

    return text
      .replace(/\{playerName\}/g, this.context.playerName || "Treinador")
      .replace(/\{creature\}/g, this.context.currentCreature || "sua criatura")
      .replace(/\{level\}/g, this.context.trainerLevel.toString())
  }

  /**
   * Registra missão como completa e atualiza contexto
   */
  completeMission(missionId: string, rewards?: Reward[]) {
    if (!this.context.completedMissions.includes(missionId)) {
      this.context.completedMissions.push(missionId)
    }

    if (rewards) {
      this.applyRewards(rewards)
    }
  }

  /**
   * Aplica recompensas ao contexto do jogador
   */
  private applyRewards(rewards: Reward[]) {
    rewards.forEach(reward => {
      switch (reward.type) {
        case 'unlock':
          if (typeof reward.value === 'string') {
            this.context.worldState.unlockedAreas.push(reward.value)
          }
          break
        case 'badge':
          if (typeof reward.value === 'string') {
            this.context.worldState.achievements.push(reward.value)
          }
          break
      }
    })
  }

  /**
   * Verifica se uma condição narrativa foi cumprida
   */
  checkCondition(conditionId: string): boolean {
    switch (conditionId) {
      case 'has_creature':
        return !!this.context.currentCreature
      case 'first_login':
        return this.context.completedMissions.length === 0
      case 'completed_tutorial':
        return this.context.completedMissions.includes('tutorial_complete')
      default:
        return false
    }
  }

  /**
   * Atualiza o contexto narrativo
   */
  updateContext(updates: Partial<NarrativeContext>) {
    this.context = { ...this.context, ...updates }
  }

  /**
   * Obtém o contexto atual
   */
  getContext(): NarrativeContext {
    return { ...this.context }
  }

  /**
   * Gera descrição narrativa baseada em ações
   */
  generateActionNarrative(action: string, details: any): string {
    const narratives: Record<string, (d: any) => string> = {
      'creature_evolved': (d) =>
        `✨ ${d.creatureName} brilha intensamente! Sua forma se transforma... ` +
        `Nível ${d.newLevel} alcançado!`,

      'mission_completed': (d) =>
        `🎯 Missão "${d.missionName}" concluída com sucesso! ` +
        `${d.xpGained} XP ganhos.`,

      'battle_won': (d) =>
        `⚔️ Vitória! ${d.creatureName} demonstrou superioridade em ${d.category}. ` +
        `ELO: ${d.oldElo} → ${d.newElo}`,

      'lora_applied': (d) =>
        `🧬 Patch "${d.patchName}" aplicado com sucesso! ` +
        `${d.creatureName} agora possui novos traços: ${d.traits.join(', ')}.`,

      'dataset_uploaded': (d) =>
        `📚 Dataset "${d.datasetName}" assimilado. ` +
        `${d.rows} linhas processadas. ${d.creatureName} expandiu seu conhecimento.`,

      'benchmark_completed': (d) =>
        `📊 Benchmark ${d.benchmarkName} concluído! ` +
        `Score: ${d.score}/${d.maxScore} (${d.percentage}%)`,
    }

    const generator = narratives[action]
    return generator ? generator(details) : `Ação "${action}" realizada.`
  }

  /**
   * Gera feedback contextual para o jogador
   */
  generateFeedback(event: string, success: boolean, context?: any): string {
    if (success) {
      const successMessages = [
        "Excelente trabalho, Treinador!",
        "Seus esforços estão dando frutos!",
        "Continue assim e sua criatura se tornará lendária!",
        "Professor Carvalho ficaria orgulhoso!",
        "O caminho para a maestria está se abrindo!"
      ]
      return successMessages[Math.floor(Math.random() * successMessages.length)]
    } else {
      const failureMessages = [
        "Não desanime, Treinador. Todo mestre já foi aprendiz.",
        "Cada erro é uma lição. Tente novamente!",
        "A jornada é longa, mas você está no caminho certo.",
        "Persistência é a chave para o domínio da IA."
      ]
      return failureMessages[Math.floor(Math.random() * failureMessages.length)]
    }
  }
}

/**
 * Sistema de templates narrativos reutilizáveis
 */
export const narrativeTemplates = {
  welcome: (creatureName: string) =>
    `Seja bem-vindo à ArenaLab, Treinador! Sua jornada com ${creatureName} está apenas começando. ` +
    `Juntos, vocês irão explorar os limites da inteligência artificial.`,

  levelUp: (creatureName: string, level: number) =>
    `🎊 ${creatureName} subiu para o nível ${level}! ` +
    `Novas habilidades e possibilidades foram desbloqueadas.`,

  firstVictory: (creatureName: string) =>
    `🏆 Primeira vitória de ${creatureName}! ` +
    `Este é apenas o começo de uma longa sequência de triunfos.`,

  evolutionReady: (creatureName: string) =>
    `⚡ ${creatureName} atingiu o potencial necessário para evoluir! ` +
    `Vá até o Centro de Treinamento para iniciar a transformação.`,

  areaUnlocked: (areaName: string) =>
    `🗺️ Nova área desbloqueada: ${areaName}! ` +
    `Explore e descubra novos desafios e oportunidades.`,
}

export default NarrativeEngine
