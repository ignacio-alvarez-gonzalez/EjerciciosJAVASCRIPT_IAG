// Bucles con 'for'.
const vocales = ["a", "e", "i", "o", "u"];
console.log("La longitud de la lista de vocales es: " + vocales.length);
// 'letra' es una variable local (normalmente se pone i o j).
for (letra = 0; letra < vocales.length; letra++) {
    console.log(`La ${letra+1}ª vocal es '${vocales[letra]}'.`);
};

