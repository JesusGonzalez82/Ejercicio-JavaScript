/*
ACCEDER A UN ELEMENTO DE UN ARRAY POR SU POSICION
*/
let posicion = parseInt(prompt("Introduce un numero del 1 al 5"));
let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

let colores = ["azul", "verde", "rojo", "naranja", "blanco"];


resultado.innerHTML = "El elemento en la posicion " + posicion + " es el color " + colores[posicion-1];