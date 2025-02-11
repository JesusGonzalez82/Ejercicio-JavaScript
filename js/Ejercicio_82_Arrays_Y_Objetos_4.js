/* 
ELIMINAR ELEMENTROS DUPLICADOS DENTRO DE UN ARRAY
*/

let resultado = document.getElementById('resultado');

function eliminaDuplicados(array){
    return array.filter(function(value, indice, self){
        return self.indexOf(value) === indice;
    });
}

let numeros = [1, 2, 3, 4, 5, 4, 3, 2, 8, 16, 9, 11, 1];
resultado.innerHTML = "Hemos eliminado los valores duplicados en el array " + eliminaDuplicados(numeros);