/*
OBEJTO COCHE: MODIFICAR UNA PROPIEDAD EXISTENTE
    Definir un objeto coche y modificarun propiedad existente.
    Definir un objeto coche con propiedades marca, modelo y año
*/

let resultado = document.getElementById('resultado');
let resutlado2 = document.getElementById('resultado2');

let coche = {
    marca: 'Mercedes',
    modelo: 'SL 350',
    anio: 2024
}

resultado.innerHTML = "El vehículo de la marca " + coche.marca + " y modelo " + coche.modelo + " es del año " + coche.anio;

coche.anio = 2025;

resutlado2.innerHTML= "Perdón, me he confundido, es del año " + coche.anio;
