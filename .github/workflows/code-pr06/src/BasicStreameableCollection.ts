/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

/**
 * Interface of Basic Streameable Collection
 */
interface Streameable<T> {
  addAudiovisualProduct(audiovisualProduct : T) : void;
  getAudiovisualProducts() : T[];
  removeAudiovisualProduct(index : number) : T[] | undefined;
  getNumberOfAudiovisualProducts() : number;
}

/**
 * Interface that contains the search methods of audiovisual products
 */
interface StreameableSearch<T> {
  searchAudiovisualProductByYear(searchTerm : number) : T[] | undefined;
  searchAudiovisualProductByName(searchTerm : string) : T[] | undefined;
}

/**
 * Base class of the different collections
 */
export abstract class BasicStreamableCollection<T> implements Streameable<T>, StreameableSearch<T> {
  constructor(private audiovisualProducts : T[]) { }

  /**
   * Method to get the number of audiovisual products
   * @return The number of audiovisual products
   */
  getNumberOfAudiovisualProducts() {
    return this.audiovisualProducts.length;
  }

  /**
   * This method adds an audiovisual product of any collection
   * @param audiovisualProduct Any audiovisual product
   * @return The audiovisual product array with the added audiovisual product
   */
  addAudiovisualProduct(audiovisualProduct : T) {
    this.audiovisualProducts.push(audiovisualProduct);
    return this.audiovisualProducts;
  }

  /**
   * Get any audiovisual product
   * @return The actual audiovisual product array
   */
  getAudiovisualProducts() {
    return this.audiovisualProducts;
  }

  /**
   * This method removes an audiovisual product of any collection
   * @param index The index of the element to be deleted
   * @return The audiovisual product array without the deleted audiovisual product
   */
  removeAudiovisualProduct(index : number) {
    if (index < this.getNumberOfAudiovisualProducts()) {
      this.audiovisualProducts.splice(index, 1);
    } else {
      return undefined;
    }
    return this.audiovisualProducts;
  }

  abstract searchAudiovisualProductByYear(searchTerm: number): T[] | undefined;
  abstract searchAudiovisualProductByName(searchTerm: string): T[] | undefined;
}
