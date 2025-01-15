/*
MENSAJE PERSONALIZADO:
Condición con varios criterios: Escribe un programa que solicite al usuario
su edad y su género, y muestre un mensaje por personalizado dependiendo de los 
criterios de edad y género.
*/

let edad = parseInt(prompt("Que edad tienes?"));
let genero = prompt("Ingrese sú Género(Masculino o Femenino)").trim().toLowerCase();
let resultado = document.getElementById("resultado");

if (edad >= 18) {
  if (genero === "masculino") {
    resultado.innerHTML = "Bienvenido señor";
  } else if (genero === "femenino") {
    resultado.innerHTML = "Bienvenida señora";
  } else {
    resultado.innerHTML = "Bienvenid@";
  }
} else {
  resultado.innerHTML = "Eres menor de edad";
}
