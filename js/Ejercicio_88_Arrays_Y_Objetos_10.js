/*
    BUSCAR UN ELEMENTO EN UN ARRAY
*/

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

function search(array, elemento){
    return array.indexOf(elemento) !== -1 ? "Elemento encontrado" : "Elemento no encontrado";
}

let numeros = [1, 2, 3, 4, 5, 10];
resultado.innerHTML = search(numeros, 3); // DEvuelve "elemento encontrado o elemento no encontrado" depende de si está o no en el array


