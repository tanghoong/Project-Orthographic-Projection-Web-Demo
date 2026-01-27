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
    this.controls.enabled = true; // Default enabled, but controlled by Game/Editor systems

    // Lights
    this.setupLights();

    // Helpers
    this.gridHelper = new THREE.GridHelper(CONSTANTS.GRID_SIZE, CONSTANTS.GRID_SIZE);
    this.scene.add(this.gridHelper);
    
    this.axesHelper = new THREE.AxesHelper(5);
    this.scene.add(this.axesHelper);

    // Resize Handler
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public setHelpersVisibility(visible: boolean): void {
    this.gridHelper.visible = visible;
    this.axesHelper.visible = visible;
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
}
