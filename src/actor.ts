import { Group, Object3D } from "../thirdparty/three.js-master/src/Three.js"

export class bActor extends Group
{
    constructor()
    {
        super();
    }

    bShouldTick: boolean = true;

    tick(deltaTime:number):void{
        for(const components of this.children)
        {
            if((<Object3D>components).tick !== undefined) (<Object3D>components).tick(deltaTime);
        }
    };

    add(...object: Object3D[]): this
    {
        return super.add(...object);
    }
}