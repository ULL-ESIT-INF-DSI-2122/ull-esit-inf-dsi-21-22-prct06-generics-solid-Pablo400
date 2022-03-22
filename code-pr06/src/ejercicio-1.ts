/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import {Jojo} from './Jojo';
import {Pokemon} from './Pokemon';

/**
 * Save each fighter Data
 */
export class SaveFighter<Universe> {
  constructor() {};

  /**
   * Save Any Fighter data
   * @param Fighter Any fighter
   * @return Array with all fighters data
   */
  saveFighter(...Fighter : Universe[]) {
    const fighterSave : Universe[] = [];
    Fighter.forEach((fighter) => {
      fighterSave.push(fighter);
    });

    return fighterSave;
  }
}

class Combat<U1, U2> {
  constructor(protected firstFighter : U1, protected secondFighter : U2) { }

  getFirstFighter(): U1 {
    return this.firstFighter;
  }

  getSecondFighter(): U2 {
    return this.secondFighter;
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

