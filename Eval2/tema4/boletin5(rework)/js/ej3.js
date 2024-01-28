let contenedorCuadrados = document.querySelector("#flex-containerRow");

contenedorCuadrados.addEventListener("click", (e) => {
 /**                    ⚠️⚠️⚠️⚠️
  * He querido usar THIS en  la variable estilo y sucede lo siguiente 📓
  * 
  *  La variable this en el contexto de la función de flecha 
  * (e) => {...} no se refiere al elemento que desencadenó el evento.
  *  En las funciones de flecha, this mantiene el valor
  *  del contexto en el que se creó la función de flecha, 
  * que en este caso no es el elemento que fue clicado.
  * 
  * tenemos que seguir con  ❗ e.target ❗  
  *  
  */
 
    let esUnCuadrado = e.target != contenedorCuadrados;
  if (esUnCuadrado) {
    let estilo = window.getComputedStyle(e.target); /* Hay que pasarle referencia */
    let colorCuadrado = estilo.backgroundColor;
    document.body.style.backgroundColor = colorCuadrado;
  }
});
