/*Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  get telefono() {
    return this.#telefono;
  }

  set telefono(telefono) {
    this.#telefono = telefono;
  }

  igualQue(contacto) {
    return this === contacto;
  }
}

class Agenda {
  #contactos;
  #tamaño;
  constructor(tamaño = 10) {
    this.#contactos = [];
    this.#tamaño = tamaño;
  }

  aniadirContacto(contacto) {
    if (this.#contactos.length === this.#tamaño) {
      document.write("La agenda está llena, no se puede añadir más contactos.<br>");
      return;
    }

    if (this.existeContacto(contacto)) {
      document.write("El contacto ya existe en la agenda.<br>");
      return;
    }

    this.#contactos.push(contacto);
    document.write(`El contacto ${contacto.nombre} ha sido añadido a la agenda.<br>`);
    this.listarContactos();
  }


  existeContacto(contacto) {
    return this.#contactos.some((c) => c.igualQue(contacto));
  }

  listarContactos() {
    document.write("Agenda de contactos:<br>");
    this.#contactos.forEach((c) => document.write(`${c.nombre}: ${c.telefono}<br>`));
  }

  buscarContacto(nombre) {
    const contacto = this.#contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      document.write(`Teléfono de ${contacto.nombre}: ${contacto.telefono}<br>`);
    } else {
      document.write(`El contacto ${nombre} no existe en la agenda.<br>`);
    }
  }

  eliminarContacto(nombre) {
    const indice = this.#contactos.findIndex((c) => c.nombre === nombre);
    if (indice === -1) {
      document.write("El contacto no existe en la agenda.<br>");
      return false;
    }

    this.#contactos.splice(indice, 1);
    document.write("El contacto ha sido eliminado de la agenda.<br>");
    return true;
}

  get contactos() {
    return this.#contactos;
  }

  get tamaño() {
    return this.#tamaño;
  }

  agendaLlena() {
    return this.#contactos.length === this.#tamaño;
  }

  huecosLibres() {
    return this.#tamaño - this.#contactos.length;
  }
}

// Ejemplo de uso:
const agenda = new Agenda();

let salir = false;

while (!salir) {
  const opcion = prompt(`Seleccione una opción:
  1. Añadir contacto
  2. Buscar contacto
  3. Listar contactos
  4. Eliminar contacto
  5. Salir`);
  
  if (opcion === null || opcion === "5") {
    document.write("¡Hasta luego!<br>");
    salir = true; // establecer la condición de salida
    break;
  }else {
    switch (opcion) {
      case "1":
        const nombre = prompt("Nombre del contacto:");
        const telefono = prompt("Teléfono del contacto:");
        const contacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(contacto);
        //listarContactos();
        break;

      case "2":
        const nombreABuscar = prompt("Nombre del contacto a buscar:");
        agenda.buscarContacto(nombreABuscar);
        break;

      case "3":
        agenda.listarContactos();
        break;

      case "4":
        const nombreAEliminar = prompt("Nombre del contacto a eliminar:");
        const contactoAEliminar = new Contacto(nombreAEliminar, "");
        agenda.eliminarContacto(nombreAEliminar);
        break;

      default:
        document.write("Opción no válida.<br>");
        break;
    }
  }
}
