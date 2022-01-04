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

    if(nota === '' ){
        mostrarError('No puede ir vacio');
        return;
    }
    console.log('agregando nota');
}


//Mostrar mensajes de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Lo insertamos
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    },3000);
}