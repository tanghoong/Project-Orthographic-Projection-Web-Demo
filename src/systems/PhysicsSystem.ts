import * as THREE from 'three';
import { Character } from '../entities/Character';
import { LevelManager } from './LevelManager';
import { ViewState } from '../utils/Enums';
import { VoxelType } from '../entities/Voxel';
import { CONSTANTS } from '../utils/Constants';

export class PhysicsSystem {
  private character: Character;
  private levelManager: LevelManager;
  private gravity: number = CONSTANTS.PHYSICS.GRAVITY;
  private viewState: ViewState = ViewState.FRONT;
  private inputX: number = 0; // -1, 0, 1
  private inputY: number = 0; // -1, 0, 1 (for ladder climbing)
  public onGoalReached: (() => void) | null = null;
  public onKeyCollected: ((_keyType: VoxelType) => void) | null = null;
  public onDeath: (() => void) | null = null;
  private prevPosition: THREE.Vector3 = new THREE.Vector3();
  
  // Jump Buffer & Coyote Time
  private jumpBuffer: number = 0;          // Time remaining on jump buffer
  private coyoteTime: number = 0;          // Time remaining on coyote time
  private wasGroundedLastFrame: boolean = false;
  
  // Ladder System
  private onLadder: boolean = false;
  
  // Key Collection System
  private collectedKeys: Set<string> = new Set(); // Track collected key positions
  private keysRequired: number = 0; // Total keys in level
  
  // Trap & Respawn System
  private lastSafePosition: THREE.Vector3 = new THREE.Vector3(0, 5, 0);

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

  public setVerticalInput(dir: number): void {
    this.inputY = dir;
  }

  public getCollectedKeysCount(): number {
    return this.collectedKeys.size;
  }

  public getRequiredKeysCount(): number {
    return this.keysRequired;
  }

  public hasAllKeys(): boolean {
    return this.keysRequired > 0 && this.collectedKeys.size >= this.keysRequired;
  }

  public resetGameState(): void {
    this.collectedKeys.clear();
    this.keysRequired = 0;
    this.onLadder = false;
    this.lastSafePosition.set(0, 5, 0);
  }

  public countKeysInLevel(): void {
    const voxels = this.levelManager.getAllVoxels();
    this.keysRequired = voxels.filter(v => v.type === VoxelType.KEY).length;
  }

  public jump(): void {
    // Only jump if grounded or within coyote time
    if (this.character.isGrounded || this.coyoteTime > 0) {
      this.character.velocity.y = CONSTANTS.PHYSICS.JUMP_FORCE;
      this.coyoteTime = 0; // Consume coyote time
      this.jumpBuffer = 0; // Consume jump buffer
    } else {
      // Buffer the jump input
      this.jumpBuffer = CONSTANTS.PHYSICS.JUMP_BUFFER_TIME;
    }
  }

  public update(dt: number): void {
    // Store previous position for collision resolution
    this.prevPosition.copy(this.character.position);
    
    // Track grounded state for coyote time
    this.wasGroundedLastFrame = this.character.isGrounded;

    // Apply Horizontal Movement based on View State
    const speed = CONSTANTS.PHYSICS.MOVE_SPEED;
    const moveVel = this.inputX * speed;

    // Check if on ladder
    this.checkLadder();

    // Reset horizontal velocity first
    this.character.velocity.x = 0;
    this.character.velocity.z = 0;

    switch (this.viewState) {
      case ViewState.FRONT: this.character.velocity.x = moveVel; break;
      case ViewState.RIGHT: this.character.velocity.z = -moveVel; break; // Invert Z for Right View
      case ViewState.BACK:  this.character.velocity.x = -moveVel; break;
      case ViewState.LEFT:  this.character.velocity.z = moveVel; break;  // Invert Z for Left View
    }

    // Ladder Climbing Logic
    if (this.onLadder) {
      // Disable gravity on ladder
      const climbSpeed = 3.0;
      this.character.velocity.y = this.inputY * climbSpeed;
      
      // Allow dismount with jump
      if (this.inputY === 0 && Math.abs(this.inputX) === 0) {
        // Idle on ladder, zero out velocity
        this.character.velocity.y = 0;
      }
    } else {
      // Apply Gravity (only when not on ladder)
      this.character.velocity.y -= this.gravity * dt;
      
      // Cap falling speed to terminal velocity
      if (this.character.velocity.y < -CONSTANTS.PHYSICS.TERMINAL_VELOCITY) {
        this.character.velocity.y = -CONSTANTS.PHYSICS.TERMINAL_VELOCITY;
      }
    }

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
    // IMPORTANT: Check horizontal FIRST to prevent phase-through on thin platforms
    // 1. Move Horizontal
    this.character.position.add(new THREE.Vector3(delta.x, 0, delta.z));
    this.checkCollision('horizontal');

    // 2. Move Vertical
    this.character.position.y += delta.y;
    this.character.isGrounded = false;
    this.checkCollision('vertical');
    
    // Update last safe position when grounded on solid block
    if (this.character.isGrounded) {
      this.lastSafePosition.copy(this.character.position);
    }
    
    // Update Coyote Time: Give grace period when leaving platform
    if (this.wasGroundedLastFrame && !this.character.isGrounded) {
      this.coyoteTime = CONSTANTS.PHYSICS.COYOTE_TIME;
    } else if (this.character.isGrounded) {
      this.coyoteTime = 0;
    } else if (this.coyoteTime > 0) {
      this.coyoteTime -= dt;
    }
    
    // Update Jump Buffer: Consume buffered jump if we land
    if (this.jumpBuffer > 0) {
      this.jumpBuffer -= dt;
      if (this.character.isGrounded) {
        // Execute buffered jump
        this.character.velocity.y = CONSTANTS.PHYSICS.JUMP_FORCE;
        this.jumpBuffer = 0;
      }
    }

    // Simple floor clamp - only if NO other collision was found AND we are very low
    if (!this.character.isGrounded && this.character.position.y < -10) {
      this.character.position.set(0, 5, 0);
      this.character.velocity.set(0, 0, 0);
    }
  }

