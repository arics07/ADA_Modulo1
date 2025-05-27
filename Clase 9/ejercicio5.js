/*
Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let numero3 = parseFloat(prompt("Ingrese el tercer número: "));

if (numero1>numero2) {
    if (numero1>numero3){
        console.log(`El número ${numero1} es el mayor`)
    } else {
        console.log(`El número ${numero3} es el mayor`)
    }
} else {
    if (numero2 > numero3) {
        console.log(`El número ${numero2} es el mayor`);
    } else {
        console.log(`El número ${numero3} es el mayor`);
    }
}