'use strict';

let numero1 = 5;
let numero2 = 8;

// Estructura para que se imprima en el html.
document.open;
document.write("<p>Número 1 = 5</p><p>Número 2 = 8</p>");
document.close;

console.log("Número 1 = " + numero1);
console.log("Número 2 = " + numero2);

// Ejercicio para practicar condicionales.
if (numero1 < numero2) {
    console.log("El número 1 no es mayor que el número 2.");
};
if (numero2 >= 0) {
    console.log("El número 2 es positivo.");
};
if (numero1 < 0 || numero1 != 0) {
    console.log("El número 1 es negativo o distinto de 0.");
};
if (numero1++ < numero2) {
    console.log("Incrementar en una 1 unidad el valor del número 1 no lo hace mayor o igual que el número 2.");
};

console.log("Ahora el número 1 es igual a " + numero1);

if ((numero1 < numero2) && (numero2 >= 0) && (numero1 < 0 || numero1 != 0) && (numero1++ < numero2)) {
    console.log("Se cumplen las cuatro condiciones.")
};

// Ejercicio de los helados con condicionales.
var helado = prompt("¿Quieres helado, si o no?");

var base = 1.90;
var oreo = 1;
var kitkat = 1.50;
var brownie = 0.75;
var lacasitos = 0.95;

if (helado == "no") {
    alert("Vale, tu te lo pierdes.");
    console.log("No quiere helado.");
} else if (helado == "si") {
    var topping = prompt("¿Qué topping quieres? ¿Oreo, KitKat, brownie o lacasitos?");
    if (topping == "Oreo") {
        alert("El helado con topping de Oreo cuesta " + (base+oreo) + "€.");
        console.log("Sirve un helado con topping de Oreo por " + (base+oreo) + "€.");
    } else if (topping == "KitKat") {
        alert("El helado con topping de KitKat cuesta " + (base+kitkat) + "€.");
        console.log("Sirve un helado con topping de KitKat por " + (base+kitkat) + "€.");
    } else if (topping == "Brownie") {
        alert("El helado con topping de brownie cuesta " + (base+brownie) + "€.");
        console.log("Sirve un helado con topping de brownie por " + (base+brownie) + "€.");
    } else if (topping == "Lacasitos") {
        alert("El helado con topping de oreo cuesta " + (base+lacasitos) + "€.");
        console.log("Sirve un helado con topping de oreo por " + (base+lacasitos) + "€.");
    } else {
        alert("Recarga la página e introduce la palabra correcta de entre las opciones propuestas.");
        console.log("Fallo.");
    };
} else {
    alert("Recarga la página e introduce la palabra correcta de entre las opciones propuestas.");
    console.log("Fallo.");
};
