import {Scene as ThreeJSScene}  from './thirdparty/three.js';
import PerpectiveCamera from './perpectiveCamera.js'

export default 
class Scene extends ThreeJSScene
{
    #sceneCameraObject = null;

    constructor()
    {
        super();
    }

    get sceneCameraObject()
    {
        return this.#sceneCameraObject;
    }

    setCamera(cameraObject)
    {
        if(!(cameraObject instanceof PerpectiveCamera)) throw new Error('Camera can only inherit from PerpectiveCamera');
        this.#sceneCameraObject = cameraObject;
    }
};