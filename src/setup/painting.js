import { RayObject } from "PotatoEngine/src/objects";
import { RENDER_PASS_RAY } from "PotatoEngine/src/renderers";
import { SHADER_PROGRAM_RAY } from "./programs";
import {
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
} from "./materials";

let paintingIndex = 0;
export function addPainting(scene, textureLabel, size = 1) {
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
