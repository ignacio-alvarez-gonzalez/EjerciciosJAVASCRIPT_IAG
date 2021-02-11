"use strict";

// Concatenación de métodos/funciones.

// Ejemplo: aplicamos dos funciones a una lista de texto para quedarnos con los más largos y ponerlos en mayúsculas.
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mesesModif = meses
    .filter(mes => mes.length>7)
    .map(name => name.toUpperCase());
    // No se pone ; después de '.filter' porque no quiero ternminar la sentencia, quiero concatenarla con el '.map'.
console.log("Lista de meses modificada: " + mesesModif);
// Lo podemos hacer también con funciones clásicas.
const meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mesesModif2 = meses2.filter(function(mes){
    return mes.length>7;
}).map(function(mes){
    return mes.toUpperCase();
});
console.log("Lista de meses modificada: " + mesesModif2);

// Ejercicios con arrays de objetos.
const users = [
    {username: "ppc90", age: 30, premium: false},
    {username: "lu65", age: 24, premium: true},
    {username: "maria3", age: 36, premium: false},
    {username: "abc123", age: 20, premium: false},
    {username: "sergio58", age: 26, premium: true},
];
const older = users.filter(function(user){
    return user.age>=30;
});
console.log(older);
console.log("La edad del primer usuario de la lista de los mayores es " + older[0].age + " años.");