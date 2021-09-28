var miAuto = {
  marca: "Toyota",
  color: "rojo",
  modelo: "Corolla",
  year: 2021,
  detallesDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.año}`);
  }
}
miAuto.detallesDelAuto();
//Auto Corolla 2020


// Funcion contructora
function auto(marca, modelo, year) {
  this.marca = marca;
  this.modelo = modelo;
  this.year = year;

}
var autoNuevo = new auto("tesla", "model S", 2020);
var autoNuevo2 = new auto("tesla", "model x", 2021);
var autoNuevo3 = new auto("toyota", "Corola", 2020);

autoNuevo
autoNuevo2
autoNuevo3

//reto, lista de 30 carros
var marca = ["Abarth","Alfa Romeo","Aston Martin","Audi",
  "Bentley","BMW","Cadillac","Caterham","Chevrolet","Citroen",
  "Dacia","Ferrari","Fiat","Ford","Honda","Infiniti","Isuzu",
  "Iveco","Jaguar"
]
var modelo = ["C-Max","Fiesta","Focus","Mondeo","Ka","S-MA"," B-MAX",
  "Grand C-Max","Tourneo Custom","Kuga","Galaxy","Grand Tourneo Connect",
  "Tourneo Connect","EcoSport","Tourneo Courier","Mustang",
  "Transit Connect","Edge",  "Ka+"
]
var year = ["1988","1989","1978","1989","1928","1989","1968",
  "1989","1888","1989","1288","1989","1938","1989","1988",
  "1999","1983","1989","1918"
]
function auto(marca, modelo, year) {
  this.marca = marca;
  this.modelo = modelo;
  this.year = year;
}
for(i=0; i<30; i++) {
  var nAletorio = Math.round(Math.random() * (19 - 0) + 0);
  var autoNuevo = new auto(marca[nAletorio], modelo[nAletorio], year[nAletorio]);
  console.log(autoNuevo);
}
