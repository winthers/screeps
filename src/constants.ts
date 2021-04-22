
export const OrderProcessPriority = {
    ASAP: 0
}

export const OrderStatus = {
    UNFULFILLED: 1,
    IN_PROGRESS: 2,
    COMPLETE: 3,
}

export const OrderType = {

    BUILD_DRONE: "BUILD_DRONE",


    // Change the roles of a drone.
    EVOLVE_BOOTSTRAPPER: "EVOLVE_BOOTSTRAPPER",
}

export const UnitType = {
    DRONE: "drone", // a drone have a single work and multiple carry and move (hardness and heal at some point)
    WORKER: "worker", // a worker have only move and work, no carry (maybe one.. )
    SOLDIER: "soldier",
    MEDIC: "medic"

}

export const UnitRole = {
    // måske vil jeg compose roles andereledes.. pushe dem til en unit eller
    // have det konstrueret sådan at der er en hive mind der styre alle units så de ikke er atonumus.
    // eller også er det sådan at de får en task (som har en start og en slut og en transition  til idle )
    "NULL": "null",
    "BOOTSTRAPPER": "bootstrapper",
    "HARVESTER": "harvester",
    "UPGRADER": ""
}


const BodyParts = {
    WORK: "work",
    CARRY: "carry",
    MOVE: "move"
}

export const UnitTemplate = {
    // TODO: create its body parts with a scale, (greedy:boolean, energyAvilable, energyCapacity).. maybe this should be done
    // some where else so we can stop consuming energy if we want to max out a unit.
    [UnitType.DRONE]: {
        role: UnitRole.NULL,
        bodyParts: [BodyParts.WORK, BodyParts.CARRY, BodyParts.CARRY, BodyParts.MOVE, BodyParts.MOVE]
    }
}




export interface Screep {

    memory:{
        type:string;
        role:string;
    }
}
