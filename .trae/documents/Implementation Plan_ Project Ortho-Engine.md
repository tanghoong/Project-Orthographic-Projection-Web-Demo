# Implementation Plan: Orthographic Projection Web Demo

Based on the PRD and Roadmap, here is the concrete execution plan for the initial phase (Sprint 1 & 2).

## 1. Technical Stack Selection
*   **Build Tool**: **Vite** (Faster dev server, optimized builds)
*   **Language**: **TypeScript** (Essential for 3D math, type safety in engine logic)
*   **3D Engine**: **Three.js** (Core requirement)
*   **Animation**: **GSAP** (For the smooth camera rotation in Sprint 4)
*   **UI**: **HTML/CSS** (Minimal overlay for buttons/hints)

## 2. Directory Structure
I will implement the structure recommended in the PRD, adapted for a modern Vite + TS setup:

```
src/
├── core/
│   ├── Engine.ts          // Main Three.js setup (Scene, Renderer, Loop)
│   ├── InputManager.ts    // Central input handling
│   └── EventBus.ts        // For decoupling systems
├── components/
│   ├── CameraController.ts // Handles Orthographic + Orbit switching
│   └── Voxel.ts           // Voxel mesh generation
├── systems/
│   ├── LevelManager.ts    // Grid data & Serialization
│   └── Raycaster.ts       // For Edit Mode interaction
├── utils/
│   └── Constants.ts       // Configuration (Grid size, colors)
├── main.ts                // Entry point
└── style.css              // Basic UI styles
```

## 3. Immediate Execution Steps (Sprint 1 Focus)

### Step 1: Project Scaffolding (Task 1.1)
*   Initialize Vite project with TypeScript.
*   Install core dependencies: `three`, `gsap`.
*   Install dev dependencies: `@types/three`, `dat.gui` (for debugging).
*   Clean up default Vite boilerplate.

### Step 2: Engine Core (Task 1.2)
*   Implement `Engine` class to encapsulate the boilerplate (scene, light, renderer).
*   Set up the `requestAnimationFrame` loop.
*   Configure the **OrthographicCamera** with correct frustum settings to ensure voxels look isometric/orthographic.

### Step 3: Voxel Rendering (Task 1.3)
*   Create a simple `Voxel` class.
*   Generate a test grid (e.g., a 3x3 platform) to verify rendering.
*   Ensure materials/colors differentiate block types (Solid vs Platform).

### Step 4: Camera Controls (Task 1.4)
*   Integrate `OrbitControls` for the initial "Edit Mode" view.
*   Ensure the camera pivots around the center of the scene (0,0,0).

## 4. Risks & Mitigation
*   **Risk**: Orthographic depth flattening logic (Sprint 4) is complex.
    *   *Mitigation*: We will enforce strict integer-based grid coordinates from Day 1 (Sprint 1/2) to make the math easier later.
*   **Risk**: Performance with many voxels.
    *   *Mitigation*: Use `InstancedMesh` for voxels if the count exceeds ~500, but for MVP `BoxGeometry` is fine. I will start with simple Meshes for simplicity in the Editor.

## 5. Next Action
If you approve this plan, I will immediately begin **Step 1: Project Scaffolding**.
