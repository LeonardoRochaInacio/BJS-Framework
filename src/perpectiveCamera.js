import {PerspectiveCamera as ThreeJSPerspectiveCamera}  from './thirdparty/three.js';

export default 
class PerpectiveCamera extends ThreeJSPerspectiveCamera
{
    constructor(fov, aspectRatio, nearPlane, farPlane)
    {
        super(fov, aspectRatio, nearPlane, farPlane);
    }
};