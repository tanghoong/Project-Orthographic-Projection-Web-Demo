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
  
  // Grid Plane & Build Height System
  private buildHeight: number = CONSTANTS.EDITOR.DEFAULT_BUILD_HEIGHT;
  private gridPlane: THREE.GridHelper;
  private gridPlaneMesh: THREE.Mesh;
  private showGridPlane: boolean = true;
  private smartSnapEnabled: boolean = true;
  
  // Mouse Drag & Continuous Placement (Minecraft-style)
  private isMouseDown: boolean = false;
  private isDragging: boolean = false;
  private lastPlacedPosition: THREE.Vector3 | null = null;
  private placedBlocksThisDrag: Set<string> = new Set();
  
  // UI Callback
  public onBuildHeightChanged: ((height: number) => void) | null = null;
  public onBrushChanged: ((type: number) => void) | null = null;

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
    
    // Setup Grid Plane System
    this.setupGridPlane();

    this.setupInputs();
    
    // Default to Cursor Mode: Enable OrbitControls
    this.engine.getControls().enabled = true;
  }
  
  private setupGridPlane(): void {
    // Create grid helper at Y=0
    const size = CONSTANTS.EDITOR.GRID_PLANE_SIZE;
    this.gridPlane = new THREE.GridHelper(size, size, 0x888888, 0x444444);
    this.gridPlane.position.y = this.buildHeight;
    this.engine.getScene().add(this.gridPlane);
    
    // Create semi-transparent plane for better visibility
    const planeGeometry = new THREE.PlaneGeometry(size, size);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: CONSTANTS.EDITOR.GRID_PLANE_OPACITY,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.gridPlaneMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    this.gridPlaneMesh.rotation.x = Math.PI / 2;
    this.gridPlaneMesh.position.y = this.buildHeight;
    this.engine.getScene().add(this.gridPlaneMesh);
    
    this.updateGridPlaneVisibility();
  }
  
  private updateGridPlane(): void {
    this.gridPlane.position.y = this.buildHeight;
    this.gridPlaneMesh.position.y = this.buildHeight;
    
    // Adjust opacity based on height (higher = more visible)
    const baseOpacity = CONSTANTS.EDITOR.GRID_PLANE_OPACITY;
    const heightFactor = Math.min(1, this.buildHeight / 10);
    const opacity = baseOpacity + (heightFactor * 0.1);
    (this.gridPlaneMesh.material as THREE.MeshBasicMaterial).opacity = opacity;
    
    // Notify UI
    if (this.onBuildHeightChanged) {
      this.onBuildHeightChanged(this.buildHeight);
    }
  }
  
  private updateGridPlaneVisibility(): void {
    const visible = this.enabled && !this.isCursorMode && this.showGridPlane;
    this.gridPlane.visible = visible;
    this.gridPlaneMesh.visible = visible;
  }
  
  public setBuildHeight(height: number): void {
    this.buildHeight = Math.max(
      CONSTANTS.EDITOR.MIN_BUILD_HEIGHT,
      Math.min(CONSTANTS.EDITOR.MAX_BUILD_HEIGHT, height)
    );
    this.updateGridPlane();
  }
  
  public getBuildHeight(): number {
    return this.buildHeight;
  }
  
  public toggleGridPlane(): void {
    this.showGridPlane = !this.showGridPlane;
    this.updateGridPlaneVisibility();
  }
  
  public toggleSmartSnap(): void {
    this.smartSnapEnabled = !this.smartSnapEnabled;
  }

  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    this.updateVisuals();
    this.updateGridPlaneVisibility();
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
    window.addEventListener('mouseup', this.onMouseUp.bind(this));
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
    window.addEventListener('contextmenu', (e) => e.preventDefault()); // Disable right-click menu
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

    // Build Height Controls
    if (event.key === 'PageUp') {
      this.setBuildHeight(this.buildHeight + 1);
      event.preventDefault();
      return;
    }
    if (event.key === 'PageDown') {
      this.setBuildHeight(this.buildHeight - 1);
      event.preventDefault();
      return;
    }
    
    // Number keys for brush selection and quick height (with Shift modifier)
    if (event.shiftKey && event.key >= '0' && event.key <= '9') {
      // Shift + Number: Set build height
      this.setBuildHeight(parseInt(event.key));
      return;
    }
    
    // Number keys 1-9 and 0 for brush selection
    switch(event.key) {
      case '1': this.setCursorMode(); break;                // Cross cursor
      case '2': this.setBrush(VoxelType.SOLID); break;      // Ground block
      case '3': this.setBrush(VoxelType.PLATFORM); break;   // Cloud block
      case '4': this.setBrush(VoxelType.LADDER); break;     // Ladder
      case '5': this.setBrush(VoxelType.TRAP); break;       // Boom trap
      case '6': this.setBrush(VoxelType.KEY); break;        // Floating key
      case '7': this.setBrush(VoxelType.DOOR); break;       // Exit door
      case '8': this.setBrush(VoxelType.SPAWN); break;      // Start point
      case '9': this.setBrush(VoxelType.GOAL); break;       // End point
      case '0': this.setEraser(); break;                    // Eraser
      case 'z':
        if (event.ctrlKey || event.metaKey) {
          this.levelManager.undo();
        }
        break;
      case 'g': case 'G': this.toggleGridPlane(); break; // Toggle grid
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
    this.resetDragState();
    this.engine.getControls().enabled = true; // Enable OrbitControls in Cursor Mode
    this.updateGhostColor();
    this.updateVisuals();
    this.updateGridPlaneVisibility();
    if (this.onBrushChanged) {
      this.onBrushChanged(1); // Cursor mode uses type 1 for UI sync
    }
    console.log("Cursor Mode Active");
  }

  public setBrush(type: VoxelType) {
    this.currentType = type;
    this.isEraserMode = false;
    this.isCursorMode = false;
    this.resetDragState();
    this.engine.getControls().enabled = false; // Disable OrbitControls in Brush Mode
    this.updateGhostColor();
    this.updateVisuals();
    this.updateGridPlaneVisibility();
    if (this.onBrushChanged) {
      this.onBrushChanged(type);
    }
    console.log(`Brush set to: ${VoxelType[type]}`);
  }

  public setEraser() {
    this.isEraserMode = true;
    this.isCursorMode = false;
    this.resetDragState();
    this.engine.getControls().enabled = false; // Disable OrbitControls in Eraser Mode
    this.updateVisuals();
    this.updateGridPlaneVisibility();
    if (this.onBrushChanged) {
      this.onBrushChanged(0); // Eraser uses type 0 for UI sync
    }
    console.log("Eraser Mode Active");
  }
  
  private resetDragState(): void {
    this.isMouseDown = false;
    this.isDragging = false;
    this.placedBlocksThisDrag.clear();
    this.lastPlacedPosition = null;
  }
  
  public resetEditorState(): void {
    this.resetDragState();
    this.setCursorMode(); // Reset to cursor mode
  }

  private updateGhostColor() {
    const material = this.ghostMesh.material as THREE.MeshBasicMaterial;
    if (this.isCursorMode) {
        material.color.setHex(0xaaaaaa); // Grey for Cursor
    } else {
        switch (this.currentType) {
          case VoxelType.SOLID: material.color.setHex(0x8b4513); break;      // Brown - Ground
          case VoxelType.PLATFORM: material.color.setHex(0xe0f7fa); break;   // Light cyan - Cloud
          case VoxelType.LADDER: material.color.setHex(0xd2691e); break;     // Orange - Ladder
          case VoxelType.TRAP: material.color.setHex(0xff0000); break;       // Red - Trap
          case VoxelType.KEY: material.color.setHex(0xffd700); break;        // Gold - Key
          case VoxelType.DOOR: material.color.setHex(0x00ff00); break;       // Green - Door
          case VoxelType.SPAWN: material.color.setHex(0xffeb3b); break;      // Yellow - Start
          case VoxelType.GOAL: material.color.setHex(0x9c27b0); break;       // Purple - End
          default: material.color.setHex(0xaaaaaa); break;
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
    
    // Start continuous placement mode
    this.isMouseDown = true;
    this.isDragging = false;
    this.placedBlocksThisDrag.clear();
    this.lastPlacedPosition = null;
    
    // Place first block immediately
    this.placeOrRemoveBlock();
  }
  
  private onMouseUp(event: MouseEvent): void {
    if (event.button === 0) {
      this.isMouseDown = false;
      this.isDragging = false;
      this.placedBlocksThisDrag.clear();
      this.lastPlacedPosition = null;
    }
  }
  
  private placeOrRemoveBlock(): void {
    const intersect = this.getIntersection();
    const isDelete = this.isEraserMode || this.isAltDown;

    if (intersect) {
      if (isDelete) {
        // Delete the existing block we clicked on (only at current build height)
        // Get accurate position from instanced mesh
        const mesh = intersect.object as THREE.InstancedMesh;
        if (mesh.isInstancedMesh && intersect.instanceId !== undefined) {
          const matrix = new THREE.Matrix4();
          mesh.getMatrixAt(intersect.instanceId, matrix);
          const p = new THREE.Vector3().setFromMatrixPosition(matrix);
          const roundedY = Math.round(p.y);
          
          // Only delete blocks at the current build height layer
          if (roundedY === this.buildHeight) {
            const posKey = `${Math.round(p.x)},${roundedY},${Math.round(p.z)}`;
            
            // Check if already deleted in this drag
            if (!this.placedBlocksThisDrag.has(posKey)) {
              this.levelManager.removeVoxel(Math.round(p.x), Math.round(p.y), Math.round(p.z));
              this.placedBlocksThisDrag.add(posKey);
              this.lastPlacedPosition = new THREE.Vector3(Math.round(p.x), roundedY, Math.round(p.z));
            }
          }
        }
      } else {
        // Place new block at current build height layer only
        if (!intersect.face) return;
        
        // Always use current build height (ignore smart snapping for layer control)
        const p = intersect.point;
        const x = Math.round(p.x);
        const y = this.buildHeight;
        const z = Math.round(p.z);
        
        // Enforce world boundaries
        if (!this.isWithinWorldBounds(x, y, z)) return;
        
        const posKey = `${x},${y},${z}`;
        
        // Check if already placed in this drag
        if (!this.placedBlocksThisDrag.has(posKey)) {
          this.levelManager.addVoxel(x, y, z, this.currentType);
          this.placedBlocksThisDrag.add(posKey);
          this.lastPlacedPosition = new THREE.Vector3(x, y, z);
          this.isDragging = true;
        }
      }
    } else if (!isDelete) {
      // Place on grid plane at current build height when clicking empty space
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -this.buildHeight);
      const target = new THREE.Vector3();
      const hit = this.raycaster.ray.intersectPlane(plane, target);
      
      if (hit) {
        const x = Math.round(target.x);
        const y = this.buildHeight;
        const z = Math.round(target.z);
        
        // Enforce world boundaries
        if (!this.isWithinWorldBounds(x, y, z)) return;
        
        const posKey = `${x},${y},${z}`;
        
        // Check if already placed in this drag
        if (!this.placedBlocksThisDrag.has(posKey)) {
          this.levelManager.addVoxel(x, y, z, this.currentType);
          this.placedBlocksThisDrag.add(posKey);
          this.lastPlacedPosition = new THREE.Vector3(x, y, z);
          this.isDragging = true;
        }
      }
    }
  }

  private getIntersection(): THREE.Intersection | null {
    this.raycaster.setFromCamera(this.mouse, this.engine.getCamera());
    const meshes = this.levelManager.getMeshes();
    const intersects = this.raycaster.intersectObjects(meshes, false);
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
    
    // Continuous placement while mouse is held down (Minecraft-style)
    if (this.isMouseDown && !this.isSpaceDown) {
      this.placeOrRemoveBlock();
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
        // Only highlight blocks at current build height layer
        const mesh = intersect.object as THREE.InstancedMesh;
        if (mesh.isInstancedMesh && intersect.instanceId !== undefined) {
          const matrix = new THREE.Matrix4();
          mesh.getMatrixAt(intersect.instanceId, matrix);
          const p = new THREE.Vector3().setFromMatrixPosition(matrix);
          
          // Only show highlight if block is at current build height
          if (Math.round(p.y) === this.buildHeight) {
            this.ghostMesh.visible = false;
            this.highlightBox.visible = true;
            this.highlightBox.position.copy(p);
          } else {
            // Block is on different layer, hide highlight
            this.ghostMesh.visible = false;
            this.highlightBox.visible = false;
          }
        } else {
          this.ghostMesh.visible = false;
          this.highlightBox.visible = false;
        }
      } else {
        // Always show ghost block at current build height layer
        this.ghostMesh.visible = true;
        this.highlightBox.visible = false;
        
        // Always use current build height (ignore smart snapping)
        const p = intersect.point.clone();
        const ghostPos = new THREE.Vector3(
          Math.round(p.x),
          this.buildHeight,
          Math.round(p.z)
        );
        
        this.ghostMesh.position.copy(ghostPos);
        
        // Validate placement (check if position is already occupied)
        const isValid = this.isPositionValid(ghostPos);
        this.updateGhostValidation(isValid);
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

    // Raycast against plane at current build height
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -this.buildHeight);
    const target = new THREE.Vector3();
    const hit = this.raycaster.ray.intersectPlane(plane, target);

    if (hit) {
      this.ghostMesh.visible = true;
      this.highlightBox.visible = false;
      
      // Snap to grid at current build height
      const ghostPos = new THREE.Vector3(
        Math.round(target.x),
        this.buildHeight,
        Math.round(target.z)
      );
      this.ghostMesh.position.copy(ghostPos);
      
      // Validate placement
      const isValid = this.isPositionValid(ghostPos);
      this.updateGhostValidation(isValid);
    } else {
      this.ghostMesh.visible = false;
    }
  }
  
  private isWithinWorldBounds(x: number, y: number, z: number): boolean {
    return x >= CONSTANTS.WORLD.MIN_X && x <= CONSTANTS.WORLD.MAX_X &&
           y >= CONSTANTS.WORLD.MIN_Y && y <= CONSTANTS.WORLD.MAX_Y &&
           z >= CONSTANTS.WORLD.MIN_Z && z <= CONSTANTS.WORLD.MAX_Z;
  }
  
  private isPositionValid(pos: THREE.Vector3): boolean {
    // Check world boundaries first
    if (!this.isWithinWorldBounds(pos.x, pos.y, pos.z)) {
      return false;
    }
    
    // Check if position is already occupied
    const voxels = this.levelManager.getAllVoxels();
    for (const voxel of voxels) {
      const vPos = voxel.position;
      if (Math.abs(vPos.x - pos.x) < 0.1 &&
          Math.abs(vPos.y - pos.y) < 0.1 &&
          Math.abs(vPos.z - pos.z) < 0.1) {
        return false; // Position occupied
      }
    }
    return true; // Position valid
  }
  
  private updateGhostValidation(isValid: boolean): void {
    const material = this.ghostMesh.material as THREE.MeshBasicMaterial;
    if (isValid) {
      material.color.setHex(CONSTANTS.EDITOR.GHOST_VALID_COLOR);
    } else {
      material.color.setHex(CONSTANTS.EDITOR.GHOST_INVALID_COLOR);
    }
  }
}
