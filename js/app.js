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
    // Añadir a las notas
    const notaObj = {
        id: Date.now(),
        nota
    }
    notas = [...notas, notaObj];
    console.log(notas);

    //Crear el html
    crearHTML();

    //reiniciamos el formrulario
    formulario.reset();
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

function crearHTML() {
    limpiarHTML();
    if( notas.length > 0 ) {
        notas.forEach(nota => {
            const li = document.createElement('li');

            //añadimos texto
            li.innerText = nota.nota;

            //lo insertamos a la lista
            listaNotas.appendChild(li);
        });
    }
    sincronizarStorage();
}

//limpiar html
function limpiarHTML() {
    while( listaNotas.firstChild) {
        listaNotas.removeChild(listaNotas.firstChild);
    }
}

// Agrega las notas acutales al local storage
function sincronizarStorage() {
    localStorage.setItem(JSON.stringify(notas));
}
