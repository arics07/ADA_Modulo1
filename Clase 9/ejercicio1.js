/*
Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.
*/

//npm install prompt-sync para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese un numero: "));
let numero2 = parseFloat(prompt("Ingrese otro numero: "));

if (numero1<numero2){
    console.log(`El número ${numero2} es mayor que ${numero1}`)
} else if (numero1>numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}`)
} else {
    console.log("Los número ingresados son iguales")
}