/*
ACCEDER A UN ELEMENTO AL AZAR EN UN ARRAY
*/

let nombres = ['Jesus', 'Javi', 'Pavel', 'Pablo', 'Ana', 'Vane', 'Jose', 'Rakel'];
let aleatorio = Math.floor(Math.random()*nombres.length);
let resultado = document.getElementById('resultado');

resultado.innerHTML = "Y el premio es para!!! " + nombres[aleatorio] + "!!!!";