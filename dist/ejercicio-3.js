"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cifrado = void 0;
/**
 * Class where you can decypher a string
 */
class Cifrado {
    /**
     * Constructor of the class
     * @param alphabet Alphabet the user passes
     * @param message Message to cypher or Decypher
     * @param key Key of the cypher and decypher
     */
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
    /**
     * This method resizes the key in case the message lenght is higher
     * @param message Message to cypher or Decypher
     * @param key Key of the cypher and decypher
     * @return The new Key with the new lenght
     */
    resizekey(message, key) {
        let i = 0;
        while (key.length < message.length) {
            key += key.charAt(i);
            i++;
        }
        return key;
    }
    /**
     * This method gets the position on the alphabet of any string
     * @param alphabet The full alphabet introduced by the user
     * @param string Any string
     * @return The letter position of any letter on the string
     */
    getLetterPosition(alphabet, string) {
        let letterPosition = 0;
        for (let i = 0; i < alphabet.length; i++) {
            if (string === alphabet[i]) {
                letterPosition = i;
                break;
            }
        }
        return letterPosition;
    }
    /**
     * This method cypher or decypher a string
     * @param selectOption This lets the user to select if he wants to cypher or decypher a string
     * @returns The cypher or decypher string
     */
    umbreakableCypherandDecypher(selectOption) {
        let newKey = this.getKey();
        let newMessage = this.getMessage();
        let cypherFunction = 0;
        const cypherLetterPosition = [];
        let i = 0;
        let messageLetterPosition = 0;
        let keyLetterPosition = 0;
        let resultText = '';
        newKey = newKey.toLowerCase();
        newMessage = newMessage.toLowerCase();
        if (newKey.length < newMessage.length) {
            newKey = this.resizekey(newMessage, newKey);
        }
        while (i < newMessage.length) {
            messageLetterPosition = this.getLetterPosition(this.getAlphabet(), newMessage[i]);
            keyLetterPosition = this.getLetterPosition(this.getAlphabet(), newKey[i]);
            // Cifrar una cadena
            if (selectOption === true) {
                cypherFunction = (messageLetterPosition + keyLetterPosition) % (this.getAlphabet().length);
            }
            else {
                if ((messageLetterPosition - keyLetterPosition) % (this.getAlphabet().length) >= 0) {
                    cypherFunction = (messageLetterPosition - keyLetterPosition) % (this.getAlphabet().length);
                }
                else {
                    cypherFunction = (messageLetterPosition - keyLetterPosition + this.getAlphabet().length) % (this.getAlphabet().length);
                }
            }
            cypherLetterPosition.push(cypherFunction);
            i++;
        }
        cypherLetterPosition.forEach((position) => {
            resultText += this.getAlphabet()[position];
        });
        return resultText;
    }
}
exports.Cifrado = Cifrado;
/* const scanf = require('scanf');
let alphabet = '';
let message = '';
let key = '';
let selection = 0;
let selectOption = true;

console.log('Introduzca un alfabeto');
alphabet = scanf('%s');

console.log('Introduzca un mensaje para cifrar o descifrar');
message = scanf('%s');

console.log('Introduzca una clave');
key = scanf('%s');

const prueba = new Cifrado(alphabet, message, key);

console.log('¿Quiere cifrar o descifrar? (0-Cifrar, 1-Descifrar)');
selection = scanf('%d');

if (selection === 0) {
  selectOption = true;
  console.log(prueba.umbreakableCypherandDecypher(selectOption));
} else if (selection === 1) {
  selectOption = false;
  console.log(prueba.umbreakableCypherandDecypher(selectOption));
} else {
  console.log('Opción no soportada');
} */
