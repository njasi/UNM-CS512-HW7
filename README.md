# UNM CS512 HW 6

The plan for this assignment is to make 


## Assignment Requirements
This is our last homework assignment for this course, and it is probably going to be the most visually stunning one. In this assignment, you are going to implement a ray tracer that can render multiple geometric objects with realistic (even superrealistic) lighting effects. You may reuse the objects or scene setup from your previous assignments or create new one.

hw7.htmlDownload hw7.html

Here is the starter code. It covers a sphere with diffuse surface and a cube with reflective surface. You can reuse the primitives, or implement your new primitives.

1. Ray tracing with local Phong, shadow, reflection and refraction (10 pts)

At least one geometry is transparent and glass-like (refraction). All the geometries need to be rendered through ray tracing with recursive process (use loop to simulate the recursive process as GLSL doesn't support recursive functions).

    local illumination (Phong). It is fine to only have Phong model partially implemented in order to get a more visually appealing effect. (1/11)
    ray traced shadow (2/11)
    intersections (2/11)
    reflection (2/11)
    refraction (3/11) (It is fine to use any of "choose, blend or sample" refraction approaches we covered in class)
    attenuation is not necessary but encouraged.

2. Multiple light sources (2 pts)

3. Interactive user interface and movements (1 pts)

At least two additional user interfaces to control parameters or movements (e.g. bounce steps, lighting intensity, shininess, attenuation, etc.) 

4. Outstanding visually effects or animation ( +1 bonus pts)

5. Your homework must be hosted on GitHub Pages (or another hosting service) so the TA/instructor can directly see the canvas by clicking on the link. Please submit the GitHub Pages link that opens your scene right away, not the link to your GitHub repository

## Files of interest to the grader
- 

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
