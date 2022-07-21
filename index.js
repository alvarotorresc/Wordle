//Almacenar lista de palabras posibles en un objeto / array.
const words = ["beber", "padre", "playa", "poeta", "rosas"];

//-> Al inicio del programa, seleccionar una palabra de manera aleatoria de la
//lista para adivinar.
const randomWord = words[Math.floor(Math.random() * words.length)];
//console.log("la palabra es:");
//console.log(randomWord);

//Permitir al usuario que introduzca una palabra a través de un input y,
//tras pulsar un botón, que salga un alert anunciando si ha acertado o
//no (con una comparación de palabras exacta).

function check(e) {
  const playWord = document.getElementById("accept");
  //console.log(playWord.value);
  if (playWord.value === randomWord) {
    alert("has acertado!");
  } else {
    alert("no has acertado");
  }
  e.preventDefault();

  addValueToList();

  document.querySelector("#accept").value = "";
}

document.getElementById("write").onsubmit = check;

//En este punto hay que hacer que se muestren en el listado inferior todos
//los intentos de palabras del usuario.
function addValueToList() {
  const lists = document.getElementById("accept");
  //console.log(lists.value);
  /* Crear un elemento de lista */
  let listItem = document.createElement("li");
  listItem.textContent = lists.value;

  /* Vinculando item de lista "li" a elemento de lista "ul" */
  const addToList = document.getElementById("list");
  addToList.appendChild(listItem);
}

document.getElementById("tries").onsubmit = addValueToList;

//Crear una estructura de datos que permita almacenar los datos referentes
//a la partida que estamos jugando. Hay que pensar cómo almacenar la
//palabra a acertar y los intentos no válidos realizados hasta el momento.

//Contabilizar el número de intentos y no dejar realizar más de 6.
//Cuando se llegue al máximo, avisar con un “alert” de que ya no se puede
//jugar más.

//Validar los intentos del usuario. No dejar que se introduzcan cadenas
//vacías, números o palabras que no tengan una longitud exacta de 5
//posiciones.
//Mostrar avisos personalizados a través de “alerts” cuando:
//El texto contenga números
//El texto sea de longitud menor a cinco caracteres
//El texto sea de longitud mayor a cinco caracteres
//A pesar de las validaciones, se deberán seguir mostrando en la lista
//inferior todos los intentos del usuario.

//Crear y dar funcionalidad al botón de “Resetear partida” y hacer que el
//tablero y las listas de palabras en pantalla se muestren como al inicio
//(vacias)
//Eliminar valores de las estructuras internas de datos.
