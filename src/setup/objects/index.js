import { RENDER_PASS_RAY } from "PotatoEngine/src/renderers";
import {
  MAT_CARPET,
  MAT_WALLPAPER_DINO,
  MAT_WOOD,
  MAT_PAINTING,
  MAT_CEILING,
  MAT_METAL,
  MAT_MIRROR,
} from "../materials";
import { Scene } from "PotatoEngine";
import { SHADER_PROGRAM_RAY } from "../programs";
import { addLavaLamp } from "./lavalamp";
import { addProjector } from "./projector";
import { addPainting, addPaintings } from "./painting";

const { RayObject } = require("PotatoEngine/src/objects");

/**
 * Initalize all the objects in the starting scene
 * - the segments of the arm
 * @param {Scene} scene
 */
export function initSceneObjects(scene) {
  // let lightSphere = new RayObject("roomLight", RayObject.OBJECT_TYPE_SPHERE, {
  //   radius: 0.5,
  //   light: true,
  //   lightPower: 10,
  //   materialIndex: -2,
  //   position: [0, 14, 0],
  // });

  // scene.addObject(lightSphere, SHADER_PROGRAM_RAY, undefined, {
  //   passes: [RENDER_PASS_RAY],
  // });
  initRoomShape(scene);
  addProjector(scene, [0, -3, 0]);
  addLavaLamp(scene, [15, -5.5, -25]);
  addRoomDecorations(scene);
  addSiding(scene);
  addPaintings(scene)
}

function initRoomShape(scene) {
  let cube = new RayObject("roomBox", RayObject.OBJECT_TYPE_INVERTED_CUBE, {
    halfSize: 30,
    position: [0, 0, 0],
    materialLabel: MAT_WALLPAPER_DINO,
    uvScale: 3,
  });

  let ceiling = new RayObject("ceiling", RayObject.OBJECT_TYPE_PLANE, {
    width: 60,
    depth: 60,
    position: [0, 15, 0],
    materialLabel: MAT_CEILING,
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
}

function addRoomDecorations(scene) {
  let door = new RayObject("door", RayObject.OBJECT_TYPE_RECT, {
    width: 0.1,
    depth: 15,
    height: 25,
    position: [-29.9, -2, -15],
    materialLabel: MAT_WOOD,
  });

  let doorKnob = new RayObject("doorknob", RayObject.OBJECT_TYPE_SPHERE, {
    radius: 0.5,
    materialLabel: MAT_METAL,
    position: [-29.8, -3, -9],
  });
  scene.addObject(door, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });

  scene.addObject(doorKnob, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });

  const wallMirror = new RayObject("wallMirror1", RayObject.OBJECT_TYPE_RECT, {
    width: 1,
    depth: 30,
    height: 20,
    position: [-30.2, 0, 13],
    materialLabel: MAT_MIRROR,
  });

  const wallMirror2 = new RayObject("wallMirror2", RayObject.OBJECT_TYPE_RECT, {
    width: 1,
    depth: 13,
    height: 25,
    position: [30.2, -5, -12],
    materialLabel: MAT_MIRROR,
  });

  scene.addObject(wallMirror, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(wallMirror2, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });

  const dresser = new RayObject("dresser", RayObject.OBJECT_TYPE_RECT, {
    width: 15,
    depth: 7,
    height: 10,
    position: [20, -10, -25],
    materialLabel: MAT_WOOD,
  });
  scene.addObject(dresser, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
}

/**
 *
 * @param {Scene} scene
 */
function addSiding(scene) {
  let siding1 = new RayObject("siding1", RayObject.OBJECT_TYPE_RECT, {
    width: 60,
    depth: 0.1,
    height: 1.5,
    position: [0, -14, 29.9],
    materialLabel: MAT_WOOD,
  });
  let siding2 = new RayObject("siding2", RayObject.OBJECT_TYPE_RECT, {
    width: 60,
    depth: 0.1,
    height: 1.5,
    position: [0, -14, -29.9],
    materialLabel: MAT_WOOD,
  });
  let siding3 = new RayObject("siding3", RayObject.OBJECT_TYPE_RECT, {
    width: 0.1,
    depth: 60,
    height: 1.5,
    position: [29.9, -14, 0],
    materialLabel: MAT_WOOD,
  });
  let siding4 = new RayObject("siding4", RayObject.OBJECT_TYPE_RECT, {
    width: 0.1,
    depth: 60,
    height: 1.5,
    position: [-29.9, -14, 0],
    materialLabel: MAT_WOOD,
  });

  scene.addObject(siding1, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(siding2, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(siding3, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(siding4, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
}
