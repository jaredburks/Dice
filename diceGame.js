"use strict"
//Dice game where you guess the number on the dice thats rolled

//Game starts:Pick one of the 5 dice to play with
//Dice rolls: you get a certain amount of guesses based on the dice's sides
//If you guess right, you win.
//If you guess wrong, try again.
//Run out of guesses, you lose.

function startGame(){
	var four = "Enter 4 for 4-sided Dice - You get 2 guesses"
	var six = "Enter 6 for 6-sided Dice - You get 3 guesses"
	var eight = "Enter 8 for 8-sided Dice - You get 4 guesses"
	var ten = "Enter 10 for 10-sided Dice - You get 5 guesses"
	var twelve = "Enter 12 for 12-sided Dice - You get 6 guesses"
	var twenty = "Enter 20 for 20-sided Dice - You get 10 guesses"
	var option = parseInt(prompt("Guessing Game! Please select which dice you want to play with:\n\r"+four+"\n\r"+six+"\n\r"+eight+"\n\r"+ten+"\n\r"+twelve+"\n\r"+twenty+""));

	if(option === 4 || option === 6 || option === 8 || option === 10 || option === 12 || option === 20){
		diceSound();
		disableButton();
		setTimeout(function(){playDice(option)}, 2000)
	}
	else{
		location.reload();
	}
}

function playDice(diceSides){
	//dice needs to roll and have value saved
	//need to have user guess the number and keep track of guesses
	//for(var i = 1; i <= 2; i++ )
		//if(playerGuess === dice value) you win
		//else try again
	//you lose guy
	var diceRoll = Math.floor((Math.random() * diceSides) + 1);
	var guesses = diceSides / 2;
	var note = console.log("You've selected the "+diceSides+" sided dice.");

	//console.log(dice);//Gives answer

	for(var i = 1; i <= guesses; i++){
		var playerGuess = parseInt(prompt("Guess a number between 1 & "+diceSides+":"));
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
	losePic.setAttribute("src", "images/youlose.gif");
	losePic.setAttribute("width", "400");
	losePic.setAttribute("height", "300");
	losePic.setAttribute("alt", "Guy Smashing PC");
	document.body.appendChild(losePic);
	loseSound();
	enableButton();
}

function displayWin(){
	var winPic = document.createElement("IMG");
	winPic.setAttribute("src", "images/youwin.gif");
	winPic.setAttribute("width", "400");
	winPic.setAttribute("height", "300");
	winPic.setAttribute("alt", "Guy Nodding");
	document.body.appendChild(winPic);
	winSound();
	enableButton();
}

function playButton(){
	resetPage();
	setTimeout(function(){startGame()}, 20);
}

function resetPage(){
	var body = document.getElementsByTagName("body")[0]
	document.body.removeChild(body.lastChild);
}

function diceSound(){
	var audio = new Audio('audio/diceSound.mp3');
	audio.play();
}

function winSound(){
	var audio = new Audio('audio/applause2.mp3');
	audio.play();
}

function loseSound(){
	var audio = new Audio('audio/darkness.wav');
	audio.play();
}

function disableButton(){
	document.getElementById("gameOn").disabled = true;
}

function enableButton(){
	document.getElementById("gameOn").disabled = false;
}
