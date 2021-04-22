import {IGameMediator} from "../../src/utils/IGameMediator"


export class GameStubMediator implements IGameMediator {

    game:any;
    memory:any;

    constructor (game:any, memory:any) {
        this.game = game;
        this.memory = memory;
    }

    get creeps ():Array<any> {
        return this.game.creeps;
    }

    createCreep(type:string, role:String, bodyParts:Array<string>):void {
        this.creeps.push({
            memory: {
                type,
                role
            }
        })
    }

    findCreepByType (types:Array<string>):Array<any> {
        return _.filter(this.creeps, (creep) => types.includes(creep.memory.type));
    }
}
