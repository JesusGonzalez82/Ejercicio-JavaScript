/*
    CONTAR LOS ELEMENTOS DE UN ARRAY
*/

let resultado = document.getElementById('resultado');

function countArray(array){
    return array.length;
}

let numeros = [1, 6, 8, 10, 4, "e,", 5, "pepe"];
resultado.innerHTML = "El array tiene " + countArray(numeros) + " elementos";
