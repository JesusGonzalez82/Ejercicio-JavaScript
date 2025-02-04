/*
CONCATENAR DOS CADENAS
Escribe una función llamada concatenarCadenas() que tome dos parámetros
cadena1 y cadena2 y devuelva la concatenación de ambas cadenas.
*/ 

let cadena1 = prompt("Introduce la primera frase");
let cadena2 = prompt("Introduce la segunda frase");
let resultado = document.getElementById('resultado');

function concatenarCadenas(str1, str2){
    return str1 + " " + str2;
}

console.log(concatenarCadenas(cadena1, cadena2));
resultado.innerHTML = concatenarCadenas(cadena1, cadena2);