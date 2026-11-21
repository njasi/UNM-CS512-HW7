import { RayObject } from "PotatoEngine/src/objects";
import { MAT_METAL, MAT_STAR2 } from "../materials";
import { RENDER_PASS_RAY } from "PotatoEngine/src/renderers";
import { SHADER_PROGRAM_RAY } from "../programs";

export const OBJECT_PROJECTOR_ORB = "OBJECT_PROJECTOR_ORB";
export const OBJECT_PROJECTOR_LIGHT = "OBJECT_PROJECTOR_LIGHT";

/**
 * Add the star projector to the scene
 * @param {Scene} scene
 */
export function addProjector(scene, position = [0, 0, 0]) {
  const [x, y, z] = position;
  let projectorOrb = new RayObject(
    OBJECT_PROJECTOR_ORB,
    RayObject.OBJECT_TYPE_SPHERE,
    {
      radius: 2,
      position: [x, y, z],
      rotation: [Math.PI / 2, 0, 0],
      materialLabel: MAT_STAR2,
    },
  );
  projectorOrb.setUpdateCB(updateProjector);

  let projectorLight = new RayObject(
    OBJECT_PROJECTOR_LIGHT,
    RayObject.OBJECT_TYPE_SPHERE,
    {
      radius: 1,
      lightPower: 20,
      position: [x, y, z],
      light: true,
      materialIndex: -2,
    },
  );

  let projectorBase = new RayObject(
    "projectorBase",
    RayObject.OBJECT_TYPE_CONE,
    {
      height: 3,
      radius: 1.5,
      position: [x, y - 2.5, z],
      materialLabel: MAT_METAL,
    },
  );

  let projectorBase2 = new RayObject(
    "projectorBase2",
    RayObject.OBJECT_TYPE_CONE,
    {
      height: 3,
      radius: 1.5,
      rotation: [Math.PI, 0, 0],
      position: [x, y - 5.5, z],
      materialLabel: MAT_METAL,
    },
  );
  let projectorBase3 = new RayObject(
    "projectorBase3",
    RayObject.OBJECT_TYPE_CONE,
    {
      height: 7,
      radius: 2.5,
      position: [x, y - 7.5, z],
      materialLabel: MAT_METAL,
    },
  );

  scene.addObject(projectorOrb, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(projectorBase, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(projectorBase2, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(projectorBase3, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  scene.addObject(projectorLight, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
}

function updateProjector(dt) {
  this.rotation[1] += 0.2 * dt;
}
