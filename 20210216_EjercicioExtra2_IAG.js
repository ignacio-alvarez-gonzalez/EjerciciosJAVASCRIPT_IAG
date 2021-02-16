const c1 = document.getElementById("caja1");
c1.addEventListener("mousedown", showAlert1);
function showAlert1() {
    alert("Has pinchado en la esquina superior izquierda.")
};

const c2 = document.getElementById("caja2");
c2.addEventListener("mousedown", showAlert2);
function showAlert2() {
    alert("Has pinchado en la esquina superior derecha.")
};

const c3 = document.getElementById("caja3");
c3.addEventListener("mousedown", showAlert3);
function showAlert3() {
    alert("Has pinchado en la esquina inferior izquierda.")
};

const c4 = document.getElementById("caja4");
c4.addEventListener("mousedown", showAlert4);
function showAlert4() {
    alert("Has pinchado en la esquina inferior derecha.")
};