/* Al hacerlo on click no puedo declarar globales ! */
function insertarSaludo() {
  const parrafoNombre = document.getElementsByClassName("personal-greeting")[0];
  const nombreUsuario = document.getElementById("entername").value;
  localStorage.setItem("usuario", nombreUsuario);
  nombreDB = localStorage.getItem("usuario"); /* Es redundante, pero lo he puesto para tenerlo en cuenta */
  parrafoNombre.innerHTML = "Welcome to our website, " + nombreDB + ".";
}

function borrarUsuario() {
  localStorage.removeItem("usuario");
  
}

function comprobarNombre() {
  const parrafoNombre = document.getElementsByClassName("personal-greeting")[0];
  let nombreUsuario = localStorage.getItem("usuario");
  if (nombreUsuario != null) {
    const h1 = document.querySelector("h1");
    h1.innerHTML = "Welcome, " + nombreUsuario;
    parrafoNombre.innerHTML = "Welcome to our website, " + nombreUsuario;
  }
}