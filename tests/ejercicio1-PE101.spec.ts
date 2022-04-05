/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/ejercicio-1-PE101';

const randomInstance = RandomNumber.getRandomInsance();

describe('ejercicio 1-PE-101 ', () => {
  it('randomInstance.getAleatoryNumber() greater than 0 return true', () => {
    expect(randomInstance.getAleatoryNumber()).to.be.gte(0);
  });
  it('randomInstance.getAleatoryNumber() is less than 1 return true', () => {
    expect(randomInstance.getAleatoryNumber()).to.be.lte(1);
  });

  it('randomInstance.integrerAleatoryNumber(4, 8) greater than 4 return true', () => {
    expect(randomInstance.integrerAleatoryNumber(4, 8)).to.be.gte(4);
  });
  it('randomInstance.integrerAleatoryNumber(4, 8) is less than 8 return true', () => {
    expect(randomInstance.integrerAleatoryNumber(4, 8)).to.be.lte(8);
  });

  it('randomInstance.floatAleatoryNumber(5, 7) greater than 5 return true', () => {
    expect(randomInstance.floatAleatoryNumber(5, 7)).to.be.gte(5);
  });
  it('randomInstance.integrerAleatoryNumber(4, 8) is less than 7 return true', () => {
    expect(randomInstance.floatAleatoryNumber(5, 7)).to.be.lte(7);
  });
});
