// Todos los ejercicios tiene que utilizar los temas vistos en clase hasta el momento, variables, condicionales y ciclos
// Pueden realizar menús como el visto en clase, queda a criterio del programador


console.log("");
console.log("---------- Switch ----------");

/* 
En JavaScript, la sentencia switch se utiliza para tomar decisiones basadas en el valor de una expresión. 
Es una alternativa a utilizar múltiples sentencias if-else cuando se tienen múltiples condiciones de manera más ordenada.


let diaDeLaSemana = 10;

switch (
  diaDeLaSemana // Condición
) {
  case 1: // En caso de que el valor de la variable diaDeLaSemana sea 1 de ejecuta el console.log
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default: // Si la variable diaDeLaSemana no coincide con ninguno de los casos se ejecuta el default
    console.log("Valor no válido");
}

// Ejemplo de combinar un switch con un ciclo while
let encendido = true;

while (encendido) {
  // Mostrar un mensaje de opciones al usuario
  let opcion = parseInt(prompt("Selecciona una opción:\n1. Saludar\n2. Despedir\n3. Salir"));

  // Evaluar la opción seleccionada usando un switch
  switch (opcion) {
    case 1:
      alert("¡Hola! ¡Bienvenido!");
      break;
    case 2:
      alert("¡Hasta luego! ¡Que tengas un buen día!");
      break;
    case 3:
      encendido = false; // Salir del bucle while
      break;
    default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
      break;
  }
}

alert("Gracias por venir lo esperamos pronto");


Ejercicio 3: Realizar un programa de trivia de preguntas, en esta ocasión solo va a tener uan pregunta, 
más adelante lo vamos a modificar para que pueda tener varias preguntas. 
- Se debe hacer una pregunta al usuario.
- El usuario tiene la opción de elegir entre 5 respuestas posibles.
- En caso de no adivinar volver a solicitar al usuario una respuesta.
- En caso de adivinar indicarle al usuario que esa es la respuesta correcta. 
- (Opcional) Realizar un contador que sume la cantidad de intentos del usuario para adivinar la respuesta
*/

//Ejercicio Heladeria

let burguer = "Pampeano";
let respuesta = prompt("Cual es la hamburguesa que uno de sus ingredientes es mostaza y jamon?")
let i = 0;

switch (respuesta){
  case "Pampeano":
    console.log("Acertaste! es la respuesta correcta");
    break
  case "Deluxe", "Cuarto", "Full","Big Bang":
    respuesta=prompt("La respuesta es incorrecta, intentalo denuevo");
    break;
  default:
    respuesta=prompt("La respuesta es incorrecta, intentalo denuevo");
    break
}