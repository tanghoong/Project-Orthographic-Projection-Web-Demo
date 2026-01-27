import * as THREE from 'three';
import { CONSTANTS } from '../utils/Constants';

export enum VoxelType {
  SOLID = 1,
  PLATFORM = 2,
  SPAWN = 3,
  GOAL = 4
}

export class Voxel extends THREE.Mesh {
  constructor(position: THREE.Vector3, type: VoxelType) {
    const geometry = new THREE.BoxGeometry(
      CONSTANTS.VOXEL_SIZE, 
      CONSTANTS.VOXEL_SIZE, 
      CONSTANTS.VOXEL_SIZE
    );
    
    let color = 0x888888;
    switch (type) {
      case VoxelType.SOLID: color = 0x4caf50; break; // Green
      case VoxelType.PLATFORM: color = 0x2196f3; break; // Blue
      case VoxelType.SPAWN: color = 0xffeb3b; break; // Yellow
      case VoxelType.GOAL: color = 0xf44336; break; // Red
    }

    const material = new THREE.MeshStandardMaterial({ color });
    
    super(geometry, material);
    
    this.userData.type = type; // Store type for serialization
    this.position.copy(position);
    this.castShadow = true;
    this.receiveShadow = true;
    
    // Add edges for better visibility
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges, 
      new THREE.LineBasicMaterial({ color: 0x000000 })
    );
    this.add(line);
  }
}
