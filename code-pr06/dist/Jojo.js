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
        const damage = ((this.attack / this.defense) * standEffectiveness);
        return damage;
    }
    getGeneralDamage() {
        const damage = (this.attack / this.defense);
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
