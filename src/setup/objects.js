import { RENDER_PASS_RAY } from "PotatoEngine/src/renderers";
import { MAT_CARPET, MAT_WALLPAPER_DINO } from "./materials";
import { Scene } from "PotatoEngine";
import { SHADER_PROGRAM_RAY } from "./programs";

const { RayObject } = require("PotatoEngine/src/objects");

/**
 * Initalize all the objects in the starting scene
 * - the segments of the arm
 * @param {Scene} scene
 */
export function initSceneObjects(scene) {
  let cube = new RayObject("roomBox", RayObject.OBJECT_TYPE_INVERTED_CUBE, {
    halfSize: 30,
    position: [0, 0, 0],
    materialLabel: MAT_WALLPAPER_DINO,
    uvScale: 3,
  });

  let lightSphere = new RayObject("roomLight", RayObject.OBJECT_TYPE_SPHERE, {
    radius: 0.5,
    light: true,
    lightPower: 10,
    materialIndex: -2,
    position: [0, 14, 0],
  });

  let ceiling = new RayObject("ceiling", RayObject.OBJECT_TYPE_PLANE, {
    width: 60,
    depth: 60,
    position: [0, 15, 0],
  });

  let floor = new RayObject("floor", RayObject.OBJECT_TYPE_PLANE, {
    width: 60,
    depth: 60,
    position: [0, -14, 0],
    materialLabel: MAT_CARPET,
    uvScale: 5,
  });

  scene.addObject(cube, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(ceiling, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(floor, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(lightSphere, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
}
