/*
Ejercicio 8:
Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
escaleno. (Investiga sobre los triángulos para determinar la formula)
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Ingrese la medida de un lado del triangulo: "));
let lado2 = parseFloat(prompt("Ingrese la medida del segundo lado del triangulo: "));
let lado3 = parseFloat(prompt("Ingrese la medida del tercer lado del triangulo: "));

if ((lado1==lado2)) {
    if (lado2==lado3){
        console.log("Es un triángulo equilátero")
    } else {
        console.log("Es un triángulo isósceles.")
    }
} else if ((lado2==lado3)||(lado1==lado3)){
    console.log("Es un triángulo isósceles.")
} else {
    console.log("Es un triángulo escaleno.")
}