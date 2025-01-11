/*
CONDICION CON OPERADORES LOGICOS
Escribe un programa que solicite al usuario ingresar dos numeros y determine si ambos son positivos.
*/

let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));
let resultado = document.getElementById("resultado")

if (isNaN(num1) || isNaN(num2)){
    resultado.innerHTML = ("Introduce digitos validos");
} else if (num1 % 2 == 0 && num2 % 2 == 0){
    resultado.innerHTML = ("Los numeros introducidos son pares");
}else {
    resultado.innerHTML = ("No son pares los dos números")
}