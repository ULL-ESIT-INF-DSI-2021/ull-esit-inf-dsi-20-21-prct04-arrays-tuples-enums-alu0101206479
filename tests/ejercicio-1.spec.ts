import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('Prueba de ejercicio 1', () => {
  it('decodeResistor(["Marrón", "Verde"]) returns value 15', () => {
    expect(decodeResistor(["Marrón", "Verde"])).to.be.equal(15);
  });

  it('decodeResistor(["Marrón", "Verde", "Violeta"]) returns value 15', () => {
    expect(decodeResistor(["Marrón", "Verde", "Violeta"])).to.be.equal(15);
  });
});
