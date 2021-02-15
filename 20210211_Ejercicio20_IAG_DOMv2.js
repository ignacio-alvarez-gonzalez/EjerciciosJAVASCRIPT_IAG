"use strict"

// Número de enlaces de la página:
const enlaces = document.getElementsByTagName("a"); 
console.log("El número de enlaces de la páginas es: " + enlaces.length);

// Dirección a la que enlaza el penúltimo párrafo.
console.log("El penúltimo enlace es: " + enlaces[(enlaces.length)-2]);
// Para obtener solo el enlace, llamar a href.
console.log(enlaces[(enlaces.length)-2].href);

// Número de enlaces del tercer párrafo:
// Una vez accedemos al nodo del tercer párrafo, podemos usarlo como documento.
const enlacesTercer = document.getElementById("thirdparagraph"); 
console.log("El número de enlaces del tercer párrafo es: " + enlacesTercer.getElementsByTagName("a").length);

// Escribir los resultados al final de la página.
const resultado1 = document.getElementById("resultado1");
resultado1.innerHTML = "El número de enlaces de la páginas es: " + enlaces.length + ".";

const resultado2 = document.getElementById("resultado2");
resultado2.innerHTML = "El penúltimo enlace es: " + enlaces[(enlaces.length)-2];

const resultado3 = document.getElementById("resultado3");
resultado3.innerHTML = "El número de enlaces del tercer párrafo es: " + enlacesTercer.getElementsByTagName("a").length + ".";

// Escribir los resultados al final de la página creando nodos.
const indice = document.createElement('h2');
const contenidoIndice = document.createTextNode("Resultados v2");
indice.appendChild(contenidoIndice);
document.body.appendChild(indice);

const parrafo1 = document.createElement('p');
const contenido1 = document.createTextNode("El número de enlaces de la páginas es " + enlaces.length + ".");
parrafo1.appendChild(contenido1);
document.body.appendChild(parrafo1);

const parrafo2 = document.createElement('p');
const contenido2 = document.createTextNode("El penúltimo enlace es: " + enlaces[(enlaces.length)-2]);
parrafo2.appendChild(contenido2);
document.body.appendChild(parrafo2);

const parrafo3 = document.createElement('p');
const contenido3 = document.createTextNode("El número de enlaces de la páginas es " + enlaces.length + ".");
parrafo3.appendChild(contenido3);
document.body.appendChild(parrafo3);