/* 
PAR O IMPAR
Escribe una funcion que llamada esPar que tome como valor un numero y devuelva 
TRUE si es par o FALSE si es impar
*/

let num =parseInt(prompt('Introduce un numero para comprobar si es par o impar'));
let resulado = document.getElementById('resultado');

function esPar(num){
    return num % 2 === 0;
}

resultado.innerHTML = esPar(num);