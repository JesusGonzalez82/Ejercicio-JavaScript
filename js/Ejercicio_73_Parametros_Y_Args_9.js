/*
CALCULA EL AREA DE UN CIRCULO CON PRECISION DECIMAL
Escribe una función llamada areaCicle() que tome un parametro rádio
y devuelva el area del circulo con precisión de dos decimales.
Area = PI * radio pow2
*/

let radio = parseFloat(prompt('Introduce el radio del circulo'));
let resultado = document.getElementById('resultado');

function areaCicle(radio){
    return Math.PI * Math.pow(radio, 2).toFixed(2);
}

resultado.innerHTML = "El área del circulo es: " + areaCicle(radio).toFixed(2);