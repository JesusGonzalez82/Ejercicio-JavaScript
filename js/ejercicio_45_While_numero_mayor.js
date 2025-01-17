/* 
Escribe un progrma que solicite al usuario ingresar un numero y utilizando un bucle
while encontrar el primer numero par mayor que ese ingresado
*/

let num = parseInt(prompt('Introduce un numero entero'));
let resultado = document.getElementById('resultado');

let numm = num + 1;
while (numm % 2 !==0){
    numm++;
}
console.log(numm);
resultado.innerHTML = ('El primer numero PAR mayor que ' + num + ' es ' + numm);