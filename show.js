var level = 0;
var score = 0;
var playersTurn = false;
var timer;
var patternArray = [];
var userChoicesArray = [];
var numPlayerClicks = 0;
var clickedBlock;

$(document).ready(function(){  
	$("#start").click(function(){
	  $("#play-window").css("display","block");
	  $("#start-window").css("display","none");
	  level = 0;
	  displayPattern();
	});

	$("#quit").click(function(){
		level = 0;
		score = 0;
		playerTurn = false;
		clearInterval(timer);
	  $("#play-window").css("display","none");
	  $("#start-window").css("display","block");
	});

	$(".game-block").mousedown(function(){
		if (playersTurn == false){
			alert("It is not your turn!");
		}else{
			$(this).css("background-color", $(this).css("border-color"));
			clickedBlock = this;
		}
	});

	$(document).mouseup(function(){
		if(playersTurn == true){
			$(clickedBlock).css("background-color", "#FFF"); 
			if(numPlayerClicks == (level + 1)){
				userChoicesArray[numPlayerClicks] = "#" + clickedBlock.id
				comparePattern();
			}else{
				userChoicesArray[numPlayerClicks] = "#" + clickedBlock.id
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
	playerTurn = false;
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
	clickedBlock = null;
	$("#comp-turn").css("display","block")
	$("#player-turn").css("display","none")
	displayPattern();
}

function gameOver(){
	alert("Incorrect! You lose! Your score is " + score);
	level = 0;
	score = 0;
	playerTurn = false;
	clickedBlock = null;
	$("#comp-turn").css("display","block")
	$("#player-turn").css("display","none")
  $("#play-window").css("display","none");
  $("#start-window").css("display","block");
}

