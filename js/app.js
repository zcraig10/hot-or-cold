
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

/* 	function newGame(click) {
  		var reload = window.location.reload();
  		reload(onClick);
  	}

  	newGame(.new);

  	function secretNumber(number){
  		var randomNumber = Math.floor(Math.random()*101);
  	}

  	secretNumber(randomNumber); */


  	/* Objectives:

  	- make clicking new game start the game over
  	- when the page loads, it generates a secret, random number from 0 to 100
  	- when the user guesses a number in that range, it tells them if they are hot or cold
  	- tell the user how many guesses they have taken and what numbers they have guessed
    
  	*/

