"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = void 0;
const Jojo_1 = require("./Jojo");
const Pokemon_1 = require("./Pokemon");
class Combat {
    constructor(firstFighter, secondFighter) {
        this.firstFighter = firstFighter;
        this.secondFighter = secondFighter;
    }
    getFirstFighter() {
        return this.firstFighter;
    }
    getSecondFighter() {
        return this.secondFighter;
    }
    startFight(Fighter1, Fighter2) {
        let combatTurns = 0;
        let fighter1RemainingHealth = Fighter1.getHealth();
        let fighter2RemainingHealth = Fighter2.getHealth();
        let fighter1Damage = 0;
        let fighter2Damage = 0;
        // if (typeof(Fighter1) === typeof(Fighter2)) {
        // fighter1Damage = Fighter1.getDamage(Fighter2);
        // fighter2Damage = Fighter2.getDamage(Fighter1);
        // } else {
        fighter1Damage = Fighter1.getGeneralDamage();
        fighter2Damage = Fighter2.getGeneralDamage();
        // }
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
                if (fighter2RemainingHealth <= 0) {
                    console.log(`${Fighter2.getName()} tiene 0 HP`);
                }
                else {
                    console.log(`${Fighter2.getName()} tiene ${fighter2RemainingHealth} HP`);
                }
                fighter1RemainingHealth = fighter1RemainingHealth - fighter2Damage;
                console.log(`\nAtaca ${Fighter2.getName()}`);
                if (fighter1RemainingHealth <= 0) {
                    console.log(`${Fighter1.getName()} tiene 0 HP`);
                }
                else {
                    console.log(`${Fighter1.getName()} tiene ${fighter1RemainingHealth} HP`);
                }
            }
            else if (Fighter1.getVelocity() < Fighter2.getVelocity()) {
                fighter1RemainingHealth = fighter1RemainingHealth - fighter2Damage;
                console.log(`\nAtaca ${Fighter2.getName()}`);
                if (fighter2RemainingHealth <= 0) {
                    console.log(`${Fighter2.getName()} tiene 0 HP`);
                }
                else {
                    console.log(`${Fighter2.getName()} tiene ${fighter2RemainingHealth} HP`);
                }
                fighter2RemainingHealth = fighter2RemainingHealth - fighter1Damage;
                console.log(`\nAtaca ${Fighter1.getName()}`);
                if (fighter1RemainingHealth <= 0) {
                    console.log(`${Fighter1.getName()} tiene 0 HP`);
                }
                else {
                    console.log(`${Fighter1.getName()} tiene ${fighter1RemainingHealth} HP`);
                }
            }
            combatTurns++;
        }
        if (fighter1RemainingHealth <= 0) {
            return `\nEl ganador es ${Fighter2.getName()} y ${Fighter1.getName()} ha sido derrotado, en ${combatTurns} turnos !!!`;
        }
        else if (fighter2RemainingHealth <= 0) {
            return `\nEl ganador es ${Fighter1.getName()} y ${Fighter2.getName()} ha sido derrotado, en ${combatTurns} turnos !!!`;
        }
        else {
            return 'Esto es impresionante, han empatado !!!';
        }
    }
}
exports.Combat = Combat;
const Jotaro = new Jojo_1.Jojo('Jotaro', 1.95, 81, 'Corto Alcance', 200, 50, 200, 100, 'Star Platinum', 'The World', 'C', 'A', 'A', 'A', 'A');
const Pikachu = new Pokemon_1.Pokemon('Pikachu', 0.4, 6, 'eléctrico', 55, 40, 90, 35);
const Totodile = new Pokemon_1.Pokemon('Totodile', 0.6, 9.5, 'agua', 65, 64, 43, 50);
/* console.log(Jotaro.printJojoData());
console.log(Pikachu.printPokemonData());

const Fighters = new SaveFighter();

console.log(Fighters.saveFighter(Jotaro, Pikachu, Totodile));*/
const Battle = new Combat(Jotaro, Pikachu);
console.log(Battle.startFight(Jotaro, Pikachu));
