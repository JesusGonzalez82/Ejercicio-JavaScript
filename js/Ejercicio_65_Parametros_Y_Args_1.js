/*
CALCULAR EL AREA DE UN RECTANGULO
Escibre una funcion llamada areaRectangulo que tome dos paramétros,
base y altura y devuelva el area de un rectangulo
*/

let base = parseInt(prompt('Introduce la base del rectagunlo'));
let altura = parseInt(prompt('Introduce la altura del rectangulo'));
let resultado = document.getElementById('resultado');

function areaRectangulo(base, altura){
    return base * altura;
}

resultado.innerHTML = "El área del triangulo es " + areaRectangulo(base, altura);