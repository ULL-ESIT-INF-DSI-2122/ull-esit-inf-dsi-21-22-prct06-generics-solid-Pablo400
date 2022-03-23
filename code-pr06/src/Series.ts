/* eslint-disable require-jsdoc */
export class Series {
  constructor(private name : string, private genre : string,
    private year : number, private seasons : number,
    private episodes : number, private rating : string) {}

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
