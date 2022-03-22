"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
const Fighter_1 = require("./Fighter");
/**
 * Contains all atributes of the Pokemon
 */
class Pokemon extends Fighter_1.Fighter {
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
    constructor(name, height, weight, type, attack, defense, velocity, health, pokemonTrainer) {
        super(name, height, weight, type, attack, defense, velocity, health);
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.velocity = velocity;
        this.health = health;
        this.pokemonTrainer = pokemonTrainer;
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
     * This method calculates the pokemon damage with his type, this function only works on the Pokemon Universe
     * @param Fighter Second Pokemon Fighter
     * @returns Damage of the Pokemon
     */
    getDamage(Fighter) {
        const superEfective = 2;
        const neutral = 1;
        const notVeryEffective = 0.5;
        let pokemonEffectiveness = 0;
        if (this.type == 'fuego' && Fighter.type == 'hierba') {
            pokemonEffectiveness = superEfective;
        }
        else if (this.type == 'fuego' && Fighter.type == 'agua') {
            pokemonEffectiveness = notVeryEffective;
        }
        else if (this.type == 'fuego' && Fighter.type == 'eléctrico') {
            pokemonEffectiveness = neutral;
        }
        else if (this.type == 'agua' && Fighter.type == 'hierba') {
            pokemonEffectiveness = notVeryEffective;
        }
        else if (this.type == 'agua' && Fighter.type == 'eléctrico') {
            pokemonEffectiveness = notVeryEffective;
        }
        else if (this.type == 'agua' && Fighter.type == 'fuego') {
            pokemonEffectiveness = superEfective;
        }
        else if (this.type == 'hierba' && Fighter.type == 'eléctrico') {
            pokemonEffectiveness = neutral;
        }
        else if (this.type == 'hierba' && Fighter.type == 'fuego') {
            pokemonEffectiveness = notVeryEffective;
        }
        else if (this.type == 'hierba' && Fighter.type == 'agua') {
            pokemonEffectiveness = superEfective;
        }
        else if (this.type == 'eléctrico' && Fighter.type == 'agua') {
            pokemonEffectiveness = superEfective;
        }
        const damage = ((this.attack / this.defense) * pokemonEffectiveness);
        return damage;
    }
    getPokemonTrainer() {
        return this.pokemonTrainer;
    }
    getGeneralDamage() {
        const damage = (this.attack / this.defense);
        return damage;
    }
    /**
     * Prints information of a Pokemon
     * @return Printed Pokemon Information
     */
    printPokemonData() {
        return `El ${this.getName()} de ${this.pokemonTrainer} es un pokemon de tipo ${this.getType()}, pesa ${this.getWeight()} kg y mide ${this.getHeight()} m.Tiene ${this.getAttack()} puntos de ataque, ${this.getDefense()} puntos de defensa, ${this.getVelocity()} puntos de velocidad y ${this.getHealth()} puntos de vida`;
    }
}
exports.Pokemon = Pokemon;
