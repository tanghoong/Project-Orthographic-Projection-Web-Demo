import { EventManager } from '../core/EventManager';
import { GameEventType } from '../utils/Enums';
import { LevelManager } from './LevelManager';

export interface LevelMetadata {
  id: string;
  name: string;
  difficulty: 'tutorial' | 'easy' | 'medium' | 'hard' | 'expert';
  nextLevel?: string;
  description?: string;
  par?: {
    time: number;      // seconds
    rotations: number; // rotation count
  };
}

export interface LevelStats {
  completed: boolean;
  bestTime?: number;
  bestRotations?: number;
  attempts: number;
  lastPlayed?: string;
}

export class ProgressionManager {
  private eventManager: EventManager;
  private levelManager: LevelManager;
  private currentLevelId: string | null = null;
  private levelSequence: LevelMetadata[] = [];
  private levelStats: Map<string, LevelStats> = new Map();
  
  // Session tracking
  private startTime: number = 0;
  private rotationCount: number = 0;
  
  private readonly STORAGE_KEY = 'ortho_game_progress';

  constructor(levelManager: LevelManager) {
    this.eventManager = EventManager.getInstance();
    this.levelManager = levelManager;
    this.loadProgress();
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    this.eventManager.on(GameEventType.CAMERA_ROTATED, () => {
      this.rotationCount++;
    });
    
    this.eventManager.on(GameEventType.GOAL_REACHED, () => {
      this.handleLevelComplete();
    });
  }

  public setLevelSequence(levels: LevelMetadata[]): void {
    this.levelSequence = levels;
  }

  public startLevel(levelId: string): void {
    this.currentLevelId = levelId;
    this.startTime = Date.now();
    this.rotationCount = 0;
    
    // Update attempts
    const stats = this.getLevelStats(levelId);
    stats.attempts++;
    stats.lastPlayed = new Date().toISOString();
    this.levelStats.set(levelId, stats);
    this.saveProgress();
  }

  public handleLevelComplete(): void {
    if (!this.currentLevelId) return;

    const completionTime = (Date.now() - this.startTime) / 1000; // seconds
    const stats = this.getLevelStats(this.currentLevelId);
    
    // Update stats
    stats.completed = true;
    if (!stats.bestTime || completionTime < stats.bestTime) {
      stats.bestTime = completionTime;
    }
    if (!stats.bestRotations || this.rotationCount < stats.bestRotations) {
      stats.bestRotations = this.rotationCount;
    }
    
    this.levelStats.set(this.currentLevelId, stats);
    this.saveProgress();
    
    // Emit completion event with stats
    const levelMeta = this.getLevelMetadata(this.currentLevelId);
    this.eventManager.emit(GameEventType.LEVEL_COMPLETE, {
      levelId: this.currentLevelId,
      time: completionTime,
      rotations: this.rotationCount,
      stats,
      metadata: levelMeta,
      hasNext: !!levelMeta?.nextLevel
    });
  }

  public loadNextLevel(): boolean {
    if (!this.currentLevelId) return false;
    
    const currentMeta = this.getLevelMetadata(this.currentLevelId);
    if (!currentMeta || !currentMeta.nextLevel) {
      console.log('No next level defined');
      return false;
    }
    
    const nextLevelId = currentMeta.nextLevel;
    const nextMeta = this.getLevelMetadata(nextLevelId);
    
    if (!nextMeta) {
      console.error(`Next level '${nextLevelId}' not found in sequence`);
      return false;
    }
    
    // Load the next level
    if (this.levelManager.loadPreset(nextLevelId)) {
      this.startLevel(nextLevelId);
      this.eventManager.emit(GameEventType.PRESET_LOADED, { 
        message: `Loading: ${nextMeta.name}` 
      });
      return true;
    }
    
    return false;
  }

  public getLevelMetadata(levelId: string): LevelMetadata | undefined {
    return this.levelSequence.find(l => l.id === levelId);
  }

  public getLevelStats(levelId: string): LevelStats {
    if (!this.levelStats.has(levelId)) {
      this.levelStats.set(levelId, {
        completed: false,
        attempts: 0
      });
    }
    return this.levelStats.get(levelId)!;
  }

  public getAllLevelsProgress(): { level: LevelMetadata; stats: LevelStats }[] {
    return this.levelSequence.map(level => ({
      level,
      stats: this.getLevelStats(level.id)
    }));
  }

  public getCompletedLevelsCount(): number {
    let count = 0;
    this.levelStats.forEach(stats => {
      if (stats.completed) count++;
    });
    return count;
  }

  public getTotalLevelsCount(): number {
    return this.levelSequence.length;
  }

  public resetProgress(): void {
    this.levelStats.clear();
    this.saveProgress();
  }

  private loadProgress(): void {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        this.levelStats = new Map(Object.entries(parsed));
        console.log('✅ Progress loaded');
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  }

  private saveProgress(): void {
    try {
      const obj = Object.fromEntries(this.levelStats);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(obj));
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  }

  public getCurrentLevelId(): string | null {
    return this.currentLevelId;
  }

  public getSessionStats(): { time: number; rotations: number } {
    const time = this.startTime > 0 ? (Date.now() - this.startTime) / 1000 : 0;
    return { time, rotations: this.rotationCount };
  }
}
