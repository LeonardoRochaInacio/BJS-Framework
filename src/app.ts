import { bRenderer } from './renderer.js'
import { bScene } from './scene.js';
import { bPerspectiveCamera } from './component/perpectivecamera.js';
import { BoxGeometry, MeshBasicMaterial, Mesh } from '../thirdparty/three.js-master/src/Three.js';
import { bActor } from './actor.js';

window.onload = function(){
    
    let Renderer: bRenderer = new bRenderer(document.getElementById("canvas"), true);
    Renderer.cameraToRender.position.z = 2;

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);
  
    const material = new MeshBasicMaterial({color: 0x44aa88});  // greenish blue
  
    const cube = new Mesh(geometry, material);
    Renderer.sceneToRender.add(<bActor><unknown>cube);
    
}
