import { ProceduralMaterialProgram, RayShaderProgram } from "PotatoEngine/src/shaders";

export const SHADER_PROGRAM_RAY = "ray";
export const SHADER_PROGRAM_PROCEDURAL = "SHADER_PROGRAM_PROCEDURAL";
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

  scene.createProgram(
    SHADER_PROGRAM_PROCEDURAL,
    "./PotatoEngine/src/shaders/vertex/procedural.vert",
    "./PotatoEngine/src/shaders/fragment/proceduralTile.frag",
    ProceduralMaterialProgram,
  );

  // rayProgram.uniforms.u_ambientStrength = 0.001;
}
