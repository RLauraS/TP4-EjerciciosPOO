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
// class Contacto {
//   #nombre;
//   #telefono;
//   constructor(nombre, telefono) {
//     this.#nombre = nombre;
//     this.#telefono = telefono;
//   }

//   get nombre() {
//     return this.#nombre;
//   }

//   set nombre(nombre) {
//     this.#nombre = nombre;
//   }

//   get telefono() {
//     return this.#telefono;
//   }

//   set telefono(telefono) {
//     this.#telefono = telefono;
//   }

//   equals(contacto) {
//     return this.#nombre === contacto.nombre;
//   }
// }

// class Agenda {
//   #contactos;
//   #tam;
//   constructor(tam = 10) {
//     this.#contactos = [];
//     this.#tam = tam;
//   }

//   aniadirContacto(contacto) {
//     if (this.#contactos.length === this.#tam) {
//       document.write(
//         `La agenda está llena, no se puede añadir más contactos.<br>`
//       );
//       return;
//     }

//     if (this.existeContacto(contacto)) {
//       document.write(
//         `El contacto ${contacto.nombre} ya existe en la agenda.<br>`
//       );
//       return;
//     }

//     this.#contactos.push(contacto);
//     document.write(
//       `El contacto ${contacto.nombre} ha sido añadido a la agenda.<br>`
//     );
//   }

// //   existeContacto(nombre) {
// //     const contactoEncontrado = this.#contactos.find((c) => c.nombre === nombre);

// //     if (contactoEncontrado) {
// //       document.write(`El teléfono de ${nombre} es ${contactoEncontrado.telefono}`);
// //       return "El contacto existe en la agenda.<br>";
// //     } else {
// //       document.write(`No se encontró ningún contacto con el nombre ${nombre}`);
// //       return "El contacto no existe en la agenda.<br>";
// //     }
// //   }
//   existeContacto(nombre) {
//     const contactoEncontrado = this.#contactos.find((c) => c.nombre === nombre);

//     if (contactoEncontrado) {
//       document.write(`El teléfono de ${nombre} es ${contactoEncontrado.telefono}`);
//       return true;
//     } else {
//       document.write(`No se encontró ningún contacto con el nombre ${nombre}`);
//       return false;
//     }
//   }

//   listarContactos() {
//     document.write("Lista de contactos:<br>");
//     this.#contactos.forEach((c) =>
//       document.write(`- ${c.nombre}: ${c.telefono}<br>`)
//     );
//   }

//   buscarContacto(nombre) {
//     const contacto = this.#contactos.find((c) => c.nombre === nombre);
//     if (contacto) {
//       document.write(`El teléfono de ${nombre} es: ${contacto.telefono}<br>`);
//     } else {
//       document.write(`El contacto ${nombre} no existe en la agenda.<br>`);
//     }
//   }

//   eliminarContacto(contacto) {
//     const index = this.#contactos.findIndex((c) => c.equals(contacto));
//     if (index !== -1) {
//       this.#contactos.splice(index, 1);
//       document.write(
//         `El contacto ${contacto.nombre} ha sido eliminado de la agenda.<br>`
//       );
//     } else {
//       document.write(
//         `El contacto ${contacto.nombre} no existe en la agenda.<br>`
//       );
//     }
//   }

//   agendaLlena() {
//     return this.#contactos.length === this.#tam;
//   }

//   huecosLibres() {
//     return this.#tam - this.#contactos.length;
//   }
// }
// // Crear algunos contactos
// const contacto1 = new Contacto("Juan", "123456789");
// const contacto2 = new Contacto("María", "987654321");
// const contacto3 = new Contacto("Pedro", "456789123");

// // Crear una agenda
// const agenda = new Agenda(3); // Tamaño máximo de 3 contactos

// // Añadir contactos
// agenda.aniadirContacto(contacto1);
// agenda.aniadirContacto(contacto2);
// agenda.aniadirContacto(contacto3); // Esta operación debería fallar porque la agenda ya está llena

// // Verificar si existen contactos
// document.write(agenda.existeContacto(contacto1)); // true
// document.write(agenda.existeContacto(new Contacto("Juan", "000000000"))); // true
// document.write(agenda.existeContacto(contacto3)); // true
// document.write(agenda.existeContacto(new Contacto("Pedro", "111111111"))); // false

// // Listar contactos
// agenda.listarContactos();

// // Buscar un contacto
// agenda.buscarContacto("Juan"); // Debería mostrar "El teléfono de Juan es: 123456789"
// agenda.buscarContacto("Pedro"); // Debería mostrar "El teléfono de Pedro es: 456789123"
// agenda.buscarContacto("Pepe"); // Debería mostrar "El contacto Pepe no existe en la agenda"

// // Eliminar un contacto
// agenda.eliminarContacto(contacto2); // Debería mostrar "Contacto eliminado correctamente"
// agenda.eliminarContacto(new Contacto("Juan", "000000000")); // Debería mostrar "Contacto eliminado correctamente"
// agenda.eliminarContacto(contacto2); // Debería mostrar "El contacto no existe en la agenda"

// // Verificar si la agenda está llena
// document.write(agenda.agendaLlena()); // true

// // Verificar cuántos contactos más podemos ingresar
// document.write(agenda.huecosLibres()); // 0
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

  eliminarContacto(contacto) {
    const indice = this.#contactos.findIndex((c) => c.igualQue(contacto));
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

  switch (opcion) {
    case "1":
      const nombre = prompt("Nombre del contacto:");
      const telefono = prompt("Teléfono del contacto:");
      const contacto = new Contacto(nombre, telefono);
      agenda.aniadirContacto(contacto);
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
      agenda.eliminarContacto(contactoAEliminar);
      break;

    case "5":
      document.write("¡Hasta luego!<br>");
      salir = true; // establecer la condición de salida
      break;
    default:
      document.write("Opción no válida.<br>");
      break;
  }
}
