/*
TIPO DE EMPLEADO:
Escribe un programa que solicite al usuario su código de empleado
y muestre su tipo correspondiente (A, B, C y D).
*/

let tipoEmp = prompt("Introduce tu codigo de empleado (A, B, C y D)").toUpperCase();
let resultado = document.getElementById('resultado');

switch (tipoEmp){
    case "A":
        resultado.innerHTML = ('Auxiliar Administrativo');
        break;
    case "B":
        resultado.innerHTML = ('Tecnico Administrativo');
        break;
    case "C":
        resultado.innerHTML = ('Jefe de Departamento');
        break;
    case "D":
        resultado.innerHTML = ('CEO');
        break;
    default:
        resultado.innerHTML = ('No quieras ser el jefe supremo!!! Tienes que elegir entre (A, B, C y D)');
}
