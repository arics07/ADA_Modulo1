/*
 Ejercicio 6: El deportista
Para este ejercicio deberán definir un objeto literal “deportista”, con los
siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto,
nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✔ Recibe por parámetro la cantidad de horas.
✔ Resta a su energía (this.energia) la cantidad de horas x 5.
✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va
variando la energía y experiencia del deportista por consola
*/

const prompt = require('prompt-sync')();

let deportista = {
    nombre: "Lando",
    energia: 100,
    experiencia: 60,

    entrenarHoras: (horas) =>{
        this.energia = this.energia - horas*5;
        this.experiencia = this.experiencia + horas*2;
    }

};

let horas = parseInt(prompt("Ingrese la cantidad de horas que desea entrenar: "));
deportista.entrenarHoras(horas);
console.log(`El deportista ${deportista.nombre} tiene ${deportista.energia} de energía y ${deportista.experiencia} de experiencia después de entrenar ${horas} horas.`);





