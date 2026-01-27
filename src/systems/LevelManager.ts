import * as THREE from 'three';
import { Voxel, VoxelType } from '../entities/Voxel';
import { CONSTANTS } from '../utils/Constants';

export interface LevelData {
  meta: {
    version: string;
    author: string;
    created_at: string;
  };
  level_data: {
    grid_size: [number, number, number];
    spawn_point: [number, number, number];
    blocks: [number, number, number, number][]; // [x, y, z, typeID]
  };
}

export class LevelManager {
  private scene: THREE.Scene;
  private voxels: Map<string, Voxel>;
  private spawnPoint: THREE.Vector3 | null = null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.voxels = new Map();
  }

  private getKey(x: number, y: number, z: number): string {
    return `${x},${y},${z}`;
  }

  public addVoxel(x: number, y: number, z: number, type: VoxelType): boolean {
    const key = this.getKey(x, y, z);
    
    // Check bounds (optional, but good for sanity)
    const limit = CONSTANTS.GRID_SIZE / 2;
    if (Math.abs(x) > limit || Math.abs(y) > limit || Math.abs(z) > limit) {
      console.warn(`Position ${x},${y},${z} is out of bounds`);
      return false;
    }

    // Check collision/duplication
    if (this.voxels.has(key)) {
      // If it's the same type, do nothing
      if (this.voxels.get(key)!.userData.type === type) return false;
      // If different type, remove old one first (replace)
      this.removeVoxel(x, y, z);
    }

    // Special handling for Spawn Point (Max 1)
    if (type === VoxelType.SPAWN) {
      if (this.spawnPoint) {
        // Remove existing spawn point voxel
        this.removeVoxel(this.spawnPoint.x, this.spawnPoint.y, this.spawnPoint.z);
      }
      this.spawnPoint = new THREE.Vector3(x, y, z);
    }

    const position = new THREE.Vector3(x, y, z);
    const voxel = new Voxel(position, type);
    
    this.scene.add(voxel);
    this.voxels.set(key, voxel);
    
    return true;
  }

  public removeVoxel(x: number, y: number, z: number): boolean {
    const key = this.getKey(x, y, z);
    const voxel = this.voxels.get(key);
    
    if (!voxel) return false;

    // Update spawn point reference if we are deleting it
    if (voxel.userData.type === VoxelType.SPAWN) {
      this.spawnPoint = null;
    }

    this.scene.remove(voxel);
    // Dispose geometry/material to prevent memory leaks
    voxel.geometry.dispose();
    (voxel.material as THREE.Material).dispose();
    
    this.voxels.delete(key);
    return true;
  }

  public clear(): void {
    // Create a copy of values to avoid iterator invalidation issues during deletion
    const allVoxels = Array.from(this.voxels.values());
    for (const voxel of allVoxels) {
      this.removeVoxel(voxel.position.x, voxel.position.y, voxel.position.z);
    }
    this.spawnPoint = null;
  }

  public serialize(): string {
    const blocks: [number, number, number, number][] = [];
    
    this.voxels.forEach((voxel) => {
      blocks.push([
        voxel.position.x,
        voxel.position.y,
        voxel.position.z,
        voxel.userData.type
      ]);
    });

    const data: LevelData = {
      meta: {
        version: "1.1",
        author: "User", // Could be dynamic
        created_at: new Date().toISOString()
      },
      level_data: {
        grid_size: [CONSTANTS.GRID_SIZE, CONSTANTS.GRID_SIZE, CONSTANTS.GRID_SIZE],
        spawn_point: this.spawnPoint ? [this.spawnPoint.x, this.spawnPoint.y, this.spawnPoint.z] : [0, 5, 0],
        blocks: blocks
      }
    };

    return JSON.stringify(data, null, 2);
  }

  public deserialize(json: string): boolean {
    try {
      const data: LevelData = JSON.parse(json);
      
      this.clear();

      data.level_data.blocks.forEach(([x, y, z, type]) => {
        this.addVoxel(x, y, z, type);
      });

      console.log(`Level loaded with ${this.voxels.size} blocks.`);
      return true;
    } catch (e) {
      console.error("Failed to load level:", e);
      return false;
    }
  }

  public getAllVoxels(): Voxel[] {
    return Array.from(this.voxels.values());
  }

  public getSpawnPoint(): THREE.Vector3 | null {
    return this.spawnPoint ? this.spawnPoint.clone() : null;
  }
}
