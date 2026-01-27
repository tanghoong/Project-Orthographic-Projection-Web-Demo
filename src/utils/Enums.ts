export enum GameMode {
  EDIT,
  PLAY
}

export enum ViewState {
  FRONT = 0, // -Z
  RIGHT = 1, // -X
  BACK = 2,  // +Z
  LEFT = 3   // +X
}

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
  
  // Editor Events
  PRESET_LOADED = 'preset_loaded'
}
