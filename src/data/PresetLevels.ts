import { VoxelType } from '../entities/Voxel';

export interface PresetLevel {
  name: string;
  description: string;
  blocks: [number, number, number, number][]; // [x, y, z, type]
}

export const PRESET_LEVELS: Record<string, PresetLevel> = {
  crossroads: {
    name: "The Crossroads",
    description: "A balanced symmetrical arena with a central high ground.",
    blocks: [
      // Ground 5x5
      [-2, 0, -2, VoxelType.SOLID], [-1, 0, -2, VoxelType.SOLID], [0, 0, -2, VoxelType.SOLID], [1, 0, -2, VoxelType.SOLID], [2, 0, -2, VoxelType.SOLID],
      [-2, 0, -1, VoxelType.SOLID], [-1, 0, -1, VoxelType.SOLID], [0, 0, -1, VoxelType.SOLID], [1, 0, -1, VoxelType.SOLID], [2, 0, -1, VoxelType.SOLID],
      [-2, 0, 0, VoxelType.SOLID], [-1, 0, 0, VoxelType.SOLID], [0, 0, 0, VoxelType.SOLID], [1, 0, 0, VoxelType.SOLID], [2, 0, 0, VoxelType.SOLID],
      [-2, 0, 1, VoxelType.SOLID], [-1, 0, 1, VoxelType.SOLID], [0, 0, 1, VoxelType.SOLID], [1, 0, 1, VoxelType.SOLID], [2, 0, 1, VoxelType.SOLID],
      [-2, 0, 2, VoxelType.SOLID], [-1, 0, 2, VoxelType.SOLID], [0, 0, 2, VoxelType.SOLID], [1, 0, 2, VoxelType.SOLID], [2, 0, 2, VoxelType.SOLID],
      // Center Tower (The Goal)
      [0, 1, 0, VoxelType.SOLID], [0, 2, 0, VoxelType.SOLID], [0, 3, 0, VoxelType.GOAL],
      // Spawns in corners
      [-2, 1, -2, VoxelType.SPAWN], [2, 1, -2, VoxelType.SPAWN], [-2, 1, 2, VoxelType.SPAWN], [2, 1, 2, VoxelType.SPAWN],
      // Strategic Blocks
      [-1, 1, 0, VoxelType.PLATFORM], [1, 1, 0, VoxelType.PLATFORM], [0, 1, -1, VoxelType.PLATFORM], [0, 1, 1, VoxelType.PLATFORM]
    ]
  },
  tower: {
    name: "Tower Ascent",
    description: "A vertical platforming challenge focusing on precise jumps.",
    blocks: [
      // Base
      [0, 0, 0, VoxelType.SOLID], [1, 0, 0, VoxelType.SOLID], [0, 0, 1, VoxelType.SOLID], [1, 0, 1, VoxelType.SOLID],
      [0, 1, 0, VoxelType.SPAWN],
      // Staircase
      [2, 1, 0, VoxelType.PLATFORM], [2, 2, 2, VoxelType.PLATFORM], [0, 3, 2, VoxelType.PLATFORM], [-2, 4, 2, VoxelType.PLATFORM],
      [-2, 5, 0, VoxelType.PLATFORM], [-2, 6, -2, VoxelType.PLATFORM], [0, 7, -2, VoxelType.PLATFORM],
      // Top Goal
      [0, 8, 0, VoxelType.SOLID], [0, 9, 0, VoxelType.GOAL]
    ]
  },
  forts: {
    name: "Dual Forts",
    description: "Two islands connected by a narrow bridge. Tactical positioning is key.",
    blocks: [
      // Island A
      [-4, 0, -1, VoxelType.SOLID], [-3, 0, -1, VoxelType.SOLID], [-2, 0, -1, VoxelType.SOLID],
      [-4, 0, 0, VoxelType.SOLID], [-3, 0, 0, VoxelType.SOLID], [-2, 0, 0, VoxelType.SOLID],
      [-4, 0, 1, VoxelType.SOLID], [-3, 0, 1, VoxelType.SOLID], [-2, 0, 1, VoxelType.SOLID],
      [-3, 1, 0, VoxelType.SPAWN],
      // Island B
      [4, 0, -1, VoxelType.SOLID], [3, 0, -1, VoxelType.SOLID], [2, 0, -1, VoxelType.SOLID],
      [4, 0, 0, VoxelType.SOLID], [3, 0, 0, VoxelType.SOLID], [2, 0, 0, VoxelType.SOLID],
      [4, 0, 1, VoxelType.SOLID], [3, 0, 1, VoxelType.SOLID], [2, 0, 1, VoxelType.SOLID],
      [3, 1, 0, VoxelType.SPAWN],
      // Bridge
      [-1, 0, 0, VoxelType.PLATFORM], [0, 0, 0, VoxelType.PLATFORM], [1, 0, 0, VoxelType.PLATFORM],
      // Goal on bridge
      [0, 1, 0, VoxelType.GOAL]
    ]
  },
  
  // MVP Validation Tests
  infiniteLoop: {
    name: "MVP Test: Infinite Loop",
    description: "Test endless circular movement via rotation without falling.",
    blocks: [
      // Create a hollow square path
      // North side
      [-1, 0, -3, VoxelType.SOLID], [0, 0, -3, VoxelType.SOLID], [1, 0, -3, VoxelType.SOLID],
      // East side
      [3, 0, -1, VoxelType.SOLID], [3, 0, 0, VoxelType.SOLID], [3, 0, 1, VoxelType.SOLID],
      // South side
      [1, 0, 3, VoxelType.SOLID], [0, 0, 3, VoxelType.SOLID], [-1, 0, 3, VoxelType.SOLID],
      // West side
      [-3, 0, 1, VoxelType.SOLID], [-3, 0, 0, VoxelType.SOLID], [-3, 0, -1, VoxelType.SOLID],
      
      // Spawn at North
      [0, 1, -3, VoxelType.SPAWN],
      // Goal at center to reach after circling
      [0, 1, 0, VoxelType.GOAL]
    ]
  },
  
  brokenBridge: {
    name: "MVP Test: Broken Bridge",
    description: "Platforms separated in depth that connect when rotated.",
    blocks: [
      // Platform A (Start) - at Z = -5
      [-1, 0, -5, VoxelType.SOLID], [0, 0, -5, VoxelType.SOLID], [1, 0, -5, VoxelType.SOLID],
      [0, 1, -5, VoxelType.SPAWN],
      
      // Platform B (Disconnected in 3D) - at Z = 5 (far away)
      // When viewed from FRONT/BACK, they are aligned vertically but far on Z
      // When rotated to LEFT/RIGHT view, Z becomes horizontal
      [-1, 0, 5, VoxelType.SOLID], [0, 0, 5, VoxelType.SOLID], [1, 0, 5, VoxelType.SOLID],
      [0, 1, 5, VoxelType.GOAL],
      
      // Hint platforms to guide player
      [0, 0, -2, VoxelType.PLATFORM],
      [0, 0, 2, VoxelType.PLATFORM]
    ]
  },
  
  noClipping: {
    name: "MVP Test: No Clipping",
    description: "Enclosed space to verify wall collision works from all angles.",
    blocks: [
      // Floor 5x5
      [-2, 0, -2, VoxelType.SOLID], [-1, 0, -2, VoxelType.SOLID], [0, 0, -2, VoxelType.SOLID], [1, 0, -2, VoxelType.SOLID], [2, 0, -2, VoxelType.SOLID],
      [-2, 0, -1, VoxelType.SOLID], [-1, 0, -1, VoxelType.SOLID], [0, 0, -1, VoxelType.SOLID], [1, 0, -1, VoxelType.SOLID], [2, 0, -1, VoxelType.SOLID],
      [-2, 0, 0, VoxelType.SOLID], [-1, 0, 0, VoxelType.SOLID], [0, 0, 0, VoxelType.SOLID], [1, 0, 0, VoxelType.SOLID], [2, 0, 0, VoxelType.SOLID],
      [-2, 0, 1, VoxelType.SOLID], [-1, 0, 1, VoxelType.SOLID], [0, 0, 1, VoxelType.SOLID], [1, 0, 1, VoxelType.SOLID], [2, 0, 1, VoxelType.SOLID],
      [-2, 0, 2, VoxelType.SOLID], [-1, 0, 2, VoxelType.SOLID], [0, 0, 2, VoxelType.SOLID], [1, 0, 2, VoxelType.SOLID], [2, 0, 2, VoxelType.SOLID],
      
      // Walls - North (Z = -2)
      [-2, 1, -2, VoxelType.SOLID], [-1, 1, -2, VoxelType.SOLID], [0, 1, -2, VoxelType.SOLID], [1, 1, -2, VoxelType.SOLID], [2, 1, -2, VoxelType.SOLID],
      [-2, 2, -2, VoxelType.SOLID], [-1, 2, -2, VoxelType.SOLID], [0, 2, -2, VoxelType.SOLID], [1, 2, -2, VoxelType.SOLID], [2, 2, -2, VoxelType.SOLID],
      
      // Walls - South (Z = 2)
      [-2, 1, 2, VoxelType.SOLID], [-1, 1, 2, VoxelType.SOLID], [0, 1, 2, VoxelType.SOLID], [1, 1, 2, VoxelType.SOLID], [2, 1, 2, VoxelType.SOLID],
      [-2, 2, 2, VoxelType.SOLID], [-1, 2, 2, VoxelType.SOLID], [0, 2, 2, VoxelType.SOLID], [1, 2, 2, VoxelType.SOLID], [2, 2, 2, VoxelType.SOLID],
      
      // Walls - West (X = -2)
      [-2, 1, -1, VoxelType.SOLID], [-2, 1, 0, VoxelType.SOLID], [-2, 1, 1, VoxelType.SOLID],
      [-2, 2, -1, VoxelType.SOLID], [-2, 2, 0, VoxelType.SOLID], [-2, 2, 1, VoxelType.SOLID],
      
      // Walls - East (X = 2)
      [2, 1, -1, VoxelType.SOLID], [2, 1, 0, VoxelType.SOLID], [2, 1, 1, VoxelType.SOLID],
      [2, 2, -1, VoxelType.SOLID], [2, 2, 0, VoxelType.SOLID], [2, 2, 1, VoxelType.SOLID],
      
      // Spawn in center
      [0, 1, 0, VoxelType.SPAWN],
      
      // Goal at corner to force player to move around
      [1, 1, 1, VoxelType.GOAL]
    ]
  },
  
  // Tutorial/Demo Levels with New Mechanics
  keyHunt: {
    name: "Key Hunt",
    description: "Collect the key to unlock the door.",
    blocks: [
      // Starting platform
      [-2, 0, 0, VoxelType.SOLID], [-1, 0, 0, VoxelType.SOLID], [0, 0, 0, VoxelType.SOLID],
      [0, 1, 0, VoxelType.SPAWN],
      
      // Key on a platform
      [4, 2, 0, VoxelType.SOLID],
      [4, 3, 0, VoxelType.KEY],
      
      // Steps to key
      [1, 1, 0, VoxelType.SOLID],
      [2, 1, 0, VoxelType.SOLID],
      [3, 2, 0, VoxelType.SOLID],
      
      // Door blocking goal
      [7, 0, 0, VoxelType.SOLID], [8, 0, 0, VoxelType.SOLID],
      [7, 1, 0, VoxelType.DOOR],
      [8, 1, 0, VoxelType.GOAL]
    ]
  },
  
  ladderClimb: {
    name: "Ladder Climb",
    description: "Use W/S to climb the ladder.",
    blocks: [
      // Ground
      [0, 0, 0, VoxelType.SOLID], [1, 0, 0, VoxelType.SOLID],
      [0, 1, 0, VoxelType.SPAWN],
      
      // Ladder tower
      [3, 0, 0, VoxelType.SOLID],
      [3, 1, 0, VoxelType.LADDER],
      [3, 2, 0, VoxelType.LADDER],
      [3, 3, 0, VoxelType.LADDER],
      [3, 4, 0, VoxelType.LADDER],
      
      // Platform at top
      [3, 5, 0, VoxelType.SOLID], [4, 5, 0, VoxelType.SOLID], [5, 5, 0, VoxelType.SOLID],
      [4, 6, 0, VoxelType.GOAL]
    ]
  },
  
  trapRun: {
    name: "Trap Run",
    description: "Avoid the traps or respawn from last safe position!",
    blocks: [
      // Safe start
      [0, 0, 0, VoxelType.SOLID], [1, 0, 0, VoxelType.SOLID],
      [0, 1, 0, VoxelType.SPAWN],
      
      // Path with traps
      [2, 0, 0, VoxelType.TRAP],
      [3, 0, 0, VoxelType.SOLID],
      [4, 0, 0, VoxelType.TRAP],
      [5, 0, 0, VoxelType.SOLID],
      [6, 0, 0, VoxelType.TRAP],
      
      // Safe platform to jump to (use rotation to align)
      [7, 0, 2, VoxelType.SOLID], [8, 0, 2, VoxelType.SOLID],
      
      // Goal
      [8, 1, 2, VoxelType.GOAL]
    ]
  }
};
