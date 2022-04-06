"use strict";
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = exports.MagazineEvent = void 0;
var MagazineEvent;
(function (MagazineEvent) {
    MagazineEvent[MagazineEvent["NO_EVENT"] = 0] = "NO_EVENT";
    MagazineEvent[MagazineEvent["NEW_MAGAZINE"] = 1] = "NEW_MAGAZINE";
})(MagazineEvent = exports.MagazineEvent || (exports.MagazineEvent = {}));
;
class Magazine {
    constructor(name, magazineNumber, category) {
        this.name = name;
        this.magazineNumber = magazineNumber;
        this.category = category;
        this.observers = [];
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
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            throw new Error('The observer has not been subscribed');
        }
        else {
            this.observers.splice(index, 1);
        }
    }
    notify() {
        this.observers.forEach((observer) => observer.update(this));
    }
    getObserversArray() {
        return this.observers;
    }
    onNewLaunch() {
        this.eventType = MagazineEvent.NEW_MAGAZINE;
        const newLaunch = `Se ha lanzado la revista ${this.name}`;
        this.notify();
        return newLaunch;
    }
}
exports.Magazine = Magazine;
