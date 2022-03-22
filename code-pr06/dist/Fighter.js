"use strict";
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
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
exports.Fighter = Fighter;
