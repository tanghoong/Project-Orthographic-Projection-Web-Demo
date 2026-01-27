# Orthographic Projection Puzzle Game

**Status**: 🟢 Active Development  
**Version**: 0.5.0 (Pre-Alpha)  
**Last Updated**: 2026-01-28

---

## 🎮 Project Overview

A web-based 3D-to-2D orthographic projection puzzle game where players navigate a voxel world by rotating the camera to solve spatial puzzles. Players manipulate perspective to connect seemingly disconnected paths and reach the goal.

### Key Features
- ✨ **Perspective Rotation Mechanic**: Rotate the world 90° to flatten depth
- 🎨 **Built-in Level Editor**: Create and test levels in real-time with layer-based building
- 🌐 **Browser-based**: No installation required, runs in modern browsers
- 🎯 **Puzzle Solving**: Keys, doors, ladders, traps, and more!
- 🌊 **Bounded World**: 20×20×40 block space with water below ground
- 🎹 **Keyboard Controls**: Intuitive 1-9 block selection, 0 for eraser

---

## 🚀 Quick Start

### Installation
```bash
# Clone repository
git clone https://github.com/tanghoong/Project-Orthographic-Projection-Web-Demo.git
cd Project-Orthographic-Projection-Web-Demo

# Install dependencies
npm install

# Start development server
npm run dev
```

### Controls

#### Play Mode
- **Arrow Keys**: Move character
- **Space**: Jump
- **Q/E**: Rotate camera 90° left/right

#### Edit Mode
- **Keyboard 1**: ✛ Cross cursor (camera control)
- **Keyboard 2**: ◼ Ground block
- **Keyboard 3**: ☁ Cloud block (floating)
- **Keyboard 4**: 🪜 Ladder (climb mechanic)
- **Keyboard 5**: 💣 Boom trap (respawn)
- **Keyboard 6**: 🔑 Floating key (collectible)
- **Keyboard 7**: 🚪 Exit door (requires all keys)
- **Keyboard 8**: ▶ Start point
- **Keyboard 9**: ⬛ End goal
- **Keyboard 0**: 🗑 Eraser
- **Mouse Left Click**: Place blocks (hold and drag for multiple)
- **Mouse Right Click**: Delete blocks at cursor (accurate to instance)
- **PageUp/PageDown**: Adjust build height layer
- **Space + Drag**: Pan camera
- **Scroll**: Zoom in/out
- **Tab**: Switch between Edit/Play mode

---

## 📚 Documentation

### Core Documents
1. **[REVIEW-1.md](docs/REVIEW-1.md)** - Comprehensive project review and roadmap
2. **[Product Requirements Document (PRD)](docs/PRD.md)** - Technical specifications
3. **[MVP Roadmap](docs/MVP-ROADMAP.md)** - Development plan
4. **[Sprint Tracker](docs/SPRINT-TRACKER.md)** - Progress tracking
5. **[Quick Reference](docs/QUICK-REFERENCE.md)** - Task checklist

---

## 🗺️ Current Implementation Status

### ✅ Completed Features

#### Core Engine (100%)
- Three.js orthographic camera setup
- Scene rendering with instanced voxel meshes
- OrbitControls with zoom/pan/damping
- Water plane below ground (Y < 0)
- World boundary visualization (20×20×40)

#### Physics System (95%)
- Gravity and movement
- Jump mechanics with buffering (100ms) and coyote time (150ms)
- AABB collision detection
- Terminal velocity cap
- **Pending**: Ladder climbing, trap respawn

#### Level Editor (95%)
- Layer-based building system (Y=0 to Y=39)
- Grid plane at current build height
- Smart snapping disabled (layer control)
- Minecraft-style drag-to-place
- Accurate instanced mesh deletion
- World boundary enforcement
- Auto-save on mode switch
- Undo/redo system
- **Pending**: Sprite decorations

#### Camera System (100%)
- 90° rotation animation (Q/E keys)
- View presets (Isometric, Top, Front, Side)
- Camera reset functionality
- Smooth damping and zoom limits

