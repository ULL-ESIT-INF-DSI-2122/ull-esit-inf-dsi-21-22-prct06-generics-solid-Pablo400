"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicStreamableCollection = void 0;
/**
 * Base class of the different collections
 */
class BasicStreamableCollection {
    constructor(audiovisualProducts) {
        this.audiovisualProducts = audiovisualProducts;
    }
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
    addAudiovisualProduct(audiovisualProduct) {
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
