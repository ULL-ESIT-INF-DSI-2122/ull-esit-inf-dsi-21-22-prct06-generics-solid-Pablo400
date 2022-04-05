"use strict";
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documentary = void 0;
/**
 * Documentary Class that creates a Documentary object
 */
class Documentary {
    /**
     * Documentary constructor
     * @param name Documentary Name
     * @param year Documentary Year of launch
     * @param seasons Documentary Seasons
     * @param episodes Documentary Episodes
     * @param broadcastingMedia Documentary Broadcasting Media
     */
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
