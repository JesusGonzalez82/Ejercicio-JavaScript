/* 
CONCATENAR NOMBRES
Escribe una función llamada concatenarNombres que tome como parámetros
nombre, apellido1 y apellido 2 y devuelva la concatenacióm de los 3 nombres.
*/ 

let nombre = prompt('Introduce tu nombre');
let apellido1 = prompt('Introduce tu primer apellido');
let apellido2 = prompt('Introduce tu segundo apellido');
let resultado = document.getElementById('resultado');

function concatenarNombres(name, surname1, surname2){
    return name + " " + surname1 + " " + surname2
}

resultado.innerHTML = "Bienvenido " + concatenarNombres(nombre, apellido1, apellido2) + " a esta página web";