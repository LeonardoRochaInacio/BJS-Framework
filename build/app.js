import { bRenderer } from './renderer.js';
import { BoxGeometry, MeshBasicMaterial, Mesh } from '../thirdparty/three.js-master/src/Three.js';
window.onload = function () {
    let Renderer = new bRenderer(document.getElementById("canvas"), true);
    Renderer.cameraToRender.position.z = 2;
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new MeshBasicMaterial({ color: 0x44aa88 }); // greenish blue
    const cube = new Mesh(geometry, material);
    Renderer.sceneToRender.add(cube);
};
