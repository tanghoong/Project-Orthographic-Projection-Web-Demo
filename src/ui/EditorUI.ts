import { EditorSystem } from '../systems/EditorSystem';
import { LevelManager } from '../systems/LevelManager';
import { VoxelType } from '../entities/Voxel';
import { GameMode, GameEventType } from '../utils/Enums';
import { EventManager } from '../core/EventManager';
import { Engine } from '../core/Engine';

export class EditorUI {
  private editorSystem: EditorSystem;
  private levelManager: LevelManager;
  private engine: Engine;
  private container: HTMLElement;
  private compassArrow: HTMLElement | null = null;
  private eventManager: EventManager;
  
  // Callbacks
  public onRotateLeft: (() => void) | null = null;
  public onRotateRight: (() => void) | null = null;
  public onInput: ((_key: string, _pressed: boolean) => void) | null = null;

  constructor(containerId: string, editorSystem: EditorSystem, levelManager: LevelManager, engine: Engine) {
    this.editorSystem = editorSystem;
    this.levelManager = levelManager;
    this.engine = engine;
    this.container = document.getElementById(containerId)!;
    this.eventManager = EventManager.getInstance();
    
    this.render();
    this.attachEvents();
    this.updateLevelList();
    this.updatePresetList();
    
    // Set initial mode class
    this.container.classList.add('edit-mode');

    // Subscribe to Game Events
    this.eventManager.on(GameEventType.SCORE_UPDATED, (score: number) => this.updateScore(score));
    this.eventManager.on(GameEventType.GOAL_REACHED, () => this.showNotification("Goal Reached! +100 Points"));
    this.eventManager.on(GameEventType.GAME_MODE_CHANGED, (mode: GameMode) => this.setGameMode(mode));
    this.eventManager.on(GameEventType.CAMERA_ROTATED, (angle: number) => this.updateCompass(angle));
    this.eventManager.on(GameEventType.KEY_COLLECTED, (data: { collected: number; required: number }) => this.updateKeyCounter(data.collected, data.required));
    this.eventManager.on(GameEventType.PLAYER_DIED, () => this.showNotification("💀 Ouch! -5 Points", 2000));
    this.eventManager.on(GameEventType.LEVEL_COMPLETE, (data: { time: number; rotations: number; stats: { bestTime?: number; bestRotations?: number }; hasNext: boolean }) => this.showLevelComplete(data));
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
      
      <div id="build-height-panel" class="build-height-panel">
        <div class="build-height-label">Build Height: Y = <span id="build-height-value">0</span></div>
        <div class="build-height-controls">
          <button id="btn-height-up" class="height-btn" title="PageUp">▲</button>
          <button id="btn-height-down" class="height-btn" title="PageDown">▼</button>
          <button id="btn-height-reset" class="height-btn" title="Reset to 0">0</button>
        </div>
        <div class="build-height-hint">
          PageUp/Down or Shift+0-9
        </div>
        <div class="build-height-toggles">
          <label><input type="checkbox" id="toggle-grid" checked> Show Grid</label>
          <label><input type="checkbox" id="toggle-snap" checked> Smart Snap</label>
        </div>
        <div class="editor-tip">
          💡 Hold & drag mouse to place multiple blocks
        </div>
      </div>
      
      <div id="camera-control-panel" class="camera-control-panel">
        <div class="panel-title">Camera View</div>
        <div class="camera-view-grid">
          <button id="btn-view-iso" class="view-btn" title="Isometric (Default)">Iso</button>
          <button id="btn-view-top" class="view-btn" title="Top Down">Top</button>
          <button id="btn-view-front" class="view-btn" title="Front View">Front</button>
          <button id="btn-view-side" class="view-btn" title="Side View">Side</button>
        </div>
        <button id="btn-camera-reset" class="camera-reset-btn" title="Reset Camera Position & Zoom">
          🔄 Reset Camera
        </button>
        <div class="camera-hint">
          Scroll to zoom<br>
          Space + Drag to pan
        </div>
      </div>
      
      <div id="auto-save-indicator" class="auto-save-indicator">
        💾 Auto-save enabled
      </div>
      
      <div id="top-hud">
        <div id="scoreboard">
           <div class="score-value" id="score-display">0</div>
        </div>
        <div id="key-counter" class="key-counter">
           🔑 <span id="keys-collected">0</span>/<span id="keys-total">0</span>
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
        <button class="block-btn active" data-type="1">1. ✛ Cursor</button>
        <button class="block-btn" data-type="2">2. ◼ Ground</button>
        <button class="block-btn" data-type="3">3. ☁ Cloud</button>
        <button class="block-btn" data-type="4">4. 🪜 Ladder</button>
        <button class="block-btn" data-type="5">5. 💣 Trap</button>
        <button class="block-btn" data-type="6">6. 🔑 Key</button>
        <button class="block-btn" data-type="7">7. 🚪 Door</button>
        <button class="block-btn" data-type="8">8. ▶ Start</button>
        <button class="block-btn" data-type="9">9. ⬛ End</button>
        <button class="block-btn" data-type="0">0. 🗑 Eraser</button>
      </div>
      
      <div id="level-complete-modal" class="modal" style="display: none;">
        <div class="modal-content">
          <h2>🎉 Level Complete!</h2>
          <div id="level-stats">
            <p>Time: <span id="completion-time">0:00</span></p>
            <p>Rotations: <span id="completion-rotations">0</span></p>
            <p>Best Time: <span id="best-time">-</span></p>
            <p>Best Rotations: <span id="best-rotations">-</span></p>
          </div>
          <div class="modal-buttons">
            <button id="btn-next-level" class="modal-btn primary">Next Level</button>
            <button id="btn-retry-level" class="modal-btn">Retry</button>
            <button id="btn-return-editor" class="modal-btn">Return to Editor</button>
          </div>
        </div>
      </div>
    `;
    
    this.compassArrow = document.getElementById('compass-arrow');
    
    // Setup build height callback
    this.editorSystem.onBuildHeightChanged = (height: number) => {
      this.updateBuildHeight(height);
    };
    
    // Setup brush changed callback
    this.editorSystem.onBrushChanged = (type: number) => {
      this.updateBrushSelection(type);
    };
  }
  
  public updateBuildHeight(height: number): void {
    const el = document.getElementById('build-height-value');
    if (el) el.textContent = height.toString();
  }
  
  public updateBrushSelection(type: number): void {
    const buttons = this.container.querySelectorAll('.block-btn');
    buttons.forEach(btn => {
      const btnType = Number.parseInt((btn as HTMLElement).dataset.type || '0');
      if (btnType === type) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  public updateScore(score: number): void {
    const el = document.getElementById('score-display');
    if (el) el.textContent = score.toString();
  }
  
  public updateKeyCounter(collected: number, total: number): void {
    const collectedEl = document.getElementById('keys-collected');
    const totalEl = document.getElementById('keys-total');
    if (collectedEl) collectedEl.textContent = collected.toString();
    if (totalEl) totalEl.textContent = total.toString();
  }
  
  public showLevelComplete(data: { time: number; rotations: number; stats: { bestTime?: number; bestRotations?: number }; hasNext: boolean }): void {
    const modal = document.getElementById('level-complete-modal');
    if (!modal) return;
    
    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    
    // Update stats
    const timeEl = document.getElementById('completion-time');
    const rotationsEl = document.getElementById('completion-rotations');
    const bestTimeEl = document.getElementById('best-time');
    const bestRotationsEl = document.getElementById('best-rotations');
    
    if (timeEl) timeEl.textContent = formatTime(data.time);
    if (rotationsEl) rotationsEl.textContent = data.rotations.toString();
    if (bestTimeEl) bestTimeEl.textContent = data.stats.bestTime ? formatTime(data.stats.bestTime) : '-';
    if (bestRotationsEl) bestRotationsEl.textContent = data.stats.bestRotations?.toString() || '-';
    
    // Show/hide next level button
    const nextBtn = document.getElementById('btn-next-level');
    if (nextBtn) {
      if (data.hasNext) {
        nextBtn.style.display = 'block';
      } else {
        nextBtn.style.display = 'none';
      }
    }
    
    modal.style.display = 'flex';
  }
  
  public hideLevelComplete(): void {
    const modal = document.getElementById('level-complete-modal');
    if (modal) modal.style.display = 'none';
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

        if (type === 1) {
            this.editorSystem.setCursorMode();  // Keyboard 1
        } else if (type === 0) {
          this.editorSystem.setEraser();        // Keyboard 0
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
                this.editorSystem.resetEditorState();
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
                this.editorSystem.resetEditorState();
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
        this.editorSystem.resetEditorState();
      }
    });
    
    // Build Height Controls
    document.getElementById('btn-height-up')?.addEventListener('click', () => {
      this.editorSystem.setBuildHeight(this.editorSystem.getBuildHeight() + 1);
    });
    
    document.getElementById('btn-height-down')?.addEventListener('click', () => {
      this.editorSystem.setBuildHeight(this.editorSystem.getBuildHeight() - 1);
    });
    
    document.getElementById('btn-height-reset')?.addEventListener('click', () => {
      this.editorSystem.setBuildHeight(0);
    });
    
    document.getElementById('toggle-grid')?.addEventListener('change', () => {
      this.editorSystem.toggleGridPlane();
    });
    
    document.getElementById('toggle-snap')?.addEventListener('change', () => {
      this.editorSystem.toggleSmartSnap();
    });
    
    // Camera View Controls
    document.getElementById('btn-view-iso')?.addEventListener('click', () => {
      this.engine.setCameraView('isometric');
    });
    
    document.getElementById('btn-view-top')?.addEventListener('click', () => {
      this.engine.setCameraView('top');
    });
    
    document.getElementById('btn-view-front')?.addEventListener('click', () => {
      this.engine.setCameraView('front');
    });
    
    document.getElementById('btn-view-side')?.addEventListener('click', () => {
      this.engine.setCameraView('side');
    });
    
    document.getElementById('btn-camera-reset')?.addEventListener('click', () => {
      this.engine.resetCamera();
    });
    
    // Level Complete Modal Buttons
    document.getElementById('btn-next-level')?.addEventListener('click', () => {
      this.hideLevelComplete();
      this.eventManager.emit(GameEventType.INPUT_ACTION, { action: 'next_level' });
    });
    
    document.getElementById('btn-retry-level')?.addEventListener('click', () => {
      this.hideLevelComplete();
      this.eventManager.emit(GameEventType.INPUT_ACTION, { action: 'retry_level' });
    });
    
    document.getElementById('btn-return-editor')?.addEventListener('click', () => {
      this.hideLevelComplete();
      this.eventManager.emit(GameEventType.INPUT_ACTION, { action: 'return_editor' });
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
