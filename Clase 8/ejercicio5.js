/*
Ejercicio 5: Saludo personalizado
Enunciado:
Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
texto y la función prompt(). Escribe un programa que:
1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.
Requisitos:
• Utiliza prompt() para recibir el nombre del usuario.
• Muestra un mensaje utilizando concatenación de cadenas.
*/

//para ingresar informacion por teclado
const prompt = require('prompt-sync')();

//solicito al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre: ");

//muestro mensaje personalizado
console.log(`Hola ${nombre}!! :D ​`)