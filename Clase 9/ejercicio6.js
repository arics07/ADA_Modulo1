/*
Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let edad = parseFloat(prompt("Ingrese su edad: "));

if (edad>=18){
    console.log("Usted es mayor de edad.")
} else {
    console.log("Usted es menor de edad.")
}