function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); /* exdays es el valor de caducidad de la cookie */
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* Creamos una funcion que nos permita traer una cookie */

// devuelve la cookie con el nombre dado,
// o undefined si no la encuentra
function readCookie(name) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

setCookie("contraseña", "123", 1);

function comprobarPassword(contraseñaUsuario) {
    return contraseñaUsuario == readCookie("contraseña"); // devuelve true o false
}

function login() {
    /* Recojo la informacion del usuario */
    let nombreUsuario = document.getElementById("usuario").value;
    setCookie("nombreUsuario", nombreUsuario, 1);
    let contraseñaUsuario = document.getElementById("contraseña").value;
    const CONTRASEÑA_CORRECTA = comprobarPassword(contraseñaUsuario);
    if (CONTRASEÑA_CORRECTA) {
        /* Crear un id sesion */
        let numeroRandom = Math.ceil(Math.random() * 10);
        setCookie("idSesion", numeroRandom, 1);
        /* Modo claro-oscuro */
        const preferencias = prompt("¿Quiere modo oscuro? y/n");
        preferencias.toLowerCase;
        if (preferencias === "y")
            setCookie("preferencias", "black", 1);
        else { setCookie("preferencias", "white", 1); }
        window.location.href = "enviar.html";
    }
    else{
        window.location.href="#"
    }
}


function activarPreferencias() {
    let nombreUsuario = readCookie("nombreUsuario");
    let preferencias = readCookie("preferencias");
    let encabezado = document.body.querySelector("h2");
    encabezado.textContent = nombreUsuario;
    document.body.style.backgroundColor = preferencias;
    /* document.body.style.color = "white"; */
    /* Queda por controlar el white */
}