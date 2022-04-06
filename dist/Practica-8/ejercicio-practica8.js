"use strict";
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
const magazine_1 = require("./magazine");
const subscriptor_1 = require("./subscriptor");
const magazineObserver_1 = require("./magazineObserver");
const myMagazine = new magazine_1.Magazine('Hola', 100, 'Actualidad');
const magazineObserver = new magazineObserver_1.MagazineObserver('Hola', 100, 'Actualidad');
const newSubscription = new subscriptor_1.Subscriptor(magazineObserver, myMagazine.getObserversArray());
console.log('MagazineObserver subscription');
newSubscription.subscribe();
try {
    newSubscription.subscribe();
}
catch (error) {
    console.log('MagazineObserver was already subscribed');
}
myMagazine.onNewLaunch();
console.log('MagazineObserver unsubscription');
myMagazine.unsubscribe(magazineObserver);
