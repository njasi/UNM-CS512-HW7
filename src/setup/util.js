import { RENDER_PASS_RAY } from "PotatoEngine/src/renderers";
import { SHADER_PROGRAM_RAY } from "./programs";
import { RayObject } from "PotatoEngine/src/objects";

/**
 * helper for adding objects because im getting tired of it
 * @param {*} scene
 * @param {*} label
 * @param {*} type
 * @param {*} options
 * @param {*} updateCB
 * @returns
 */
export function addObj(scene, label, type, options, updateCB) {
  const object = new RayObject(label, type, options);
  if (updateCB) {
    object.setUpdateCB(updateCB);
  }

  scene.addObject(object, SHADER_PROGRAM_RAY, undefined, {
    passes: [RENDER_PASS_RAY],
  });
  return object;
}
