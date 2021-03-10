import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-4';

describe('Prueba de ejercicio 4', () => {
  it('moveZeros([1, 0, 1, 2, 0, 1, 3]) returns vector [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.deep.equal([1, 1, 2, 1, 3, 0, 0]);
  });
});
