let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "../images/trophy.jpg") {
    miImage.setAttribute("src", "../images/uruguayan-soccer-logo.png");
  } else {
    miImage.setAttribute("src", "../images/trophy.jpg");
  }
};





/* Ejemplos
const miTitulo = document.querySelector("h1");
miTitulo.textContent = "Hola Mundo!";

let nombreDeLaVariable = "Bob";
nombreDeLaVariable = "Steve";  // se puede cambiar el nombre de la variable//

//Condicionales//
let helado = "chocolate";
if (helado === "chocolate") {
    alert("Si, amo el helado de chocolate");
    } else {
        alert("Awww, pero mi favorito es el de chocolate...");
    }

alert("Hola");

function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
  }

  document.querySelector("html").onclick = function () {
    alert("Ouch, deja de pincharme");
  }

document.querySelector("html").onclick = function () {};
/* Es equivalente a 
let miHTML = document.querySelector("html");
miHTML.onclick = function () {}; */
