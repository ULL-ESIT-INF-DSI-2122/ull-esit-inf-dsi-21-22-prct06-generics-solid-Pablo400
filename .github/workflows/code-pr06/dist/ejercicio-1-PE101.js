"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable eol-last */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
/**
 * Class of RandomNumber
 */
class RandomNumber {
    constructor() { }
    /**
     * A random instance of a Random Number
     * @return A new instance or the same instance
     */
    static getRandomInsance() {
        if (!RandomNumber.randomInstance) {
            RandomNumber.randomInstance = new RandomNumber();
        }
        return RandomNumber.randomInstance;
    }
    /**
     * Gets any aleatory number
     * @return Aleatory number between 0 an 1
     */
    getAleatoryNumber() {
        return Math.random();
    }
    /**
     * This method gets an interval an retuns a float aleatory number
     * @param n The less value
     * @param m The max value
     * @return A float aleatory number
     */
    floatAleatoryNumber(n, m) {
        return (Math.random() * (m - n)) + n;
    }
    /**
     * This method gets an interval an retuns a integrer aleatory number
     * @param n The less value
     * @param m The max value
     * @return Inetegrer aleatory number
     */
    integrerAleatoryNumber(n, m) {
        return Math.floor((Math.random() * ((m - n) + 1)) + n);
    }
}
exports.RandomNumber = RandomNumber;
