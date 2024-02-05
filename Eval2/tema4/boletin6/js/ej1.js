/* 
En una web debe haber un formulario con un input type text.
 Al pulsar un botón,
  se deberá validar lo que hay en el input type text, 
el cual solo podrá contener números.

Si es válido, se mostrará en 
una etiqueta junto al input type text el 
resultado de sumar todos los números que contiene el input. 
Para hacer el ejercicio, crea un método que realice 
lo que se pide y que devuelva la suma o -1 si no se ha validado el input 
(es decir, que contiene algo que no sea un número). */



const formulario = document.querySelector("form");
const input = document.querySelector("input");
const boton = document.querySelector("button");
const resultado = document.querySelector(".resultado");

formulario.addEventListener("click", (e) => {
  let inputValido = parseInt(input.value) != !NaN && parseInt(input.value);
  let clickValidar = e.target.id == "validar";

  if (clickValidar && inputValido) {
    let arrayNumeros = Array.from(input.value)
    let tmp = 0;
    arrayNumeros.forEach(n => {
      tmp = tmp + parseInt(n)
    })
    resultado.textContent = tmp ;

  } else if(clickValidar && !inputValido){
    resultado.textContent = "-1" ;

  }
})


/* SI lo hago por boton, tendria que hacer query select? */


