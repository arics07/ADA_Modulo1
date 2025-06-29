/*
Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una
función flecha para calcular el precio final.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let porcentajeIva = parseFloat(prompt("Ingrese el % de IVA: "));

let ivaFinal = (precio, porcentajeIva) => {
    return (precio*(porcentajeIva+100)/100)
};

console.log(ivaFinal(precio, porcentajeIva));