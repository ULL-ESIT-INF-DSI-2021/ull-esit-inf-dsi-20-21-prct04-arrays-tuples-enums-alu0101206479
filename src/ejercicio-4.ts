/**
 * ```typescript
 * // Ejemplo de llamada
 *  moveZeros([1, 0, 1, 2, 0, 1, 3]; // Valor de retorno = [1, 1, 2, 1, 3, 0, 0]
 * ```
 * Función que recibe un array de numeros y los 0 los desplaza al final
 * @param entrada Array de numeros
 * @return Un array con los numeros en el mismo orden pero los 0 desplazados al final del vector
 */

export function moveZeros(entrada: (number)[]): (number)[] {
  let aux: number = 0;
  let i: number = 0;
  let j: number = 0;

  entrada.forEach((item) => {
    j = i;
    if (item == 0) {
      while (j+1 < entrada.length) {
        aux = entrada[j];
        entrada[j] = entrada[j+1];
        entrada[j+1] = aux;
        j++;
      }
      i++;
    } else {
      i++;
    }
  });

  return entrada;
}
