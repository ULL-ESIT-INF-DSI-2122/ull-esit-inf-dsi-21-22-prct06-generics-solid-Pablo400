"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentaryCollection = void 0;
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
class documentaryCollection extends BasicStreamableCollection {
    constructor(audiovisualProducts) {
        super(audiovisualProducts);
    }
    ;
    searchAudiovisualProductByYear(documentaryYear) {
        return this.getAudiovisualProducts().filter((documentary) => documentary.getDocumentaryYear() === documentaryYear);
    }
    searchAudiovisualProductByName(documentaryName) {
        return this.getAudiovisualProducts().filter((documentary) => documentary.getDocumentaryName() === documentaryName);
    }
}
exports.documentaryCollection = documentaryCollection;
