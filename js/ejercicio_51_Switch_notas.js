/*
CALIFICACION ESTUDIANTE CON SWITCH:
Escribe un programa que solicite al usuario ingresar una calificacion
del 1 al 5 y muestre un mensaje correspondiente a esa calificación
*/ 

let nota = parseInt(prompt('Introduce tu nota, de 1 a 5'));
let resultado = document.getElementById('resultado');

switch (nota){
    case 1:
        resultado.innerHTML = ("Deficiente");
        break;
    case 2:
        resultado.innerHTML = ("Suficiente");
        break;
    case 3: 
        resultado.innerHTML = ("Bien");
        break;
    case 4:
        resultado.innerHTML = ("Notable");
        break;
    case 5:
        resultado.innerHTML = ("Sobresaliente");
        break;
    default:
        resultado.innerHTML = ("Introduce una nota entre 1 y 5");
}