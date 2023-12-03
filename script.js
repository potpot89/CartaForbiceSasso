//definire dei punteggi e selezionare tutti i campi relativi al punteggio nel DOM
let userScore = 0;
let computerScore = 0;
let userBoard = document.getElementById("user-score");
let computerBoard = document.getElementById("computer-score");
let userChoiceResult = document.getElementById("user-choice");
let computerChoiceResult = document.getElementById("computer-choice");
let gameResult = document.getElementById("result");

//const scelte = ['carta', 'forbice', 'sasso'];
const choices = {
  carta: {
    sasso: "vittoria",
    forbice: "sconfitta",
    carta: "pareggio",
  },

  forbice: {
    sasso: "sconfitta",
    forbice: "pareggio",
    carta: "vittoria",
  },

  sasso: {
    sasso: "pareggio",
    forbice: "vittoria",
    carta: "sconfitta",
  },
};

//turno del giocatore

//funzione di gioco e turno del computer
function checker(input) {
  const computerChoices = ["carta", "forbice", "sasso"];

  // Assegno al computer un elemento a caso dell'array
  let computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Scrivo le scelte di utente e computer nella pagina html
  userChoiceResult.innerHTML = input;
  computerChoiceResult.innerHTML = computerChoice;

  // Attraverso l'oggetto choices prendendo la scelta dell'utente e quella del computer

  switch (choices[input][computerChoice]) {
    case "vittoria":
      gameResult.innerHTML = "HAI VINTO!!!";
      userScore++;
      userBoard.innerHTML = userScore;
      break;
    case "sconfitta":
      gameResult.innerHTML = "HAI PERSO! 😿";
      computerScore++;
      computerBoard.innerHTML = computerScore;
      break;
    case "pareggio":
      gameResult.innerHTML = "PAREGGIO";
      break;
  }
}
