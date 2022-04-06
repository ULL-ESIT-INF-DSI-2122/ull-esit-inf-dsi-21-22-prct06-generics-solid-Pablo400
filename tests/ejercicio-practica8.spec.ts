/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Magazine} from '../src/Practica-8/magazine';
import {Subscriptor} from '../src/Practica-8/subscriptor';
import {MagazineObserver} from '../src/Practica-8/magazineObserver';

const myMagazine = new Magazine('Hola', 100, 'Actualidad');
const magazineObserver = new MagazineObserver('Hola', 100, 'Actualidad');
// eslint-disable-next-line no-unused-vars
const newSubscription = new Subscriptor(magazineObserver, myMagazine.getObserversArray());

describe('Ejercicio Práctica 8 - Magazine', () => {
  it('myMagazine.onNewLaunch() return Se ha lanzado la revista Hola', () => {
    expect(myMagazine.onNewLaunch()).to.be.equal('Se ha lanzado la revista Hola, el número 100 y con la categoria de Actualidad');
  });
  it('myMagazine.getName() return Hola', () => {
    expect(myMagazine.getName()).to.be.equal('Hola');
  });
  it('myMagazine.getNumber() return 100', () => {
    expect(myMagazine.getMagazineNumber()).to.be.equal(100);
  });
  it('myMagazine.getCategory() return Actualidad', () => {
    expect(myMagazine.getCategory()).to.be.equal('Actualidad');
  });
  it('myMagazine return instance of magazine', () => {
    expect(myMagazine.getEventType()).to.be.equal(1);
  });
  it('myMagazine return instance of magazine', () => {
    expect(myMagazine).to.be.an.instanceOf(Magazine);
  });
});

describe('Ejercicio Práctica 8 - MagazineObserver', () => {
  it('myMagazine.getName() return Hola', () => {
    expect(magazineObserver.getName()).to.be.equal('Hola');
  });
  it('myMagazine.getNumber() return 100', () => {
    expect(magazineObserver.getMagazineNumber()).to.be.equal(100);
  });
  it('myMagazine.getCategory() return Actualidad', () => {
    expect(magazineObserver.getCategory()).to.be.equal('Actualidad');
  });
  it('myMagazine return instance of magazine', () => {
    expect(magazineObserver).to.be.an.instanceOf(MagazineObserver);
  });
});
