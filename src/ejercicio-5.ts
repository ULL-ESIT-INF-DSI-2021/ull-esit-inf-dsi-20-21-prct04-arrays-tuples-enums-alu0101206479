/**
 * ```typescript
 * // Ejemplo de llamada
 *  multiplyAll([2, 6, 8])(3); // Valor de retorno = [6, 18, 24]
 * ```
 * Función que recibe un array de numeros y devuelve una función que tiene como parámetro un número y devolverá un nuevo array que se obtiene del primer array multiplicado por este número
 * @param entrada Array de numeros
 * @return Una función que devuelve un nuevo array que se obtiene del array pasado por parámetro a la funcion principal multiplicado por este número
 */

export function multiplyAll(entrada: (number)[]) {
  return (multiplicador: number) => {
    const salida: number[] = [];
    entrada.forEach((item) => {
      salida.push(item*multiplicador);
    });
    return salida;
  };
}
