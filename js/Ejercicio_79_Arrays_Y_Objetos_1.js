/* 
SUMAR ELEMENTOS DE UN ARRAY
*/

let resultado = document.getElementById('resultado');

function sumaArray(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

let numeros = [1,2,3,4,5];

resultado.innerHTML = "La suma de los elementos del array es igual a: " + sumaArray(numeros);