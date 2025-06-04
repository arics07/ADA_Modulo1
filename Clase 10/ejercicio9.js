/*
•	Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). 
El IMC se calcula con la fórmula: 

 imc = peso / (altura * altura)

Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:

let imc = peso / (altura * altura);

*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en m: "));

let imc = peso/(altura * altura);

console.log(`Si IMC es: ${imc}`);
