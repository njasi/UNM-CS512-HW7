# UNM CS512 HW 6

The plan for this assignment is to make 


## Assignment Requirements
This is our last homework assignment for this course, and it is probably going to be the most visually stunning one. In this assignment, you are going to implement a ray tracer that can render multiple geometric objects with realistic (even superrealistic) lighting effects. You may reuse the objects or scene setup from your previous assignments or create new one.

hw7.htmlDownload hw7.html

Here is the starter code. It covers a sphere with diffuse surface and a cube with reflective surface. You can reuse the primitives, or implement your new primitives.

- [x] Ray tracing with local Phong, shadow, reflection and refraction (10 pts) 
    
    At least one geometry is transparent and glass-like (refraction). All the geometries need to be rendered through ray tracing with recursive process (use loop to simulate the recursive process as GLSL doesn't support recursive functions).

    - [x] local illumination (Phong). It is fine to only have Phong model partially implemented in order to get a more visually appealing effect. (1/11)
    - [x] ray traced shadow (2/11)
    - [x] intersections (2/11)
    - [x] reflection (2/11) 
        - 2 mirrors
    - [x] refraction (3/11) (It is fine to use any of "**choose**, blend or **sample**" refraction approaches we covered in class)
        - refraction can be seen in the glassy materials: lava lamp, paintings, projector sphere.
    - attenuation is not necessary but encouraged.

- [x] Multiple light sources (2 pts)
    - lava lamp, star projector

- Interactive user interface and movements (1 pts)
    - At least two additional user interfaces to control parameters or movements (e.g. bounce steps, lighting intensity, shininess, attenuation, etc.) 
    - [x] Scene editor allows updates to every object, material, light, shader program etc
    

- Outstanding visually effects or animation ( +1 bonus pts)

- Your homework must be hosted on GitHub Pages (or another hosting service) so the TA/instructor can directly see the canvas by clicking on the link. Please submit the GitHub Pages link that opens your scene right away, not the link to your GitHub repository

## Files of interest to the grader
- Ray Tracer Shaders
    - [PotatoEngine/src/shaders/fragment/ray.frag](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/shaders/fragment/ray.frag)
    - [PotatoEngine/src/shaders/vertex/ray.vert](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/shaders/vertex/ray.vert)
- Ray Trader Shader Renderpass Setup
    - [PotatoEngine/src/shaders/RayShaderProgram.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/shaders/RayShaderProgram.js)
    - [PotatoEngine/src/renderers/RayRenderPass.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/renderers/RayRenderPass.js)
    - [PotatoEngine/src/renderers/raytracing.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/renderers/raytracing.js)
- Ray Tracer Object / Light / Material management
    - [PotatoEngine/src/renderers/raytracing.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/renderers/raytracing.js) (the below are managed in this one)
    - [PotatoEngine/src/objects/RayObject.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/objects/RayObject.js)
    - [PotatoEngine/src/materials/RayMaterial.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/materials/RayMaterial.js)
    - [PotatoEngine/src/materials/RayTextureDescriptor.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/materials/RayTextureDescriptor.js)
    - [PotatoEngine/src/materials/Texture2DArray.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/materials/Texture2DArray.js)
- Scene Management (same structure as previous assignments)
    - [PotatoEngine/src/Scene.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/Scene.js)
- Misc    
    - [PotatoEngine/src/util/transformations.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/util/transformations.js) updated to add mat4 inverse, mat3 transpose mat4 to mat3.
    - [PotatoEngine/src/controls/sceneEditor.js](https://github.com/njasi/UNM-CS512-PotatoEngine/blob/main/src/controls/sceneEditor.js) Built in scene editing / debug tabs
## Development

```sh
npm i
npm i ./PotatoEngine
npm run start
```

## Production Build
```sh
git checkout gh-pages
rm -rf ./dist
npm run build
```
