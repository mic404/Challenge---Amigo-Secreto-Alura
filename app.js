// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// VARIABLES

let listaDeAmigos = []; // Array donde se guardaran los nombres de los amigos.
let entradaDeAmigos = document.getElementById("amigo"); // Entrada en la que se ingresan los nombres.
let listadoDeAmigos = document.getElementById("listaAmigos"); // Con esta variable podemos acceder a la lista de amigos para luego mostrarla en pantalla.
let sorteo = document.getElementById("resultado"); // Con esta variable mostraremos cual nombre dentro de la lista fue seleccionado al azar.

// FUNCIONES

function agregarAmigo() {
    // Funcion que guarda los nombre en la lista "amigos" y luego los muestra en pantalla.
    if (entradaDeAmigos.value == ""){ // Este if nos sirve para controlar si se agrego un nombre, si no es el caso se mostara una alerta en pantalla.
        alert("SE DEBE INGRESAR UN NOMBRE");
        return;
    }
    listaDeAmigos.push(entradaDeAmigos.value); // Si se agrego un nombre se guardara en en el array de amigos.
    listadoDeAmigos.innerHTML += `<li>${entradaDeAmigos.value}</li>`; // Se mostrara en pantalla, en forma de lista, los nombres que han sido agregados.
    entradaDeAmigos.value = ""; // Se limpia la entrada luego de enviar el nombre.
}

function sortearAmigo() {
    // Funcion en la tomaremos los nombres dentro de la lista "listaAmigos" para luego sortearlos usando la funciones Math.floor y Math.random.
    let random = Math.floor(Math.random() * listaDeAmigos.length); // Usando las funciones de Math se crea un indice entre 0 y la longitud de la lista -1.
    let amigoSecreto = listaDeAmigos[random]; // Se obtiene uno de los nombres al alzar.
    sorteo.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`; // Se muestra el nombre al azar en pantalla.
}