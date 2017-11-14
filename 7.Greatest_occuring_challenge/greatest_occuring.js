/*
1. Declare an array with the following data 4, 6, 8, 3, 4, 7, 8, 2, 4
2. Next, use a strategy of your choice to console.log the number that†occurs†most†( in
this case 4 ).
*/

var arrNumbers = [4, 6, 8, 3, 4, 7, 8, 2, 4];

function findOccur() {
	var maxOccur = 1;
	var counter = 0;
	var occurElement;
	for (var i = 0; i < arrNumbers.length; i++) {
  		for (var j = i; j < arrNumbers.length; j++) {
    		if (arrNumbers[i] == arrNumbers[j]) {counter = counter+1;}
    		if (maxOccur < counter) {
      			maxOccur = counter;
      			occurElement = arrNumbers[i];
    		}
  		}
  		counter = 0;
	}

  	console.log('The most frequent number in the row is ' +occurElement+ '.');
}

findOccur();



