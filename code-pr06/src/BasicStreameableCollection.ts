/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
interface Streameable<T> {
  addAudiovisualProduct(audiovisualProduct : T) : void;
  getAudiovisualProducts() : T[];
  removeAudiovisualProduct(index : number) : T[] | undefined;
  getNumberOfAudiovisualProducts() : number;
}

interface StreameableSearch<T> {
  searchAudiovisualProductByYear(searchTerm : number) : T[] | undefined;
  searchAudiovisualProductByName(searchTerm : string) : T[] | undefined;
}

export abstract class BasicStreamableCollection<T> implements Streameable<T>, StreameableSearch<T> {
  constructor(private audiovisualProducts : T[]) { }

  getNumberOfAudiovisualProducts() {
    return this.audiovisualProducts.length;
  }

  addAudiovisualProduct(audiovisualProduct : T) {
    this.audiovisualProducts.push(audiovisualProduct);
    return this.audiovisualProducts;
  }

  getAudiovisualProducts() {
    return this.audiovisualProducts;
  }

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
