import { Object3D } from "../thirdparty/three.js-master/src/Three.js";
export class bComponent extends Object3D {
    constructor() {
        super();
        this.bShouldTick = true;
    }
    tick(deltaTime) {
        for (const components of this.children) {
            if (components.tick !== undefined)
                components.tick(deltaTime);
        }
    }
    ;
    add(...object) {
        return super.add(...object);
    }
}
