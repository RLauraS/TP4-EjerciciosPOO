/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apagar();
auto encendido
El auto se apagó
 */
let auto = {
  marca: "Nee-san",
  modelo: "Brum Brum",
  color: "rojo",
  encender: function () {
    document.write(`Se encendió el auto ${this.marca},${this.modelo} 🚗 <br>`);
  },
  apagar: function () {
    document.write(`El auto ${this.marca},${this.modelo} se apagó <br>`);
  },
};
console.log(auto);
auto.encender();
auto.apagar();