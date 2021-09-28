var articulos = [
  { nombre: "Bici", costo: 300 },
  { nombre: "TV", costo: 1500 },
  { nombre: "libro", costo: 100 },
  { nombre: "movil", costo: 500 },
  { nombre: "Laptop", costo: 2000 },
  { nombre: "teclado", costo: 500 },
  { nombre: "audifonos", costo: 1000 },
];

//metodo filter
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
})
console.log(articulosFiltrados);


//metodo map
var nombreArticulos = articulos.map(function(articulo) {
  return articulos.nombre;
});

//metodo find
var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "libro";
});
console.log(encuentraArticulo);

//metodo forEach
articulos.forEach(function (articulo) {
  console.log(articulo.costo);
});

//metodo some
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});
console.log(articulosBaratos);

//metodo push
var numarray = [1, 2, 3, 4, 5]

function newNum() {
  numarray.push(6, 7);
  console.log(numarray);
}
newNum();