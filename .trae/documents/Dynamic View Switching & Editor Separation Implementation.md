# Implementation Plan: Dynamic View Switching System

I will implement a robust view switching system that allows real-time toggling between 2D Orthographic and 3D Isometric views during gameplay, along with a dedicated mechanism for entering the Level Editor.

## 1. Architecture & State Management
*   **New Enum**: Add `DisplayMode { ORTHO_2D, ISOMETRIC }` to `src/utils/Enums.ts`.
*   **CameraSystem Update**:
    *   Track current `DisplayMode`.
    *   Implement `toggleDisplayMode()` to animate between modes.
    *   **2D Mode**: Respects the current `ViewState` (Front, Right, Back, Left) and positions camera accordingly (e.g., Front at `0, 10, 30`).
    *   **3D ISO Mode**: Moves camera to `CONSTANTS.CAMERA.VIEW_PRESETS.ISOMETRIC` (`20, 20, 20`).
    *   Use `GSAP` for smooth transitions (0.5s duration) to prevent disorientation.

## 2. Input Handling (`GameManager.ts`)
*   **Tab Key**: Re-bind `Tab` key to trigger `cameraSystem.toggleDisplayMode()` instead of switching Game Modes.
    *   *Note*: This allows players to check depth (ISO view) while jumping or solving puzzles in Play Mode.
*   **Edit Mode Activation**:
    *   Remove `Tab` toggle for Edit Mode.
    *   Add event listener for `GameEventType.ENTER_EDIT_MODE`.
    *   Add event listener for `GameEventType.ENTER_PLAY_MODE`.

## 3. UI/UX Design (`EditorUI.ts`)
*   **HUD Update (Play Mode)**:
    *   Add **"Edit Level"** button (top-right corner).
    *   Add **View Mode Indicator** (e.g., "View: 2D" / "View: 3D").
*   **Toolbar Update (Edit Mode)**:
    *   Add **"Play Level"** button (prominent position).
*   **Visual Feedback**:
    *   Update compass/indicators to reflect the current view state.

## 4. Integration Steps
1.  **Enums**: Define `DisplayMode`.
2.  **CameraSystem**: Implement `toggleDisplayMode` with GSAP animations.
3.  **EditorUI**: Add UI buttons and bind them to `EventManager`.
4.  **GameManager**: Wire up `Tab` key and new UI events.

## 5. Verification
*   **Test 1**: Press `Tab` in Play Mode -> Camera smoothly transitions to Isometric view.
*   **Test 2**: Press `Tab` again -> Camera returns to the previous 2D angle (e.g., Side View).
*   **Test 3**: Jump while in ISO view -> Character physics and rendering remain correct.
*   **Test 4**: Click "Edit Level" -> Game correctly switches to Edit Mode.

This plan addresses the user's need to visualize depth during gameplay (fixing the "jumping in 3D ISO" issue) while maintaining a clean separation between Playing and Editing.