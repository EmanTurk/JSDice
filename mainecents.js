const player01EL = document.querySelector(".player01");
const player02EL = document.querySelector(".player02");

// Setting the players scores to 0 when the page first reloads.
const score1EL = document.getElementById("score_1"); //score player 2
const score2El = document.getElementById("score_0"); //score player 1

score1EL.textContent = 0;
score2El.textContent = 0;

let scores = [0, 0];
let activePlayer = 0;
let cuurentScore = 0;
let playGame = true;

const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  cuurentScore = 0;
  playGame = true;
  score1EL.textContent = 0;
  score2El.textContent = 0;
  current01.textContent = 0;
  current02.textContent = 0;
  dicEl.classList.remove("hidden");
  dic1El.classList.remove("hidden");
  player01EL.classList.remove("player--winner");
  player02EL.classList.remove("player--winner");
  player01EL.classList.add("player--active");
  player02EL.classList.remove("player--active");
};

// Remove the dice pic when you first open the game
const dicEl = document.querySelector(".dice"); //first pic
dicEl.classList.add("hidden");
//second pic
const dic1El = document.querySelector(".dice1");
dic1El.classList.add("hidden");

// Roll dice button- whrn the user clicks pn the roll button then the picture will apear

// current values//
const current01 = document.getElementById("current_0");
const current02 = document.getElementById("current_1");
const btnhold = document.querySelector(".btn--hold");
// const btnNew= document.querySelector("btn--new");

document.querySelector(".player01").classList.add("player--active");
document.querySelector(".player02").classList.remove("player--active");
// values and scores+ When hitting double 6= reset and switch player.

const btnRoll = document.querySelector(".btn--roll");

btnRoll.addEventListener("click", function () {
  if (playGame) {
    dicEl.classList.remove("hidden");
    dic1El.classList.remove("hidden");

    const dice = Math.floor(Math.random() * 6) + 1;
    const dice1 = Math.floor(Math.random() * 6) + 1;

    dicEl.src = `./assets/dice-${dice}.png`;
    dic1El.src = `./assets/dice-${dice1}.png`;

    if (dice === 6 && dice1 === 6) {
      // If both dice are 6, reset the score and **Switch layer**
      document.getElementById(`current_${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      cuurentScore = 0;
      player01EL.classList.toggle("player--active");
      player02EL.classList.toggle("player--active");
    } else {
      // Otherwise, add both dice to the current score
      cuurentScore += dice + dice1;
      document.getElementById(`current_${activePlayer}`).textContent =
        cuurentScore;
    }
  }
});

//btn events- current hold value

btnhold.addEventListener("click", function () {
  if (playGame) {
    scores[activePlayer] += cuurentScore;
    document.getElementById(`score_${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playGame = false;

      document
        .querySelector(`.player0${activePlayer + 1}`)
        .classList.add("player--winner");

      dicEl.classList.add("hidden"); //Hiding the dice images whenever there's a winner.
      dic1El.classList.add("hidden");
    } else {
      //switch to the other player
    }
  }
});

const btnNew = document.querySelector(".btn--new");
init();
btnNew.addEventListener("click", init);

function toggleMute() {
  var music = document.getElementById("bgMusic");
  var muteBtn = document.getElementById("muteButton");

  music.muted = !music.muted; // Toggle between muted and unmuted
  muteBtn.src = music.muted
    ? "./assets/mute icon.png"
    : "./assets/unmute icon.png"; // Change the button image mute/unmute
}
