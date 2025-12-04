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

  // function setupKeyListener() {
  //   document.addEventListener("keydown", (event) => { 
  //     const pressedKey = event.key.toUpperCase();

  //     if (pressedKey === ourGame.ShinchanDance.currentKey){
  //       ourGame.ShinchanDance.increaseScore(ourGame);
  //     }else{
  //         ourGame.ShinchanDance.increaseAnger();
  //     }
    
  //   });
  // }
};

//classes to get all the screens of game and more....



//   generateRandomKey() {
//     const index = Math.floor(Math.random() * this.keys.length);
//     this.currentKey = this.keys[index];

//     // CLEAR ALL BOXES
//     Object.values(this.keyBoxes).forEach((box) => (box.innerText = ""));

//     // PUT KEY INSIDE CORRECT BOX
//     this.keyBoxes[this.currentKey].innerText = this.currentKey;
//   }

//   listenToKeyPress() {
//     document.addEventListener("keydown", (event) => {
//       const pressedKey = event.key.toUpperCase();
//       if (pressedKey === this.currentKey) {
//         this.score += 1;
//         document.getElementById("score").innerText = this.score;
//         this.generateRandomKey();
//       } else {
//         console.log("Wrong key pressed");
//       }
//     });
//   }


// class Grass {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.element = document.createElement("img")
//         this.gameScreen = document.getElementById("game-screen")
//         this.element.src = "./shinchan-dance1.png   "

//     }
//     drawElement(){
//         this.element.style.position = "absolute";
//         this.element.style.left = this.x + "px";
//         this.element.style.top = this.y + "px";
//         this.element.style.width = this.width + "px";
//         this.element.style.height = this.height + "px";
//         this.gameScreen.appendChild(this.element);
//    }

// }


