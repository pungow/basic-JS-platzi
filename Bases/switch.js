var numero = 100;

switch (numero) {
  case 1:
    console.log("Soy uno");
    break;
  case 10:
    console.log("soy un 10");
    break;
  case 100:
    console.log("soy un 100");
    break;
  default:
    console.log("no soy naides");
    break;
}

var opciones = ["piedra", "papel", "tijera"];

var miFuncion = function (user, IA) {
  switch (numero) {
    case (user === IA):
      console.log("Intenta de nuevo");
      break;
    case (user === opciones[0] && IA === opciones[1]):
      console.log("gano la IA");
      break;
    case (user === opciones[1] && IA === opciones[2]):
      console.log("gano la IA");
      break;
    case (user === opciones[2] && IA === opciones[0]):
      console.log("gano la IA");
      break;
    default:
      console.log("Gano el USER");
      console.log("le gano " + user + " a " + IA);
      break;
  }
}

miFuncion(opciones[0], opciones[2]);