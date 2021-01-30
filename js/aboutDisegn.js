document.getElementById("SiguienteInfo1").addEventListener("click", infoPag);
document.getElementById("SiguienteInfo2").addEventListener("click", infoYo);

var acerca = document.querySelector(".acerca");
var contenedorAcerca = document.querySelector(".contenedorAcerca");
var contenedorAcerca2 = document.querySelector(".contenedorAcerca2");

function infoPag(){
    contenedorAcerca2.style.display = "flex";
    contenedorAcerca.style.display = "none";
}
function infoYo(){
    contenedorAcerca2.style.display = "none";
    contenedorAcerca.style.display = "flex";
}