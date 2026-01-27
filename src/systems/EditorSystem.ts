import * as THREE from 'three';
import { Engine } from '../core/Engine';
import { LevelManager } from './LevelManager';
import { VoxelType } from '../entities/Voxel';
import { CONSTANTS } from '../utils/Constants';

export class EditorSystem {
  private engine: Engine;
  private levelManager: LevelManager;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private ghostMesh: THREE.Mesh;
  private highlightBox: THREE.LineSegments;
  
  private currentType: VoxelType = VoxelType.SOLID;
  private isEraserMode: boolean = false; // Key 5 or Alt key
  private isCursorMode: boolean = true; // Key 0 - Default to Cursor Mode
  private isAltDown: boolean = false;
  private isSpaceDown: boolean = false; // Space key for OrbitControls
  private enabled: boolean = true;

  constructor(engine: Engine, levelManager: LevelManager) {
    this.engine = engine;
    this.levelManager = levelManager;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Setup Ghost Mesh (Placement preview)
    const geometry = new THREE.BoxGeometry(CONSTANTS.VOXEL_SIZE, CONSTANTS.VOXEL_SIZE, CONSTANTS.VOXEL_SIZE);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x4caf50, 
      transparent: true, 
      opacity: 0.5,
      depthTest: false // Always visible
    });
    this.ghostMesh = new THREE.Mesh(geometry, material);
    this.engine.getScene().add(this.ghostMesh);

    // Setup Highlight Box (Deletion preview)
    const edges = new THREE.EdgesGeometry(geometry);
    this.highlightBox = new THREE.LineSegments(
      edges, 
      new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 })
    );
    this.highlightBox.visible = false;
    this.engine.getScene().add(this.highlightBox);

    this.setupInputs();
    
    // Default to Cursor Mode: Enable OrbitControls
    this.engine.getControls().enabled = true;
  }

  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    this.updateVisuals();
    if (!enabled) {
        this.engine.getControls().enabled = false;
    }
  }

  private updateVisuals(): void {
      const showVisuals = this.enabled && !this.isCursorMode && !this.isSpaceDown;
      this.ghostMesh.visible = showVisuals;
      this.highlightBox.visible = showVisuals && this.highlightBox.visible;
      
      // Update cursor style
      if (this.isSpaceDown && this.enabled) {
          document.body.style.cursor = 'grab';
      } else {
          document.body.style.cursor = 'default';
      }
  }

  private setupInputs(): void {
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('mousedown', this.onMouseDown.bind(this));
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  private onMouseMove(event: MouseEvent): void {
    // Calculate mouse position in normalized device coordinates (-1 to +1)
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (!this.enabled) return;

    if (event.code === 'Space') {
        this.isSpaceDown = true;
        this.engine.getControls().enabled = true;
        this.updateVisuals();
        return;
    }

    if (event.key === 'Alt') {
      this.isAltDown = true;
    }

    // Number keys 0-5
    switch(event.key) {
      case '0': this.setCursorMode(); break;
      case '1': this.setBrush(VoxelType.SOLID); break;
      case '2': this.setBrush(VoxelType.PLATFORM); break;
      case '3': this.setBrush(VoxelType.SPAWN); break;
      case '4': this.setBrush(VoxelType.GOAL); break;
      case '5': this.setEraser(); break;
      case 'z':
        if (event.ctrlKey || event.metaKey) {
          this.levelManager.undo();
        }
        break;
      case 'p': case 'P': console.log(this.levelManager.serialize()); break; // Quick export
    }
  }

  private onKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Space') {
        this.isSpaceDown = false;
        if (this.enabled) {
            this.engine.getControls().enabled = false;
        }
        this.updateVisuals();
    }

    if (event.key === 'Alt') {
      this.isAltDown = false;
    }
  }

  public setCursorMode() {
    this.isCursorMode = true;
    this.isEraserMode = false;
    this.engine.getControls().enabled = true; // Enable OrbitControls in Cursor Mode
    this.updateGhostColor(); // Update highlight to match cursor mode (or hide it)
    this.updateVisuals();
    console.log("Cursor Mode Active");
  }

  public setBrush(type: VoxelType) {
    this.currentType = type;
    this.isEraserMode = false;
    this.isCursorMode = false;
    this.engine.getControls().enabled = false; // Disable OrbitControls in Brush Mode
    this.updateGhostColor();
    this.updateVisuals();
    console.log(`Brush set to: ${VoxelType[type]}`);
  }

  public setEraser() {
    this.isEraserMode = true;
    this.isCursorMode = false;
    this.engine.getControls().enabled = false; // Disable OrbitControls in Eraser Mode
    this.updateVisuals();
    console.log("Eraser Mode Active");
  }

  private updateGhostColor() {
    const material = this.ghostMesh.material as THREE.MeshBasicMaterial;
    if (this.isCursorMode) {
        material.color.setHex(0xaaaaaa); // Grey for Cursor/0
    } else {
        switch (this.currentType) {
          case VoxelType.SOLID: material.color.setHex(0x4caf50); break;
          case VoxelType.PLATFORM: material.color.setHex(0x2196f3); break;
          case VoxelType.SPAWN: material.color.setHex(0xffeb3b); break;
          case VoxelType.GOAL: material.color.setHex(0xf44336); break;
        }
    }
  }

  private onMouseDown(event: MouseEvent): void {
    if (!this.enabled) return;
    
    // Right Click for Undo
    if (event.button === 2) {
      this.levelManager.undo();
      return;
    }

    if (event.button !== 0) return; // Only left click for drawing
    if (this.isCursorMode) return; // Do nothing in cursor mode
    if (this.isSpaceDown) return; // Do nothing if rotating camera

    const intersect = this.getIntersection();
    const isDelete = this.isEraserMode || this.isAltDown;

    if (intersect) {
      if (isDelete) {
        // Delete the existing block we clicked on
        const p = intersect.object.position;
        this.levelManager.removeVoxel(p.x, p.y, p.z);
      } else {
        // Place new block adjacent to the face we clicked
        if (!intersect.face) return;
        
        const p = intersect.point.add(intersect.face.normal!.clone().multiplyScalar(0.5));
        const x = Math.floor(p.x);
        const y = Math.floor(p.y);
        const z = Math.floor(p.z);
        
        this.levelManager.addVoxel(x, y, z, this.currentType);
      }
    } else if (!isDelete) {
      // Try to place on ground plane if clicking empty space
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const target = new THREE.Vector3();
      const hit = this.raycaster.ray.intersectPlane(plane, target);
      
      if (hit) {
        this.levelManager.addVoxel(Math.round(target.x), 0, Math.round(target.z), this.currentType);
      }
    }
  }

  private getIntersection(): THREE.Intersection | null {
    this.raycaster.setFromCamera(this.mouse, this.engine.getCamera());
    const voxels = this.levelManager.getAllVoxels();
    const intersects = this.raycaster.intersectObjects(voxels, false);
    return intersects.length > 0 ? intersects[0] : null;
  }

  // Called every frame
  public update(): void {
    if (!this.enabled) return;
    
    // Update cursor logic for dragging if Space is held
    if (this.isSpaceDown) {
        return; // Skip raycasting updates
    }

    if (this.isCursorMode) {
      return;
    }

    // Use InputManager for mouse and keys
    const input = this.engine.getInputManager();
    const mousePos = input.getMousePosition();
    this.mouse.set(mousePos.x, mousePos.y);
    
    this.isAltDown = input.isKeyPressed('Alt');

    const intersect = this.getIntersection();
    const isDelete = this.isEraserMode || this.isAltDown;

    if (intersect && intersect.face) {
      if (isDelete) {
        // Highlight existing block
        this.ghostMesh.visible = false;
        this.highlightBox.visible = true;
        this.highlightBox.position.copy(intersect.object.position);
      } else {
        // Show ghost block adjacent
        this.ghostMesh.visible = true;
        this.highlightBox.visible = false;
        
        // Calculate grid position
        const p = intersect.point.clone().add(intersect.face.normal!.clone().multiplyScalar(0.5));
        this.ghostMesh.position.set(
          Math.floor(p.x),
          Math.floor(p.y),
          Math.floor(p.z)
        );
      }
    } else {
      this.handleGridIntersection(isDelete);
    }
  }

  private handleGridIntersection(isDelete: boolean) {
    if (isDelete) {
      this.ghostMesh.visible = false;
      this.highlightBox.visible = false;
      return;
    }

    // Raycast against an invisible Y=0 plane (or whatever plane we want)
    // For simplicity, let's create a temporary plane for raycasting if no voxels hit
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const target = new THREE.Vector3();
    const hit = this.raycaster.ray.intersectPlane(plane, target);

    if (hit) {
      this.ghostMesh.visible = true;
      this.highlightBox.visible = false;
      
      // Snap to grid
      this.ghostMesh.position.set(
        Math.round(target.x),
        0, // Force Y=0 for ground level
        Math.round(target.z)
      );
    } else {
      this.ghostMesh.visible = false;
    }
  }
}
