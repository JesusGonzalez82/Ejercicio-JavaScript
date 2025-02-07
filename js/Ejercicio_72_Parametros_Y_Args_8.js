/*
SALUDO EN OTRO IDIOMA
Escribe una función saludoIdioma() que tome dos parametros
nombre e idioma y devuelva un mensaje de saludo en el idioma
especificado */

let nombre = prompt("Introduce tú nombre");
let idioma = prompt("Introduce el idioma elegido (es, fr, en)");
let resultado = document.getElementById('resultado');

function saludoIdioma (nombre, idioma){
    if (idioma === "es"){
        return "¡Hola! " + nombre + "!"; 
    } else if (idioma === "en"){
        return "Hello!! " + nombre + "!";
    }else if (idioma === "fr"){
        return "¡Bonjour!" + nombre + "!";
    }else {
        return "Introduce un idioma válido";
    }
}

resultado.innerHTML = saludoIdioma(nombre, idioma);

