class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameContainer = document.getElementById("game-container");
    this.gameOverScreeen = document.getElementById("game-over");
    this.Shinchan = new Shinchan();
    this.height = 500;
    this.width = 600;
    this.gameIsOver = false;
    this.angerTimer = null;
    this.backgroundMusic = document.getElementById("background-music");
    this.overMusic = document.getElementById("overMusic");
    this.winMusic = document.getElementById("winMusic");

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
     
    this.backgroundMusic.play();
    this.backgroundMusic.currentTime = 0;
    winMusic.pause();
    overMusic.pause();
  }

  // startGame(){
  //   backgroundMusic.play();
  //   backgroundMusic.currentTime = 0;
  //   winMusic.pause();
  //   overMusic.pause();
  // }

  // gameOverMusic(){
  //   overMusic.play();
  //   overMusic.currentTime = 0;
  //   backgroundMusic.pause();
  //   winMusic.pause();
  // }

  // gameWinMusic(){
  //   winMusic.play();
  //   winMusic.currentTime = 0;
  //   backgroundMusic.pause();
  //   overMusic.pause();
  // }
}

document.getElementById("restart-button").addEventListener("click", () => {
    window.location.reload();
});

