/*
Escribe un programa que solicite al usuario ingresar un numero y utilice 
un bucle for para imprimir la tabla de multiplicar ese numero del 1 al 10.
*/

let num = parseInt(prompt('Introduce el numero del que deseas ver la tabla de multiplicar'));
let resultado = document.getElementById('resultado');
let tabla = '';



for (let i = 1; i <= 10; i++){
    console.log(num + 'x' + i + '=' + num * i);
    tabla += (num + 'x' + i + '=' + num * i) + '<br>';
    
}

resultado.innerHTML = (tabla);
