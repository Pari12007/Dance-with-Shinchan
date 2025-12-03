class Shinchan {
  constructor() {
    // this.x = 300;
    // this.y = 300;
    // this.height = 300;
    // this.width = 200;
    // // this.playerElement = document.createElement("img");
    this.gameScreen = document.getElementById("game-screen");
    // this.playerElement.src = "./shinchan2-1.png";
    // this.playerElement.style.left = "200px";
    // this.playerElement.style.top = "160px";
    // this.playerElement.style.height = `${this.height}px`;
    // this.playerElement.style.width = `${this.width}px`;
    // this.playerElement.style.position = "absolute";
    // this.gameScreen.appendChild(this.playerElement);
    console.log(this.playerElement);
    // this.frames = [
    //   "./shinchan2-1.png",
    //   "./shinchan2-2.png",
    //   "./shinchan2-3.png",
    //   "./shinchan2-4.png",
    //   "./shinchan2-5.png",
    //   "./shinchan2-6.png",
    // ];
    this.currentFrame = 0;
    this.danceInterval = null;
  }

  //   startDance() {
  //     if (this.danceInterval) return; //avoid duplicates

  //     this.danceInterval = setInterval(() => {
  //       this.currentFrame = (this.currentFrame + 1) % this.frames.length;
  //       this.playerElement.src = this.frames[this.currentFrame];
  //     }, 250); //speed of dance
  //   }

  //   stopDance() {
  //     clearInterval(this.danceInterval);
  //     this.danceInterval = null;
}

class ShinchanDance {
  constructor() {
    this.anger = 0;
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
    this.angerLevel = document.getElementById("anger-level");
    this.gameScreen = document.getElementById("shinchan-img");
    this.requiredKeyText = document.getElementById("requiredKey");
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
    this.gameScreen.src = this.danceFrames[this.frameIndex];
  }

  checkGameOver() {
    if (this.anger >= 100) {
      clearInterval(game.angerTimer);
      document.getElementById("game-container").style.display = "none";
      document.getElementById("game-over").style.display = "block";
      document.removeEventListener("keydown", this.keyHandler);
      alert("Game Over! Shinchan is too angry!");
      // Reset game or implement game over logic
    }
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
  } else {
    game.increaseAnger();
  }
});

game.newKey();
