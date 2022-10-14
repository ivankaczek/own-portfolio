// Solicitud GET (Request). El primer parámetro es la URL
let objeto01 = {};

fetch('https://pokeapi.co/api/v2/type/3')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores



/*

// esto que sigue sí funciona

fetch('https://jsonplaceholder.typicode.com/users')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

*/
const HTMLResponse = document.querySelector('#app');

fetch('https://jsonplaceholder.typicode.com/users')
    // Exito
    .then(response => response.json())  // convertir a json
    .then((users) => {
        const tpl = users.map(user => `<li>${user.name} ${user.email} </li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    } )    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores



/*

Esta es la antigua manera de traerse info desde una API

// funcion para cuando la llamada es exitosa
function exito() {
    var datos = JSON.parse(this.responseText); //convertir a JSON
    console.log(datos);
}

// funcion para la llamada fallida
function error(err) {
    console.log('Solicitud fallida', err); //los detalles en el objecto "err"
}

var xhr = new XMLHttpRequest(); //invocar nueva instancia de XMLHttpRequest
xhr.onload = exito; // llamar a la funcion exito si exitosa
xhr.onerror = error;  // llamar a la funcion error si fallida
xhr.open('GET', 'https://api.github.com/users/manishmshiva'); // Abrir solicitud GET
xhr.send(); // mandar la solicitud al vervidor.

*/