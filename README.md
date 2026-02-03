# Orthographic Projection Puzzle Game

**Status**: 🟢 Release Candidate (MVP)  
**Version**: 1.0.0  
**Last Updated**: 2026-02-03

---

## 🎮 Project Overview

A web-based 3D-to-2D orthographic projection puzzle game where players navigate a voxel world by rotating the camera to solve spatial puzzles. Players manipulate perspective to connect seemingly disconnected paths and reach the goal.

### Key Features
- ✨ **Perspective Rotation Mechanic**: Rotate the world 90° to flatten depth and solve "impossible" paths.
- 🎨 **Built-in Level Editor**: Create, save, and load levels in real-time.
- 🔊 **Procedural Audio**: Retro-style sound effects generated via Web Audio API.
- 🌟 **Particle Effects**: Visual feedback for jumping, landing, and collecting items.
- 🎥 **Dynamic View Switching**: Toggle between 2D and 3D Isometric views instantly (`Tab` key).
- 🌐 **Browser-based**: Runs efficiently in modern browsers using WebGL (Three.js).
- 🧩 **Puzzle Elements**: Keys, Doors, Ladders, Traps, and Goal blocks.

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

### Build & Deploy
```bash
# Run linting
npm run lint

# Run tests
npm test

# Build for production
npm run build
```
See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

---

## 🎮 Controls

### Play Mode
- **Move**: `W`, `A`, `S`, `D` or Arrow Keys
- **Jump**: `Space`
- **Rotate Camera**: `Q` / `E` (90° increments)
- **Toggle View (2D/3D)**: `Tab`
- **Interact**: Auto-collect keys, open doors

### Edit Mode
- **Pan Camera**: Middle Mouse / Space + Drag
- **Rotate Camera**: Right Mouse Drag
- **Zoom**: Scroll Wheel
- **Place Block**: Left Click
- **Remove Block**: Alt + Left Click / Right Click
- **Change Layer**: `PageUp` / `PageDown`
- **Tools**:
    - `1`: Solid Block
    - `2`: Platform
    - `3`: Spawn Point
    - `4`: Goal
    - `5`: Eraser
    - `6`: Key
    - `7`: Door
    - `8`: Trap
    - `9`: Ladder

---

## 🗺️ Implementation Status

### ✅ Completed Features (100%)
- **Core Engine**: Three.js, InstancedMesh, Orthographic Camera.
- **Physics**: AABB Collision, Gravity, Jump Buffering, Coyote Time.
- **Editor**: Layer-based building, JSON Serialization (Zod validated), Undo/Redo.
- **Camera**: Smooth GSAP transitions, Dynamic View Switching.
- **Audio**: Web Audio API implementation (No external assets).
- **Particles**: InstancedMesh particle system.
- **Testing**: Vitest integration with MVP scenario tests.

### 🟡 In Progress
- **Level Content**: More pre-built puzzle levels.
- **Mobile Support**: Touch controls refinement.

---

## 📁 Project Structure

```
src/
├── core/
│   ├── Engine.ts              # Three.js setup
│   ├── EventManager.ts        # Pub/Sub event bus
│   └── InputManager.ts        # Input handling
├── systems/
│   ├── AudioSystem.ts         # Procedural SFX
│   ├── CameraSystem.ts        # View & Rotation logic
│   ├── EditorSystem.ts        # Level editing logic
│   ├── GameManager.ts         # State management
│   ├── ParticleSystem.ts      # VFX
│   ├── PhysicsSystem.ts       # Collision & Movement
│   └── VoxelRenderer.ts       # Instanced Rendering
├── entities/
│   └── Character.ts           # Player entity
├── ui/
│   └── EditorUI.ts            # HUD & Tools
└── utils/                     # Constants, Enums, Helpers
```

---

## 📚 Documentation
- **[MVP Roadmap](docs/MVP-ROADMAP.md)**: Development timeline and milestones.
- **[Sprint Tracker](docs/SPRINT-TRACKER.md)**: Task completion log.
- **[Deployment Guide](DEPLOYMENT.md)**: Hosting instructions.

---

## 🏆 Credits
- **Engine**: [Three.js](https://threejs.org/)
- **Animation**: [GSAP](https://greensock.com/gsap/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Testing**: [Vitest](https://vitest.dev/)
