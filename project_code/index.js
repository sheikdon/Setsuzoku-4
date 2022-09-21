//welcome screen
window.onload = function() {
}
window.onresize = function() {
    gameLoop.onresize();
}
//sounds
const gameOverSound = new Audio("sounds/game_over.wav");
const clickSound = new Audio("sounds/click.wav");

circles.forEach((circle) => circle.addEventListener("click", gridClick));
//labeling pieces: use let variable since const messes it up.
const circles = document.querySelector(".circle")
var playerOne = "black";
let playerTwo = "white";
Let startPlayer = "playerOne";

//labeling board commands
let gameOver = false;
let board;
let rows = 6;
let columns = 7;
let currentColumns = []
