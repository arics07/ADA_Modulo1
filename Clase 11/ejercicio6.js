/*
Ejercicio 6: La tabla de multiplicar
Consigna:
Crea un programa que le pida al usuario un número y luego imprima su 
tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.

*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Ingrese un número: "));

for (let i=1; i<=10; i++){
    console.log(`${numero} x ${i} = ` + numero*i)
}