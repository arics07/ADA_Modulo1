/*
Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let numeroIngresado = parseFloat(prompt("Ingrese un número del 1 al 7: "));

if ((numeroIngresado<1)||(numeroIngresado>7)){
    console.log("El número ingresado no es válido.")
} else {
    if (numeroIngresado==1){
        console.log("LUNES")
    } else if (numeroIngresado===2){
        console.log("MARTES")
    } else if (numeroIngresado===3){
        console.log("MIÉRCOLES")
    } else if (numeroIngresado===4){
        console.log("JUEVES")
    } else if (numeroIngresado===5){
        console.log("VIERNES")
    } else if (numeroIngresado===6){
        console.log("SÁBADO")
    } else if (numeroIngresado===7){
        console.log("DOMINGO")
    }
}