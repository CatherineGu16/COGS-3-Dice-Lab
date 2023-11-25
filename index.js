// note: all of the variables are global variables
var die1, die2, dieSum, balance, change, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0; // initial value
change = 0;
var die1Image = new Image();
var die2Image = new Image();
let timeout;

function rollDice() {
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  dieSum = die1 + die2;

  // set the dice images based on the roll
  die1Image = document.querySelectorAll("img")[0];
  die1Name = "images/dice" + die1 + ".png";
  die1Image.setAttribute("src", die1Name);

  die2Image = document.querySelectorAll("img")[1];
  die2Name = "images/dice" + die2 + ".png";
  die2Image.setAttribute("src", die2Name);
}

function whoWon() {
  // in h3 report how much money was won or lost and the balance
  if (dieSum <= 5) {
    outcome = "You lose, please pay me " + 5 + " dollars.";
    balance -= 5;
    change += "-$5\n";
  } else if (dieSum >= 9) {
    outcome = "You win, I pay you " + 5 + " dollars.";
    balance += 5;
    change += "+$5\n";
    //document.querySelector("h4").innerHTML = "Change in balance: -$" + 5;
  } else {
    outcome = "It's a draw, nobody wins or loses.";
    change += "+$0\n";
    //document.querySelector("h4").innerHTML = "Change in balance: +$" + 0;
  }
  // Report the outcome:
  banner = die1 + " + " + die2 + " is: " + dieSum;
  document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
  document.querySelector("h4").innerHTML = "Change: " + change + "\n\nCurrent balance: $" + balance;
}

function getNumPlays() {
  numRolls = prompt("Please enter the number of times you wish to roll:");
  for (i = 0; i < numRolls; i++) {
    myStopFunction(i);
  }
}

function myStopFunction(i) {
  setTimeout(function () {
      letsPlay();
    }, 1000 * i);

}

function letsPlay() {
  rollDice();
  whoWon();
}
