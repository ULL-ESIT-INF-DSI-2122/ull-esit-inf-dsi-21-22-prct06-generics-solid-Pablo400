/* eslint-disable no-unused-vars */

/**
 * Observable interface
 */
export interface Observable {
  notify(): void;
  unsubscribe(observer: Observer): void;
}

/**
 * Subscribe interface to subscribe a magaine object
 */
export interface Subscribe {
  subscribe(observer: Observer): void;
}

/**
 * Interface for observer classes
 */
export interface Observer {
  update(observable: Observable): void;
}
