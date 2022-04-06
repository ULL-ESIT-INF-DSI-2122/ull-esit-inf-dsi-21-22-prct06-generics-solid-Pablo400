/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import {Observable} from './Interfaces';
import {Observer} from './Interfaces';

/**
 * Enum of the magazine event state
 */
export enum MagazineEvent {'NO_EVENT', 'NEW_MAGAZINE'};

/**
 * Class magazine that creates a new magazine object
 */
export class Magazine implements Observable {
  private observers: Observer[] = [];

  /**
   * Gets a event, in this a no_event
   */
  private eventType: MagazineEvent = MagazineEvent.NO_EVENT;

  constructor(private name: string, private magazineNumber: number, private category: string) {}

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
  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
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
