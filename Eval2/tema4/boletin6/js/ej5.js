 //antes
/* var persona = {
    name: ['Rafael', 'Nadal'],
    age: 33,
    categoria: 'masculina',
    aficiones: ['tenis', 'restaurantes'],
    bio: function () {
        alert(this.name[0] + ' ' + this.name[1] + ' tiene ' +
            this.age + ' años y le gusta el ' + this.aficiones[0] + ' y el ' +
            this.aficiones[1] + '.');
    },
    saludo: function () {
        alert('Hola me llamo ' + this.name[0] + ' ' +
            this.name[1] + '.');
    }
}; */


/* A) -->  Si, funciona. */
//persona.saludo();
// persona.bio()

// B) -> Boton bio y boton saludo

let botonBio = document.querySelector("#bio");
let botonSaludar = document.querySelector("#saludar");
// botonBio.addEventListener("click",persona.bio.bind(persona));
botonBio.addEventListener("click", () => {
    persona.bio();
})
botonSaludar.addEventListener("click", () => {
    persona.saludo();
})

// C) Optimiza las funciones

//d- ¿Puedes sustituirlas por funciones flecha?

var persona = {
    name: ['Rafael', 'Nadal'],
    age: 33,
    categoria: 'masculina',
    aficiones: ['tenis', 'restaurantes'],
    bio: () => {
        alert(persona.name[0] + ' ' + persona.name[1] + ' tiene ' +
            persona.age + ' años y le gusta el ' + persona.aficiones[0] + ' y el ' +
            persona.aficiones[1] + '.');
    },
    saludo: () => {
        alert('Hola me llamo ' + persona.name[0] + ' ' +
            persona.name[1] + '.');
    }
};

// pasalo a Json

let archivoJsonPersona = JSON.stringify(persona);


// y pal saco

localStorage.setItem("JSON",archivoJsonPersona);
let otraPagina = document.querySelector("#pagina");
otraPagina.addEventListener("click",()=>{
    let nuevaVentana = window.open(
        "",
        "reutilizar",
        "width=300px,height=300px"
      );
      nuevaVentana.document.write(localStorage.getItem("JSON"));
})




