var arrayBowl = ["jelly-bean", "m&m", "m&m","chocolate", "m&m", "jelly-bean", "m&m", "m&m", "jelly-bean"];

var jbOccur = 0;
var mOccur = 0;
var chocOccur = 0;


function occurence () {
	for (var i = 0; i < arrayBowl.length; i++) { 
		if (arrayBowl[i]=="jelly-bean"){ 
			jbOccur++;
			continue;
	    } 


	    if (arrayBowl[i]=="m&m"){ 
			mOccur++;
			continue;
	    }



	    if (arrayBowl[i]=="chocolate"){ 
			chocOccur++;
			continue;
	    }
	}

    console.log ("jbOccur = "+jbOccur, "mOccur = "+mOccur, "chocOccur = "+chocOccur);
}




occurence();

