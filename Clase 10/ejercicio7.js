/*
•	Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego 
intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética 
o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

*/

let primeraVariable = 7;
let segundaVariable = 86;

console.log(`La primera variable es ${primeraVariable} y la segunda variable es ${segundaVariable}`);

// Guardo el valor de la primera variable en una variable reserva para no perderla
let reserva = primeraVariable;

// Intercambio valores
primeraVariable = segundaVariable;
segundaVariable = reserva;

console.log(`Luego del intercambio, la primera variable es ${primeraVariable} y la segunda variable es ${segundaVariable}`);