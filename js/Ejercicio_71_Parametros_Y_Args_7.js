/*
PERIMETRO DE UN RECTANGULO
Escribe una funcion llamada perimetro() que tome dos parámetros
lado1 y lado2 y devuelva el perimetro de un rectangulo. 
Perimetro = 2 * (lado1 + lado2) */

let base = parseInt(prompt("Introduce la base de nuestro rectangulo"));
let altura = parseInt(prompt("Introduce la altura de nuestro rectangulo"));
let resultado = document.getElementById('resultado');

function perimetro(lado1, lado2){
    if (isNaN(lado1) || isNaN(lado2)){
        return "Debes introducir valores numericos";
    } else{
    return 2 * (lado1 + lado2);
    }
}

resultado.innerHTML = "El perimetro del rectangulo es: " + perimetro(base, altura);
