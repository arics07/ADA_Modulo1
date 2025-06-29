/*
Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en
niño, adolescente, adulto o adulto mayor.
*/

//para poder ingresar informacion por teclado
const prompt = require('prompt-sync')();

let clasificar = (edad) => {
    if (edad<13) console.log(`Es un/a niño/a`);
    else if ((edad>=13) && (edad<18)) console.log(`Es un/a adolescente`);
    else if ((edad>=18) && (edad<65)) console.log(`Es un/a adulto/a`);
    else console.log(`Es un adulto mayor`)
};

let edad = parseInt(prompt(`Ingrese la edad: `));

clasificar(edad);