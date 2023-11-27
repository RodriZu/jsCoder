console.log("");
console.log("---------- Ciclo While ----------");

/* 
La estructura while permite crear bucles que se ejecutan cero o más veces, dependiendo de la condición indicada.
El funcionamiento del bucle while se resume en: mientras se cumpla la condición indicada, 
repite las instrucciones incluidas dentro del bucle.


// Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”

// let entrada = prompt("Ingresa un dato o ESC para salir");

// while( entrada != "ESC" ) { // Mientras esta condición de true va a ejecutarse el ciclo
//   // Mientras se cumple esta condición el ciclo se repite
//   // Se ejecuta mientras el ciclo sigue funcionando
//   console.log(`El usuarios ingreso: ${entrada}`);
//   entrada = prompt("Ingresa un dato o ESC para salir");
// }

// console.log("Fin del ciclo");

// Ejemplo de un login

// toLowerCase() es un método que tienen los string para para convertir todo el texto en minúscula
// toUpperCase() es un método que tienen los string para para convertir todo el texto en mayúscula

let usuario = prompt("Ingrese el nombre de usuario del administrador").toLowerCase();
let password = prompt("Ingrese su contraseña").toUpperCase();

while( usuario != "admin" || password != "ADMIN123" ) {
    alert("Usuario o contraseña no validos");
    usuario = prompt("Ingrese el nombre de usuario del administrador").toLowerCase();
    password = prompt("Ingrese su contraseña").toUpperCase();
}

alert("Bienvenido al programa");



console.log("");
console.log("---------- Ciclo Do While ----------");

La estructura do...while permite crear bucles que se ejecutan una o más veces, dependiendo de la condición indicada.
A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, 
porque la condición se evalúa al final.

let nombre = "Juan";

// while( nombre != "Juan") {
//     console.log("Hola Juan");
// }


do {
    console.log("Hola Juan");

} while( nombre != "Juan" );

let numero = 0;

do {
    numero = parseInt(prompt("Ingrese un número mayor que 10"));
    
} while (numero <= 10);

console.log(`El número ingresado es: ${numero}`);

Ejercicios 2: Realizar un programa que sea un juego de adivinar el número, para ello se debe:
- Determina en una variable un número fijo el cual se debe adivinar entre el 1 y el 10.
- Solicitar al usuario que ingrese un número en un rango del 1 al 10, si no lo hace solicitarle nuevamente
que ingrese el número indicando que tiene que ser del 1 al 10. 
- En caso de que ingrese un número del 1 al 10 y no adivine, solicitar nuevamente un número, si quiere salir
del programa y no seguir intentando que ingrese las letras ESC, esto pone al fin al ciclo, configurar que ESC no sea keySensitive
- En caso de adivinar el número mostrar un mensaje indicando que adivino el número y terminar el programa
*/

const numero=3;

let adivinar = prompt("Adivine el numero");
let entrada = "NO";

while (entrada!== "ESC") {
    if (adivinar>10) {
        adivinar= prompt("El numero es del 1 al 10");
        entrada= prompt("Si quiere salir ingrese ESC").toUpperCase();
    }
    if (numero == adivinar) {
        console.log("Felicidades, adivinaste el numero!");
        entrada = "ESC";
    } else {
        console.log("No adivinaste");
        adivinar=prompt("Ingrese otro numero");
        entrada=prompt("Si quiere salir ingrese ESC").toUpperCase();
    }
}
