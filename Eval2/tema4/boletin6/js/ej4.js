const eventoMouse = document.querySelector("#eventos-mouse");
const eliminar = document.querySelector("#eliminar-eventos");

const entraste = () => alert("entraste");
const fuiste = () => alert("tefuiste");

eventoMouse.addEventListener("mouseover", entraste)
eventoMouse.addEventListener("mouseout", fuiste)


/* eliminar.addEventListener("click", () => {

    eventoMouse.removeEventListener("mouseover", entraste);
    eventoMouse.removeEventListener("mouseout", fuiste);
}) */

/* 

eliminar.addEventListener("click", () => {
    
    eventoMouse.removeEventListener("mouseover", entraste);
   // eventoMouse.removeEventListener("mouseout", fuiste);

})
eliminar.addEventListener("dblclick", () => {
    
    // eventoMouse.removeEventListener("mouseover", entraste);
    eventoMouse.removeEventListener("mouseout", fuiste);
}) 

*/

let contador = 0;
eliminar.addEventListener("click", (e) => {
    let haPulsado = e.target.id == "eliminar-eventos";
    if (haPulsado) {
        contador++;
    }
    if (contador == 1)
        eventoMouse.removeEventListener("mouseover", entraste);
    if (contador > 1)
        eventoMouse.removeEventListener("mouseout", fuiste);
})
