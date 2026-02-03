import * as THREE from 'three';
import { Engine } from '../core/Engine';
import { LevelManager } from './LevelManager';
// import { EditorSystem } from './EditorSystem'; // Removed usage but keeping import if needed? No, remove it.
import { PhysicsSystem } from './PhysicsSystem';
import { ProgressionManager } from './ProgressionManager';
import { Character } from '../entities/Character';
import { InputManager } from '../core/InputManager';
import { CONSTANTS } from '../utils/Constants';
import { GameMode, GameEventType } from '../utils/Enums';
import { EventManager } from '../core/EventManager';
import { CameraSystem } from './CameraSystem';
import { AudioSystem } from './AudioSystem';
import { ParticleSystem } from './ParticleSystem';

export class GameManager {
  private engine: Engine;
  private levelManager: LevelManager;
  // private editorSystem: EditorSystem; // Decoupled
  private physicsSystem: PhysicsSystem | null = null;
  private progressionManager: ProgressionManager;
  private character: Character | null = null;
  private eventManager: EventManager;
  private cameraSystem: CameraSystem;
  // @ts-ignore
  private _audioSystem: AudioSystem;
  private particleSystem: ParticleSystem;
  
  private mode: GameMode = GameMode.EDIT;
  private inputManager: InputManager;
  
  // Input State
  private wasJumpPressed: boolean = false;
  
  // Game State
  private score: number = 0;

