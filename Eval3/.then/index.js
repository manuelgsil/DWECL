const URL_USUARIOS = "https://jsonplaceholder.typicode.com/users";
const URL_POST_USER = "https://jsonplaceholder.typicode.com/posts?userId="; //hay que añadir el id al final
const URL_POSTS = "https://jsonplaceholder.typicode.com/posts/";
const URL_COMENTARIOS = "https://jsonplaceholder.typicode.com/posts/ /comments";

/* HTML  */
const select = document.querySelector("#sUsuario");
const encabezadoUsuario = document.querySelector("#nombreUsuario");
const containerPost = document.querySelector("#containerPost");
const containerComentarios = document.querySelector("#containerComentarios");
const myModal = new bootstrap.Modal(document.getElementById("modalId"));

cargarSelect();
function cargarSelect() {
  fetch(URL_USUARIOS)
    .then((usuarios) => usuarios.json()) // primero convertimos la peticion a json
    .then((datosUsuarios) => {
      // con el return, ya tenemos los datos de los usuarios de ese mismo json
      datosUsuarios.forEach((usuario) => {
        let opcionSelect = document.createElement("option");
        opcionSelect.textContent = usuario.name;
        opcionSelect.value = usuario.id;
        opcionSelect.addEventListener("change", postsUsuario);
        select.appendChild(opcionSelect);
      });
    });
  // tengo que poner el select despues de la peticion, para que de tiempo
  // a que se cree
  select.addEventListener("change", postsUsuario);
}

function postsUsuario() {
  containerPost.textContent = "";
  let idUsuario = select.options[select.selectedIndex].value;
  let nombreUsuario = select.options[select.selectedIndex].textContent;

  fetch(URL_POST_USER + idUsuario)
    .then((posts) => posts.json())
    .then((postsUsuario) => {
      postsUsuario.forEach((post) => {
        // ELEMENTOS
        let carta = document.createElement("div");
        let cuerpo = document.createElement("div");
        let titulo = document.createElement("h4");
        let autor = document.createElement("p");
        let texto = document.createElement("p");
        let botonModificar = document.createElement("button");
        let botonComentarios = document.createElement("button");

        // asignamos el el id del post al botonComentarios
        botonComentarios.setAttribute("value", post.id);
        botonModificar.setAttribute("value", post.id);

        // CLASES BS5
        carta.classList.add("card", "text-start");
        cuerpo.classList.add("card-body");
        titulo.classList.add("card-title");
        autor.classList.add("card-text", "text-muted");
        texto.classList.add("card-text");

        // Crear modal
        botonModificar.classList.add("btn", "btn-primary", "me-2");
        botonModificar.setAttribute("data-bs-toggle", "modal");
        botonModificar.setAttribute("data-bs-target", "#modalId");

        botonComentarios.classList.add("btn", "btn-info");

        //ASIGNAMOS EVENTOS
        botonModificar.addEventListener("click", abrirModal);
        botonComentarios.addEventListener("click", mostrarComentarios);

        // CONTENIDO
        titulo.textContent = post.title;
        autor.textContent = `Escrito por: ${nombreUsuario}`;
        texto.textContent = post.body;
        botonModificar.textContent = "Modificar";
        botonComentarios.textContent = "Mostrar Comentarios";

        // APENDIZAR
        cuerpo.appendChild(titulo);
        cuerpo.appendChild(autor);
        cuerpo.appendChild(texto);
        cuerpo.appendChild(botonModificar);
        cuerpo.appendChild(botonComentarios);
        carta.appendChild(cuerpo);

        // Y MAS APENDIZAR
        containerPost.appendChild(carta);
      });
    });
}

function mostrarComentarios() {
  let url_especifica = URL_COMENTARIOS.replace(" ", this.value);
  containerComentarios.textContent = "";

  console.log(url_especifica);
  fetch(url_especifica)
    .then((comentarios) => comentarios.json())
    .then((infoComentarios) => {
      infoComentarios.forEach((comentario) => {
        // Crear elementos para representar cada comentario
        let comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("card", "mb-3");
        let comentarioBody = document.createElement("div");
        comentarioBody.classList.add("card-body");

        // Título del comentario (nombre del autor)
        let tituloComentario = document.createElement("h5");
        tituloComentario.classList.add("card-title");
        tituloComentario.textContent = comentario.name;

        // Email del autor
        let emailAutor = document.createElement("p");
        emailAutor.classList.add("card-text");
        emailAutor.textContent = comentario.email;

        // Texto del comentario
        let comentarioTexto = document.createElement("p");
        comentarioTexto.classList.add("card-text");
        comentarioTexto.textContent = comentario.body;

        // Agregar los elementos al cuerpo del comentario
        comentarioBody.appendChild(tituloComentario);
        comentarioBody.appendChild(emailAutor);
        comentarioBody.appendChild(comentarioTexto);

        // Agregar el cuerpo del comentario al div del comentario
        comentarioDiv.appendChild(comentarioBody);

        // Agregar el comentario al contenedor de comentarios
        containerComentarios.appendChild(comentarioDiv);
      });
    });
}

function abrirModal(e) {
  myModal.show();
  let enviar = document.querySelector("#enviar");
  let postId = e.currentTarget.getAttribute("value");
  enviar.setAttribute("value", postId);
  enviar.addEventListener("click", modificarPost);
}

function modificarPost(e) {
  let postId = e.currentTarget.getAttribute("value");
  let inputTexto = document.querySelector("#texto");
  let url_especifica = URL_POSTS + postId;

  if (inputTexto.value.trim() != "") {
    fetch(url_especifica, {
      method: "PUT",
      body: JSON.stringify({
        body: inputTexto.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    alert("Cambio efectuado");
    myModal.hide();
  } else {
    alert("El input de texto está vacío");
  }
}
