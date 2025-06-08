/*
Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación matemática a realizar:
 suma, resta, multiplicación o división. 
 Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
 Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
 Usa switch para resolverlo.

*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let primerNumero = parseFloat(prompt("Ingrese un número: "));
let segundoNumero = parseFloat(prompt("Ingrese otro número: "));

let operacion = prompt("Elija una operación: + - * / ");
let resultado;

switch (operacion){
    case "+":
        resultado = primerNumero + segundoNumero;
        break;
    case "-":
        resultado = primerNumero - segundoNumero;
        break;
    case "*":
        resultado = primerNumero * segundoNumero;
        break;
    case "/":
        resultado = primerNumero / segundoNumero;
        break;
    default:
        operacion = null;
        console.log("La operación ingresada no es válida. ")        
}

if (operacion != null) console.log(`El resultado de la operación es: ${resultado}`);