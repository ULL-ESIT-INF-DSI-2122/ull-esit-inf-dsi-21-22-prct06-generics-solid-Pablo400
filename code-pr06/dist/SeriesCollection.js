"use strict";
/* eslint-disable require-jsdoc */
class SeriesCollection extends BasicStreamableCollection {
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
