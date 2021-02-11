"use strict";

// Accedemos a un nodo.
const huey = document.getElementById("huey");
console.log(huey);
// En este caso, accedemos al input del primer div, con id huey.

// Accedemos a un nodo y le cambiamos el estilo.
const enunciado = document.getElementById("enunciado");
enunciado.style.color = "#FF7F00";

// Podemos añadir .parentNode o .childNodes par acceder al nivel superior o inferior.
const primerDiv = document.getElementById("huey").parentNode;
console.log(primerDiv);
// En este caso, accedemos al nivel superior del id huey, que es el id first-option.

// Se pueden eliminar nodos.
const element = document.getElementById("first-option");
const input = document.getElementById("huey");
element.removeChild(input);
// En este caso, se ha eliminado el botón previo a la etiqueta huey.

// Podemos añadir nodos.

