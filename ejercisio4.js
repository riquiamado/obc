//ejercisio numero 4

let nombre = "Carlos";
let apellido = "Amado";
let estudiante = ` ${nombre} ${apellido} `;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let espacios = estudiante.length;
let primerLetra = nombre[0];
let ultimaLetra = apellido[apellido.length - 1];
let sinEspacios = estudiante.trim()
let incluido = estudiante.includes(nombre)


console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(espacios);
console.log(primerLetra);
console.log(ultimaLetra);
console.log(sinEspacios);
console.log(incluido);