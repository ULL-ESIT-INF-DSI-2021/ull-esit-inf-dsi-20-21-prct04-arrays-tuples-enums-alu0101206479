import 'mocha';
import {expect} from 'chai';
import {muestraTexto} from '../src/ejercicio-1';

describe('Prueba de ejercicio 1', () => {
  it('Muestra texto "Hola mundo"', () => {
    expect(muestraTexto("Hola mundo")).to.be.equal("Hola mundo");
  });
});
