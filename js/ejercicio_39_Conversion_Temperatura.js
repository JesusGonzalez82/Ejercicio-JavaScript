/*
CONVERSIÓN DE TEMPERATURA
Escribe un programa que permita al usuario convetir una temperatura de Grados Celsius
a Fahrenheit o viceversa.
Grados Fahrenheit = (grados centígrados × 9/5) +32
Grados centígrados = (grados Fahrenheit − 32) × 5/9
*/

// Funcion para pasar de Celsius a Fahrenheit
function CelsiusToFahrenheit(celsius){
return fahrenheit = (celsius * 9/5) + 32;
}
// Funciona para pasar de Fahrenheit a Celsius
function FahrenheitToCelsius(fahrenheit){
    return celsius = (fahrenheit - 32) * 5/9;
}
//Solicitamos al usuario que seleccione el metodo que desea
let opcion = prompt("Seleccione la conversión que desea realizar: \n1 Celsius a Fahrenheit\n2 Fahrenheit a Celsius");
let resultado = document.getElementById("resultado");

// Convertimos la opcion a un entero
opcion = parseInt(opcion);

// Validamos la opcion seleccionada
if (opcion === 1){
    let celsius = prompt("Introduce la temperatura en grados Celsius");
    let fahrenheit = CelsiusToFahrenheit(celsius).toFixed(2);
    resultado.innerHTML = (celsius + " grados celsius equivalen a " + fahrenheit + " grados Fahrenheit");
} else if (opcion === 2){
    let fahrenheit = prompt("Introduce la temperatura en grados Fahrenheit");
    let celsius = FahrenheitToCelsius(fahrenheit).toFixed(2);
    resultado.innerHTML = (fahrenheit + " grados Fahrenheit equivalen a " + celsius + " grados Celsius");
} else {
    resultado.innerHTML = ("Introduce una opción válida (1 o 2)");
}


