console.log("<----------------------------------->");
console.log("Promedio con un ciclo");

let nombre= prompt("Hola estudiante, Cual es tu nombre ?");
let cantidadDeNotas= prompt("Ingrese la cantidad de notas que quiere promediar");
let suma= 0 ;

for (let i=0 ; i<cantidadDeNotas; i++) {
    notas=prompt(`ingrese la ${i+1}° nota`);
    suma += parseInt(notas); 
    console.log(suma);
}

let promedio = suma / cantidadDeNotas;
console.log(`Hola ${nombre} el promedio de sus notas es ${promedio}`);

console.log("<----------------------------------->");
console.log("Promedio con una funcion");

let nota1= prompt("Ingrese su nota");
let nota2= prompt("Ingrese su nota");
let nota3= prompt("Ingrese su nota");

function promediar (nota1 , nota2, nota3) {
    let suma2 = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
    let promedio= suma2 / 3;
    console.log(`su promedio sacado con funcion es ${promedio}`);
}

promediar(nota1,nota2,nota3);