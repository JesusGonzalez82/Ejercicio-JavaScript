/*
ACCEDER A VARIOS ELEMENTOS UTILIZANDO UN RANGO DE INDICES
*/

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

let colores = ["azul", "verde", "rojo", "naranja", "blanco"];
let rango = colores.slice(1, 4); // Cogemos el rango del elemento 1 al 3

resultado.innerHTML = "Este es el array original: " + colores;
resultado2.innerHTML = "Y este el rango elegido: " + rango;


