# MVP Roadmap: Project Orthographic Projection Web Demo

**Project Name**: Ortho-Engine Web Demo  
**Version**: 1.0  
**Target Platform**: Web (Browser-based)  
**Sprint Duration**: 2 weeks  
**Total Timeline**: 10 weeks (5 sprints)  
**Last Updated**: 2026-01-27

---

## 🎯 Goal

Create a fully playable web-based orthographic projection puzzle game demo with an integrated level editor, enabling players to:
1. Navigate a 3D voxel world from a 2D perspective
2. Solve spatial puzzles by rotating the camera 90 degrees
3. Create and test custom levels in real-time

---

## 📊 Project Milestones

| Milestone | Target Date | Deliverable | Success Criteria |
|-----------|-------------|-------------|------------------|
| **M1: Environment Setup** | End of Sprint 1 | Development environment ready | Three.js rendering voxels, basic controls working |
| **M2: Edit Mode Complete** | End of Sprint 2 | Functional level editor | Can create, save, and load levels |
| **M3: Play Mode Foundation** | End of Sprint 3 | Basic gameplay working | Character moves, jumps, collides with blocks |
| **M4: Core Mechanic Implemented** | End of Sprint 4 | Perspective rotation working | Camera rotates, projection collision works |
| **M5: MVP Release** | End of Sprint 5 | Complete playable demo | All MVP tests pass, polish complete |

---

## 🏃 Sprint Plan

### Sprint 1: Foundation & Environment Setup (Weeks 1-2)

**Theme**: "Get Something on Screen"

**Goal**: Set up development environment and render basic 3D scene with voxels

#### Tasks

- [ ] **Task 1.1**: Project Scaffolding (2 days)
  - [ ] Initialize npm/yarn project with package.json
  - [ ] Install Three.js and dependencies (GSAP, dat.GUI if needed)
  - [ ] Set up build system (Vite, Webpack, or Parcel)
  - [ ] Create basic HTML structure with canvas element
  - [ ] Set up local dev server with hot reload
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 1.2**: Basic Three.js Scene Setup (3 days)
  - [ ] Create Scene, Renderer, and OrthographicCamera
  - [ ] Add ambient and directional lighting
  - [ ] Implement basic grid helper for spatial reference
  - [ ] Set up render loop (requestAnimationFrame)
  - [ ] Add basic keyboard input handler
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 1.3**: Voxel Rendering System (3 days)
  - [ ] Create Voxel class/component
  - [ ] Implement BoxGeometry with different materials for block types
  - [ ] Create data structure to store voxel grid (Map or 3D array)
  - [ ] Render multiple voxels from hardcoded test data
  - [ ] Implement voxel color/texture variations
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 1.4**: Camera Controls (2 days)
  - [ ] Integrate OrbitControls for free camera movement
  - [ ] Set up camera bounds/limits
  - [ ] Implement smooth camera transitions
  - [ ] Add zoom constraints
  - **Assignee**: Frontend Developer
  - **Priority**: P1 (High)

**Sprint 1 Deliverables**:
- ✅ Working web application loads in browser
- ✅ 3D scene renders with lighting
- ✅ Multiple colored voxels visible on screen
- ✅ Camera can orbit around the scene
- ✅ Basic keyboard input working

**Acceptance Criteria**:
- [ ] Page loads without console errors
- [ ] At least 10 different voxels render correctly
- [ ] Camera rotates 360° smoothly with mouse
- [ ] Scene maintains 60 FPS with <100 voxels

**Dependencies**: None (Start sprint)

---

### Sprint 2: Level Editor - Edit Mode (Weeks 3-4)

**Theme**: "Build the Workshop"

**Goal**: Create functional level editor for rapid prototyping

#### Tasks

- [ ] **Task 2.1**: Raycasting System (3 days)
  - [ ] Implement Three.js Raycaster from mouse position
  - [ ] Create ghost cursor (semi-transparent preview voxel)
  - [ ] Implement grid snapping to integer coordinates
  - [ ] Calculate surface normal for placement direction
  - [ ] Add visual feedback (highlight hovered voxels)
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 2.2**: Voxel CRUD Operations (3 days)
  - [ ] Implement "Place Block" on left-click
  - [ ] Implement "Delete Block" on Alt+left-click
  - [ ] Prevent duplicate blocks at same coordinates
  - [ ] Add undo/redo stack (optional enhancement)
  - [ ] Update voxel data structure in real-time
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 2.3**: Block Palette UI (2 days)
  - [ ] Create UI panel for block type selection
  - [ ] Implement number key shortcuts (1-5)
  - [ ] Visual highlight for selected block type
  - [ ] Support all 5 block types (Solid, Platform, Spawn, Goal, Eraser)
  - [ ] Add visual icons/previews for each type
  - **Assignee**: Frontend Developer
  - **Priority**: P1 (High)

