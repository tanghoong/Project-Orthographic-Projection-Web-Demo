import * as THREE from 'three';
import { CONSTANTS } from '../utils/Constants';

export class Character extends THREE.Mesh {
  public velocity: THREE.Vector3;
  public isGrounded: boolean = false;
  private size: number;

  constructor(position: THREE.Vector3) {
    const size = CONSTANTS.VOXEL_SIZE * 0.8; // Slightly smaller than a voxel
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshStandardMaterial({ color: 0xff9800 }); // Orange character
    
    super(geometry, material);

    this.size = size;
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.position.copy(position);
    
    this.castShadow = true;
    this.receiveShadow = true;
    
    // Ensure render order to prevent flickering/z-fighting issues
    // or set depthTest to false if we want "X-Ray" (but that's extreme)
    // Instead, we can manage renderOrder if needed, but for occlusion transparency:
    
    // This will be managed by a system, but setting a default renderOrder can help
    this.renderOrder = 1;

    // Add eye or detail to indicate forward direction
    const eyeGeo = new THREE.BoxGeometry(size * 0.2, size * 0.2, size * 0.1);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const eyeLeft = new THREE.Mesh(eyeGeo, eyeMat);
    eyeLeft.position.set(-size * 0.2, size * 0.2, size * 0.45);
    const eyeRight = new THREE.Mesh(eyeGeo, eyeMat);
    eyeRight.position.set(size * 0.2, size * 0.2, size * 0.45);
    
    this.add(eyeLeft);
    this.add(eyeRight);
  }

  public update(dt: number): void {
    // Apply gravity
    this.velocity.y -= 20 * dt; // Gravity constant 20

    // Apply velocity to position
    this.position.add(this.velocity.clone().multiplyScalar(dt));

    // Floor collision (simple fallback)
    if (this.position.y < -10) {
      this.position.set(0, 5, 0); // Respawn
      this.velocity.set(0, 0, 0);
    }
  }

  public getSize(): number {
    return this.size;
  }
}
