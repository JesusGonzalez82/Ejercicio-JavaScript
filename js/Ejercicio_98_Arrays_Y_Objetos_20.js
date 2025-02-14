/* 
ACCEDER A ELEMENTOS UTILIZANDO EL METODO MAP
*/

let num = [1, 2, 3, 4, 5];
let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

let cuadrado = num.map(function(num){
    return num * num;
});

console.log("Cuadrado de los numeros" + cuadrado);
resultado.innerHTML = "Array original " + num;
resultado2.innerHTML = "Cuadrado de los numeros del array " + cuadrado; 