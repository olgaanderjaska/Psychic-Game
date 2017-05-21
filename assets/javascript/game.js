// Computer picks random letters for an array
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var computerInput = letters[Math.floor(Math.random() * letters.length)];
console.log(computerInput);
// setting game variables 
// starting # of wins, starting # of losses, starting # of chances
 var userWins = 0;
 var userLosses = 0;
 var userChances = 10;
 var wrongLetters = [];


  function restartGame() {
 	userChances = 10;
 	console.log(userChances);
 	wrongLetters.length = 0;
 	console.log(wrongLetters) 
 	guessesSoFar.textContent = "Your guesses so far: " + wrongLetters;

 };



// when a key is pressed starting following function 
document.onkeyup = function(event) {
// set userInput to upper case and userImput is = to button that was pressed 
	var userInput = event.key.toUpperCase();
	console.log(userInput);

	var wins = document.getElementById("wins");
	var losses = document.getElementById("losses");
	var guessesLeft = document.getElementById("guessesLeft");
	var guessesSoFar = document.getElementById("guessesSoFar");

if (letters.indexOf(userInput) != -1){

 // if our guess = to computer choise we win
	if (computerInput === userInput) {
		console.log('you win');


// score goes up by 1 		
		userWins = userWins + 1; //userWins++
		console.log("Wins: " + userWins);
		wins.textContent = "Wins: " + userWins;
		restartGame();
		computerInput = letters[Math.floor(Math.random() * letters.length)];

		}
// our guess is not = to the computer choice our chanses decrease by 1		
	else {
        userChances = userChances - 1;
        console.log("Chances: " + userChances);
        guessesLeft.textContent = "Guesses left: " + userChances;
        wrongLetters.push(userInput);
        console.log(wrongLetters);
        guessesSoFar.textContent = "Your guesses so far: " + wrongLetters;
	}	
 // if our chances = 0, than we lose the game and our losses go up by 1   
    if (userChances === 0)  {
    	 userChances = 10;
    	 guessesLeft.textContent = "Guesses left: " + userChances;
    	 userLosses = userLosses + 1;
    	 losses.textContent = "Losses: " + userLosses;
    	 console.log("Losses: " + userLosses);
    	 restartGame();
    }
 }


}