#### Block Types (100%)
- Ground (solid brown)
- Cloud (floating light cyan)
- Ladder (orange)
- Trap (red)
- Key (gold)
- Door (green)
- Start point (yellow)
- End goal (purple)
- **Pending**: Gameplay logic for ladder/trap/key/door

#### UI Systems (100%)
- Bottom toolbar with emoji icons
- Build height indicator and controls
- Camera view switcher
- Auto-save indicator
- Visual button feedback for keyboard shortcuts
- Mobile touch controls (basic)

### 🟡 In Progress

#### Gameplay Mechanics
- **Ladder Climbing**: Physics integration needed
- **Key Collection**: Auto-pickup on collision
- **Door Unlocking**: Require all keys to open
- **Trap System**: Respawn from last safe checkpoint
- **Level Progression**: Transition between levels

### 📋 Upcoming Tasks

#### Phase 1: Complete Gameplay
1. Implement ladder climbing mechanics
2. Add key collection system with UI counter
3. Add door unlock logic
4. Implement trap collision and respawn
5. Create 5-10 tutorial/easy levels

#### Phase 2: Visual Polish
1. Add 2D sprite decorations on blocks
2. Particle effects (jump dust, key sparkles)
3. Character animations
4. Sound effects (optional)

#### Phase 3: Advanced Features
1. Procedural level generator
2. Level sharing (JSON export/import)
3. Portal/teleport system
4. Performance optimizations (spatial hashing)

---

## 🌍 World Structure

```
     Y=39 ┌──────────────────┐  ← Sky limit
          │                  │
          │   Building       │
          │    Space         │
          │   (20×20×40)     │
      Y=0 └──────────────────┘  ← Ground level (sea level)
          ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈  ← Water/Sea
   
   X: -10 to +10 (20 blocks wide)
   Z: -10 to +10 (20 blocks deep)
   Y:   0 to 39  (40 blocks tall)
```

