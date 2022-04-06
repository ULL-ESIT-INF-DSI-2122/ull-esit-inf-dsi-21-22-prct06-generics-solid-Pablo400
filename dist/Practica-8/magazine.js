"use strict";
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = exports.MagazineEvent = void 0;
/**
 * Enum of the magazine event state
 */
var MagazineEvent;
(function (MagazineEvent) {
    MagazineEvent[MagazineEvent["NO_EVENT"] = 0] = "NO_EVENT";
    MagazineEvent[MagazineEvent["NEW_MAGAZINE"] = 1] = "NEW_MAGAZINE";
})(MagazineEvent = exports.MagazineEvent || (exports.MagazineEvent = {}));
;
/**
 * Class magazine that creates a new magazine object
 */
class Magazine {
    constructor(name, magazineNumber, category) {
        this.name = name;
        this.magazineNumber = magazineNumber;
        this.category = category;
        this.observers = [];
        /**
         * Gets a event, in this a no_event
         */
        this.eventType = MagazineEvent.NO_EVENT;
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
    getEventType() {
        return this.eventType;
    }
    getObserversArray() {
        return this.observers;
    }
    /**
     * Unsubscribes any observer object of type magazine
     * @param observer Observer type parameter to get unsubscribe
     */
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            throw new Error('The observer has not been subscribed');
        }
        else {
            this.observers.splice(index, 1);
        }
    }
    /**
     * Notify if a new magazine is created
     */
    notify() {
        this.observers.forEach((observer) => observer.update(this));
    }
    /**
     * This method informs the new Launch of any magazine
     * @returns Information of the magazine
     */
    onNewLaunch() {
        this.eventType = MagazineEvent.NEW_MAGAZINE;
        const newLaunch = `Se ha lanzado la revista ${this.name}, el número ${this.getMagazineNumber()} y con la categoria de ${this.getCategory()}`;
        this.notify();
        return newLaunch;
    }
}
exports.Magazine = Magazine;
