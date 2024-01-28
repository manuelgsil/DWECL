let contenedor = document.querySelector("#contenedor");
let resultado = document.querySelector(".resultado");
contenedor.addEventListener("click", (e) => {
  let esDivSumar = e.target.id === "contenedor-suma";
  let esDivRestar = e.target.id === "contenedor-resta";
  let numero1Value = parseInt(document.getElementById("numero1").value);
  let numero2Value = parseInt(document.getElementById("numero2").value);
  
  // esto ultimo es por si damos en el div vacio y sale NAN
  let sumarValido= esDivSumar && !isNaN(numero1Value) && !isNaN(numero2Value) ; 
  let restarValido= esDivRestar && !isNaN(numero1Value) && !isNaN(numero2Value) ; 
  
  /**
   * 👁️ Este codigo funciona perfectamente, usa el && como atajo. 👁️
   *   Si la condicion es verdadera, se ejecuta lo que sigue a los ampersan.
   */
  // esDivSumar && (resultado.textContent = numero1Value + numero2Value);
  // esDivRestar && (resultado.textContent = numero1Value - numero2Value)

  // Nuestro primer planteamiento era este -->
  if (sumarValido) {
    resultado.textContent = numero1Value + numero2Value;
  } else if (restarValido) {
    resultado.textContent = numero1Value - numero2Value;
  }
});
