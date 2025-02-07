/*
COMPARAR EDADES
Escribe una función compararEdades() que reciba dos edades y devuelva un
mensaje indicando cual es mayor
*/

let edad1 = parseInt(prompt('Introduce la primera edad'));
let edad2 = parseInt(prompt('Introduce la segunda edad'));
let resultado = document.getElementById('resultado');

function compararEdades(edad1, edad2){
    if (edad1 > edad2){
        return edad1 + " es mayor que " + edad2;
    }else if (edad2 > edad1){
        return edad2 + " es mayor que " + edad1;
    }else{
        return edad1 + " y " + edad2 + " son iguales";
    }
}
resultado.innerHTML = compararEdades(edad1, edad2);