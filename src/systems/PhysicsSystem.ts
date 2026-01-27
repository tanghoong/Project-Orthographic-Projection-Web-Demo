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

  constructor(character: Character, levelManager: LevelManager) {
    this.character = character;
    this.levelManager = levelManager;
  }

  public setViewState(state: ViewState): void {
    this.viewState = state;
    // When view changes, zero out velocity
    this.character.velocity.set(0, this.character.velocity.y, 0);

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
    // Apply Horizontal Movement based on View State
    const speed = 10;
    const moveVel = this.inputX * speed;

    // Reset horizontal velocity first
    this.character.velocity.x = 0;
    this.character.velocity.z = 0;

    switch (this.viewState) {
      case ViewState.FRONT: this.character.velocity.x = moveVel; break;
      case ViewState.RIGHT: this.character.velocity.z = moveVel; break;
      case ViewState.BACK:  this.character.velocity.x = -moveVel; break;
      case ViewState.LEFT:  this.character.velocity.z = -moveVel; break;
    }

    // Apply Gravity
    this.character.velocity.y -= this.gravity * dt;

    // Integrate Position
    const delta = this.character.velocity.clone().multiplyScalar(dt);
    
    // Collision Detection Steps
    // 1. Move Horizontal
    this.character.position.add(new THREE.Vector3(delta.x, 0, delta.z));
    this.checkCollision('horizontal');

    // 2. Move Vertical
    this.character.position.y += delta.y;
    this.character.isGrounded = false;
    this.checkCollision('vertical');

    // Simple floor clamp
    if (this.character.position.y < -10) {
      this.character.position.set(0, 5, 0);
      this.character.velocity.set(0, 0, 0);
    }
  }

  private checkCollision(axis: 'horizontal' | 'vertical') {
    const charBox = new THREE.Box3().setFromObject(this.character);
    // Shrink slightly
    charBox.min.addScalar(0.01);
    charBox.max.subScalar(0.01);

    const voxels = this.levelManager.getAllVoxels();
    const charSize = this.character.getSize();

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
        // Goal Detection (Task 4.4)
        if (voxel.userData.type === VoxelType.GOAL) {
          console.log("GOAL REACHED!");
          alert("Victory! You reached the goal!");
          // Reset?
          this.character.position.set(0, 5, 0);
          return;
        }

        // Resolve Collision
        if (axis === 'vertical') {
           if (this.character.velocity.y < 0) {
             // Landing
             this.character.position.y = vMaxY + charSize/2;
             this.character.isGrounded = true;
             this.character.velocity.y = 0;
           } else if (this.character.velocity.y > 0) {
             // Ceiling
             this.character.position.y = vMinY - charSize/2;
             this.character.velocity.y = 0;
           }
           return; // Stop checking vertical
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
           return; // Stop checking horizontal
        }
      }
    }
  }
}