  private checkLadder(): void {
    this.character.updateMatrixWorld(); // Ensure matrix is up to date
    const charBox = new THREE.Box3().setFromObject(this.character);
    const voxels = this.levelManager.getAllVoxels();
    
    this.onLadder = false;
    
    for (const voxel of voxels) {
      if (voxel.type !== VoxelType.LADDER) continue;
      
      const voxelPos = voxel.position;
      const voxelSize = 1;
      
      // Check 3D AABB overlap for ladder
      const vMinX = voxelPos.x - voxelSize/2;
      const vMaxX = voxelPos.x + voxelSize/2;
      const vMinY = voxelPos.y - voxelSize/2;
      const vMaxY = voxelPos.y + voxelSize/2;
      const vMinZ = voxelPos.z - voxelSize/2;
      const vMaxZ = voxelPos.z + voxelSize/2;
      
      if (charBox.max.x > vMinX && charBox.min.x < vMaxX &&
          charBox.max.y > vMinY && charBox.min.y < vMaxY &&
          charBox.max.z > vMinZ && charBox.min.z < vMaxZ) {
        this.onLadder = true;
        return;
      }
    }
  }

  private checkCollision(axis: 'horizontal' | 'vertical'): boolean {
    this.character.updateMatrixWorld(); // Update matrix for new position
    const charBox = new THREE.Box3().setFromObject(this.character);
    // Shrink slightly to prevent floating point precision issues
    const epsilon = 0.01;
    charBox.min.addScalar(epsilon);
    charBox.max.subScalar(epsilon);

    // console.log(`Checking ${axis} collision. CharBox: Y[${charBox.min.y.toFixed(2)}, ${charBox.max.y.toFixed(2)}]`);

    const voxels = this.levelManager.getAllVoxels();
    const charSize = this.character.getSize();

    // Track if we found ANY collision in this pass
    let collisionFound = false;

    for (const voxel of voxels) {
      const voxelPos = voxel.position;
      const voxelSize = 1; // Assuming size 1
      
      // if (axis === 'vertical') console.log(`  Voxel at ${voxelPos.x},${voxelPos.y},${voxelPos.z}`);

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
        console.log(`    Collision detected with ${voxelPos.x},${voxelPos.y},${voxelPos.z}`);
        collisionFound = true; // Mark as found
        
        // Key Collection
        if (voxel.userData.type === VoxelType.KEY) {
          const keyId = `${voxelPos.x}_${voxelPos.y}_${voxelPos.z}`;
          if (!this.collectedKeys.has(keyId)) {
            this.collectedKeys.add(keyId);
            console.log(`Key collected! (${this.collectedKeys.size}/${this.keysRequired})`);
            
            // Remove key from level
            this.levelManager.removeVoxelAt(voxelPos);
            
            if (this.onKeyCollected) {
              this.onKeyCollected(VoxelType.KEY);
            }
          }
          continue; // Don't treat as solid collision
        }
        
        // Door Unlock System
        if (voxel.userData.type === VoxelType.DOOR) {
          if (this.hasAllKeys()) {
            // Door unlocked - remove it and allow passage
            console.log("Door unlocked!");
            this.levelManager.removeVoxelAt(voxelPos);
            continue; // Don't collide
          } else {
            // Door is locked - treat as solid wall
            console.log(`Door locked! Need ${this.keysRequired - this.collectedKeys.size} more keys.`);
            // Fall through to normal collision resolution
          }
        }
        
        // Trap Detection
        if (voxel.userData.type === VoxelType.TRAP) {
          console.log("Hit trap! Respawning...");
          this.character.position.copy(this.lastSafePosition);
          this.character.velocity.set(0, 0, 0);
          if (this.onDeath) {
            this.onDeath();
          }
          return true;
        }
        
        // Goal Detection (Task 4.4)
        if (voxel.userData.type === VoxelType.GOAL) {
          console.log("GOAL REACHED!");
          if (this.onGoalReached) {
            this.onGoalReached();
          }
          // Do NOT reset position on victory
          return true;
        }
        
        // Ladders don't block movement
        if (voxel.userData.type === VoxelType.LADDER) {
          continue;
        }

        // Resolve Collision
        if (axis === 'vertical') {
           if (this.character.velocity.y < 0) {
             // Check if we were previously above the block to confirm landing
             // This prevents phase-through and false positives from side collisions
             const tolerance = 0.15; // Increased tolerance for better detection
             const wasAbove = this.prevPosition.y >= vMaxY - tolerance;

             if (wasAbove) {
                // Landing on platform
                this.character.position.y = vMaxY + charSize/2;
                this.character.isGrounded = true;
                this.character.velocity.y = 0;
   
                // DEPTH SNAPPING: Align character to platform depth
                if (this.viewState === ViewState.FRONT || this.viewState === ViewState.BACK) {
                   this.character.position.z = voxelPos.z;
                } else {
                   this.character.position.x = voxelPos.x;
                }
                return true; // Stop checking after landing
             }
             // If not above, treat as NO COLLISION for vertical purposes (let gravity act)
           } else if (this.character.velocity.y > 0) {
             // Hitting ceiling - bounce down
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
