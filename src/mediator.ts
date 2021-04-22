import {IGameMediator} from "./utils/IGameMediator"


export class GameMediator implements IGameMediator {

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


        const newName = role + this.game.time;


        const meta:any = {
            bodyParts,
            memory: {
                type,
                role
            }
        }

        this.game.spawns[newName].spawnCreep(meta)





    }

    findCreepByType (types:Array<string>):Array<any> {
        return _.filter(this.creeps, (creep) => types.includes(creep.memory.type));
    }
}
