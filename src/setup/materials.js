import {
  ProceduralMaterial,
  RayMaterial,
  RayTextureDescriptor,
  TD,
} from "PotatoEngine/src/materials";
import { SHADER_PROGRAM_PROCEDURAL, SHADER_PROGRAM_RAY } from "./programs";
import { IMAGE_TEXTURE_SET, PROCEDURAL_TEXTURE_SET } from "./textures";
import { rgb } from "PotatoEngine/src/util/color";

export const MAT_BLUE_GLASS = "blueGlass";
export const MAT_WOOD = "wood";
export const MAT_GREEN_DIFFUSE = "greenDiffuse";
export const MAT_GLASS_TILE = "glassTile";
export const MAT_WALLPAPER_DINO = "MAT_WALLPAPER_DINO";
export const MAT_PROCEDURAL_POPCORN = "MAT_PROCEDURAL_POPCORN";
export const MAT_CARPET = "MAT_CARPET";

// star mat collection
const MAT_STAR = "MAT_STAR";
export const MAT_STAR0 = "MAT_STAR0";
export const MAT_STAR1 = "MAT_STAR1";
export const MAT_STAR2 = "MAT_STAR2";
export const MAT_STAR3 = "MAT_STAR3";
export const MAT_STAR4 = "MAT_STAR4";
export const MAT_STAR5 = "MAT_STAR5";

export const MAT_PAINTING = "MAT_PAINTING";
export const MAT_PAINTING0 = "MAT_PAINTING0";
export const MAT_PAINTING1 = "MAT_PAINTING1";
export const MAT_PAINTING2 = "MAT_PAINTING2";
export const MAT_PAINTING3 = "MAT_PAINTING3";
export const MAT_PAINTING4 = "MAT_PAINTING4";
export const MAT_PAINTING5 = "MAT_PAINTING5";
export const MAT_PAINTING6 = "MAT_PAINTING6";
export const MAT_PAINTING7 = "MAT_PAINTING7";
export const MAT_PAINTING8 = "MAT_PAINTING8";
export const MAT_PAINTING9 = "MAT_PAINTING9";
export const PAINTING_RATIOS = {
  MAT_PAINTING0: 1,
  MAT_PAINTING1: 1,
  MAT_PAINTING2: 1,
  MAT_PAINTING3: 1,
  MAT_PAINTING4: 1,
  MAT_PAINTING5: 1,
  MAT_PAINTING6: 1,
  MAT_PAINTING7: 1,
  MAT_PAINTING8: 1,
  MAT_PAINTING9: 1,
};

let glass;

export const PROCEDURAL_MATERIALS = [
  new ProceduralMaterial("tileTest", SHADER_PROGRAM_PROCEDURAL, {
    params: [8],
  }),
  new ProceduralMaterial("tileTest2", SHADER_PROGRAM_PROCEDURAL),
];

/**
 * Add materials to the scene
 */
export function addMaterials(scene) {
  glass = new RayMaterial(MAT_BLUE_GLASS, {
    ka: [0, 0, 1],
    kd: [0, 0, 1],
    ks: [0, 0, 1],
    refractiveIndex: 2.42,
  });

  let diffuse = new RayMaterial(MAT_GREEN_DIFFUSE, {
    ka: [0, 1, 0],
    kd: [0, 1, 0],
    ks: [0, 1, 0],
  });

  let wood = new RayMaterial(MAT_WOOD, {
    ka: rgb(129, 60, 33),
    kd: rgb(129, 60, 33),
    ks: [0, 1, 0],
  });

  // test see if we can call a texture function
  // defined in the shader
  let glassTile = new RayMaterial(MAT_GLASS_TILE, {
    ka: [1, 0, 1],
    kd: [1, 0, 1],
    ks: [1, 0, 1],
    refractiveIndex: 2,
    textureInformation: [
      new RayTextureDescriptor(
        TD.SOURCE_FUNCTION,
        TD.BLEND_NORMAL,
        TD.TEXTURE_ALBEDO,
        255,
      ),
    ],
  });

  let wallpaperMaterial = new RayMaterial(MAT_WALLPAPER_DINO, {
    ka: [0.5, 0.5, 0.5],
    kd: [0.5, 0.5, 0.5],
    ks: [0.5, 0.5, 0.5],
    textureMapLabel: IMAGE_TEXTURE_SET,
    textureInformation: [
      new RayTextureDescriptor(
        TD.SOURCE_TEXTURE,
        TD.BLEND_NORMAL,
        TD.TEXTURE_ALBEDO,
        0,
      ),
    ],
  });

  let carpetMaterial = new RayMaterial(MAT_CARPET, {
    ka: [0.5, 0.5, 0.5],
    kd: [0.5, 0.5, 0.5],
    ks: [0.5, 0.5, 0.5],
    textureMapLabel: IMAGE_TEXTURE_SET,
    textureInformation: [
      new RayTextureDescriptor(
        TD.SOURCE_TEXTURE,
        TD.BLEND_NORMAL,
        TD.TEXTURE_ALBEDO,
        1,
      ),
    ],
  });

  const proceduralPopcorn = new RayMaterial(MAT_PROCEDURAL_POPCORN, {
    ka: [0.5, 0.5, 0.5],
    kd: [0.5, 0.5, 0.5],
    ks: [0.5, 0.5, 0.5],
    textureMapLabel: PROCEDURAL_TEXTURE_SET,
    textureInformation: [
      new RayTextureDescriptor(
        TD.SOURCE_PROCEDURAL,
        TD.BLEND_NORMAL,
        TD.TEXTURE_ALBEDO,
        0,
      ),
    ],
  });

  scene.addMaterial(wood, SHADER_PROGRAM_RAY);
  scene.addMaterial(glass, SHADER_PROGRAM_RAY);
  scene.addMaterial(diffuse, SHADER_PROGRAM_RAY);
  scene.addMaterial(glassTile, SHADER_PROGRAM_RAY);
  scene.addMaterial(wallpaperMaterial, SHADER_PROGRAM_RAY);
  scene.addMaterial(carpetMaterial, SHADER_PROGRAM_RAY);
  scene.addMaterial(proceduralPopcorn, SHADER_PROGRAM_RAY);

  // star mats
  for (let i = 0; i < 6; i++) {
    const starMat = new RayMaterial(MAT_STAR + i, {
      ka: [0.5, 0.5, 0.5],
      kd: [0.5, 0.5, 0.5],
      ks: [0.5, 0.5, 0.5],
      refractiveIndex: 1.02,
      textureMapLabel: IMAGE_TEXTURE_SET,
      textureInformation: [
        new RayTextureDescriptor(
          TD.SOURCE_TEXTURE,
          TD.BLEND_NORMAL,
          TD.TEXTURE_ALBEDO,
          2 + i,
        ),
      ],
    });
    scene.addMaterial(starMat, SHADER_PROGRAM_RAY);
  }

  // painting mats
  for (let i = 0; i < 10; i++) {
    scene.addMaterial(
      new RayMaterial(MAT_PAINTING + i, {
        ka: [0.5, 0.5, 0.5],
        kd: [0.5, 0.5, 0.5],
        ks: [0.5, 0.5, 0.5],
        refractiveIndex: 1.02,
        textureMapLabel: IMAGE_TEXTURE_SET,
        textureInformation: [
          new RayTextureDescriptor(
            TD.SOURCE_TEXTURE,
            TD.BLEND_NORMAL,
            TD.TEXTURE_ALBEDO,
            8 + i,
          ),
        ],
      }),
      SHADER_PROGRAM_RAY,
    );
  }
}
