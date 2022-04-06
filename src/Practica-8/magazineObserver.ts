/* eslint-disable valid-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import {Magazine} from './magazine';
import {Observer} from './Interfaces';
import {Observable} from './Interfaces';
import {MagazineEvent} from './magazine';

/**
 * Class observer of magazine class
 */
export class MagazineObserver implements Observer {
  constructor(private name: string, private magazineNumber: number, private category: string) {
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

  /**
   * Updates the state of the magazine event
   * @param observable Gets and observable object
   */
  update(observable: Observable) {
    if (observable instanceof Magazine) {
      switch (observable.getEventType()) {
        case MagazineEvent.NEW_MAGAZINE:
          console.log(`I am a MagazineObserver called ${this.name} ` +
                      `and I have observed that agazine ${observable.getName()} ` +
                      `have launched a new magazine`);
          break;
      }
    }
  }
}
