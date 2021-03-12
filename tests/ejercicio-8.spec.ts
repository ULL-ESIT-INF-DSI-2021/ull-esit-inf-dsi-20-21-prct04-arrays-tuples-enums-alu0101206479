import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio-8';

describe('Prueba de ejercicio 8', () => {
  it('agent(10, 10, [1, 3], [3, 5]) returns vector ["North", "North", "East", "East"]', () => {
    expect(agent(10, 10, [1, 3], [3, 5])).to.deep.equal(["North", "North", "East", "East"]);
  });

  it('agent(10, 10, [11, 3], [3, 5]) returns string "¡ERROR! El punto en el que esta situado el agente no se encuentra dentro del tablero, ya que está en la posición [11, 3] y el tablero es de 10x10"', () => {
    expect(agent(10, 10, [11, 3], [3, 5])).to.deep.equal("¡ERROR! El punto en el que esta situado el agente no se encuentra dentro del tablero, ya que está en la posición [11, 3] y el tablero es de 10x10");
  });

  it('agent(10, 10, [1, 3], [3, 13]) returns string "¡ERROR! El punto objetivo no se encuentra dentro del tablero, ya que está en la posición [3, 13] y el tablero es de 10x10"', () => {
    expect(agent(10, 10, [1, 3], [3, 13])).to.deep.equal("¡ERROR! El punto objetivo no se encuentra dentro del tablero, ya que está en la posición [3, 13] y el tablero es de 10x10");
  });
});
