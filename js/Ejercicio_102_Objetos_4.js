/*
OBJETO ESTUDIANTE:
Definir un objeto estudiante y agregar una nueva propiedad
*/ 

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');
let estudiante = {
    nombre: 'Kerry',
    apellido: 'Kaverga',
    edad: 24,
    curso: '2º DAW'
}

resultado.innerHTML = "El estudiante " + estudiante.nombre + " que estudia el curso de " + estudiante.curso + " se apellida " + estudiante.apellido + " y tiene " + estudiante.edad + " años y ahora vamos a añadirle otra propiedad";

estudiante.nota = 5;

resultado2.innerHTML = "El estudiante " + estudiante.nombre + " que estudia el curso de " + estudiante.curso + " se apellida " + estudiante.apellido + " y tiene " + estudiante.edad + " años y ahora vamos a añadirle otra propiedad, le hemos añadido la nota, y su nota media es de un " + estudiante.nota;