/* OBJETO LIBRO:
Definir un objeto libro y mostrar su información en una frase
1*/

let resultado = document.getElementById('resultado');
let libro = {
    titulo: 'El puño del Emperador',
    autor: 'Alberto Caliani',
    paginas: '890',
    genero: 'historico'
}

console.log("El libro " + libro.titulo + " escrito por " + libro.autor);
resultado.innerHTML = "El libro " + libro.titulo + " escrito por " + libro.autor + " tiene " + libro.paginas + " es del genero " + libro.genero + " mas concretamente es un libro de intrigas en el imperio romano"; 