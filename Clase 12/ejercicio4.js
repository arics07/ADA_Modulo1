/*
Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let notas = [];

for (let i=0; i<10; i++){
    notas[i] = parseFloat(prompt("Ingrese la nota correpondiente: "));
}

for (let i=0; i<notas.length; i++){
    console.log(notas[i]);
}