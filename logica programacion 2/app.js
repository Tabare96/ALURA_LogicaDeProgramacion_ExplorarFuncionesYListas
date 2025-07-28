let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", "Acertaste el número secreto");
    }
    else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es menor");
    }
    else if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es mayor");
    }
    else {
        asignarTextoElemento("p", "Por favor, introduce un número válido");
    }

    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");