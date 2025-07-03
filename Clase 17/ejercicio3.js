/*
Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función
‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto
pueden usar forEach o investigar el método “findIndex()”
4. Verifique si existe un producto con precio mayor a 50. Para esto
investigar el método “.some()”
5. Devuelva una cadena de nombres de productos separados por
comas.
*/

let productos = ["remera", "zapatillas", "buzo", "medias", "gorra", "campera"];

let gestionarProductos = (productos, nuevoProducto, productoBuscado) => {
    //añado un nuevo producto al array
    productos.push(nuevoProducto);
    console.log(`Nuevo producto añadido: ${productos}`);

    //elimino el último producto del array
    productos.pop();
    console.log(`Último producto eliminado: ${productos}`);

    //encuentro el índice de un producto específico
    let indice = productos.indexOf(productoBuscado);
    console.log(`El índice de ${productoBuscado} es: ${indice}`);

};

gestionarProductos(productos, "pelota", "buzo");