/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {Series} from './Series';
import {Movie} from './Movies';
import {Documentary} from './Documentary';
import {BasicStreamableCollection} from './BasicStreameableCollection';

export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(audiovisualProducts : Series[]) {
    super(audiovisualProducts);
  };

  searchAudiovisualProductByYear(seriesYear: number): Series[] | undefined {
    return this.getAudiovisualProducts().filter((series) => series.getSeriesYear() === seriesYear);
  }

  searchAudiovisualProductByName(seriesName: string): Series[] | undefined {
    return this.getAudiovisualProducts().filter((series) => series.getSeriesName() === seriesName);
  }

  searchAudiovisualProductByRating(seriesRating : string) : Series[] | undefined {
    return this.getAudiovisualProducts().filter((series) => series.getSeriesRating() === seriesRating);
  }
}

export class FilmsCollection extends BasicStreamableCollection<Movie> {
  constructor(audiovisualProducts : Movie[]) {
    super(audiovisualProducts);
  };

  searchAudiovisualProductByYear(moviesYear: number): Movie[] | undefined {
    return this.getAudiovisualProducts().filter((movies) => movies.getMovieYear() === moviesYear);
  }

  searchAudiovisualProductByName(moviesName: string): Movie[] | undefined {
    return this.getAudiovisualProducts().filter((movies) => movies.getMovieName() === moviesName);
  }

  searchAudiovisualProductByRating(movieRating : string) : Movie[] | undefined {
    return this.getAudiovisualProducts().filter((movies) => movies.getMovieRating() === movieRating);
  }
}

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  constructor(audiovisualProducts : Documentary[]) {
    super(audiovisualProducts);
  };

  searchAudiovisualProductByYear(documentaryYear: number): Documentary[] | undefined {
    return this.getAudiovisualProducts().filter((documentary) => documentary.getDocumentaryYear() === documentaryYear);
  }

  searchAudiovisualProductByName(documentaryName: string): Documentary[] | undefined {
    return this.getAudiovisualProducts().filter((documentary) => documentary.getDocumentaryName() === documentaryName);
  }
}

const mySeriesCollection = new SeriesCollection([
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
console.log(myDocumentaryCollection.searchAudiovisualProductByYear(2006));

