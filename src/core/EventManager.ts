type EventHandler = (data?: any) => void;

export class EventManager {
  private static instance: EventManager;
  private listeners: Map<string, EventHandler[]> = new Map();

  private constructor() {}

  public static getInstance(): EventManager {
    if (!EventManager.instance) {
      EventManager.instance = new EventManager();
    }
    return EventManager.instance;
  }

  public on(event: string, handler: EventHandler): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(handler);
  }

  public off(event: string, handler: EventHandler): void {
    if (!this.listeners.has(event)) return;
    
    const handlers = this.listeners.get(event)!;
    const index = handlers.indexOf(handler);
    if (index !== -1) {
      handlers.splice(index, 1);
    }
  }

  public emit(event: string, data?: any): void {
    if (!this.listeners.has(event)) return;
    
    const handlers = this.listeners.get(event)!;
    handlers.forEach(handler => {
      try {
        handler(data);
      } catch (e) {
        console.error(`Error in event handler for ${event}:`, e);
      }
    });
  }
}
