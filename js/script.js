var randomNum;
var guesses;
var gameOver;

function play()
{
	var guess = document.getElementById("userGuess").value;
	
	if(!gameOver)
	{
		if (guesses == 0 && guess == randomNum)
			changeMessage("amazing", "You are Amazing! You Win!");
		else if (guesses == 5 && guess != randomNum)
			changeMessage("lose", "You Lose.");
		else if (guess > randomNum)
			changeMessage("high", "Your Guess Was Too High");
		else if (guess < randomNum)
			changeMessage("low", "Your Guess Was Too Low");
		else if (guess == randomNum)
			changeMessage("win", "You Win!!!");
		else
			changeMessage("error", "Please Enter A Valid Number");
	}
	else 
		document.getElementById("gameMessage").innerText = "The game is over. Press 'Play Again' to play again or close the window.";
		
	document.getElementById("userGuess").value = "";
	document.getElementById("userGuess").select();
}

function changeMessage(gameState, message)
{
	var image;
		guesses++;
		
		switch(gameState)
		{
			case "amazing":
				image = "img/amazing.jpg"; 
				break;
			case "high": 
				image = "img/tooHigh.jpg"; 
				break;
			case "low": image = 
				"img/tooLow.jpg"; 
				break;
			case "win": 
				image = "img/youWin.jpg"; 
				document.getElementById("playAgain").className = "show";
				gameOver = true;
				document.getElementById("submit").className = "hide";
				break;
			case "lose":
				image = "img/youLose.jpg"; 
				document.getElementById("playAgain").className = "show";
				gameOver = true;
				document.getElementById("submit").className = "hide";
				break;
			default: 
				image = "img/error.jpg";
				break;
		}
		
		document.getElementById("gameMessage").innerText = message;
		document.getElementById("gameImage").src = image;
		document.getElementById("score").innerText = "0" + guesses;
}

function reset()
{
	document.getElementById("playAgain").className = "hide";
	document.getElementById("submit").className = "show";
	document.getElementById("gameImage").src = "img/play.jpg";
	document.getElementById("gameMessage").innerText = "Guessing Game";
	document.getElementById("score").value = "00";
	randomNum = Math.ceil(Math.random() * 99);
	console.log(randomNum);
	guesses = 0;
	gameOver = false;
}

function playGameAgain()
{
	console.log("Game restarted")
	reset();
}
