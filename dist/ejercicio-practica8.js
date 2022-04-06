"use strict";
var MagazineEvent;
(function (MagazineEvent) {
    MagazineEvent[MagazineEvent["NO_EVENT"] = 0] = "NO_EVENT";
    MagazineEvent[MagazineEvent["NEW_MAGAZINE"] = 1] = "NEW_MAGAZINE";
})(MagazineEvent || (MagazineEvent = {}));
;
class Subscriptor {
    constructor(newSubscription, observers) {
        this.newSubscription = newSubscription;
        this.observers = observers;
    }
    subscribe() {
        if (this.observers.includes(this.newSubscription)) {
            throw new Error('The observer had already been subscribed');
        }
        else {
            this.observers.push(this.newSubscription);
        }
    }
}
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
        console.log(`Se ha lanzado la revista ${this.name}`);
        this.notify();
    }
}
class MagazineObserver {
    constructor(name, magazineNumber, category) {
        this.name = name;
        this.magazineNumber = magazineNumber;
        this.category = category;
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
    update(observable) {
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
const myMagazine = new Magazine('Hola', 100, 'Actualidad');
const magazineObserver = new MagazineObserver('Hola', 100, 'Actualidad');
const newSubscription = new Subscriptor(magazineObserver, myMagazine.getObserversArray());
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
