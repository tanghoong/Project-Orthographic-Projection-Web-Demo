import * as THREE from 'three';
import { Engine } from '../core/Engine';
import { LevelManager } from './LevelManager';
import { EditorSystem } from './EditorSystem';
import { PhysicsSystem } from './PhysicsSystem';
import { Character } from '../entities/Character';
import { InputManager } from '../core/InputManager';
import { CONSTANTS } from '../utils/Constants';
import { GameMode, GameEventType } from '../utils/Enums';
import { EventManager } from '../core/EventManager';
import { CameraSystem } from './CameraSystem';

export class GameManager {
  private engine: Engine;
  private levelManager: LevelManager;
  private editorSystem: EditorSystem;
  private physicsSystem: PhysicsSystem | null = null;
  private character: Character | null = null;
  private eventManager: EventManager;
  private cameraSystem: CameraSystem;
  
  private mode: GameMode = GameMode.EDIT;
  private inputManager: InputManager;
  
  // Input State
  private wasJumpPressed: boolean = false;
  
  // Game State
  private score: number = 0;

  constructor(engine: Engine, levelManager: LevelManager, editorSystem: EditorSystem) {
    this.engine = engine;
    this.levelManager = levelManager;
    this.editorSystem = editorSystem;
    this.inputManager = engine.getInputManager();
    this.eventManager = EventManager.getInstance();
    this.cameraSystem = new CameraSystem(engine);

    // Listen for Mode Switch (Tab)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault(); // Prevent focus change
        this.toggleMode();
      }
    });

    // Event Listeners
    this.eventManager.on(GameEventType.INPUT_ROTATE, (data: any) => {
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

    this.eventManager.on(GameEventType.INPUT_MOVE, (data: any) => {
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
    this.mode = GameMode.PLAY;
    
    // UI Update
    this.eventManager.emit(GameEventType.GAME_MODE_CHANGED, GameMode.PLAY);

    // Disable Helpers (Axes/Grid)
    this.engine.setHelpersVisibility(false);

    // Disable Editor
    this.editorSystem.setEnabled(false);

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
    
    // Reset Score
    this.score = 0;
    this.eventManager.emit(GameEventType.SCORE_UPDATED, this.score);

    // Handle Goal
    this.physicsSystem.onGoalReached = () => {
       this.score += 100;
       this.eventManager.emit(GameEventType.SCORE_UPDATED, this.score);
       this.eventManager.emit(GameEventType.GOAL_REACHED);
       // Optional: Play Sound
    };
  }

  private enterEditMode(): void {
    console.log("Entering Edit Mode");
    this.mode = GameMode.EDIT;

    // UI Update
    this.eventManager.emit(GameEventType.GAME_MODE_CHANGED, GameMode.EDIT);

    // Enable Helpers (Axes/Grid)
    this.engine.setHelpersVisibility(true);

    // Enable Editor
    this.editorSystem.setEnabled(true);

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
        
        // Pass intent to physics
        this.physicsSystem.setInput(moveDir);

        // Jump Logic (with Debounce)
        const isJumpPressed = this.inputManager.isKeyPressed(' ') || this.inputManager.isKeyPressed('w');
        
        if (isJumpPressed && !this.wasJumpPressed && this.character.isGrounded) {
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
}
