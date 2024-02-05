 // Obtener referencias a los elementos
 const cerrarIcono1 = document.querySelector(".icono2");
 const enunciadoDiv = document.querySelector(".enunciado");

 // Agregar un manejador de clic al span con la clase icono1 // hay q cambiar el X del span pero bueno ya para otro dia
 cerrarIcono1.addEventListener("click", () => {
   // Ocultar el div enunciado
   enunciadoDiv.style.display = enunciadoDiv.style.display === "none" ? "block" : "none";
 });
