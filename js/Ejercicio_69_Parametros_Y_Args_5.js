/*
SALUDO PERSONALIZADO
Escribe una función llamada saludar() que tome como dos parametros
nombre y saludo y devuelva un saludo personalizado
*/

let nombre = prompt('Introduce tú nombre');
let saludo = prompt('Introduce un mensaje');
let resultado = document.getElementById('resultado');

function saludar(name, saludo){
    return saludo + " " + name;
}

resultado.innerHTML = saludo + " " + nombre;