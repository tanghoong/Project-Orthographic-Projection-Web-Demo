import * as THREE from 'three';

export enum VoxelType {
  SOLID = 1,
  PLATFORM = 2,
  SPAWN = 3,
  GOAL = 4
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
