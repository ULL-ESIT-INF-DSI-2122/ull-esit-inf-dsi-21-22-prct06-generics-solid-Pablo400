"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const Series_1 = require("./Series");
const Movies_1 = require("./Movies");
const Documentary_1 = require("./Documentary");
const BasicStreameableCollection_1 = require("./BasicStreameableCollection");
class SeriesCollection extends BasicStreameableCollection_1.BasicStreamableCollection {
    constructor(audiovisualProducts) {
        super(audiovisualProducts);
    }
    ;
    searchAudiovisualProductByYear(seriesYear) {
        return this.getAudiovisualProducts().filter((series) => series.getSeriesYear() === seriesYear);
    }
    searchAudiovisualProductByName(seriesName) {
        return this.getAudiovisualProducts().filter((series) => series.getSeriesName() === seriesName);
    }
}
class FilmsCollection extends BasicStreameableCollection_1.BasicStreamableCollection {
    constructor(audiovisualProducts) {
        super(audiovisualProducts);
    }
    ;
    searchAudiovisualProductByYear(moviesYear) {
        return this.getAudiovisualProducts().filter((movies) => movies.getMovieYear() === moviesYear);
    }
    searchAudiovisualProductByName(moviesName) {
        return this.getAudiovisualProducts().filter((movies) => movies.getMovieName() === moviesName);
    }
}
class DocumentaryCollection extends BasicStreameableCollection_1.BasicStreamableCollection {
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
const mySeriesCollection = new SeriesCollection([
    new Series_1.Series('The Umbrella Academy', 'Drama', 2019, 2, 20, 'TV-16'),
    new Series_1.Series('Stranger Things', 'Misterio', 2016, 4, 34, 'TV-14'),
]);
const myMoviesCollection = new FilmsCollection([
    new Movies_1.Movie('The Batman', 'Suspense', 2022, 176, 'PG-13'),
    new Movies_1.Movie('The Avengers', 'Acción', 2012, 143, 'PG-13'),
]);
const myDocumentaryCollection = new DocumentaryCollection([
    new Documentary_1.Documentary('El Hombre y la Tierra', 1974, 3, 124, 'RTVE'),
    new Documentary_1.Documentary('Planeta Tierra', 2006, 1, 11, 'BBC'),
]);
console.log(mySeriesCollection.searchAudiovisualProductByYear(2019));
console.log(myMoviesCollection.searchAudiovisualProductByYear(2022));
console.log(myDocumentaryCollection.searchAudiovisualProductByYear(2006));
