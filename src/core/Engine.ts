import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CONSTANTS } from '../utils/Constants';
import { InputManager } from './InputManager';

export class Engine {
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private animationId: number | null = null;
  private updateCallbacks: ((dt: number) => void)[] = [];
  private clock: THREE.Clock;
  private inputManager: InputManager;
  private gridHelper: THREE.GridHelper;
  private axesHelper: THREE.AxesHelper;
  private waterPlane: THREE.Mesh | null = null;
  private boundaryBox: THREE.LineSegments | null = null;

  constructor(containerId: string) {
    // Input Manager
    this.inputManager = new InputManager();
    this.clock = new THREE.Clock();

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x222222);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(this.renderer.domElement);
    } else {
      console.error(`Container with id ${containerId} not found`);
    }

    // Camera (Orthographic)
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = CONSTANTS.CAMERA.FRUSTUM_SIZE;
    
    this.camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      CONSTANTS.CAMERA.NEAR,
      CONSTANTS.CAMERA.FAR
    );
    
    // Set Isometric view
    this.camera.position.set(
      CONSTANTS.CAMERA.INITIAL_POSITION.x, 
      CONSTANTS.CAMERA.INITIAL_POSITION.y, 
      CONSTANTS.CAMERA.INITIAL_POSITION.z
    );
    this.camera.lookAt(0, 0, 0);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minZoom = 0.5;
    this.controls.maxZoom = 3;
    this.controls.enabled = true; // Default enabled, but controlled by Game/Editor systems

    // Lights
    this.setupLights();

    // Helpers
    this.gridHelper = new THREE.GridHelper(CONSTANTS.GRID_SIZE, CONSTANTS.GRID_SIZE);
    this.scene.add(this.gridHelper);
    
    this.axesHelper = new THREE.AxesHelper(5);
    this.scene.add(this.axesHelper);
    
    // Add water plane below ground level (sea)
    this.createWaterPlane();
    
    // Add world boundary box
    this.createBoundaryBox();

    // Resize Handler
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public setHelpersVisibility(visible: boolean): void {
    this.gridHelper.visible = visible;
    this.axesHelper.visible = visible;
    if (this.waterPlane) this.waterPlane.visible = visible;
    if (this.boundaryBox) this.boundaryBox.visible = visible;
  }
  
  private createWaterPlane(): void {
    // Create water plane at y = -0.5 (just below ground level)
    const geometry = new THREE.PlaneGeometry(
      CONSTANTS.WORLD.WIDTH,
      CONSTANTS.WORLD.DEPTH
    );
    const material = new THREE.MeshStandardMaterial({
      color: CONSTANTS.EDITOR.WATER_COLOR,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    
    this.waterPlane = new THREE.Mesh(geometry, material);
    this.waterPlane.rotation.x = -Math.PI / 2; // Rotate to horizontal
    this.waterPlane.position.y = -0.5; // Just below ground level
    this.waterPlane.receiveShadow = true;
    this.scene.add(this.waterPlane);
  }
  
  private createBoundaryBox(): void {
    // Create wireframe box showing world boundaries
    const geometry = new THREE.BoxGeometry(
      CONSTANTS.WORLD.WIDTH,
      CONSTANTS.WORLD.HEIGHT,
      CONSTANTS.WORLD.DEPTH
    );
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ 
      color: 0x888888,
      transparent: true,
      opacity: 0.3
    });
    
    this.boundaryBox = new THREE.LineSegments(edges, material);
    // Position box so bottom is at y=0, centered at origin
    this.boundaryBox.position.y = CONSTANTS.WORLD.HEIGHT / 2;
    this.scene.add(this.boundaryBox);
  }

  private setupLights(): void {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    // Optimize shadow map
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    this.scene.add(dirLight);
  }

  private onWindowResize(): void {
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = CONSTANTS.CAMERA.FRUSTUM_SIZE;

    this.camera.left = -frustumSize * aspect / 2;
    this.camera.right = frustumSize * aspect / 2;
    this.camera.top = frustumSize / 2;
    this.camera.bottom = -frustumSize / 2;

    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public start(): void {
    if (!this.animationId) {
      this.loop();
    }
  }

  public onUpdate(callback: (dt: number) => void): void {
    this.updateCallbacks.push(callback);
  }

  private loop(): void {
    this.animationId = requestAnimationFrame(this.loop.bind(this));
    
    const dt = this.clock.getDelta();

    this.updateCallbacks.forEach(cb => cb(dt));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  public getScene(): THREE.Scene {
    return this.scene;
  }

  public getCamera(): THREE.OrthographicCamera {
    return this.camera;
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  public getControls(): OrbitControls {
    return this.controls;
  }

  public getInputManager(): InputManager {
    return this.inputManager;
  }
  
  // Camera View Presets
  public setCameraView(view: 'isometric' | 'top' | 'front' | 'side' | 'close'): void {
    let targetPos: { x: number, y: number, z: number };
    
    switch (view) {
      case 'isometric':
        targetPos = CONSTANTS.CAMERA.VIEW_PRESETS.ISOMETRIC;
        break;
      case 'top':
        targetPos = CONSTANTS.CAMERA.VIEW_PRESETS.TOP;
        break;
      case 'front':
        targetPos = CONSTANTS.CAMERA.VIEW_PRESETS.FRONT;
        break;
      case 'side':
        targetPos = CONSTANTS.CAMERA.VIEW_PRESETS.SIDE;
        break;
      case 'close':
        targetPos = CONSTANTS.CAMERA.VIEW_PRESETS.CLOSE;
        break;
      default:
        targetPos = CONSTANTS.CAMERA.INITIAL_POSITION;
    }
    
    this.camera.position.set(targetPos.x, targetPos.y, targetPos.z);
    this.camera.lookAt(0, 0, 0);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }
  
  public resetCamera(): void {
    this.setCameraView('isometric');
    this.camera.zoom = 1;
    this.camera.updateProjectionMatrix();
  }
}
