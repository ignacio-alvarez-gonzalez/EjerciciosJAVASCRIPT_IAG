const guardado = document.getElementById("boton");
guardado.addEventListener("click", showAlert);
function showAlert() {
    alert("Se ha guardado el documento.")
};

const input1 = document.getElementById("input1");
input1.addEventListener("focusin", change1);
function change1(){
    input1.style.background = "#F9F102"
};
input1.addEventListener("focusout", change2);
function change2(){
    input1.style.background = "#FFFFFF"
};

const input2 = document.getElementById("input2");
input2.addEventListener("keypress", letras);
function letras(letra){
    console.log(letra);
    const valor = letra.code;
    if ((valor == "KeyA")||(valor == "KeyE")||(valor == "KeyI")||(valor == "KeyO")||(valor == "KeyU")){
        document.getElementById("input2").style.color = "#FF7F00";
    } else {
        document.getElementById("input2").style.color = "#007FFF";
    }
};