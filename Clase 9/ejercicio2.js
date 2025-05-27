/*
Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

const RANGO_MINIMO = 4;
const RANGO_MAXIMO = 43;

let numeroIngresado = parseFloat(prompt("Ingrese un numero: "));

if ((numeroIngresado<RANGO_MINIMO)||(numeroIngresado>RANGO_MAXIMO)){
    console.log(`El número ingresado está fuera del rango.`)
} else {
    console.log("El número ingresados está dentro del rango.")
}