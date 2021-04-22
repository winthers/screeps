

import {IGameMediator} from "../utils/IGameMediator";
import {Screep} from "../constants";

export class WorkForce {

    mediator:IGameMediator;

    constructor(mediator:IGameMediator) {
        this.mediator = mediator;

    }

    get units ():Array<Screep> {
        return this.mediator.creeps;
    }

    unitCountTotal() {
        return this.units.length;
    }

    unitCountOfType(type:any):number {
        return this.units.filter(u => u.memory.type === type).length
    }
    unitCountOfRole(role:any):number {
        return this.units.filter(u => u.memory.role === role).length
     }

    findAbleUnit (types:any):Array<Screep> {
       return this.units.filter((unit:any) => types.includes(unit.memory.type))
    }


}
