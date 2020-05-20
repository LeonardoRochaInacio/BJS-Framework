import { Group } from "../thirdparty/three.js-master/src/Three.js";
export class bActor extends Group {
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
