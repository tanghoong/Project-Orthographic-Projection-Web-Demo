export class InputManager {
  private keys: Map<string, boolean> = new Map();
  private mouse: { x: number, y: number } = { x: 0, y: 0 };
  private mouseButtons: Map<number, boolean> = new Map();

  constructor() {
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('mousedown', this.onMouseDown.bind(this));
    window.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  private onKeyDown(event: KeyboardEvent): void {
    this.keys.set(event.code, true);
    this.keys.set(event.key, true); // Support both 'KeyA' and 'a'
  }

  private onKeyUp(event: KeyboardEvent): void {
    this.keys.set(event.code, false);
    this.keys.set(event.key, false);
  }

  private onMouseMove(event: MouseEvent): void {
    // Normalized Device Coordinates (-1 to +1)
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private onMouseDown(event: MouseEvent): void {
    this.mouseButtons.set(event.button, true);
  }

  private onMouseUp(event: MouseEvent): void {
    this.mouseButtons.set(event.button, false);
  }

  public isKeyPressed(key: string): boolean {
    return this.keys.get(key) || false;
  }

  public isMouseButtonPressed(button: number): boolean {
    return this.mouseButtons.get(button) || false;
  }

  public getMousePosition(): { x: number, y: number } {
    return this.mouse;
  }
}
