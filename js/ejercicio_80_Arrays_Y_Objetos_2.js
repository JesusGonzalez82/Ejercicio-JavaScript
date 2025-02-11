/*
NUMERO MAYOR EN UN ARRAY
Encontrar el mayor numero dentro de un array
*/

let resultado = document.getElementById('resultado');

function numMayor(array){
    let mayor = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] > mayor){
            mayor = array[i];
        }
    }
    return mayor;
}

let numeros = [10, 5, 8, 45, 0, 15];

resultado.innerHTML = "El mayor de los numeros dentro del array es: " + numMayor(numeros);