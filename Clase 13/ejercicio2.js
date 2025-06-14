/*
Ejercicio 2: Número mayor (función expresada) 
Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.
*/

let encontrarMayor = function (primerNumero, segundoNumero) {
    if (primerNumero<segundoNumero) {
        return segundoNumero;
    } else {
        return primerNumero;
    }
};

console.log(encontrarMayor(39, 92));