//Variables
const formulario = document.querySelector('#formulario');
const listaNotas = document.querySelector('#lista-notas');
let notas = [];


// Event listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarNota);
}

//Funciones
function agregarNota(e) {
    e.preventDefault();

    // Textarea donde usuario escribira la nota
    const nota = document.querySelector('#nota').value;

    console.log(nota);
}
