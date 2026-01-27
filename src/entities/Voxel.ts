import * as THREE from 'three';

export enum VoxelType {
  SOLID = 2,      // Ground block
  PLATFORM = 3,   // Cloud block (floating)
  LADDER = 4,     // Ladder (climb up/down)
  TRAP = 5,       // Boom trap (respawn)
  KEY = 6,        // Floating key (collectible)
  DOOR = 7,       // Exit door (requires all keys)
  SPAWN = 8,      // Start point
  GOAL = 9        // End game point
}

export class Voxel {
  public position: THREE.Vector3;
  public type: VoxelType;
  public userData: { [key: string]: any } = {};

  constructor(position: THREE.Vector3, type: VoxelType) {
    this.position = position.clone();
    this.type = type;
    this.userData.type = type;
  }
}
