# Quick Usage Guide - New Gameplay Features

## 🎮 Playing the New Mechanics

### Ladder Climbing
1. Approach a ladder block (orange 🪜)
2. Press **W** or **↑** to climb up
3. Press **S** or **↓** to climb down
4. Press **Space** to jump off
5. Move horizontally (A/D) to dismount

### Key Collection
1. Walk into a key block (gold 🔑)
2. Key is auto-collected (no button press)
3. Check top-left HUD for key counter: 🔑 2/3
4. Score increases by +10 per key

### Door System
1. Doors (green 🚪) block your path when locked
2. Collect all keys in the level first
3. Door automatically unlocks and disappears
4. Walk through to reach the goal

### Trap Avoidance
1. Red trap blocks (💣) will respawn you
2. Last safe position = last time you touched solid ground
3. Lose -5 points per death
4. Use rotation to find safe alternate paths

### Level Completion
1. Reach the goal block (purple ⬛)
2. Modal appears with your stats:
   - Time taken (MM:SS)
   - Rotations used
   - Best records
3. Choose action:
   - **Next Level**: Load next in sequence
   - **Retry**: Restart current level
   - **Return to Editor**: Go back to edit mode

---

## 🛠️ Using the Procedural Generator

### Method 1: Generate Single Level

```typescript
import { ProceduralGenerator } from './systems/ProceduralGenerator';

const generator = new ProceduralGenerator(12345); // Optional seed

const level = generator.generateLevel({
  difficulty: 'medium',
  minPlatforms: 5,
  maxPlatforms: 8,
  includeKeys: true,
  includeLadders: true,
  includeTraps: false
});

console.log(level.name); // "Generated Medium #123"
console.log(level.blocks); // Array of [x, y, z, type]
```

### Method 2: Generate Level Sequence

```typescript
const generator = new ProceduralGenerator();

// Generate 10 progressively harder levels
const levels = generator.generateLevelSequence(10);
// First 30%: Easy (3-5 platforms, no hazards)
// Next 40%: Medium (5-8 platforms, keys + ladders)
// Final 30%: Hard (8-12 platforms, all mechanics)

levels.forEach((level, i) => {
  console.log(`Level ${i + 1}: ${level.difficulty} - ${level.estimatedRotations} rotations`);
});
```

### Method 3: Add to Preset Levels

Edit `src/data/PresetLevels.ts`:

```typescript
import { ProceduralGenerator } from '../systems/ProceduralGenerator';

const generator = new ProceduralGenerator(999);
const procLevel = generator.generateLevel({
  difficulty: 'easy',
  minPlatforms: 3,
  maxPlatforms: 5,
  includeKeys: false,
  includeLadders: false,
  includeTraps: false
});

export const PRESET_LEVELS: Record<string, PresetLevel> = {
  // ... existing levels
  generated1: {
    name: procLevel.name,
    description: procLevel.description,
    blocks: procLevel.blocks
  }
};
```

---

## 📊 Setting Up Level Progression

### Step 1: Define Level Sequence

Edit `src/main.ts`:

```typescript
import { ProgressionManager, LevelMetadata } from './systems/ProgressionManager';

// Define your level progression
const levelSequence: LevelMetadata[] = [
  {
    id: 'keyHunt',
    name: 'Key Hunt',
    difficulty: 'tutorial',
    nextLevel: 'ladderClimb',
    par: { time: 30, rotations: 5 }
  },
  {
    id: 'ladderClimb',
    name: 'Ladder Climb',
    difficulty: 'tutorial',
    nextLevel: 'trapRun',
    par: { time: 45, rotations: 8 }
  },
  {
    id: 'trapRun',
    name: 'Trap Run',
    difficulty: 'easy',
    nextLevel: 'infiniteLoop',
    par: { time: 60, rotations: 12 }
  },
  {
    id: 'infiniteLoop',
    name: 'MVP Test: Infinite Loop',
    difficulty: 'medium',
    // No nextLevel = final level
  }
];

const progressionManager = gameManager.getProgressionManager();
progressionManager.setLevelSequence(levelSequence);
```

### Step 2: Start First Level

```typescript
// Start campaign from level 1
gameManager.startLevelById('keyHunt');
```

### Step 3: Track Progress

