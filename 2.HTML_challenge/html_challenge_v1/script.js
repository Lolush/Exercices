window.onload = function(){
	var input = document.getElementById("input");
	function inputChange() {
		document.getElementById("headline").innerHTML = input.value;
	}
	input.addEventListener("change", inputChange); 
}

//V1 print after quiting typing window of form 