/*Arreglos de productos crear un script (en el repo de conceptos de JS o realizar un nuevo repo) Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:
Mostrar la tabla completa
Filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.
Buscar un producto serum y mostrarlo por pantalla,
Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.*/
let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
  ];
  
  function dibujarTabla(productos) {
    let tabla = "<table><tbody>";
    for (let i = 0; i < productos.length; i++) {
      tabla += `<tr>
          <td>${productos[i].nombreProducto}</td>
          <td>${productos[i].categoria}</td>
          <td>$${productos[i].precio.toFixed(2)}</td>
          </tr>`;
    }
    tabla += "</tbody></table><br>";
    document.write(tabla);
  }
  
  function filtrarProductosPorCategoria(categoria) {
    
    let productosFiltrados = listaProductos.filter(function (producto) {
      return producto.categoria === categoria;
    });
  
    dibujarTabla(productosFiltrados);
  }
  
  function buscarSerum() {
    let serum = listaProductos.find((producto) => producto.categoria === "Sérum");
    if (serum) {
      document.write(
        `El producto "Sérum" es: ${serum.nombreProducto} - ${serum.categoria} - ${serum.precio}<br> `
      );
    } else {
      document.write(`No se encontró ningún producto sérum.<br>`);
    }
  }
  
  function buscarBruma() {
    let bruma = listaProductos.find((producto) =>
      producto.nombreProducto.includes("Bruma")
    );
    if (bruma) {
      document.write(
        `El producto bruma encontrado es: ${bruma.nombreProducto}<br>`
      );
    } else {
      document.write(`No se encontró el producto.<br>`);
    }
  }
  
  dibujarTabla(listaProductos);
  filtrarProductosPorCategoria("Protector solar");
  buscarSerum();
  buscarBruma();