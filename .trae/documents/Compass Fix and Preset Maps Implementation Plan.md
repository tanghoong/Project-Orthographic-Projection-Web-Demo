# Compass Fix & Optimization
1.  **Modify `style.css`**:
    *   Refactor `.compass-container` and `.compass-arrow` to ensure the rotation pivot is perfectly centered.
    *   Remove `.play-mode` hiding rule for the compass.
    *   Add `z-index` to ensure visibility.

# Preset Maps Implementation
2.  **Create `src/data/PresetLevels.ts`**:
    *   Define a `PRESET_LEVELS` dictionary containing the voxel data for "Crossroads", "Tower Ascent", and "Dual Forts".
    *   Ensure each map includes `VoxelType.SPAWN` (3-5 points) and `VoxelType.GOAL`.

3.  **Update `LevelManager.ts`**:
    *   Import `PRESET_LEVELS`.
    *   Add `loadPreset(key: string)` method to clear current state and load the preset data.
    *   Add `getPresetList()` method.

4.  **Update `EditorUI.ts`**:
    *   Add a new `<select>` dropdown or button group for "Presets" in the toolbar.
    *   Bind selection events to `levelManager.loadPreset()`.

5.  **Verification**:
    *   Build project.
    *   Verify compass stability during rotation (Spacebar in Edit Mode / Q&E in Play Mode).
    *   Verify loading of each preset map works correctly.