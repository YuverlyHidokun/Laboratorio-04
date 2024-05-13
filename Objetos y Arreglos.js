//Objeto
const amigo = {
  nombre: "Carolina Marin",
  edad: 20,
  ciudad: "Quito",
  intereses: "Cocina"
};

console.log(`Nombre: ${amigo.nombre}`);
console.log(`Edad: ${amigo.edad}`);
console.log(`Ciudad: ${amigo.ciudad}`);
console.log(`Intereses: ${amigo.intereses}`);

//Arreglos
const amigos = [
  {
    nombre: "Carolina Marin",
    edad: 20,
    ciudad: "Quito",
    intereses: "Cocina"
  },
  {
    nombre: "Alejandra Pérez",
    edad: 20,
    ciudad: "Quito",
    intereses: "Enfermeria"
  },
  {
    nombre: "Juleidy Lojan",
    edad: 21,
    ciudad: "Loja",
    intereses: "Música"
  }
];

// Mostrar información del arreglo
amigos.forEach(amigo => {
  console.log(`Nombre: ${amigo.nombre}`);
  console.log(`Edad: ${amigo.edad}`);
  console.log(`Ciudad: ${amigo.ciudad}`);
  console.log(`Intereses: ${amigo.intereses}`);
  console.log("---------------");
});
