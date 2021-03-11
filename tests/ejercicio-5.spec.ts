import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-5';

describe('Prueba de ejercicio 5', () => {
  it('multiplyAll([2, 6, 8])(3) returns vector [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.deep.equal([6, 18, 24]);
  });
});
