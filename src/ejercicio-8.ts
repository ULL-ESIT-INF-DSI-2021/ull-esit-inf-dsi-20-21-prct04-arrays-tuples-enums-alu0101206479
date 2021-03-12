type Point = [number, number];

/**
 * ```typescript
 * // Ejemplos de llamadas
 *  agent(10, 10, [1, 3], [3, 5]);  // Valor de retorno = ["North", "North", "East", "East"]
 *  agent(10, 10, [11, 3], [3, 5]); // Valor de retorno = "¡ERROR! El punto en el que esta situado el agente no se encuentra dentro del tablero, ya que está en la posición [11, 3] y el tablero es de 10x10"
 *  agent(10, 10, [1, 3], [3, 13]); // Valor de retorno = "¡ERROR! El punto objetivo no se encuentra dentro del tablero, ya que está en la posición [3, 13] y el tablero es de 10x10"
 *  ```
 * Función que recibe las dimensiones de un tablero, la posicion de inicio de un agente y la posición objetivo. La función retornará un vector con los movimientos que tiene que tomar el agente para llegar al objetivo, si las posiciones están dentro del tablero, o retornará cadenas de error si no lo están.
 * @param x Número de filas del tablero
 * @param y Número de columnas del tablero
 * @param initialPoint Posición inicial del agente
 * @param endPoint Posicion objetivo a la que el agente tiene que llegar
 * @return Un vector con los movimientos que tiene que tomar el agente para llegar al objetivo, si las posiciones de inicio y objetivo del agente estan dentro del tablero. Si la posicion de inicio no lo está la función retornará la cadena "¡ERROR! El punto en el que esta situado el agente no se encuentra dentro del tablero, ya que está en la posición [${initialPoint[0]}, ${initialPoint[1]}] y el tablero es de ${x}x${y}" y si la posición objetivo no lo está la función retornará la cadena "¡ERROR! El punto objetivo no se encuentra dentro del tablero, ya que está en la posición [${endPoint[0]}, ${endPoint[1]}] y el tablero es de ${x}x${y}".
 */

export function agent(x: number, y: number, initialPoint: Point, endPoint: Point): string | string[] {
  const salida: string[] = [];

  if (initialPoint[0] > x || initialPoint[1] > y) {
    return `¡ERROR! El punto en el que esta situado el agente no se encuentra dentro del tablero, ya que está en la posición [${initialPoint[0]}, ${initialPoint[1]}] y el tablero es de ${x}x${y}`;
  }

  if (endPoint[0] > x || endPoint[1] > y) {
    return `¡ERROR! El punto objetivo no se encuentra dentro del tablero, ya que está en la posición [${endPoint[0]}, ${endPoint[1]}] y el tablero es de ${x}x${y}`;
  }

  while (initialPoint[1] != endPoint[1]) {
    if (initialPoint[1] > endPoint[1]) {
      salida.push("South");
      initialPoint[1]--;
    }
    if (initialPoint[1] < endPoint[1]) {
      salida.push("North");
      initialPoint[1]++;
    }
  }

  while (initialPoint[0] != endPoint[0]) {
    if (initialPoint[0] < endPoint[0]) {
      salida.push("East");
      initialPoint[0]++;
    }
    if (initialPoint[0] > endPoint[0]) {
      salida.push("West");
      initialPoint[0]--;
    }
  }

  return salida;
}
