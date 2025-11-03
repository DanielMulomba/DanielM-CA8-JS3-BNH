// Bear Ninja Hunter Game - Phase 3
// Author: Daniel Mulomba
// CA8

// Declare and initialize all variables at the top
let playerName = "";
let userChoice = "";
let computerChoice = "";
let winnerMessage = "";
let playAgain = true;

// Store game choice options in an array
const choices = ["Bear", "Ninja", "Hunter"];

// Welcome the player
playerName = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started:");

// Trim and validate the name (important — fixes the problem with using playerName later)
if (playerName !== null) {
  playerName = playerName.trim();
}

if (!playerName) {
  // playerName is null or empty after trimming
  alert("Invalid Entry Please Press F5 to play Again.");
} else {
  alert("Hi " + playerName + "! Let's play!!");

  // Main gameplay loop
  while (playAgain) {

    // Get player choice (use template literal and ensure playerName is trimmed)
    userChoice = prompt(`${playerName}, Who are you: Bear, Ninja, or Hunter?`);

    // Handle cancel or empty input
    if (userChoice === null) {
      alert("Game cancelled. Thanks for playing!");
      break;
    }

    userChoice = userChoice.trim().toLowerCase();

    // Validate input
    if (userChoice !== "bear" && userChoice !== "ninja" && userChoice !== "hunter") {
      alert("Invalid Entry Please Press F5 to play Again.");
      continue;
    }

    // Forced case for uniform comparison
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

    // Generate computer choice randomly using array index
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];

    // Compare player and computer choices
    if (userChoice === computerChoice) {
      winnerMessage = "It's a tie!";
    } 
    else if (
      (userChoice === "Bear" && computerChoice === "Ninja") ||
      (userChoice === "Ninja" && computerChoice === "Hunter") ||
      (userChoice === "Hunter" && computerChoice === "Bear")
    ) {
      winnerMessage = "You win!!";
    } 
    else {
      winnerMessage = "Computer wins!!";
    }

    // Display game result
    alert(
      playerName + ", you picked " + userChoice +
      ".\nComputer picked " + computerChoice +
      ".\n" + winnerMessage
    );

    // Output results to HTML
    document.getElementById("welcome").innerHTML = "Welcome " + playerName + "!";
    document.getElementById("user-choice").innerHTML =
      playerName + " chose " + userChoice + ". The computer chose " + computerChoice + ".";
    document.getElementById("game-result").innerHTML = winnerMessage;

    // Output results to console as well
    console.log("Player: " + userChoice + " | Computer: " + computerChoice + " → " + winnerMessage);

    // Ask to play again — trim and normalize response
    const responseRaw = prompt(playerName + ", would you like to play again? Yes or No?");
    if (responseRaw === null) {
      playAgain = false;
      alert("Thanks for playing, " + playerName + "! Goodbye!");
      break;
    }
    const response = responseRaw.trim().toLowerCase();
    if (response !== "yes") {
      playAgain = false;
      alert("Thanks for playing, " + playerName + "! Goodbye!");
    }
    // else loop continues
  }

}
