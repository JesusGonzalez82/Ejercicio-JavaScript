/* 
CALCULAR EL VOLUMEN DE UN CILINDRO:
Escribe una función llamada volumenCilindro que tome dos parámetros radio y altura
y devuelva el volumen del cilindro
*/

let radio = parseInt(prompt('Introduce el radio del cilindro'));
let altura = parseInt(prompt('Introduce la altura del cilindro'));
let resultado = document.getElementById('resultado');

function volumenCilindro(radio, altura){
    return Math.PI * Math.pow(radio, 2)*altura;
}

resultado.innerHTML = "El cilindro con los datos introducidos tiene un volumen de " + volumenCilindro(radio, altura);