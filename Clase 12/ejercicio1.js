/*
Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta 
que el usuario ingrese un número negativo. 
Luego, imprime la suma de todos los números ingresados.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();


let numero = 1;

while (numero>0) {
    numero = parseFloat(prompt("Ingrese un número: "))
}
