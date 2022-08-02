/*const*/
/*--------------------------------------------------------------------------------------*/

//Almacenar lista de palabras posibles en un objeto / array.
const words = ["padre", "beber", "playa", "poeta", "rosas"];

//const maxAttempt = 6;

let game = {
  randomWord: "",
  validAttempts: [],
  allWords: [],
};

/*functions*/
/*--------------------------------------------------------------------------------------*/

function start() {
  //-> Al inicio del programa, seleccionar una palabra de manera aleatoria de la
  //lista para adivinar.
  game.randomWord = words[Math.floor(Math.random() * words.length)];
  game.validAttempts = [];
  game.allWords = [];
}

function check() {
  event.preventDefault();
  //recupero la informacion del input
  const gameAttempt = document.querySelector("#accept").value;
  //añadiendo el valor del intento dentro de la lista
  addValueToList(gameAttempt);
  const valid = validWords(gameAttempt);

  if (!valid) {
    return;
  }

  if (gameAttempt === game.randomWord) {
    alert("has acertado!");
  } else {
    alert("no has acertado");
  }

  document.querySelector("#accept").value = "";
}
//En este punto hay que hacer que se muestren en el listado inferior todos
//los intentos de palabras del usuario.
function addValueToList(item) {
  /* Crear un elemento de lista */
  let listItem = document.createElement("li");
  listItem.textContent = item;

  /* Vinculando item de lista "li" a elemento de lista "ul" */
  const addToList = document.getElementById("list");
  addToList.appendChild(listItem);
}

function validWords(attempt) {
  if (attempt === "") {
    console.log(attempt);
    alert("No puedes dejar el campo vacio");
    return false;
  }
  if (attempt.length > 5) {
    alert("la palabra no puede tener mas de 5 letras");
    return false;
  }
  if (attempt.length < 5) {
    alert("la palabra no puede tener menos de 5 letras");
    return false;
  }
  return true;
}

function resetGame() {
  //Que se elija una nueva palabra, borrar la lista de intentos
  game.randomWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById("list").innerHTML = "";
}

/*Events*/
/*--------------------------------------------------------------------------------------*/

document.getElementById("write").onsubmit = check;
document.getElementById("tries").onsubmit = addValueToList;
document.getElementById("reset").onclick = resetGame;

//Eliminar valores de las estructuras internas de datos.Fijate en el reset que ha hecho Marcos(reinicio de juego)

/*Run*/
/*--------------------------------------------------------------------------------------*/

start();

console.log(game);
