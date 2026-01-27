# Project Orthographic Projection Web Demo

**Status**: 🔵 Planning Phase  
**Version**: 1.0 MVP  
**Last Updated**: 2026-01-27

---

## 🎮 Project Overview

A web-based 3D-to-2D orthographic projection puzzle game where players navigate a voxel world by rotating the camera to solve spatial puzzles. Players manipulate perspective to connect seemingly disconnected paths and reach the goal.

### Key Features
- ✨ **Perspective Rotation Mechanic**: Rotate the world 90° to flatten depth
- 🎨 **Built-in Level Editor**: Create and test levels in real-time
- 🌐 **Browser-based**: No installation required, runs in modern browsers
- 🎯 **Puzzle Solving**: Use visual connections to navigate 3D space

---

## 📚 Documentation

### Core Documents
1. **[Product Requirements Document (PRD)](docs/PRD.md)** - Technical specifications and game mechanics
2. **[MVP Roadmap](docs/MVP-ROADMAP.md)** - Complete development plan with sprints and milestones
3. **[Sprint Tracker](docs/SPRINT-TRACKER.md)** - Real-time progress tracking
4. **[Quick Reference](docs/QUICK-REFERENCE.md)** - One-page sprint and task checklist

### Quick Links
- [Setup Instructions](#setup-instructions) (coming soon)
- [How to Play](#how-to-play) (coming soon)
- [How to Create Levels](#level-editor) (coming soon)
- [Contributing Guidelines](#contributing) (coming soon)

---

## 🗺️ Project Roadmap

### Timeline: 10 Weeks (5 x 2-week Sprints)

| Sprint | Duration | Theme | Deliverable | Status |
|--------|----------|-------|-------------|--------|
| **Sprint 1** | Weeks 1-2 | Foundation & Environment Setup | Three.js scene rendering voxels | 🔵 Not Started |
| **Sprint 2** | Weeks 3-4 | Level Editor - Edit Mode | Functional level editor | 🔵 Not Started |
| **Sprint 3** | Weeks 5-6 | Play Mode - Character & Physics | Character movement and collision | 🔵 Not Started |
| **Sprint 4** | Weeks 7-8 | Core Mechanic - Perspective Rotation | Working projection collision | 🔵 Not Started |
| **Sprint 5** | Weeks 9-10 | Polish & MVP Validation | Complete playable demo | 🔵 Not Started |

**Overall Progress**: 0% (0/5 Milestones Complete)

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
│   └── SPRINT-TRACKER.md       # Real-time sprint progress
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
