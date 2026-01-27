import { EditorSystem } from '../systems/EditorSystem';
import { LevelManager } from '../systems/LevelManager';
import { VoxelType } from '../entities/Voxel';
import { GameMode } from '../utils/Enums';

export class EditorUI {
  private editorSystem: EditorSystem;
  private levelManager: LevelManager;
  private container: HTMLElement;
  private compassArrow: HTMLElement | null = null;

  constructor(containerId: string, editorSystem: EditorSystem, levelManager: LevelManager) {
    this.editorSystem = editorSystem;
    this.levelManager = levelManager;
    this.container = document.getElementById(containerId)!;
    
    this.render();
    this.attachEvents();
    this.updateLevelList();
    this.updatePresetList();
    
    // Set initial mode class
    this.container.classList.add('edit-mode');
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
      
      <div class="compass-container">
        <div class="compass-label">N</div>
        <div class="compass-inner">
            <div class="compass-arrow" id="compass-arrow"></div>
        </div>
      </div>

      <div class="toolbar bottom-bar">
        <button class="block-btn" data-type="0">0. Cursor</button>
        <button class="block-btn active" data-type="1">1. Solid</button>
        <button class="block-btn" data-type="2">2. Platform</button>
        <button class="block-btn" data-type="3">3. Spawn</button>
        <button class="block-btn" data-type="4">4. Goal</button>
        <button class="block-btn" data-type="5">5. Eraser</button>
      </div>
    `;
    
    this.compassArrow = document.getElementById('compass-arrow');
  }

  private attachEvents(): void {
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
