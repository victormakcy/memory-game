var level = 0;
var score = 0;
var playersTurn = false;
var timer;
var patternArray = [];
var userChoicesArray = [];
var numPlayerClicks = 0;

$(document).ready(function() {
	/* Click the start button. */
	$("#start").click(function(){
	  $("#play-window").css("display","block");
	  $("#start-window").css("display","none");
	  level = 0;
	  displayPattern();
	});

    /* Click the quit button. */
	$("#quit").click(function(){
		level = 0;
		score = 0;
		playerTurn = false;
		clearInterval(timer);
	  $("#play-window").css("display","none");
	  $("#start-window").css("display","block");
	});

	/* Click a game block. */
	$(".game-block").mousedown(function(){
		if (playersTurn) {
			var gameBlockID = '#' + this.id;
		    var highlightColor = $(this).css('border-color');
		    
		    // Animate the background-color
		    // Can be done using JQuery UI Color Plugin, but for now, use timeout
		    $(gameBlockID).css('background-color', $(gameBlockID).css('border-color'));
		    
		    // Animate back to white in 400ms
		    setTimeout(function() { $(gameBlockID).css('background-color', '#FFFFFF'); }, 400);
			
			// Compare
			if(numPlayerClicks == (level + 1)){
				userChoicesArray[numPlayerClicks] = gameBlockID
				comparePattern();
			}else{
				userChoicesArray[numPlayerClicks] = gameBlockID
				numPlayerClicks++;
			}
		}
	});
});

function displayPattern(){
	var i = 0;
	var randNumber;
	var gameBlockID;
	var color;
	numPlayerClicks = 0;
	patternArray = [];
	playersTurn = false;
	level = level + 1;
	$("#level").text(level + "/20")
	$("#score").text(score)

	timer = setInterval(function(){
		randNumber = Math.floor((Math.random() * 6) + 1);
		gameBlockID = "#game-block" + randNumber;
		patternArray[i] = gameBlockID;
		color = $(gameBlockID).css("border-color");
		$(gameBlockID).css("background-color", color);
		setTimeout(function(){
		  $(gameBlockID).css("background-color", "#FFF");
			i = i + 1;
			if(i == (level + 2)){
				clearInterval(timer);
				playersTurn = true;
				$("#comp-turn").css("display","none")
				$("#player-turn").css("display","block")
				return;
			}
		}, 800);
  }, 1000);
};

function comparePattern(){
	for(var j = 0; j < (level + 2); j++){
		if(userChoicesArray[j] != patternArray[j]){
			gameOver();
			return;
		}
	}
	nextLevel();
}

function nextLevel(){
	alert("Level up!");
	score = score + 1.5*level*1100

	$("#comp-turn").css("display","block")
	$("#player-turn").css("display","none")
	displayPattern();
}

function gameOver(){
	alert("Incorrect! You lose! Your score is " + score);
	level = 0;
	score = 0;
	playerTurn = false;

	$("#comp-turn").css("display","block")
	$("#player-turn").css("display","none")
  $("#play-window").css("display","none");
  $("#start-window").css("display","block");
}

