import { VoxelType } from '../entities/Voxel';

export interface GeneratorConfig {
  difficulty: 'easy' | 'medium' | 'hard';
  minPlatforms: number;
  maxPlatforms: number;
  includeKeys: boolean;
  includeLadders: boolean;
  includeTraps: boolean;
  seed?: number;
}

export interface GeneratedLevel {
  name: string;
  description: string;
  blocks: [number, number, number, number][];
  difficulty: string;
  estimatedRotations: number;
}

export class ProceduralGenerator {
  private rng: () => number;
  
  constructor(seed?: number) {
    // Simple seeded random number generator (Linear Congruential Generator)
    let state = seed || Math.floor(Math.random() * 1000000);
    this.rng = () => {
      state = (state * 1664525 + 1013904223) % 4294967296;
      return state / 4294967296;
    };
  }

  public generateLevel(config: GeneratorConfig): GeneratedLevel {
    const blocks: [number, number, number, number][] = [];
    const platformCount = Math.floor(
      config.minPlatforms + this.rng() * (config.maxPlatforms - config.minPlatforms)
    );
    
    // Track used positions
    const usedPositions = new Set<string>();
    const addBlock = (x: number, y: number, z: number, type: VoxelType): void => {
      const key = `${x},${y},${z}`;
      if (!usedPositions.has(key)) {
        blocks.push([x, y, z, type]);
        usedPositions.add(key);
      }
    };
    
    // 1. Create spawn platform
    const spawnX = 0;
    const spawnY = 0;
    const spawnZ = 0;
    
    // Make spawn platform 2x2
    for (let x = spawnX - 1; x <= spawnX; x++) {
      for (let z = spawnZ - 1; z <= spawnZ; z++) {
        addBlock(x, spawnY, z, VoxelType.SOLID);
      }
    }
    addBlock(spawnX, spawnY + 1, spawnZ, VoxelType.SPAWN);
    
    // 2. Generate platforming path using random walk
    let currentX = spawnX + 2;
    let currentY = spawnY;
    let currentZ = spawnZ;
    let rotationsRequired = 0;
    
    const platforms: { x: number; y: number; z: number }[] = [];
    
    for (let i = 0; i < platformCount; i++) {
      // Random walk direction
      const direction = Math.floor(this.rng() * 4); // 0=North, 1=East, 2=South, 3=West
      const distance = 2 + Math.floor(this.rng() * 3); // 2-4 blocks apart
      
      // Determine if we need vertical movement
      const verticalChange = this.rng() < 0.3 ? (this.rng() < 0.5 ? 1 : -1) : 0;
      
      // Move based on direction (requires rotation)
      switch (direction) {
        case 0: currentZ -= distance; rotationsRequired++; break; // North
        case 1: currentX += distance; rotationsRequired++; break; // East
        case 2: currentZ += distance; rotationsRequired++; break; // South
        case 3: currentX -= distance; rotationsRequired++; break; // West
      }
      
      currentY = Math.max(0, Math.min(10, currentY + verticalChange)); // Keep Y in bounds
      
      // Keep within bounds
      currentX = Math.max(-8, Math.min(8, currentX));
      currentZ = Math.max(-8, Math.min(8, currentZ));
      
      platforms.push({ x: currentX, y: currentY, z: currentZ });
      
      // Create platform (single block or small cluster)
      const platformSize = this.rng() < 0.7 ? 1 : 2;
      for (let px = 0; px < platformSize; px++) {
        for (let pz = 0; pz < platformSize; pz++) {
          addBlock(currentX + px, currentY, currentZ + pz, VoxelType.PLATFORM);
        }
      }
    }
    
    // 3. Add goal at final platform
    const lastPlatform = platforms[platforms.length - 1];
    if (lastPlatform) {
      addBlock(lastPlatform.x, lastPlatform.y + 1, lastPlatform.z, VoxelType.GOAL);
    }
    
    // 4. Add optional features based on difficulty
    if (config.includeKeys && platforms.length > 3) {
      // Add 1-2 keys on random platforms
      const keyCount = config.difficulty === 'easy' ? 1 : (this.rng() < 0.5 ? 1 : 2);
      for (let k = 0; k < keyCount; k++) {
        const platformIdx = Math.floor(this.rng() * Math.max(1, platforms.length - 2));
        const platform = platforms[platformIdx];
        if (platform) {
          addBlock(platform.x, platform.y + 1, platform.z, VoxelType.KEY);
        }
      }
      
      // Add door before goal
      if (lastPlatform) {
        addBlock(lastPlatform.x - 1, lastPlatform.y + 1, lastPlatform.z, VoxelType.DOOR);
      }
    }
    
    if (config.includeLadders && platforms.length > 2) {
      // Add a ladder between two vertically separated platforms
      for (let i = 0; i < platforms.length - 1; i++) {
        const p1 = platforms[i];
        const p2 = platforms[i + 1];
        if (Math.abs(p2.y - p1.y) > 1 && this.rng() < 0.3) {
          // Add ladder
          const ladderX = p1.x;
          const ladderZ = p1.z;
          const minY = Math.min(p1.y, p2.y);
          const maxY = Math.max(p1.y, p2.y);
          for (let ly = minY; ly <= maxY; ly++) {
            addBlock(ladderX, ly, ladderZ, VoxelType.LADDER);
          }
          break; // Only one ladder for simplicity
        }
      }
    }
    
    if (config.includeTraps && config.difficulty !== 'easy') {
      // Add traps on some platforms (not start or end)
      const trapCount = config.difficulty === 'medium' ? 2 : 4;
      for (let t = 0; t < trapCount && platforms.length > 4; t++) {
        const platformIdx = 1 + Math.floor(this.rng() * (platforms.length - 3));
        const platform = platforms[platformIdx];
        if (platform) {
          addBlock(platform.x + 1, platform.y, platform.z, VoxelType.TRAP);
        }
      }
    }
    
    // 5. Generate level metadata
    const levelName = `Generated ${config.difficulty.charAt(0).toUpperCase() + config.difficulty.slice(1)} #${Date.now() % 1000}`;
    
    return {
      name: levelName,
      description: `Procedurally generated ${config.difficulty} level with ${platformCount} platforms.`,
      blocks,
      difficulty: config.difficulty,
      estimatedRotations: rotationsRequired
    };
  }
  
