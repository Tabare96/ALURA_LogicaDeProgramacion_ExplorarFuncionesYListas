let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

condicionesIniciales();

console.log("numero secreto: " + numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    intentos++;

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", "Acertaste el número secreto en " + intentos + " " + (intentos == 1 ? " intento" : " intentos"));
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        }
        else if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        else {
            asignarTextoElemento("p", "Por favor, introduce un número válido");
        }
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    document.querySelector("#valorUsuario").focus();
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", "Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

