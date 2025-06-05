/*
Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre 
el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un 
mensaje indicando que los valores son inválidos.

*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let inicio = parseInt(prompt("Ingrese un número: "));
let fin = parseInt(prompt("Ingrese un número mayor al anterior: "));

if (inicio>fin){
    console.log("Los valores ingresados no son válidos, ya que el primer número ingresado es mayor que el segundo.")
} else {
    for (let i=inicio; i<=fin; i++){
        if (i%2===0){
            console.log(i)
        }
    }
}