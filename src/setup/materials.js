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
export const MAT_CEILING = "MAT_CEILING";
export const MAT_MIRROR = "MAT_MIRROR";

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

export const MAT_METAL = "MAT_METAL";
export const MAT_LAVA = "MAT_LAVA";
export const MAT_GREEN_GLASS = "MAT_GREEN_GLASS";

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

  const greenGlass = new RayMaterial(MAT_GREEN_GLASS, {
    ka: rgb(16, 211, 5),
    kd: rgb(16, 211, 5),
    ks: [1, 1, 1],
    refractiveIndex: 1.02,
  });
  const mirror = new RayMaterial(MAT_MIRROR, {
    ka: [1, 1, 1],
    kd: [1, 1, 1],
    ks: [1, 1, 1],
    reflectivity: 0.99,
  });
  const diffuse = new RayMaterial(MAT_GREEN_DIFFUSE, {
    ka: [0, 0, 0],
    kd: [0, 1, 0],
    ks: [0, 1, 0],
  });

  const lava = new RayMaterial(MAT_LAVA, {
    ka: rgb(16, 211, 5),
    kd: rgb(16, 211, 5),
    ks: [0, 0, 1],
    refractiveIndex: 1.0,
  });

  const ceiling = new RayMaterial(MAT_CEILING, {
    ka: [0, 0, 0],
    kd: rgb(226, 222, 255),
    ks: [0, 0, 1],
    refractiveIndex: 1.0,
  });

  const metal = new RayMaterial(MAT_METAL, {
    ka: [0, 0, 0],
    kd: rgb(90, 90, 90),
    ks: [1, 1, 1],
    refractiveIndex: 1.0,
    reflectivity:0.2
  });

  const wood = new RayMaterial(MAT_WOOD, {
    ka: [0, 0, 0],
    kd: rgb(129, 60, 33),
    ks: [0, 1, 0],
  });

  // test see if we can call a texture function
  // defined in the shader
  const glassTile = new RayMaterial(MAT_GLASS_TILE, {
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

  const wallpaperMaterial = new RayMaterial(MAT_WALLPAPER_DINO, {
    ka: [0, 0, 0],
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

  const carpetMaterial = new RayMaterial(MAT_CARPET, {
    ka: [0, 0, 0],
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
    ka: [0, 0, 0],
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
  scene.addMaterial(lava, SHADER_PROGRAM_RAY);
  scene.addMaterial(metal, SHADER_PROGRAM_RAY);
  scene.addMaterial(glass, SHADER_PROGRAM_RAY);
  scene.addMaterial(ceiling, SHADER_PROGRAM_RAY);
  scene.addMaterial(greenGlass, SHADER_PROGRAM_RAY);
  scene.addMaterial(mirror, SHADER_PROGRAM_RAY);
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
        ka: [1, 1, 1],
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
