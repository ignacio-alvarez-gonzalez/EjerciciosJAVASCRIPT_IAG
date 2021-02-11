// Funciones en JavaScript.
// Funciones básicas para 'strings'.
// length()
const msj = "Hola";
const numeroLetras = msj.length;
console.log(numeroLetras);
// concat()
const concat = "Hola";
const mensaje = msj.concat(" mundo.");
console.log(mensaje);
// toUpperCase()
const uc = "Hola";


// toLowerCase



// chartAt(posición)
console.log("Ejemplo 'chartAt':");
const mensajeChartat = "Hola";
let letra = mensajeChartat.charAt(0);
console.log(letra);
letra = mensajeChartat.charAt(3);
console.log(letra);
// substring(inicio,fin)
console.log("Ejemplo 'substring':");
const mensajeSubstring = "Hola";
const porcion1 = mensajeSubstring.substring(2);
const porcion2 = mensajeSubstring.substring(1,8);
console.log(porcion1);
console.log(porcion2);
// split(separador)
console.log("Ejemplo 'split':");
const mensajeSplit = "Hola mundo, soy una cadena.";
const palabras = mensajeSplit.split(" ");
console.log(palabras);
const palabraSplit = "HOLA";
const letras = palabraSplit.split("");
console.log(letras);

// Ejercicio 1 de funciones: pares o impares

// Opción 1.
// function checkNumber(numeroFuncion) {
//     let resultado = "";
//     if (numeroFuncion % 2 === 0) {
//         resultado = "El número es par.";
//     } else if (((numeroFuncion % 2) != 0) && (isNaN(numeroFuncion) == false)) {
//         resultado = "El número es impar.";
//     } else {
//         resultado = "No has metido un número."
//     }; 
//     return resultado;
// };
// numeroUsuario = prompt("Dime un múmero");
// alert(checkNumber(numeroUsuario));

// Opción 2.
function checkNumber(numeroFuncion) {
    let resultado = "";
    if (numeroFuncion = " ") {
        resultado = "No has introducido datos."
    } else if (isNaN(numeroFuncion) == true) {
        resultado = "No has metido un número."
    } else if (numeroFuncion == 0) {
        resultado = "0 no es número par ni impar."
    } else if (numeroFuncion % 2 == 0) {
        resultado = "El número es par.";
    } else {
        resultado = "El número es impar.";
    };
    return resultado;
};
numeroUsuario = prompt("Dime un múmero");
alert(checkNumber(numeroUsuario));

// Ejercicio 2 de funciones: mayúsculas, minúsculas o ambas.

function checkCase(fraseFuncion) {
    controlMayus = fraseFuncion.toUpperCase();
    controlMinus = fraseFuncion.toLowerCase();
    if (numeroFuncion = " ") {
        return "No has introducido datos."
    } else if (isNaN(fraseFuncion) == false) {
        return "No has metido texto.";
    } else if (controlMayus == fraseFuncion) {
        return "La frase está en mayúsculas.";
    } else if (controlMinus == fraseFuncion) {
        return "La frase está en minúsculas.";
    } else {
        return "La frase tiene mayúsculas y minúsculas.";
    };
};
// Puedo meter el 'return' directamente en el código de cada condicional en vez de hacerlo con variables.
alert(checkCase(prompt("Dime una frase")));
// Puedo ahorrarme el declarar la variable del 'prompt' y meterla como parámetro de la función.

// Función 'map' para 'arrays'.
// Ejemplo con lista de números.
const numeros = [2, 4, 6, 8];
const numerosGrandes = numeros.map(function(numero) {
    return numero*2;
});
console.log(numerosGrandes);
// Ejemplo con lista de texto.
const listaLetras = ["a", "b", "c", "d"];
const letrasMayus = listaLetras.map(function(letra) {
    return letra.toUpperCase();
});
console.log(letrasMayus);

