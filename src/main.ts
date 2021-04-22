import { ErrorMapper } from "utils/ErrorMapper";

import {GameMediator} from "./mediator";
import { WorkForce } from "./colony/Workforce";
import { CreepResources } from "./colony/CreepResources";
import { Spawner } from "./colony/Spawner";
import { Commander } from "./colony/Commander";
import { App } from "../../src/app";


const mediator = new GameMediator(Game, Memory);



const gameStubMediator = new GameStubMediator(global.Game, {});

const workForce = new WorkForce(gameStubMediator);
const creepResources = new CreepResources(gameStubMediator);
const spawner = new Spawner(gameStubMediator);
const commander = new Commander();

let app = new App();

app.mediator = gameStubMediator;
app.workForce = workForce;
app.spawner = spawner;
app.creepResources = creepResources;
app.commander = commander;

commander.initialize(app);
creepResources.initialize(app);
app.commander.compute();

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);



  app.commander.process();

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
});
