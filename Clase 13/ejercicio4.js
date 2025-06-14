/*
Ejercicio 4: Número par o impar 
Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" 
si el número es par o "Es impar" si el número es impar. Usa una variable local para 
guardar el resultado.
*/

function esPar (numero) {
    let resto = numero%2;

    if (resto===0) {
        console.log("El número ES PAR.")
    } else {
        console.log("El número NO ES PAR.")
    }

    return resto;
};

esPar(89);
esPar(86);