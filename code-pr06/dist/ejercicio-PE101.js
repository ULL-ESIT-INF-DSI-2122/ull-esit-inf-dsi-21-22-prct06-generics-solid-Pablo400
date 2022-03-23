"use strict";
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringSearcheableCollection = exports.NumericSearcheableCollection = exports.SearchableCollection = void 0;
class SearchableCollection {
    constructor(items) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
        return this.items;
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(0, 1);
        return this.items;
    }
    getNumberOfItems() {
        return this.items.length;
    }
}
exports.SearchableCollection = SearchableCollection;
class NumericSearcheableCollection extends SearchableCollection {
    constructor(items) {
        super(items);
    }
    search(searchTerm) {
        const result = [];
        for (let i = 0; i < this.getNumberOfItems(); i++) {
            if (this.getItem(i) === searchTerm) {
                result.push(searchTerm);
            }
        }
        return result;
    }
}
exports.NumericSearcheableCollection = NumericSearcheableCollection;
class StringSearcheableCollection extends SearchableCollection {
    constructor(items) {
        super(items);
    }
    search(searchTerm) {
        const result = [];
        for (let i = 0; i < this.getNumberOfItems(); i++) {
            if (this.getItem(i).includes(searchTerm) === true) {
                result.push(searchTerm);
            }
        }
        return result;
    }
}
exports.StringSearcheableCollection = StringSearcheableCollection;
const numericCollection = new NumericSearcheableCollection([1, 2, 1, 3, 4]);
const stringCollection = new StringSearcheableCollection(['hola', 'hola', 'adios']);
// console.log(numericCollection.addItem(1));
// console.log(numericCollection.getItem(1));
// console.log(stringCollection.addItem('hola'));
// console.log(stringCollection.getItem(2));
console.log(numericCollection.removeItem(0));
console.log(numericCollection.search(1));
console.log(stringCollection.search('ola'));
