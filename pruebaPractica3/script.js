
function examen() {
    let contenedorDivs = document.getElementsByTagName("div");
    const audio = document.getElementsByTagName("audio");
    // queda pendiente controlar el tema de que no se pueda reproducir 2 a la vez

    if (confirm("Aceptas acceder al sitio web?",)) {
        for (let index = 0; index < contenedorDivs.length; index++) {
            const div = contenedorDivs[index];
            div.addEventListener("click", (e) => {
                let haPulsado = e.currentTarget;
                if (haPulsado) {
                    let parrafoInformacion = document.createElement("p");
                    let audio = document.getElementsByTagName("audio");
                    let atributoGenero = div.getAttribute("data-genero");
                    let atributoFila = div.getAttribute("data-fila");
                    let atributoColumna = div.getAttribute("data-columna");
                    let enlace = audio[index].getAttribute("src")

                    let enlaceCortado = "https://" + enlace.slice(14, 34);
                    let enlacePagina = "seo.html";
                    parrafoInformacion.innerHTML =
                        `Se esta reproduciendo una pista de audio del género;
                    ${atributoGenero} </br>
                    Para seguir descubriendo nuevos temas visite:
                    </br> <a href="${enlaceCortado}" target="_blank"> ${enlace}</a>
                    </br> Pulsa aqui para registrar su actividad y mandarla a terceros
                    <a href="${enlacePagina}" target="_blank"> ${enlacePagina}</a>".
                    `;
                    audio[index].play();
                    div.appendChild(parrafoInformacion);

                    localStorage.setItem("Titulo", atributoGenero);
                    localStorage.setItem("fila", atributoFila);
                    localStorage.setItem("columna", atributoColumna);


                }

            })
        }
    }

}

examen();
// tengo que darle la funcionalidad a los contenedores de audio


