const choice = ["가위", "바위", "보"];
const score = {
  user: 0,
  computer: 0,
};
const game = {
  round: 1,
  totalRound: 10,
};

const $gameCont = document.getElementById("game-cont");

const $choiceBtns = $gameCont.querySelectorAll(".choice-btn");
$choiceBtns.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    playGame(e.target.innerText);
  });
});

function playGame(userChoice) {
  if (game.round > game.totalRound) return;

  const computerChoice = choice[Math.floor(Math.random() * choice.length)];
  renderChoice(userChoice, computerChoice);
  if (computerChoice === userChoice) {
    console.log("무승부");
  } else if (
    (computerChoice === "가위" && userChoice === "바위") ||
    (computerChoice === "바위" && userChoice === "보") ||
    (computerChoice === "보" && userChoice === "가위")
  ) {
    console.log("you win");
    score.user++;
  } else {
    console.log("computer win");
    score.computer++;
  }
  renderScore();
  renderCount();
  game.round++;
  if (game.round > game.totalRound) {
    renderResult();
  }
}

const $userChoice = $gameCont.querySelector(".user .choice");
const $computerChoice = $gameCont.querySelector(".computer .choice");
function renderChoice(user, computer) {
  $userChoice.innerText = user;
  $computerChoice.innerText = computer;
}

const $userPlayScore = $gameCont.querySelector(".user .score");
const $computerPlayScore = $gameCont.querySelector(".computer .score");
function renderScore() {
  $userPlayScore.innerText = score.user;
  $computerPlayScore.innerText = score.computer;
}

const $gameCount = $gameCont.querySelector(".round-cont span");
function renderCount() {
  $gameCount.innerText = game.totalRound - game.round;
}

function initGame() {
  renderScore();
  renderCount();
}
initGame();
