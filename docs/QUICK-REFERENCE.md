# Quick Reference: Sprint Checklist

**Last Updated**: 2026-01-27  
**Purpose**: Quick at-a-glance view of all sprints and milestones

---

## 📅 Sprint Schedule (10 Weeks Total)

```
Week 1-2:  Sprint 1 - Foundation & Environment Setup
Week 3-4:  Sprint 2 - Level Editor (Edit Mode)
Week 5-6:  Sprint 3 - Character & Physics (Play Mode)
Week 7-8:  Sprint 4 - Perspective Rotation (Core Mechanic)
Week 9-10: Sprint 5 - Polish & MVP Release
```

---

## ✅ Milestone Checklist

- [ ] **M1**: Environment Setup (Sprint 1) - Three.js renders voxels
- [ ] **M2**: Edit Mode Complete (Sprint 2) - Level editor works
- [ ] **M3**: Play Mode Foundation (Sprint 3) - Character moves
- [ ] **M4**: Core Mechanic (Sprint 4) - Rotation & projection collision
- [ ] **M5**: MVP Release (Sprint 5) - All tests pass, deployed

---

## 🏃 Sprint 1: Foundation (Weeks 1-2)

### Quick Summary
Get something rendering on screen with Three.js

### Tasks (4 total)
- [ ] 1.1 Project Scaffolding (2d) - npm, Three.js, build system
- [ ] 1.2 Three.js Scene (3d) - Scene, camera, lights, render loop
- [ ] 1.3 Voxel Rendering (3d) - Create and render voxels
- [ ] 1.4 Camera Controls (2d) - OrbitControls

### Must Have
✅ Page loads, voxels render, camera orbits, 60 FPS

---

## 🏃 Sprint 2: Editor (Weeks 3-4)

### Quick Summary
Build the level editor for creating puzzles

### Tasks (5 total)
- [ ] 2.1 Raycasting System (3d) - Ghost cursor, grid snapping
- [ ] 2.2 CRUD Operations (3d) - Place/delete blocks
- [ ] 2.3 Block Palette UI (2d) - Select block types
- [ ] 2.4 Serialization (2d) - Save/load JSON
- [ ] 2.5 UI Polish (2d) - Gizmo, buttons, tooltips

### Must Have
✅ Can build levels, export JSON, import JSON

---

## 🏃 Sprint 3: Character (Weeks 5-6)

### Quick Summary
Add player character with movement and collision

### Tasks (4 total)
- [ ] 3.1 Mode Switching (2d) - Tab toggle Play/Edit
- [ ] 3.2 Character Entity (3d) - Create player model
- [ ] 3.3 Movement (3d) - Walk, jump, gravity
- [ ] 3.4 2D Collision (4d) - AABB collision with voxels

### Must Have
✅ Character moves, jumps, collides, mode switching works

---

## 🏃 Sprint 4: Core Mechanic (Weeks 7-8)

### Quick Summary
Implement the "magic" - perspective rotation & projection collision

### Tasks (5 total)
- [ ] 4.1 Camera Rotation (3d) - Q/E rotate 90°, smooth animation
- [ ] 4.2 Projection Collision (5d) - Depth flattening, axis ignore
- [ ] 4.3 Position Snapping (2d) - Snap to visual platforms
- [ ] 4.4 Goal Detection (1d) - Victory condition
- [ ] 4.5 Debug Panel (1d) - View state, coordinates, status

### Must Have
✅ Rotation works, projection collision works, can solve puzzles

---

## 🏃 Sprint 5: Polish (Weeks 9-10)

### Quick Summary
Test, polish, deploy the MVP

### Tasks (6 total)
- [ ] 5.1 Test Levels (2d) - Create 3 validation levels
- [ ] 5.2 MVP Testing (3d) - Run all tests, fix bugs
- [ ] 5.3 UI Polish (2d) - Hints, feedback, transitions
- [ ] 5.4 Performance (2d) - Profile, optimize, 60 FPS
- [ ] 5.5 Documentation (1d) - README, guides, comments
- [ ] 5.6 Deployment (1d) - Build, deploy, share URL

