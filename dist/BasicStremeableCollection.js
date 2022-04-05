"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicStreamableCollection = void 0;
class BasicStreamableCollection {
    constructor(audiovisualProducts) {
        this.audiovisualProducts = audiovisualProducts;
    }
    getNumberOfAudiovisualProducts() {
        return this.audiovisualProducts.length;
    }
    addAudiovisualProduct(audiovisualProduct) {
        this.audiovisualProducts.push(audiovisualProduct);
        return this.audiovisualProducts;
    }
    getAudiovisualProducts() {
        return this.audiovisualProducts;
    }
    removeAudiovisualProduct(index) {
        if (index < this.getNumberOfAudiovisualProducts()) {
            this.audiovisualProducts.splice(index, 1);
        }
        else {
            return undefined;
        }
        return this.audiovisualProducts;
    }
}
exports.BasicStreamableCollection = BasicStreamableCollection;
