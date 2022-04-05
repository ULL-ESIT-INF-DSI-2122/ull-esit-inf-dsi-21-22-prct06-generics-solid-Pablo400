/* eslint-disable valid-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable eol-last */

/**
 * Class of RandomNumber
 */
export class RandomNumber {
  private static randomInstance : RandomNumber;

  private constructor() { }

  /**
   * A random instance of a Random Number
   * @return A new instance or the same instance
   */
  public static getRandomInsance() : RandomNumber {
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
  floatAleatoryNumber(n : number, m : number) {
    return (Math.random() * (m - n)) + n;
  }

  /**
   * This method gets an interval an retuns a integrer aleatory number
   * @param n The less value
   * @param m The max value
   * @return Inetegrer aleatory number
   */
  integrerAleatoryNumber(n : number, m : number) {
    return Math.floor((Math.random() * ((m - n) + 1)) + n);
  }
}
