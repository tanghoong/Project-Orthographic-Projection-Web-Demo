import * as THREE from 'three';
import { Character } from '../entities/Character';
import { LevelManager } from './LevelManager';
import { ViewState } from '../utils/Enums';
import { VoxelType } from '../entities/Voxel';

export class PhysicsSystem {
  private character: Character;
  private levelManager: LevelManager;
  private gravity: number = 30;
  private viewState: ViewState = ViewState.FRONT;
  private inputX: number = 0; // -1, 0, 1
  public onGoalReached: (() => void) | null = null;
  private prevPosition: THREE.Vector3 = new THREE.Vector3();

  constructor(character: Character, levelManager: LevelManager) {
    this.character = character;
    this.levelManager = levelManager;
  }

  public setViewState(state: ViewState): void {
    this.viewState = state;
    // When view changes, zero out velocity
    this.character.velocity.set(0, this.character.velocity.y, 0);

    // Rotate character to face the new camera view
    // FRONT (0) -> 0
    // RIGHT (1) -> -PI/2
    // BACK (2) -> -PI
    // LEFT (3) -> -3PI/2 (or PI/2)
    let targetRot = 0;
    switch(state) {
        case ViewState.FRONT: targetRot = 0; break;
        case ViewState.RIGHT: targetRot = -Math.PI / 2; break;
        case ViewState.BACK: targetRot = -Math.PI; break;
        case ViewState.LEFT: targetRot = -Math.PI * 1.5; break;
    }
    this.character.rotation.y = targetRot;

    // Position Snapping (Task 4.3)
    this.snapToVisualDepth();
  }

  private snapToVisualDepth() {
    this.update(0.016); // Force one tick of physics to resolve overlaps
  }

  public setInput(dir: number): void {
    this.inputX = dir;
  }

  public jump(): void {
    this.character.velocity.y = 12;
  }

  public update(dt: number): void {
    // Store previous position for collision resolution
    this.prevPosition.copy(this.character.position);

    // Apply Horizontal Movement based on View State
    const speed = 10;
    const moveVel = this.inputX * speed;

    // Reset horizontal velocity first
    this.character.velocity.x = 0;
    this.character.velocity.z = 0;

    switch (this.viewState) {
      case ViewState.FRONT: this.character.velocity.x = moveVel; break;
      case ViewState.RIGHT: this.character.velocity.z = -moveVel; break; // Invert Z for Right View
      case ViewState.BACK:  this.character.velocity.x = -moveVel; break;
      case ViewState.LEFT:  this.character.velocity.z = moveVel; break;  // Invert Z for Left View
    }

    // Apply Gravity
    this.character.velocity.y -= this.gravity * dt;

    // Integrate Position
    const delta = this.character.velocity.clone().multiplyScalar(dt);
    
    // Update Eye State & Facing
    if (!this.character.isGrounded) {
      this.character.setEyeState('jump');
    } else if (Math.abs(this.inputX) > 0.1) {
      // Determine look direction based on input relative to screen
      this.character.setEyeState(this.inputX > 0 ? 'lookRight' : 'lookLeft');
      
      // Optional: Rotate character to face movement? 
      // For now, let's keep the box aligned but maybe flip texture/eyes?
      // Actually, since the character is a 3D box, if we rotate it, we might mess up AABB checks if not careful.
      // But AABB is calculated from object.
      // Let's just move pupils for now as requested.
    } else {
      this.character.setEyeState('idle');
    }

    // Collision Detection Steps
    // 1. Move Horizontal
    this.character.position.add(new THREE.Vector3(delta.x, 0, delta.z));
    this.checkCollision('horizontal');

    // 2. Move Vertical
    this.character.position.y += delta.y;
    this.character.isGrounded = false;
    this.checkCollision('vertical'); // Returns true if collision handled

    // Simple floor clamp - only if NO other collision was found AND we are very low
    if (!this.character.isGrounded && this.character.position.y < -10) {
      this.character.position.set(0, 5, 0);
      this.character.velocity.set(0, 0, 0);
    }
  }

