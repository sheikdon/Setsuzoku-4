// //welcome screen
// window.onload = function() {
// }
// window.onresize = function() {
//     gameLoop.onresize();
// }
// //sounds
// const gameOverSound = new Audio("sounds/game_over.wav");
// const clickSound = new Audio("sounds/click.wav");
// circles.forEach((circle) => circle.addEventListener("click", gridClick));
//VR1
// labeling pieces: use const variable since let messes it up document grabbers.
// document.addEventListener('DOMContentLoaded', () => {
const square = document.querySelector(".square")
const boards = document.querySelector(".board")
const turnMsg = document.querySelector('h2');
const message = document.getElementById('message');
const resetBtn = document.getElementById('reset');
// })
// console.log()})
//it initializes the website layout after DOM loads
const reset = (parameter) => {
console.log("Inside our reset callback function, the parameter passed to function",parameter)

}
resetBtn.addEventListener('click', reset);

const playerOne = "black";
const playerTwo = "white";
let startPlayer = "playerOne";
// console.log('click', playerOne)


//labeling board commands
let gameOver = false;
let board;
// let winner;
// let tie;
let rows = 6;
let columns = 7;
// let currentColumns = [];

//loads game up with event listen
//source: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// window.onload = function() {
//     setGame();}

 //setting up grid and board up
 function setGame() {
    //having the 0s makes the board empty i think
    //to access a board index [x]"0-6"[y]"0-5"
    board = [
      [0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0],  
      [0, 0, 0, 0, 0, 0],  
      [0, 0, 0, 0, 0, 0],  
      [0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

//we are going to add onclick event listeners to the appropiate to the right html elements and give them callback functions that let us play the game.
//these callback functions will take in a parameter and use that parameter to implement our appropiate game logic. then it will trigger a change in thr html/css (the dom)
//example: (event) => {
// console.log(event.target.id) where am i
// now that i know where i am, i need to do a thing. do ir to board
// run game checks
// change the dom so a user knows what happen and can play 
// }


//add winning condition
//add lose condition
//add tie condition
//add the winning combination
  














     
     
     
     
     



      document.addEventListener('DOMContentLoaded', function(event) {
        setGame()
      })


//vr2
// //color pieces
// const circles = document.querySelectorAll(".circles");
// const Kuro  = "X";
// const Shiroi = "O";
// let turn = Kuro;




// //board win conditions
// let board;
// let turn;
// let winner;
// let draw;

// // //labeling pieces: use let variable since const messes it up.
// const board = document.getElementById(".board")
// const gameOverArea = document.getElementById("game-over-area");
// const gameOverText = document.getElementById("game-over-text");
// // const playAgain = document.getElementById("play-again");
// // const start = document.getElementById('start');
// playAgain.addEventListener("click", startNewGame)


  /*----- cached element references -----*/
// const pieces = document.querySelector('pieces')
// const turnMsg = document.querySelector('h2');
// const message = document.getElementById('message')
// const resetBtn = document.getElementById('reset')
  
//   /*----- event listeners -----*/
// document.getElementById('playAgain').addEventListener('click', init);
// document.getElementById('pieces').addEventListener('click', handleDrop);
// resetBtn.addEventListener('click', init);


//vr3
    }
