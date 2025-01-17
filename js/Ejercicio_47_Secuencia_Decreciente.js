/* 
SECUENCIA DECRECIENTE:
Escribre un programa que utilice un bucle while para generar una secuencia
decreciente de numeros del 10 al 1 e imprima cada numero por consola
*/

let num = 11;
let resultado = document.getElementById('resultado');
let decreciente = '';

while (num >= 1){
    num--;
    console.log(num);
    decreciente += num + ', ';
}
resultado.innerHTML = (decreciente);
