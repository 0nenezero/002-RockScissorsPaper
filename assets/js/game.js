const choice = ["가위", "바위", "보"];
const score = {
  user: 0,
  computer: 0,
};
const game = {
  round: 1,
  totalRound: 10,
  timer: null,
  time: 6,
};

const $gameCont = document.getElementById("game-cont");

function startTimer() {
  game.timer = setInterval(() => {
    game.time--;
    renderTimer();
    if (game.time < 0) {
      clearInterval(game.timer);
      const computerChoice = choice[Math.floor(Math.random() * choice.length)];
      renderChoice(null, computerChoice);
      score.computer++;
      game.round++;
      renderScore();
      renderCount();
      game.time = 5;
      if (game.round > game.totalRound) {
        renderResult();
      } else {
        resetTimer();
      }
    }
  }, 1000);
}
function resetTimer() {
  clearInterval(game.timer);
  game.time = 5;
  renderTimer();
  startTimer();
}

const $timer = $gameCont.querySelector(".time-cont span");
function renderTimer() {
  $timer.innerText = game.time;
}

const $choiceBtns = $gameCont.querySelectorAll(".choice-btn");
$choiceBtns.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    playGame(e.target.innerText);
  });
});

function playGame(userChoice) {
  if (game.round > game.totalRound) return;

  clearInterval(game.timer);

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
  } else {
    resetTimer();
  }
}

const $userChoice = $gameCont.querySelector(".user .choice");
const $computerChoice = $gameCont.querySelector(".computer .choice");
function renderChoice(user, computer) {
  $userChoice.innerText = user || "-";
  $computerChoice.innerText = computer || "-";
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
  startTimer();
}
initGame();
