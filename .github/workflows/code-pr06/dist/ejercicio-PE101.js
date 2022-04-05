"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringSearcheableCollection = exports.NumericSearcheableCollection = exports.SearchableCollection = void 0;
class SearchableCollection {
    /**
     * Constructor of Searchable Collection
     * @param items Array of items
     */
    constructor(items) {
        this.items = items;
    }
    /**
     * Method that adds an item on the array
     * @param item An item of the items array
     * @return The array with the added item
     */
    addItem(item) {
        this.items.push(item);
        return this.items;
    }
    /**
     * Gets an item of the array with an specified index
     * @param index Index of the Item I want to get
     * @return The value of a specified index
     */
    getItem(index) {
        return this.items[index];
    }
    /**
     * Removes an item of the array with an specified index
     * @param index Index of the item to be deleted
     * @return The array with the removed item
     */
    removeItem(index) {
        this.items.splice(0, 1);
        return this.items;
    }
    /**
     * Gets the number of items on the array
     * @return The lenght of the items array
     */
    getNumberOfItems() {
        return this.items.length;
    }
}
exports.SearchableCollection = SearchableCollection;
class NumericSearcheableCollection extends SearchableCollection {
    /**
     * Constructor of NumericSearcheableCollection
     * @param items A number Array of items
     */
    constructor(items) {
        super(items);
    }
    /**
     * This method searchs a number of coincidence with the search Term specified
     * @param searchTerm A number to search on the array
     * @return The array with the numbers found
     */
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
    /**
     * This method searchs a number of coincidence with the search Term specified
     * @param searchTerm A string or substring to search on the array
     * @return The array with the string or substring found
     */
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
