/*
ACCEDER A ELEMENTOS MEDIANTE EL METODO FILTER
*/

let num = [1, 2, 3, 4, 5];
let resultado = document.getElementById('resultado');

let pares = num.filter(function(num){
    return num % 2 === 0;
});

console.log("Numero pares: " + pares);

resultado.innerHTML = "Array Original " + num;
resultado2.innerHTML = "Filtrado de numeros pares " + pares;