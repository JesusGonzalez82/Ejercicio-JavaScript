/* 
Acceder a elementos utilizando el método find
*/

let usuarios = [
    {nombre: 'Jesus' , edad: 42},
    {nombre: 'Pavel', edad: 42}, 
    {nombre: 'Javi' , edad: 41},
    {nombre: 'Pablo', edad: 41}
]
let resultado = document.getElementById('resultado');
let persona = usuarios.find(function(persona){
    return persona.edad === 42;
});
console.log("Persona encontrada " + persona.nombre)
resultado.innerHTML = "Persona encontrada " + persona.nombre;