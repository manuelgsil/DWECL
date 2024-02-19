document.addEventListener("DOMContentLoaded", examen);
function examen() {
  if (confirm("Aceptas acceder al sitio web?")) {
    let contenedorDivs = document.querySelectorAll("div");
    let arrDivs = Array.from(contenedorDivs);
    arrDivs.forEach((div) => {
      div.addEventListener("click", () => {
        let existeParrafo = document.getElementById("parrafoInformacion")
          ? true
          : false;
        let audio = div.querySelector("audio");
        let estaSonando = audio.play() ? true : false;
        if (!existeParrafo) {
          let parrafoInformacion = document.createElement("p");
          parrafoInformacion.setAttribute("id", "parrafoInformacion");
          let atributoGenero = div.getAttribute("data-genero");
          let atributoFila = div.getAttribute("data-fila");
          let atributoColumna = div.getAttribute("data-columna");
          let enlace = audio.getAttribute("src");
          let enlaceCortado = "https://" + enlace.slice(14, 34);
          let enlacePagina = "seo.html";
          parrafoInformacion.innerHTML = `Se esta reproduciendo una pista de audio del género;
                  ${atributoGenero} </br>
                  Para seguir descubriendo nuevos temas visite:
                  </br> <a href="${enlaceCortado}" target="_blank"> ${enlace}</a>
                  </br> Pulsa aqui para registrar su actividad y mandarla a terceros
                  <a href="${enlacePagina}" target="_blank"> ${enlacePagina}</a>".
                  `;
          audio.play();
          div.appendChild(parrafoInformacion);
          localStorage.setItem("Titulo", atributoGenero);
          localStorage.setItem("fila", atributoFila);
          localStorage.setItem("columna", atributoColumna);
        } else if (estaSonando && existeParrafo) {
          audio.pause();
          div.removeChild(parrafoInformacion);
        }
      });
    });
  }
}
