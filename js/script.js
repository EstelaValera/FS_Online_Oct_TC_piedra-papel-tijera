const opciones = ['piedra', 'papel', 'tijera']
let contadorUsuario = 0;
let contadorOrdenador = 0;

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const resultados = document.getElementById('resultados');
const usuario = document.getElementById('contador-usuario');
const ordenador = document.getElementById('contador-ordenador');

function obtenerJugadaOrdenador() {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return jugadas[indiceAleatorio];

}

function opcionesUsuario(eleccion) {
    contadorUsuario = opciones[Math.floor(Math.random * 3)];
    console.log(contadorUsuario);
}

botonJugada.forEach(boton => {
    boton.addEventListener("click", function() {
        const jugadaUsuario = getAttribute("data-jugada");
        const jugadaOrdenador = obtenerJugadaOrdenador();
        const resultado = determinarGanador(jugadaUsuario, jugadaOrdenador);

        if (resultado === "usuario") {
            puntosUsuario++;
        } else if (resultado === "ordenador") {
            puntosOrdenador++;
        }
    })
});

if (piedra > tijera && piedra < papel) {
    
}