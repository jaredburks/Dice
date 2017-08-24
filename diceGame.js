//Dice game where you guess the number on the dice thats rolled

//Game starts:Pick one of the 5 dice to play with
//Dice rolls: you get a certain amount of guesses based on the dice's sides
//If you guess right, you win.
//If you guess wrong, try again.
//Run out of guesses, you lose.

function startGame(){
	var four = "Enter 1 for 4-sided Dice - You get 2 guesses"
	var six = "Enter 2 for 6-sided Dice - You get 3 guesses"
	var eight = "Enter 3 for 8-sided Dice - You get 4 guesses"
	var ten = "Enter 4 for 10-sided Dice - You get 5 guesses"
	var twelve = "Enter 5 for 12-sided Dice - You get 6 guesses"
	var twenty = "Enter 6 for 20-sided Dice - You get 10 guesses"
	var option = parseInt(prompt("Guessing Game! Please select which dice you want to play with:\n\r"+four+"\n\r"+six+"\n\r"+eight+"\n\r"+ten+"\n\r"+twelve+"\n\r"+twenty+""));

	switch(option){
		case 1:
			playFourSide();
			break;
		case 2:
			playSixSide();
			break;
		case 3:
			playEightSide();
			break;
		case 4:
			playTenSide();
			break;
		case 5:
			playTwelveSide();
			break;
		case 6:
			playTwentySide();
			break;
		default:
			location.reload();
	}
}

function playFourSide(){
	//dice needs to roll and have value saved
	//need to have user guess the number and keep track of guesses
	//for(var i = 1; i <= 2; i++ )
		//if(playerGuess === dice value) you win
		//else try again
	//you lose guy
	var diceSides = 4;
	var diceRoll = Math.floor((Math.random() * diceSides) + 1);
	var guesses = diceSides / 2;
	var note = console.log("You've selected the 4 sided dice.");

	//console.log(dice);//Gives answer

	for(var i = 1; i <= guesses; i++){
		var playerGuess = parseInt(prompt("Guess a number between 1 & 4:"));
		if(playerGuess === diceRoll){
			console.log("Lucky Guess! You Win!");
			displayWin();
			alert("Lucky Guess! You Win!");
			break;
		}
		else if(i < guesses){
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

function playSixSide(){
	var diceSides = 6;
	var diceRoll = Math.floor((Math.random() * diceSides) + 1);
	var guesses = diceSides / 2;
	var note = console.log("You've selected the 6 sided dice.");

	//console.log(dice);//Gives answer

	for(var i = 1; i <= guesses; i++){
		var playerGuess = parseInt(prompt("Guess a number between 1 & 6:"));
		if(playerGuess === diceRoll){
			console.log("Lucky Guess! You Win!");
			displayWin();
			alert("Lucky Guess! You Win!");
			break;
		}
		else if(i < guesses){
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

function playEightSide(){
	var diceSides = 8;
	var diceRoll = Math.floor((Math.random() * diceSides) + 1);
	var guesses = diceSides / 2;
	var note = console.log("You've selected the 8 sided dice.");

	//console.log(dice);//Gives answer

	for(var i = 1; i <= guesses; i++){
		var playerGuess = parseInt(prompt("Guess a number between 1 & 8:"));
		if(playerGuess === diceRoll){
			console.log("Lucky Guess! You Win!");
			displayWin();
			alert("Lucky Guess! You Win!");
			break;
		}
		else if(i < guesses){
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

function playTenSide(){
	var diceSides = 10;
	var diceRoll = Math.floor((Math.random() * diceSides) + 1);
	var guesses = diceSides / 2;
	var note = console.log("You've selected the 10 sided dice.");

	//console.log(dice);//Gives answer

	for(var i = 1; i <= guesses; i++){
		var playerGuess = parseInt(prompt("Guess a number between 1 & 10:"));
		if(playerGuess === diceRoll){
			console.log("Lucky Guess! You Win!");
			displayWin();
			alert("Lucky Guess! You Win!");
			break;
		}
		else if(i < guesses){
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

function playTwelveSide(){
	var diceSides = 12;
	var diceRoll = Math.floor((Math.random() * diceSides) + 1);
	var guesses = diceSides / 2;
	var note = console.log("You've selected the 12 sided dice.");

	//console.log(dice);//Gives answer

	for(var i = 1; i <= guesses; i++){
		var playerGuess = parseInt(prompt("Guess a number between 1 & 12:"));
		if(playerGuess === diceRoll){
			console.log("Lucky Guess! You Win!");
			displayWin();
			alert("Lucky Guess! You Win!");
			break;
		}
		else if(i < guesses){
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

function playTwentySide(){
	var diceSides = 20;
	var diceRoll = Math.floor((Math.random() * diceSides) + 1);
	var guesses = diceSides / 2;
	var note = console.log("You've selected the 20 sided dice.");

	//console.log(dice);//Gives answer

	for(var i = 1; i <= guesses; i++){
		var playerGuess = parseInt(prompt("Guess a number between 1 & 20:"));
		if(playerGuess === diceRoll){
			console.log("Lucky Guess! You Win!");
			displayWin();
			alert("Lucky Guess! You Win!");
			break;
		}
		else if(i < guesses){
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

function displayLost(){
	var losePic = document.createElement("IMG");
	losePic.setAttribute("src", "youlose.gif");
	losePic.setAttribute("width", "400");
	losePic.setAttribute("height", "300");
	losePic.setAttribute("alt", "Guy Smashing PC");
	document.body.appendChild(losePic);
}

function displayWin(){
	var winPic = document.createElement("IMG");
	winPic.setAttribute("src", "youwin.gif");
	winPic.setAttribute("width", "400");
	winPic.setAttribute("height", "300");
	winPic.setAttribute("alt", "Guy Nodding");
	document.body.appendChild(winPic);
}

function playButton(){
	//Create button
	var button = document.createElement("button");
	button.innerHTML = "Play Game";
	//Set button in body
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(button);
	//Button Clears Body elements(gif) then Starts Game
	button.addEventListener("click", function(){
		resetPage();
		setTimeout(function(){startGame()}, 20);
	});
}

function resetPage(){
	var body = document.getElementsByTagName("body")[0]
	document.body.removeChild(body.lastChild);
}

playButton();