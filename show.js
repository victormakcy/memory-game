var level = 0;
var playersTurn = false;
var timer

$(document).ready(function(){  
	$("#start").click(function(){
	  $("#play-window").css("display","block");
	  $("#start-window").css("display","none");
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
		}
	});
});

function displayPattern(){
	var i = 0;
	var randNumber;
	var gameBlockID;
	var color;
	level = level + 1;
	timer = setInterval(function(){
		randNumber = Math.floor((Math.random() * 6) + 1);
		gameBlockID = "#game-block" + randNumber;
		color = $(gameBlockID).css("border-color");
		$(gameBlockID).css("background-color", color);

		setTimeout(function(){
		  $(gameBlockID).css("background-color", "#FFF");
			i = i + 1;
			if(i == (level + 2)){
				clearInterval(timer);
				playersTurn = true;
				return;
			}
		}, 2000);
  }, 2500);
};

function comparePattern(){

}

function nextLevel(){

}

function gameOver(){

}

