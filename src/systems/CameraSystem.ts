import gsap from 'gsap';
import { Engine } from '../core/Engine';
import { ViewState, GameEventType, DisplayMode } from '../utils/Enums';
import { CONSTANTS } from '../utils/Constants';
import { EventManager } from '../core/EventManager';

export class CameraSystem {
  private engine: Engine;
  private viewState: ViewState = ViewState.FRONT;
  private displayMode: DisplayMode = DisplayMode.ORTHO_2D;
  private isRotating: boolean = false;
  private targetRotationY: number = 0;
  private eventManager: EventManager;

  constructor(engine: Engine) {
    this.engine = engine;
    this.eventManager = EventManager.getInstance();
  }

  public reset(): void {
    this.viewState = ViewState.FRONT;
    this.displayMode = DisplayMode.ORTHO_2D;
    this.targetRotationY = 0;
    this.isRotating = false;

    const camera = this.engine.getCamera();
    // Default to Front View position logic
    // FRONT: x=0, y=10, z=30 (from Constants)
    const target = CONSTANTS.CAMERA.VIEW_PRESETS.FRONT;
    camera.position.set(target.x, target.y, target.z);
    camera.lookAt(0, 0, 0);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    
    // Notify change
    this.eventManager.emit(GameEventType.CAMERA_ROTATED, 0);
    this.eventManager.emit(GameEventType.DISPLAY_MODE_CHANGED, this.displayMode);
  }

  public toggleDisplayMode(): void {
    if (this.isRotating) return;
    
    const newMode = this.displayMode === DisplayMode.ORTHO_2D 
      ? DisplayMode.ISOMETRIC 
      : DisplayMode.ORTHO_2D;
      
    this.setDisplayMode(newMode);
  }
  
  public setDisplayMode(mode: DisplayMode): void {
    if (this.isRotating || this.displayMode === mode) return;
    
    this.displayMode = mode;
    this.isRotating = true;
    
    console.log(`Switching to Display Mode: ${DisplayMode[mode]}`);
    this.eventManager.emit(GameEventType.DISPLAY_MODE_CHANGED, mode);
    
    let targetPos: {x: number, y: number, z: number};
    
    if (mode === DisplayMode.ISOMETRIC) {
      targetPos = CONSTANTS.CAMERA.VIEW_PRESETS.ISOMETRIC;
    } else {
      // Return to current ViewState position
      targetPos = this.getViewStatePosition(this.viewState);
    }
    
    // Animate Position
    const camera = this.engine.getCamera();
    
    gsap.to(camera.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: CONSTANTS.ANIMATION.ROTATION_DURATION,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
      },
      onComplete: () => {
        this.isRotating = false;
        camera.updateProjectionMatrix();
      }
    });
  }

  public rotate(direction: number, onUpdate?: () => void, onComplete?: () => void): void {
    if (this.isRotating) return;
    
    // If in Isometric mode, force switch back to 2D first?
    // Or allow rotating the underlying 2D view and switch back?
    // Let's allow rotation and automatically switch back to 2D mode if in ISO
    if (this.displayMode === DisplayMode.ISOMETRIC) {
       this.displayMode = DisplayMode.ORTHO_2D;
       this.eventManager.emit(GameEventType.DISPLAY_MODE_CHANGED, this.displayMode);
       // We will animate to the NEW view state position directly from ISO
    }

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

    // Determine target position for the new view state
    const targetPos = this.getViewStatePosition(this.viewState);

    // Animate Camera Position directly (instead of angle) for consistency
    const camera = this.engine.getCamera();
    
    gsap.to(camera.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: CONSTANTS.ANIMATION.ROTATION_DURATION,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.lookAt(0, 0, 0);
        
        // Emit rotation event (approximate angle for compass)
        const angle = Math.atan2(camera.position.x, camera.position.z);
        this.eventManager.emit(GameEventType.CAMERA_ROTATED, angle);
        
        if (onUpdate) onUpdate();
      },
      onComplete: () => {
        this.isRotating = false;
        if (onComplete) onComplete();
      }
    });
  }

  private getViewStatePosition(state: ViewState): {x: number, y: number, z: number} {
    // These should align with the logic in ViewState enum
    // FRONT (0) -> -Z direction? No, Camera at +Z looking at 0.
    // Wait, let's check Constants.
    // FRONT: x=0, y=10, z=30. Camera is at +Z. Correct.
    
    // Logic from rotate():
    // Start at Front (+Z). 
    // Rotate Left (Dir > 0) -> +X. (ViewState 1 RIGHT).
    // Rotate Left again -> -Z (ViewState 2 BACK).
    // Rotate Left again -> -X (ViewState 3 LEFT).
    
    // Let's use standard radius from Constants if possible, or derive from Front preset.
    const dist = CONSTANTS.CAMERA.VIEW_PRESETS.FRONT.z; // 30
    const height = CONSTANTS.CAMERA.VIEW_PRESETS.FRONT.y; // 10
    
    switch (state) {
        case ViewState.FRONT: return { x: 0, y: height, z: dist };
        case ViewState.RIGHT: return { x: dist, y: height, z: 0 };
        case ViewState.BACK: return { x: 0, y: height, z: -dist };
        case ViewState.LEFT: return { x: -dist, y: height, z: 0 };
        default: return { x: 0, y: height, z: dist };
    }
  }

  public getViewState(): ViewState {
    return this.viewState;
  }
  
  public getDisplayMode(): DisplayMode {
    return this.displayMode;
  }

  public isCameraRotating(): boolean {
    return this.isRotating;
  }
}
