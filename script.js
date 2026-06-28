function entrar() {

    document.querySelector(".hero").style.display = "none";

    document.getElementById("contenido").style.display = "block";

    window.scrollTo(0, 0);
}


function mostrarCarta() {

    const carta = document.getElementById("cartaCompleta");

    if (carta.style.display === "block") {

        carta.style.display = "none";

    } else {

        carta.style.display = "block";
    }
}


const botonMusica = document.getElementById("musica");
const audio = document.getElementById("audio");

botonMusica.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        botonMusica.innerText = "❚❚ Pausar canción ❚❚";

    } else {

        audio.pause();

        botonMusica.innerText = "♡ Reproducir nuestra canción ♡";
    }

});

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.className = "corazon";
    corazon.innerHTML = "❤";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (8 + Math.random() * 8) + "s";
    corazon.style.fontSize = (12 + Math.random() * 18) + "px";

    document.getElementById("corazones").appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 16000);
}

setInterval(crearCorazon, 1200);

document.querySelectorAll(".galeria img").forEach(img => {

    img.addEventListener("click", () => {

        document.getElementById("visor").style.display = "flex";

        document.getElementById("imagenGrande").src = img.src;
    });

});

function cerrarVisor() {

    document.getElementById("visor").style.display = "none";
}

function actualizarContador() {

    const inicio = new Date("2021-06-28");

    const hoy = new Date();

    const diferencia = hoy - inicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerText =
        `Llevamos ${dias} días creando recuerdos juntos ❤️`;
}

actualizarContador();

function mostrarSorpresa() {

    document.getElementById("sorpresaFinal").style.display = "block";
}
