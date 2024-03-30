let nombre = "Jean Pier Anderson";
var apellidos = "Carrasco Tamariz";
const dni = "99999999";
nombre = "Luis";
// apellidos = "Alcazar"
//Objeto JSON es la coleccion de datos
let objeto = {
    nombres: "Jean Pier",
    apellidos : "Carrasco",
    dni: "99999999",
    direccion : "Av. ....",
    edad: 25
};
console.log(objeto);
//Arraglos - Array de Strings
let arregloFrutas = ["Pera","Manzana","Platano","Melon"];
console.log(arregloFrutas);
//Array de objetos
let arreglesDePersonas = [
    {
        nombres: "Jean Pier",
        apellidos : "Carrasco",
        dni: "99999999",
        direccion : "Av. ....",
        edad: 25
    },
    {
        nombres: "Jean Pier",
        apellidos : "Carrasco",
        dni: "99999999",
        direccion : "Av. ....",
        edad: 25
    },
    {
        nombres: "Jean Pier",
        apellidos : "Carrasco",
        dni: "99999999",
        direccion : "Av. ....",
        edad: 25
    }
];
console.log(arreglesDePersonas);
//variable numerica
let year = 2024;
//Variables boleanas
let prendido = true;
//Variables nulas
let nulo = null;
//Variables indefinidas
let indefinidas;
//variable funciones
const multiplo = function(numero){
    return numero * 2;
}
const resultado = multiplo(2);
let x = 30;
let y = 20;
let m = 0;
let n = 0;
console.log(x == y);
console.log(x === y);
console.log(m == n);
console.log(x > n);
console.log(x >= n);

if(x >= 31 || x > y){
    console.log('x es mayor que y');
}else{
    console.log('x es menor que y');
}
if(x >= 31 && x > y){
    console.log('x es mayor que y');
}else{
    console.log('x es menor que y');
}
// if(x === 30){

// }
// if(x === 40){

// }
// if(x === 50){

// }
x = 60;
switch (x) {
    case 30:
        console.log('X es 30');
    break;
    case 40:
        console.log('X es 40');
    break;
    case 50:
        console.log('X es 50');
    break;
    default:
        console.log('X no es ni 30; 40; 50');
    break;
}
//bucles for y while
//++ aumenta en 1
// i += n aumenta de n 
for(let i = 0; i <= 10; i++){
    console.log(i);
}
let a = 0;
while (a <= 10) {
    console.log(a);
    a++;
}
let cadena = "Hola,Mundo,Desde,JavaScript   ";
console.log(cadena.split(","));
console.log(cadena.substring(0,5))
console.log(cadena.trim());
let numeros = [10,20,30];
numeros.push(40);
numeros.pop();
let numerosPor2 = numeros.map(function(numero){
    return numero * 2;
})
console.log(numerosPor2)
let numerosMenores20 = numeros.filter(function(numero) {
    return numero != 20;
})
console.log(numerosMenores20);
let numeroFlotante = 20.52855;
console.log(numeroFlotante.toFixed(2));
let numeroEntero = Number.parseInt(numeroFlotante);
console.log(numeroEntero)

$("button").html("Next Step...")
var hiddenBox = $( "#banner-message");
$("#button-container button" ).on( "click", function(event) {
  hiddenBox.show();
});
fetch('/api/usuarios',{
    method:"GET",
    body:JSON.stringify({year:"2024"})
}).then(response => response.json())
.then(data => {

}).catch(error => {
    
})
$.ajax({
    url: "/api/usuarios",
    method:"GET",
    data: {
      zipcode: 97201
    },
    success: function( result ) {
      $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
    }
});

