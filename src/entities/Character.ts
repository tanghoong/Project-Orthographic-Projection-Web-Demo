import * as THREE from 'three';
import { CONSTANTS } from '../utils/Constants';
import gsap from 'gsap';

export type EyeState = 'idle' | 'lookLeft' | 'lookRight' | 'jump';

export class Character extends THREE.Mesh {
  public velocity: THREE.Vector3;
  public isGrounded: boolean = false;
  private size: number;
  
  private leftEye: THREE.Mesh;
  private rightEye: THREE.Mesh;
  private leftPupil: THREE.Mesh;
  private rightPupil: THREE.Mesh;
  
  private currentEyeState: EyeState = 'idle';

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
    this.renderOrder = 1;

    // --- Eye Setup ---
    const eyeSize = size * 0.25;
    const eyeGeo = new THREE.BoxGeometry(eyeSize, eyeSize, size * 0.1);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White Sclera
    
    const pupilSize = eyeSize * 0.4;
    const pupilGeo = new THREE.BoxGeometry(pupilSize, pupilSize, size * 0.05);
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black Pupil

    // Left Eye
    this.leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.leftEye.position.set(-size * 0.2, size * 0.2, size * 0.45);
    this.leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    this.leftPupil.position.z = size * 0.051; // Slightly in front
    this.leftEye.add(this.leftPupil);

    // Right Eye
    this.rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.rightEye.position.set(size * 0.2, size * 0.2, size * 0.45);
    this.rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    this.rightPupil.position.z = size * 0.051;
    this.rightEye.add(this.rightPupil);
    
    this.add(this.leftEye);
    this.add(this.rightEye);

    // Start Blink Loop
    this.startBlinking();
  }

  private startBlinking() {
    const blink = () => {
      // Only blink if idle
      if (this.currentEyeState === 'idle') {
        gsap.to([this.leftEye.scale, this.rightEye.scale], {
          y: 0.1,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
             // Schedule next blink
             setTimeout(blink, 2000 + Math.random() * 3000);
          }
        });
      } else {
        // Try again sooner if busy
        setTimeout(blink, 1000);
      }
    };
    setTimeout(blink, 2000);
  }

  public setEyeState(state: EyeState) {
    if (this.currentEyeState === state) return;
    this.currentEyeState = state;

    // Kill existing scale tweens to prevent conflict
    gsap.killTweensOf([this.leftEye.scale, this.rightEye.scale]);
    
    // Reset to base state first
    gsap.to([this.leftEye.scale, this.rightEye.scale], { x: 1, y: 1, duration: 0.1 });

    // Pupil movement range
    const range = this.size * 0.08; 

    switch (state) {
      case 'idle':
        gsap.to([this.leftPupil.position, this.rightPupil.position], {
           x: 0, y: 0, duration: 0.2
        });
        break;
      case 'lookLeft':
        gsap.to([this.leftPupil.position, this.rightPupil.position], {
          x: -range, y: 0, duration: 0.2
        });
        break;
      case 'lookRight':
        gsap.to([this.leftPupil.position, this.rightPupil.position], {
          x: range, y: 0, duration: 0.2
        });
        break;
      case 'jump':
         // Wide eyes + Look up
         gsap.to([this.leftEye.scale, this.rightEye.scale], {
            x: 1.2, y: 1.2, duration: 0.2
         });
         gsap.to([this.leftPupil.position, this.rightPupil.position], {
            x: 0, y: range, duration: 0.2
         });
         break;
    }
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
