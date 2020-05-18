import * as definitions from './definitions.js';
import * as THREE from './thirdparty/three.js';
import Actor from './actor.js';
import Renderer from './renderer.js'
import Scene from './scene.js'

function main()
{
    const canvas = document.getElementById('canvas');
    const renderer = new Renderer(canvas);

    const camera = new THREE.PerspectiveCamera(definitions.cameraSettings.fov, definitions.cameraSettings.aspectRatio, definitions.cameraSettings.nearPlane, definitions.cameraSettings.farPlane);
    const scene = new Scene();
    renderer.includeSceneToRender(scene);
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 2;
    
    {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
    }

    function rendererLoop(deltaTime)
    {
        deltaTime *= 0.001;
        cube.rotation.x = deltaTime;
        cube.rotation.y = deltaTime;
        renderer.render(scene, camera);
        requestAnimationFrame(rendererLoop);
    }

    requestAnimationFrame(rendererLoop);

    
    new Actor("test");
    new Actor("test");
    new Actor("test");
    new Actor("test");
    new Actor("test");
    new Actor("test");
}

window.onload = function()
{
    console.log(THREE);
    main();
}