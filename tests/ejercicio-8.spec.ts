import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio-8';

describe('Prueba de ejercicio 6', () => {
  it('agent(10, 10, [1, 3], [3, 5]) returns vector ["North", "North", "East", "East"]', () => {
    expect(agent(10, 10, [1, 3], [3, 5])).to.deep.equal(["North", "North", "East", "East"]);
  });
});
