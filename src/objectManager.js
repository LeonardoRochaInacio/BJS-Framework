import Object from './object.js'

export default
class ObjectManager
{
    static counter = 0;
    static currentObjets = new Map();
    static recentlyRemovedObjects = new Map();

    constructor(){}

    static addObject(object)
    {
        if(!(object instanceof Object)) throw new Error('Object manager can only handle objects from type "Object"');
        object.id = this.counter;
        this.currentObjets.set(this.counter, object);
        this.counter++;
        return this.counter - 1;
    }

    static removeObject(object)
    {
        this.recentlyRemovedObjects.set(this.counter, object);
        this.currentObjets.delete(object.id);
    }
};