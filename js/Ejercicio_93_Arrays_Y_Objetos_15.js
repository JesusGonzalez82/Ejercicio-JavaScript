/*
ACCEDER a elementos mediante bucles
*/

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');
let texto = "";

let colores = ["azul", "verde", "rojo", "naranja", "blanco"];
for (let i = 0; i < colores.length; i++){
    texto += "Elemento en la posición " + i + ": " + colores[i] + "<br>";
}

resultado.innerHTML = texto;
