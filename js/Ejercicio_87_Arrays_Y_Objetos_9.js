/*
    INVERTIR UN ARRAY
*/

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

function concatenar(array1, array2){
    return array1.concat(array2);
}

let array1 = ["Hola"];
let array2 = [" Mundo"];

resultado.innerHTML = "La unión de los Arrays es: " + concatenar(array1, array2);