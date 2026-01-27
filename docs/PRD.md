# Product Requirements Document (PRD): Project Ortho-Engine

| Item | Content |
| --- | --- |
| **Document Version** | v1.1 |
| **Project Type** | WebGL Puzzle Platformer + Level Editor |
| **Core Objective** | Validate "orthographic perspective rotation" and "spatial compression collision" core gameplay mechanics |
| **Target Platform** | PC Browser (Chrome/Firefox/Edge) |
| **Last Updated** | 2026-01-27 |

---

## Executive Summary

This document defines the product requirements for a **web-based 3D-to-2D perspective puzzle game engine**. The core innovation is enabling "visual connection equals physical connection" through orthographic projection mechanics.

Players control a 2D character in a world made of 3D voxels. By rotating the camera 90 degrees, the game collapses 3D depth into a 2D plane, allowing players to connect previously disconnected paths and solve spatial puzzles.

---

## 1. Product Overview

### 1.1 Vision
Create a web-based game engine demo where players navigate through a voxel-based world by manipulating orthographic perspective to solve spatial puzzles.

### 1.2 Core Experience
- Players cannot move forward/backward in 3D space
- Players can only rotate the world in 90-degree increments
- Orthographic projection eliminates spatial depth, visually connecting disconnected paths
- Players use this mechanic to reach the goal

### 1.3 Key Objectives
1. **Primary**: Prove the core "4-wall perspective shift" gameplay mechanic is viable and fun
2. **Secondary**: Provide a level editor for rapid prototyping and content creation
3. **Tertiary**: Establish a clean, maintainable engine architecture for future expansion

---

## 2. System Architecture: Dual-Mode Design

The engine operates in two mutually exclusive states:

| Mode | **Play Mode** | **Edit Mode** |
| --- | --- | --- |
| **Purpose** | Puzzle solving and gameplay | Level construction and modification |
| **Camera** | **Orthographic**<br>Locked to 4 discrete 90° views<br>Follows character | **Orbit Controls**<br>Free rotation and zoom<br>View from any angle |
| **Physics** | **Active** (gravity, collision) | **Paused** (character frozen/reset) |
| **Input** | Character control (WASD/Space) | Cursor control (mouse placement/deletion) |
| **Transition** | Tab key switches between modes | |

---

## 3. Core Gameplay Mechanics (Play Mode)

### 3.1 Character Controller

The character exists as a 2D entity on the current view plane. Physics operates only on the visible X/Y (or Z/Y) axes.

**Basic Actions:**
- Move left
- Move right
- Jump
- Idle

**Physics Rules:**
- **Gravity**: Always downward (negative Y-axis)
- **Collision**: AABB (Axis-Aligned Bounding Box) collision detection with voxels
- **Constraint**: Character never has "depth" movement (cannot move out of screen plane)

### 3.2 Perspective Rotation & Remapping

This is the most complex and critical part of the engine.

**Four View States:**
- Front (0°)
- Right (90°)
- Back (180°)
- Left (270°)

**Rotation Logic:**

1. **Trigger**: Player initiates rotation (Q/E key)
2. **Input Lock**: Character movement disabled during ~0.5s rotation animation
3. **World Rotation**: Camera rotates 90° around scene center
4. **Depth Flattening**: System ignores the "depth axis" of the new perspective
   - *Example: Rotating from Front to Right, the Z-axis depth is ignored. Platforms that were far away now share the same X-axis coordinate and are treated as the same plane.*
5. **Position Snapping**: Upon rotation completion, if character has no support but a platform exists "visually below" in the new view, character snaps to that platform

### 3.3 Projection Collision Logic (The "Magic")

The engine uses **custom projection-based collision**, not standard 3D physics.

**Logic Formula:**

Assume character is at position `(charX, charY, charZ)`:

- **Front View**: Check all voxels where `(voxelX, voxelY)` overlaps with character (ignore Z-axis differences) → Collision detected
- **Right View**: Check all voxels where `(voxelZ, voxelY)` overlaps with character (ignore X-axis differences) → Collision detected

**Special Handling:**
- To prevent clipping, when foreground blocks obscure the character, either:
  - Render character above foreground (layer control), or
  - Make obscuring blocks semi-transparent

---

## 4. Controls

### 4.1 Play Mode Controls

| Action | Keyboard Input | Logic Behavior |
| --- | --- | --- |
| **Move Left** | A / Left Arrow | Character X-axis (or current horizontal axis) velocity -1 |
| **Move Right** | D / Right Arrow | Character X-axis (or current horizontal axis) velocity +1 |
| **Jump** | Space / W / Up | Apply positive Y-axis impulse |
| **Rotate Left** | Q | Camera rotates 90° counter-clockwise |
| **Rotate Right** | E | Camera rotates 90° clockwise |

### 4.2 Edit Mode Controls

