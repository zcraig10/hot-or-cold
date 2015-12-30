


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    
    $input = $('#userGuess');



    /*--- Start a new game ---*/
    $("#newButton").click(function(){
      newGame();
    });

    /*--- Take in the user's guess and store it in the guessList ---*/
    $("#guessButton").click(function(){
      var boxValue = parseInt($("#userGuess").val());
      if (isValidGuess(boxValue)) {
        feedback(boxValue);
        increaseCount();
        pastGuesses.push(boxValue);
      }
      afterGuess();
    });

    newGame();
});

  var pastGuesses = [];
  var secretNumber = 0;
  var numGuesses = 0;
 	function newGame() {
  		secretNumber = getRandomNumber(0, 100);
      numGuesses = 0; 
      pastGuesses = [];
      $('#userGuess').val('');
      $('#count').text(numGuesses);
      $('#feedback').text('Make your Guess!');
      $('#guessList').text('');
      $('#guessButton').prop('disabled', false);
  	}

  function getRandomNumber(min, max) { 
      return Math.floor(Math.random() * (max - min)) + min; 
    }



  function feedback(boxValue) {
    console.log(boxValue);
    console.log(secretNumber);
    $('#guessList').append('<li>'+boxValue+'</li> ')
      if (secretNumber == boxValue) {
        winner();
      }
      else if (Math.abs(secretNumber - boxValue) < 10) {
        $('#feedback').text("Hot");
      }
      else if (Math.abs(secretNumber - boxValue) < 20 && Math.abs(secretNumber - boxValue) > 9) {
        $('#feedback').text('Kinda hot');
      } 
      else if (Math.abs(secretNumber - boxValue) < 30 && Math.abs(secretNumber - boxValue) > 19) {
        $('#feedback').text('Less than warm');
      }
      else {
        $('#feedback').text('Cold');
      }
  }

  function winner() {
    $('#feedback').text('You won! Click new game to play again')
      $('#guessButton').prop('disabled', true);
  }


  function increaseCount() {
    numGuesses++;
    $('#count').text(numGuesses);
  }

  function afterGuess() {
    $('#userGuess').val('');
  }

  function isValidGuess(boxValue) {
      if(isNaN(boxValue)) {
        alert('Please input a number');
        return false;
      }
      if(boxValue < 0 || boxValue > 100) {
        alert('Please choose a number between 0 and 100');
        return false;
      }
      if(pastGuesses.indexOf(boxValue) > -1) {
        alert('You already guessed this number');
        return false;
      } 

      return true;
    }


