var randomNum = Math.floor(Math.random() * (6 - 1)) + 1;

function guess(num) {
	var guesses = 0;
  	while(num !== randomNum) {
	    console.log('Keep guessing');
	    guesses++;
	    num++;
	}
	guesses++;
	console.log('You guessed the random number from '+ guesses +' guesses!');
	count = 0;
}

guess(0);



