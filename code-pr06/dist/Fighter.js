"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
/**
 * Abstract Fighter Class
 */
class Fighter {
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
    constructor(name, height, weight, type, attack, defense, velocity, health, catchPhrase) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.velocity = velocity;
        this.health = health;
        this.catchPhrase = catchPhrase;
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
    getCatchPhrase() {
        return this.catchPhrase;
    }
}
exports.Fighter = Fighter;
