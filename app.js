// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// VARIABLES

let amigos = []; // Array donde se guardaran los nombres de los amigos.
let inputAmigos = document.getElementById("amigo"); // En esta variable se ingresan los nombres de los amigos, tambien sirve para controlar que que se haya ingresado un nombre.
let listaAmigos = document.getElementById("listaAmigos"); // Con esta variable podemos acceder a la lista de amigos para luego mostrarla en pantalla.
let sorteo = document.getElementById("resultado"); // Con esta variable mostraremos cual nombre dentro de la lista fue seleccionado al azar.

// FUNCIONES

function añadirAmigo() {
    // Funcion que guarda los nombre en la lista "amigos" y luego los muestra en pantalla.
    if (inputAmigos.value == ""){
        alert("SE DEBE INGRESAR UN NOMBRE");
    }
    listaAmigos.push(inputAmigos.value);
    listaAmigos.innerHTML += `<li>${inputAmigos.value}</li>`;
}

function sortearAmigo() {
    // Funcion en la tomaremos los nombres dentro de la lista "listaAmigos" para luego sortearlos usando la funciones Math.floor y Math.random.
    let random = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[random];
    sorteo.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}