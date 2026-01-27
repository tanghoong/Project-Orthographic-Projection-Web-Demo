// Exported enum members are intentionally used as values throughout the codebase
export enum GameMode {
  EDIT,
  PLAY
}

// Exported enum members are intentionally used as values throughout the codebase
export enum ViewState {
  FRONT = 0, // -Z
  RIGHT = 1, // -X
  BACK = 2,  // +Z
  LEFT = 3   // +X
}

// Exported enum members are intentionally used as values throughout the codebase
export enum GameEventType {
  // Input Events
  INPUT_ROTATE = 'input_rotate',
  INPUT_MOVE = 'input_move',
  INPUT_ACTION = 'input_action', // Jump/Space
  
  // Game State Events
  GAME_MODE_CHANGED = 'game_mode_changed',
  SCORE_UPDATED = 'score_updated',
  GOAL_REACHED = 'goal_reached',
  CAMERA_ROTATED = 'camera_rotated',
  KEY_COLLECTED = 'key_collected',
  PLAYER_DIED = 'player_died',
  LEVEL_COMPLETE = 'level_complete',
  
  // Editor Events
  PRESET_LOADED = 'preset_loaded'
}
