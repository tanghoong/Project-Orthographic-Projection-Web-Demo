import { EditorSystem } from '../systems/EditorSystem';
import { LevelManager } from '../systems/LevelManager';
import { VoxelType } from '../entities/Voxel';

export class EditorUI {
  private editorSystem: EditorSystem;
  private levelManager: LevelManager;
  private container: HTMLElement;

  constructor(containerId: string, editorSystem: EditorSystem, levelManager: LevelManager) {
    this.editorSystem = editorSystem;
    this.levelManager = levelManager;
    this.container = document.getElementById(containerId)!;
    
    this.render();
    this.attachEvents();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="toolbar top-bar">
        <button id="btn-save">Save JSON</button>
        <button id="btn-load">Load JSON</button>
        <button id="btn-clear">Clear All</button>
      </div>
      
      <div class="toolbar bottom-bar">
        <button class="block-btn active" data-type="1">1. Solid</button>
        <button class="block-btn" data-type="2">2. Platform</button>
        <button class="block-btn" data-type="3">3. Spawn</button>
        <button class="block-btn" data-type="4">4. Goal</button>
        <button class="block-btn" data-type="5">5. Eraser</button>
      </div>
    `;
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

        if (type === 5) {
          this.editorSystem.setEraser();
        } else {
          this.editorSystem.setBrush(type as VoxelType);
        }
      });
    });

    // Save/Load
    document.getElementById('btn-save')?.addEventListener('click', () => {
      const json = this.levelManager.serialize();
      console.log(json);
      alert('Level JSON exported to Console (F12)');
      // In a real app, this might trigger a file download
    });

    document.getElementById('btn-load')?.addEventListener('click', () => {
      const input = prompt('Paste Level JSON here:');
      if (input) {
        if (this.levelManager.deserialize(input)) {
          alert('Level loaded successfully!');
        } else {
          alert('Failed to load level. Check console for details.');
        }
      }
    });

    document.getElementById('btn-clear')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear the entire level?')) {
        this.levelManager.clear();
      }
    });
  }
}
