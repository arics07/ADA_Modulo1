/*
Ejercicio 1: Calcula el doble de un número
Enunciado:
En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes
escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos:
• Utiliza la función prompt() para solicitar el dato al usuario.
• Almacena el número ingresado en una variable.
• Utiliza un operador aritmético para calcular el doble del número.
*/

//npm install prompt-sync para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

//solicito al usuario que ingrese un número
let numeroIngresado = parseFloat(prompt("Ingrese un numero: "));

//calculo el doble del número ingresado
let doble = numeroIngresado*2;

//informo el resultado
console.log(`El doble de ${numeroIngresado} es ${doble}`);
