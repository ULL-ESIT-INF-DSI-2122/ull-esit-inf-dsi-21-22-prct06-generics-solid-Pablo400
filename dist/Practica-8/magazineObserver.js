"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineObserver = void 0;
const magazine_1 = require("./magazine");
const magazine_2 = require("./magazine");
class MagazineObserver {
    constructor(name, magazineNumber, category) {
        this.name = name;
        this.magazineNumber = magazineNumber;
        this.category = category;
    }
    getName() {
        return this.name;
    }
    getMagazineNumber() {
        return this.magazineNumber;
    }
    getCategory() {
        return this.category;
    }
    update(observable) {
        if (observable instanceof magazine_1.Magazine) {
            switch (observable.getEventType()) {
                case magazine_2.MagazineEvent.NEW_MAGAZINE:
                    console.log(`I am a MagazineObserver called ${this.name} ` +
                        `and I have observed that agazine ${observable.getName()} ` +
                        `have launched a new magazine`);
                    break;
            }
        }
    }
}
exports.MagazineObserver = MagazineObserver;
