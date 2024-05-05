const choice = ["가위", "바위", "보"];
const score = {
  user: 0,
  computer: 0,
};
const game = {
  round: 1,
  totalRound: 10,
};

const $choiceBtns = document.querySelectorAll(".choice-btn");
$choiceBtns.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
});

const $round = document.querySelector(".round-cont span");
function renderRound() {
  $round.textContent = game.totalRound - game.round + 1;
}
renderRound();
