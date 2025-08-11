//intro  anime
const intro = document.getElementById("intro");
const lobby = document.getElementById("lobby");
setTimeout(() => {
  intro.style.display = "none";
  lobby.style.display = "flex";
}, 1700);

//weapon selection
const cards = document.querySelectorAll(".card");
let weaponSelected;
cards.forEach((card) => {
  card.addEventListener("click", function (event) {
    cards.forEach((c) => (c.style.border = "none"));
    card.style.border = "3px solid blue";
    weaponSelected = event.target.src;
    console.log(weaponSelected);
  });
});

//random image
let randIndex = () => {
  return Math.floor(Math.random() * 3);
};
const imageArray = [
  "http://127.0.0.1:5500/public/images/rock.jpg",
  "http://127.0.0.1:5500/public/images/paper.jpg",
  "http://127.0.0.1:5500/public/images/scissor.jpg",
];
//image for compare
const rock = imageArray[0];
const paper = imageArray[1];
const scissors = imageArray[2];
//play
const play = document.getElementById("start");
const game = document.getElementById("game");
const playerImage = document.getElementById("player-image");
const comImage = document.getElementById("com-image");
const animationSec = document.querySelector(".animation-sec");
//result
const tie = document.getElementById("tie");
const win = document.getElementById("won");
const lose = document.getElementById("lose");

//score
let myScore = document.getElementById("my-score");
let comScore = document.getElementById("com-score");
let scoreMine = Number(myScore.textContent);
let scoreCom = Number(comScore.textContent);

//next
const next = document.getElementById("next");
const reSelect = document.getElementById("reselect");

play.addEventListener("click", function () {
  if (weaponSelected) {
    lobby.style.display = "none";
    game.style.display = "flex";
    playerImage.src = weaponSelected;
    setTimeout(() => {
      getResult();
    }, 2000);
  } else {
    alert("choose your weapon");
  }
});
//function for result update
function getResult() {
  animationSec.style.display = "none";
  comImage.src = imageArray[randIndex()];
  if (playerImage.src === comImage.src) {
    tie.style.display = "flex";
    next.style.display = "flex";
  } else if (
    (playerImage.src === rock && comImage.src === scissors) ||
    (playerImage.src === paper && comImage.src === rock) ||
    (playerImage.src === scissors && comImage.src === paper)
  ) {
    win.style.display = "flex";
    next.style.display = "flex";
    scoreMine += 1;
    myScore.textContent = scoreMine;
  } else {
    lose.style.display = "flex";
    scoreCom += 1;
    comScore.textContent = scoreCom;
    next.style.display = "flex";
  }
  return;
}
const arena = document.getElementById("arena");
next.addEventListener("click", function () {
  tie.style.display = "none";
  win.style.display = "none";
  lose.style.display = "none";
  arena.style.display = "none";
  reSelect.style.display = "block";
  next.style.display = "none";
});

const cardsRe = document.querySelectorAll(".sec");
let weaponReSelected;
cardsRe.forEach((sec) => {
  sec.addEventListener("click", function (event) {
    cardsRe.forEach((c) => (c.style.border = "none"));
    sec.style.border = "3px solid blue";
    weaponReSelected = event.target.src;
  });
});
const strike = document.getElementById("strike");
const swordContainer = document.getElementById("sword-container");
const sword = document.getElementById("sword");
//final result screen
const victory = document.getElementById("victory");
const result = document.getElementById("result-final");
const difeat = document.getElementById("difeat");
const restart = document.querySelector(".restart");
const round = document.getElementById("round");
strike.addEventListener("click", function () {
  if (weaponReSelected) {
    //for button animation
    swordContainer.classList.add("sword-container");
    sword.classList.add("sword");
    //for arena animation
    setTimeout(() => {
      reSelect.style.display = "none";
      let rounds = Number(round.textContent) + 1;
      round.textContent = rounds;
      playerImage.src = weaponReSelected;
      arena.style.display = "flex";
      animationSec.style.display = "flex";
      comImage.style.display = "none";
      setTimeout(() => {
        comImage.style.display = "flex";
        getResult();
        if (scoreMine === 3) {
          setTimeout(() => {
            game.style.display = "none";
            result.style.display = "flex";
            victory.style.display = "flex";
            restart.style.display = "flex";
            restart.style.animation = "bounce 0.7s ease-in-out 3";
            launchVictoryConfetti();
          }, 500);
        } else if (scoreCom === 3) {
          setTimeout(() => {
            game.style.display = "none";
            difeat.style.display = "flex";
            restart.style.display = "flex";
            restart.style.animation = " fadeaway 2s ease-in";
          }, 500);
        }
        swordContainer.classList.remove("sword-container");
        sword.classList.remove("sword");
      }, 2000);
    }, 1000);
  } else {
    alert("choose your weapon");
  }
});

//for confetti
function launchVictoryConfetti() {
  // Blast confetti in multiple directions
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Burst from both sides
  confetti({
    particleCount: 70,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.6 },
  });

  confetti({
    particleCount: 70,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.6 },
  });
}
