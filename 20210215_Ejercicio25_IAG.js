document.getElementById("boton1").addEventListener("click", mostrar);
function mostrar(){
    document.getElementById("adicional").classList.remove("oculto");
    document.getElementById("boton2").classList.remove("oculto");
    document.getElementById("boton1").classList.add("oculto");
};

document.getElementById("boton2").addEventListener("click", ocultar);
function ocultar(){
    document.getElementById("adicional").classList.add("oculto");
    document.getElementById("boton2").classList.add("oculto");
    document.getElementById("boton1").classList.remove("oculto");
};

// Tratar de hacerlo con un solo botón:
// document.getElementById("boton3").addEventListener("click", show);
// function show(){
//     document.getElementById("adicional").classList.remove("oculto");
//     document.getElementById("boton3").append(" : Ocultar");
//     document.getElementById("boton3").addEventListener("click", hide);
//     function hide(){
//         document.getElementById("adicional").classList.add("oculto");
//     }
// };