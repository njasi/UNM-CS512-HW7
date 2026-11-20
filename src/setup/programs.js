import { RayShaderProgram } from "PotatoEngine/src/shaders";

export const SHADER_PROGRAM_RAY = "ray";
export let rayProgram;

/**
 * Add all of the needed programs to the scene
 * @param {Scene} scene
 */
export function addPrograms(scene) {
  rayProgram = scene.createProgram(
    SHADER_PROGRAM_RAY,
    "./PotatoEngine/src/shaders/vertex/ray.vert",
    "./PotatoEngine/src/shaders/fragment/ray.frag",
    RayShaderProgram,
  );

  // rayProgram.uniforms.u_ambientStrength = 0.001;
}
