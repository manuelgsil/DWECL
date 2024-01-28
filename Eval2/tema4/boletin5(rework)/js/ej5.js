function generarNumerosAleatorios() {
  let numerosNoRepetidos = new Set(); // <- Set se encarga por si solo de que los valores no sean repetidos
  do {
    let numero = Math.floor(Math.random() * 10);
    numerosNoRepetidos.add(numero);
  } while (numerosNoRepetidos.size < 10);

  let numerosUnicos = Array.from(numerosNoRepetidos); //<-- luego lo convertimos a un array y lo devolvemos
  return numerosUnicos;
}
let ejercicio = document.querySelector(".ejercicio");


window.onload = () => {
  let contenedor = document.createElement("div");
  contenedor.id = "numbers";
  let arrayNumerosAleatorios = generarNumerosAleatorios();

  arrayNumerosAleatorios.forEach((element) => {
    let divNumero = document.createElement("div");
    divNumero.className = "n";
    divNumero.textContent = element;
    contenedor.appendChild(divNumero);
  });
  ejercicio.appendChild(contenedor);
};


/* 
otra forma de hacerlo, no entiendo cual es la que se pide.

window.addEventListener("load", function(event) {
  let contenedor = document.createElement("div"); // creamos el contenedor de los numeros
  contenedor.id = "numbers";
  let arrayNumerosAleatorios = generarNumerosAleatorios(); // llamamos a la funcion

  arrayNumerosAleatorios.forEach((element) => {
    // por cada elemento del array creamos otro div dentro del contenedor
    let divNumero = document.createElement("div");
    divNumero.className = "n";
    divNumero.textContent = element;
    contenedor.appendChild(divNumero);
  });
  ejercicio.appendChild(contenedor);
  contenedorNumeros = document.querySelector("#numbers"); // Asignar contenedor después de crearlo
});

*/