import { words } from "./constants"
import {validWords} from "./utils"

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
  addValueToList(gameAttempt);
  const valid = validWords(gameAttempt);

  if (!valid) return;

  if (gameAttempt === game.randomWord) {
    alert("Has acertado!");
  } else {
    alert("No has acertado! Intentalo de nuevo");
  }

  document.getElementById("accept").value = "";
}

const addValueToList = item => {
  let listItem = document.createElement("li");
  listItem.textContent = item;

  const addToList = document.getElementById("list");
  addToList.appendChild(listItem);
}

const resetGame = () => {
  game.randomWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById("list").innerHTML = "";
}

document.getElementById("write").onsubmit = check;
document.getElementById("tries").onsubmit = addValueToList;
document.getElementById("reset").onclick = resetGame;

start();

