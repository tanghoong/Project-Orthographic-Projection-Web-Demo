import * as THREE from 'three';
import { EventManager } from '../core/EventManager';
import { GameEventType } from '../utils/Enums';

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  scale: number;
  life: number;
  maxLife: number;
  color: THREE.Color;
  active: boolean;
}

export class ParticleSystem {
  private scene: THREE.Scene;
  private eventManager: EventManager;
  private mesh: THREE.InstancedMesh;
  private particles: Particle[] = [];
  private maxParticles: number = 200;
  private dummy: THREE.Object3D = new THREE.Object3D();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.eventManager = EventManager.getInstance();

    // Create InstancedMesh for particles
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2); // Small cubes
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.mesh = new THREE.InstancedMesh(geometry, material, this.maxParticles);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.mesh);

    // Initialize particle pool
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        position: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        scale: 1,
        life: 0,
        maxLife: 1,
        color: new THREE.Color(1, 1, 1),
        active: false
      });
    }

    this.setupListeners();
  }

  private setupListeners(): void {
    this.eventManager.on(GameEventType.PLAYER_LAND, (pos: THREE.Vector3) => this.emitDust(pos, 5));
    this.eventManager.on(GameEventType.PLAYER_JUMP, (pos: THREE.Vector3) => this.emitDust(pos, 3));
    this.eventManager.on(GameEventType.KEY_COLLECTED, (_data: any) => {
        // We might not get position from key collected event easily unless we change it
        // For now, let's just emit confetti from center of screen or assume we pass pos
        // Or updated EventManager to pass position
    });
    // Explicit event for generic particle emission if needed
    this.eventManager.on('EMIT_PARTICLES', (data: { pos: THREE.Vector3, type: string }) => {
        if (data.type === 'sparkle') this.emitSparkles(data.pos, 10);
        if (data.type === 'explosion') this.emitExplosion(data.pos, 20);
    });
  }

  public emit(pos: THREE.Vector3, count: number, color: number, speed: number, life: number): void {
    let emitted = 0;
    for (const p of this.particles) {
      if (!p.active) {
        p.active = true;
        p.position.copy(pos);
        // Random velocity spread
        p.velocity.set(
          (Math.random() - 0.5) * speed,
          (Math.random() * speed) + speed * 0.5, // Bias upwards
          (Math.random() - 0.5) * speed
        );
        p.scale = 1;
        p.life = life;
        p.maxLife = life;
        p.color.setHex(color);
        
        // Update instance color
        this.mesh.setColorAt(this.particles.indexOf(p), p.color);
        
        emitted++;
        if (emitted >= count) break;
      }
    }
    this.mesh.instanceColor!.needsUpdate = true;
  }

  public emitDust(pos: THREE.Vector3, count: number): void {
    // White/Grey dust
    // Offset slightly to feet
    const feetPos = pos.clone().add(new THREE.Vector3(0, -0.4, 0));
    this.emit(feetPos, count, 0xdddddd, 2, 0.5);
  }

  public emitSparkles(pos: THREE.Vector3, count: number): void {
    // Gold sparkles
    this.emit(pos, count, 0xffd700, 3, 1.0);
  }

  public emitExplosion(pos: THREE.Vector3, count: number): void {
    // Red/Orange explosion
    this.emit(pos, count, 0xff4500, 5, 0.8);
  }

  public update(dt: number): void {
    let activeCount = 0;
    
    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];
      if (p.active) {
        // Physics
        p.velocity.y -= 9.8 * dt * 0.5; // Gravity
        p.position.addScaledVector(p.velocity, dt);
        
        // Age
        p.life -= dt;
        if (p.life <= 0) {
          p.active = false;
          p.scale = 0;
        } else {
          // Fade out (scale down)
          p.scale = p.life / p.maxLife;
        }

        // Update Matrix
        this.dummy.position.copy(p.position);
        this.dummy.scale.setScalar(p.scale);
        this.dummy.updateMatrix();
        this.mesh.setMatrixAt(i, this.dummy.matrix);
        
        activeCount++;
      } else {
        // Hide inactive
        this.mesh.setMatrixAt(i, new THREE.Matrix4().set(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0));
      }
    }

    if (activeCount > 0 || this.mesh.count > 0) {
      this.mesh.instanceMatrix.needsUpdate = true;
    }
  }
}
