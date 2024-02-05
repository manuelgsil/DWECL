/* 2.- En un formulario habrá un input text.
Al escribir sobre el input text y pulsar la tecla INTRO, iremos añadiendo
elementos a un array y lo que hay en el input se borrará.
Cada vez que añadamos un elemento al array, se mostrará por pantalla el
contenido del mismo en una lista no ordenada, de manera que el último
elemento añadido aparezca el primero. */

const formulario = document.querySelector("form");
const input = document.querySelector("input");
const resultado = document.querySelector(".resultado");
const contenidoInput = [];
const lista = document.createElement("ul");
resultado.appendChild(lista);

formulario.addEventListener("keydown", (e) => {

    inputValido = !input.value.length == 0;
    if (e.key === "Enter" && inputValido) {
        añadirCosasArray(input.value)
        input.value = ""; /* Limpio el input */
    }
})

function añadirCosasArray(valor) {
    contenidoInput.push(valor); /* Añado el valor */
    let elementoLi = document.createElement("li"); /* Creo el elemento LI */
    elementoLi.textContent = valor;
    lista.insertBefore(elementoLi, lista.firstChild);

}