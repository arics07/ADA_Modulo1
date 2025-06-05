/*
Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. 
Escribe un programa que le pida al usuario un número y determine si es par o impar. 
Muestra un mensaje explicativo indicando qué significa cada caso.

*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número entero: "));

if (numero%2===0){
    console.log("El número ingresado es PAR.")
} else {
    console.log("El número ingresado es IMPAR.")
}