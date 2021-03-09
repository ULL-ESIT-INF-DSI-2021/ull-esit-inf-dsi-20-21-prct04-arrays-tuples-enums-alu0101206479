/**
 * ```typescript
 * // Ejemplo de llamada
 *  decodeResistor(["Amarillo", "Marrón", "Verde"]  // Valor de retorno = 41
 * ```
 * Función para obtener el valor de una resistencia a partir de los colores
 * @param color Array que contiene los nombres de los colores de una resistencia
 * @return Un número de dos dígitos indicando el valor de la resistencia
 */
export function decodeResistor(color: string[]) {
  const colores: string[] = ["Negro", "Marrón", "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Violeta", "Gris", "Blanco"];
  let salida: number | string = "";
  let count: number = 0;
  color.forEach((item) => {
    if (count < 2) {
      salida = salida + colores.indexOf(item).toString();
    }
    count++;
  });
  salida = parseInt(salida);
  return salida;
}
