//Dice game where you guess the number on the dice

//Game starts:Pick one of the 5 dice to play with
//Dice rolls: you get a certain amount of guesses based on the dice's sides
//If you guess right, you win.
//If you guess wrong, try again.
//Run out of guesses, you lose.

function fourSide(){
	//dice needs to roll and have value saved
	//need to have user guess the number and keep track of guesses
	//for(var i = 1; i <= 2; i++ )
		//if(playerGuess === dice value) you win
		//else try again
	//you lose guy
	var dice = Math.floor((Math.random() * 4) + 1);
	var note = console.log("You've selected the 4 sided dice.") ;

	//console.log(dice);//Gives answer

	for(var i = 1; i <= 2; i++){
		var playerGuess = parseInt(prompt("Guess a number between 1 & 4:"));
		if(playerGuess === dice){
			console.log("Lucky Guess! You Win!");
			displayWin();
			return alert("Lucky Guess! You Win!");

		}
		else if(i < 2){
			console.log("Nope! Try Again");
			alert("Nope! Try Again");
		}
		else{
			console.log("You lose Jabroni");
			alert("You lose Jabroni");
			displayLost();
		}
	}
}
fourSide();

function displayLost(){
	var x = document.createElement("IMG");
	x.setAttribute("src", "youlose.gif");
	x.setAttribute("width", "400");
	x.setAttribute("height", "300");
	x.setAttribute("alt", "Guy Smashing PC");
	document.body.appendChild(x);
}

function displayWin(){
	var x = document.createElement("IMG");
	x.setAttribute("src", "youwin.gif");
	x.setAttribute("width", "400");
	x.setAttribute("height", "300");
	x.setAttribute("alt", "Guy Nodding");
	document.body.appendChild(x);
}