/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

/**
 * Random number Collection
 */
export class RandomNumberSetCollection implements Iterable<number> {
  private aleatoryNumbers : Set<number>;

  /**
   * Constructor of the random number set collection
   * @param aleatoryNumbers Gets an aleatory numbers array
   */
  constructor(...aleatoryNumbers : number[]) {
    this.aleatoryNumbers = new Set(aleatoryNumbers);
  }

  /**
   * Adds any aleatory number
   * @param newNumber Any aleatory number
   */
  addAleatoryNumber(newNumber : number) {
    this.aleatoryNumbers.add(newNumber);
  }

  /**
   * Iterable method that allows to iterate any object
   * @returns The value of any random number
   */
  [Symbol.iterator](): Iterator<number> {
    return this.aleatoryNumbers.values();
  }
}
