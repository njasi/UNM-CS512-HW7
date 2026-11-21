import { RENDER_PASS_RAY } from "PotatoEngine/src/renderers";
import {
  MAT_CARPET,
  MAT_STAR1,
  MAT_STAR2,
  MAT_WALLPAPER_DINO,
  MAT_WOOD,
  MAT_PAINTING0,
  MAT_PAINTING1,
  MAT_PAINTING2,
  MAT_PAINTING3,
  MAT_PAINTING4,
  MAT_PAINTING5,
  MAT_PAINTING6,
  MAT_PAINTING7,
  MAT_PAINTING8,
  MAT_PAINTING9,
  PAINTING_RATIOS,
  MAT_PAINTING,
} from "./materials";
import { Scene } from "PotatoEngine";
import { SHADER_PROGRAM_RAY } from "./programs";

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
  addProjector(scene);
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
    materialIndex: -2,
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

  addSiding(scene);
  addRoomDecorations(scene);
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
    materialIndex: -2,
    position: [-29.8, -3, -9],
  });
  scene.addObject(door, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });

  scene.addObject(doorKnob, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });

  for (let i = 0; i < 10; i++) {
    addPainting(scene, MAT_PAINTING + i, Math.random() * 2 + 0.5);
  }
}

/**
 *
 * @param {Scene} scene
 */
function addProjector(scene) {
  let projectorOrb = new RayObject(
    "projectorOrb",
    RayObject.OBJECT_TYPE_SPHERE,
    {
      radius: 2,
      position: [0, 0, 0],
      rotation: [Math.PI / 2, 0, 0],
      materialLabel: MAT_STAR2,
    },
  );
  projectorOrb.setUpdateCB(updateProjector);

  let projectorLight = new RayObject(
    "projectorLight",
    RayObject.OBJECT_TYPE_SPHERE,
    {
      radius: 1,
      lightPower: 5,
      position: [0, 0, 0],
      light: true,
      materialIndex: -2,
    },
  );

  let projectorBase = new RayObject(
    "projectorBase",
    RayObject.OBJECT_TYPE_CUBE,
    {
      halfSize: 1.5,
      position: [0, -3, 0],
    },
  );

  scene.addObject(projectorOrb, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(projectorBase, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(projectorLight, SHADER_PROGRAM_RAY, undefined, {
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

let paintingIndex = 0;
function addPainting(scene, textureLabel, size = 1) {
  paintingIndex++;
  const ratio = PAINTING_RATIOS[textureLabel] ?? 1;

  const height = 4 * size;
  const width = height * ratio;
  const frameBorder = 0.2 * size;
  const frameWidth = width + frameBorder * 2;
  const frameHeight = height + frameBorder * 2;

  // choose a wall and stay away from floor/ceiling
  const wall = Math.floor(Math.random() * 4);
  const horizontalLimit = 30 - Math.max(frameWidth, frameHeight) / 2 - 1;
  const alongWall = (Math.random() * 2 - 1) * horizontalLimit;
  const y = -5 + frameHeight / 2 + 2 + Math.random() * (20 - frameHeight - 2);

  let frameOptions;
  let canvasOptions;

  if (wall < 2) {
    // walls are running along x
    const z = wall === 0 ? 29.85 : -29.85;
    const inwardOffset = wall === 0 ? -0.08 : 0.08;

    frameOptions = {
      width: frameWidth,
      depth: 0.15,
      height: frameHeight,
      position: [alongWall, y, z],
      materialLabel: MAT_WOOD,
    };

    canvasOptions = {
      width,
      depth: 0.05,
      height,
      position: [alongWall, y, z + inwardOffset],
      materialLabel: textureLabel,
      // light:true,
      // lightPower: 0.5
    };
  } else {
    // walls are running along z
    const x = wall === 2 ? 29.85 : -29.85;
    const inwardOffset = wall === 2 ? -0.08 : 0.08;

    frameOptions = {
      width: 0.15,
      depth: frameWidth,
      height: frameHeight,
      position: [x, y, alongWall],
      materialLabel: MAT_WOOD,
    };

    canvasOptions = {
      width: 0.05,
      depth: width,
      height,
      position: [x + inwardOffset, y, alongWall],
      materialLabel: textureLabel,
      // light:true,
      // lightPower: 0.5
    };
  }

  const frame = new RayObject(
    "paintingFrame" + paintingIndex,
    RayObject.OBJECT_TYPE_RECT,
    frameOptions,
  );
  const canvas = new RayObject(
    "paintingCanvas" + paintingIndex,
    RayObject.OBJECT_TYPE_RECT,
    canvasOptions,
  );

  scene.addObject(frame, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(canvas, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
}

function updateProjector(dt) {
  this.rotation[1] += 0.2 * dt;
}