| Action | Input | Behavior |
| --- | --- | --- |
| **Switch Mode** | Tab | Toggle between Play/Edit modes |
| **Rotate View** | Right Mouse Drag | Free camera rotation (OrbitControls) |
| **Pan View** | Middle Mouse / Shift+Left | Camera panning |
| **Place Block** | Left Click | Create voxel at cursor position |
| **Remove Block** | Alt + Left Click | Delete target voxel |
| **Select Brush** | Number Keys 1-5 | 1:Block, 2:Goal, 3:Spawn... |
| **Export Map** | P (Print) | Output level JSON to console |

---

## 5. Camera System

### 5.1 Play Mode Camera
- **Type**: `OrthographicCamera` (Three.js)
- **Zoom**: Fixed (no player zoom to maintain pixel-perfect feel)
- **Position**: Follows character with smooth lerp delay for natural movement
- **Rotation Transition**: Uses tween library (e.g., GSAP) for smooth 90° rotation curves

### 5.2 Edit Mode Camera
- **Type**: `OrthographicCamera` or `PerspectiveCamera` with OrbitControls
- **Behavior**: Free rotation, pan, and zoom
- **Grid Helper**: Display 3D grid lines for spatial reference

---

## 6. Level Data Structure

To facilitate engine processing, use a **3D array (grid system)** instead of traditional 3D model files (.obj/.gltf).

### 6.1 JSON Format

```json
{
  "meta": {
    "version": "1.1",
    "author": "User",
    "created_at": "2026-01-27"
  },
  "level_data": {
    "grid_size": [20, 20, 20],
    "spawn_point": [0, 5, 0],
    "blocks": [
      [0, 0, 0, 1],  // [x, y, z, typeID]
      [1, 0, 0, 1],
      [5, 2, 5, 2]   // Platform that appears disconnected in Front view but connects after rotation
    ]
  }
}
```

### 6.2 Block Types

1. **Solid Block (typeID: 1)**: Standard terrain, blocks character
2. **Platform (typeID: 2)**: Optional - can jump through from below
3. **Spawn Point (typeID: 3)**: Player starting position (only one per level)
4. **Goal (typeID: 4)**: Victory condition on contact
5. **Eraser**: Tool for removing blocks (not a block type)

**Advantages**: This structure makes projection collision calculations straightforward.

---

## 7. Level Editor Specifications

### 7.1 Voxel Grid System

- **Base Unit**: World divided into 1×1×1 invisible grid
- **Ghost Cursor**: Semi-transparent block shows where next voxel will be placed
- **Snapping**: Ghost cursor snaps to nearest integer coordinates `(x, y, z)`

### 7.2 Raycasting

- **Technology**: Three.js `Raycaster` from mouse position
- **Placement Logic**: Ray hits existing voxel face → ghost block appears one unit away in face's normal direction
- **Removal Logic**: Ray hits existing voxel → highlight target with red outline

### 7.3 Block Palette UI

Simple UI panel for brush selection:
- Visual representation of each block type
- Highlight current selection
- Quick access via number keys

### 7.4 Data Serialization

**Export (Save):**
- Iterate through all voxels in scene
- Generate JSON string
- Output to console or download as `.json` file

**Import (Load):**
- Read JSON file
- Clear current scene
- Regenerate voxels from data

**Duplicate Prevention**: Check coordinates before placing to prevent overlapping blocks at same position.

---

## 8. User Interface (UI/HUD)

### 8.1 Play Mode UI (Minimal)

- **Rotation Hints**: Display `[Q]` `[E]` button indicators in bottom corners
- **Collection Counter**: Optional - "0/3 cubes" display

### 8.2 Edit Mode UI (Sidebar/Top Bar)

Displayed when Tab activates edit mode:

- **Palette**: Row of buttons showing block types (highlight current selection)
- **Actions**:
  - `[Clear All]` - Reset entire map
  - `[Save to Console]` - Export JSON
  - `[Load from Text]` - Dialog to paste and load JSON
- **Gizmo**: 3D axis indicator (X, Y, Z) in top-right corner for orientation

### 8.3 Debug Panel (Developer Mode)

Critical for engine development:

- **Current View**: Display current perspective (Front/Right/Back/Left)
- **Player Coordinates**: Show integer position `(x, y, z)`
- **Raycast Status**: Indicate if "visual ground" detected beneath character
- **Force Rotate**: Manual rotation button (prevent softlock scenarios)

---

## 9. MVP Success Criteria

The demo must pass these validation tests:

### 9.1 Infinite Loop Test
Character can endlessly circle a square path made of 4 blocks by continuously rotating perspective.

### 9.2 Broken Bridge Test
- Character faces a gap that cannot be jumped across without rotation
- After rotating, character can walk across previously disconnected distant platforms
- No falling through incorrectly detected surfaces

### 9.3 No Clipping Test
- During rotation, character never gets stuck inside walls
- Character never falls out of world bounds
- Physics remain stable during all perspective transitions

---

## 10. Technical Implementation Path

### 10.1 Development Phases

**Phase 1: Foundation (Edit Mode First)**
1. Implement free camera in Edit Mode
2. Create raycasting for ghost cursor
3. Ensure accurate grid snapping to integer coordinates

