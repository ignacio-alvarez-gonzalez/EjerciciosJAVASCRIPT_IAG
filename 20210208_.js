'use strict';
// Esto de 'use strict' se pone para tener más fiabiliad a la hora de usar las variables. 
// ¿Evitar declarar variables sin palabra clave?

alert("Mi mensaje en el alert");
// Esta función de javascript me permite poner un mensaje de alerta al abrir o recargar la página.

// Vamos a declarar variables e imprimirlas por consola.
const pais = "España";
console.log(pais);
console.log("Mensaje en la consola.log" , pais);

// Las variables pueden ser numéricas también.
const volumen = 16*23*13;
console.log("El volumen del cubo es:" , volumen , "cm2");

const superficie = (16*2)+(23*2)+(13*2);
console.log("El área del cubo es:" , superficie , "cm2");

// Hay un tipo de variavble que es de objeto, poniendo llaves y varias sub-variables dentro.
let user = {
    name: "Ignacio",
    edad: 29,
    ciudad: "Badajoz"
};
console.log("Nombre:" , user.name);

// Metemos dentro de la variable un input del usuario con la función 'prompt'. La imprimimos por consola.
var edad = prompt("¿Qué edad tienes?");
console.log("La edad del usuario es de" , edad , "años.");

// Ejercicio con variables tipo objeto y array.
const cumple = {
    dia = 18,
    mes = "agosto",
};
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
console.log("Mi cumpleaños es el día",dia,"de",mes,".");