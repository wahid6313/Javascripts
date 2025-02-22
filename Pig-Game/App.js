"use strict";

//Selecting elements----
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//intial state----

let scores, currentScore, activePlayer, playing;

let init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  document.getElementById(`name--0`).textContent = "PLAYER 1";
  document.getElementById(`name--1`).textContent = "PLAYER 2";
};
init();

let switching = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    //generating a random dice roll--
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //display dice---
    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${dice}.png`;

    //if dice is 1 then add else switch another player--
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switching();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //add to current player score to active player--

    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if player score the >=100--
    //finish the game--
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document.getElementById(`name--${activePlayer}`).textContent = "🏆 Win";
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }

    //switch another player---
    switching();
  }
});

btnNew.addEventListener("click", init);
