/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

/**
 * Abstract Fighter Class
 */
export abstract class Fighter {
  /**
   * Constructor Fighter Class
   * @param name Character name
   * @param height Character height
   * @param weight Character weight
   * @param type Character type
   * @param attack Character attack
   * @param defense Character defense
   * @param velocity Character velocity
   * @param health Character health
   */
  constructor(protected name : string, protected height : number,
    protected weight : number, protected type : string, protected attack : number,
    protected defense : number, protected velocity : number, protected health : number,
    protected catchPhrase : string) { }

  getName() {
    return this.name;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  getType() {
    return this.type;
  }

  getAttack() {
    return this.attack;
  }

  getDefense() {
    return this.defense;
  }

  getVelocity() {
    return this.velocity;
  }

  getHealth() {
    return this.health;
  }

  getCatchPhrase() {
    return this.catchPhrase;
  }

  abstract getDamage(Fighter : any) : number;

  abstract getGeneralDamage() : number;
}
