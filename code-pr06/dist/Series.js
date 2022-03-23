"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
/* eslint-disable require-jsdoc */
class Series {
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
