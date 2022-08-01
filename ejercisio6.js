let compras = ["coca", "leche", "pan", "tomate", "cebolla"];

console.log(compras);

compras.push("aceite de girasol");

console.log(compras);

compras.pop();

console.log(compras);

let peliculas = [{
    titulo: 'depredador',
    director: 'John McTiernan',
    fecha: 1987
}, {
    titulo: ' guerra mundial z',
    director: ' Marc Forster',
    fecha: 2013
}, {
    titulo: 'batman',
    director: 'Christopher Nolan',
    fecha: 2008
}
];
console.log(peliculas);

let filtradas = peliculas.filter((valor) => valor.fecha > 2010);

console.log(filtradas);

let directores = peliculas.map((dire) => dire.director);

console.log(directores);

let titulos = peliculas.map((peli) => peli.titulo);

console.log(titulos);

let conca = directores.concat(titulos);

console.log(conca);

let propa = [...directores, ...titulos];

console.log(propa);


