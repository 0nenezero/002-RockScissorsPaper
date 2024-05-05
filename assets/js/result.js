const $resultCont = document.getElementById("result-cont");

const $gameResult = $resultCont.querySelector(".result");
const $userScore = $resultCont.querySelector(".user .score");
const $computerScore = $resultCont.querySelector(".computer .score");

function renderResult() {
  $userScore.innerText = score.user;
  $computerScore.innerText = score.computer;
  if (score.user > score.computer) {
    $gameResult.innerText = "승리";
  } else if (score.user < score.computer) {
    $gameResult.innerText = "패배";
  } else {
    $gameResult.innerText = "무승부";
  }
}

const $retryBtn = $resultCont.querySelector(".retry-btn");
$retryBtn.addEventListener("click", () => {
  location.reload();
  // 또는 initPage()
});
