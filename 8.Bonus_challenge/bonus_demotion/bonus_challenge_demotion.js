var clerks = ["Bob", "John", "Ran", "Mark"];
var managers = ["Anna", "Michael", "Tom"];
var ceo = ["Ruth"];

function demotion(name) {

	for (var i=0; i<clerks.length; i++) {

		if(clerks[i] === name) {

		    console.log(''+ name +' is already on the lowest position. Enough!');

		    return;
		} 
	}

	for (var i=0; i<managers.length; i++) {

		if(managers[i] === name) {

		    clerks.push(name);

		    managers = managers.filter(function(item) {
		    	return item !== name;
		    });

		    console.log(''+ name +' was demoted to clerks...');

		    return;
		} else {
			
				if (name = ceo[0]) {

					managers.push(name);

					ceo.pop();

					console.log(''+ name +' was demoted to managers...')
					return;
			    }	
			}

	}
}

demotion("Bob");
console.log(clerks);
console.log(managers);
console.log(ceo);

demotion("Anna");
console.log(clerks);
console.log(managers);
console.log(ceo);

demotion("Ruth");
console.log(clerks);
console.log(managers);
console.log(ceo);