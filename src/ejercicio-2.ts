/**
 * ```typescript
 * // Ejemplo de llamada
 *  meshArray(["allow", "lowering", "ringmaster", "terror"])  // Valor de retorno = "lowringter"
 *  meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]) // Valor de retorno = "Error al cadenar"
 * ```
 * Función para comprobar si las palabras de un array estan encadenadas o no
 * @param palabras Array que contiene las palabras a comprobar
 * @return "Error al encadenar" si las cadenas del array no estan encadenadas
 * @return "Una cadena de texto que contenga las letras que encandenan las palabras del array"
 */

export function meshArray(palabras: string[]): string {
  let posicionPp: number = 1;
  let posicionSp: number = 0;
  let contador:number = 0;
  let i: number = 0;
  let salidaAux: string = "";
  let salida: string = "";

  palabras.forEach((item) => {
    posicionPp = 1;
    posicionSp = 0;
    contador = 0;
    salidaAux = "";
    while (posicionPp < item.length && i+1 < palabras.length) {
      if (item[item.length-posicionPp] == palabras[i+1][posicionSp]) {
        if (posicionSp == contador) {
          salidaAux = salidaAux + item[item.length-posicionPp];
          break;
        } else {
          salidaAux = salidaAux + item[item.length-posicionPp];
          posicionPp--;
          posicionSp++;
        }
      } else {
        posicionPp++;
        contador++;
      }
    }

    if (posicionPp < item.length) {
      salida = salida + salidaAux;
      i++;
    } else {
      salida = "Error al encadenar";
      i = 100;
    }
  });

  return salida;
}
