/*Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse". */
class Persona {
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
  }

  // Getters y setters para las propiedades
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

  get profesion() {
    return this.#profesion;
  }

  set profesion(nuevaProfesion) {
    this.#profesion = nuevaProfesion;
  }

  // Métodos de la clase
  saludar() {
    document.write(
      `Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años y soy ${
        this.#profesion
      }.<br>`
    );
  }

  despedirse() {
    document.write(`Bye bye, que tengan un buen día :) 🎶<br><hr>`);
  }
}

const persona1 = new Persona("Aoi", 44, "guitarrista y compositor");
const persona2 = new Persona("Hyunjin", 25, "bailarin, cantante y coreografo");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();
