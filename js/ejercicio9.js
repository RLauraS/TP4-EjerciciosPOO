/*Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */
class Animal {
    #nombre;
    #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get edad() {
    return this.#edad;
  }

  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }

  emitirSonido() {
    document.write("Este animal emite un sonido.");
  }
}

class Perro extends Animal {
  emitirSonido() {
    document.write("Guau guau!🐶<br><hr>");
  }
}

class Gato extends Animal {
  emitirSonido() {
    document.write("😺Miau, miau!<br><hr>");
  }
}

const miPerro = new Perro("Oddie", 5);
const miGato = new Gato("Garfield", 3);

document.write(miPerro.nombre + " tiene " + miPerro.edad + " años.");
miPerro.emitirSonido();

document.write(miGato.nombre + " tiene " + miGato.edad + " años.");
miGato.emitirSonido();
