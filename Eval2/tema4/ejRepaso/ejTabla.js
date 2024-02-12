const botonTabla = document.querySelector("#btnTabla");
const checkBox = document.createElement("input");
const labelCheck = document.createElement("label");
labelCheck.textContent = "Añadir al final";
checkBox.type = "checkbox";
const botonAñadir = document.querySelector("#incorporacion");
const listaUl = document.querySelector("ul");
const formulario = document.querySelector("form");
formulario.appendChild(labelCheck);
formulario.appendChild(checkBox);
const tabla = document.createElement("table");

function crearTabla() {
  const elementosTabla = document.querySelectorAll("li");

  // Encabezado
  const encabezadoAlumnos = document.createElement("th");
  encabezadoAlumnos.textContent = "Alumnos";

  const encabezadoNombre = document.createElement("th");
  encabezadoNombre.textContent = "Nombre";
  const filaEncabezado2 = document.createElement("tr");
  const encabezadoApellido = document.createElement("th");
  encabezadoApellido.textContent = "Apellido";

  const filaEncabezado = document.createElement("tr");
  filaEncabezado.appendChild(encabezadoAlumnos);

  filaEncabezado2.appendChild(encabezadoNombre);
  filaEncabezado2.appendChild(encabezadoApellido);

  const thead = document.createElement("thead");
  thead.appendChild(filaEncabezado);
  thead.appendChild(filaEncabezado2);
  tabla.appendChild(thead);
  encabezadoAlumnos.setAttribute("colspan", "2");

  elementosTabla.forEach((alumno) => {
    let nombreApellido = alumno.textContent.split(" ");
    let nombre = nombreApellido[0];
    let apellido = nombreApellido[1];
    const fila = document.createElement("tr");
    let celdaNombre = document.createElement("td");
    let celdaApellido = document.createElement("td");

    celdaNombre.textContent = nombre;
    celdaApellido.textContent = apellido;

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    tabla.appendChild(fila);
  });
  const contenedorTabla = document.querySelector(".tablita");
  contenedorTabla.appendChild(tabla);
}

botonTabla.addEventListener("click", crearTabla);

botonAñadir.addEventListener("click", () => {
  let nombre = document.querySelector('[name="nombre"]').value;
  let apellido = document.querySelector('[name="apellido"]').value;
  let li = document.createElement("li");
  li.textContent = nombre + " " + apellido;
  if (checkBox.checked) {
    listaUl.appendChild(li);
  } else {
    listaUl.insertBefore(li, listaUl.firstChild); // Inserta al principio
  }
});

const tablita = document.querySelector(".tablita");

tablita.addEventListener("click", (e) => {
  let esCelda = e.target != e.currentTarget && e.target.tagName == "TD";
 if(esCelda){
   let fila =e.target.parentNode;
   let filaClonada = fila.cloneNode(true);
   // Añadir el clon al final de la tabla
   tabla.appendChild(filaClonada);
 }
});
