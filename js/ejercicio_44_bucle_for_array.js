/* 
BUCLE FOR PARA RECORRER UN ARRAY
Escribe un programa que utilice un bucle for para recorrer
un array de nombres y los imprima por consola.
*/ 

let nombre = ['Jesus', 'Javi', 'Pavel', 'Pablo'];
let resultado = document.getElementById('resultado');
let aux = '';
for (let i = 0; i < nombre.length; i++){
    console.log(nombre[i]);
    aux += nombre[i] + ', ';
}
resultado.innerHTML = ('Los nombres son ' + aux);
    