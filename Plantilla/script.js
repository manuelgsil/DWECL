/*    EJERCICIO 1
           let comprobador = true;
      
              while (comprobador) {
                  let num1 = prompt("Ingresa un número:");
                  let num2 = prompt("Ingresa otro número:");
                  comprobador = isNaN(num1) || isNaN(num2);
      
                  if (!comprobador) {
                      let resultado = Number(num1) + Number(num2);
                      alert("El resultado de la suma es: " + resultado);
                  } else {
                      alert("Introduce valores numéricos");
                  }
              }  */

/*  EJERCICIO 2
 Crear un programa donde el usuario ingrese en un prompt 
        la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit. 
let temperaturaCelsius = prompt("Ingresa la temperatura en Celsius:");

while (isNaN(temperaturaCelsius)) {
    alert("Ingresa un valor numérico válido.");
    temperaturaCelsius = prompt("Ingresa la temperatura en Celsius:");
}

let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
alert("La temperatura en Fahrenheit es: " + temperaturaFahrenheit);
*/


/*
Ejercicio 4
Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5
 
*/

/*       const division = (num1) => {
          while (isNaN(num1)) { 
            num1 = prompt("Ingrese un valor numérico:");
          }
          let resultado = num1 / 10;
          alert("El resultado es: " + resultado);
      };
 
      let num1 = prompt("Ingrese un número:");
      division(num1); */

/* Ejercicio 5
 
Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.*/

/* let a =[1,2,3]
alert(typeof(a)); */

/*    let a = [1, 2, 3];
 let tipoDato = typeof a;
 alert("El tipo de dato de 'a' es: " + tipoDato);
  */

/* Ejercicio 6
Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.
let numero = prompt("Ingresa un número:");
 
if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}
*/

/* Ejercicio 7
Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log
 
let numero = prompt("Ingresa un número:"); 
if (numero % 5 === 0) {
    console.log("El número es divisible por 5");
} else {
    console.log("El número no es divisible por 5");
}

*/

/* Ejercicio 8
Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
*/
/*     let numero = prompt("Ingresa un número:");
 
    if (numero % 11 === 0 && numero % 5 === 0) {
        console.log("El número es divisible por 11 y 5");
    } else {
        console.log("El número no es divisible por 11 y 5");
    } */

/* Ejercicio 10
 
Determinar si una palabra empieza con mayúscula o no.
let palabra = prompt("Ingresa una palabra:");

if (palabra.charAt(0) === palabra.charAt(0).toUpperCase()) {
 console.log("La palabra empieza con mayúscula");
} else {
        console.log("La palabra no empieza con mayúscula");
}
*/

/* Ejercicio 11
let año = prompt("Ingresa un año:");

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
  console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");
}*/

/* Ejercicio 12 */

/*     let numeroAleatorio = Math.ceil(Math.random() * 10);
    alert(numeroAleatorio);
    let numeroUsuario = prompt("Introduce un número del 1 al 10 para adivinar el número aleatorio:");
    // Comprobar si la entrada del usuario coincide con el número aleatorio
    if (parseInt(numeroUsuario) === numeroAleatorio) { // Hay que usar ParseINt porq en las demas operaciones JS las convierte automaticamente pero aqui se trata como un String y no hace la comparacion exacta
        alert("¡Buen trabajo! Has adivinado el número.");
    } else {
        alert("No corresponde. El número aleatorio era: " + numeroAleatorio);
    } */

/* Ejercicio 13
 
El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:
 
if (edad < 13) {
    console.log("Es niño");
} if (edad < 18) {
    console.log("Es adolecente");
} else {
    console.log("Es adolecente");
}
  */

/*  let edad = prompt("Introduce un número");
 if (edad < 13) {
     console.log("Es niño");
 } else if (edad < 18) { //faltaba el else if
     console.log("Es adolecente");
 } else {
     console.log("Es adulto"); // ponemos otro resultado // tampoco se controlan entradas no numericas
 } */

/* Ejercicio 14
Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b.
!a && !b
!a || !b
*/

/*  let a = false;
 let b = false;
 console.log("Valor de !a && !b: " + (!a && !b));
 console.log("Valor de !a || !b: " + (!a || !b));
 
 a = true;
 b = true;
 
 console.log("Valor de !a && !b: " + !(!a && !b)); // si lo q hay dentro de los parentesis es falso, se volverá true
 console.log("Valor de !a || !b: " + !(!a || !b));
 
 a = true;
 b = false;
 
 console.log("Valor de !a && !b: " + !(!a && !b));
 console.log("Valor de !a || !b: " + (!a || !b));
  */


/* Encontrar todos los divisores de un número.
let numero = parseInt(prompt("Ingresa un número:"));

while (isNaN(numero)) {
    numero = parseInt(prompt("Ingresa un número válido:"));
}

let divisores = [];

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores.push(i);
    }
}

console.log("Los divisores de " + numero + " son: " + divisores.join(", "));

*/

/* Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.

*/
/*     let numero = parseInt(prompt("Ingresa un número mayor o igual a dos:"));
 
    while (isNaN(numero) || numero < 2) {
        numero = parseInt(prompt("Ingresa un número válido mayor o igual a dos:"));
    }
 
    let esPrimo = true;
 
    for (let i = 2; i < numero && esPrimo; i++) {
        if (numero % i === 0) {
            esPrimo = false;
        }
    }
 
    if (esPrimo) {
        console.log(numero + " es un número primo.");
    } else {
        console.log(numero + " no es un número primo.");
    } */

/* Crear un programa que determine si un número es perfecto o no,
(se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)
 
 */

/*      function esNumeroPerfecto(numero) {
         let sumaDivisores = 0;
         let comprobador = true;
        
         for (let i = 1; i < numero; i++) {
             if (numero % i === 0) {
                 sumaDivisores += i;
             }
         }
 
         if (!(sumaDivisores === numero)) {
             comprobador = false;
         }
         return comprobador;
     }
 
     let numero = prompt("Ingresa un número:");
 
     if (esNumeroPerfecto(numero)) {
         console.log("El número es perfecto.");
     } else {
         console.log("El número no es perfecto.");
     } */

/*Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares, hint: utilizar reduce()

    */

/*  function obtenerNumerosPares(arreglo) {
let numerosPares = arreglo.reduce((acumulador, posicion) => {
  if (posicion % 2 === 0) {
    acumulador.push(posicion);
  }
  return acumulador;
}, []); // en valor iniciar hay que poner un array para que nos devuelva la magia
 
return numerosPares;
}
 
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = obtenerNumerosPares(numeros);
console.log(numerosPares); // Resultado: [2, 4, 6] 
 
const numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); ESTA ES MAS SENCILLA
*/

/*    (function autoejecutable () {
  // Código a ejecutar automáticamente
console.log("¡muu!");
})();
 */