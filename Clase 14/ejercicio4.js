/*
Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la
cantidad.
*/

const prompt = require('prompt-sync')();

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos comprados: "));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto: "));

let calcularDescuento = (cantidad, precio) => {
    let descuento = 0;
    if (cantidad >= 10 && cantidad < 50) {
        descuento = 0.1; // 10% de descuento
    } else if (cantidad >= 50) {
        descuento = 0.3; // 30% de descuento
    }
    let total = cantidad * precio * (1 - descuento);
    return total;    
};

console.log(`El total a pagar con descuento es: $ ${calcularDescuento(cantidadProductos, precioUnitario)}`);
