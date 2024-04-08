/* ELEMENTOS DEL DOM QUE NECESITAMOS */
const oRandom = document.querySelector("#oRandom");
const oCategoria = document.querySelector("#oCategoria");
const oBuscador = document.querySelector("#oBuscador");
const botonesRadio = document.querySelectorAll("input[type='radio']");

const select = document.querySelector("select");
const inputTexto = document.querySelector("#tBuscado");

const URL_RANDOM = "https://api.chucknorris.io/jokes/random";
const URL_SELECT = "https://api.chucknorris.io/jokes/categories";
const URL_CATEGORIAS =
  "https://api.chucknorris.io/jokes/random?category={category}";
const URL_BUSQUEDA = "https://api.chucknorris.io/jokes/search?query={query}";

botonesRadio.forEach((boton, index) => {
  boton.addEventListener("change", (e) => {
    gestionPeticion(e, index);
  });
});

function gestionPeticion(e, index) {
  switch (index) {
    case 0:
      peticion(URL_RANDOM, (respuesta) => {
        oRandom.textContent = respuesta.value;
      });
      break;
    case 1:
      /* Por practicar, solo tenemos las opciones una vez que se escoge este checkbox */
      peticion(URL_SELECT, (respuesta) => {
        respuesta.forEach((opcion) => {
          let DomOpcion = document.createElement("option");
          DomOpcion.setAttribute("value", opcion);
          DomOpcion.textContent = opcion;
          select.appendChild(DomOpcion);
        });
      });
      select.addEventListener("change", chisteCategoria);
      break;
    case 2:
      inputTexto.addEventListener("keydown", handlerBusqueda);

      break;
  }
  if (index != 1) select.removeEventListener("change", chisteCategoria);
  if (index != 2) inputTexto.removeEventListener("keydown", handlerBusqueda);
}
function chisteCategoria() {
  let valorOpcion = select.options[select.selectedIndex].value;
  let xhr = new XMLHttpRequest();
  let respuesta;
  let urlCategorias = URL_CATEGORIAS.replace("{category}", valorOpcion);
  xhr.open("GET", urlCategorias);
  xhr.onload = () => {
    if (xhr.status === 200) {
      respuesta = JSON.parse(xhr.responseText);
      oCategoria.textContent = respuesta.value;
      // ❌ me lio bastante, cuidao con esto
      // 👁️ Si no meto callback, la respuesta tengo que ponerla aqui
    }
  };
  xhr.send();
}
function chisteBusqueda() {
  let textoBuscado = inputTexto.value;
  let xhr = new XMLHttpRequest();
  let respuesta;
  let urlCategorias = URL_BUSQUEDA.replace("{query}", textoBuscado);
  xhr.open("GET", urlCategorias);
  // Esta peticion devuelve un objeto RESULT, al contrario que las otras ya que era una petición única(?)
  //  limitamos la peticion al primer resultado
  xhr.onload = () => {
    if (xhr.status === 200) {
      respuesta = JSON.parse(xhr.responseText);
      if (respuesta.result) oBuscador.textContent = respuesta.result[0].value;
      else alert("Su busqueda no tiene respuesta");
    }
  };
  xhr.send();
}

function peticion(url, callback) {
  let xhr = new XMLHttpRequest();
  let respuesta;
  xhr.open("GET", url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      respuesta = JSON.parse(xhr.responseText);
      callback(respuesta);
    }
  };
  xhr.send();
  return respuesta;
}

function handlerBusqueda(e) {
  if (e.key === "Enter") {
    chisteBusqueda();
  }
}
