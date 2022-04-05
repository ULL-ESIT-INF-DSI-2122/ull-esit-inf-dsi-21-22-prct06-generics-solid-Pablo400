"use strict";
class FilmsCollection extends BasicStreamableCollection {
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
