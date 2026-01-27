import * as THREE from 'three';
import { VoxelType } from '../entities/Voxel';
import { CONSTANTS } from '../utils/Constants';

export class VoxelRenderer {
  private scene: THREE.Scene;
  private meshes: Map<VoxelType, THREE.InstancedMesh>;
  private capacity: number = 10000; // Max blocks per type
  private dummy: THREE.Object3D = new THREE.Object3D();

  // Keep track of active count and mapping from position to instance index
  private instanceCounts: Map<VoxelType, number> = new Map();
  // Map "x,y,z" -> instanceIndex for removal
  private positionToIndex: Map<VoxelType, Map<string, number>> = new Map();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.meshes = new Map();
    this.initMeshes();
  }

  private initMeshes() {
    const geometry = new THREE.BoxGeometry(
      CONSTANTS.VOXEL_SIZE, 
      CONSTANTS.VOXEL_SIZE, 
      CONSTANTS.VOXEL_SIZE
    );

    // Initialize for each type
    Object.values(VoxelType).forEach(val => {
      if (typeof val === 'number') {
        const type = val as VoxelType;
        const material = this.getMaterial(type);
        
        const mesh = new THREE.InstancedMesh(geometry, material, this.capacity);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        mesh.count = 0;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        this.scene.add(mesh);
        this.meshes.set(type, mesh);
        this.instanceCounts.set(type, 0);
        this.positionToIndex.set(type, new Map());
      }
    });
  }

  private getMaterial(type: VoxelType): THREE.Material {
    let color = 0x888888;
    switch (type) {
      case VoxelType.SOLID: color = 0x4caf50; break; // Green
      case VoxelType.PLATFORM: color = 0x2196f3; break; // Blue
      case VoxelType.SPAWN: color = 0xffeb3b; break; // Yellow
      case VoxelType.GOAL: color = 0xf44336; break; // Red
    }
    return new THREE.MeshStandardMaterial({ color });
  }

  private getKey(x: number, y: number, z: number): string {
    return `${x},${y},${z}`;
  }

  public addVoxel(x: number, y: number, z: number, type: VoxelType): void {
    const mesh = this.meshes.get(type);
    if (!mesh) return;

    const count = this.instanceCounts.get(type)!;
    if (count >= this.capacity) {
      console.warn(`Voxel capacity reached for type ${type}`);
      return;
    }

    this.dummy.position.set(x, y, z);
    this.dummy.updateMatrix();
    mesh.setMatrixAt(count, this.dummy.matrix);
    
    // Update map
    const map = this.positionToIndex.get(type)!;
    map.set(this.getKey(x, y, z), count);

    // Increment count
    this.instanceCounts.set(type, count + 1);
    mesh.count = count + 1;
    mesh.instanceMatrix.needsUpdate = true;
  }

  public removeVoxel(x: number, y: number, z: number, type: VoxelType): void {
    const mesh = this.meshes.get(type);
    const map = this.positionToIndex.get(type);
    if (!mesh || !map) return;

    const key = this.getKey(x, y, z);
    const index = map.get(key);

    if (index === undefined) return;

    const count = this.instanceCounts.get(type)!;
    const lastIndex = count - 1;

    // Swap with last element if not last
    if (index !== lastIndex) {
      // Get matrix of last element
      const lastMatrix = new THREE.Matrix4();
      mesh.getMatrixAt(lastIndex, lastMatrix);
      
      // Move last element to the hole
      mesh.setMatrixAt(index, lastMatrix);
      
      // Find the position of the last element to update its index in the map
      // This is slow: O(N) search. Better: store index -> key map too?
      // Optimization: We can extract position from matrix.
      const pos = new THREE.Vector3();
      pos.setFromMatrixPosition(lastMatrix);
      const lastKey = this.getKey(Math.round(pos.x), Math.round(pos.y), Math.round(pos.z));
      
      map.set(lastKey, index);
    }

    // Decrement
    map.delete(key);
    this.instanceCounts.set(type, count - 1);
    mesh.count = count - 1;
    mesh.instanceMatrix.needsUpdate = true;
  }
  
  public clear(): void {
    this.meshes.forEach((mesh, type) => {
        mesh.count = 0;
        mesh.instanceMatrix.needsUpdate = true;
        this.instanceCounts.set(type, 0);
        this.positionToIndex.get(type)!.clear();
    });
  }

  public getMeshes(): THREE.InstancedMesh[] {
      return Array.from(this.meshes.values());
  }
}
