
// Traemos la informacion del usuario
let atributoGenero = localStorage.getItem("Titulo");
let atributoFila = localStorage.getItem("fila");
let atributoColumna = localStorage.getItem("columna");


let parrafo = document.createElement("p");

parrafo.innerHTML = `
La cancion es del género ${atributoGenero} </br> 
Está en la fila ${atributoFila},  la columna nº${atributoColumna}  `;

let section = document.getElementById("position");

section.appendChild(parrafo);