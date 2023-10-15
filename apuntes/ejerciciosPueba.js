function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Definir la función esMayorDeEdad en el prototipo de Persona
Persona.prototype.esMayorDeEdad = function () {
    return this.edad >= 18;
};

var personaEjemplo = {
    nombre: "Juan",
    edad: 25
};


// Crear un array con varios objetos persona
var personas = [
    new Persona("Ana", 20),
    new Persona("Luis", 17),
    new Persona("María", 30)
];

function calcularEdadPromedio(personas) {
    if (personas.length === 0) {
        throw new Error("El arreglo de personas está vacío. No se puede calcular el promedio de edad.");
    }

    let totalEdad = 0;
    let promedio = 0;

    totalEdad = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    promedio = totalEdad / personas.length;
    return promedio;
}