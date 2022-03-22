"use strict";
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
class Fighter {
    constructor(name, height, weight, type, attack, defense, velocity, health) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.velocity = velocity;
        this.health = health;
    }
}
/**
 * Contains all atributes of the Pokemon
 */
class Pokemon extends Fighter {
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
    constructor(name, height, weight, type, attack, defense, velocity, health) {
        super(name, height, weight, type, attack, defense, velocity, health);
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.velocity = velocity;
        this.health = health;
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
/**
 * Contains the atributes of a Jojo character
 */
class Jojo extends Fighter {
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
    constructor(name, height, weight, type, attack, defense, velocity, health, standName, specialPower, range, destructivePower, stamina, precision, developmentPotencial) {
        super(name, height, weight, type, attack, defense, velocity, health);
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.velocity = velocity;
        this.health = health;
        this.standName = standName;
        this.specialPower = specialPower;
        this.range = range;
        this.destructivePower = destructivePower;
        this.stamina = stamina;
        this.precision = precision;
        this.developmentPotencial = developmentPotencial;
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
        const firstData = `${this.getName()} tiene un stand de tipo ${this.getType()}, ${this.getName()} pesa ${this.getWeight()} kg y mide ${this.getHeight()} m. Su stand ${this.getStandName()} tiene ${this.getAttack()} puntos de ataque, ${this.getDefense()} puntos de defensa, ${this.getVelocity()} puntos de velocidad y ${this.getName()} tiene ${this.getHealth()} vida.`;
        const secondData = `Otros datos de interés del stand son su poder especial ${this.getSpecialPower()}, distancia de efecto ${this.getRange()}, su poder destructivo ${this.getDestructivePower()}, su stamina ${this.getStamina()}, su precisión ${this.getPrecision()} y su potencial de mejora ${this.getDevelopmentPotencial()}`;
        return `${firstData} ${secondData}`;
    }
}
/**
 * Save each fighter
 */
class SaveFighter {
    constructor() { }
    ;
    /**
     * Save Any Fighter data
     * @param Fighter Any fighter
     * @return Array with all fighters data
     */
    saveFighter(...Fighter) {
        const fighterSave = [];
        Fighter.forEach((fighter) => {
            fighterSave.push(fighter);
        });
        return fighterSave;
    }
}
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
    getDamage(Fighter) {
        return 0;
    }
    startFight(Fighter1, Fighter2) {
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
