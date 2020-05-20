import { Scene } from "../thirdparty/three.js-master/src/Three.js";
export class bScene extends Scene {
    constructor() {
        super();
        this.bShouldTick = true;
    }
    tick(deltaTime) {
        for (const actor of this.children) {
            if (actor.tick !== undefined)
                actor.tick(deltaTime);
        }
    }
    ;
    add(...object) {
        return super.add(...object);
    }
}
