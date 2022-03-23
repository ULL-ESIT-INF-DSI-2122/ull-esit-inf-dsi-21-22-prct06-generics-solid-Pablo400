"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
/* eslint-disable require-jsdoc */
class Movie {
    constructor(name, genre, year, duration, rating) {
        this.name = name;
        this.genre = genre;
        this.year = year;
        this.duration = duration;
        this.rating = rating;
    }
    getMovieName() {
        return this.name;
    }
    getMovieGenre() {
        return this.genre;
    }
    getMovieYear() {
        return this.year;
    }
    getMovieDuration() {
        return this.duration;
    }
    getMovieRating() {
        return this.rating;
    }
}
exports.Movie = Movie;
