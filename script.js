function entrar(){

document
.querySelector(".hero")
.style
.display="none";

document
.getElementById("contenido")
.style
.display="block";

}


const boton=
document
.getElementById("musica");

const audio=
document
.getElementById("audio");

boton
.onclick=()=>{

audio.play();

}