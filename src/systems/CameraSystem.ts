import gsap from 'gsap';
import { Engine } from '../core/Engine';
import { ViewState } from '../utils/Enums';
import { CONSTANTS } from '../utils/Constants';
import { EventManager } from '../core/EventManager';
import { GameEventType } from '../utils/Enums';

export class CameraSystem {
  private engine: Engine;
  private viewState: ViewState = ViewState.FRONT;
  private isRotating: boolean = false;
  private targetRotationY: number = 0;
  private eventManager: EventManager;

  constructor(engine: Engine) {
    this.engine = engine;
    this.eventManager = EventManager.getInstance();
  }

  public reset(): void {
    this.viewState = ViewState.FRONT;
    this.targetRotationY = 0;
    this.isRotating = false;

    const camera = this.engine.getCamera();
    const dist = CONSTANTS.CAMERA.INITIAL_POSITION.x;
    camera.position.set(0, 0, dist);
    camera.lookAt(0, 0, 0);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    
    // Notify change
    this.eventManager.emit(GameEventType.CAMERA_ROTATED, 0);
  }

  public rotate(direction: number, onUpdate?: () => void, onComplete?: () => void): void {
    if (this.isRotating) return;
    this.isRotating = true;

    // Update View State
    if (direction > 0) { // Rotate Left
       this.viewState = (this.viewState + 1) % 4;
       this.targetRotationY += Math.PI / 2;
    } else { // Rotate Right
       this.viewState = (this.viewState - 1 + 4) % 4;
       this.targetRotationY -= Math.PI / 2;
    }
    
    console.log(`Rotating to View: ${ViewState[this.viewState]}`);

    // Animate Camera
    const camera = this.engine.getCamera();
    const startAngle = Math.atan2(camera.position.x, camera.position.z);
    const radius = Math.sqrt(camera.position.x * camera.position.x + camera.position.z * camera.position.z);
    
    const targetAngle = startAngle + (direction * Math.PI / 2);
    const animationObj = { angle: startAngle };
    
    gsap.to(animationObj, {
      angle: targetAngle,
      duration: CONSTANTS.ANIMATION.ROTATION_DURATION,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.position.x = radius * Math.sin(animationObj.angle);
        camera.position.z = radius * Math.cos(animationObj.angle);
        camera.lookAt(0, 0, 0);
        
        // Emit rotation event for UI Compass
        this.eventManager.emit(GameEventType.CAMERA_ROTATED, animationObj.angle);
        
        if (onUpdate) onUpdate();
      },
      onComplete: () => {
        this.isRotating = false;
        if (onComplete) onComplete();
      }
    });
  }

  public getViewState(): ViewState {
    return this.viewState;
  }

  public isCameraRotating(): boolean {
    return this.isRotating;
  }
}
