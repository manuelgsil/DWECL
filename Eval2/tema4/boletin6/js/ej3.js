let botonValidar = document.querySelector("#validar");
let formulario = document.querySelector("form");

formulario.addEventListener("copy", (e) => {
    if (e.target.id === "contraseña" || e.target.id === "rContraseña") {
        e.preventDefault();
    }
});

formulario.addEventListener("paste", (e) => {
    if (e.target.id === "contraseña" || e.target.id === "rContraseña") {
        e.preventDefault();
    }
});

botonValidar.addEventListener("click", validarContraseña);

function validarContraseña() {
    let contraseña = document.querySelector("#contraseña").value;
    let rContraseña = document.querySelector("#rContraseña").value;
    let regContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/; // Sin el constructor RegExp
    let esValida = regContraseña.test(contraseña) && contraseña === rContraseña;
    return esValida;
}