- [ ] **Task 2.4**: Level Serialization (2 days)
  - [ ] Implement export to JSON function
  - [ ] Implement import from JSON function
  - [ ] Validate JSON structure on import
  - [ ] Add "Save to Console" button
  - [ ] Add "Load from Text" dialog
  - [ ] Create example level JSON files
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 2.5**: Editor UI Polish (2 days)
  - [ ] Add 3D axis gizmo in corner
  - [ ] Add "Clear All" button with confirmation
  - [ ] Add grid size indicator
  - [ ] Show current cursor coordinates
  - [ ] Add helpful tooltips
  - **Assignee**: Frontend Developer
  - **Priority**: P2 (Medium)

**Sprint 2 Deliverables**:
- ✅ Users can place blocks by clicking
- ✅ Users can delete blocks
- ✅ Ghost cursor shows placement preview
- ✅ Can switch between 5 block types
- ✅ Can export level to JSON
- ✅ Can import level from JSON

**Acceptance Criteria**:
- [ ] Can build a 10x10x10 structure without errors
- [ ] Ghost cursor always snaps to grid correctly
- [ ] Exported JSON loads back identically
- [ ] No duplicate blocks can be placed
- [ ] UI responds to all number key inputs

**Dependencies**: Sprint 1 complete

---

### Sprint 3: Play Mode - Character & Physics (Weeks 5-6)

**Theme**: "Bring It to Life"

**Goal**: Implement character controller and basic physics

#### Tasks

- [ ] **Task 3.1**: Mode Switching System (2 days)
  - [ ] Create state machine for Play/Edit modes
  - [ ] Implement Tab key mode toggle
  - [ ] Freeze physics in Edit Mode
  - [ ] Reset character position on mode switch
  - [ ] Save/restore camera state between modes
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 3.2**: Character Entity (3 days)
  - [ ] Create Character class/component
  - [ ] Model character as simple cube/sphere geometry
  - [ ] Implement spawn at Spawn Point (typeID 3)
  - [ ] Add character bounding box for collision
  - [ ] Render character above voxels (layer management)
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 3.3**: Character Movement (3 days)
  - [ ] Implement horizontal movement (A/D keys)
  - [ ] Add velocity and acceleration
  - [ ] Implement ground detection
  - [ ] Add jump mechanic (Space key)
  - [ ] Apply gravity (constant downward force)
  - [ ] Add movement animations (optional)
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 3.4**: Basic 2D Collision System (4 days)
  - [ ] Implement AABB collision detection
  - [ ] Check character vs voxel collisions
  - [ ] Handle collision resolution (push-out)
  - [ ] Implement ground support detection
  - [ ] Prevent wall clipping
  - [ ] Add ceiling collision
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

**Sprint 3 Deliverables**:
- ✅ Character spawns in Play Mode
- ✅ Character moves left/right with A/D
- ✅ Character jumps with Space
- ✅ Character collides with solid blocks
- ✅ Gravity pulls character down
- ✅ Can switch between Play and Edit modes

**Acceptance Criteria**:
- [ ] Character doesn't fall through ground
- [ ] Character can't walk through walls
- [ ] Jump feels responsive (<100ms input lag)
- [ ] Character maintains 2D movement (no Z-depth change)
- [ ] Mode switching works without crashes

**Dependencies**: Sprint 2 complete

---

### Sprint 4: Core Mechanic - Perspective Rotation (Weeks 7-8)

**Theme**: "The Magic Happens"

**Goal**: Implement the core perspective rotation and projection collision

#### Tasks

- [ ] **Task 4.1**: Camera Rotation System (3 days)
  - [ ] Implement 90° rotation on Q/E keys
  - [ ] Lock input during rotation animation
  - [ ] Use GSAP/tween for smooth rotation (0.5s duration)
  - [ ] Track current view state (Front/Right/Back/Left)
  - [ ] Prevent rotation spam (debounce)
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 4.2**: Projection Collision Logic (5 days)
  - [ ] Implement axis-flattening based on current view
  - [ ] Rewrite collision system to ignore depth axis
  - [ ] Front view: check X,Y only (ignore Z)
  - [ ] Right view: check Z,Y only (ignore X)
  - [ ] Back view: check X,Y only (ignore Z)
  - [ ] Left view: check Z,Y only (ignore X)
  - [ ] Add extensive debug visualization
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 4.3**: Position Snapping (2 days)
  - [ ] Detect "visual ground" after rotation
  - [ ] Snap character to nearest platform
  - [ ] Handle falling if no support exists
  - [ ] Prevent snapping through walls
  - [ ] Add smooth transition animation
  - **Assignee**: Frontend Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 4.4**: Goal Detection (1 day)
  - [ ] Check collision with Goal blocks (typeID 4)
  - [ ] Display victory message
  - [ ] Add level complete animation
  - [ ] Reset option after victory
  - **Assignee**: Frontend Developer
  - **Priority**: P1 (High)

