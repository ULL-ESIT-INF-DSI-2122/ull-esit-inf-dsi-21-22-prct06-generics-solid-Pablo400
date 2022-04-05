"use strict";
/* eslint-disable valid-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFighter = void 0;
/**
 * Save each fighter Data
 */
class SaveFighter {
    /**
     * Constructor of Save Fighter
     */
    constructor() { }
    ;
    /**
     * Save Any Fighter data
     * @param Fighter Any fighter
     * @return Array with all fighters data
     */
    saveFighter(...Fighter) {
        const fighterSave = [];
        Fighter.forEach((fighter) => {
            fighterSave.push(fighter);
        });
        return fighterSave;
    }
}
exports.SaveFighter = SaveFighter;
