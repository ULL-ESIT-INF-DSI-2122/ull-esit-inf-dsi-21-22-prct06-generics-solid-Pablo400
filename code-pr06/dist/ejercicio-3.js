"use strict";
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnbreakableEncryption = void 0;
class UnbreakableEncryption {
    constructor(alphabet, message, key) {
        this.alphabet = alphabet;
        this.message = message;
        this.key = key;
    }
    getAlphabet() {
        return this.alphabet;
    }
    getMessage() {
        return this.message;
    }
    getKey() {
        return this.key;
    }
    resizekey(message, key) {
        let i = 0;
        while (key.length < message.length) {
            key += key.charAt(i);
            i++;
        }
        return key;
    }
    resizeMessage(message, key) {
        let i = 0;
        while (message.length < key.length) {
            message += message.charAt(i);
            i++;
        }
        return message;
    }
    getLetterPosition(alphabet, message, key) {
        for (let i = 0; i < alphabet.length; i++) {
        }
    }
    umbreakableCypher() {
        let newKey = this.getKey();
        let newMessage = this.getMessage();
        let cypherText = '';
        if (newKey.length < newMessage.length) {
            newKey = this.resizekey(newMessage, newKey);
        }
        if (newMessage.length < newKey.length) {
            newMessage = this.resizeMessage(newMessage, newKey);
        }
        return this.message;
    }
}
exports.UnbreakableEncryption = UnbreakableEncryption;
const prueba = new UnbreakableEncryption('abcdefghijk', 'hola', 'hola');
console.log(prueba.umbreakableCypher());
