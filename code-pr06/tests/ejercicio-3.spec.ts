/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {UnbreakableEncryption} from '../src/ejercicio-3';

const prueba = new UnbreakableEncryption('abcdefghijk', 'Hola', 'Clave');

describe('Ejercicio 3', () => {
  it('prueba.getAlphabet() return abcdefghijk', () => {
    expect(prueba.getAlphabet()).to.be.eql('abcdefghijk');
  });
  it('prueba.resizekey(prueba.getMessage(), prueba.getkey()) return ClaveClaveCl', () => {
    expect(prueba.resizekey(prueba.getMessage(), prueba.getKey())).to.be.eql('ClaveClaveCl');
  });
});
