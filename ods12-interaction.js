/**
 * JavaScript Puro (Vanilla JS) - Interacción ODS 12: Guía de las 3R
 * Tutoría Front-End
 */

// 1. Objeto con la información estructurada para cada pestaña
const info3R = {
  reducir: {
    titulo: "Reducir: Evita el Consumo Innecesario",
    descripcion: "El primer paso es minimizar la cantidad de residuos que generamos en nuestro día a día.",
    pasos: [
      "Lleva tus propias bolsas reutilizables al hacer compras.",
      "Evita productos con empaques plásticos excesivos de un solo uso.",
      "Disminuye el consumo de energía apagando artefactos que no utilices."
    ]
  },
  reutilizar: {
    titulo: "Reutilizar: Dale una Segunda Vida a tus Cosas",
    descripcion: "Antes de desechar un objeto, piensa si puedes usarlo para otro propósito.",
    pasos: [
      "Utiliza frascos de vidrio para almacenar granos o especias.",
      "Convierte ropa usada en trapos de limpieza o bolsas artesanales.",
      "Dona libros, juguetes y muebles en buen estado a quienes los necesiten."
    ]
  },
  reciclar: {
    titulo: "Reciclar: Transforma los Residuos en Recursos",
    descripcion: "Separa adecuadamente los desechos para que puedan ser procesados y reutilizados.",
    pasos: [
      "Separa el plástico, vidrio, papel y cartón en contenedores limpios.",
      "Lava los envases antes de depositarlos en el tacho de reciclaje.",
      "Identifica los puntos limpios de reciclaje más cercanos a tu hogar."
    ]
  }
};

// 2. Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Selección de elementos del DOM por clase e ID
  const botonesTabs = document.querySelectorAll(".tab-btn");
  const tituloElemento = document.getElementById("ods-title");
  const descripcionElemento = document.getElementById("ods-description");
  const listaElemento = document.getElementById("ods-list");

  // Verificar que los elementos existan en la página
  if (!botonesTabs.length || !tituloElemento || !descripcionElemento || !listaElemento) {
    return;
  }

  // 3. Registrar escuchadores de eventos (Event Listeners) en cada botón
  botonesTabs.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      // Obtener el valor del atributo 'data-tab' del botón cliqueado
      const categoria = evento.currentTarget.getAttribute("data-tab");

      // Validar si existe información para la categoría seleccionada
      if (info3R[categoria]) {
        // Actualizar la clase activa en los botones para el feedback visual (CA03)
        botonesTabs.forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });

        evento.currentTarget.classList.add("active");
        evento.currentTarget.setAttribute("aria-selected", "true");

        // Actualizar el contenido en el DOM dinámicamente (CA02)
        const datos = info3R[categoria];
        tituloElemento.textContent = datos.titulo;
        descripcionElemento.textContent = datos.descripcion;

        // Limpiar la lista actual e insertar los nuevos ítems
        listaElemento.innerHTML = "";
        datos.pasos.forEach((paso) => {
          const li = document.createElement("li");
          li.textContent = paso;
          listaElemento.appendChild(li);
        });
      }
    });
  });
});