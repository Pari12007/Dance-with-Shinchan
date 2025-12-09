window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = this.document.getElementById("restart-button");
  const playAgainButton = this.document.getElementById("play-again-button");



  let ourGame;
  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    window.location.reload();
  });

  playAgainButton.addEventListener("click", function () {
    window.location.reload();
  });

  function startGame() {
    console.log("start game");
    ourGame = new Game();
    ourGame.start();
    // setupKeyListener();

  }

};
