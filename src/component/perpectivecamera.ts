import { PerspectiveCamera } from "../../thirdparty/three.js-master/src/Three.js"


export class bPerspectiveCamera extends PerspectiveCamera
{
    constructor(fov:number = 60, aspect:number = 2, near:number = 0.1, far:number = 1000)
    {
        super(fov,aspect,near,far);
    }
}