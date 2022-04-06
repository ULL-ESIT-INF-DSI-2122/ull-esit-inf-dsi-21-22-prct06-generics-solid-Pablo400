/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import {Subscribe} from './Interfaces';
import {Observer} from './Interfaces';

/**
 * Subscriptor Class this class subscribe an object
 */
export class Subscriptor implements Subscribe {
  constructor(protected newSubscription: Observer, private observers: Observer[]) {}

  /**
   * Method to subscribe an object
   */
  subscribe() {
    if (this.observers.includes(this.newSubscription)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(this.newSubscription);
    }
  }
}
