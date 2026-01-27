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
  }
};
