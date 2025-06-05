/*
Ejercicio 3: ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo. 
El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
Usa un ciclo for para realizar la tarea.

*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Ingrese un número: "));

for (var i=1; i<=numero; i++){
    console.log(i)
}
