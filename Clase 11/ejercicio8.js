/*
Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo 
y muestre todos los múltiplos de ese número entre 1 y 100. 
Utiliza un ciclo for para resolverlo.

*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número positivo: "));

console.log(`Los múltiplos de ${numero} entre 0 y 100 son : `)

for (let i=0; i<=100; i++) {
    console.log(numero*i)
}