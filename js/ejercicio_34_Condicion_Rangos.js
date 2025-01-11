/*
CONDICION DE RANGOS
Escribe un programa que solicite al usuario ingresar su nota y muestre un mensaje que indique
si aprobo (+ 5.00), si sacó un notable (+ 7.00), un sobresaliente (+9) o si suspendió (- 5.00)
*/

let nota = parseFloat(prompt("Introduce la nota de tu ultimo examen"));
let resultado = document.getElementById("resultado");

if (isNaN(nota)){
    resultado.innerHTML = ("Introduce una nota válida");
}else if (nota < 0 || nota > 10){
    resultado.innerHTML = ("Introduce una nota válida");
} else if (nota >= 5.00 && nota < 7.00){
    resultado.innerHTML = (`Has aprobado con un bien, tienes un ${nota}`);
}else if (nota >= 7.00 && nota < 9){
    resultado.innerHTML = (`Tienes un notable!! Tu nota es un ${nota}`);
}else if (nota >= 9 && nota <10){
    resultado.innerHTML = (`Tienes un sobresaliente!!Tu nota es un ${nota}`);
} else if (nota < 5 && nota > 0){
    resultado.innerHTML = (`Has suspendido. Tu nota es un ${nota}`);
}