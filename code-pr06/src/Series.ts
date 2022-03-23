/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */

/**
 * Series Class that creates a Series object
 */
export class Series {
  /**
   * Series constructor
   * @param name Series Name
   * @param genre Series Genre
   * @param year Series Year
   * @param seasons Series Seasons
   * @param episodes Series Episodes
   * @param rating Series Rating
   */
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
