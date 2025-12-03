class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameContainer = document.getElementById("game-container");
    this.gameOverScreeen = document.getElementById("game-over");
    this.Shinchan = new Shinchan(250, 175, 150, 100);
    this.height = 500;
    this.width = 600;
    this.score = 0;
    this.scoreElement = document.getElementById("score");
    this.gameIsOver = false;
    this.angerTimer = null;

    // this.keys = ["W", "A", "S", "D"]; //keys for the game
    // this.keyBoxes = {
    //   W: document.getElementById("key-top"),
    //   A: document.getElementById("key-left"),
    //   S: document.getElementById("key-bottom"),
    //   D: document.getElementById("key-right"),
    // };
    // this.currentKey = null;
  }

  //TO START THE GAME SCREEN
  start() {
    //hide the start scrren and open the game screen
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
     this.gameContainer.style.display = "block";
   
    
    //set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`; 
   
    this.angerTimer = setInterval(() => {
    this.ShinchanDance.increaseAnger();
    this.ShinchanDance.newKey();
  }, 2000); 
    
    // this.Shinchan.styleElement();
    // this.Shinchan.startDance(); //START THE DANCE
   
    // this.listenToKeyPress();
    
    // this.generateRandomKey();
    
  }
}

document.getElementById("restart-button").addEventListener("click", () => {
    window.location.reload();
});

