/*
Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
Luego, pide al usuario que adivine el número hasta 3 intentos. 
Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación 
y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. 
Usa un for para resolver este ejercicio.

*/

const prompt = require('prompt-sync')();

const NUMERO_SECRETO = Math.floor(Math.random() * 10) + 1;

let acierto = false;

for (let intento=1; intento<=3; intento++) {
    const ADIVINANZA = parseInt(prompt(`Intento ${intento}: Adivina el número del 1 al 10... `));

    // estructura switch para evaluar la entrada del usuario
    switch (true) {
        case (ADIVINANZA === NUMERO_SECRETO):
            console.log("Adivinaste el número. GANASTE!!!");
            acierto = true;
            break;
        case (ADIVINANZA < NUMERO_SECRETO):
            console.log("Muy bajo. Intentá un número más alto... ");
            break;
        case (ADIVINANZA > NUMERO_SECRETO):
            console.log("Muy alto. Intentá con un número más bajo... ");
            break;
    }

    // operador ternario para cortar el bucle si acertó
    if (acierto ? true : false) break;
}

if (!acierto) console.log(`El número secreto era ${NUMERO_SECRETO}`)