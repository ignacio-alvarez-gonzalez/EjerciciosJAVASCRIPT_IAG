function showAlert() {
    alert("Se ha guardado el documento.")
};

function change1(){
    document.getElementById("input1").style.background = "#F9F102"
};

function change2(){
    document.getElementById("input1").style.background = "#FFFFFF"
};

function letras(event){
    if ((event.code == "KeyA")||(event.code == "KeyE")||(event.code == "KeyI")||(event.code == "KeyO")||(event.code == "KeyU")){
        document.getElementById("input2").style.color = "#FF7F00";
    } else {
        document.getElementById("input2").style.color = "#007FFF";
    }
};