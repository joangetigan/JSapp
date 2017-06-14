document.getElementById('start').onclick = function() {
	document.getElementById('guess1').style.display = "none";
	document.getElementById('guess2').style.display = "none";
	document.getElementById('guess3').style.display = "none";
	document.getElementById('guess4').style.display = "none";
}


document.getElementById('give_up').onclick = function() {
	document.getElementById('guess1').style.display = "inline-block";
	document.getElementById('guess2').style.display = "inline-block";
	document.getElementById('guess3').style.display = "inline-block";
	document.getElementById('guess4').style.display = "inline-block";
}


document.getElementById('check').onclick = function() {
	var one = document.getElementById('guess1').value;
	var two = document.getElementById('guess2').value;
	var three = document.getElementById('guess3').value;
	var four = document.getElementById('guess4').value;

	var input1 = document.getElementById('ans1').value;
	var input2 = document.getElementById('ans2').value;
	var input3 = document.getElementById('ans3').value;
	var input4 = document.getElementById('ans4').value;

	var counter = 0;
	if (one==input1) {
		counter++;
	}
	if (two==input2) {
		counter++;
	}
	if (three==input3) {
		counter++;
	}
	if (four==input4) {
		counter++;
	}

	if(counter==4) {
		document.getElementById('correct4').style.display = "block";
	} else if(counter==3) {
		document.getElementById('correct3').style.display = "block";
	} else if(counter==2) {
		document.getElementById('correct2').style.display = "block";
	} else if(counter==1) {
		document.getElementById('correct1').style.display = "block";
	} else {
		document.getElementById('wrong').style.display = "block";
	}

	document.getElementById('try').style.display = "block";
	document.getElementById('check').style.display = "none";
	document.getElementById('record').innerHTML = input1+input2+input3+input4;
}


document.getElementById('try').onclick = function() {
	document.getElementById('try').style.display = "none";
	document.getElementById('check').style.display = "block";
	document.getElementById('ans1').value = '';
	document.getElementById('ans2').value = '';
	document.getElementById('ans3').value = '';
	document.getElementById('ans4').value = '';
	document.getElementById('wrong').style.display = "none";
	document.getElementById('correct1').style.display = "none";
	document.getElementById('correct2').style.display = "none";
	document.getElementById('correct3').style.display = "none";
	document.getElementById('correct4').style.display = "none";

	var input1 = document.getElementById('ans1').value;
	var input2 = document.getElementById('ans2').value;
	var input3 = document.getElementById('ans3').value;
	var input4 = document.getElementById('ans4').value;

	var counter = 0;
	if (one==input1) {
		counter++;
	}
	if (two==input2) {
		counter++;
	}
	if (three==input3) {
		counter++;
	}
	if (four==input4) {
		counter++;
	}

	if(counter==4) {
		document.getElementById('correct4').style.display = "block";
	} else if(counter==3) {
		document.getElementById('correct3').style.display = "block";
	} else if(counter==2) {
		document.getElementById('correct2').style.display = "block";
	} else if(counter==1) {
		document.getElementById('correct1').style.display = "block";
	} else {
		document.getElementById('wrong').style.display = "block";
	}
}

