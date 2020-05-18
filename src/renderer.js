import {WebGLRenderer} from './thirdparty/three.js';
import Scene from './scene.js'

export default
class Renderer extends WebGLRenderer
{
    #lastTime = 0;
    #worldDeltaSeconds = 0;
    #includedScenes = new Map();

    constructor(canvasObject)
    {
        super({canvas: canvasObject})
        this.tick = this.tick.bind(this);
        requestAnimationFrame(this.tick);
    };

    get worldDeltaSeconds()
    {
        return this.#worldDeltaSeconds;
    }

    includeSceneToRender(sceneObject)
    {
        if(!(sceneObject instanceof Scene)) throw new Error('A scene can only include scene objects from type "Scene"');
        this.#includedScenes.set(sceneObject.uuid, sceneObject);
        console.log("Scene id #" + sceneObject.uuid + " included to renderer")
    }

    removeSceneFromRender(sceneObject)
    {
        if(!(sceneObject instanceof Scene)) throw new Error('To be deleted, a scene must inherit from "Scene"');
        this.#includedScenes.delete(sceneObject.uuid);
    }

    tick(currenTime)
    {
        currenTime *= 1;  // To seconds
        const deltaTime = currenTime - this.#lastTime;
        this.#lastTime = currenTime;
        this.#worldDeltaSeconds = deltaTime;
        this.#includedScenes.forEach((value, key, map) => {
            if(value.cameraObject == null) throw new Error('Invalid camera on Scene id #'+ value.uuid + ", please setup a camera");
            renderer.render(value, value.camera);
        })

        

        ///renderer.render(scene, camera);
        
        requestAnimationFrame(this.tick);
    };
}