### Block Colors
- **Ground**: Brown (#8b4513)
- **Cloud**: Light Cyan (#e0f7fa)
- **Ladder**: Orange (#d2691e)
- **Trap**: Red (#ff0000)
- **Key**: Gold (#ffd700)
- **Door**: Green (#00ff00)
- **Start**: Yellow (#ffeb3b)
- **End**: Purple (#9c27b0)

---

## 🛠️ Tech Stack

- **Engine**: Three.js (WebGL)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Animation**: GSAP
- **Styling**: Vanilla CSS

---

## 📁 Project Structure

```
src/
├── core/
│   ├── Engine.ts              # Scene, camera, renderer setup
│   ├── EventManager.ts        # Event bus for decoupled communication
│   └── InputManager.ts        # Keyboard/mouse input handling
├── systems/
│   ├── CameraSystem.ts        # 90° rotation logic
│   ├── EditorSystem.ts        # Level editor with layer building
│   ├── GameManager.ts         # Mode switching, auto-save
│   ├── LevelManager.ts        # Level data, serialization
│   ├── PhysicsSystem.ts       # Gravity, collision, jump mechanics
│   └── VoxelRenderer.ts       # Instanced mesh rendering
├── entities/
│   ├── Character.ts           # Player character with GSAP eyes
│   └── Voxel.ts               # Block type enum and data
├── ui/
│   └── EditorUI.ts            # Editor toolbar and controls
├── utils/
│   ├── Constants.ts           # Game configuration
│   └── Enums.ts               # ViewState, GameMode, Events
├── data/
│   └── PresetLevels.ts        # Tutorial levels
└── main.ts                    # Application entry point
```

---

## 🎯 Development Timeline

| Sprint | Status | Completion |
|--------|--------|------------|
| **Foundation** | ✅ Complete | 100% |
| **Editor System** | ✅ Complete | 100% |
| **Physics & Movement** | ✅ Complete | 95% |
| **Camera Rotation** | ✅ Complete | 100% |
| **Block Types** | ✅ Complete | 100% |
| **World Boundaries** | ✅ Complete | 100% |
| **Gameplay Mechanics** | 🟡 In Progress | 20% |
| **Visual Polish** | 🔵 Not Started | 0% |
| **Level Content** | 🔵 Not Started | 0% |

**Overall Progress**: ~60% Complete

---

## 🐛 Known Issues

- Ladder climbing not implemented (visual only)
- Key collection not functional (visual only)
- Door unlock logic pending (visual only)
- Trap respawn system pending (visual only)
- Some lint warnings (non-critical)

---

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙏 Acknowledgments

- Three.js community for excellent documentation
- GSAP for smooth animations
- Vite for blazing-fast builds

---

**Last Updated**: January 28, 2026  
**Next Milestone**: Complete gameplay mechanics (keys, doors, ladders, traps)

👉 **[View Detailed Roadmap](docs/MVP-ROADMAP.md)**  
👉 **[Track Current Sprint Progress](docs/SPRINT-TRACKER.md)**

---

## 🎯 Milestones

- [ ] **M1**: Environment Setup - Three.js rendering voxels *(Sprint 1)*
- [ ] **M2**: Edit Mode Complete - Functional level editor *(Sprint 2)*
- [ ] **M3**: Play Mode Foundation - Character movement working *(Sprint 3)*
- [ ] **M4**: Core Mechanic Implemented - Perspective rotation working *(Sprint 4)*
- [ ] **M5**: MVP Release - Complete playable demo *(Sprint 5)*

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern browser (Chrome 90+, Firefox 88+, or Edge 90+)

### Installation
```bash
# Clone the repository
git clone https://github.com/tanghoong/Project-Orthographic-Projection-Web-Demo.git

# Navigate to project directory
cd Project-Orthographic-Projection-Web-Demo

# Install dependencies (coming in Sprint 1)
npm install

# Run development server (coming in Sprint 1)
npm run dev
```

*Note: Setup instructions will be finalized in Sprint 1*

---

## 🎮 How to Play

### Play Mode Controls
| Action | Key | Description |
|--------|-----|-------------|
| Move Left | `A` or `←` | Move character left |
| Move Right | `D` or `→` | Move character right |
| Jump | `Space` or `W` or `↑` | Make character jump |
| Rotate Left | `Q` | Rotate camera 90° counter-clockwise |
| Rotate Right | `E` | Rotate camera 90° clockwise |
| Switch Mode | `Tab` | Toggle between Play and Edit modes |

### Edit Mode Controls
| Action | Key/Mouse | Description |
|--------|-----------|-------------|
| Place Block | Left Click | Add voxel at cursor |
| Remove Block | Alt + Left Click | Delete voxel |
| Rotate View | Right Mouse Drag | Free camera rotation |
| Pan View | Middle Mouse | Pan camera |
| Select Block Type | `1-5` | Choose block type (Solid/Platform/Spawn/Goal/Eraser) |
| Export Level | `P` | Output level JSON to console |

*Full controls guide coming in Sprint 5*

---

## 🏗️ Level Editor

The built-in level editor allows rapid prototyping of puzzle levels.

### Block Types
1. **Solid Block** (Key: `1`) - Standard terrain, blocks character
2. **Platform** (Key: `2`) - Optional one-way platform
3. **Spawn Point** (Key: `3`) - Player starting position
4. **Goal** (Key: `4`) - Victory condition
5. **Eraser** (Key: `5`) - Tool for removing blocks

### Creating a Level
1. Press `Tab` to enter Edit Mode
2. Select a block type with number keys `1-5`
3. Click to place blocks in the 3D space
4. Press `P` to export your level as JSON
5. Press `Tab` to test your level in Play Mode

*Detailed level creation guide coming in Sprint 2*

---

## 📦 Technology Stack

### Core Technologies
- **Three.js** - 3D WebGL rendering
- **JavaScript/TypeScript** - Programming language
- **GSAP** - Animation library for smooth camera rotation
- **HTML5/CSS3** - User interface

### Development Tools
- **Vite/Webpack** - Build system (TBD in Sprint 1)
- **npm/yarn** - Package management
- **Git** - Version control

---

## 🏆 MVP Success Criteria

The MVP must pass these three validation tests:

### ✅ Test 1: Infinite Loop Test
Character can endlessly circle a square path by rotating perspective without falling.

### ✅ Test 2: Broken Bridge Test
Character can cross gaps by rotating to connect distant platforms visually.

### ✅ Test 3: No Clipping Test
Character never clips through walls or falls out of bounds during rotation.

---

## 📊 Current Status

### Sprint 1 Progress: 0/4 Tasks Complete
- [ ] Task 1.1: Project Scaffolding
- [ ] Task 1.2: Basic Three.js Scene Setup
- [ ] Task 1.3: Voxel Rendering System
- [ ] Task 1.4: Camera Controls

**Next Actions**:
1. Assign team members
2. Set Sprint 1 start date
3. Begin Task 1.1 - Project Scaffolding

👉 **[View Sprint Tracker](docs/SPRINT-TRACKER.md)** for detailed progress

---

## 👥 Team & Roles

| Role | Responsibilities | Time Commitment |
|------|------------------|-----------------|
| Frontend Developer | Core implementation, Three.js | 100% (10 weeks) |
| Game Designer | Level design, UX | 30% (3 weeks) |
| QA Tester | Testing, validation | 20% (2 weeks) |
| Project Manager | Planning, tracking | 20% (2 weeks) |

*Team members to be assigned*

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Review the [PRD](docs/PRD.md) to understand the project vision
2. Check the [Sprint Tracker](docs/SPRINT-TRACKER.md) for available tasks
3. Follow the existing code style and conventions
4. Submit pull requests for review

*Detailed contributing guidelines coming in Sprint 1*

---

## 📝 Project Structure

```
Project-Orthographic-Projection-Web-Demo/
├── docs/
│   ├── PRD.md                  # Product Requirements Document
│   ├── MVP-ROADMAP.md          # Development roadmap with sprints
│   ├── SPRINT-TRACKER.md       # Real-time sprint progress
│   └── QUICK-REFERENCE.md      # Quick reference for key concepts & commands
├── src/                        # Source code (coming in Sprint 1)
│   ├── core/                   # Game engine core
│   ├── modes/                  # Play/Edit mode implementations
│   ├── entities/               # Character, Voxel entities
│   ├── systems/                # Camera, Input, Level systems
│   └── ui/                     # User interface components
├── levels/                     # Example level JSON files (coming in Sprint 2)
├── assets/                     # Images, fonts, sounds (coming in Sprint 5)
├── tests/                      # Test files (coming in Sprint 5)
├── README.md                   # This file
└── package.json               # Dependencies (coming in Sprint 1)
```

---

## 🐛 Known Issues

*No issues yet - project in planning phase*

---

## 📅 Changelog

### Version 1.0 (In Progress)
- **2026-01-27**: Created project structure and documentation
  - Added comprehensive MVP Roadmap
  - Added Sprint Tracker
  - Added PRD documentation
  - Defined 5-sprint development plan

---

## 🔗 Resources

### Documentation
- [Three.js Documentation](https://threejs.org/docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [GSAP Animation](https://greensock.com/gsap/)

### Related Projects
- Monument Valley (inspiration)
- Fez (similar perspective mechanic)
- Echochrome (perspective-based puzzles)

---

## 📄 License

*License to be determined*

---

## 📞 Contact

**Project Owner**: tanghoong  
**Repository**: [Project-Orthographic-Projection-Web-Demo](https://github.com/tanghoong/Project-Orthographic-Projection-Web-Demo)

---

## 🙏 Acknowledgments

This project explores innovative 3D-to-2D perspective mechanics for web-based puzzle games. Special thanks to the Three.js community and inspiration from Monument Valley and Fez.

---

*Last updated: 2026-01-27*  
*For detailed development plans, see [MVP-ROADMAP.md](docs/MVP-ROADMAP.md)*
