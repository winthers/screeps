export class App {
    _creepResources:any;
    _spawner:any;
    _workForce:any;
    _commander:any;

    _mediator:any;

    get mediator ():any {
        return this._mediator;
    }
    set mediator(value:any) {
        this._mediator = value;
    }

    get creepResources ():any {
        return this._creepResources;
    }
    get spawner ():any {
        return this._spawner;
    }
    get workForce ():any {
        return this._workForce;
    }
    get commander ():any {
        return this._commander;
    }


    set creepResources (value:any) {
        this._creepResources = value;
    }
    set spawner (value:any) {
        this._spawner = value;
    }
    set workForce (value:any) {
        this._workForce = value;
    }
    set commander (value:any) {
        this._commander = value;
    }

}
