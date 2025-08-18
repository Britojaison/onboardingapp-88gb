# 3D Models Directory

## 88GB Logo 3D Model

### File Placement
Place your 3D logo file here with one of these names:
- `88gb-logo.glb` (preferred - GLTF Binary format)
- `88gb-logo.gltf` (GLTF format with separate files)
- `88gb-logo.fbx` (FBX format)
- `88gb-logo.obj` (OBJ format)

### Supported Formats
The 3D logo component supports the following formats:
1. **GLB (GLTF Binary)** - **Recommended**
   - Single file containing all assets
   - Smaller file size
   - Faster loading
   - Best browser support

2. **GLTF** - Good alternative
   - JSON format with separate asset files
   - Good for debugging
   - Widely supported

3. **FBX** - Supported with additional loader
   - Industry standard
   - May require FBXLoader

4. **OBJ** - Basic support
   - Simple geometry only
   - No materials/textures included

### Model Requirements
For best performance and appearance:
- **File size**: Keep under 1MB for fast loading
- **Polygons**: Optimize to 1000-5000 triangles max
- **Materials**: Use simple materials for web performance
- **Scale**: Model should be roughly 1-2 units in size
- **Origin**: Center the model at (0,0,0)
- **Rotation**: Model should face forward by default

### Current Settings
The 3D logo component is configured to:
- Look for `/models/88gb-logo.glb` by default
- Rotate continuously on Y-axis
- Scale to fit navbar dimensions (40x40px)
- Use proper lighting for visibility

### How to Update
1. Place your 3D file in this directory
2. If using a different filename, update the `modelPath` prop in the Logo3D component
3. The component will automatically load and display your 3D model

### Fallback Behavior
If the 3D model fails to load, the component will:
1. Show a wireframe placeholder during loading
2. Fall back to a simple 3D text logo if loading fails
3. Continue rotating animation regardless

### Testing
To test your 3D model:
1. Place the file in this directory
2. Refresh the application
3. Check browser console for any loading errors
4. Verify the model appears and rotates in the navigation bar
