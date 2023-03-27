/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */
class Producto {
    #codigo;
    #nombre;
    #precio;
    constructor(codigo, nombre, precio) {
      this.#codigo = codigo;
      this.#nombre = nombre;
      this.#precio = precio;
    }
  
    get codigo() {
      return this.#codigo;
    }
  
    set codigo(codigo) {
      this.#codigo = codigo;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    set nombre(nombre) {
      this.#nombre = nombre;
    }
  
    get precio() {
      return this.#precio;
    }
  
    set precio(precio) {
      this.#precio = precio;
    }
  
    imprimeDatos() {
      document.write(`<p>Código: ${this.#codigo}, Nombre: ${this.#nombre}, Precio: $${this.#precio}</p><br>`);
    }
  }
  
  const producto1 = new Producto(1, 'Albúm The Gazette - Ninth ', 17869.50);
  const producto2 = new Producto(2, 'Llavero Kai - Mass', 4405.70);
  const producto3 = new Producto(3, 'Remera oficial Last mile tee', 7867.33);
  
  const productos = [producto1, producto2, producto3];

  productos.forEach(producto => {
    producto.imprimeDatos();
  });
  