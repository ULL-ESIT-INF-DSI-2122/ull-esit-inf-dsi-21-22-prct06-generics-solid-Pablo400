"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberSetCollection = void 0;
/**
 * Random number Collection
 */
class RandomNumberSetCollection {
    /**
     * Constructor of the random number set collection
     * @param aleatoryNumbers Gets an aleatory numbers array
     */
    constructor(...aleatoryNumbers) {
        this.aleatoryNumbers = new Set(aleatoryNumbers);
    }
    /**
     * Adds any aleatory number
     * @param newNumber Any aleatory number
     */
    addAleatoryNumber(newNumber) {
        this.aleatoryNumbers.add(newNumber);
    }
    /**
     * Iterable method that allows to iterate any object
     * @returns The value of any random number
     */
    [Symbol.iterator]() {
        return this.aleatoryNumbers.values();
    }
}
exports.RandomNumberSetCollection = RandomNumberSetCollection;
