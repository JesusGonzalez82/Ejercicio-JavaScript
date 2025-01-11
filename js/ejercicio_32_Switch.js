/*
CONDICION CON SWITCH:
    Escribe un programa que solicite al usuario ingresar un número del 1 al 7
    y muestre el día de la semana seleccionado.
*/

let dia = parseInt(prompt("Introduce un número del 1 al 7"));
let resultado = document.getElementById("resultado");

if (isNaN(dia)){
    resultado.innerHTML = ("Error: Introduce un número entre el 1 y el 7");
}else {
    switch (dia){
        case 1: 
        resultado.innerHTML =  ("Lunes");
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
        resultado.innerHTML = ("Viernes!!!");
        break;
        case 6: 
        resultado.innerHTML = ("Sabado, Sabadete!");
        break;
        case 7: 
        resultado.innerHTML = ("Domingo :(");
        break;
        default:
            resultado.innerHTML = ("Error: Introduce un número entre el 1 y el 7")
    }
}