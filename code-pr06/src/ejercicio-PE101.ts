/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

interface Collectable<T> {
  addItem(item : T) : void;
  getItem(item : number) : T;
  removeItem(index : number) : T[];
  getNumberOfItems() : number;
}

interface Searchable<T> {
  search(searchTerm : T) : T[] | undefined;
}

export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  /**
   * Constructor of Searchable Collection
   * @param items Array of items
   */
  constructor(private items : T[]) { }

  /**
   * Method that adds an item on the array
   * @param item An item of the items array
   * @return The array with the added item
   */
  addItem(item: T) {
    this.items.push(item);
    return this.items;
  }

  /**
   * Gets an item of the array with an specified index
   * @param index Index of the Item I want to get
   * @return The value of a specified index
   */
  getItem(index : number) {
    return this.items[index];
  }

  /**
   * Removes an item of the array with an specified index
   * @param index Index of the item to be deleted
   * @return The array with the removed item
   */
  removeItem(index : number): T[] {
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

  abstract search(searchTerm: T): T[] | undefined;
}

export class NumericSearcheableCollection extends SearchableCollection<number> {
  /**
   * Constructor of NumericSearcheableCollection
   * @param items A number Array of items
   */
  constructor(items : number[]) {
    super(items);
  }

  /**
   * This method searchs a number of coincidence with the search Term specified
   * @param searchTerm A number to search on the array
   * @return The array with the numbers found
   */
  search(searchTerm: number): number[] | undefined {
    const result : number[] = [];
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      if (this.getItem(i) === searchTerm) {
        result.push(searchTerm);
      }
    }
    return result;
  }
}

export class StringSearcheableCollection extends SearchableCollection<string> {
  constructor(items : string[]) {
    super(items);
  }

  /**
   * This method searchs a number of coincidence with the search Term specified
   * @param searchTerm A string or substring to search on the array
   * @return The array with the string or substring found
   */
  search(searchTerm: string): string[] | undefined {
    const result : string[] = [];
    for (let i = 0; i < this.getNumberOfItems(); i++) {
      if (this.getItem(i).includes(searchTerm) === true) {
        result.push(searchTerm);
      }
    }
    return result;
  }
}

const numericCollection = new NumericSearcheableCollection([1, 2, 1, 3, 4]);
const stringCollection = new StringSearcheableCollection(['hola', 'hola', 'adios']);

// console.log(numericCollection.addItem(1));
// console.log(numericCollection.getItem(1));

// console.log(stringCollection.addItem('hola'));
// console.log(stringCollection.getItem(2));
console.log(numericCollection.removeItem(0));

console.log(numericCollection.search(1));
console.log(stringCollection.search('ola'));

