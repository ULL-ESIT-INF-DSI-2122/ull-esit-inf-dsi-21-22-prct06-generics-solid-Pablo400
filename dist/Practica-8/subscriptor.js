"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriptor = void 0;
/**
 * Subscriptor Class this class subscribe an object
 */
class Subscriptor {
    constructor(newSubscription, observers) {
        this.newSubscription = newSubscription;
        this.observers = observers;
    }
    /**
     * Method to subscribe an object
     */
    subscribe() {
        if (this.observers.includes(this.newSubscription)) {
            throw new Error('The observer had already been subscribed');
        }
        else {
            this.observers.push(this.newSubscription);
        }
    }
}
exports.Subscriptor = Subscriptor;
