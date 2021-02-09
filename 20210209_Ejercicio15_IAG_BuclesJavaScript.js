// Bucles con 'for'.
const vocales = ["a", "e", "i", "o", "u"];
console.log("La longitud de la lista de vocales es: " + vocales.length);
// 'letra' es una variable local (normalmente se pone i o j).
for (letra = 0; letra < vocales.length; letra++) {
    console.log(`La ${letra+1}ª vocal es '${vocales[letra]}'.`);
};

// Ejercicio de bucles
const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let suma = 0;
for (nota = 0; nota < notas.length; nota++) {
    suma += notas[nota];
};
alert("La suma de las notas es " + suma);

suma = 0;
for (const nota of notas) {
    suma += nota;
};
alert("La suma de las notas es " + suma);