// Ejercicio 3 de funciones: funciones con 'arrays'.
const listaPalabrasEjercicio = ["JavaScript", "Variables", "Funciones", "Condicionales", "Bucles"];
const listaPalabrasEjercicioModificada = listaPalabrasEjercicio.map(function(elemento) {
    return elemento.toUpperCase();
});
listaPalabrasEjercicioModificada.reverse();
// El 'reverse' actualiza la lista original y no crea una nueva, por eso no hace falta crear una nueva variable para guardar la lista invertida.
console.log(listaPalabrasEjercicioModificada);

// Funciones flecha.
const topics = ["JavaScript", "Variables", "Funciones", "Condicionales", "Bucles"];
const topicsModificada1 = topics.map(palabra => palabra.toUpperCase());
topicsModificada1.reverse();
console.log(topicsModificada1);
// Si quiero hacer una función más compleja, puedo meter llaves en la función flecha y poner un return.
const topicsModificada2 = topics.map(palabra => {
    // Más código
    return palabra.toUpperCase();
});
topicsModificada2.reverse();
console.log(topicsModificada2);

// Función 'filter' para 'arrays'.
const topicsFiltro1 = topics.filter(function(palabra) {
    return palabra.length > 6;
});
console.log(topicsFiltro1);
// Lo mismo pero con función flecha.
const topicsFiltro2 = topics.filter(palabra => palabra.length>6);
console.log(topicsFiltro2);

// Ejercicio 4 de funciones: filtro de números pares e impares.
const arrayNumeros = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
// Filtro con función normal. 
const arrayNumerosPares = arrayNumeros.filter(function(numero) {
    return numero%2 == 0    
});
console.log(arrayNumerosPares);
// Filtro con función flecha.
const arrayNumerosImpares = arrayNumeros.filter(numero => numero%2 != 0);
console.log(arrayNumerosImpares);

// Función 'reduce' para 'arrays'.
// Ejemplo con cadenas de textos para ver cual es más larga.
const palabrasReduce = ["aa", "b", "ccc"];
let resultadoReduce1 = "";
palabrasReduce.reduce(function(acc, current) {
    if (acc.length > current.length) {
        return resultadoReduce1 = acc;
    } else {
        return resultadoReduce1 = current;
    }
}, "");
console.log(resultadoReduce1);
// Ejemplo con números para ver la suma total.
const numerosReduce = [1, 5, 27, 4];
const resultadoReduce2 = numerosReduce.reduce(function(acc, current) {
    return acc+current;
}, 0);
console.log(resultadoReduce2);

// Ejercicio 5 de funciones: calcular media de un 'array.
const times = [60, 75, 79, 80, 55, 59];
const sumaTimes = times.reduce(function(acc,cv) {
    return acc+cv;
}, 0);
const mediaTimes = sumaTimes / times.length;
console.log(mediaTimes);
// También se podría hacer con un 'for'.
let sumaTimesFor = 0;
for (let i=0; i<times.length; i++) {
    sumaTimesFor += times[i];
};
const mediaTimesFor = sumaTimesFor / times.length;
console.log(mediaTimesFor);
// Y también se podría hacer con un 'for of'.
let sumaTimesForOf = 0;
for (const valor of times) {
    sumaTimesForOf += valor;
};
const mediaTimesForOf = sumaTimesForOf / times.length;
console.log(mediaTimesForOf);

// Ejercicio 6 de funciones: obtener la palabra más larga.
const words = ["Environmental", "Systems", "Research", "Institute"]; 
let resultadoWords = "";
words.reduce(function(acc, current) {
    if (acc.length > current.length) {
        return resultadoWords = acc;
    } else {
        return resultadoWords = current;
    }
}, "");
console.log(resultadoWords);
// Para entenderlo mejor:
const palabraLarga = words.reduce(function(valor, i) {
    if (valor.length > i.length) {
        return valor;
    } else {
        return i;
    }
}, "");
console.log(palabraLarga);
// Si veo cual es la más corta, me sale el valor inicial, que he puesto 'a'.
const palabraCorta = words.reduce(function(valor, i) {
    if (valor.length < i.length) {
        return valor;
    } else {
        return i;
    }
}, "a");
console.log(palabraCorta);
