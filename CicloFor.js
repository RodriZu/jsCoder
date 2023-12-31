/* console.log("");
console.log("---------- Ciclo for ----------");
// Estructura del ciclo for

for (let i = 0; i < 10; i++) {
  // El i++ equivale a i = i + 1
  // console.log("Se imprime un ciclo");
  console.log(i);
}

console.log("");
console.log("---------- Ciclo for Tabla de Multiplicación ----------");
// Algoritmo para calcular la tabla de multiplicar de un número

let numero = 10;

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${numero} X ${i} = ${resultado}`);
}

console.log("");
console.log("---------- Ciclo for Turnos ----------");

// Algoritmo para dar turno del 1 al 3 a los nombres ingresados.

// for(let i = 1; i <= 3; i++) {
//   // En cada repetición solicitamos un nombre.
//     let nombre = prompt("Ingrese su nombre")
//     console.log(`Turno N° ${i} Nombre: ${nombre}`);
// }

console.log("");
console.log("---------- Ciclo for Número ignorado ----------");
// Estructura del ciclo for con control de flujo
// Imprimir todos los números del 0 al 10 menos el número ingresado

let numeroIgnorado = 3;

for (let i = 0; i <= 10; i++) {
  if (i != numeroIgnorado) {
    console.log(i);
  }
}

console.log("");
console.log("---------- Ciclo for Sentencia Break ----------");
// Sentencia Break
// La utilizamos para interrumpir el ciclo

A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición el ciclo se interrumpa. 
Para eso se utiliza la sentencia break.
Al escribir esa línea dentro de un ciclo for, el mismo se interrumpirá como si hubiera finalizado.


for (let i = 1; i <= 10; i++) {
  //Si la variable i es igual 5 interrumpo el for.
  if (i == 5) {
    console.log("Interrumpido");
    break;
  }

  console.log(i);
}


Ejercicio 1: Realizar un programa que solicite al usuario que ingrese un número, luego imprimir por consola solo los números
pares desde el 1 al número ingresado. Para saber cual es el número para se tiene que utilizar algo llamado
resto % "Búscalo en Google" :D  
*/

let numero= prompt("Ingrese numero");

for(let i= 1; i++;) {
  if( i % 2 == 0)
  console.log(`${i}`);
  if(i == numero){
    break;
  }
}