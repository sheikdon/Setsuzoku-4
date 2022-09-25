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
//Vr 1
  // const square = document.querySelector(".square")
  // const boards = document.querySelector(".board")
  // const turnMsg = document.querySelector('h2');
  // const message = document.getElementById('message');
  // const resetBtn = document.getElementById('reset');
  // })
  // console.log()})
  //VR 2
  //pull from html
  const square = [...document.querySelectorAll('#square > div')];
  const turnMsg = document.querySelector('h2');
  const message = document.getElementById('message')
  const resetBtn = document.getElementById('reset')
  //event listeners
  document.getElementById('playAgain').addEventListener('click', init);
  document.getElementById('square').addEventListener('click', handleDrop);
  resetBtn.addEventListener('click', init);
  
  //it initializes the website layout after DOM loads
  // const reset = (parameter) => {
  // console.log("Inside our reset callback function, the parameter passed to function",parameter)

  // }
  // resetBtn.addEventListener('click', reset);
  //Labeling squares and player:
  //vr1
  // const playerOne = "black";
  // const playerTwo = "white";
  // let startPlayer = "playerOne";
  // console.log('click', playerOne)

  //vr2: using index made it much easier to switch from player 1 to 2 and leave the empty pieces gray
  const COLORS = {
    '0': 'Gray',
    '1': 'White',
    '-1': 'Black',
  };
  
  
  //labeling board commands
let board;  
let turn;  
let winner;
let arr;
  // let winner;
  // let tie;
 
  // let currentColumns = [];
  
  //loads game up with event listen
  //source: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
  // window.onload = function() {
  //     setGame();}
  
   //setting up grid and board up
  //  function setGame() {
    init();
      //having the 0s makes the board empty i think
      //to access a board index [x]"0-6"[y]"0-5"
function init() {
      board = [
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0],  
        [0, 0, 0, 0, 0, 0],  
        [0, 0, 0, 0, 0, 0],  
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      turn = 1;
      arr=[]; //allows me to use the indexs in the board
      render(); //render() function takes two arguments, HTML code and an HTML element. 
                //The purpose of the function is to display the specified HTML code inside the specified HTML element.
      winner = null;
    }
  
  //we are going to add onclick event listeners to the appropiate to the right html elements and give them callback functions that let us play the game.
  //these callback functions will take in a parameter and use that parameter to implement our appropiate game logic. then it will trigger a change in thr html/css (the dom)
  //example: (event) => {
  // console.log(event.target.id) where am i
  // now that i know where i am, i need to do a thing. do ir to board
  // run game checks
  // change the dom so a user knows what happen and can play 
  // }
  
  
  //add winning condition
  function checkVertWin(columns, rows) {
    const player = board[columns][rows];
    let count = 1; 
    let gameFlow = rows + 1; 
    while (gameFlow < board[gameFlow].length && board[columns][gameFlow] === player) {
      count++;
      gameFlow++;
    }
    gameFlow = rows - 1; 
    while (gameFlow >= 0 && board[columns][gameFlow] === player) {
      count++;
      gameFlow--;
    }
    return count === 4 ? renderWinner(player): null; 
  }
  
  function checkHorzWin(columns, rows) {
    const player = board[columns][rows];
    let count = 1; 
    let gameFlow = columns + 1;
    while (gameFlow < board.length && board[gameFlow][rows] === player) {
      count++;
      gameFlow++;
    }
    gameFlow = columns - 1; 
    while (gameFlow >= 0 && board[gameFlow][rows] === player) {
      count++;
      gameFlow--;
    }
    return count >= 4 ? renderWinner(player): null;
  }
  
  //allowing columns adn rows to work
  //example setup: var render() = function (template, node) {node.innerHTML = template;};
  //https://gomakethings.com/rendering-content-with-vanilla-javascript/
  function render() {
    board.forEach(function(colArr, columns) { 
        console.log(colArr);
          colArr.forEach(function(cellVal, rows) {
          console.log(columns);
          console.log(rows);
        const cellEl = document.getElementById(`m${columns}k${rows}`);
        cellEl.style.backgroundColor = COLORS[cellVal];
      });
    });
    renderMarkers();
  
    turnMsg.innerText = `${COLORS[turn]}`;
  }
  function renderMarkers() {
    square.forEach(function(square, columns) {
      square.style.visibility = board[columns].includes(0) ? 'visible' : 'hidden';
    });
  }
  
  function renderWinner(player) {
    message.innerHTML = `The winner is ${COLORS[player]}!`;
    resetBtn.style.visibility = 'visible';
    winner = true;
  }


  //add lose condition
  //add tie condition
  //add the winning combination
    
  