- [ ] **Task 4.5**: Debug Panel (1 day)
  - [ ] Display current view state
  - [ ] Display character coordinates
  - [ ] Display raycast/collision status
  - [ ] Add force rotate button
  - [ ] Toggle debug visualization
  - **Assignee**: Frontend Developer
  - **Priority**: P1 (High)

**Sprint 4 Deliverables**:
- ✅ Camera rotates 90° smoothly on Q/E press
- ✅ Projection collision works correctly
- ✅ Character can walk on "visually connected" platforms
- ✅ Depth flattening works for all 4 views
- ✅ Goal detection triggers victory

**Acceptance Criteria**:
- [ ] Rotation completes in exactly 0.5 seconds
- [ ] No input accepted during rotation
- [ ] Character doesn't clip during rotation
- [ ] Can solve "broken bridge" test level
- [ ] Debug panel shows accurate information

**Dependencies**: Sprint 3 complete

---

### Sprint 5: Polish & MVP Validation (Weeks 9-10)

**Theme**: "Ship It!"

**Goal**: Polish, test, and validate MVP success criteria

#### Tasks

- [ ] **Task 5.1**: Create Test Levels (2 days)
  - [ ] Design "Infinite Loop" test level
  - [ ] Design "Broken Bridge" test level
  - [ ] Design "No Clipping" test level
  - [ ] Create tutorial level
  - [ ] Package levels as JSON files
  - **Assignee**: Game Designer / Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 5.2**: MVP Validation Testing (3 days)
  - [ ] Run Infinite Loop Test
  - [ ] Run Broken Bridge Test
  - [ ] Run No Clipping Test
  - [ ] Document any failures
  - [ ] Fix critical bugs found during testing
  - **Assignee**: QA / Developer
  - **Priority**: P0 (Critical)

- [ ] **Task 5.3**: UI/UX Polish (2 days)
  - [ ] Add rotation hints ([Q] [E] indicators)
  - [ ] Improve visual feedback for player actions
  - [ ] Add transition effects
  - [ ] Improve button/menu aesthetics
  - [ ] Add loading screen
  - **Assignee**: Frontend Developer
  - **Priority**: P2 (Medium)

- [ ] **Task 5.4**: Performance Optimization (2 days)
  - [ ] Profile render performance
  - [ ] Implement frustum culling if needed
  - [ ] Optimize collision checks
  - [ ] Reduce draw calls
  - [ ] Ensure 60 FPS target met
  - **Assignee**: Frontend Developer
  - **Priority**: P1 (High)

- [ ] **Task 5.5**: Documentation (1 day)
  - [ ] Write README.md with setup instructions
  - [ ] Document controls
  - [ ] Create quick start guide
  - [ ] Add code comments
  - [ ] Document level JSON format
  - **Assignee**: Technical Writer / Developer
  - **Priority**: P2 (Medium)

- [ ] **Task 5.6**: Deployment (1 day)
  - [ ] Build production bundle
  - [ ] Deploy to hosting (GitHub Pages, Netlify, Vercel)
  - [ ] Test in production environment
  - [ ] Share public URL
  - **Assignee**: DevOps / Developer
  - **Priority**: P1 (High)

**Sprint 5 Deliverables**:
- ✅ All MVP tests pass
- ✅ Demo runs at 60 FPS
- ✅ Documentation complete
- ✅ Demo deployed and accessible online
- ✅ Example levels included

**Acceptance Criteria**:
- [ ] All 3 MVP tests pass successfully
- [ ] Game loads in <3 seconds
- [ ] Works on Chrome, Firefox, and Edge
- [ ] README has clear setup instructions
- [ ] Public demo URL is live

**Dependencies**: Sprint 4 complete

---

## 🎮 MVP Success Criteria (Final Validation)

Before considering MVP complete, the following tests MUST pass:

### Test 1: Infinite Loop Test
**Setup**: Create a square path made of 4 blocks arranged in a hollow square  
**Test Steps**:
1. Place character at starting block
2. Rotate camera 90° (Q or E)
3. Move character forward
4. Repeat steps 2-3 continuously
**Expected Result**: Character can endlessly circle the path without falling or clipping

### Test 2: Broken Bridge Test
**Setup**: Create two platforms separated by depth (far from each other on Z-axis) in Front view  
**Test Steps**:
1. Character stands on first platform
2. Gap exists that can't be jumped in current view
3. Rotate camera 90°
4. Platforms now appear connected in new view
5. Character walks across
**Expected Result**: Character successfully walks across previously disconnected platforms