```typescript
const progression = gameManager.getProgressionManager();

// Get completion stats
const stats = progression.getAllLevelsProgress();
stats.forEach(({ level, stats }) => {
  console.log(`${level.name}: ${stats.completed ? '✅' : '⬜'}`);
  console.log(`  Best Time: ${stats.bestTime}s`);
  console.log(`  Attempts: ${stats.attempts}`);
});

// Check overall progress
const completed = progression.getCompletedLevelsCount();
const total = progression.getTotalLevelsCount();
console.log(`Progress: ${completed}/${total} (${(completed/total*100).toFixed(0)}%)`);
```

### Step 4: Reset Progress

```typescript
progression.resetProgress(); // Clear all saved stats
```

---

## 🎯 Testing the MVP Validation Levels

### Test 1: Infinite Loop
```
1. Load preset: "MVP Test: Infinite Loop"
2. Press Tab to enter Play Mode
3. Walk forward (D key)
4. Rotate left (Q) when you reach edge
5. Continue walking and rotating
6. Expected: Can circle endlessly without falling
```

### Test 2: Broken Bridge
```
1. Load preset: "MVP Test: Broken Bridge"
2. Press Tab to enter Play Mode
3. Observe: Goal platform is far away on Z-axis
4. Rotate to side view (Q or E)
5. Expected: Platforms visually align, can walk across
```

### Test 3: No Clipping
```
1. Load preset: "MVP Test: No Clipping"
2. Press Tab to enter Play Mode
3. Try walking into walls from all 4 camera angles
4. Expected: No clipping through walls, no falling out
```

---

## 🔧 Customization Tips

### Adjust Climb Speed
Edit `src/systems/PhysicsSystem.ts`:
```typescript
const climbSpeed = 5.0; // Default is 3.0
```

### Adjust Death Penalty
Edit `src/systems/GameManager.ts`:
```typescript
this.score = Math.max(0, this.score - 10); // Default is -5
```

### Change Key Score Value
Edit `src/systems/GameManager.ts`:
```typescript
this.score += 20; // Default is +10
```

### Modify Generator Difficulty
Edit `src/systems/ProceduralGenerator.ts`:
```typescript
// In generateLevelSequence()
if (progress < 0.5) { // More easy levels (default: 0.3)
  difficulty = 'easy';
  config = {
    minPlatforms: 5, // More platforms (default: 3)
    maxPlatforms: 7,
    // ...
  };
}
```

---

## 📱 Mobile Controls

### D-Pad (Movement)
- **↑**: Climb up on ladder / Jump (deprecated for ladder levels)
- **↓**: Climb down on ladder
- **←**: Move left
- **→**: Move right

### Rotation Buttons
- **↺** (Left button): Rotate camera left (Q)
- **↻** (Right button): Rotate camera right (E)

### Desktop Controls
- **W/S**: Climb ladder up/down
- **A/D**: Move left/right
- **Space**: Jump
- **Q/E**: Rotate camera
- **Tab**: Switch Edit/Play mode

---

## 🐛 Troubleshooting

### "Keys not collecting"
- Ensure you're walking directly into the key block
- Check console for "Key collected!" message
- Verify key counter updates in HUD

### "Door won't unlock"
- Check key counter: collected should equal required
- Console message shows remaining keys needed
- Try walking into door again after collecting all keys

### "Ladder not working"
- Make sure you're overlapping the ladder block
- Use W/S (not arrow up for jump)
- Orange ladder blocks should be visible

### "Respawn position wrong"
- Last safe position = last grounded solid block
- Ladders and platforms don't count
- Try landing on a solid ground block first

### "Modal won't close"
- Use the three buttons in modal
- Don't press Esc (not implemented)
- Check console for errors

---

## 💾 Save Data Locations

All game data is stored in browser localStorage:

- **Level Progress**: `ortho_game_progress`
- **Auto-saved Level**: `ortho_level_autosave`
- **Custom Levels**: `ortho_level_[name]`

To clear all data:
```javascript
localStorage.clear();
```

To view saved data:
```javascript
console.log(localStorage.getItem('ortho_game_progress'));
```

---

## 🚀 Performance Tips

1. **Limit platform count**: Keep under 50 platforms for 60 FPS
2. **Use procedural generator**: Set maxPlatforms carefully
3. **Mobile devices**: Test on actual hardware, not just browser resize
4. **Large levels**: Consider frustum culling (future enhancement)

---

**Happy testing! 🎮**

For bug reports or feature requests, document them in the project tracker.
