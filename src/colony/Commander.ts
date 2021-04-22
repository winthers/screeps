
import {OrderType, OrderProcessPriority, UnitRole, UnitType} from "../constants";
import {Order} from "./Order";

export class Commander {

    que:Array<any>;
    workForce:any;
    creepResources:any;
    spawner:any;

    constructor() {
       this.que = [];
    }

    initialize (app:any) {
        this.workForce = app.workForce;
        this.creepResources = app.creepResources;
        this.spawner = app.spawner;
    }

    compute() {

        // base directive..
        if (this.workForce.unitCountTotal() <= 1 && this.workForce.unitCountOfType(UnitType.DRONE) < 1) {
            for(var i = 0; i < 5; i++) {
                this.que.push(new Order(OrderType.BUILD_DRONE, OrderProcessPriority.ASAP))
                this.que.push(new Order(OrderType.EVOLVE_BOOTSTRAPPER, OrderProcessPriority.ASAP))
            }

        }

    }

    process () {

        // TODO: sort by priority.

        this.que.forEach(order => {
            if(/BUILD_/.test(order.type)) {
                this.spawner.processOrder(order.type)
            }
            if(/EVOLVE_/.test(order.type)) {
                this.creepResources.processOrder(order.type)
            }
        })
    }
}
