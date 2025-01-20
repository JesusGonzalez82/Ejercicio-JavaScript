/* 
CALCULAR DÍAS DEL MES:
Escribe un programa que solicite al usuario ingresar un numero de mes
y muestre la cantidad de días que tiene ese mes
*/ 

let mes = parseInt(prompt('Introduce el numero de mes del que quieres saber los días que tiene'));
let resultado = document.getElementById('resultado');

switch (mes){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        resultado.innerHTML = ('Este mes tiene 31 dias');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        resultado.innerHTML = ('Este mes tiene 30 días');
        break;
    case 2:
        resultado.innerHTML = ('Febrero tiene 28 o 29 días, dependiendo si el año es o no Bisiesto');
        break;
    default:
        resultado.innerHTML = ('Introduce un mes correcto');
}