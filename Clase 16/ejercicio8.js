/*
Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber
si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.
*/

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let cond = nombres.find((nombre) => nombre.toLowerCase() === "laura");

console.log(cond);