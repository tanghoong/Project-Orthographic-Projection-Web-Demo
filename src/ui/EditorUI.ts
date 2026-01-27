import { EditorSystem } from '../systems/EditorSystem';
import { LevelManager } from '../systems/LevelManager';
import { VoxelType } from '../entities/Voxel';
import { GameMode, GameEventType } from '../utils/Enums';
import { EventManager } from '../core/EventManager';

export class EditorUI {
  private editorSystem: EditorSystem;
  private levelManager: LevelManager;
  private container: HTMLElement;
  private compassArrow: HTMLElement | null = null;
  private eventManager: EventManager;
  
  // Callbacks
  public onRotateLeft: (() => void) | null = null;
  public onRotateRight: (() => void) | null = null;
  public onInput: ((key: string, pressed: boolean) => void) | null = null;

  constructor(containerId: string, editorSystem: EditorSystem, levelManager: LevelManager) {
    this.editorSystem = editorSystem;
    this.levelManager = levelManager;
    this.container = document.getElementById(containerId)!;
    this.eventManager = EventManager.getInstance();
    
    this.render();
    this.attachEvents();
    this.updateLevelList();
    this.updatePresetList();
    
    // Set initial mode class
    this.container.classList.add('edit-mode');

    // Subscribe to Game Events
    this.eventManager.on(GameEventType.SCORE_UPDATED, (score: any) => this.updateScore(score));
    this.eventManager.on(GameEventType.GOAL_REACHED, () => this.showNotification("Goal Reached! +100 Points"));
    this.eventManager.on(GameEventType.GAME_MODE_CHANGED, (mode: any) => this.setGameMode(mode));
    this.eventManager.on(GameEventType.CAMERA_ROTATED, (angle: any) => this.updateCompass(angle));
  }

  public setGameMode(mode: GameMode): void {
    if (mode === GameMode.PLAY) {
      this.container.classList.remove('edit-mode');
      this.container.classList.add('play-mode');
    } else {
      this.container.classList.remove('play-mode');
      this.container.classList.add('edit-mode');
    }
  }

  public updateCompass(rotationY: number): void {
    if (this.compassArrow) {
      // Rotate opposite to camera to keep "North" fixed relative to world
      // Or if the compass represents the world, it rotates with the world?
      // Standard game compass: The needle points North.
      // If camera rotates Left (CCW), North moves Right (CW).
      // So needle rotation = Camera Rotation.
      // Let's test: Camera 0 (looking -Z). North is Forward (Top of screen). Needle 0.
      // Camera 90 (looking -X). North is Right. Needle 90.
      // So Needle Rotation = Camera Rotation (in degrees).
      const degrees = rotationY * (180 / Math.PI);
      this.compassArrow.style.transform = `rotate(${degrees}deg)`;
    }
  }

  public showNotification(message: string, duration: number = 3000): void {
    let notification = document.getElementById('game-notification');
    if (!notification) {
      notification = document.createElement('div');
      notification.id = 'game-notification';
      document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
      notification?.classList.remove('show');
    }, duration);
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="toolbar top-bar">
        <div class="save-load-container">
           <input type="text" id="level-name-input" placeholder="Level Name" />
           <button id="btn-save-local">Save</button>
           <select id="level-select"></select>
           <button id="btn-load-local">Load</button>
        </div>
        <div style="width: 10px;"></div>
        <div class="save-load-container">
           <select id="preset-select">
             <option value="" disabled selected>Load Preset...</option>
           </select>
        </div>
        <div style="width: 20px;"></div>
        <button id="btn-undo">Undo</button>
        <button id="btn-clear">Clear</button>
        <button id="btn-export">Export JSON</button>
      </div>
      
      <div id="top-hud">
        <div id="scoreboard">
           <div class="score-value" id="score-display">0</div>
        </div>
        <div class="compass-container">
          <div class="compass-label">N</div>
          <div class="compass-inner">
              <div class="compass-arrow" id="compass-arrow"></div>
          </div>
        </div>
      </div>

      <div class="mobile-controls">
        <div class="control-btn btn-rotate" id="btn-rot-left">↺</div>
        <div class="d-pad">
           <div class="control-btn btn-up" data-key="ArrowUp">↑</div>
           <div class="control-btn btn-down" data-key="ArrowDown">↓</div>
           <div class="control-btn btn-left" data-key="ArrowLeft">←</div>
           <div class="control-btn btn-right" data-key="ArrowRight">→</div>
        </div>
        <div class="control-btn btn-rotate" id="btn-rot-right">↻</div>
      </div>

