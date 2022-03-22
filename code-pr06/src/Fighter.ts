/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

export abstract class Fighter {
  constructor(protected name : string, protected height : number,
    protected weight : number, protected type : string, protected attack : number,
    protected defense : number, protected velocity : number, protected health : number) { }

  abstract getName() : string;

  abstract getHeight() : number;

  abstract getWeight() : number;

  abstract getType() : string;

  abstract getAttack() : number;

  abstract getDefense() : number;

  abstract getVelocity() : number;

  abstract getHealth() : number;

  abstract getDamage(Fighter : any) : number;
}
