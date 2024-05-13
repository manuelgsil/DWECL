const URL_RANDOM = "https://api.chucknorris.io/jokes/random";
const URL_SELECT_CATEGORIAS = "https://api.chucknorris.io/jokes/categories";
const URL_CHISTE_CATEGORIA =
  "https://api.chucknorris.io/jokes/random?category={category}";
const URL_CHISTE_BUSQUEDA =
  "https://api.chucknorris.io/jokes/search?query={query}";

const outputRandom = document.querySelector("#oRandom");
const outputCategoria = document.querySelector("#oCategoria");
const outputBusqueda = document.querySelector("#oBuscador");

const selectCategorias = document.querySelector("select");

document.addEventListener("DOMContentLoaded", () => {
  const botonesRadio = document.querySelectorAll("input[type='radio']");
  botonesRadio.forEach((boton, indice) => {
    boton.addEventListener("change", () => {
      eleccion(indice);
    });
  });
  cargarSelect();
});

// En este caso, tenemos que crear todas las funciones asincronas ya que todo esta dependiendo de la respuesta del servidor
async function eleccion(indice) {
  switch (indice) {
    case 0:
      outputRandom.textContent = await peticion(URL_RANDOM);
      break;

    case 2:
      break;
  }
}
async function peticion(url = "", urlAuxiliar = "") {
  let chiste = "";
  if (urlAuxiliar == "") {
    let respuesta = await fetch(url);
    if (respuesta.ok) {
      chiste = await respuesta.json();
    }
  } else {
    // Encuentra la posición de las llaves
    let inicioLlaves = urlAuxiliar.indexOf("{");
    let finLlaves = urlAuxiliar.indexOf("}");
    let opcionSeleccionada =
      selectCategorias.options[selectCategorias.selectedIndex];

    let urlParametro =
      urlAuxiliar.substring(0, inicioLlaves + 1) +
      opcionSeleccionada.getAttribute("id") +
      urlAuxiliar.substring(finLlaves);
    let respuestaCategoriaSeleccionada = await fetch(urlParametro);
    chiste = await respuestaCategoriaSeleccionada.json();
  }
  // 👁️ al devolver un objeto hay que indicarle el atributo que queremos
  return chiste.value;
}

async function cargarSelect() {
  let respuestaCategorias = await fetch(URL_SELECT_CATEGORIAS);
  let categorias = await respuestaCategorias.json();
  categorias.forEach((categoria) => {
    let opcionCategoria = document.createElement("option");
    opcionCategoria.textContent = categoria;
    opcionCategoria.setAttribute("id", categoria);
    selectCategorias.appendChild(opcionCategoria);
  });

  selectCategorias.addEventListener("change",  () => {
    peticion("", URL_CHISTE_CATEGORIA);
  });
}

