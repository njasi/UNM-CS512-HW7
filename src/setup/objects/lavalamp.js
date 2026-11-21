import { addObj } from "../util";
import { RayObject } from "PotatoEngine/src/objects";
import { MAT_GREEN_GLASS, MAT_METAL, MAT_LAVA } from "../materials";

let lavaLampIndex = 0;

export function addLavaLamp(scene, position) {
  const id = ++lavaLampIndex;
  const [x, y, z] = position;

  addObj(scene, `lavaLampBottleUpper${id}`, RayObject.OBJECT_TYPE_CONE, {
    radius: 1.45,
    height: 2.5,
    position: [x, y + 4.75, z],
    materialLabel: MAT_GREEN_GLASS,
  });
  addObj(scene, `lavaLampBottleLower${id}`, RayObject.OBJECT_TYPE_CONE, {
    radius: 1.45,
    height: 2.5,
    rotation: [Math.PI, 0, 0],
    position: [x, y + 2.25, z],
    materialLabel: MAT_GREEN_GLASS,
  });

  // cap portion
  addObj(scene, `lavaLampCap${id}`, RayObject.OBJECT_TYPE_CONE, {
    radius: 0.7,
    height: 1.2,
    position: [x, y + 5.4, z],
    materialLabel: MAT_METAL,
  });

  // base
  addObj(scene, `lavaLampBaseLower${id}`, RayObject.OBJECT_TYPE_CONE, {
    radius: 1.1,
    height: 1,
    position: [x, y + 1, z],
    materialLabel: MAT_METAL,
  });
  addObj(scene, `lavaLampBaseUpper${id}`, RayObject.OBJECT_TYPE_CONE, {
    radius: 1.1,
    height: 1,
    rotation: [Math.PI, 0, 0],
    position: [x, y + 1.2, z],
    materialLabel: MAT_METAL,
  });

  // bottom light for glow
  addObj(scene, `lavaLampLight${id}`, RayObject.OBJECT_TYPE_SPHERE, {
    radius: 0.3,
    position: [x, y + 2, z],
    light: true,
    lightPower: 3,
    materialLabel: MAT_LAVA,
  });

  // lava moving at different rates and phases
  [
    { radius: 0.4, phase: 0 },
    { radius: 0.2, phase: 1.6 },
    { radius: 0.3, phase: 2.1 },
    { radius: 0.35, phase: 4.2 },
  ].forEach(({ radius, phase }, i) => {
    addObj(
      scene,
      `lavaLampBlob${id}_${i}`,
      RayObject.OBJECT_TYPE_SPHERE,
      {
        radius,
        position: [x, y + 2.5, z],
        materialLabel: MAT_LAVA,
        castShadow: false,
        faces: 5,
        // light: true,
        // lightPower: 0.1,
      },
      function (dt) {
        this._time = (this._time ?? phase) + dt;
        this.position[0] = x + 0.2 * Math.sin(this._time * 0.5 + phase);
        this.position[1] = y + 3 + 1.1 * Math.sin(this._time * 0.7);
        this.position[2] = z + 0.2 * Math.sin(this._time * 0.5 + 2 * phase);
      },
    );
  });
}
