/* eslint-disable valid-jsdoc */

/**
 * Save each fighter Data
 */
export class SaveFighter<Universe> {
  /**
   * Constructor of Save Fighter
   */
  constructor() {};

  /**
   * Save Any Fighter data
   * @param Fighter Any fighter
   * @return Array with all fighters data
   */
  saveFighter(...Fighter : Universe[]) {
    const fighterSave : Universe[] = [];
    Fighter.forEach((fighter) => {
      fighterSave.push(fighter);
    });

    return fighterSave;
  }
}
