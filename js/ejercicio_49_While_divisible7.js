/* 

BUCLE WHILE PARA ENCONTRAR EL PRIMER DIVISIBLE POR 7 ENTRE 2 NUMEROS:
Escribe un programa que solocite al usuario ingresar dos numeros y utilice
un bucle while para encontrar el primer numero divisible por 7 entre esos dos numeros
*/

let num1 = parseInt(prompt("Introduce el primer numero"));
let num2 = parseInt(prompt("Introduce el segundo numero"));
let resultado = document.getElementById('resultado');

if (num1 > num2){
    [num1, num2] = [num2, num1];
}

let res = num1;

while (res % 7 !== 0 && res <= num2){
    res++;
}

if (res <= num2){
    console.log(res);
    resultado.innerHTML = ("El primer numero divisible por 7 entre " + num1 + " y " + num2 + " es: " + res);
}else{
    resultado.innerHTML = ("No hay numeros divisibles por 7 entre " + num1 + " y " + num2);
}