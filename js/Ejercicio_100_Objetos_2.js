/* 
CREAR EL OBJETO PRODUCTO Y CALCULAR SU PRECIO TOTAL
Definir un objeto producto con propiedades (nombre, precioUnidad y unidades) y calcular su precio total
*/

let resultado = document.getElementById('resultado');
let producto = {
    nombre: 'Tapiporla',
    precioUnidad: 125,
    unidades: 15
}

console.log("El precio total de las " + producto.nombre + " es de " + (producto.precioUnidad*producto.unidades));
resultado.innerHTML = "El precio total de las " + producto.nombre + " es de " + (producto.precioUnidad*producto.unidades) + "€";