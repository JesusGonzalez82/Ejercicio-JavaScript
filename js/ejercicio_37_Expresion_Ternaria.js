/* 
CONDICION TERNARIA:
Condición con expresión ternaria: Escribe un programa que solicite al 
usuario ingresar un numero y determine si es par o impar
*/

let num = parseInt(prompt("Ingrese un numero entero para comprobar si es par o impar"));
let resultado = document.getElementById("resultado");
let mensaje = (num % 2 === 0) ? "Es un numero par" : "Es un numero impar";
resultado.innerHTML = (mensaje);