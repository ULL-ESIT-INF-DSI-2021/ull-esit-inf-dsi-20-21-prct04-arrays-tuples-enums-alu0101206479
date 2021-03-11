type Point = [number, number, number, ...number[]];

/**
 * ```typescript
 * // Ejemplos de llamadas
 *  suma([5, 6, 2, 3], [7, 2, 1, 5]); // Valor de retorno = [12, 8, 3, 8]
 *  suma([5, 6, 2, 3], [7, 2, 1]); // Valor de retorno = "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones", si los puntos no tienen la misma dimensión
 * ```
 * Función que recibe dos puntos y devuelve un punto que es el resultado de la suma entre los dos entrantes si tienen la misma dimensión, si no, devuelve la cadena "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"
 * @param punto1 Primer punto
 * @param punto2 Segundo punto
 * @return Un punto resultante de la suma de los dos puntos entrantes si estos tienen la misma dimensión o la cadena "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"
 */

export function suma(punto1: Point, punto2: Point) {
  if (punto1.length == punto2.length) {
    const puntoS: Point = [0, 0, 0];
    let i: number = 0;

    punto1.forEach((item) => {
      puntoS[i] = item + punto2[i];
      i++;
    });

    return puntoS;
  } else {
    return "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones";
  }
}

/**
 * ```typescript
 * // Ejemplo de llamada
 *  resta([5, 6, 2, 3], [7, 2, 1, 5]); // Valor de retorno = [-2, 4, 1, -2]
 *  resta([5, 6, 2, 3], [7, 2, 1]); // Valor de retorno = "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"
 * ```
 * Función que recibe dos puntos y devuelve un punto que es el resultado de la resta entre los dos entrantes si tienen la misma dimensión, si no, devuelve la cadena "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"
 * @param punto1 Primer punto
 * @param punto2 Segundo punto
 * @return Un punto resultante de la resta de los dos puntos entrantes si estos tienen la misma dimensión o la cadena "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones", si los puntos no tienen la misma dimensión
 */

export function resta(punto1: Point, punto2: Point) {
  if (punto1.length == punto2.length) {
    const puntoS: Point = [0, 0, 0];
    let i: number = 0;

    punto1.forEach((item) => {
      puntoS[i] = item - punto2[i];
      i++;
    });

    return puntoS;
  } else {
    return "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones";
  }
}

/**
 * ```typescript
 * // Ejemplo de llamada
 *  producto([5, 6, 2, 3], 3); // Valor de retorno = [15, 18, 6, 9]
 * ```
 * Función que recibe como parámetros un punto y un número y devuelve un punto resultante de la multiplicación entre cada una de las coordenadas del punto entrante con el número entrante como segundo parámetro
 * @param puntoE Punto
 * @param numero Número por el que se multiplica
 * @return Un punto resultante de la multiplicación entre cada una de las coordenadas del punto entrante con el número entrante como segundo parámetro
 */

export function producto(puntoE: Point, numero: number) {
  const puntoS: Point = [0, 0, 0];
  let i: number = 0;

  puntoE.forEach((item) => {
    puntoS[i] = item*numero;
    i++;
  });

  return puntoS;
}

/**
 * ```typescript
 * // Ejemplo de llamada
 *  distanciaEuclidea([5, 6, 2, 3], [7, 2, 1, 5]); // Valor de retorno = 2
 *  distanciaEuclidea([5, 6, 2, 3], [7, 2, 1]); // Valor de retorno = "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"
 * ```
 * Función que recibe dos puntos y devuelve la distancia Euclídea entre estos dos, si tienen la misma dimensión, si no, devuelve la cadena "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones"
 * @param punto1 Primer punto
 * @param punto2 Segundo punto
 * @return La distancia Euclídea entre estos dos si estos tienen la misma dimensión o la cadena "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones", si los puntos no tienen la misma dimensión
 */

export function distanciaEuclidea(punto1: Point, punto2: Point) {
  if (punto1.length == punto2.length) {
    let distanciaEuclidea: number = 0;
    let i: number = 0;

    punto1.forEach((item) => {
      distanciaEuclidea = Math.pow(punto2[i] - item, 2);
      i++;
    });

    distanciaEuclidea = Math.sqrt(distanciaEuclidea);
    return distanciaEuclidea;
  } else {
    return "¡ERROR! Los puntos entrantes no tienen las mismas dimensiones";
  }
}
