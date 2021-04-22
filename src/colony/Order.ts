
import { OrderStatus } from "../constants";

export class Order {
    type:any;
    priority:number;
    status:any;

    constructor(type:any, priority:number = -1) {
        this.type = type;
        this.priority = priority
        this.status = OrderStatus.UNFULFILLED;
    }
}
