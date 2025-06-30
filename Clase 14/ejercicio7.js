/*
● Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔ título: una cadena con el título del libro.
✔ autor: una cadena con el nombre del autor del libro.
✔ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
como parámetro y muestre por consola la información de cada libro en el
formato especificado.
*/

const libro1 = {
    titulo: "1984",
    autor: "George Orwell",
    anioPublicacion: 1949
};

const libro2 = {
    titulo: "Brand New World",
    autor: "Aldous Huxley",
    anioPublicacion: 1932
};

let libros = [libro1, libro2];

let mostrarLibros = (libros) => {
    for (let i=0; i<libros.length; i++) {
        console.log(`Título: ${libros[i].titulo}, Autor: ${libros[i].autor}, Año de Publicación: ${libros[i].anioPublicacion}`);
    }
};

mostrarLibros(libros);