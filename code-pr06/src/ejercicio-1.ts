/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import {Fighter} from './Fighter';
import {Jojo} from './Jojo';
import {Pokemon} from './Pokemon';
import {SaveFighter} from './SaveFighter';

/**
 * Class that makes the combat between two fighters
 */
export class Combat {
  constructor() { }

  /**
   * This function simulates a combat between two characters of diferent Universes
   * @param Fighter1 First Fighter
   * @param Fighter2 Second Fighter
   * @returns The winner of the combat
   */
  startFight(Fighter1 : Fighter, Fighter2 : Fighter): string {
    let combatTurns = 0;
    let fighter1RemainingHealth = Fighter1.getHealth();
    let fighter2RemainingHealth = Fighter2.getHealth();
    let fighter1Damage = 0;
    let fighter2Damage = 0;

    if ('standName' in Fighter1 && 'standName' in Fighter2) {
      fighter1Damage = Fighter1.getDamage(Fighter2);
      fighter2Damage = Fighter2.getDamage(Fighter1);
    } else if ('pokemonTrainer' in Fighter1 && 'pokemonTrainer' in Fighter2) {
      fighter1Damage = Fighter1.getDamage(Fighter2);
      fighter2Damage = Fighter2.getDamage(Fighter1);
    } else {
      fighter1Damage = Fighter1.getGeneralDamage();
      fighter2Damage = Fighter2.getGeneralDamage();
    }

    console.log(`\nCombate de ${Fighter1.getName()} contra ${Fighter2.getName()} !!!!!!`);
    console.log(`\n${Fighter1.getName()} tiene ${fighter1RemainingHealth} HP`);
    console.log(`\n${Fighter2.getName()} tiene ${fighter2RemainingHealth} HP`);

    if (Fighter2 === Fighter1) {
      return 'Esto es impresionante, han empatado !!!';
    }

    while (fighter1RemainingHealth >= 0 && fighter2RemainingHealth >= 0) {
      if (Fighter1.getVelocity() > Fighter2.getVelocity()) {
        fighter2RemainingHealth = fighter2RemainingHealth - fighter1Damage;
        console.log(`\nAtaca ${Fighter1.getName()}`);
        if ( fighter2RemainingHealth <= 0 ) {
          console.log(`${Fighter2.getName()} tiene 0 HP`);
        } else {
          console.log(`${Fighter2.getName()} tiene ${fighter2RemainingHealth} HP`);
        }
        fighter1RemainingHealth = fighter1RemainingHealth - fighter2Damage;
        console.log(`\nAtaca ${Fighter2.getName()}`);
        if ( fighter1RemainingHealth <= 0 ) {
          console.log(`${Fighter1.getName()} tiene 0 HP`);
        } else {
          console.log(`${Fighter1.getName()} tiene ${fighter1RemainingHealth} HP`);
        }
      } else if (Fighter1.getVelocity() < Fighter2.getVelocity()) {
        fighter1RemainingHealth = fighter1RemainingHealth - fighter2Damage;
        console.log(`\nAtaca ${Fighter2.getName()}`);
        if ( fighter2RemainingHealth <= 0 ) {
          console.log(`${Fighter2.getName()} tiene 0 HP`);
        } else {
          console.log(`${Fighter2.getName()} tiene ${fighter2RemainingHealth} HP`);
        }
        fighter2RemainingHealth = fighter2RemainingHealth - fighter1Damage;
        console.log(`\nAtaca ${Fighter1.getName()}`);
        if ( fighter1RemainingHealth <= 0 ) {
          console.log(`${Fighter1.getName()} tiene 0 HP`);
        } else {
          console.log(`${Fighter1.getName()} tiene ${fighter1RemainingHealth} HP`);
        }
      }
      combatTurns++;
    }

    if (fighter1RemainingHealth <= 0) {
      return `\nEl ganador es ${Fighter2.getName()} y ${Fighter1.getName()} ha sido derrotado, en ${combatTurns} turnos !!!`;
    } else if (fighter2RemainingHealth <= 0) {
      return `\nEl ganador es ${Fighter1.getName()} y ${Fighter2.getName()} ha sido derrotado, en ${combatTurns} turnos !!!`;
    } else {
      return 'Esto es impresionante, han empatado !!!';
    }
  }
}

/* const Jotaro = new Jojo('Jotaro', 1.95, 81, 'Corto Alcance', 200, 50, 200, 100, 'Star Platinum', 'The World', 'C', 'A', 'A', 'A', 'A');
const Kira = new Jojo('Yoshikare Kira', 1.75, 65, 'Automático', 270, 40, 300, 100, 'Sheer Heart Attack', 'Heat-Seeking Detonation', 'C', 'A', 'A', 'A', 'A');
const Pikachu = new Pokemon('Pikachu', 0.4, 6, 'eléctrico', 55, 40, 90, 35, 'Ash');
const Totodile = new Pokemon('Totodile', 0.6, 9.5, 'agua', 65, 64, 43, 50, 'Ash');

console.log(Jotaro.printJojoData());
console.log(Pikachu.printPokemonData());

const Fighters = new SaveFighter();

console.log(Fighters.saveFighter(Jotaro, Pikachu, Totodile));

const Battle = new Combat(Jotaro, Pikachu);

console.log(Battle.startFight(Jotaro, Pikachu)); */

