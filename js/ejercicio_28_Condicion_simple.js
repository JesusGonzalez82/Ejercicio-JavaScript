// Ejercicio 28. Condicion simple
// Escribe un programa que solicite al usuario ingresar su edad. Si la edad es mayor o igual a 18,
// mostrará un mensaje que diga "Eres mayor de edad". En caso contrario, mostrará un mensaje de que diga"Aun eres menor de edad".

let edad = parseInt(prompt("Introduce tu edad: "));
let resultado = document.getElementById("resultado");
if (edad >= 18){
    resultado.innerHTML = ("Eres mayor de edad ya que tienes " + edad + " años.");
} else if (edad > 0 && edad < 18){
    resultado.innerHTML = ("Aún eres menor de edad, ya que tienes " + edad + " años ");
}else {
    resultado.innerHTML = ("Introduce una edad válida");
}