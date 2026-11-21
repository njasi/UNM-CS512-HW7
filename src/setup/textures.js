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
  let textureSet = new Texture2DArray(scene.gl, 1024, 1024, 64, {
    label: IMAGE_TEXTURE_SET,
  });
  textureSet.load("./public/textures/wallpaper_dino_1024.png", 0);
  textureSet.load("./public/textures/carpet_blue_1024.jpg", 1);
  textureSet.load("./public/textures/milky_1024.jpg", 2);
  textureSet.load("./public/textures/stars_1_1024.jpg", 3);
  textureSet.load("./public/textures/stars_2_1024.jpg", 4);
  textureSet.load("./public/textures/stars_3_1024.jpg", 5);
  textureSet.load("./public/textures/stars_cartoon_1024.jpg", 6);
  textureSet.load("./public/textures/milky_1024.jpg", 7);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 8);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 9);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 10);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 11);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 12);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 13);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 14);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 15);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 16);
  textureSet.load("./public/textures/boldandbrash_square.jpg", 17);

  scene.addTexture(IMAGE_TEXTURE_SET, textureSet, { load: false });
}
