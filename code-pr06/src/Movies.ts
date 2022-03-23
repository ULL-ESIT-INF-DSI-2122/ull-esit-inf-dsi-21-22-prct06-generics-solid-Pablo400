/* eslint-disable require-jsdoc */
export class Movie {
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
