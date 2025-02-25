/*
OBJETO PERSONA MAYOR DE EDAD
Definir un objeto persona con propiedades nombre y edad
*/

let resultado = document.getElementById('resultado');

let persona = {
    nombre: 'Juan',
    edad: 5
}

if (persona.edad >= 18){
    resultado.innerHTML = persona.nombre + " es mayor de edad";
}else {
    resultado.innerHTML = persona.nombre + " es menor de edad";
}
