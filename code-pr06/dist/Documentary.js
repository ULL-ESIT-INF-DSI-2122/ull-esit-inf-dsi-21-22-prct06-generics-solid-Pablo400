"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documentary = void 0;
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class Documentary {
    constructor(name, year, seasons, episodes, broadcastingMedia) {
        this.name = name;
        this.year = year;
        this.seasons = seasons;
        this.episodes = episodes;
        this.broadcastingMedia = broadcastingMedia;
    }
    getDocumentaryName() {
        return this.name;
    }
    getDocumentaryYear() {
        return this.year;
    }
    getDocumentarySeasons() {
        return this.seasons;
    }
    getDocumentaryEpisodes() {
        return this.episodes;
    }
    getBroadcastingMedia() {
        return this.broadcastingMedia;
    }
}
exports.Documentary = Documentary;
