/* URLS */
const URL_USUARIOS = "https://jsonplaceholder.typicode.com/users";
const URL_POST = "https://jsonplaceholder.typicode.com/posts";
const URL_COMENTARIOS = "https://jsonplaceholder.typicode.com/posts/1/comments";
const URL_MODIFICAR = "https://jsonplaceholder.typicode.com/posts/1";

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
    set.add(usuario);
  });
  return set;
}

function addOpcionesSelect(set) {
  set.forEach((element) => {
    let DomOpcion = document.createElement("option");
    DomOpcion.setAttribute("value", element.id);
    DomOpcion.textContent = element.name;
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
  peticion(URL_POST, (usuarios) => {
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

    let cardBodyDiv = document.createElement("div");

    let titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = publicacion.title;

    let idUser = document.createElement("h6");
    idUser.textContent = "UserID: " + publicacion.userId; // Corrección aquí

    let contenido = document.createElement("p");
    contenido.className = "card-text";
    contenido.textContent = publicacion.body;

    const botonModificar = document.createElement("button");
    botonModificar.textContent = "Modificar";
    botonModificar.classList.add("btn", "btn-primary", "p-1", "btn-sm", "m-1");
    botonModificar.setAttribute("id", publicacion.id);
    botonModificar.addEventListener("click", modificarPost);

    const botonComentarios = document.createElement("button");
    botonComentarios.textContent = "Comentarios";
    botonComentarios.setAttribute("id", publicacion.id);
    botonComentarios.classList.add("btn", "btn-info", "p-1", "btn-sm", "m-1");
    botonComentarios.addEventListener("click", mostrarInfo);

    cardBodyDiv.appendChild(titulo);
    cardBodyDiv.appendChild(idUser);
    cardBodyDiv.appendChild(contenido);
    cardBodyDiv.appendChild(botonModificar);
    cardBodyDiv.appendChild(botonComentarios);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);

    document.getElementById("publicacionesContainer").appendChild(colDiv);
  });
}
formularioModificacion()
function formularioModificacion() {
  let formulario = document.createElement("form")
  formulario.classList.add("form-control");
  let inputUserId = document.createElement("input");
  let inputPostId = document.createElement("input");
  let inputTitle = document.createElement("input");
  let inputBody = document.createElement("input");
  formulario.appendChild(inputUserId);
  formulario.appendChild(inputPostId);
  formulario.appendChild(inputTitle);
  formulario.appendChild(inputBody);
  document.body.appendChild(formulario);
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
    cardBody.dataset.postId = comentario.postId;

    /* Introducimos el addEventListener */
    /*     cardBody.addEventListener("click", modificar);
     */
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

function modificarPost(e) {
  let idPost = e.currentTarget.id;
  peticionPUT(URL_MODIFICAR, idPost)
}

function peticionPUT(url, postId) {
  const formulario = document.querySelector("form");
  const body = JSON.stringify({
    userId: formulario[0].value,
    id: formulario[1].value,
    title: formulario[2].value,
    body: formulario[3].value,
  })

  let urlComentario = url.replace("1", postId);

  let xhr = new XMLHttpRequest();

  xhr.open("PUT", urlComentario);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(body);

  xhr.onload = () => {
    if (xhr.status == "200") {
      console.log(JSON.parse(xhr.responseText));
    }
  };

}

function crearComentario() {
  const boton = document.createElement("button");
  boton.textContent = "Modificar";

}
/* d. Se ofrezca al usuario la posibilidad de editar, tanto los post como los
comentarios. Una vez editados, se mostrará el elemento modificado en cada
caso.
 */