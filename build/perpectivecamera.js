import { PerspectiveCamera } from "../thirdparty/three.js-master/src/Three.js";
export class bPerspectiveCamera extends PerspectiveCamera {
    constructor(fov = 60, aspect = 2, near = 0.1, far = 1000) {
        super(fov, aspect, near, far);
        this.bShouldTick = true;
    }
    tick(deltaTime) {
        console.log("Ticking camera");
    }
    ;
}
