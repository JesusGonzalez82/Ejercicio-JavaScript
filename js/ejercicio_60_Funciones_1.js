/*
Saludo personalizado. 
Escribe una función que tome un parametro nombre y devuelva 
un mensaje personalizado
*/

let nombreIntroducido = prompt('Introduce tu nombre');
let resultado = document.getElementById('resultado');

function saludar(nombre){
    return "¡Hola, " + nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase() + "!";
}

resultado.innerHTML = (saludar(nombreIntroducido));