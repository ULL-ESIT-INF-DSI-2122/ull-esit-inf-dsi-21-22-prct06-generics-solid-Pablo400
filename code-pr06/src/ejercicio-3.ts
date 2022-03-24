/* eslint-disable require-jsdoc */

export class UnbreakableEncryption {
  constructor(private alphabet : string, private message : string,
    private key : string) {}

  getAlphabet() {
    return this.alphabet;
  }

  getMessage() {
    return this.message;
  }

  getKey() {
    return this.key;
  }

  resizekey(message : string, key : string) {
    let i = 0;
    while (key.length < message.length) {
      key += key.charAt(i);
      i++;
    }
    return key;
  }

  resizeMessage(message : string, key : string) {
    let i = 0;
    while (message.length < key.length) {
      message += message.charAt(i);
      i++;
    }
    return message;
  }

  getLetterPosition(alphabet : string, message : string, key : string) {
    for (let i = 0; i < alphabet.length; i++) {

    }
  }

  umbreakableCypher() {
    let newKey : string = this.getKey();
    let newMessage : string = this.getMessage();
    let cypherText : string = '';

    if (newKey.length < newMessage.length) {
      newKey = this.resizekey(newMessage, newKey);
    }

    if (newMessage.length < newKey.length) {
      newMessage = this.resizeMessage(newMessage, newKey);
    }

    return this.message;
  }
}

const prueba = new UnbreakableEncryption('abcdefghijk', 'hola', 'hola');

console.log(prueba.umbreakableCypher());
