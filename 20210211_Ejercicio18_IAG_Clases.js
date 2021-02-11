"use strict"

// Ejemplo de clase con un constructor.
// La clase no almacena un objeto, me proporciona el molde.
// Como regla de buena práctica, mejor poner la primera letra del nombre de la clase con mayúscula.
class Food {
    constructor(name, prop2, cal) {
        this.prop1 = name;
        this.type = prop2;
        this.cal = cal;
    }
};

const donut = new Food("donut", "sweet", 452);
const beer = new Food("beer", "drink", 45);
const apple = new Food("apple", "fruit", 52);

console.log(donut);
console.log(donut.prop1);
console.log(donut.type);

// Ejercicio con clases.
class Cuadrado {
    constructor(lado) {
        this.dimension = lado;
        this.perimetro = lado * 4;
        this.area = lado*lado;
        // Puedo meter funciones con this, para que reciban parámetro.
        this.calcularVolumen = function () {
            return console.log(lado*(this.area));
        }
    }
    // Puedo crear funciones también de forma directa fuera del constructor, sin usar parámetros ("lado" en este caso).
    imprimir () {
        console.log("El cuadrado se ha impreso");
    }
    
};
let cuadrado1 = new Cuadrado(2);
let cuadrado2 = new Cuadrado(5);
let cuadrado3 = new Cuadrado(10);

console.log("El lado del cuadrado dos es " + cuadrado2.dimension + "cm.");
console.log("El perímetro del cuadrado es " + cuadrado2.perimetro + "cm.");
console.log("El área del cuadrado dos es " + cuadrado2.area + "cm2.");

// las funciones tengo que ejecutarlas, si llamo al objeto solo me muestra que existe esa función.
cuadrado2.calcularVolumen();
cuadrado2.imprimir();

// Para cambiar el valor de un elemento:

cuadrado2.dimension = 15;
// De esta forma no sobreescribe todos los atributos, solo el que le decimos.
console.log("El lado del cuadrado dos ha cambiado a " + cuadrado2.dimension + "cm.");
console.log("El perímetro del cuadrado dos ahora es " + cuadrado2.perimetro + "cm.");
console.log("El área del cuadrado dos ahora es " + cuadrado2.area + "cm2.");
cuadrado2.calcularVolumen();
cuadrado2.imprimir();

cuadrado2 = new Cuadrado(15);
// Tenemos que volver a instanciar el elemento.
console.log("El lado del cuadrado dos ha cambiado a " + cuadrado2.dimension + "cm.");
console.log("El perímetro del cuadrado dos ahora es " + cuadrado2.perimetro + "cm.");
console.log("El área del cuadrado dos ahora es " + cuadrado2.area + "cm2.");
cuadrado2.calcularVolumen();
cuadrado2.imprimir();


// Ejercicio complejo con clases: calcular precios de facturas.

class Factura {
    constructor(nombre, array) {
        this.clienteFactura = nombre;
        this.elementosFactura = array;
        // Creo una pseudoclase, un objeto interno (la plantilla de un objeto dentro de un objeto).
        this.informacion = {
            // Esto sería una opción, pero habría que ponerlos en los parámetros del constrtuctor.
            // ivaFactura = iva,
            // baseImponibleFactura = baseImponible,
            // totalFactura = total,
            // formaDePagoFactura = formaDePago

            // En lugar de meterlos como parámetro en el constructor, si quiero, puedo poner valores por defecto.
            iva: 21, 
            baseImponible: 0,
            total: 0,
            formaDePago: "efectivo",
        };
        this.calcularBaseImponible = function(){
            this.informacion.baseImponible = (this.elementosFactura.cantidadElemento)*(this.elementosFactura.precioElemento);
            return this.informacion.baseImponible;
        };
        this.calcularTotal = function(){
            this.informacion.total = this.informacion.baseImponible*(1+(this.informacion.iva/100));
            return this.informacion.total;
        };
        // Para la función es mejor usar los elementos guardados con el 'this', no por parámetros.
    }
};
class Cliente {
    constructor(nombre, direccion, telefono, nif) {
        this.nombreCliente = nombre;
        this.direccionCliente = direccion;
        this.telefonoCliente = telefono;
        this.nifCliente = nif;
    }
};
class Elemento {
    constructor(descripcion, cantidad, precio) {
        this.descripcionElemento = descripcion;
        this.cantidadElemento = cantidad;
        this.precioElemento = precio;
    }
};

let cliente1 = new Cliente("ignacio", "bravo murillo", "+34", "87654321");
let objeto1 = new Elemento("coche", 1, 5000);

console.log(cliente1);
console.log(objeto1);

let factura1 = new Factura(cliente1, objeto1);
console.log(factura1);

factura1.calcularBaseImponible();
factura1.calcularTotal();
console.log("El precio total de la factura es " + factura1.informacion.total + "€.");

// Ahora vamos a hacerlo con haciendo que el elemento de la clase Elemento sea un array y haya que recorrerlo.