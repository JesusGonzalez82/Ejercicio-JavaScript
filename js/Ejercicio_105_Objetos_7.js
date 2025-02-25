/*
OBJETO EMPLEADO:
DEFINIR UN OBJETO EMPLEADO Y CALCULAR SU SALARIO MENSUAL
Definir un objeto empleado con propiedades nombre, horasTrabajadas y salarioPorHora
*/

let resultado = document.getElementById('resultado');

let empleado = {
    nombre: 'pepe',
    horasTrabajadas: 37.5,
    salarioPorHora: 20
}

let horasMensuales = empleado.horasTrabajadas * 4; // Horas trabajadas en 4 semanas
let salarioMes = horasMensuales * empleado.horasTrabajadas;

resultado.innerHTML = "El salario mensual de " + empleado.nombre + " es de " + salarioMes;

