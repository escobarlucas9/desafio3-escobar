// Este trabajo es sobre que el cliente debe introduzir su nombre, el servicio que desea y el peluquero para despues mostrarlo en la consola usando la clase cliente, tambiien usando un array vacio donde el for va ingresar los datos y pushearlo.

class Cliente {
    constructor (nombre,servicio,peluquero) {
this.nombre = nombre;
this.servicio = servicio;
this.peluquero = peluquero;
    
}
}

let turno_cliente = [];
let nombre = "";
let servicio = "";
let peluquero = "";

for (let i = 0; i < 1; i++) {

     nombre = prompt("Ingrese su nombre para el turno de hoy");
     servicio = prompt("Ingrese el servicio que desea 1,2 o 3");
    peluquero = prompt("Ingrese el nombre con el especialista que quiera");
    alert("En la consola te dejamos el turno para que lo tengas guardado");
   
    let nuevo_cliente = new Cliente(nombre,servicio,peluquero);
    turno_cliente.push (nuevo_cliente)
}
if (servicio == 1) {
    console.log("Hola: " + nombre + " " + "elegiste el servicio de: Corte de pelo te esperamos para tu cambio de look con: " + peluquero);
}
else if (servicio == 2) {
    console.log("Hola: " + nombre + " " + "elegiste el servicio de: corte mas diseño de barba te esperamos para tu cambio de look con: " + peluquero);
}
else if (servicio == 3) {
    console.log("Hola: " + nombre + " " + "elegiste el servicio de: corte mas color te esperamos para tu cambio de look con: " + peluquero); 
}

console.log(turno_cliente);
//console.log("Hola: " + nombre + " " + "elegiste el servicio de : " + servicio + " " + "te esperamos para tu cambio de look con: " + peluquero);



