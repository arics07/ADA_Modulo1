/*
Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let nombre = "leon"

let nombreIngresado = prompt("Ingrese un nombre: ").toLocaleLowerCase();

let condicion = (nombre == nombreIngresado);

if (nombre === nombreIngresado) {
    console.log("El nombre ingresado coincide con el nombre guardado.")
} else {
    console.log("El nombre ingresado NO coincide con el nombre guardado.")
}