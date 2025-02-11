/*
    INVERTIR UN ARRAY
*/

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

function invertir(array){
    return array.reverse();
}

let numeros = [1, 2, 3, 4, 5];

resultado.innerHTML = "Array original " + numeros;
resultado2.innerHTML = "Array invertido " + invertir(numeros);