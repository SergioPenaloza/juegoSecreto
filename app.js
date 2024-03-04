let numeroSecreto = 0;
//console.log(numeroSecreto);
let intentos = 0;
let listasNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
} 

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log("ole");
    console.log(numeroUsuario);
    if (numeroUsuario === numeroSecreto){
        console.log("ole2");
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces" }`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else{
        // El usuario no acerto.
        if(numeroUsuario < numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es mayor");
        } else {
            asignarTextoElemento('p',"El numero secreto es menor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Indica el numero entre 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Mensaje de inicio (intervalo de numeros)
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();   
    //Deshabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;


    console.log(numeroGenerado);
    console.log(listasNumeroSorteados);
    // Si ya sorteamos todos los numeros
    if(listasNumeroSorteados.length == numeroMaximo ){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles")
    } else{
        // Si el numero generado esta incluido en la lista
        if(listasNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listasNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();