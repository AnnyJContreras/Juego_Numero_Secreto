let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaxJuegos = 10;

function asignarTextoElemento(elemento,texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function VerificarIntento(){
    //alert('Click desde el botón');
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroUsuario);
    //console.log(numeroSecreto);

    if(numeroUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${ (intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','Número secreto es menor');
        }else{
            asignarTextoElemento('p','Número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //document.getElementById('valorUsuario');
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {

    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaxJuegos) {
        asignarTextoElemento('p','Número máximo de juegos completado');
        document.querySelector('#intentar').setAttribute('disabled','true');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Coloca un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto()
    intentos = 1;
    console.log(numeroSecreto);
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();



