/* 
CREAR EL OBJETO PERSONA
*/

let persona = {
    nombre: 'Jesus',
    edad: 42,
    sexo: 'M',
    estado: false,
}
let estado = '';

let resultado = document.getElementById('resultado');

// Accedemos a los datos del Objeto

console.log (persona.nombre);
console.log (persona.edad);

if (persona.estado === true){
    persona.estado = 'Casado';
} else{
    persona.estado = 'Soltero';
}

resultado.innerHTML = "La persona con nombre " + persona.nombre + " tiene " + persona.edad + " años y está " + persona.estado;