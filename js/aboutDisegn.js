document.getElementById("SiguienteInfo1").addEventListener("click", infoPag);
document.getElementById("SiguienteInfo2").addEventListener("click", infoYo);

var acerca = document.querySelector(".acerca");
var contenedorAcerca = document.querySelector(".contenedorAcerca");
var contenedorAcerca2 = document.querySelector(".contenedorAcerca2");

function infoPag(){
    console.log("Boton execute");
    contenedorAcerca.style.opacity = 0;
    contenedorAcerca.style.display = "none";
    contenedorAcerca2.style.display = "flex";
    contenedorAcerca2.style.opacity = 1;
    
}
function infoYo(){
    contenedorAcerca2.style.opacity = 0;
    contenedorAcerca2.style.display = "none";
    contenedorAcerca.style.display = "flex";
    contenedorAcerca.style.opacity = 1;
}