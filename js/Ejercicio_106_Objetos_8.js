/*
OBJETO MOVIL
Definir un objeto movil y mostrar su información en una frase. Debe tener las propiedades marca, modelo y color
*/

let resultados = document.getElementById('resultado');

let movil = {
    marca: 'Iphone',
    modelo: '16 pro max',
    color: 'titanio'
}

resultados.innerHTML = "El móvil de la marca " + movil.marca + " en su modelo " + movil.modelo + " de color " + movil.color + " es uno de los moviles más caros del mercado";



