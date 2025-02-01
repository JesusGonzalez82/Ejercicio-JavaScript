/*
CALCULAR EL AREA DE UN CIRCULO
Calcula el área de un circulo con una funcion que tome como paramétro
radio y devuelva area del circulo correspondiente.
*/

let radio = parseInt(prompt('Introduce el radio de la circunferencia para calcular su área'))
let resultado = document.getElementById('resultado');

function calcularArea(radio){
    return Math.PI * Math.pow(radio, 2);
}

resultado.innerHTML = calcularArea(radio);