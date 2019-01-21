const gameBoardArray = document.getElementsByClassName('square bottom right');
const newGameBtn = document.getElementById('newGame');
const players =  ["X", "O"];

let playerO = true;
let gameOver = false;
let count = 0
let playerstatus = document.getElementById("playerstatus");
let gameState = true;

//Array
var box = [document.getElementById('box1').innerHTML, document.getElementById('box2').innerHTML, document.getElementById('box3').innerHTML,
document.getElementById('box4').innerHTML, document.getElementById('box5').innerHTML, document.getElementById('box6').innerHTML,
document.getElementById('box7').innerHTML, document.getElementById('box8').innerHTML, document.getElementById('box9').innerHTML]

// console.log(box);

function checkWinnings() {
  // console.log(box[0]);
  for(let i = 0; i < players.length; i++){
    if ((box[0] == players[i] && box[1] == players[i] && box[2] == players[i]) ||
      (box[3] == players[i] && box[4] == players[i] && box[5] == players[i]) ||
      (box[6] == players[i] && box[7] == players[i] && box[8] == players[i]) ||
      (box[0] == players[i] && box[3] == players[i] && box[6] == players[i]) ||
      (box[1] == players[i] && box[4] == players[i] && box[7] == players[i]) ||
      (box[2] == players[i] && box[5] == players[i] && box[8] == players[i]) ||
      (box[2] == players[i] && box[4] == players[i] && box[6] == players[i]) ||
      (box[0] == players[i] && box[4] == players[i] && box[8] == players[i]))
      {
        document.getElementById('playerstatus').innerHTML = "Player " + players[i] + " Wins!"; 
        gameState = false;      
      }
    }
  }
function newGame() {
  document.getElementById("reset");
}

function startGame() {
  document.turn = "O";
  setMessage(document.turn + '..gets to start');
}

function setMessage(msg) {
 document.getElementById('message').innerText = msg;
}

function fillArray(symbol, position) {
  box[position] = symbol;
  // console.log(box);
}


for (let i = 0; i < gameBoardArray.length; i++) {
    let gameBoard = gameBoardArray[i];
    gameBoard.onclick = function (event){
        if (gameState) {
            if (gameBoard.innerHTML != "") {
              window.alert('This box is taken')
            }

            else if(playerO) {
              gameBoard.innerHTML = 'O';
              playerO =! playerO;
              position = i;
              fillArray('O', position);
              checkWinnings(players[i] = "O");
              count++;
              if (count >= 9) {
                gameState = false;
                alert('This is a Tie!');
              }
              console.log(count);
            }
            else if(playerO == false) {
              gameBoard.innerHTML = 'X'
              playerO =! playerO;
              position = i;
              fillArray('X', position);
              checkWinnings(players[i] = "X");
              count++;
            if (count >= 9) {
              gameState = false;
              alert('This is a Tie!');
            }
              console.log(count);
            }
        }
        else {
          alert('Game is already over');
        }
    }
}
  
// if position taken, nothing happen
// else if position not taken, player 1 fill
  // check player 1 win
// else if position not taken, player 2 fill
  // check player 2 win
// when new game button is clicked, let gameState = true
// when game is won or tie, gameState = false