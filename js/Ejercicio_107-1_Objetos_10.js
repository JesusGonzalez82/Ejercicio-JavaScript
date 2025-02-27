/*
OBJETO PRODUCTO Y SU PRECIO
Definir un objeto producto y calcular su precio final con descuento
*/

let resultado = document.getElementById('resultado');

let producto = {
    nombre: 'consola',
    precio: 599,
    descuento: 15 // Descuento del 15%
}

let precioFinal = producto.precio - ((producto.precio * producto.descuento) / 100);

resultado.innerHTML = "El precio final de la " + producto.nombre + " es " + precioFinal + " ya con el descuento aplicado."

