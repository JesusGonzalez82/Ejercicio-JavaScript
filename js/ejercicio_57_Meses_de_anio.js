/* 
Escribe un programa que solicite al usuario ingresar un numero del 1 al 12 representando
un mes del año, y muestre el nombre del mes correspondiente.
*/

let mes = parseInt(prompt('Introduce un número de 1 a 12 para ver a que mes corresponde'));
let resultado = document.getElementById('resultado');

switch (mes){
    case 1:
        resultado.innerHTML = ("Enero");
        break;
    case 2:
        resultado.innerHTML = ("Febrero");
        break;
    case 3:
        resultado.innerHTML = ("Marzo");
        break;
    case 4:
        resultado.innerHTML = ("Abril");
        break;
    case 5:
        resultado.innerHTML = ("Mayo");
        break;
    case 6:
        resultado.innerHTML = ("Junio");
        break;
    case 7:
        resultado.innerHTML = ("Julio");
        break;
    case 8:
        resultado.innerHTML = ("Agosto");
        break;
    case 9:
        resultado.innerHTML = ("Septiembre");
        break;
    case 10:
        resultado.innerHTML = ("Octubre");
        break;
    case 11:
        resultado.innerHTML = ("Noviembre");
        break;
    case 12:
        resultado.innerHTML = ("Diciembre");
        break;
    default:
        resultado.innerHTML = ("El año tiene 12 meses, introduce un numero válido");
}