### Test 3: No Clipping Test
**Setup**: Create enclosed space with walls on all sides  
**Test Steps**:
1. Place character inside enclosed space
2. Rotate camera through all 4 views (0°, 90°, 180°, 270°)
3. Attempt to move in all directions
4. Repeat rotation while moving
**Expected Result**: 
- Character never clips through walls
- Character never falls out of world bounds
- Physics remain stable during rotations

---

## 📋 Sprint Tracking Template

Use this checklist format for each sprint:

### Sprint [N] Status

**Sprint Goal**: [Goal description]  
**Start Date**: [Date]  
**End Date**: [Date]  
**Status**: 🟢 On Track | 🟡 At Risk | 🔴 Blocked

#### Progress
- [ ] Task 1 - Status: [Not Started | In Progress | Done]
- [ ] Task 2 - Status: [Not Started | In Progress | Done]
- [ ] Task 3 - Status: [Not Started | In Progress | Done]

#### Blockers
- [List any blockers here]

#### Notes
- [Any important notes or decisions]

---

## 🚀 Post-MVP Roadmap (Future Enhancements)

After MVP is complete and validated, consider these enhancements:

### Phase 2: Content & Polish (Weeks 11-14)
- [ ] Add sound effects (footsteps, rotation, goal)
- [ ] Add background music
- [ ] Improve character model (animated sprite/model)
- [ ] Add particle effects on rotation
- [ ] Implement shadows and better lighting
- [ ] Create 5-10 hand-crafted puzzle levels
- [ ] Add level progression system

### Phase 3: Extended Features (Weeks 15-18)
- [ ] Add collectible items in levels
- [ ] Implement moving platforms
- [ ] Add hazards/traps
- [ ] Create level timer/scoring system
- [ ] Add local storage for save progress
- [ ] Implement level sharing via URL export

### Phase 4: Community Features (Weeks 19-22)
- [ ] Build level sharing platform
- [ ] Add community level browser
- [ ] Implement level rating system
- [ ] Create tutorial level system
- [ ] Add analytics for level difficulty tracking
- [ ] Mobile touch controls support

---

## 📊 Risk Management

### High Priority Risks

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|---------------------|
| Projection collision too complex | High | Medium | Extensive debug visualization, incremental testing |
| Performance issues with many voxels | Medium | Medium | Grid size limits, frustum culling, object pooling |
| Camera rotation causes motion sickness | Medium | Low | Adjustable rotation speed, clear visual feedback |
| Browser compatibility issues | Low | Low | Target modern browsers, provide requirements page |

### Dependencies

| Dependency | Criticality | Backup Plan |
|------------|-------------|-------------|
| Three.js library | Critical | Well-established library, low risk |
| Modern browser support (WebGL) | Critical | Provide clear browser requirements |
| Hosting platform | Medium | Multiple free options available |

---

## 🎯 Key Performance Indicators (KPIs)

Track these metrics to measure project success:

### Development KPIs
- **Sprint Velocity**: Tasks completed per sprint (target: 90%+)
- **Code Quality**: Zero critical bugs in production
- **Performance**: Maintain 60 FPS with up to 500 voxels
- **Test Pass Rate**: 100% of MVP tests passing

### Product KPIs
- **Load Time**: < 3 seconds on broadband connection
- **Usability**: User can understand controls within 1 minute
- **Level Creation**: User can create a basic level in < 5 minutes
- **Browser Support**: Works on 3 major browsers (Chrome, Firefox, Edge)

---

## 📞 Team & Responsibilities

| Role | Responsibilities | Time Commitment |
|------|------------------|-----------------|
| **Frontend Developer** | Core implementation, Three.js development | 100% (10 weeks) |
| **Game Designer** | Level design, puzzle creation, UX design | 30% (3 weeks) |
| **QA Tester** | Testing, bug reporting, validation | 20% (2 weeks) |
| **Project Manager** | Sprint planning, tracking, stakeholder communication | 20% (2 weeks) |

---

## 🔄 Sprint Ceremonies

### Weekly Schedule

**Monday (Sprint Start)**
- Sprint Planning (if new sprint)
- Review sprint backlog
- Assign tasks

**Wednesday (Mid-Sprint)**
- Stand-up / Check-in
- Review progress
- Identify blockers

**Friday (Sprint End/Week End)**
- Demo completed work
- Sprint retrospective (if sprint end)
- Update roadmap

---

## 📝 Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-01-27 | 1.0 | Initial MVP roadmap created | System |

---

## ✅ Sign-off

**Approved by**: [Stakeholder name]  
**Approval Date**: [Date]  
**Next Review Date**: [Date]

---

*This roadmap is a living document and will be updated as the project progresses.*
