/*
Ejercicio 2: Verificar si un número es positivo, negativo o cero
Enunciado:
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
programa en JavaScript que:
1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.
Requisitos:
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las
verificaciones.
• Usa parseFloat() para convertir la entrada del usuario a un número.
*/

//para ingresar informacion por teclado
const prompt = require('prompt-sync')();

//solicito al usuario que ingrese un número
let numeroIngresado = parseFloat(prompt("Ingrese un numero: "));

//verifico e informo
if (numeroIngresado<0) {
    console.log("El numero ingresado es negativo")
} else if (numeroIngresado>0){
    console.log("El numero ingresado es positivo")
} else {
    console.log("El numero ingresado es cero.")
};
