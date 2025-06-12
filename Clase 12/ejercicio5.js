/*
Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
(Pueden desglosar en pasos el código si eso les facilita su desarrollo)
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let nombres = [];

for (let i=0; i<5; i++){
    nombres[i] = prompt("Ingrese un nombre para almacenar en un array: ");
};

let nombreBuscado = prompt("Ingrese el nombre que desea buscar: ");

if (nombres.includes(nombreBuscado)) {
  console.log('El nombre está en el array.');
} else {
  console.log('El nombre NO está en el array.');
}