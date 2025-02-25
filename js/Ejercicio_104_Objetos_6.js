/*
OBJETO PELICULA:
Definir un objeto pelicula con propiedades titulo, director, genero y duración en horas. Convertir la duración a minutos
*/

let resultado = document.getElementById('resultado');

let pelicula = {
    titulo: 'Gladiator',
    director: 'Ridley Scott',
    genero: 'Historico',
    duracion: 3
}

console.log(pelicula);
resultado.innerHTML = "La pelicula " + pelicula.titulo + " dirigida por " + pelicula.director + " tiene una duración de " + pelicula.duracion * 60 + " minutos y es de genero " + pelicula.genero;

