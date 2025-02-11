/*
ACCEDER AL PRIMER ELEMENTO DE UN ARRAY
*/

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

let num = [10, 15, 25, 5, 31];

resultado.innerHTML = "Este es el array original " + num;
resultado2.innerHTML = "Y este su primer elemento: " + num[0];