/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Series} from '../src/Series';
import {Movie} from '../src/Movies';
import {Documentary} from '../src/Documentary';
import {SeriesCollection} from '../src/ejercicio-2';
import {FilmsCollection} from '../src/ejercicio-2';
import {DocumentaryCollection} from '../src/ejercicio-2';

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

const SeriesByYear = mySeriesCollection.searchAudiovisualProductByYear(2019);
const MoviesByYear = myMoviesCollection.searchAudiovisualProductByYear(2022);
const DocumentaryByYear = myDocumentaryCollection.searchAudiovisualProductByYear(2006);

const SeriesByName = mySeriesCollection.searchAudiovisualProductByName('Stanger Things');
const MoviesByName = myMoviesCollection.searchAudiovisualProductByName('The Batman');
const DocumentaryByName = myDocumentaryCollection.searchAudiovisualProductByName('El Hombre y la Tierra');

const SeriesByRating = mySeriesCollection.searchAudiovisualProductByRating('PG-13');
const MoviesByRating = myMoviesCollection.searchAudiovisualProductByRating('PG-13');

describe('Series ', () => {
  it('mySeriesCollection.searchAudiovisualProductByYear(2019) return SeriesByYear', () => {
    expect(mySeriesCollection.searchAudiovisualProductByYear(2019)).to.be.eql(SeriesByYear);
  });
  it('mySeriesCollection.searchAudiovisualProductByName(Stanger Things) return SeriesByYear', () => {
    expect(mySeriesCollection.searchAudiovisualProductByName('Stanger Things')).to.be.eql(SeriesByName);
  });
  it('mySeriesCollection.searchAudiovisualProductByRating(PG-13) return SeriesByRating', () => {
    expect(mySeriesCollection.searchAudiovisualProductByRating('PG-13')).to.be.eql(SeriesByRating);
  });
});

describe('Movies ', () => {
  it('myMoviesCollection.searchAudiovisualProductByYear(2022) return MoviesByYear', () => {
    expect(myMoviesCollection.searchAudiovisualProductByYear(2022)).to.be.eql(MoviesByYear);
  });
  it('myMoviesCollection.searchAudiovisualProductByName(The Batman) return SeriesByYear', () => {
    expect(myMoviesCollection.searchAudiovisualProductByName('The Batman')).to.be.eql(MoviesByName);
  });
  it('myMoviesCollection.searchAudiovisualProductByRating(PG-13) returnMoviesByRating', () => {
    expect(mySeriesCollection.searchAudiovisualProductByRating('PG-13')).to.be.eql(MoviesByRating);
  });
});

describe('Documentary ', () => {
  it('myDocumentaryCollection.searchAudiovisualProductByYear(2006) return DocumentaryByYear', () => {
    expect(myDocumentaryCollection.searchAudiovisualProductByYear(2006)).to.be.eql(DocumentaryByYear);
  });
  it('myDocumentaryCollection.searchAudiovisualProductByName(El Hombre y la Tierra) return SeriesByYear', () => {
    expect(myDocumentaryCollection.searchAudiovisualProductByName('El Hombre y la Tierra')).to.be.eql(DocumentaryByName);
  });
});
