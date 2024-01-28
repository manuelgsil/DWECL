let contenedorNumeros; // Declarar contenedor en el ámbito global
let ejercicio = document.querySelector(".ejercicio");

function generarNumerosAleatorios() {
  let numerosNoRepetidos = new Set(); // <- Set se encarga por si solo de que los valores no sean repetidos
  do {
    let numero = Math.floor(Math.random() * 10);
    numerosNoRepetidos.add(numero);
  } while (numerosNoRepetidos.size < 10);

  let numerosUnicos = Array.from(numerosNoRepetidos); //<-- luego lo convertimos a un array y lo devolvemos
  return numerosUnicos;
}

window.addEventListener("load", function(event) {
    let contenedor = document.createElement("div"); // creamos el contenedor de los numeros
  contenedor.id = "numbers";
  let arrayNumerosAleatorios = generarNumerosAleatorios(); // llamamos a la funcion

  arrayNumerosAleatorios.forEach((element) => {
    // por cada elmento del array creamos otro div dentro del contenedor
    let divNumero = document.createElement("div");
    divNumero.className = "n";
    divNumero.textContent = element;
    contenedor.appendChild(divNumero);
  });
  ejercicio.appendChild(contenedor);
  contenedorNumeros = document.querySelector("#numbers"); // Asignar contenedor después de crearlo

});

/* HAY QUE ESPERAR A QUE EL DOM ESTE CARGADO O SI NO PETARA
            ENCAPSULAMOS */
document.addEventListener("DOMContentLoaded", () => {
    contenedorNumeros = document.querySelector("#numbers"); // Asignar contenedor después de crearlo

  if (contenedorNumeros) {
    contenedorNumeros.addEventListener("click", (e) => {
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
  } else {
    console.log("falló");
  }
});
