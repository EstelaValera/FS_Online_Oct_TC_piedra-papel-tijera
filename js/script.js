const opciones = [ 'piedra', 'papel', 'tijera'];

let puntosUsuario = 0;
let puntosOrdenador = 0;

const botones = document.querySelectorAll('.boton');
const resultadosDiv = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const jugadaUsuario = boton.dataset.jugada;
        const jugadaOrdenador = obtenerJugadaOrdenador();
        const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);
        mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado);
        actualizarPuntuacion(resultado);
    });
});

function obtenerJugadaOrdenador() {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function obtenerResultado(jugadaOrdenador, jugadaUsuario) {
    if (jugadaUsuario === jugadaOrdenador) {
        return 'Empate';
    } else if(
        (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
        (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
        (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
    ) {
        return 'Ganaste';
    } else {
        return 'Perdiste';
    }
}

function mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado) {
    resultadosDiv.textContent = `Tú elegiste ${jugadaUsuario}, el ordenador eligió ${jugadaOrdenador}. ¡${resultado}!`;
}

function actualizarPuntuacion(resultado) {
    if (resultado === 'Ganaste') {
        puntosUsuario++;
        contadorUsuario.textContent = puntosUsuario;
    } else if (resultado === 'Perdiste') {
        puntosOrdenador++;
        contadorOrdenador.textContent = puntosOrdenador;
    }
}

