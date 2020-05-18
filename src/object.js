import ObjectManager from './objectManager.js'

export default 
class Object
{
    id = null;
    constructor()
    {
        let newObjectID = ObjectManager.addObject(this);
        console.log('Creating object from type '+ this.constructor.name +' with id #' + newObjectID);
    }
};