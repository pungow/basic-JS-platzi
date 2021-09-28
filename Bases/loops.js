var estudiantes = ["Maria", "segio", "rosa", "dani"];

function saudarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saudarEstudiantes(estudiantes[i]);
}

//  for of
for (var estudiante of estudiantes) {
  saudarEstudiantes(estudiantes[i]);
}

//while
while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

