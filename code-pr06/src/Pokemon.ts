/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
import {Fighter} from './Fighter';

/**
 * Contains all atributes of the Pokemon
 */
export class Pokemon extends Fighter {
  /**
   * Recieves the Pokemon data
   * @param name Pokemon Name
   * @param height Pokemon Height
   * @param weight Pokemon Weight
   * @param type Pokemon Type
   * @param attack Pokemon Attack
   * @param defense Pokemon Defense
   * @param velocity Pokemon Velocity
   * @param health Pokemon Health
   */
  constructor(protected name : string, protected height : number,
    protected weight : number, protected type : string, protected attack : number,
    protected defense : number, protected velocity : number, protected health : number) {
    super(name, height, weight, type, attack, defense, velocity, health);
  }

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

  /**
   * Prints information of a Pokemon
   * @return Printed Pokemon Information
   */
  printPokemonData() {
    return `${this.getName()} es un pokemon de tipo ${this.getType()}, pesa ${this.getWeight()} kg y mide ${this.getHeight()} m.Tiene ${this.getAttack()} puntos de ataque, ${this.getDefense()} puntos de defensa, ${this.getVelocity()} puntos de velocidad y ${this.getHealth()} puntos de vida`;
  }
}
