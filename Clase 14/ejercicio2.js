/*
Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let nota = null;
let notas = [];

let calculoPromedio = (notas) => {
    let suma = 0;
    for (let i=0; i<notas.length; i++){
        suma = suma + notas[i];
    }
    return suma/notas.length;
}

for (let i=0; i<5; i++){
    nota = parseFloat(prompt(`Ingrese la nota número ${i}: `));
    notas.push(nota)
}

console.log(`El promedio de las notas es ${calculoPromedio(notas)}`);