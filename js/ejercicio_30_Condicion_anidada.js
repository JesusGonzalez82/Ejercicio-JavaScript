/* 
Condicion anidada: Escribe un programa que solicite al usuario ingregar dos numeros y 
determine cual de los dos es mayor. Si son iguales, que muestre un mensaje que diga
"Los numeros son iguales".
*/

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let resultado = document.getElementById("resultado");

if (isNaN(num1) || isNaN(num2)){
    console.error("No has introducido un número válido");
    resultado.innerHTML = ("<p style='color:red;'>Error, no has introducido un número válido</p>");
}else if (num1 > num2){
    resultado.innerHTML = (`${num1} es mayor que ${num2}`);
}else if (num2 > num1){
    resultado.innerHTML = (`${num2} es mayor que ${num1}`);
}else {
    resultado.innerHTML = ("Los números son iguales");
}