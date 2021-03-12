type Point = [number, number];

/**
 * ```typescript
 * // Ejemplo de llamada
 *  suma([5, 3], [2, 7]); // Valor de retorno = [7, 10]
 * ```
 * Función que recibe dos puntos y devuelve un punto que es el resultado de la suma entre los dos entrantes
 * @param punto1 Primer punto
 * @param punto2 Segundo punto
 * @return Un punto resultante de la suma de los dos puntos entrantes
 */

export function suma(punto1: Point, punto2: Point): Point {
  const puntoS: Point = [0, 0];
  puntoS[0] = punto1[0] + punto2[0];
  puntoS[1] = punto1[1] + punto2[1];
  return puntoS;
}

/**
 * ```typescript
 * // Ejemplo de llamada
 *  resta([5, 3], [2, 7]); // Valor de retorno = [3, -4]
 * ```
 * Función que recibe dos puntos y devuelve un punto que es el resultado de la resta entre los dos entrantes
 * @param punto1 Primer punto
 * @param punto2 Segundo punto
 * @return Un punto resultante de la resta de los dos puntos entrantes
 */

export function resta(punto1: Point, punto2: Point): Point {
  const puntoS: Point = [0, 0];
  puntoS[0] = punto1[0] - punto2[0];
  puntoS[1] = punto1[1] - punto2[1];
  return puntoS;
}

/**
 * ```typescript
 * // Ejemplo de llamada
 *  producto([5, 3], 2); // Valor de retorno = [10, 6]
 * ```
 * Función que recibe como parámetros un punto y un número y devuelve un punto resultante de la multiplicación entre cada una de las coordenadas del punto entrante con el número entrante como segundo parámetro
 * @param puntoE Punto
 * @param numero Número por el que se multiplica
 * @return Un punto resultante de la multiplicación entre cada una de las coordenadas del punto entrante con el número entrante como segundo parámetro
 */

export function producto(puntoE: Point, numero: number): Point {
  const puntoS: Point = [0, 0];
  puntoS[0] = puntoE[0] * numero;
  puntoS[1] = puntoE[1] * numero;
  return puntoS;
}

/**
 * ```typescript
 * // Ejemplo de llamada
 *  distanciaEuclidea([5, 3], [2, 7]); // Valor de retorno = 5
 * ```
 * Función que recibe dos puntos y devuelve la distancia Euclídea entre estos dos
 * @param punto1 Primer punto
 * @param punto2 Segundo punto
 * @return La distancia Euclídea entre estos dos
 */

export function distanciaEuclidea(punto1: Point, punto2: Point): number {
  let distanciaEuclidea: number = 0;
  distanciaEuclidea = Math.sqrt(Math.pow(punto2[0] - punto1[0], 2) + Math.pow(punto2[1] - punto1[1], 2));
  return distanciaEuclidea;
}
