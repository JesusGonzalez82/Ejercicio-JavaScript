/*
BUCLE WHILE PARA CALCULAR EL FACTORIAL DE UN NUMERO
Escribe un programa que solicite al usuario que introduzca un numero entero y utilice 
un bucle while para calcular su factorial e imprima el resultado
*/ 

let num = parseInt(prompt("Introduce un numero entero para calcular su factorial"));
let resultado = document.getElementById('resultado');
let factorial = 1;
let i = 1;

while (i <= num){
    factorial *= i;
    i++;
}
console.log(factorial);
resultado.innerHTML = ('El factorial de ' + num + " es igual a " + factorial);