**Phase 2: Level Building (CRUD Operations)**
1. Left click → `scene.add(mesh)` + store in data array
2. Right click → `scene.remove(mesh)` + remove from array
3. Implement duplicate detection

**Phase 3: Mode Switching**
1. Tab key implementation:
   - **To Play**: Lock camera angles, spawn character at spawn point, activate physics tick
   - **To Edit**: Remove character, unlock camera, pause physics tick

**Phase 4: Play Mode Mechanics**
1. Implement character controller (movement, jump)
2. Implement projection-based collision system
3. Implement smooth 90° camera rotation
4. Test depth flattening and position snapping

**Phase 5: Integration & Testing**
1. Build test level in Edit Mode
2. Switch to Play Mode
3. Validate rotation and perspective mechanics
4. Run all MVP success tests

### 10.2 Technology Stack

**Core:**
- Three.js (WebGL rendering)
- JavaScript/TypeScript

**Animation:**
- GSAP or similar tween library for camera rotation

**Optional Enhancements:**
- Dat.GUI for debug panel
- Local Storage for saving levels

---

## 11. Technical Specifications

### 11.1 Performance Requirements

- **Target FPS**: 60 FPS on modern browsers
- **Max Grid Size**: 20×20×20 (for MVP, prevents performance issues)
- **Rendering**: WebGL-compatible devices

### 11.2 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Edge 90+

### 11.3 Code Architecture

**Recommended Structure:**
```
src/
├── core/
│   ├── Engine.js          // Main game loop
│   ├── PhysicsSystem.js   // Custom projection physics
│   └── CollisionSystem.js // Projection-based collision
├── modes/
│   ├── PlayMode.js        // Gameplay state
│   └── EditMode.js        // Level editor state
├── entities/
│   ├── Character.js       // Player controller
│   └── Voxel.js          // Block entity
├── systems/
│   ├── CameraController.js
│   ├── InputManager.js
│   └── LevelSerializer.js
└── ui/
    ├── HUD.js
    └── EditorUI.js
```

---

## 12. Future Enhancements (Post-MVP)

Not required for initial release but recommended for consideration:

1. **Sound Effects**: Footsteps, rotation sounds, goal chime
2. **Visual Polish**: Particle effects on rotation, shadows
3. **Additional Mechanics**: 
   - Collectible items
   - Moving platforms
   - Hazards/traps
4. **Level Sharing**: Export/import levels via URL or file
5. **Tutorial System**: Interactive guidance for new players
6. **Analytics**: Track which puzzles are too difficult

---

## 13. Risk Assessment

### 13.1 Technical Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Projection collision bugs | High | Extensive testing, debug visualization |
| Performance issues with many voxels | Medium | Limit grid size, implement culling |
| Browser compatibility issues | Low | Target modern browsers, provide requirements |

### 13.2 Design Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Core mechanic not intuitive | High | Clear tutorial, visual feedback |
| Difficult to create interesting levels | Medium | Robust level editor, example levels |
| Motion sickness from rotation | Medium | Adjustable rotation speed, warnings |

---

## 14. Glossary

- **AABB**: Axis-Aligned Bounding Box - collision detection method
- **Depth Flattening**: Ignoring one spatial axis after perspective rotation
- **Ghost Cursor**: Semi-transparent preview of voxel placement
- **Orthographic Projection**: Parallel projection with no perspective distortion
- **Position Snapping**: Automatically aligning character to valid surface after rotation
- **Voxel**: Volumetric pixel - 3D cube representing single grid unit
- **4-Wall System**: Four fixed camera angles at 90° intervals

---

## 15. Appendix: Pseudo-code for Projection Collision

```javascript
function checkCollision(character, voxels, currentView) {
  const charPos = character.position;
  const charBounds = character.getBoundingBox();
  
  for (let voxel of voxels) {
    const voxelPos = voxel.position;
    
    // Ignore the depth axis based on current view
    let collision = false;
    
    switch(currentView) {
      case 'FRONT': // Looking down -Z axis
        // Only check X and Y, ignore Z
        collision = checkAABB2D(
          charPos.x, charPos.y,
          voxelPos.x, voxelPos.y,
          charBounds, voxel.size
        );
        break;
        
      case 'RIGHT': // Looking down -X axis
        // Only check Z and Y, ignore X
        collision = checkAABB2D(
          charPos.z, charPos.y,
          voxelPos.z, voxelPos.y,
          charBounds, voxel.size
        );
        break;
        
      // Similar for BACK and LEFT views...
    }
    
    if (collision) {
      return voxel; // Collision detected
    }
  }
  
  return null; // No collision
}

function checkAABB2D(charX, charY, voxelX, voxelY, charBounds, voxelSize) {
  return (
    charX < voxelX + voxelSize &&
    charX + charBounds.width > voxelX &&
    charY < voxelY + voxelSize &&
    charY + charBounds.height > voxelY
  );
}
```

---

## Document Approval

**Status**: Draft v1.1
**Ready for Development**: Yes
**Next Step**: Set up Three.js environment and implement Phase 1 (Edit Mode foundation)

---

*End of Product Requirements Document*
