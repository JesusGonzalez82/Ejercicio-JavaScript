/*
Determinar si un número es par o impar.
Condicion de operadores lógicos: Escribe un programa que solicite al usuario ingresar un número y determine si es par o impar.
*/

let num = parseInt(prompt("Ingrese un número para comprobar si es par o impar: "));
let resultado = document.getElementById("resultado");

if (isNaN(num)){
    console.log("El valor introducido no es un número, por favor ingrese un dato correcto.");
} else if (num % 2 == 0){
    resultado.innerHTML = (`El número introducido ${num} es par.`);
}else {
    resultado.innerHTML = (`El numero introducido ${num} es impar.`);
}

