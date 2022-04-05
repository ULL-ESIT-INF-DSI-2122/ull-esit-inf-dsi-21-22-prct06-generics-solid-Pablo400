/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {NumericSearcheableCollection} from '../src/ejercicio-PE101';
import {StringSearcheableCollection} from '../src/ejercicio-PE101';

const numericCollection = new NumericSearcheableCollection([1, 2, 1, 3, 4]);
const stringCollection = new StringSearcheableCollection(['hola', 'hola', 'adios']);

describe('ejercicio PE-101 ', () => {
  it('numericCollection.search(1) return [1, 1]', () => {
    expect(numericCollection.search(1)).to.be.eql([1, 1]);
  });
  it('numericCollection.getItem(1) return 2', () => {
    expect(numericCollection.getItem(1)).to.be.equal(2);
  });
  it('numericCollection.removeItem(0) return [ 2, 1, 3, 4 ]', () => {
    expect(numericCollection.removeItem(0)).to.be.eql([2, 1, 3, 4]);
  });
  it('numericCollection.addItem(1) return [2, 1, 3, 4, 1]', () => {
    expect(numericCollection.addItem(1)).to.be.eql([2, 1, 3, 4, 1]);
  });
  it('stringCollection.search(hola) return [ola, ola]', () => {
    expect(stringCollection.search('ola')).to.be.eql(['ola', 'ola']);
  });
  it('stringCollection.addItem(hola) return [hola, hola, adios, hola]', () => {
    expect(stringCollection.addItem('hola')).to.be.eql(['hola', 'hola', 'adios', 'hola']);
  });
  it('stringCollection.getItem(2) return adios', () => {
    expect(stringCollection.getItem(2)).to.be.equal('adios');
  });
});
