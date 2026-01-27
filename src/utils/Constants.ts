export const CONSTANTS = {
  GRID_SIZE: 20,
  VOXEL_SIZE: 1,
  WORLD: {
    WIDTH: 20,        // X axis: -10 to +10
    DEPTH: 20,        // Z axis: -10 to +10
    HEIGHT: 40,       // Y axis: 0 to 40 (ground at y=0)
    SEA_LEVEL: 0,     // Below this is water
    MIN_X: -10,
    MAX_X: 10,
    MIN_Z: -10,
    MAX_Z: 10,
    MIN_Y: 0,         // Ground level
    MAX_Y: 40         // Sky limit
  },
  CAMERA: {
    FRUSTUM_SIZE: 20,
    NEAR: 0.1,
    FAR: 1000,
    INITIAL_POSITION: { x: 20, y: 20, z: 20 },
    VIEW_PRESETS: {
      ISOMETRIC: { x: 20, y: 20, z: 20 },
      TOP: { x: 0, y: 40, z: 0 },
      FRONT: { x: 0, y: 10, z: 30 },
      SIDE: { x: 30, y: 10, z: 0 },
      CLOSE: { x: 10, y: 10, z: 10 }
    }
  },
  ANIMATION: {
    ROTATION_DURATION: 0.5
  },
  PHYSICS: {
    GRAVITY: 30,
    JUMP_FORCE: 12,
    MOVE_SPEED: 10,
    TERMINAL_VELOCITY: 20,
    JUMP_BUFFER_TIME: 0.1,     // 100ms jump input buffer
    COYOTE_TIME: 0.15           // 150ms grace period after leaving platform
  },
  OCCLUSION: {
    RAY_TOLERANCE: 0.2,
    FADE_OPACITY: 0.2
  },
  COLORS: {
    OCCLUSION_HIGHLIGHT: 0x555555,
    DEFAULT_EMISSIVE: 0x000000
  },
  EDITOR: {
    MAX_BUILD_HEIGHT: 39,           // Max height at y=39 (0-based, so 40 blocks total)
    MIN_BUILD_HEIGHT: 0,            // Ground level (sea below)
    DEFAULT_BUILD_HEIGHT: 0,
    GRID_PLANE_SIZE: 40,
    GRID_PLANE_OPACITY: 0.15,
    GHOST_VALID_COLOR: 0x4caf50,      // Green
    GHOST_INVALID_COLOR: 0xff5252,    // Red
    AUTO_SAVE_KEY: '__autosave__',    // LocalStorage key for auto-save
    AUTO_SAVE_ENABLED: true,          // Enable auto-save on mode switch
    SHOW_WATER_PLANE: true,           // Show water plane below y=0
    WATER_COLOR: 0x1e90ff             // Dodger blue for water
  }
};
