var level = 0;

$(document).ready(function(){  
	$("#start").click(function(){
	  $("#play-window").css("display","block");
	  $("#start-window").css("display","none");
	  displayPattern();
	});
});

function displayPattern(){
	var randNumber;
	var gameBlockID;
	level = level + 1;
	for (var i = 0; i < (level + 2); i++){
		randNumber = Math.floor((Math.random() * 6) + 1);
		gameBlockID = "#game-block" + randNumber;
		switch(randNumber)
		{
		case 1:
			$(gameBlockID).css("background-color", "#000");
			break;
		case 2:
			$(gameBlockID).css("background-color", "#000");
			break;
		case 3:
			$(gameBlockID).css("background-color", "#000");
			break;
		case 4:
			$(gameBlockID).css("background-color", "#000");
			break;
		case 5:
			$(gameBlockID).css("background-color", "#000");
			break;
		case 6:
			$(gameBlockID).css("background-color", "#000");
			break;
		}
		setTimeout(function(){$(gameBlockID).css("background-color", "#FFF")},3000);
	};
};
