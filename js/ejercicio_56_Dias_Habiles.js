/* 
Escribe un programa que solicite al usuario ingresar un numero del 1 al 5 representando
un día de la semana y muestre si es un día habil o no.
*/

let dia = parseInt(prompt("Introduce un número de 1 a 7 para ver si es un día hábil o no"));
let resultado = document.getElementById('resultado');

switch (dia){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        resultado.innerHTML = ("Has seleccionado un día hábil");
        break;
    case 6:
    case 7:
        resultado.innerHTML = ("Has seleccionado un día no hábil");
        break;
    default:
        resultado.innerHTML = ("La semana solo tiene 7 días");
}