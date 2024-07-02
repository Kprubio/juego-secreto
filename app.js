let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
condicionesIniciales()

//Esta funcion asigna un texto a un elemento del HTML que se desee seleccionr
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento) ; //Aqui la funcion define una variable con nombre elementoHTML que va a ser el elemento al que queramos colocarle texto
    elementoHTML.innerHTML = texto; //Usando el valor 'innerHTML' se indica que la variable 'elementoHTML' va a tomar el valor de 'texto'
    return;
}

//Funcion para generar el numero secreto random
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else{
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }   
}

//Esta funcion trae el numeroDeUsuario que se ingresa en el input de HTML el cual tiene el id 'valorDeUsuario' y luego se usa un === para comparar que el numero y el tipo de dato es igual en el numeroDeUsuario y el numeroSecreto

function verificarIntento() {
    console.log(intentos)
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Felicidades! Acertaste en ${intentos} ${intentos === 1 ? 'intentos' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled') 
    } else if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja()
    return;
}

//se generan las condiciones iniciales cuando se inicia un juego
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto')
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Funcion para limpiar caja
function limpiarCaja() {
    document.querySelector('#valorDeUsuario').value = '' ;
}

//Funcion para reiniciar el juego luego de que se adivine el numero secreto
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true') ;

}