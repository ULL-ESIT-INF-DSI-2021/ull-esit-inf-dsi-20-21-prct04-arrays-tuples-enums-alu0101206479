/**
 * ```typescript
 * // Ejemplo de llamada
 *  meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0]); // Valor de retorno = [3.6, 'udiwstagwo']
 * ```
 * Función que recibe números y letras en un array y devuelve la media de los números y las letras concadenadas en otro array
 * @param entrada Array que los números y las letras
 * @return Un array con dos valores (La media de los valores numéricos y una cadena resultado de la concatenación de carácteres del array recibido)
 */

export function meanAndConcatenate(entrada: (number | string)[]): [number, string] {
  let media: number = 0;
  let numNum: number = 0;
  let cadena: string = "";

  entrada.forEach((item) => {
    if (typeof item === "number") {
      media = media+item;
      numNum++;
    } else {
      cadena = cadena+item;
    }
  });

  media = media/numNum;

  return [media, cadena];
}
