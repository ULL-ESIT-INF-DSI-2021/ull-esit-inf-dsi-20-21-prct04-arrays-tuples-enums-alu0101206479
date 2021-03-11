import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/ejercicio-6';
import {resta} from '../src/ejercicio-6';
import {producto} from '../src/ejercicio-6';
import {distanciaEuclidea} from '../src/ejercicio-6';

describe('Prueba de ejercicio 6', () => {
  it('suma([5, 3], [2, 7]) returns vector [7, 10]', () => {
    expect(suma([5, 3], [2, 7])).to.deep.equal([7, 10]);
  });

  it('resta([5, 3], [2, 7]) returns vector [3, -4]', () => {
    expect(resta([5, 3], [2, 7])).to.deep.equal([3, -4]);
  });

  it('producto([5, 3], 2) returns vector [10, 6]', () => {
    expect(producto([5, 3], 2)).to.deep.equal([10, 6]);
  });

  it('distanciaEuclidea([5, 3], [2, 7]) returns value 5', () => {
    expect(distanciaEuclidea([5, 3], [2, 7])).to.be.equal(5);
  });
});