  constructor(engine: Engine, levelManager: LevelManager) {
    this.engine = engine;
    this.levelManager = levelManager;
    // this.editorSystem = editorSystem;
    this.inputManager = engine.getInputManager();
    this.eventManager = EventManager.getInstance();
    this.cameraSystem = new CameraSystem(engine);
    this._audioSystem = new AudioSystem();
    this.particleSystem = new ParticleSystem(engine.getScene());
    this.progressionManager = new ProgressionManager(levelManager);

    // Listen for Mode Switch (Tab)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault(); // Prevent focus change
        
        if (this.mode === GameMode.PLAY) {
            // In Play Mode: Toggle View (2D <-> ISO)
            this.cameraSystem.toggleDisplayMode();
        } else {
            // In Edit Mode: Toggle Mode (Edit <-> Play) - Keep this for convenience? 
            // Or strictly follow "Separate activation mechanism"?
            // User said: "Separate activation mechanism for the map editor that can only be triggered through a dedicated map editor button."
            // But they also said: "Design and develop a Tab key functionality that toggles between 2D and 3D isometric map views in real-time during gameplay."
            // Implicitly, Tab in Edit mode might be useless or do the same?
            // Let's keep Tab for View Toggle in BOTH modes for consistency, and use buttons for Mode Switch.
            this.cameraSystem.toggleDisplayMode();
        }
      }
    });

    // Event Listeners
    this.eventManager.on(GameEventType.INPUT_ACTION, (data: { action: string }) => {
      if (data.action === 'next_level') {
        this.loadNextLevel();
      } else if (data.action === 'retry_level') {
        this.retryCurrentLevel();
      } else if (data.action === 'return_editor') {
        this.enterEditMode();
      } else if (data.action === 'enter_play_mode') {
        this.enterPlayMode();
      }
    });
    this.eventManager.on(GameEventType.INPUT_ROTATE, (data: { direction: number }) => {
        if (this.mode === GameMode.PLAY) {
            this.cameraSystem.rotate(data.direction, 
              () => this.handleCharacterOcclusion(), 
              () => {
                if (this.physicsSystem) {
                  this.physicsSystem.setViewState(this.cameraSystem.getViewState());
                }
              }
            );
        }
    });

    this.eventManager.on(GameEventType.INPUT_MOVE, (data: { key: string; pressed: boolean }) => {
        this.inputManager.setVirtualKey(data.key, data.pressed);
    });
  }

  public toggleMode(): void {
    if (this.mode === GameMode.EDIT) {
      this.enterPlayMode();
    } else {
      this.enterEditMode();
    }
  }

  private enterPlayMode(): void {
    console.log("Entering Play Mode");
    
    // Auto-save current level before playing
    if (CONSTANTS.EDITOR.AUTO_SAVE_ENABLED) {
      this.autoSaveLevel();
    }
    
    this.mode = GameMode.PLAY;
    
    // UI Update
    this.eventManager.emit(GameEventType.GAME_MODE_CHANGED, GameMode.PLAY);

    // Disable Helpers (Axes/Grid)
    this.engine.setHelpersVisibility(false);

    // Disable Editor
    // this.editorSystem.setEnabled(false);

    // Reset Camera
    this.cameraSystem.reset();
    
    // Disable OrbitControls
    this.engine.getControls().enabled = false;

    // Create Character at Spawn Point
    const spawnData = this.levelManager.getSpawnPoint();
    const spawnPos = spawnData ? spawnData.clone().add(new THREE.Vector3(0, 1, 0)) : new THREE.Vector3(0, 5, 0);
    
    this.character = new Character(spawnPos);
    this.engine.getScene().add(this.character);

    // Initialize Physics
    this.physicsSystem = new PhysicsSystem(this.character, this.levelManager);
    this.physicsSystem.setViewState(this.cameraSystem.getViewState());
    
    // Count keys in level
    this.physicsSystem.countKeysInLevel();
    this.physicsSystem.resetGameState();
    
    // Reset Score
    this.score = 0;
    this.eventManager.emit(GameEventType.SCORE_UPDATED, this.score);

    // Handle Goal
    this.physicsSystem.onGoalReached = () => {
       this.score += 100;
       this.eventManager.emit(GameEventType.SCORE_UPDATED, this.score);
       this.progressionManager.handleLevelComplete();
       // Note: GOAL_REACHED and LEVEL_COMPLETE events are emitted by ProgressionManager
    };
    
    // Handle Key Collection
    this.physicsSystem.onKeyCollected = () => {
      this.score += 10;
      this.eventManager.emit(GameEventType.SCORE_UPDATED, this.score);
      if (this.physicsSystem) {
        this.eventManager.emit(GameEventType.KEY_COLLECTED, {
          collected: this.physicsSystem.getCollectedKeysCount(),
          required: this.physicsSystem.getRequiredKeysCount()
        });
      }
    };
    
    // Handle Death/Trap
    this.physicsSystem.onDeath = () => {
      this.score = Math.max(0, this.score - 5); // Penalty
      this.eventManager.emit(GameEventType.SCORE_UPDATED, this.score);
      this.eventManager.emit(GameEventType.PLAYER_DIED);
    };
  }

  private enterEditMode(): void {
    console.log("Entering Edit Mode");
    this.mode = GameMode.EDIT;

    // UI Update
    this.eventManager.emit(GameEventType.GAME_MODE_CHANGED, GameMode.EDIT);

    // Enable Helpers (Axes/Grid)
    this.engine.setHelpersVisibility(true);

    // Enable Editor - Handled via Event
    // this.editorSystem.setEnabled(true);

    // Re-enable OrbitControls
    this.engine.getControls().enabled = true;

    // Cleanup Character
    if (this.character) {
      this.engine.getScene().remove(this.character);
      this.character = null;
    }
    this.physicsSystem = null;
  }

  public update(dt: number): void {
    // Update Systems
    this.particleSystem.update(dt);

    if (this.mode === GameMode.PLAY && this.physicsSystem && this.character) {
      // Handle Rotation Input
      if (!this.cameraSystem.isCameraRotating()) {
        if (this.inputManager.isKeyPressed('q') || this.inputManager.isKeyPressed('Q')) {
          this.cameraSystem.rotate(1, 
            () => this.handleCharacterOcclusion(), 
            () => this.physicsSystem!.setViewState(this.cameraSystem.getViewState())
          );
        } else if (this.inputManager.isKeyPressed('e') || this.inputManager.isKeyPressed('E')) {
          this.cameraSystem.rotate(-1, 
            () => this.handleCharacterOcclusion(), 
            () => this.physicsSystem!.setViewState(this.cameraSystem.getViewState())
          );
        }
      }

      // Handle Player Input (Only if not rotating)
      if (!this.cameraSystem.isCameraRotating()) {
        // In PhysicsSystem, we will handle "Move Right" based on View State.
        // Here we just pass "Input Intent" (Left/Right)
        let moveDir = 0;
        if (this.inputManager.isKeyPressed('a') || this.inputManager.isKeyPressed('ArrowLeft')) {
          moveDir = -1;
        }
        if (this.inputManager.isKeyPressed('d') || this.inputManager.isKeyPressed('ArrowRight')) {
          moveDir = 1;
        }
        
        // Vertical Input for Ladder Climbing
        let verticalDir = 0;
        if (this.inputManager.isKeyPressed('w') || this.inputManager.isKeyPressed('ArrowUp')) {
          verticalDir = 1;
        }
        if (this.inputManager.isKeyPressed('s') || this.inputManager.isKeyPressed('ArrowDown')) {
          verticalDir = -1;
        }
        
        // Pass intent to physics
        this.physicsSystem.setInput(moveDir);
        this.physicsSystem.setVerticalInput(verticalDir);

        // Jump Logic (with Jump Buffering & Coyote Time)
        // Note: W is used for ladder climbing, so only Space triggers jump
        const isJumpPressed = this.inputManager.isKeyPressed(' ');
        
        // Trigger jump on button press (PhysicsSystem handles buffering/coyote time)
        if (isJumpPressed && !this.wasJumpPressed) {
           this.physicsSystem.jump();
        }
        this.wasJumpPressed = isJumpPressed;

      } else {
        this.physicsSystem.setInput(0); // Stop moving while rotating
      }

      // Update Physics
      this.physicsSystem.update(dt);
    }
  }

  private handleCharacterOcclusion(): void {
      if (!this.character || !this.engine) return;

      const camera = this.engine.getCamera();
      const charPos = this.character.position.clone();
      const camPos = camera.position.clone();
      
      const dir = charPos.sub(camPos).normalize();
      const raycaster = new THREE.Raycaster(camPos, dir);
      
      // Get all instanced meshes
      const meshes = this.levelManager.getMeshes();
      
      // Check intersections
      const intersects = raycaster.intersectObjects(meshes);

      // Calculate distance to character
      const distanceToChar = camPos.distanceTo(this.character.position);
      
      let isOccluded = false;

      for (const hit of intersects) {
          if (hit.distance < distanceToChar - CONSTANTS.OCCLUSION.RAY_TOLERANCE) {
             isOccluded = true;
             break;
          }
      }
      
      if (this.character) {
        const charMat = this.character.material as THREE.MeshStandardMaterial;
        if (isOccluded) {
            // Highlight character when occluded
            charMat.emissive.setHex(CONSTANTS.COLORS.OCCLUSION_HIGHLIGHT);
            charMat.depthTest = false; // X-Ray effect
            charMat.opacity = 0.5;
            charMat.transparent = true;
            this.character.renderOrder = 999;
        } else {
            charMat.emissive.setHex(CONSTANTS.COLORS.DEFAULT_EMISSIVE);
            charMat.depthTest = true;
            charMat.opacity = 1.0;
            charMat.transparent = false;
            this.character.renderOrder = 0;
        }
      }
  }
  
  public autoSaveLevel(): void {
    try {
      const levelData = this.levelManager.serialize();
      localStorage.setItem(CONSTANTS.EDITOR.AUTO_SAVE_KEY, levelData);
      console.log('✅ Level auto-saved');
      this.eventManager.emit(GameEventType.PRESET_LOADED, { message: 'Auto-saved' });
    } catch (error) {
      console.error('Failed to auto-save level:', error);
    }
  }
  
  public loadAutoSave(): boolean {
    try {
      const data = localStorage.getItem(CONSTANTS.EDITOR.AUTO_SAVE_KEY);
      if (data) {
        this.levelManager.deserialize(data);
        console.log('✅ Auto-save loaded');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to load auto-save:', error);
      return false;
    }
  }
  
  public getProgressionManager(): ProgressionManager {
    return this.progressionManager;
  }
  
  public startLevelById(levelId: string): boolean {
    // Switch to edit mode first
    if (this.mode === GameMode.PLAY) {
      this.enterEditMode();
    }
    
    // Load the level
    if (!this.levelManager.loadPreset(levelId)) {
      console.error(`Failed to load level: ${levelId}`);
      return false;
    }
    
    // Track in progression
    this.progressionManager.startLevel(levelId);
    
    // Enter play mode
    this.enterPlayMode();
    return true;
  }
  
  private loadNextLevel(): void {
    // Switch to edit mode
    if (this.mode === GameMode.PLAY) {
      this.enterEditMode();
    }
    
    // Load next level via progression manager
    if (this.progressionManager.loadNextLevel()) {
      // Switch back to play mode
      this.enterPlayMode();
    } else {
      this.eventManager.emit(GameEventType.PRESET_LOADED, {
        message: 'No more levels!'
      });
    }
  }
  
  private retryCurrentLevel(): void {
    const currentLevelId = this.progressionManager.getCurrentLevelId();
    if (currentLevelId) {
      this.startLevelById(currentLevelId);
    }
  }
}
