/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */
class Rectangulo {
  #alto;
  #ancho;
  constructor(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
  }
  get alto() {
    return this.#alto;
  }

  set alto(nuevoAlto) {
    this.#alto = nuevoAlto;
  }
  get ancho() {
    return this.#ancho;
  }

  set ancho(nuevoAncho) {
    this.#ancho = nuevoAncho;
  }

  calcularPerimetro() {
    return 2 * (this.#alto + this.#ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}
document.write(`<h5>Rectangulo inical: <h5><br>`);
const rectanguloInicial = new Rectangulo(10, 20);

document.write(`El alto es: ${rectanguloInicial.alto}<br>`);
document.write(`El ancho es: ${rectanguloInicial.ancho}<br>`);

document.write(`El perímetro es: ${rectanguloInicial.calcularPerimetro()}<br>`);
document.write(`El área es: ${rectanguloInicial.calcularArea()}<br><hr>`);

document.write(`<h5>Rectangulo modificado: <h5><br>`);
const nuevoRectangulo = new Rectangulo(15, 25);

document.write(`El alto es: ${nuevoRectangulo.alto}<br>`);
document.write(`El ancho es: ${nuevoRectangulo.ancho}<br>`);

document.write(`El perímetro es: ${nuevoRectangulo.calcularPerimetro()}<br>`);
document.write(`El área es: ${nuevoRectangulo.calcularArea()}<br>`);