      <div class="toolbar bottom-bar">
        <button class="block-btn active" data-type="0">0. Cursor</button>
        <button class="block-btn" data-type="1">1. Solid</button>
        <button class="block-btn" data-type="2">2. Platform</button>
        <button class="block-btn" data-type="3">3. Spawn</button>
        <button class="block-btn" data-type="4">4. Goal</button>
        <button class="block-btn" data-type="5">5. Eraser</button>
      </div>
    `;
    
    this.compassArrow = document.getElementById('compass-arrow');
  }

  public updateScore(score: number): void {
    const el = document.getElementById('score-display');
    if (el) el.textContent = score.toString();
  }

  private attachEvents(): void {
    // Mobile Controls
    const dpadBtns = this.container.querySelectorAll('.d-pad .control-btn');
    dpadBtns.forEach(btn => {
        const key = (btn as HTMLElement).dataset.key!;
        
        const start = (e: Event) => {
            e.preventDefault();
            btn.classList.add('pressed');
            this.eventManager.emit(GameEventType.INPUT_MOVE, { key, pressed: true });
        };
        const end = (e: Event) => {
            e.preventDefault();
            btn.classList.remove('pressed');
            this.eventManager.emit(GameEventType.INPUT_MOVE, { key, pressed: false });
        };

        btn.addEventListener('mousedown', start);
        btn.addEventListener('touchstart', start);
        btn.addEventListener('mouseup', end);
        btn.addEventListener('touchend', end);
        btn.addEventListener('mouseleave', end);
    });

    const rotLeft = document.getElementById('btn-rot-left');
    const rotRight = document.getElementById('btn-rot-right');

    const bindClick = (el: HTMLElement | null, direction: number) => {
        if (!el) return;
        const handler = (e: Event) => {
             e.preventDefault();
             el.classList.add('pressed');
             setTimeout(() => el.classList.remove('pressed'), 100);
             this.eventManager.emit(GameEventType.INPUT_ROTATE, { direction });
        };
        el.addEventListener('click', handler);
        el.addEventListener('touchstart', handler);
    };

    bindClick(rotLeft, 1);
    bindClick(rotRight, -1);

    // Block Selection
    const buttons = this.container.querySelectorAll('.block-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const type = parseInt(target.dataset.type!);
        
        // Update active state
        buttons.forEach(b => b.classList.remove('active'));
        target.classList.add('active');

        if (type === 0) {
            this.editorSystem.setCursorMode();
        } else if (type === 5) {
          this.editorSystem.setEraser();
        } else {
          this.editorSystem.setBrush(type as VoxelType);
        }
      });
    });

    // Undo
    document.getElementById('btn-undo')?.addEventListener('click', () => {
        this.levelManager.undo();
    });

    // Local Storage Save
    document.getElementById('btn-save-local')?.addEventListener('click', () => {
        const input = document.getElementById('level-name-input') as HTMLInputElement;
        const name = input.value.trim();
        if (name) {
            this.levelManager.saveToLocalStorage(name);
            alert(`Level '${name}' saved!`);
            this.updateLevelList();
        } else {
            alert('Please enter a level name.');
        }
    });

    // Local Storage Load
    document.getElementById('btn-load-local')?.addEventListener('click', () => {
        const select = document.getElementById('level-select') as HTMLSelectElement;
        const name = select.value;
        if (name) {
            if (this.levelManager.loadFromLocalStorage(name)) {
                // alert(`Level '${name}' loaded!`); 
                // Don't alert on load, just do it.
            } else {
                alert('Failed to load level.');
            }
        }
    });

    // Preset Load
    document.getElementById('preset-select')?.addEventListener('change', (e) => {
        const select = e.target as HTMLSelectElement;
        const key = select.value;
        if (key) {
            if (confirm(`Load preset map '${key}'? This will clear current changes.`)) {
                this.levelManager.loadPreset(key);
            }
            select.value = ""; // Reset selection
        }
    });

    // Export JSON
    document.getElementById('btn-export')?.addEventListener('click', () => {
      const json = this.levelManager.serialize();
      console.log(json);
      alert('Level JSON exported to Console (F12)');
    });

    document.getElementById('btn-clear')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear the entire level?')) {
        this.levelManager.clear();
      }
    });
  }

  private updateLevelList(): void {
      const select = document.getElementById('level-select') as HTMLSelectElement;
      if (!select) return;

      const levels = this.levelManager.listSavedLevels();
      select.innerHTML = '';
      
      levels.forEach(level => {
          const option = document.createElement('option');
          option.value = level;
          option.textContent = level;
          select.appendChild(option);
      });
  }

  private updatePresetList(): void {
      const select = document.getElementById('preset-select') as HTMLSelectElement;
      if (!select) return;

      const presets = this.levelManager.getPresetList();
      
      presets.forEach(preset => {
          const option = document.createElement('option');
          option.value = preset.key;
          option.textContent = preset.name;
          select.appendChild(option);
      });
  }
}
