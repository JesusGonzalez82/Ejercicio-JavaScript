/* 
CALCULAR EL FACTORIAL DE UN NUMERO
Escribe una funcion llamada calculaFactorial() que tome como parámetro
número y devuelva su factorial
*/

let num = parseInt(prompt("Introduce el número sobre el cual quiere saber su factorial"));
let resultado = document.getElementById('resultado');

function calculaFactorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    }else {
        return numero * calculaFactorial (numero - 1);
    }
}

resultado.innerHTML = ("El factorial del número elegido es: " + calculaFactorial(num));