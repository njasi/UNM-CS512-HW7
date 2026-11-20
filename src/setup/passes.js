import { Scene } from "PotatoEngine";
import { SHADER_PROGRAM_RAY } from "./programs";
import { addRayTracingRenderPass } from "PotatoEngine/src/renderers";

/**
 * Add the needed renderpasses to the scene
 * - ray pass
 * - procedural texture pass
 * @param {Scene} scene
 */
export function addRenderPasses(scene) {
  addRayTracingRenderPass(scene, SHADER_PROGRAM_RAY);
}
