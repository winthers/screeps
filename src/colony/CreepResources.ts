import { OrderType, UnitRole, UnitType } from "../constants";


export class CreepResources {

    mediator: any;
    app: any;

    constructor(mediator: any) {
        this.mediator = mediator;
    }

    initialize(app: any) {
        this.app = app;
    }

    processOrder(order: string) {
        switch (order) {
            case OrderType.EVOLVE_BOOTSTRAPPER: return this.evolve(UnitRole.BOOTSTRAPPER);
        }
    }

    evolve(role: any) {
        const unitPool = this.app.workForce.findAbleUnit([UnitType.DRONE])
        if (!unitPool || !unitPool.length) {
            console.log("CANT FIND NO ABLE BODIES")
            return;
        }
        let match = unitPool[0];
        if (unitPool.length > 1) {
            // TODO: check for status IDLE also.
            let result = unitPool.find(unit => unit.memory.role === UnitRole.NULL)
            if (result)
                match = result;
        }
        match.memory.role = role;
    }
}
