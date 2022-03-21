/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

/**
 * Contains all atributes of the Pokemon
 */
class Pokemon {
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
  constructor(private name : string, private height : number,
    private weight : number, private type : string, private attack : number,
    private defense : number, private velocity : number, private health : number) { }

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
   * @returns Printed Pokemon Information
   */
  printPokemonData() {
    return `${this.getName()} es un pokemon de tipo ${this.getType()}, pesa ${this.getWeight()} kg y mide ${this.getHeight()} m.Tiene ${this.getAttack()} puntos de ataque, ${this.getDefense()} puntos de defensa, ${this.getVelocity()} puntos de velocidad y ${this.getHealth()} puntos de vida`;
  }
}

/**
 * Contains the atributes of a Jojo character
 */
class Jojo {
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
  constructor(private name : string, private height : number,
    private weight : number, private type : string, private attack : number,
    private defense : number, private velocity : number, private health : number,
    private standName : string, private specialPower : string, private range : string,
    private destructivePower : string, private stamina : string, private precision : string,
    private developmentPotencial : string) { }

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
   * @returns Printed Jojo Character Information
   */
  printJojoData() {
    const firstData : string = `${this.getName()} tiene un stand de tipo ${this.getType()}, ${this.getName()} pesa ${this.getWeight()} kg y mide ${this.getHeight()} m. Su stand ${this.getStandName()} tiene ${this.getAttack()} puntos de ataque, ${this.getDefense()} puntos de defensa, ${this.getVelocity()} puntos de velocidad y ${this.getName()} tiene ${this.getHealth()} vida.`;
    const secondData : string= `Otros datos de interés del stand son su poder especial ${this.getSpecialPower()}, distancia de efecto ${this.getRange()}, su poder destructivo ${this.getDestructivePower()}, su stamina ${this.getStamina()}, su precisión ${this.getPrecision()} y su potencial de mejora ${this.getDevelopmentPotencial()}`;
    return `${firstData} ${secondData}`;
  }
}

/**
 * Save each fighter
 */
class SaveFighter<Universe> {
  constructor() {};

  /**
   * Save Any Fighter data
   * @param Fighter Any fighter 
   * @returns Array with all fighters data
   */
  saveFighter(...Fighter : Universe[]) {
    const fighterSave : Universe[] = [];
    Fighter.forEach((fighter) => {
      fighterSave.push(fighter);
    });

    return fighterSave;
  }
}

abstract class Fighter<U1, U2> {
  constructor(protected firstFighter : U1, protected secondFighter : U2) { }

  abstract getFirstFighter() : U1;

  abstract getSecondFighter() : U2;

  abstract getDamage(Fighter : U1 | U2) : number;

  abstract startFight(Fighter1 : U1, Fighter2 : U2) : number;
}

class Combat<U1, U2> extends Fighter<U1, U2> {
  constructor(protected firstFighter : U1, protected secondFighter : U2) {
    super(firstFighter, secondFighter);
  }

  getFirstFighter(): U1 {
    return this.firstFighter;
  }

  getSecondFighter(): U2 {
    return this.secondFighter;
  }

  getDamage(Fighter: any): number {
    return 0;
  }

  startFight(Fighter1: any, Fighter2 : any): number {
    return 0;
  }
}

const Jotaro = new Jojo('Jotaro', 1.95, 81, 'Corto Alcance', 200, 50, 200, 100, 'Star Platinum', 'The World', 'C', 'A', 'A', 'A', 'A');
const Pikachu = new Pokemon('Pikachu', 0.4, 6, 'eléctrico', 55, 40, 90, 35);
const Totodile = new Pokemon('Totodile', 0.6, 9.5, 'agua', 65, 64, 43, 50);

console.log(Jotaro.printJojoData());
console.log(Pikachu.printPokemonData());

const Fighters = new SaveFighter();

console.log(Fighters.saveFighter(Jotaro, Pikachu, Totodile));
