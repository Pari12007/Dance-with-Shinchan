class Shinchan {
  constructor() {
  
    this.gameScreen = document.getElementById("game-screen");
    
  }

}

class ShinchanDance {
  constructor() {
    this.anger = 0;
    this.angerTimer = null;
    this.keys = ["A", "S", "D", "W"];
    this.currentKey = "";
    this.danceFrames = [
      "./shinchan2-2.png",
      "./shinchan2-3.png",
      "./shinchan2-4.png",
      "./shinchan2-5.png",
      "./shinchan2-6.png",
    ];
    this.frameIndex = 0;
    this.gameScreen = document.getElementById("game-screen");
    this.angerLevel = document.getElementById("anger-level");
    this.gameScreenImg = document.getElementById("shinchan-img");
    this.requiredKeyText = document.getElementById("requiredKey");
    this.score = 0;
    this.scoreElement = document.getElementById("score");
  }

  newKey() {
    this.currentKey = this.keys[Math.floor(Math.random() * this.keys.length)];
    this.requiredKeyText.innerText = "Press: " + this.currentKey;
  }

  increaseAnger() {
    this.anger += 10;
    if (this.anger > 100) this.anger = 100;
    this.angerLevel.style.width = this.anger + "%";
    this.checkGameOver();
  }

  decreaseAnger() {
    this.anger -= 15;
    if (this.anger < 0) this.anger = 0;
    this.angerLevel.style.width = this.anger + "%";
  }

  dance() {
    this.frameIndex = (this.frameIndex + 1) % this.danceFrames.length;
    this.gameScreenImg.src = this.danceFrames[this.frameIndex];
  }

  checkGameOver() {
    if (this.anger >= 100) {
      clearInterval(this.angerTimer);
      document.getElementById("game-container").style.display = "none";
      document.getElementById("game-over").style.display = "block";
      document.removeEventListener("keydown", this.keyHandler);
    }
  }

  winGame() {
    clearInterval(this.angerTimer);
    document.getElementById("game-container").style.display = "none";
    document.getElementById("game-over").style.display="none";
    document.getElementById("game-win").style.display = "block";
    document.removeEventListener("keydown", this.keyHandler);
    confetti();
  }
}

const game = new ShinchanDance();

document.addEventListener("keydown", (event) => {
  console.log("You pressed:", event.key.toUpperCase());
  if (event.key.toUpperCase() === game.currentKey) {
    game.score++;
    game.scoreElement.innerText = game.score;
    game.dance();
    game.decreaseAnger();
    game.newKey();
    
    if(game.score >= 10){
    game.winGame();
    }

  } else {
    game.increaseAnger();
  }
});

game.newKey();

  game.angerTimer = setInterval(() => {
    game.increaseAnger();
    game.newKey();
  }, 2000); 

  