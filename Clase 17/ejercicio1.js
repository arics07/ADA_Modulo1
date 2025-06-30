/*
Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener
las siguientes propiedades: nombre, edad y un array de notas (con 5
notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto
investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
las notas.
*/

const estudiante = {
    nombre: "Leon",
    edad: 13,
    notas: [10, 9, 7, 10, 9]
};

let procesarEstudiante = (estudiante) => {
    //agrega una nueva nota al array de notas
    estudiante.notas.push(9);
    console.log(`Nuevas notas, agregando una: ${estudiante.notas}`);
    //elimina la primera nota del array
    estudiante.notas.shift();
    console.log(`Nuevas notas, sin la primera: ${estudiante.notas}`);
    //calcula el promedio de las notas restantes
    let suma = estudiante.notas.reduce((acumulador, nota) => {
        return acumulador + nota
    }, 0);
    let promedio = suma / estudiante.notas.length;
    console.log(`El promedio de notas es ${promedio}`);
    //convierte el nombre del estudiante a mayúsculas
    estudiante.nombre = estudiante.nombre.toUpperCase();
    console.log(`El nombre ahora es ${estudiante.nombre}`);
};

procesarEstudiante(estudiante);