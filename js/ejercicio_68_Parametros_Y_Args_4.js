/*
CALCULAR LA MEDIA DE TRES NUMEROS
Escribre una función llamada calcularMedia() que reciba tres parámetros
y devuelva la media de los 3.
*/

let num1 = parseInt(prompt('Introduce el primer número'));
let num2 = parseInt(prompt('Introduce el segundo número'));
let num3 = parseInt(prompt('Introduce el tercer número'));
let resultado = document.getElementById('resultado');

function calcularMedia(num1, num2, num3){
    return (num1+num2+num3) / 3;
}
console.log(calcularMedia(num1, num2, num3));
resultado.innerHTML ="La media de los 3 números introducidos es: " + calcularMedia(num1, num2, num3);