/*
Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, 
debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let rightPassword = "1234";

let password;

do {
    password = prompt("Ingrese su contraseña: ");
} while (rightPassword != password)