### Must Have
✅ All 3 MVP tests pass, deployed online, documented

---

## 🎯 MVP Validation Tests

### Test 1: Infinite Loop ✅
- Create square path (4 blocks)
- Character can circle endlessly by rotating
- No falling or clipping

### Test 2: Broken Bridge ✅
- Two platforms separated by depth
- Can't jump gap in current view
- Rotate → platforms connect → walk across

### Test 3: No Clipping ✅
- Character in enclosed space
- Rotate through all 4 views
- Never clips walls or falls out

---

## 📊 Progress Tracking

### Overall: 0% (0/5 Sprints)
- Sprint 1: ⚪ 0/4 tasks
- Sprint 2: ⚪ 0/5 tasks
- Sprint 3: ⚪ 0/4 tasks
- Sprint 4: ⚪ 0/5 tasks
- Sprint 5: ⚪ 0/6 tasks

### Total Tasks: 0/24 Complete

---

## 🎨 Block Types Reference

1. **Solid Block** (typeID: 1) - Key `1` - Standard terrain
2. **Platform** (typeID: 2) - Key `2` - Jump-through platform
3. **Spawn Point** (typeID: 3) - Key `3` - Player start (max 1)
4. **Goal** (typeID: 4) - Key `4` - Victory condition
5. **Eraser** - Key `5` - Delete tool (not a block type)

---

## ⌨️ Controls Quick Reference

### Play Mode
- `A`/`D` - Move left/right
- `Space` - Jump
- `Q`/`E` - Rotate camera 90°
- `Tab` - Switch to Edit Mode

### Edit Mode
- `Left Click` - Place block
- `Alt + Click` - Delete block
- `Right Drag` - Rotate view
- `Middle Mouse` - Pan view
- `1-5` - Select block type
- `P` - Export JSON
- `Tab` - Switch to Play Mode

---

## 🔗 Documentation Links

- **[Full Roadmap](MVP-ROADMAP.md)** - Detailed sprint plans
- **[Sprint Tracker](SPRINT-TRACKER.md)** - Real-time progress
- **[PRD](PRD.md)** - Technical specifications
- **[README](../README.md)** - Project overview

---

## 📅 Important Dates

| Event | Date | Status |
|-------|------|--------|
| Project Start | TBD | 🔵 Not Started |
| Sprint 1 Start | TBD | 🔵 Not Started |
| Sprint 1 End | TBD | 🔵 Not Started |
| M1 Deadline | TBD | 🔵 Not Started |
| Sprint 2 Start | TBD | 🔵 Not Started |
| M5 Target (MVP) | TBD | 🔵 Not Started |

---

## 🚨 Critical Dependencies

1. **Sprint 1** → No dependencies (START HERE)
2. **Sprint 2** → Sprint 1 complete
3. **Sprint 3** → Sprint 2 complete
4. **Sprint 4** → Sprint 3 complete
5. **Sprint 5** → Sprint 4 complete

**⚠️ All sprints must be completed sequentially!**

---

## 💡 Tips for Success

1. **Don't skip sprints** - Each builds on the previous
2. **Test early, test often** - Catch issues in each sprint
3. **Keep commits small** - Easier to debug if issues arise
4. **Document as you go** - Don't wait until Sprint 5
5. **Use debug visualization** - Especially for Sprint 4 collision
6. **Stick to MVP scope** - Save enhancements for post-MVP

---

## 📞 Next Actions

### To Start Sprint 1:
1. [ ] Review full roadmap and PRD
2. [ ] Assign team member to Frontend Developer role
3. [ ] Set Sprint 1 start date (Weeks 1-2)
4. [ ] Schedule sprint planning meeting
5. [ ] Begin Task 1.1 - Project Scaffolding

---

*Print this page for quick reference during development!*
