let numeroSecreto;
let numeroIntentos;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    // si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            // recursividad
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

condicionesIniciales();

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(`${numeroSecreto} Tipo: ${typeof (numeroSecreto)}`);
    console.log(`${numeroUsuario} Tipo: ${typeof (numeroUsuario)}`);
    console.log(numeroUsuario === numeroSecreto);


    console.log(numeroIntentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${numeroIntentos} ${(numeroIntentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

        console.table(listaNumeroSorteados);
    } else {
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }

        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#numeroUsuario');
    valorCaja.value = "";
}

function reiniciarJuego() {
    condicionesIniciales();

    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto.');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    limpiarCaja();


}


