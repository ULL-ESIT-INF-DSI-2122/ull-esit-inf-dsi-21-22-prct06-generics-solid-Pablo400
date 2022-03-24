"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
/**
 * Series Class that creates a Series object
 */
class Series {
    /**
     * Series constructor
     * @param name Series Name
     * @param genre Series Genre
     * @param year Series Year
     * @param seasons Series Seasons
     * @param episodes Series Episodes
     * @param rating Series Rating
     */
    constructor(name, genre, year, seasons, episodes, rating) {
        this.name = name;
        this.genre = genre;
        this.year = year;
        this.seasons = seasons;
        this.episodes = episodes;
        this.rating = rating;
    }
    getSeriesName() {
        return this.name;
    }
    getSeriesGenre() {
        return this.genre;
    }
    getSeriesYear() {
        return this.year;
    }
    getSeason() {
        return this.seasons;
    }
    getEpisodes() {
        return this.episodes;
    }
    getSeriesRating() {
        return this.rating;
    }
}
exports.Series = Series;
