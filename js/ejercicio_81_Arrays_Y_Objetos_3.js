/*
FILTRAR NUMEROS PARES EN UN ARRAY
*/

let resultado = document.getElementById('resultado');

function numPar(array){
    return array.filter(function(numero){
        return numero % 2 === 0;
    });
}

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12];

resultado.innerHTML = "Numeros pares: " + numPar(numeros);