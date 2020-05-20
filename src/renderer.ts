import {WebGLRenderer, Scene, PerspectiveCamera, Object3D} from "../thirdparty/three.js-master/src/Three.js"
import { bScene } from "./scene.js";
import { bPerspectiveCamera } from "./component/perpectivecamera.js";
import { bActor } from "./actor.js";

export class bRenderer extends WebGLRenderer
{
    public sceneToRender!:bScene;
    public cameraToRender!:bPerspectiveCamera;
    private lastRenderTime:number = 0;

    constructor(canvasObject:any, createDefaultScene?:boolean)
    {
        super({canvas: canvasObject, antialias: true});
        if(createDefaultScene)
        {
            this.sceneToRender = new bScene();
            this.cameraToRender = new bPerspectiveCamera();
            console.log(this.cameraToRender);
        }
        this.renderUpdate = this.renderUpdate.bind(this);
        requestAnimationFrame(this.renderUpdate);
    }

    set setSceneToRender(sceneObject:bScene)
    {
        this.sceneToRender = sceneObject;
    }

    set setCameraToRender(cameraObject:bPerspectiveCamera)
    {
        this.cameraToRender = cameraObject;
    }

    resizeRendererToDisplaySize():boolean {
        const canvas = this.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) 
        {
            this.setSize(width, height, false);
        }
        return needResize;
    }

    renderUpdate(currenTime:number):void
    {
        currenTime *= 0.001;
        const deltaTime = currenTime - this.lastRenderTime;
        this.lastRenderTime = currenTime;
        if (this.resizeRendererToDisplaySize()) 
        {
            const canvas = this.domElement;
            this.cameraToRender.aspect = canvas.clientWidth / canvas.clientHeight;
            this.cameraToRender.updateProjectionMatrix();
        }
        
        this.sceneToRender.tick(deltaTime);

        this.render(this.sceneToRender, this.cameraToRender);
        requestAnimationFrame(this.renderUpdate);
    };
}

/*
*   Set tick properties on native code
*/

Object3D.prototype.tick = function(){console.log(this.id)};
Object3D.prototype.shouldTick = true;
