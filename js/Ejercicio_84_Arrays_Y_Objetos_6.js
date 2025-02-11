/*
    NUMERO MENOR EN UN ARRAY
*/

let resultado = document.getElementById('resultado');

function numMenor(array){
    let menor = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] < menor){
            menor = array[i];
        }
    }
    return menor;
}

let numeros = [10, 5, 8, 45, 0, 15];

resultado.innerHTML = "El menor de los numeros dentro del array es: " + numMenor(numeros);