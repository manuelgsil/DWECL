/*  Creamos las constantes */
const DETECTAR_ACENTOS = /[áÁéÉíÍóÓúÚ]/ //asi no necesito instanciar + corto
const DETECTAR_SIMBOLOS = /[!\"#$%&'()*+.\-\/:;<=>?@[\\\]^_`{|}~]/;
const LONGITUD_MINIMA_CONTRASEÑA = 7; // Como usamos la propiedad lenght de los STRINGS hay que recordar que el conteo siempre empieza en 0
const DETECTAR_ENIES = /[ñÑ]/;
const TIENE_NUMERO = /[\d]/;

/* Primero creamos los prompt para pedir los datos */
let sNombre = prompt("Introduzca su nombre");
let sApellido1 = prompt("Introduzca su primer apellido");
let sApellido2 = prompt("Introduzca su segundo apellido");
let sDni = prompt("Introduzca su dni");
let blockText = alert(`La contraseña debecumplir las siguientes condiciones:
- Tener al menos una longitud de 8 caracteres
-Contener al menos una letra, un número  y un signo de puntuación o un símbolo
-Los simbolos aceptados son ((((( ! " # $ % & ' () *+.-_<=>?[]^{}  ))))
- Las letras acentuadas no estan permitidas y las eñes no estan admitidas.
- No ser similar al nombre de usuario
- No ser similar a su DNI o pasaporte
- No contener palabras del nombre o apellido
`);

let sPassword = prompt("Introduzca una contraseña")



function crearNombreUsuario(sNombre, sApellido1, sApellido2, sDni) {
    let LETRA_NOMBRE = sNombre.slice(0, 1);
    let LETRAS_APELLIDO1 = sApellido1.slice(0, 3);
    let LETRAS_APELLIDO2 = sApellido2.slice(0, 3);
    let CIFRAS_DNI = sDni.slice(0, 2);

    const NOMBRE_USUARIO_FINAL = LETRA_NOMBRE + LETRAS_APELLIDO1 + LETRAS_APELLIDO2 + CIFRAS_DNI;
    return NOMBRE_USUARIO_FINAL;
};


const NOMBRE_USUARIO = crearNombreUsuario(sNombre, sApellido1, sApellido2, sDni);
alert(NOMBRE_USUARIO);

comprobarPassword(sPassword);


function comprobarPassword(sPassword) {
    let longitudApropiada = sPassword.length >= LONGITUD_MINIMA_CONTRASEÑA;; // Devuelve booleano
    let textoAlerta;
    let contieneSimbolosEspeciales = DETECTAR_SIMBOLOS.test(sPassword);
    let tieneAcentos = DETECTAR_ACENTOS.test(sPassword);
    let incluyeParteDni = dniIncluido(sPassword, sDni);
    let incluyeNombre = nombreIncluido(sNombre, sApellido1, sApellido2, sPassword);
    let contieneNumero = TIENE_NUMERO.test(sPassword);

    switch (true) {

        case longitudApropiada && contieneSimbolosEspeciales && !tieneAcentos && !incluyeParteDni && !incluyeNombre && contieneNumero:
            textoAlerta = "Contraseña creada con éxito";
            alert(textoAlerta);
            break;
        case !longitudApropiada:
            textoAlerta = "Su contraseña no tiene la longitud apropiada. Recarge la página y repita el proceso";
            alert(textoAlerta);
            break;
        case incluyeParteDni:
            textoAlerta = "Su contraseña incluye parte del DNI. Recarge la página y repita el proceso";
            alert(textoAlerta);
            break;
        case incluyeNombre:
            textoAlerta = "Su contraseña incluye parte de su nombre o apellidos. Recarge la página y repita el proceso";
            alert(textoAlerta);
            break;
        case tieneAcentos:
            textoAlerta = "Su contraseña incluye acentos. Recarge la página y repita el proceso";
            alert(textoAlerta);
            break;
        case !contieneSimbolosEspeciales:
            textoAlerta = "Su contraseña no incluye ningun caracter especial. Recarge la página y repita el proceso";
            alert(textoAlerta);
            break;
        case !contieneNumero:
            textoAlerta = "Su contraseña no incluye ningun número. Recarge la página y repita el proceso";
            alert(textoAlerta);
            break;

    }


}

function dniIncluido(sPassword, sDni) {
    let PARTE_DNI1 = sDni.slice(0, 2);
    let PARTE_DNI2 = sDni.slice(2, 4);
    let PARTE_DNI3 = sDni.slice(4, 6);
    let PARTE_DNI4 = sDni.slice(6, 8);

    return bandera = sPassword.includes(PARTE_DNI1) || sPassword.includes(PARTE_DNI2) || sPassword.includes(PARTE_DNI3) || sPassword.includes(PARTE_DNI4)
    // devuelve true en caso de que haya algo incluido
}
function nombreIncluido(sNombre, sApellido1, sApellido2, sPassword) {
    let tresLetrasNombre = sNombre.slice(0, 3);
    let tresLetrasFinalesApellido1 = sApellido1.slice(-3);
    let tresLetrasFinalesApellido2 = sApellido2.slice(-3);
    let posicionCentralNombre = sNombre.length / 2 + 1;
    let letrasCentralesNombre = sNombre.slice(posicionCentralNombre);

    let bandera = sPassword.includes(tresLetrasNombre) ||
        sPassword.includes(tresLetrasFinalesApellido1) ||
        sPassword.includes(tresLetrasFinalesApellido2) ||
        sPassword.includes(letrasCentralesNombre);

    return bandera;
}
