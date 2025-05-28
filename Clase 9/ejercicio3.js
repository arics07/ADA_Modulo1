/*
Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let condicion1 = prompt("Ingrese condición 1 'true' o 'false': ").toLowerCase();
let condicion2 = prompt("Ingrese condicion 2 'true' o 'false': ").toLowerCase();

if (condicion1==='true') {
    condicion1 = true
} else if (condicion1==='false') {
    condicion1 = false
} else {
    console.log("La información ingresada en condicion 1 es incorrecta")
}

if (condicion2==='true') {
    condicion2 = true
} else if (condicion2==='false') {
    condicion2 = false
} else {
    console.log("La información ingresada en condicion 2 es incorrecta")
}

let operacionAND = condicion1 && condicion2;
let operacionOR = condicion1 || condicion2; 
let operacionNOT = !condicion1

console.log(`Resultado de la operación AND: ${operacionAND}`);
console.log(`Resultado de la operación OR: ${operacionOR}`);
console.log(`Resultado de la operación NOT sobre condicion 1: ${operacionNOT}`);