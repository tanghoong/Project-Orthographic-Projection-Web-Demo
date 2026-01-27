import './style.css'
import { Engine } from './core/Engine';
import { LevelManager } from './systems/LevelManager';
import { EditorSystem } from './systems/EditorSystem';
import { EditorUI } from './ui/EditorUI';
import { GameManager } from './systems/GameManager';
import { VoxelType } from './entities/Voxel';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="game-container"></div>
  <div id="ui-layer"></div>
`

const engine = new Engine('game-container');
const levelManager = new LevelManager(engine.getScene());
const editorSystem = new EditorSystem(engine, levelManager);
const gameManager = new GameManager(engine, levelManager, editorSystem);
new EditorUI('ui-layer', editorSystem, levelManager, engine);
// gameManager.setUI(ui); // Decoupled via EventManager

// Add initial ground platform
for (let x = -2; x <= 2; x++) {
  for (let z = -2; z <= 2; z++) {
    levelManager.addVoxel(x, 0, z, VoxelType.SOLID);
  }
}

// Hook into engine loop
engine.onUpdate((dt) => {
  editorSystem.update();
  gameManager.update(dt);
});

engine.start();

console.log('Ortho Engine initialized. Press TAB to switch modes.');

console.log('Ortho Engine initialized with Editor System');
