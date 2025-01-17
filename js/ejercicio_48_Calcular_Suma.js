/* 
Escribe un programa que solicite al usuario ingresar un numero y con un bucle for
calcular la suma de los primeros N numeros naturales e imprima el resultado
*/

let num = parseInt(prompt('Introduce un numero'));
let suma = '';
let resultado = document.getElementById('resultado');

for (let i = 1; i <= num; i++){
    suma += i;
    console.log('La suma de los primeros ', num, ' numeros naturales es ', suma);
}

resultado.innerHTML = ('La suma de los primeros ', num, ' numeros naturales es ', suma);