/*
DIAS DE LAS SEMANA:
Escribe un programa que solicite al usuario ingresar un numero
del 1 al 7 y muestre el día de la semana correspondiente.
*/

let dia = parseInt(prompt("Ingresa un numero entre 1 y 7 para ver que día de la semana es"));
let resultado = document.getElementById('resultado');

switch (dia){
    case 1:
        resultado.innerHTML = ("Lunes");
        break;
    case 2:
        resultado.innerHTML = ("Martes");
        break;
    case 3:
        resultado.innerHTML = ("Miercoles");
        break;
    case 4:
        resultado.innerHTML = ("Jueves");
        break;
    case 5:
        resultado.innerHTML = ("Viernes");
        break;
    case 6:
        resultado.innerHTML = ("Sabado");
        break;
    case 7:
        resultado.innerHTML = ("Domingo");
        break;
    default:
        resultado.innerHTML = ("Debes introducir un numero entre 1 y 7");
}