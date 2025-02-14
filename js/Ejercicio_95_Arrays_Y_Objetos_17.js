/*
ACCEDER A ELEMENTO DE UN ARRAY UTILIZANDO EL BUCLE FOR EACH
*/

let numeros = [10, 20, 30, 40, 50, 60];
let resultado = document.getElementById('resultado');

numeros.forEach(function(numeros, indice){
    console.log("Elemento en la posicion " + indice + ":" + numeros);
    resultado.innerHTML = "Elemento en la posicion " + indice + "= " + numeros;
});

