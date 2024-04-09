/* URLS */
const URL_USUARIOS = "https://jsonplaceholder.typicode.com/posts";
const URL_COMENTARIOS = "https://jsonplaceholder.typicode.com/posts/1/comments";

/* PARTES DEL HTML */
const containerComentarios = document.createElement("div");
containerComentarios.classList.add("container", "mt-4", "comentarios");
document.body.appendChild(containerComentarios);

const select = document.createElement("select");
select.classList.add("form-select", "form-select-lg", "mb-3");

const opcionPredeterminada = document.createElement("option");
opcionPredeterminada.textContent = "Selecciona una opción";
opcionPredeterminada.value = "";
select.appendChild(opcionPredeterminada);

const containerDiv = document.createElement("div");
containerDiv.className = "container mt-5";

const publicacionesContainerDiv = document.createElement("div");
publicacionesContainerDiv.id = "publicacionesContainer";
publicacionesContainerDiv.className = "row";
containerDiv.appendChild(publicacionesContainerDiv);
document.body.appendChild(containerDiv);
/* FIN PARTES HTML */

crearSelect();
select.addEventListener("change", mostrar);

function crearSelect() {
  peticion(URL_USUARIOS, (usuarios) => {
    let usuariosID = filtarUsuarios(usuarios);
    addOpcionesSelect(usuariosID);
  });
}

function peticion(url, callback) {
  let xhr = new XMLHttpRequest();
  let respuesta;
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status == "200") {
      respuesta = JSON.parse(xhr.responseText);
      callback(respuesta);
    }
    return respuesta;
  };
}

function filtarUsuarios(arr) {
  let set = new Set();
  arr.forEach((usuario) => {
    set.add(usuario.userId);
  });
  return set;
}

function addOpcionesSelect(set) {
  set.forEach((id) => {
    let DomOpcion = document.createElement("option");
    DomOpcion.setAttribute("value", id);
    DomOpcion.textContent = id;
    select.appendChild(DomOpcion);
    document.body.appendChild(select);
  });
}

function mostrar() {
  containerComentarios.innerHTML = "";

  let idUsuario = select.options[select.selectedIndex].value;
  listarPublicaciones(idUsuario, (publicaciones) => {
    crearHTMLpublicacion(publicaciones);
  });
}

function listarPublicaciones(idUser, callback) {
  peticion(URL_USUARIOS, (usuarios) => {
    let arrUsuario = usuarios.filter((item) => item.userId == idUser);
    callback(arrUsuario);
  });
}

function crearHTMLpublicacion(publicaciones) {
  publicacionesContainerDiv.innerHTML = "";

  publicaciones.forEach((publicacion) => {
    let colDiv = document.createElement("div");
    colDiv.className = "col-md-6 col-lg-4 mb-4";

    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.setAttribute("id", publicacion.id);

    let cardBodyDiv = document.createElement("div");

    let titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = publicacion.title;

    let idUser = document.createElement("h6");
    idUser.textContent = "UserID: " + publicacion.userId; // Corrección aquí

    let contenido = document.createElement("p");
    contenido.className = "card-text";
    contenido.textContent = publicacion.body;

    cardBodyDiv.appendChild(titulo);
    cardBodyDiv.appendChild(idUser);
    cardBodyDiv.appendChild(contenido);

    cardDiv.appendChild(cardBodyDiv);
    cardDiv.addEventListener("click", mostrarInfo);
    colDiv.appendChild(cardDiv);

    document.getElementById("publicacionesContainer").appendChild(colDiv);
  });
}

function mostrarInfo(e) {
  let idPublicacion = e.currentTarget.id;
  peticionComentarios(URL_COMENTARIOS, idPublicacion, (callback) => {
    mostrarComentarios(callback);
  });
}

function mostrarComentarios(comentarios) {
  containerComentarios.innerHTML = "";
  comentarios.forEach((comentario) => {
    const card = document.createElement("div");
    card.classList.add("card", "my-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const header = document.createElement("h5");
    header.classList.add("card-title");
    header.textContent = comentario.name;

    const email = document.createElement("p");
    email.classList.add("card-text");
    email.textContent = `Email: ${comentario.email}`;

    const body = document.createElement("p");
    body.classList.add("card-text");
    body.textContent = comentario.body;

    cardBody.appendChild(header);
    cardBody.appendChild(email);
    cardBody.appendChild(body);

    containerComentarios.appendChild(cardBody);
  });
}

function peticionComentarios(url, idComentario, callback) {
  let xhr = new XMLHttpRequest();
  let respuesta;
  let urlComentario = url.replace("1", idComentario);
  xhr.open("GET", urlComentario);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status == "200") {
      respuesta = JSON.parse(xhr.responseText);
      callback(respuesta);
    }
    return respuesta;
  };
}

function editarComentario() {}
