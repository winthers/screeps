import { assert, expect } from "chai";

// var chai = require("chai");


import { spy } from "sinon"
//var sinonChai = require("sinon-chai");
// var expect = chai.expect;


import { loop } from "../../src/main";




import { Game, Memory } from "./mock"
import { GameStubMediator } from "./GameStubMediator";


import { WorkForce } from "../../src/colony/Workforce";
import { CreepResources } from "../../src/colony/CreepResources";
import { Spawner } from "../../src/colony/Spawner";
import { Commander } from "../../src/colony/Commander";
import { OrderStatus, OrderProcessPriority, OrderType, UnitType, UnitRole} from "../../src/constants"
import { App } from "../../src/app";

describe("main", () => {


    let app;
    before(() => {
        // runs before all test in this block
    });

    beforeEach(() => {
        // runs before each test in this block
        // @ts-ignore : allow adding Game to global
        global.Game = _.clone(Game);
        // @ts-ignore : allow adding Memory to global
        global.Memory = _.clone(Memory);


        const gameStubMediator = new GameStubMediator(global.Game, {});

        const workForce = new WorkForce(gameStubMediator);
        const creepResources = new CreepResources(gameStubMediator);
        const spawner = new Spawner(gameStubMediator);
        const commander = new Commander();

        app = new App();

        app.mediator = gameStubMediator;
        app.workForce = workForce;
        app.spawner = spawner;
        app.creepResources = creepResources;
        app.commander = commander;

        commander.initialize(app);
        creepResources.initialize(app);
    });

    it("will create an Build Order for 5 drones & EVOLVE it to a bootstrapper if no units exists", () => {
        app.commander.compute();


        assert(app.commander.que.length === 10)
        //expect( app.commander.que.length).toEqual(2);

        const buildOrder = app.commander.que[0];
        const evolveOrder = app.commander.que[1];



        expect(buildOrder.status).equal(OrderStatus.UNFULFILLED)
        expect(buildOrder.type).equal(OrderType.BUILD_DRONE)
        expect(buildOrder.priority).equal(OrderProcessPriority.ASAP)


        expect(evolveOrder.status).equal(OrderStatus.UNFULFILLED)
        expect(evolveOrder.type).equal(OrderType.EVOLVE_BOOTSTRAPPER)
        expect(evolveOrder.priority).equal(OrderProcessPriority.ASAP)
    });

    it("will deligate the BUILD_ORDER to the Spawner", () => {

        var cb = spy(app.spawner, "build");
        app.commander.compute();
        app.commander.process();
        expect(cb).to.have.been.calledWith(UnitType.DRONE)
    })


    describe("Evolving Drones", ()=> {
        it("will evolve a drone with null role", ()=> {
            app.commander.compute();
            app.commander.process();
            expect(app.mediator.creeps[0].memory.role).equal(UnitRole.BOOTSTRAPPER)
        })
    })


});
