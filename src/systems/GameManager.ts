import * as THREE from 'three';
import gsap from 'gsap';
import { Engine } from '../core/Engine';
import { LevelManager } from './LevelManager';
import { EditorSystem } from './EditorSystem';
import { PhysicsSystem } from './PhysicsSystem';
import { Character } from '../entities/Character';
import { InputManager } from '../core/InputManager';
import { CONSTANTS } from '../utils/Constants';
import { GameMode, ViewState } from '../utils/Enums';

export class GameManager {
  private engine: Engine;
  private levelManager: LevelManager;
  private editorSystem: EditorSystem;
  private physicsSystem: PhysicsSystem | null = null;
  private character: Character | null = null;
  
  private mode: GameMode = GameMode.EDIT;
  private inputManager: InputManager;

  // Camera Rotation
  private viewState: ViewState = ViewState.FRONT;
  private isRotating: boolean = false;
  private targetRotationY: number = 0; // Target Y-axis rotation in radians

  constructor(engine: Engine, levelManager: LevelManager, editorSystem: EditorSystem) {
    this.engine = engine;
    this.levelManager = levelManager;
    this.editorSystem = editorSystem;
    this.inputManager = engine.getInputManager();

    // Listen for Mode Switch (Tab)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault(); // Prevent focus change
        this.toggleMode();
      }
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
    
    // Disable Editor
    this.editorSystem.setEnabled(false);

    // Reset Camera to Front View
    const camera = this.engine.getCamera();
    // Disable OrbitControls
    this.engine.getControls().enabled = false;

    this.viewState = ViewState.FRONT;
    this.targetRotationY = 0; // Reset rotation target
    this.isRotating = false;

    // Set initial camera position for FRONT view (Side View)
    const dist = CONSTANTS.CAMERA.INITIAL_POSITION.x;
    camera.position.set(0, 0, dist); // Snap to Front View (Axis Aligned)
    camera.lookAt(0, 0, 0);
    camera.zoom = 1;
    camera.updateProjectionMatrix();

    // Create Character at Spawn Point
    const spawnData = this.levelManager.getSpawnPoint();
    const spawnPos = spawnData ? spawnData.clone().add(new THREE.Vector3(0, 1, 0)) : new THREE.Vector3(0, 5, 0);
    
    this.character = new Character(spawnPos);
    this.engine.getScene().add(this.character);

    // Initialize Physics
    this.physicsSystem = new PhysicsSystem(this.character, this.levelManager);
    this.physicsSystem.setViewState(this.viewState);
  }

  private enterEditMode(): void {
    console.log("Entering Edit Mode");
    this.mode = GameMode.EDIT;

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
      if (!this.isRotating) {
        if (this.inputManager.isKeyPressed('q') || this.inputManager.isKeyPressed('Q')) {
          this.rotateCamera(1); // Rotate Left (CCW)
        } else if (this.inputManager.isKeyPressed('e') || this.inputManager.isKeyPressed('E')) {
          this.rotateCamera(-1); // Rotate Right (CW)
        }
      }

      // Handle Player Input (Only if not rotating)
      if (!this.isRotating) {
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

        if ((this.inputManager.isKeyPressed(' ') || this.inputManager.isKeyPressed('w')) && this.character.isGrounded) {
           this.physicsSystem.jump();
        }
      } else {
        this.physicsSystem.setInput(0); // Stop moving while rotating
      }

      // Update Physics
      this.physicsSystem.update(dt);
    }
  }

  private rotateCamera(direction: number): void {
    if (this.isRotating) return;
    this.isRotating = true;

    // Update View State
    if (direction > 0) { // Q - Rotate Left
       this.viewState = (this.viewState + 1) % 4;
       this.targetRotationY += Math.PI / 2;
    } else { // E - Rotate Right
       this.viewState = (this.viewState - 1 + 4) % 4;
       this.targetRotationY -= Math.PI / 2;
    }
    
    console.log(`Rotating to View: ${ViewState[this.viewState]}`);

    // Animate Camera
    const camera = this.engine.getCamera();
    const startAngle = Math.atan2(camera.position.x, camera.position.z);
    const radius = Math.sqrt(camera.position.x * camera.position.x + camera.position.z * camera.position.z);
    
    const targetAngle = startAngle + (direction * Math.PI / 2);

    const animationObj = { angle: startAngle };
    
    gsap.to(animationObj, {
      angle: targetAngle,
      duration: CONSTANTS.ANIMATION.ROTATION_DURATION,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.position.x = radius * Math.sin(animationObj.angle);
        camera.position.z = radius * Math.cos(animationObj.angle);
        camera.lookAt(0, 0, 0);
      },
      onComplete: () => {
        this.isRotating = false;
        if (this.physicsSystem) {
          this.physicsSystem.setViewState(this.viewState);
        }
      }
    });
  }
}
