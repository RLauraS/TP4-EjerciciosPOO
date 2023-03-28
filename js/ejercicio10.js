/*crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
 */
class Aeropuerto {
  #nombreAeropuerto;
  #listaAviones;
  constructor(nombreAeropuerto) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.#listaAviones = [];
  }

  agregarAvion(avion) {
    this.#listaAviones.push(avion);
  }

  buscarAvion(nombreAvion) {
    const avionEncontrado = this.#listaAviones.find(
      (avion) => avion.nombre === nombreAvion
    );
    if (avionEncontrado) {
      document.write(`Información del avión ${avionEncontrado.nombre}:<br>`);
      document.write(`Capacidad: ${avionEncontrado.capacidad}<br>`);
      document.write(`Destino: ${avionEncontrado.destino}<br>`);
      if (avionEncontrado.listaPasajeros.length > 0) {
        document.write(
          `Lista de pasajeros: ${avionEncontrado.listaPasajeros.join(
            ", "
          )}<br><hr>`
        );
      } else {
        document.write(`La lista de pasajeros está vacía.<br><hr>`);
      }
    } else {
      document.write(
        `El avión ${nombreAvion} no se encuentra en el aeropuerto.<br>`
      );
    }
  }

  mostrarAeropuerto() {
    document.write(`Aeropuerto: ${this.#nombreAeropuerto}<br>`);
    document.write(`Cantidad de aviones: ${this.#listaAviones.length}<br>`);
  }
}

class Avion {
  #nombre;
  #capacidad;
  #destino;
  #listaPasajeros;
  constructor(nombre, capacidad, destino) {
    this.#nombre = nombre;
    this.#capacidad = capacidad;
    this.#destino = destino;
    this.#listaPasajeros = [];
  }

  abordar(pasajero) {
    if (this.#listaPasajeros.length < this.#capacidad) {
      this.#listaPasajeros.push(pasajero);
      document.write(
        `El pasajero ${pasajero} abordó el avión ${this.#nombre}.<br>`
      );
    } else {
      document.write(
        `El avión ${this.#nombre} está lleno, no es posible abordar.<br>`
      );
    }
  }

  get nombre() {
    return this.#nombre;
  }

  get capacidad() {
    return this.#capacidad;
  }

  get destino() {
    return this.#destino;
  }

  get listaPasajeros() {
    return this.#listaPasajeros;
  }
}

const aeropuertoInternacional = new Aeropuerto(
  "Aeropuerto Internacional Lio Messi"
);

const avion1 = new Avion("Vuelo 1", 50, "Camelot");
const avion2 = new Avion("Vuelo 2", 3, "Wakanda");
const avion3 = new Avion("Vuelo 3", 60, "Konoha");

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

aeropuertoInternacional;

avion2.abordar("Batman");
avion2.abordar("Superman");
avion2.abordar("Wonder Woman");
avion2.abordar("Flash");
aeropuertoInternacional.buscarAvion("Vuelo 2");

aeropuertoInternacional.buscarAvion("Vuelo 1");

aeropuertoInternacional.buscarAvion("Vuelo 3");

aeropuertoInternacional.buscarAvion("Vuelo 1");
aeropuertoInternacional.buscarAvion("Vuelo 4");
