"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jojo = void 0;
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const Fighter_1 = require("./Fighter");
/**
 * Contains the atributes of a Jojo character
 */
class Jojo extends Fighter_1.Fighter {
    /**
     * Recieves the Jojo character data
     * @param name Jojo character name
     * @param height Jojo character height
     * @param weight Jojo character weight
     * @param type Jojo character type
     * @param attack Jojo character attack
     * @param defense Jojo character defense
     * @param velocity Jojo character velocity
     * @param health Jojo character health
     * @param standName Name of the Stand
     * @param specialPower Special Power of the Stand
     * @param range Range of the Stand
     * @param destructivePower Destructive Power of the Stand
     * @param stamina Stand Satamina of the Stand
     * @param precision Stand Precision of the Stand
     * @param developmentPotencial Development Potencial of the Stand
     */
    constructor(name, height, weight, type, attack, defense, velocity, health, catchPhrase, standName, specialPower, range, destructivePower, stamina, precision, developmentPotencial) {
        super(name, height, weight, type, attack, defense, velocity, health, catchPhrase);
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.velocity = velocity;
        this.health = health;
        this.catchPhrase = catchPhrase;
        this.standName = standName;
        this.specialPower = specialPower;
        this.range = range;
        this.destructivePower = destructivePower;
        this.stamina = stamina;
        this.precision = precision;
        this.developmentPotencial = developmentPotencial;
    }
    /**
     * This method calculates the stand damage of a jojo character with his type, this function only works on the Jojo Universe
     * @param Fighter Jojo Fighter
     * @returns The damage of a Jojo Fighter
     */
    getDamage(Fighter) {
        const superEffective = 2;
        const neutral = 1;
        const notVeryEffective = 0.5;
        let standEffectiveness = 0;
        if (this.type == 'Largo Alcance' && Fighter.type == 'Corto Alcance') {
            standEffectiveness = superEffective;
        }
        else if (this.type == 'Corto Alcance' && Fighter.type == 'Largo Alcance') {
            standEffectiveness = notVeryEffective;
        }
        else if (this.type == 'Humanoide' && Fighter.type == 'Artificial') {
            standEffectiveness = neutral;
        }
        else if (this.type == 'Artificial' && Fighter.type == 'Humanoide') {
            standEffectiveness = superEffective;
        }
        else if (this.type == 'Natural' && Fighter.type == 'Artificial') {
            standEffectiveness = superEffective;
        }
        else if (this.type == 'Artificial' && Fighter.type == 'Natural') {
            standEffectiveness = neutral;
        }
        else if (this.type == 'Automático' && Fighter.type == 'Control Total') {
            standEffectiveness = neutral;
        }
        else if (this.type == 'Control Total' && Fighter.type == 'Automático') {
            standEffectiveness = notVeryEffective;
        }
        else if (this.type == 'Corto Alcance' && Fighter.type == 'Automático') {
            standEffectiveness = superEffective;
        }
        else if (this.type == 'Automático' && Fighter.type == 'Corto Alcance') {
            standEffectiveness = neutral;
        }
        const damage = ((this.attack / this.defense) * standEffectiveness);
        return damage;
    }
    /**
     * This method calculates the stand damage of a jojo character on other Universe, the Jojo characters are more powerful in other universe
     * @returns The general damage of a Stand User on other Universe
     */
    getGeneralDamage() {
        const damage = (this.attack / this.defense) * 2;
        return damage;
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
exports.Jojo = Jojo;
