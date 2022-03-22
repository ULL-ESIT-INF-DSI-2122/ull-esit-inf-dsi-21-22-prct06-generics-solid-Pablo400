/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {Fighter} from './Fighter';

/**
 * Contains the atributes of a Jojo character
 */
export class Jojo extends Fighter {
  /**
   * Recieves the Jojo character data
   * @param name Jojo character name
   * @param height Jojo character name
   * @param weight Jojo character name
   * @param type Jojo character name
   * @param attack Jojo character name
   * @param defense Jojo character name
   * @param velocity Jojo character name
   * @param health Jojo character name
   * @param standName Name of the Stand
   * @param specialPower Special Power of the Stand
   * @param range Range of the Stand
   * @param destructivePower Destructive Power of the Stand
   * @param stamina Stand Satamina of the Stand
   * @param precision Stand Precision of the Stand
   * @param developmentPotencial Development Potencial of the Stand
   */
  constructor(protected name : string, protected height : number,
    protected weight : number, protected type : string, protected attack : number,
    protected defense : number, protected velocity : number, protected health : number,
    protected standName : string, protected specialPower : string, protected range : string,
    protected destructivePower : string, protected stamina : string, protected precision : string,
    protected developmentPotencial : string) {
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

  getDamage(Fighter: Jojo): number {
    return 0;
  }

  getStandName() {
    return this.standName;
  }

  getSpecialPower() {
    return this.specialPower;
  }

  getRange() {
    return this.range;
  }

  getDestructivePower() {
    return this.destructivePower;
  }

  getStamina() {
    return this.stamina;
  }

  getPrecision() {
    return this.precision;
  }

  getDevelopmentPotencial() {
    return this.developmentPotencial;
  }

  /**
   * Prints information of a Jojo Character
   * @return Printed Jojo Character Information
   */
  printJojoData() {
    const firstData : string = `${this.getName()} tiene un stand de tipo ${this.getType()}, ${this.getName()} pesa ${this.getWeight()} kg y mide ${this.getHeight()} m. Su stand ${this.getStandName()} tiene ${this.getAttack()} puntos de ataque, ${this.getDefense()} puntos de defensa, ${this.getVelocity()} puntos de velocidad y ${this.getName()} tiene ${this.getHealth()} vida.`;
    const secondData : string= `Otros datos de interés del stand son su poder especial ${this.getSpecialPower()}, distancia de efecto ${this.getRange()}, su poder destructivo ${this.getDestructivePower()}, su stamina ${this.getStamina()}, su precisión ${this.getPrecision()} y su potencial de mejora ${this.getDevelopmentPotencial()}`;
    return `${firstData} ${secondData}`;
  }
}
