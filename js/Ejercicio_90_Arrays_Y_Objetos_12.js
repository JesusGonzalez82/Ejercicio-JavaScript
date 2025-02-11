/*
ACCEDER AL ULTIMO ELEMENTO DE UN ARRAY
*/

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

let num = [1, 2, 3, 4, 5, 6];

resultado.innerHTML = "Este es el array original " + num;
resultado2.innerHTML = "Y este su ultimo elemento " + num[num.length -1]; 