# Next Pending Task: Visual & Audio Polish (Sprint 5)

Based on the roadmap and current status, the next critical phase is **Sprint 5: Polish & Release**. The most significant missing features are **Audio** and **Visual Effects**.

## Proposed Plan

I will implement two new systems to enhance the "Game Feel":

### 1. 🔊 AudioSystem (Web Audio API)
Since we want to keep the project self-contained without external assets, I will build a synthesizer-based audio system using the native **Web Audio API**. This will generate retro-style sound effects procedurally.

*   **Features**:
    *   **Jump**: Rising pitch oscillator.
    *   **Land**: Low thud/noise.
    *   **Key Pickup**: High-pitched chime/coin sound.
    *   **Rotate**: Whoosh effect.
    *   **Level Complete**: Victory melody.
*   **Integration**: Listen to `EventManager` events to trigger sounds automatically.

### 2. ✨ ParticleSystem (Three.js)
A lightweight particle engine to provide visual feedback for actions.

*   **Features**:
    *   **Dust**: Small particles when landing or walking.
    *   **Sparkles**: Emitted from Keys and Goal.
    *   **Explosion**: Effect when triggering a Trap.
*   **Implementation**: Use `THREE.InstancedMesh` for performance-friendly particles.

### 3. 🔌 Integration
*   Register both systems in `GameManager`.
*   Connect them to the existing `EventManager`.

## Work Breakdown

| Task | Description | Priority |
| :--- | :--- | :--- |
| **1. AudioSystem** | Create `src/systems/AudioSystem.ts` with procedural SFX generators. | 🔥 High |
| **2. ParticleSystem** | Create `src/systems/ParticleSystem.ts` for visual effects. | 🟡 Medium |
| **3. Integration** | Update `GameManager` to initialize and update these systems. | 🟡 Medium |

## Validation
*   **Audio**: Verify sounds play on specific events (Jump, Rotate, Collect).
*   **Visuals**: Verify particles appear and fade out correctly without performance drops.

Shall I proceed with implementing the **AudioSystem** and **ParticleSystem**?