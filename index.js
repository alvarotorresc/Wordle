let words = ["padre", "beber", "playa", "poeta", "rosas"];

let attempts = 0

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

let game = {
  randomWord: "",
  validAttempts: [],
  allWords: [],
};

const start = () => {
  game.randomWord = words[Math.floor(Math.random() * words.length)];
  game.validAttempts = [];
  game.allWords = [];
}

const check = event => {
  event.preventDefault();

  const gameAttempt = document.getElementById("accept").value;
  const valid = validWords(gameAttempt);
  document.getElementById("accept").value = "";

  if (!valid) return;

  addValueToList(gameAttempt);
  attempts += 1

  if (gameAttempt === game.randomWord) {
    alert("Has acertado!");
  } else {
    alert("No has acertado! Intentalo de nuevo");
  }

  if (attempts === 6){
    attempts = 0
    resetGame()
  }
}

const addValueToList = item => {
  let listItem = document.createElement("li");
  listItem.textContent = item;

  const addToList = document.getElementById("list");
  addToList.appendChild(listItem);
}

const resetGame = () => {
  alert(`La palabra era ${game.randomWord}`)
  alert("Has perdido! El juego va a reiniciarse")
  words = words.filter(item => item !== game.randomWord)
  game.randomWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById("list").innerHTML = "";
}

document.getElementById("write").onsubmit = check;
document.getElementById("tries").onsubmit = addValueToList;
document.getElementById("reset").onclick = resetGame;

start();

