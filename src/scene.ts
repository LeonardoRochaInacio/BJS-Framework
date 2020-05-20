import { Scene } from "../thirdparty/three.js-master/src/Three.js"
import { bActor } from "./actor.js";

export class bScene extends Scene
{
    constructor()
    {
        super();
    }

    bShouldTick: boolean = true;

    tick(deltaTime:number):void{
        for(const actor of this.children)
        {
            if((<bActor>actor).tick !== undefined) (<bActor>actor).tick(deltaTime);
        }
    };

    add(...object: bActor[]): this
    {
        return super.add(...object);
    }
}