/*
Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. 
Luego, escribe un algoritmo para sumar todos los números en la matriz.
*/

let matriz = [
    [5, 7, 23, 3, 10],
    [56, 21, 39, 7, 17],
    [65, 86, 24, 9, 1],
    [66, 58, 97, 4, 14],
    [77, 34, 90, 51, 101]
];

let suma = 0;

for (let i=0; i<matriz.length; i++) {
    for (let j=0; j<matriz[i].length; j++){
        suma = suma + matriz[i][j];
    }
}

console.log("La suma de todos los números de la matriz da: " + suma)