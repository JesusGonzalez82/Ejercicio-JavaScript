/* 
ORDENAR UN ARRAY DE MENOR A MAYOR
*/

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

function ordenaMenorMayor(array){
    return array.sort(function (a, b){
        return a - b;
    });
}

let numeros = [2, 8, 9, 3, 1, 10, 5];
resultado.innerHTML = "Este es el array desordenado " + numeros;
resultado2.innerHTML = "Este es el array ordenado " + ordenaMenorMayor(numeros);