/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio-3';

const prueba = new Cifrado('abcdefghijklmnopqrstuvwxyz', 'adios', 'clave');
const prueba2 = new Cifrado('abcdefghijklmnopqrstuvwxyz', 'hastaluego', 'clave');
const prueba3 = new Cifrado('abcdefghijklmnopqrstuvwxyz', 'coijw', 'clave');
const prueba4 = new Cifrado('abcdefghijklmnopqrstuvwxyz', 'Hola', 'clave');

describe('Ejercicio 3', () => {
  it('prueba.getAlphabet() return abcdefghijklmnopqrstuvwxyz', () => {
    expect(prueba.getAlphabet()).to.be.eql('abcdefghijklmnopqrstuvwxyz');
  });
  it('prueba.umbreakableCypherandDecypher(true) return coijw', () => {
    expect(prueba.umbreakableCypherandDecypher(true)).to.be.equal('coijw');
  });
  it('prueba2.umbreakableCypherandDecypher(true) return jlsoenfebs', () => {
    expect(prueba2.umbreakableCypherandDecypher(true)).to.be.equal('jlsoenfebs');
  });
  it('prueba3.umbreakableCypherandDecypher(false) return adios', () => {
    expect(prueba3.umbreakableCypherandDecypher(false)).to.be.equal('adios');
  });
  it('prueba3.umbreakableCypherandDecypher(true) return jzlv', () => {
    expect(prueba4.umbreakableCypherandDecypher(true)).to.be.equal('jzlv');
  });
});
