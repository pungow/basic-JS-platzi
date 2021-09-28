if (false) {
  console.log("HOla");
}
else {
  console.log("Soy falso")
}

var edad = 18;

if (edad === 18) {
  console.log("Tiene 18 años");
}
else if (edad > 18){
  console.log("Tiene mas de 18")
}
else {
  console.log("tienes menos de 18")
}

//ternario

condition ? true : false;


var numero = 2;
var resultado = numero === 1 ? "soy un uno" : "no lo soy";
console.log(resultado);

var opciones = ["piedra", "papel", "tijera"];

var miFuncion = function (user, IA) {
  if (user != IA) {
    if (user === opciones[0] && IA === opciones[1]) {
      console.log("gano la IA");
    } else if (user === opciones[1] && IA === opciones[2]) {
      console.log("gano la IA");
    } else if (user === opciones[2] && IA === opciones[0]) {
      console.log("gano la IA");
    } else {
      console.log("Gano el USER");
    }
    console.log("le gano " + user + " a " + IA);
  } else {
    console.log("Intenta de nuevo");
  }
}

miFuncion(opciones[0], opciones[2]);

//Gano el USER
//le gano piedra a tijera