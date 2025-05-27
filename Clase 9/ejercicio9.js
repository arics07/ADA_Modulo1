/*
Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

const PI = 3.14159;

let radio = parseFloat(prompt("Ingrese el radio de la circunferencia: "));

let areaCirculo = PI*radio*radio;
let perimetroCircunferencia = 2*PI*radio;

console.log(`El área del círculo es ${areaCirculo} y el perímetro es ${perimetroCircunferencia}`)