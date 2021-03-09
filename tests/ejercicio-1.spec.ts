import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('Prueba de ejercicio 1', () => {
  it('Valor de una resistencia con dos colores "decodeResistor(["Marrón", "Verde"])"', () => {
    expect(decodeResistor(["Marrón", "Verde"])).to.be.equal(15);
  });

  it('Valor de una resistencia con tres colores "decodeResistor(["Marrón", "Verde"])"'), () => {
    expect(decodeResistor(["Marrón", "Verde", "Violeta"])).to.be.equal(15);
  };
});
