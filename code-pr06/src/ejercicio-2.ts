/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {Series} from './Series';
import {Movie} from './Movies';
import {Documentary} from './Documentary';
import {BasicStreamableCollection} from './BasicStreameableCollection';

/**
 * Series Collection Class
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {
  /**
   * The constructor of Series Collection
   * @param audiovisualProducts Array of Series
   */
  constructor(audiovisualProducts : Series[]) {
    super(audiovisualProducts);
  };

  /**
   * This method searchs for a Series by Year
   * @param seriesYear Series Year of Launch
   * @return All series found
   */
  searchAudiovisualProductByYear(seriesYear: number): Series[] | undefined {
    return this.getAudiovisualProducts().filter((series) => series.getSeriesYear() === seriesYear);
  }

  /**
   * This method searchs for a Series by Name
   * @param seriesName Series Name
   * @return The series found
   */
  searchAudiovisualProductByName(seriesName: string): Series[] | undefined {
    return this.getAudiovisualProducts().filter((series) => series.getSeriesName() === seriesName);
  }

  /**
   * This method searchs for a Series by Rating
   * @param seriesRating series Rating
   * @return The series found
   */
  searchAudiovisualProductByRating(seriesRating : string) : Series[] | undefined {
    return this.getAudiovisualProducts().filter((series) => series.getSeriesRating() === seriesRating);
  }
}


/**
 * Films Collection Class
 */
export class FilmsCollection extends BasicStreamableCollection<Movie> {
  /**
   * The constructor of Movies Collection
   * @param audiovisualProducts Array of Movies
   */
  constructor(audiovisualProducts : Movie[]) {
    super(audiovisualProducts);
  };

  /**
   * This method searchs for a Movie by Year
   * @param moviesYear Movie Year of Launch
   * @return All movies found
   */
  searchAudiovisualProductByYear(moviesYear: number): Movie[] | undefined {
    return this.getAudiovisualProducts().filter((movies) => movies.getMovieYear() === moviesYear);
  }

  /**
   * This method searchs for a Movie by Name
   * @param moviesName Movie Name
   * @return All movies found
   */
  searchAudiovisualProductByName(moviesName: string): Movie[] | undefined {
    return this.getAudiovisualProducts().filter((movies) => movies.getMovieName() === moviesName);
  }

  /**
   * This method searchs for a Movie by Rating
   * @param movieRating Movie Rating
   * @return All movies found
   */
  searchAudiovisualProductByRating(movieRating : string) : Movie[] | undefined {
    return this.getAudiovisualProducts().filter((movies) => movies.getMovieRating() === movieRating);
  }
}

/**
 * Documentaries Collection Class
 */
export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  /**
   * The constructor of Documentary Collection
   * @param audiovisualProducts Array of Documentaries
   */
  constructor(audiovisualProducts : Documentary[]) {
    super(audiovisualProducts);
  };

  /**
   * This method searchs for a Documentary by Year
   * @param documentaryYear Documentary Year of Launch
   * @return All documentaries found
   */
  searchAudiovisualProductByYear(documentaryYear: number): Documentary[] | undefined {
    return this.getAudiovisualProducts().filter((documentary) => documentary.getDocumentaryYear() === documentaryYear);
  }

  /**
   * This method searchs for a Documentary by Name
   * @param documentaryName Documentary Name
   * @return All documentaries found
   */
  searchAudiovisualProductByName(documentaryName: string): Documentary[] | undefined {
    return this.getAudiovisualProducts().filter((documentary) => documentary.getDocumentaryName() === documentaryName);
  }

  /**
   * This method searchs for a Documentary by Name
   * @param documentaryBroadcastingMedia Documentary Broadcasting Media
   * @return All documentaries found
   */
  searchAudiovisualProductByBroadcastingMedia(documentaryBroadcastingMedia: string): Documentary[] | undefined {
    return this.getAudiovisualProducts().filter((documentary) => documentary.getBroadcastingMedia() === documentaryBroadcastingMedia);
  }
}

/* const mySeriesCollection = new SeriesCollection([
  new Series('The Umbrella Academy', 'Drama', 2019, 2, 20, 'TV-16'),
  new Series('Stranger Things', 'Misterio', 2016, 4, 34, 'TV-14'),
]);

const myMoviesCollection = new FilmsCollection([
  new Movie('The Batman', 'Suspense', 2022, 176, 'PG-13'),
  new Movie('The Avengers', 'Acción', 2012, 143, 'PG-13'),
]);

const myDocumentaryCollection = new DocumentaryCollection([
  new Documentary('El Hombre y la Tierra', 1974, 3, 124, 'RTVE'),
  new Documentary('Planeta Tierra', 2006, 1, 11, 'BBC'),
]);

console.log(mySeriesCollection.searchAudiovisualProductByYear(2019));
console.log(myMoviesCollection.searchAudiovisualProductByYear(2022));
console.log(myDocumentaryCollection.searchAudiovisualProductByYear(2006)); */

