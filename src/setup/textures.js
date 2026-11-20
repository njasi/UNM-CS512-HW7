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
  let textureSet = new Texture2DArray(scene.gl, 1024, 1024, 10, {
    label: IMAGE_TEXTURE_SET,
  });
  textureSet.load("./public/textures/wallpaper_dino_1024.png", 0);
  textureSet.load("./public/textures/carpet_blue_1024.jpg", 1);
  scene.addTexture(IMAGE_TEXTURE_SET, textureSet, { load: false });
}
