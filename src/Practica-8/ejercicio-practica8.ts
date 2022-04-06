/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

import {Magazine} from './magazine';
import {Subscriptor} from './subscriptor';
import {MagazineObserver} from './magazineObserver';

const myMagazine = new Magazine('Hola', 100, 'Actualidad');
const magazineObserver = new MagazineObserver('Hola', 100, 'Actualidad');
const newSubscription = new Subscriptor(magazineObserver, myMagazine.getObserversArray());

console.log('MagazineObserver subscription');
newSubscription.subscribe();

try {
  newSubscription.subscribe();
} catch (error) {
  console.log('MagazineObserver was already subscribed');
}

myMagazine.onNewLaunch();

console.log('MagazineObserver unsubscription');
myMagazine.unsubscribe(magazineObserver);
