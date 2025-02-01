/*
Escribe un programa que solicite al usuario ingresar un tipo de vehículo y muestre
un mensaje descriptivo de cada vehiculo
*/

let tipo = prompt("Introduce el tipo de vehículo (Coche, moto, avión, bicicleta, yate)");
let resultado = document.getElementById('resultado');

switch (tipo){
    case "coche":
        resultado.innerHTML = ("Vehiculo a motor con cuatro ruedas");
        break;
    case "moto":
        resultado.innerHTML = ("vehículo a motor con dos ruedas");
        break;
    case "avión":
        resultado.innerHTML = ("Vehículo que vuela");
        break;
    case "bicicleta":
        resultado.innerHTML = ("Vehículo que se acciona mediante pedales");
        break;
    case "yate":
        resultado.innerHTML = ("vehiculo marino propulsado por helices");
        break;
    default:
        resultado.innerHTML = ("Introduce uno de los vehículos requeridos");
    
}