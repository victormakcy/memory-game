var level = 0;

$(document).ready(function(){  
	$("#start").click(function(){
	  $("#play-window").css("display","block");
	  $("#start-window").css("display","none");
	  displayPattern();
	});
});

function displayPattern(){
	var i = 0;
	var randNumber;
	var gameBlockID;
	var color;
	level = level + 1;
	var timer = setInterval(function(){
		randNumber = Math.floor((Math.random() * 6) + 1);
		gameBlockID = "#game-block" + randNumber;
		color = $(gameBlockID).css("border-color");
		$(gameBlockID).css("background-color", color);

		setTimeout(function(){
		  $(gameBlockID).css("background-color", "#FFF");
			i = i + 1;
			if(i == (level + 2)){
				console.log("end");
				clearInterval(timer);
				return;
			}
		}, 2000);
  }, 2500);
};