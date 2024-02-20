
const json = [
    {
        "id": 1,
        "nombre": "Almería",
        "coste_alojamiento": 12,
        "coste_alimentacion": 22,
        "imagen": "assets/img/almeria.jpg"
    },
    {
        "id": 2,
        "nombre": "Granada",
        "coste_alojamiento": 143.2,
        "coste_alimentacion": 22,
        "imagen": "assets/img/granada.jpg"
    },
    {
        "id": 3,
        "nombre": "Sevilla",
        "coste_alojamiento": 95.5,
        "coste_alimentacion": 25,
        "imagen": "assets/img/sevilla.jpg"
    },
    {
        "id": 4,
        "nombre": "Córdoba",
        "coste_alojamiento": 75.8,
        "coste_alimentacion": 20,
        "imagen": "assets/img/cordoba.jpg"
    },
    {
        "id": 5,
        "nombre": "Málaga",
        "coste_alojamiento": 135.6,
        "coste_alimentacion": 30,
        "imagen": "assets/img/malaga.jpg"
    },
    {
        "id": 6,
        "nombre": "Madrid",
        "coste_alojamiento": 200.3,
        "coste_alimentacion": 35,
        "imagen": "assets/img/madrid.jpg"
    },
    {
        "id": 7,
        "nombre": "Barcelona",
        "coste_alojamiento": 220.5,
        "coste_alimentacion": 40,
        "imagen": "assets/img/barcelona.jpg"
    }
];

function crearDestinos(json) {

    json.forEach(infoDestino => {

        // Creamos el artículo destino, que es nuestra carta con la información
        let destino = document.createElement("article");
        destino.setAttribute("class", "destinos");
        destino.style.backgroundImage = `url(${infoDestino.imagen})`;
        // Creamos el encabezado con el nombre del destino
        let encabezado = document.createElement("h1");
        encabezado.textContent = infoDestino.nombre;

        // Creamos una tabla para mostrar los detalles del destino
        let tabla = document.createElement("table");
        let filaAlojamiento = document.createElement("tr");
        let columnaCosteAlojamiento = document.createElement("td");
        columnaCosteAlojamiento.textContent = "Coste alojamiento:";
        let columnaValorCosteAlojamiento = document.createElement("td");
        columnaValorCosteAlojamiento.textContent = infoDestino.coste_alojamiento;

        // Agregamos la fila de alojamiento a la tabla
        filaAlojamiento.appendChild(columnaCosteAlojamiento);
        filaAlojamiento.appendChild(columnaValorCosteAlojamiento);
        tabla.appendChild(filaAlojamiento);

        // Repetimos el proceso para los costes de alimentación
        let filaComida = document.createElement("tr");
        let columnaCosteComida = document.createElement("td");
        columnaCosteComida.textContent = "Coste alimentación:";
        let columnaValorCosteComida = document.createElement("td");
        columnaValorCosteComida.textContent = infoDestino.coste_alimentacion;

        filaComida.appendChild(columnaCosteComida);
        filaComida.appendChild(columnaValorCosteComida);
        tabla.appendChild(filaComida);

        // Agregamos la tabla al artículo destino
        destino.appendChild(encabezado);
        destino.appendChild(tabla);

        let contenedorBotones = document.createElement("contenedorBotones");

        // Creamos los botones
        let botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Añadir";
        botonAgregar.classList.add("add");

        let botonMasInformacion = document.createElement("button");
        botonMasInformacion.textContent = "Más información";


        contenedorBotones.appendChild(botonAgregar);
        contenedorBotones.appendChild(botonMasInformacion);
        destino.appendChild(contenedorBotones);

        // Finalmente, agregamos el artículo destino al documento
        let contenedorDestinos = document.querySelector(".viajes");
        contenedorDestinos.appendChild(destino);


    });
}


document.addEventListener('DOMContentLoaded', function () {
    crearDestinos(json);
});