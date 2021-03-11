import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/ejercicio-7';
import {resta} from '../src/ejercicio-7';
import {producto} from '../src/ejercicio-7';
import {distanciaEuclidea} from '../src/ejercicio-7';

describe('Prueba de ejercicio 6', () => {
  it('suma([5, 6, 2, 3], [7, 2, 1, 5]) returns vector [12, 8, 3, 8]', () => {
    expect(suma([5, 6, 2, 3], [7, 2, 1, 5])).to.deep.equal([12, 8, 3, 8]);
  });

  it('suma([5, 6, 2, 3], [7, 2, 1]) returns string "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"', () => {
    expect(suma([5, 6, 2, 3], [7, 2, 1])).to.be.equal("¡ERROR! Los puntos entrantes no tienen las mismas dimensiones");
  });

  it('resta([5, 6, 2, 3], [7, 2, 1, 5]) returns vector [-2, 4, 1, -2]', () => {
    expect(resta([5, 6, 2, 3], [7, 2, 1, 5])).to.deep.equal([-2, 4, 1, -2]);
  });

  it('resta([5, 6, 2, 3], [7, 2, 1]) returns string "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"', () => {
    expect(resta([5, 6, 2, 3], [7, 2, 1])).to.be.equal("¡ERROR! Los puntos entrantes no tienen las mismas dimensiones");
  });

  it('producto([5, 6, 2, 3], 3); returns vector [15, 18, 6, 9]', () => {
    expect(producto([5, 6, 2, 3], 3)).to.deep.equal([15, 18, 6, 9]);
  });

  it('distanciaEuclidea([5, 6, 2, 3], [7, 2, 1]) returns string "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"', () => {
    expect(distanciaEuclidea([5, 6, 2, 3], [7, 2, 1])).to.be.equal("¡ERROR! Los puntos entrantes no tienen las mismas dimensiones");
  });
});
