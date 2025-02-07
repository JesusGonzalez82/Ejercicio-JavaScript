/*
AREA DE UN TRIANGULO
Escribe una función llamada areaTriangulo() que tome dos parametros
base y altura y devuelva el área de un triangulo. Area = Base * altura / 2
*/

let base = parseInt(prompt("Introduce la base del triangulo"));
let altura = parseInt(prompt("Introduce la altura del triangulo"));
let resultado = document.getElementById('resultado');

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

resultado.innerHTML = "El área del triangulo es igual a: " + areaTriangulo(base, altura);
