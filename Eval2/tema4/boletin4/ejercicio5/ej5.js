
// primero creamos la contraseña en el localStorage
localStorage.setItem("password", "123");

function login() {
    let nombreUsuario = document.getElementById("usuario").value;
    sessionStorage.setItem("usuarioSesion", nombreUsuario);
    let contraseñaUsuario = document.getElementById("contraseña").value;
    let contraseña_correcta = contraseñaUsuario == localStorage.getItem("password");
    if (contraseña_correcta) {
        let numeroRandom = Math.ceil(Math.random() * 10);
        sessionStorage.setItem("ID_SESSION", numeroRandom);
        const preferencias = prompt("¿Quiere modo oscuro? y/n");
        preferencias.toLowerCase;
        if (preferencias === "y")
            sessionStorage.setItem("preferencias", "black");
        else {
            sessionStorage.setItem("preferencias", "white");
        }
        window.location.href = "enviar.html";
    } else {
        window.location.href = "#"

    }
}


function activarPreferencias() {
    let nombreUsuario = sessionStorage.getItem("usuarioSesion");
    let preferencias = sessionStorage.getItem("preferencias");
    let encabezado = document.body.querySelector("h2");
    encabezado.textContent = nombreUsuario;
    document.body.style.backgroundColor = preferencias;
    if (document.body.style.backgroundColor == "black") {
        document.body.style.color = "white";
    }

}
