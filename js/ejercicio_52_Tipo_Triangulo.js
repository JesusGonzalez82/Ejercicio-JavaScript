/*
TIPO DE TRIANGULO:
Escribe un programa que solicite al usuario ingresar las longitudes de los tres lados 
de un triangulo y determinar si es equilatero, isosceles o escaleno.

Equilátero:
Todos sus lados son iguales y sus ángulos interiores miden 60°.

Isósceles:
Tiene dos lados de igual longitud y un lado diferente. Los ángulos opuestos a los lados iguales también son iguales.

Escaleno:
Todos sus lados tienen longitudes diferentes y sus ángulos interiores también son distintos.
*/

let lado1 = parseInt(prompt("Introduce la longitud del primer lado del triangulo"));
let lado2 = parseInt(prompt("Introduce la longitud del segundo lado del triangulo"));
let lado3 = parseInt(prompt("Introduce la longitud del tercer lado del triangulo"));
let resultado = document.getElementById('resultado');

if (lado1 === lado2 && lado2 === lado3){
    resultado.innerHTML = ('El triangulo es equilatero');
}else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    resultado.innerHTML = ('El triangulo es Isosceles');
}else {
    console.log ('resultado');
    resultado.innerHTML = ('El triangulo es escaleno');
}