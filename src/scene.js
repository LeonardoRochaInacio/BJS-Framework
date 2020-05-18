import {Scene as ThreeJSScene}  from './thirdparty/three.js';
import PerpectiveCamera from './perpectiveCamera.js'

export default 
class Scene extends ThreeJSScene
{
    #beagleSceneCamera = null;

    constructor()
    {
        super();
    }

    get cameraObject()
    {
        return this.#beagleSceneCamera;
    }

    setCamera(cameraObject)
    {
        if(!(sceneObject instanceof PerpectiveCamera)) throw new Error('Camera can only inherit from PerpectiveCamera');
        this.#beagleSceneCamera = cameraObject;
    }
};