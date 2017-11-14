var clerks = ["Bob", "John", "Ran", "Mark"];
var managers = ["Anna", "Michael", "Tom"];
var ceo = ["Ruth"];

function promotion(name) {

	for (var i=0; i<clerks.length; i++) {

		if(clerks[i] === name) {
		    managers.push(name);

		    clerks = clerks.filter(function(item) {
		    	return item !== name;
		    });

		    console.log(''+ name +' was promoted to a manager!');

		    return;
		} 
	}

	for (var i=0; i<managers.length; i++) {

		if(managers[i] === name) {

		    ceo.push(name);

		    console.log('CEO '+ ceo[0] +' mooved to another company!');

		    managers = managers.filter(function(item) {
		    	return item !== name;
		    });

		    ceo = ceo.filter(function(item) {
		    	return item === name;
		    });

		    console.log(''+ name +' was promoted to a CEO!!!');

		    return;
		} else {
			
			if (name = ceo[0]) {
				console.log(''+ name +' is already on the highest position. Enough!')
				return;
			}
		}

	}
}

promotion("Bob");
console.log(clerks);
console.log(managers);
console.log(ceo);

promotion("Anna");
console.log(clerks);
console.log(managers);
console.log(ceo);

promotion("Anna");
console.log(clerks);
console.log(managers);
console.log(ceo);
