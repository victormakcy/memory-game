var level = 0;
var playersTurn = false;
var timer
var patternArray = [];
var userChoicesArray = [];
var numPlayerClicks = 0;

$(document).ready(function(){  
	$("#start").click(function(){
	  $("#play-window").css("display","block");
	  $("#start-window").css("display","none");
	  level = 0;
	  displayPattern();
	});

	$("#quit").click(function(){
		level = 0;
		playerTurn = false;
		clearInterval(timer);
	  $("#play-window").css("display","none");
	  $("#start-window").css("display","block");
	});

	$(".game-block").mousedown(function(){
		if (playersTurn == false){
			alert("not your turn");
		}else{
			$(this).css("background-color", $(this).css("border-color"));
		}
	});

	$(".game-block").mouseup(function(){
		if(playersTurn == true){
			$(this).css("background-color", "#FFF"); 
			if(numPlayerClicks == (level + 1)){
				userChoicesArray[numPlayerClicks] = "#" + this.id
				comparePattern();
			}else{
				userChoicesArray[numPlayerClicks] = "#" + this.id
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
	level = level + 1;
	patternArray = [];
	playerTurn = false;
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
				console.log(patternArray);
				clearInterval(timer);
				playersTurn = true;
				return;
			}
		}, 2000);
  }, 2500);
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
	alert("level up!");
	displayPattern();
}

function gameOver(){
	alert("u lose!");
	level = 0;
	playerTurn = false;
  $("#play-window").css("display","none");
  $("#start-window").css("display","block");
}

