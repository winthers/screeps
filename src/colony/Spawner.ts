
import { OrderType, UnitTemplate, UnitType } from "../constants";
import {IGameMediator} from "../utils/IGameMediator";

export class Spawner {

    mediator: IGameMediator;

    constructor(mediator: IGameMediator) {
        this.mediator = mediator
    }

    processOrder(order: any) {

        switch (order) {

            case OrderType.BUILD_DRONE: return this.build(UnitType.DRONE);
        }
    }

    // how to handle unit-tir's / scaling.
    build(type: any) {
        // stub

        const unit = UnitTemplate[type]

        if (unit) {

            this.mediator.createCreep(type, unit.role, unit.bodyParts);
        }
    }



}
