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
import { EditorUI } from '../ui/EditorUI'; // Import EditorUI type

export class GameManager {
  private engine: Engine;
  private levelManager: LevelManager;
  private editorSystem: EditorSystem;
  private physicsSystem: PhysicsSystem | null = null;
  private character: Character | null = null;
  
  // UI Reference (Ideally this should be passed in or managed via an event system, 
  // but for simplicity we can grab it from main or have it passed)
  // We will assume it's available or we can access the global instance if needed.
  // Better: Pass it in constructor. But constructor signature is fixed in main.ts currently.
  // Let's modify main.ts to pass UI or use a setter.
  private ui: EditorUI | null = null;

  private mode: GameMode = GameMode.EDIT;
  private inputManager: InputManager;

  // Camera Rotation
  private viewState: ViewState = ViewState.FRONT;
  private isRotating: boolean = false;
  private targetRotationY: number = 0; // Target Y-axis rotation in radians
  
  // Input State
  private wasJumpPressed: boolean = false;
  
  // Game State
  private score: number = 0;

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

  public setUI(ui: EditorUI) {
      this.ui = ui;
      
      // Bind UI Callbacks
      this.ui.onRotateLeft = () => this.rotateCamera(1);
      this.ui.onRotateRight = () => this.rotateCamera(-1);
      this.ui.onInput = (key: string, pressed: boolean) => {
          this.inputManager.setVirtualKey(key, pressed);
      };
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
    if (this.ui) this.ui.setGameMode(GameMode.PLAY);

    // Disable Helpers (Axes/Grid)
    this.engine.setHelpersVisibility(false);

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
    
    // Reset Score
    this.score = 0;
    if (this.ui) this.ui.updateScore(this.score);

    // Handle Goal
    this.physicsSystem.onGoalReached = () => {
       this.score += 100;
       if (this.ui) {
         this.ui.updateScore(this.score);
         this.ui.showNotification("Goal Reached! +100 Points");
       }
       // Optional: Play Sound
    };
  }

  private enterEditMode(): void {
    console.log("Entering Edit Mode");
    this.mode = GameMode.EDIT;

    // UI Update
    if (this.ui) this.ui.setGameMode(GameMode.EDIT);

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
    // Update Compass Rotation
    if (this.ui) {
        // Calculate camera angle relative to origin
        const camera = this.engine.getCamera();
        const angle = Math.atan2(camera.position.x, camera.position.z);
        this.ui.updateCompass(angle);
    }

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
        // Force occlusion check during animation
        this.handleCharacterOcclusion();
      },
      onComplete: () => {
        this.isRotating = false;
        if (this.physicsSystem) {
          this.physicsSystem.setViewState(this.viewState);
        }
      }
    });
  }

  private handleCharacterOcclusion(): void {
      if (!this.character || !this.engine) return;

      const camera = this.engine.getCamera();
      const charPos = this.character.position.clone();
      const camPos = camera.position.clone();
      
      // Direction from camera to character
      const dir = charPos.sub(camPos).normalize();
      // const dist = charPos.length(); // approximate distance check (Unused)

      const raycaster = new THREE.Raycaster(camPos, dir);
      
      // Get all voxels
      const voxels = this.levelManager.getAllVoxels();
      
      // Check intersections
      const intersects = raycaster.intersectObjects(voxels);

      // let isOccluded = false; (Unused)

      // Reset all voxels to opaque first (optional, but safer to prevent stuck transparency)
      // Optimization: Only reset those we touched previously? For now, brute force is safe for small levels.
      // Better: Reset transparency only if we change logic. 
      // Current Logic: If intersect distance < character distance, it is blocking.
      
      // Calculate distance to character
      const distanceToChar = camPos.distanceTo(this.character.position);

      /* Unused loop block removed
      for (const hit of intersects) {
          if (hit.distance < distanceToChar - 0.5) { // 0.5 tolerance to avoid self-collision or adjacent floor
              isOccluded = true;
              
              // Make the blocking object transparent
              const mesh = hit.object as THREE.Mesh;
              const material = mesh.material as THREE.MeshStandardMaterial;
              if (material) {
                  material.transparent = true;
                  material.opacity = 0.3;
              }
          }
      }
      */

      // Restore opacity for objects that are NO LONGER blocking
      // This requires tracking state. A simpler approach for "X-Ray Character" is:
      // If occluded, draw character On Top or Outline.
      // User requested: "X-Ray effect (outline or semi-transparent wall)".
      // Let's go with Semi-Transparent Wall for now as implemented above, BUT we need to restore opacity.
      
      // To restore opacity efficiently:
      // We can iterate all voxels? No, too slow.
      // We can keep a list of "faded" objects.
      
      // Refined Logic:
      // 1. Reset previously faded objects.
      // 2. Fade new blocking objects.
      this.updateOcclusion(intersects, distanceToChar);
  }

  private fadedObjects: THREE.Mesh[] = [];

  private updateOcclusion(intersects: THREE.Intersection[], distanceToChar: number) {
      // 1. Restore all previously faded objects
      for (const mesh of this.fadedObjects) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat) {
              mat.opacity = 1.0;
              mat.transparent = false; // Set back to false if it was originally opaque
              // Note: If blocks are naturally transparent (glass), this logic needs flag checking.
              // For now, assuming all blocks are solid.
          }
      }
      this.fadedObjects = [];

      // 2. Fade current blockers
      for (const hit of intersects) {
          if (hit.distance < distanceToChar - 0.2) { // Tighter tolerance
              const mesh = hit.object as THREE.Mesh;
              if (mesh !== this.character) { // Don't fade self
                  const mat = mesh.material as THREE.MeshStandardMaterial;
                  if (mat) {
                      mat.transparent = true;
                      mat.opacity = 0.2; // Very see-through
                      this.fadedObjects.push(mesh);
                  }
              }
          }
      }
      
      // Also, ensure Character is always rendered? 
      // Character.renderOrder = 1 is set.
      if (this.character) {
        const charMat = this.character.material as THREE.MeshStandardMaterial;
        if (this.fadedObjects.length > 0) {
            // Optional: Highlight character when occluded
            charMat.emissive.setHex(0x555555);
        } else {
            charMat.emissive.setHex(0x000000);
        }
      }
  }
}
