const { Scene } = require("PotatoEngine");
const { default: flight } = require("PotatoEngine/src/controls/flight");
const {
  makeEditorTabs,
  syncProperties,
} = require("PotatoEngine/src/controls/sceneEditor");
const { addRayTracingRenderPass } = require("PotatoEngine/src/renderers");

const { addMaterials } = require("./setup/materials");
const { addTextures } = require("./setup/textures");
const { initSceneObjects } = require("./setup/objects");
const { addPrograms } = require("./setup/programs");
const { addRenderPasses } = require("./setup/passes");

const scene = new Scene("glcanvas");
scene.camera.fov = 0.6;

flight.setupMouseControls(scene, {
  scalePitch: 1,
  scaleYaw: -1,
});
const cameraCB = flight.setupKeyboardControls(scene);

function updateScene(dt) {
  requestAnimationFrame(scene.render);

  syncProperties();
  cameraCB(dt);
}

scene.setUpdateCB(updateScene);

/**
 * Main init function
 * - load the scene shaders
 * - init all objects
 * - initialize buffers
 * - attach keyboard, mouse, input listeners
 * - start animation loop
 */
async function main() {
  addPrograms(scene);
  addRenderPasses(scene);
  addTextures(scene);
  addMaterials(scene);
  await scene.load();

  initSceneObjects(scene);

  makeEditorTabs(scene);

  // setInterval(() => {
  //   syncProperties();
  //   scene.render();
  // }, 30);
  requestAnimationFrame(scene.render);
}

main();