  /**
   * Generate a sequence of progressively harder levels
   */
  public generateLevelSequence(count: number): GeneratedLevel[] {
    const levels: GeneratedLevel[] = [];
    
    for (let i = 0; i < count; i++) {
      const progress = i / count;
      let difficulty: 'easy' | 'medium' | 'hard';
      let config: GeneratorConfig;
      
      if (progress < 0.3) {
        difficulty = 'easy';
        config = {
          difficulty,
          minPlatforms: 3,
          maxPlatforms: 5,
          includeKeys: false,
          includeLadders: false,
          includeTraps: false
        };
      } else if (progress < 0.7) {
        difficulty = 'medium';
        config = {
          difficulty,
          minPlatforms: 5,
          maxPlatforms: 8,
          includeKeys: true,
          includeLadders: true,
          includeTraps: false
        };
      } else {
        difficulty = 'hard';
        config = {
          difficulty,
          minPlatforms: 8,
          maxPlatforms: 12,
          includeKeys: true,
          includeLadders: true,
          includeTraps: true
        };
      }
      
      levels.push(this.generateLevel(config));
    }
    
    return levels;
  }
  
  /**
   * Validate if a level is theoretically solvable (basic check)
   */
  public validateLevel(blocks: [number, number, number, number][]): boolean {
    let hasSpawn = false;
    let hasGoal = false;
    
    for (const [, , , type] of blocks) {
      if (type === VoxelType.SPAWN) hasSpawn = true;
      if (type === VoxelType.GOAL) hasGoal = true;
    }
    
    return hasSpawn && hasGoal;
  }
}