  private checkCollision(axis: 'horizontal' | 'vertical'): boolean {
    const charBox = new THREE.Box3().setFromObject(this.character);
    // Shrink slightly
    charBox.min.addScalar(0.01);
    charBox.max.subScalar(0.01);

    const voxels = this.levelManager.getAllVoxels();
    const charSize = this.character.getSize();

    // Track if we found ANY collision in this pass
    let collisionFound = false;

    for (const voxel of voxels) {
      const voxelPos = voxel.position;
      const voxelSize = 1; // Assuming size 1

      // 2D Projection Collision Logic
      
      let isOverlapping = false;
      
      // Standard AABB check: min < max && max > min
      const vMinX = voxelPos.x - voxelSize/2;
      const vMaxX = voxelPos.x + voxelSize/2;
      const vMinY = voxelPos.y - voxelSize/2;
      const vMaxY = voxelPos.y + voxelSize/2;
      const vMinZ = voxelPos.z - voxelSize/2;
      const vMaxZ = voxelPos.z + voxelSize/2;

      const cMinX = charBox.min.x;
      const cMaxX = charBox.max.x;
      const cMinY = charBox.min.y;
      const cMaxY = charBox.max.y;
      const cMinZ = charBox.min.z;
      const cMaxZ = charBox.max.z;

      switch (this.viewState) {
        case ViewState.FRONT:
        case ViewState.BACK:
          // Check X and Y overlap
          if (cMaxX > vMinX && cMinX < vMaxX && cMaxY > vMinY && cMinY < vMaxY) {
            isOverlapping = true;
          }
          break;
        case ViewState.RIGHT:
        case ViewState.LEFT:
          // Check Z and Y overlap
          if (cMaxZ > vMinZ && cMinZ < vMaxZ && cMaxY > vMinY && cMinY < vMaxY) {
             isOverlapping = true;
          }
          break;
      }

      if (isOverlapping) {
        collisionFound = true; // Mark as found
        
        // Goal Detection (Task 4.4)
        if (voxel.userData.type === VoxelType.GOAL) {
          console.log("GOAL REACHED!");
          if (this.onGoalReached) {
            this.onGoalReached();
          }
          // Do NOT reset position on victory
          return true;
        }

        // Resolve Collision
        if (axis === 'vertical') {
           if (this.character.velocity.y < 0) {
             // Check if we were previously above the block to confirm landing
             // If we were not above, it's a side collision (handled by horizontal) or a corner glitch
             const wasAbove = this.prevPosition.y >= vMaxY - 0.1; // 0.1 tolerance

             if (wasAbove) {
                // Landing
                this.character.position.y = vMaxY + charSize/2;
                this.character.isGrounded = true;
                this.character.velocity.y = 0;
   
                // DEPTH SNAPPING
                if (this.viewState === ViewState.FRONT || this.viewState === ViewState.BACK) {
                   this.character.position.z = voxelPos.z;
                } else {
                   this.character.position.x = voxelPos.x;
                }
                return true; // Stop checking after landing
             }
             // If not above, treat as NO COLLISION for vertical purposes (let gravity act)
           } else if (this.character.velocity.y > 0) {
             // Ceiling
             this.character.position.y = vMinY - charSize/2;
             this.character.velocity.y = 0;
             return true;
           }
        } else {
           // Horizontal Resolution
           if (this.viewState === ViewState.FRONT || this.viewState === ViewState.BACK) {
              // Resolving X
              if (this.character.velocity.x > 0) {
                 this.character.position.x = vMinX - charSize/2;
              } else if (this.character.velocity.x < 0) {
                 this.character.position.x = vMaxX + charSize/2;
              }
              this.character.velocity.x = 0;
           } else {
              // Resolving Z
              if (this.character.velocity.z > 0) {
                 this.character.position.z = vMinZ - charSize/2;
              } else if (this.character.velocity.z < 0) {
                 this.character.position.z = vMaxZ + charSize/2;
              }
              this.character.velocity.z = 0;
           }
           return true; // Stop checking horizontal
        }
      }
    }
    return collisionFound;
  }
}
