import { Scene } from "PotatoEngine";
import { Texture2DArray } from "PotatoEngine/src/materials";
import { ProceduralMaterialRenderPass } from "PotatoEngine/src/renderers";

export const IMAGE_TEXTURE_SET = "textureSet";
export const PROCEDURAL_TEXTURE_SET =
  ProceduralMaterialRenderPass.TEXTURE_2DARRAY_PROCEDURAL;

/**
 * Add textures to the scene
 * @param {Scene} scene
 */
export function addTextures(scene) {
  let textureSet = new Texture2DArray(scene.gl, 1920, 1920, 10, {
    label: IMAGE_TEXTURE_SET,
  });
  textureSet.load("./public/textures/image.png", 0);
  textureSet.load("./public/textures/image.png", 1);
  scene.addTexture(IMAGE_TEXTURE_SET, textureSet, { load: false });
}
