/* Bucle for para sumar numeros del 1 al 10:
Escribe un programa que utilice un bucle for para sumar todos los numeros del 1 
al 10. Muestra el resultado por consola
*/

let suma = 0;
let resultado = document.getElementById('resultado');

for (let i = 1; i <= 10; i++){
    console.log(i);
    suma = suma + i;
}
    resultado.innerHTML = ("La suma de los numeros de 1 a 10 es igual a " + suma);
    console.log(suma);

