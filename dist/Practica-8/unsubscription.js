"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class UnSubscriptor {
    constructor(newSubscription, observers) {
        this.newSubscription = newSubscription;
        this.observers = observers;
    }
    unsubscribe() {
        const index = this.observers.indexOf(this.observers);
        if (index === -1) {
            throw new Error('The observer has not been subscribed');
        }
        else {
            this.observers.splice(index, 1);
        }
    }
}
