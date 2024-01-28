let contenedorNumeros = document.querySelector("#numbers");

contenedorNumeros.addEventListener("click", (e) => {
/**
 * La función window.open() se utiliza para abrir una nueva ventana o pestaña del navegador.
 * Su sintaxis básica es la siguiente:
 *
 * @param {string} url - La URL de la página que se abrirá en la nueva ventana o pestaña.
 * Puede ser una URL absoluta, relativa o un string vacío ("") para abrir una ventana en blanco.
 * 
 * @param {string} name - Un nombre único para la ventana.
 * Si proporcionas el mismo nombre, se reutilizará la ventana existente con ese nombre.
 * Si es un string vacío, se abrirá una nueva ventana cada vez.
 * 
 * @param {string} features - Una cadena que especifica las características de la ventana, 
 * como su tamaño, posición, etc. Puede contener varias opciones separadas por comas.
 * 
 * @param {boolean} replace - Un booleano que indica si la nueva página debe reemplazar la página actual
 * en la historia del navegador. Si es true, reemplazará la página actual;
 * si es false o no se proporciona, se abrirá en una nueva pestaña o ventana.
 */

  let esUnNumero = e.target != contenedorNumeros;
  if (esUnNumero) {
    let contenido = e.target.textContent;
    let nuevaVentana = window.open(
      "",
      "reutilizar",
      "width=300px,height=300px"
    );
    nuevaVentana.document.write(`<p> Numero: ${contenido}</p>`);
  }
});
