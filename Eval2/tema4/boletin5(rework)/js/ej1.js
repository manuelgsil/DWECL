/*  */
let formulario = document.querySelector("form");
let resultado = document.querySelector(".resultado");

formulario.addEventListener("input", (e) => {
  let value = e.target.value; /* Identificamos el valor */
  let esValido = !isNaN(value) && value > 0; /* Comprobamos que sea valido */
  if (esValido) {
    /* SI lo es, creamos un evento click */
    formulario.addEventListener("click", (e) => {
      let clickCorrecto = (e.target.id =
        "calcular"); /* Este evento click, tambien es comprobado con el target.id */
      if (clickCorrecto) {
        let factorial = calcularFactorial(value);
        resultado.textContent = `Factorial(${value}) = ${factorial}`; // <-  aqui leemos el string literal
      }
    });
  }
});

/**
 *  Funcinon para calcular el factorial de un numero
 * @param {int} n numero para el cual se calcula el factorial
 * @returns  un string literal con el factorial y las operaciones realizadas
 */
function calcularFactorial(n) {
  let resultado = 1;
  let operaciones = `1`;

  for (let i = 2; i <= n; i++) {
    resultado *= i;
    operaciones += ` * ${i}`;
  }
  return `${resultado} (Operaciones: ${operaciones})`; // <- Esto devuelve un string literal
}


  // Obtener referencias a los elementos
  const cerrarIcono1 = document.querySelector(".icono2");
  const enunciadoDiv = document.querySelector(".enunciado");

  // Agregar un manejador de clic al span con la clase icono1 // hay q cambiar el X del span pero bueno ya para otro dia
  cerrarIcono1.addEventListener("click", () => {
    // Ocultar el div enunciado
    enunciadoDiv.style.display = enunciadoDiv.style.display === "none" ? "block" : "none";
  });

