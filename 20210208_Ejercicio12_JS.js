'use strict';
// Esto de 'use strict' se pone para tener más fiabiliad a la hora de usar las variables. 
// ¿Evitar declarar variables sin palabra clave?

alert("Introduzca los datos que se le piden a continuación");
// Esta función de javascript me permite poner un mensaje de alerta al abrir o recargar la página.

// Vamos a declarar variables e imprimirlas por consola.
const pais = "España";
console.log(pais);
// Se puede imprimir texto por consola. Puedo usar el operador + para concatenar texto y variables al imprimir por consola.
console.log("Se pueden introducir mensajes en la consola");
console.log("El país es " + pais)

// Las variables pueden ser numéricas también.
const volumen = 16*23*13;
console.log("El volumen del cubo es: " + volumen + " cm2");

const superficie = (16*2)+(23*2)+(13*2);
console.log("El área del cubo es: " + superficie , " cm2");

// Hay un tipo de variavble que es de objeto, poniendo llaves y varias sub-variables dentro.
let user = {
    name: "Ignacio",
    edad: 29,
    ciudad: "Badajoz"
};
console.log("Usuario: " + user.name + ", de " + user["ciudad"] + ".");

// Metemos dentro de la variable un input del usuario con la función 'prompt'. La imprimimos por consola.
var edad = prompt("¿Qué edad tienes?");
console.log("La edad del usuario es de" , edad , "años.");

// Ejercicio con variables tipo objeto y array.
const cumple = {
    dia: 18,
    mes: "agosto",
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
console.log("Mi cumpleaños es el " + cumple.dia + " de " + cumple.mes + ".");
console.log(`Mi cumpleaños sigue siendo el ${cumple.dia} de ${cumple.mes}.`);
console.log(meses[8]);

// Ejercicio para pedir al usuario los datos del cubo con variables.
var largo = prompt("Dime el largo del paralelepípedo en cm.");
var alto = prompt("Dime el alto del paralelepípedo en cm.");
var fondo = prompt("Dime el fondo del paralelepípedo en cm.");
console.log("El volumen del paralelepípedo es " + (largo*alto*fondo) + " cm3.");
console.log("La superifice del paralelepípedo es " + ((largo*2)+(alto*2)+(fondo*2)) + " cm2.");

// Podemos hacer que salga en el html.
document.write("El volumen del paralelepípedo es " + (largo*alto*fondo) + " cm3.");

// Ejercicio con array (hecho con condicionales).
const datos = ["Hola",2,5,"Adiós"];
// ¿Cuál de los dos números que hay en el array es mayor?
if (datos[1] < datos[2]) {
    console.log(`${datos[2]} es mayor que ${datos[1]}`);
} else if (datos[1] = datos[2]) {
    console.log("Los dos números son iguales");
} else {
    console.log(`${datos[1]} es mayor que ${datos[2]}`);
};
// Resultado de las operaciones:
console.log(datos[1] + datos[2]);
console.log(datos[1] - datos[2]);
console.log(datos[1] * datos[2]);
console.log(datos[1] / datos[2]);
console.log(datos[1] % datos[2]);
console.log(datos[1] > datos[2]);
console.log(datos[1] < datos[2]);
console.log(datos[1] == datos[2]);
console.log(datos[1] != datos[2]);

// Ejercicio con comparadores.
const a = 5;
const b = 3;
const c = -12;
console.log("Esto debería ser igual a 'false'. El resultado en realidad es " + (b<c) + ".");
console.log("Esto debería ser igual a 'true'. El resultado en realidad es " + ((a+b == 8) && (a-b == 2)) + ".");
console.log("Esto debería ser igual a 'true'. El resultado en realidad es " + (b!=c) + ".");
console.log("Esto debería ser igual a 'true'. El resultado en realidad es " + ((a+b == 8) || (a+b == 6)) + ".");
console.log("Esto debería ser igual a 'true'. El resultado en realidad es " + (a>3 && b>=3 && c<-3) + ".");

// Ejercicio con objetos dentro de objetos.
let usuario = {
    nombre: "Ignacio",
    edad: 29,
    direccion: {
        ciudad: "Badajoz",
        calle: "Castillo de Rena",
    },
};
console.log(`${usuario.nombre} antes vivía en la calle ${usuario.direccion.calle} de ${usuario.direccion.ciudad}`);
// Puedo cambiar valores del objeto.
usuario.direccion.ciudad = "Madrid";
usuario.direccion.calle = "Bravo Murillo";
console.log(`${usuario.nombre} ahora vive en la calle ${usuario.direccion.calle} de ${usuario.direccion.ciudad}`);
usuario.nombre = "Isabel";
console.log(`${usuario.nombre} también vive en la calle ${usuario.direccion.calle} de ${usuario.direccion.ciudad}`);

// Crear un array de objetos.
let usuario1 = {
    nombre: "Ignacio",
    edad: 29,
    direccion: {
        ciudad: "Badajoz",
        calle: "Castillo de Rena",
    },
};
let usuario2 = {
    nombre: "Isabel",
    edad: 29,
    direccion: {
        ciudad: "Madrid",
        calle: "Valdemarín",
    },
};
let listaUsuarios = [
    usuario1,usuario2
];

console.log(listaUsuarios[0].direccion.ciudad);
listaUsuarios[0].direccion.ciudad = "Madrid";
console.log(listaUsuarios[0].direccion.ciudad);

console.log(listaUsuarios[1].direccion.calle);
listaUsuarios[1].direccion.calle = "Bravo Murillo";
console.log(listaUsuarios[1].direccion.calle);
