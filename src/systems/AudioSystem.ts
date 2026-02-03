import { EventManager } from '../core/EventManager';
import { GameEventType } from '../utils/Enums';

export class AudioSystem {
  private context: AudioContext | null = null;
  private eventManager: EventManager;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;

  constructor() {
    this.eventManager = EventManager.getInstance();
    this.init();
    this.setupListeners();
  }

  private init(): void {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.context = new AudioContextClass();
      this.masterGain = this.context.createGain();
      this.masterGain.gain.value = 0.3; // Default volume
      this.masterGain.connect(this.context.destination);
    } catch (e) {
      console.warn('Web Audio API not supported', e);
    }
  }

  private setupListeners(): void {
    // Resume context on user interaction (browser policy)
    const resumeContext = () => {
      if (this.context && this.context.state === 'suspended') {
        this.context.resume();
      }
      window.removeEventListener('click', resumeContext);
      window.removeEventListener('keydown', resumeContext);
    };
    window.addEventListener('click', resumeContext);
    window.addEventListener('keydown', resumeContext);

    // Game Events
    this.eventManager.on(GameEventType.PLAYER_JUMP, () => this.playJump());
    this.eventManager.on(GameEventType.PLAYER_LAND, () => this.playLand());
    this.eventManager.on(GameEventType.INPUT_ROTATE, () => this.playRotate());
    this.eventManager.on(GameEventType.KEY_COLLECTED, () => this.playCollect());
    this.eventManager.on(GameEventType.GOAL_REACHED, () => this.playWin());
    this.eventManager.on(GameEventType.PLAYER_DIED, () => this.playDeath());
    this.eventManager.on(GameEventType.DOOR_OPENED, () => this.playDoorOpen());
  }

  public setMute(muted: boolean): void {
    this.isMuted = muted;
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 0.3, this.context?.currentTime || 0);
    }
  }

  private createOscillator(type: OscillatorType, freq: number, duration: number, startTime: number = 0): void {
    if (!this.context || !this.masterGain) return;

    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.context.currentTime + startTime);

    gain.gain.setValueAtTime(0.5, this.context.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(this.context.currentTime + startTime);
    osc.stop(this.context.currentTime + startTime + duration);
  }

  // --- Sound Effects ---

  public playJump(): void {
    if (!this.context || this.isMuted) return;
    
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, this.context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.context.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.2, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.masterGain!);
    
    osc.start();
    osc.stop(this.context.currentTime + 0.1);
  }

  public playLand(): void {
    if (!this.context || this.isMuted) return;
    
    // Simple low thud using noise buffer would be better, but low sine/triangle works for retro
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(100, this.context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, this.context.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.3, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.masterGain!);
    
    osc.start();
    osc.stop(this.context.currentTime + 0.1);
  }

  public playRotate(): void {
    if (!this.context || this.isMuted) return;
    
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, this.context.currentTime);
    osc.frequency.linearRampToValueAtTime(100, this.context.currentTime + 0.3);
    
    gain.gain.setValueAtTime(0.1, this.context.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.context.currentTime + 0.3);
    
    osc.connect(gain);
    gain.connect(this.masterGain!);
    
    osc.start();
    osc.stop(this.context.currentTime + 0.3);
  }

  public playCollect(): void {
    if (!this.context || this.isMuted) return;
    
    // High ping
    this.createOscillator('sine', 1200, 0.1);
    this.createOscillator('triangle', 1800, 0.1, 0.05); // Little echo/harmony
  }

  public playWin(): void {
    if (!this.context || this.isMuted) return;
    
    // Arpeggio
    const now = 0;
    const duration = 0.15;
    this.createOscillator('square', 523.25, duration, now);       // C5
    this.createOscillator('square', 659.25, duration, now + 0.1); // E5
    this.createOscillator('square', 783.99, duration, now + 0.2); // G5
    this.createOscillator('square', 1046.50, 0.4, now + 0.3);     // C6
  }

  public playDeath(): void {
    if (!this.context || this.isMuted) return;
    
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.context.currentTime);
    osc.frequency.linearRampToValueAtTime(50, this.context.currentTime + 0.3);
    
    gain.gain.setValueAtTime(0.3, this.context.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.context.currentTime + 0.3);
    
    osc.connect(gain);
    gain.connect(this.masterGain!);
    
    osc.start();
    osc.stop(this.context.currentTime + 0.3);
  }
  
  public playDoorOpen(): void {
    if (!this.context || this.isMuted) return;
    
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, this.context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.context.currentTime + 0.5);
    
    gain.gain.setValueAtTime(0.2, this.context.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.context.currentTime + 0.5);
    
    osc.connect(gain);
    gain.connect(this.masterGain!);
    
    osc.start();
    osc.stop(this.context.currentTime + 0.5);
  }
}
