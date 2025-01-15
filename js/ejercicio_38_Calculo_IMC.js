/* 
CALCULO DEL IMC:
Crea un programa que calcule el IMC de una persona a partir de su peso en Kilos
y su altura en metros. Luego muestra una categoria de IMC (bajo peso, peso normal, etc).
Formula del IMC (IMC = peso (kg)/ [estatura (m)])2.
< 18.5	Bajo peso
18.5 - 24.9	Peso normal
25.0 - 29.9	Sobrepeso
30.0 - 34.9	Obesidad grado I
35.0 - 39.9	Obesidad grado II
≥ 40.0	Obesidad grado III (mórbida)
*/

let peso = parseFloat(prompt("Introduce tu peso en Kilogramos").replace(",", "."));
let altura = parseFloat(prompt("Introduce tu altura en metros").replace(",", "."));
let IMC = peso / Math.pow(altura, 2);
let resultado = document.getElementById("resultado");

console.log(IMC.toFixed(2));

if (IMC < 18.5){
    resultado.innerHTML = ("Tu IMC esta en " + IMC.toFixed(2) + ", tu peso está por debajo del recomendado, deberias comer más");
}else if (IMC > 18.5 && IMC < 24.9){
    resultado.innerHTML = ("Tu IMC esta en " + IMC.toFixed(2) + ", estas en tu peso ideal!!");
}else if (IMC > 25 && IMC < 29.9){
    resultado.innerHTML = ("Tienes sobrepeso, tu IMC esta en " + IMC.toFixed(2) + " deberías empezar a realizar deporte y llevar una alimentación más saludable");
}else if (IMC > 30 && IMC < 34.9){
    resultado.innerHTML = ("Obesidad de grado I tu IMC esta en " + IMC.toFixed(2) + ". Deberías cuidarte más e ir a ver a tú médico");
}else if (IMC > 35 && IMC < 39.9){
    resultado.innerHTML = ("Obesidad de grado II tu IMC esta en " + IMC.toFixed(2) + ". Deberías cuidarte más e ir a ver a tú médico");
}else {
    resultado.innerHTML = ("Obesidad de grado III tu IMC esta en " + IMC.toFixed(2) + ". Es urgente que vayas a hablar con un especialista");
}
