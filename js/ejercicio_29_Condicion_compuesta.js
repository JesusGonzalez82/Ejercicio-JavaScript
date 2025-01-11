/*
Condición compuesta: Escribe un programa que solicite al usuario ingresar un numero.
Si el número es positivo, muestra un mensaje que diga "El número es positivo". Si el numero
es cero, que muestre un mensaje que diga "El número es cero". Si el número es negativo, muestra
un mesanje que diga "El número es negativo". Si no introduce un numero, un mensaje de error.
*/

let num = parseInt(prompt("Introduce un número: "));
let resultado = document.getElementById("resultado");

if (isNaN(num)){
    console.error("No has introducido un numero");
    resultado.innerHTML = ("<p style='color:red;'>Error, no has introducido un numero</p>");
}else if (num > 0){
    resultado.innerHTML = ("Has introducido un numero positivo.");
}else if (num === 0){
    resultado.innerHTML = ("Has introducido un cero");
}else{
    resultado.innerHTML = ("Has introducido un numero negativo");
}

console.log(typeof(num));
