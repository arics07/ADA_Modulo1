/*
Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array manualmente (sin usar métodos como push).
3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas.
*/

const prompt = require('prompt-sync')();

let floresFavoritas = [];
let flor = null;

for (let i=0; i<3; i++){
    flor = prompt("Ingrese una de sus tres flores favoritas: ");
    floresFavoritas[i] = flor;
};

let florPosible = prompt("Ingrese el nombre de una flor: ");

let contador = 0;
let florEsta = false;

while ((florEsta===false) && (contador<3)){
    if (florPosible===floresFavoritas[contador]){
        florEsta = true;
        console.log("La flor está entre las favoritas!!")
    };
    contador = contador + 1;
};

if (florEsta===false) {
    console.log("La flor no está entre las favoritas. ")
};