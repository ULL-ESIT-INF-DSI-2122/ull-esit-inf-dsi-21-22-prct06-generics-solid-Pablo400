/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */

/**
 * Movie Class that creates a Movie object
 */
export class Movie {
  /**
   * Movie constructor
   * @param name Movie Name
   * @param genre Movie Genre
   * @param year Movie Year
   * @param duration Movie Duration
   * @param rating Movie Rating
   */
  constructor(private name : string, private genre : string,
    private year : number, private duration : number,
    private rating : string) {}

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
