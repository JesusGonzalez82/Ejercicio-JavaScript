/* 
CONTAR HASTA UN NUMERO DADO (FOR)
Bucle for para contar hasta un numero. Escribe un programa que utilice 
un bucle for para contar del 1 al 10 e imprimar cada numero
*/
let resultado = document.getElementById("resultado");
let num = "";
for (let i = 0; i <= 10; i++){
    console.log(i);
    num = num+i + ", ";
}
resultado.innerHTML = (num);