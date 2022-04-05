/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/ejercicio-1-PE101';
import {RandomNumberSetCollection} from '../src/ejercicio-2-PE101';

const randomInstance = RandomNumber.getRandomInsance();
const collection = new RandomNumberSetCollection(randomInstance.integrerAleatoryNumber(1, 10), randomInstance.integrerAleatoryNumber(1, 10), randomInstance.integrerAleatoryNumber(1, 10));
collection.addAleatoryNumber(randomInstance.integrerAleatoryNumber(1, 10));

describe('ejercicio 2-PE-101 ', () => {
  it('[...collection].length return 3', () => {
    expect([...collection].length).to.be.gte(3);
  });
});
