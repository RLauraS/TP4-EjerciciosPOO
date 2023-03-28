/*Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :
crear un script (en el repo de conceptos de JS o realizar un nuevo repo) con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.
 */

function turnoPC() {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
  }
  
  function jugar(usuario, pc) {
    if (usuario === pc) {
      return "empate";
    } else if (
      (usuario === "piedra" && pc === "tijera") ||
      (usuario === "papel" && pc === "piedra") ||
      (usuario === "tijera" && pc === "papel")
    ) {
      return "ganaste";
    } else {
      return "perdiste";
    }
  }
  
  function jugarOtraVez() {
    do {
      let usuario;
      do {
        usuario = prompt("Ingrese su movimiento: piedra, papel o tijera").toLowerCase();
        if (!["piedra", "papel", "tijera"].includes(usuario)) {
          alert("Opción no válida. Por favor, ingrese piedra, papel o tijera.");
        }
      } while (!["piedra", "papel", "tijera"].includes(usuario));
  
      const pc = turnoPC();
      const resultado = jugar(usuario, pc);
      alert(`PC eligió ${pc}. ${resultado}`);
    } while (confirm("¿Quieres jugar otra vez?"));
  }
  
  // Iniciar el juego
  jugarOtraVez();
  