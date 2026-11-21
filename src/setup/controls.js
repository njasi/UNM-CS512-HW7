import { addPaintings } from "./objects/painting";
import { OBJECT_PROJECTOR_ORB } from "./objects/projector";
import { SHADER_PROGRAM_RAY } from "./programs";

/**
 * Attach event listeners to the html elements
 */
export function setupInputControls(scene) {
  const rayProgram = scene.getProgram(SHADER_PROGRAM_RAY);
  const starOrb = scene.getObject(OBJECT_PROJECTOR_ORB);

  /**
   * Handle a generic uniform input event
   * @param {*} event
   */
  function handleUniformEvent(event) {
    let val = Number(event.target.value);
    const valEle = document.getElementById(event.target.name + "-value");
    if (valEle) {
      valEle.innerHTML = val;
    }
    rayProgram.uniforms[event.target.name] =
      event.target.type == "checkbox" ? (event.target.checked ? 1 : 0) : val;
  }

  [...document.getElementsByClassName("uniform-input")].forEach((slider) =>
    slider.addEventListener("input", handleUniformEvent),
  );

  document.getElementById("projectorTexSel").addEventListener("input", (e) => {
    starOrb.materialLabel = e.target.value;
  });

  // document.getElementById("paintingReset").addEventListener("input", e => {
  //   addPaintings(scene)
  // })

  // document.getElementById("lightPower").addEventListener("input", (e) => {
  //   lightSphere.lightPower = e.target.value;
  //   document.getElementById(e.target.name + "-value").innerText =
  //     e.target.value;
  // });

  // document.getElementById("blueGlassIOR").addEventListener("input", (e) => {
  //   glass.refractiveIndex = e.target.value;
  //   document.getElementById(e.target.name + "-value").innerText =
  //     e.target.value;
  // });
}
