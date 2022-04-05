"use strict";
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
/**
 * Movie Class that creates a Movie object
 */
class Movie {
    /**
     * Movie constructor
     * @param name Movie Name
     * @param genre Movie Genre
     * @param year Movie Year
     * @param duration Movie Duration
     * @param rating Movie Rating
     */
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
