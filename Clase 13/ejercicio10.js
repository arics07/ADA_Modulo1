/*
Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
*/

let calcularFactorial = function(numero) {
    let factorial = 1;

    for (let i=numero; i>1; i--){
        factorial = factorial*i
    };

    return factorial;
}

console.log(calcularFactorial(10));