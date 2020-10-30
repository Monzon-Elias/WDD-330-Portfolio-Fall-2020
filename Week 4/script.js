const board = document.querySelector(".board");
const board_item = document.querySelector(".boardItem");

const player1 = "X";
const player2 = "0";
let player = player1

function drawGame(event) {
  console.log(event.target) //"The target event property returns the element that triggered the event." (W3School)
  event.target.innerHTML = player
  if (player === player1) {//To switch players on each even listener triggering
    player = player2
  } else {
    player = player1
  }
}

function resetGame() { Array.from(board.children).forEach(box => { box.innerHTML = '' }) };
//With foreach it needs to transform the board.children into an array,
// with the Array.from method, if not, does not work

// function resetGame() {
//     for (const box of board.children) {
//         box.innerHTML = ''
//     }
// }
//This is the reset function version using a for with a "of" keyword inside. In this case,
//it's not necessary to
board.addEventListener("touchup", drawGame);
restart.addEventListener('touchup', resetGame);
board.addEventListener("mouseup", drawGame);
restart.addEventListener('mouseup', resetGame);

//=================================================================   
//====================== OBJECTS & CLASSES ======================
//=================================================================
const year = new Date().getFullYear();
const send = document.getElementById("createP");
const display = document.getElementById('person');

pname = document.getElementById("name").value;
pyoB = document.getElementById("birth").value;
pjob = document.getElementById("job").value;

class Person {
  constructor(name, yoB, job) {
    this.name = name;
    this.yoB = yoB;
    this.job = job;
  }

  age() { return (year - this.yoB); }

  displayOnScreen(newP) { display.innerHTML = newP; };
}

newPerson = new Person(pname, pyoB, pjob);
console.log(newPerson.name);
newPerson.displayOnScreen(newPerson.name);







