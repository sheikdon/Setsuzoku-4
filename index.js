  const square = [...document.querySelectorAll('#square > div')];
  const turnMsg = document.querySelector('h2');
  const message = document.getElementById('message')
  const resetBtn = document.getElementById('reset')
  //event listeners
  document.getElementById('playAgain').addEventListener('click', init);
  document.getElementById('square').addEventListener('click', handleDrop);
  resetBtn.addEventListener('click', init);
  

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
    init(); // // initialisation stuff here
            //  init will help in instantiating the object properties. basically init is like a constructor call on your class.
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
  
  
  //add winning condition for vert and horz
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
        const squares = document.getElementById(`m${columns}k${rows}`);
        squares.style.backgroundColor = COLORS[cellVal];
      });
    });
    renderSquare();
  
    turnMsg.innerText = `${COLORS[turn]}`;
  }
  function renderSquare() {
    square.forEach(function(square, columns) {
      square.style.visibility = board[columns].includes(0) ? 'visible' : 'hidden';
    });
  }
  
  function renderWinner(player) {
    message.innerHTML = `The winner is ${COLORS[player]}!`;
    resetBtn.style.visibility = 'visible';
    winner = true;
  }
  //add the winning combination
  //hardest piece but nailed it thanks to tic tac toe
  function handleDrop(evt) {
    if (winner) return;
    const columns = square.indexOf(evt.target);
    if (columns === -1) return;
    const colArr = board[columns];
    const rows = colArr.indexOf(0);
    colArr[rows] = turn;
    getWinner(columns, rows);
    turn *= -1;
    render();
    getWinner(columns, rows)
    arr.push(1)
    tieCheck();
  }
  
  function getWinner(columns, rows) {
    return checkVertWin(columns, rows)
      || checkHorzWin(columns, rows);
  }
  
  function tieCheck() {
  
    if (arr.length === 42) {
        reset.style.visibility = 'visible';
        message.innerHTML = 'It is a Tie!'
    };
  }
  
  