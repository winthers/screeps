export interface IGameMediator {

   creeps:Array<any>;
   createCreep: (type:string, role:string, bodyParts:Array<string>) => void;
   findCreepByType (types:Array <string>):Array<any>;

}
