/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
  #ISBN;
  #titulo;
  #autor;
  #numPaginas;
  constructor(ISBN, titulo, autor, numPaginas) {
    this.#ISBN = ISBN;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numPaginas = numPaginas;
  }

  get ISBN() {
    return this.#ISBN;
  }
  set ISBN(nuevoISBN) {
    this.#ISBN = nuevoISBN;
  }

  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }

  get autor() {
    return this.#autor;
  }
  set autor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }

  get numPaginas() {
    return this.#numPaginas;
  }
  set numPaginas(nuevoNumPaginas) {
    this.#numPaginas = nuevoNumPaginas;
  }

  mostrarLibro() {
    document.write(
      `El libro "${this.#titulo}" con ISBN ${this.#ISBN} creado por el autor ${
        this.#autor
      } tiene ${this.#numPaginas} páginas.<br>`
    );
  }
  compararNumPaginas(libro) {
    if (this.numPaginas > libro.numPaginas) {
      document.write(`El libro ${this.titulo} tiene más páginas que el libro ${libro.titulo}.`);
    } else if (this.numPaginas < libro.numPaginas) {
      document.write(`El libro ${libro.titulo} tiene más páginas que el libro ${this.titulo}.`);
    } else {
      document.write(`Los libros ${this.titulo} y ${libro.titulo} tienen la misma cantidad de páginas.`);
    }
  }

}

const libro1 = new Libro(
  "1234567890",
  "El puente de otoño",
  "Takashi Matsuoka",
  382
);
const libro2 = new Libro(
  "0987654321",
  "Flores para Algernon",
  "Daniel Keyes",
  212
);
document.write(`<h4>Libro uno:</h4><br>`);
libro1.mostrarLibro();

document.write(`<hr><h4>Libro dos:</h4><br>`);
libro2.mostrarLibro();

document.write(
  `<hr><h4>Comparación de cantidad de páginas de los libros:</h4><br>`
);
libro1.compararNumPaginas(libro2);

